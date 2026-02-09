import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Add Link for navigation
import Layout from "../Layout";
import axiosInstance from "../../axios";
import { Helmet } from "react-helmet";
import { slugify } from "../../../slugify";

const categories = ["Design", "Development", "Technology", "Tips", "News"];

// UI Components
const Card = ({ children, className }) => (
  <div className={`bg-white rounded-lg ${className}`}>{children}</div>
);

const CardContent = ({ children, className }) => (
  <div className={className}>{children}</div>
);

const Button = ({ children, className, to, state }) => (
  <Link to={to} state={state}>
    <button className={`px-4 py-2 rounded ${className}`}>{children}</button>
  </Link>
);

const Input = ({ placeholder, className }) => (
  <input
    type="text"
    placeholder={placeholder}
    className={`w-full px-3 py-2 border rounded ${className}`}
  />
);

const Search = ({ className }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z"
    />
  </svg>
);

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchBlogs = async () => {
    try {
      const response = await axiosInstance.get("get_blog.php");
      setBlogs(response.data.data || []);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching blogs:", error);
      setError("Failed to load blogs. Please try again later.");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  if (loading) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-10">
          <p className="text-gray-600">Loading...</p>
        </div>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-10">
          <p className="text-red-600">{error}</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <Helmet>
        <title>
          Latest Digital transformation, Web & Mobile Technology Blog |
          Infomagine
        </title>
        <meta
          name="description"
          content="Stay updated with the latest IT industry trends on Infomagine Softwares’ tech blog. We offer full-service software development tailored to your needs."
        />
        <link rel="canonical" href="https://infomagine.in/blogs"></link>
      </Helmet>
      <div className="flex flex-col mb-40 mt-30 md:mt-0 gap-20">
        <div className="p-6 grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Blog Cards */}
          <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {blogs.slice(0, 6).map((blog, index) => (
              <Card key={index} className="overflow-hidden shadow-md">
                <div className="relative">
                  <img
                    src={blog.image}
                    alt={blog.blog_title}
                    className="w-full h-68 object-cover"
                  />
                  <span className="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
                    {blog.category}
                  </span>
                </div>
                <CardContent className="p-4">
                  <p className="text-sm text-gray-500 mb-2">
                    Infomagine /{" "}
                    {new Date(blog.created_at).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </p>
                  <h2 className="text-lg font-semibold mb-4">
                    {blog.blog_title.length > 80
                      ? blog.blog_title.slice(0, 80) + "..."
                      : blog.blog_title}
                  </h2>
                  <a
                    href={`/blog/${slugify(blog.blog_title)}`}
                    state={{ blog }}
                    className="bg-red-600 hover:bg-red-700 text-white p-2 rounded-md"
                  >
                    Read More +
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Sidebar */}
          <div className="md:col-span-1 space-y-6">
            {/* Search Bar */}
            <div className="relative">
              <Input placeholder="Search Here" className="pr-10" />
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-red-600 w-5 h-5" />
            </div>

            {/* Categories */}
            <div className="border rounded-lg p-4 shadow-sm">
              <h3 className="text-lg font-bold mb-4 border-b pb-2 relative">
                Categories
              </h3>
              <ul className="space-y-2">
                {categories.map((cat, i) => (
                  <li
                    key={i}
                    className="text-gray-700 hover:text-red-600 cursor-pointer"
                  >
                    {cat}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Blog;
