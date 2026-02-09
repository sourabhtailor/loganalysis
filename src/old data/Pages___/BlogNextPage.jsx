import React, { useState, useEffect } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import Layout from "./Layout";
import { slugify } from "../../slugify";
import axiosInstance from "../axios";
import { decode } from "html-entities";
import { Helmet } from "react-helmet";

const stripHtml = (html) => {
  if (!html) return "";
  try {
    const decodedHtml = decode(html);
    const div = document.createElement("div");
    div.innerHTML = decodedHtml;
    return div.textContent || div.innerText || "";
  } catch (error) {
    console.error("Error processing HTML:", error);
    return "";
  }
};

const handleDateChange = (date) => {
  try {
    return new Date(date).toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  } catch {
    return "Invalid Date";
  }
};

function BlogNextPage() {
  const { slug } = useParams();
  const location = useLocation();
  const { state } = location;
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // New state for search input
  const [searchTerm, setSearchTerm] = useState("");

  const fetchBlogs = async () => {
    try {
      const response = await axiosInstance.get("get_blog.php");
      if (response.data.success && Array.isArray(response.data.data)) {
        setBlogs(response.data.data);
      } else {
        setBlogs([]);
        setError("Invalid data received from the server.");
      }
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

  const blog = state?.blog || blogs.find((b) => slugify(b.blog_title) === slug);

  if (!blog && !loading) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-10">
          <h2 className="text-2xl font-bold text-gray-800">Blog Not Found</h2>
          <p className="text-gray-600">
            The blog with slug "{slug}" could not be found.
          </p>
        </div>
      </Layout>
    );
  }

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

  const content = stripHtml(blog.editor_data);

  // Filter blogs by search term (case insensitive)
  const filteredBlogs = blogs.filter((item) =>
    item.blog_title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Layout>
      <Helmet>
        <title>{blog.meta_title}</title>
        <meta name="description" content={blog.meta_description} />
        <link rel="canonical" href={`/blog/${slugify(blog.blog_title)}`} />
        <meta property="og:title" content={blog.meta_title} />
        <meta property="og:description" content={blog.meta_description} />
        <meta property="og:image" content={blog.image} />
        <meta property="og:url" content={`/blog/${slugify(blog.blog_title)}`} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Infomagine Softwares" />
        <meta property="og:locale" content="en_US" />
      </Helmet>
      <div className="bg-gray-100 py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Blog Content */}
            <div className="lg:w-2/3 w-full">
              <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="w-full">
                  <img
                    src={blog.image}
                    alt={blog.blog_title}
                    width={730}
                    height={500}
                    className="w-full h-[500px] object-contain"
                    fetchPriority="high"
                    decoding="async"
                  />
                </div>
                <div className="p-6">
                  <h1 className="text-3xl font-bold text-gray-800 mb-4">
                    {blog.blog_title}
                  </h1>
                  <div className="flex items-center text-sm text-gray-600 mb-6">
                    <span>Infomagine</span>
                    <span className="mx-2">/</span>
                    <span>{handleDateChange(blog.created_at)}</span>
                  </div>
                  <div
                    className="prose lg:prose-xl max-w-none text-gray-800 mb-6 single-blog-content"
                    dangerouslySetInnerHTML={{
                      __html: decode(blog.editor_data),
                    }}
                  ></div>
                  <div className="mt-6">{/* Social Icons */}</div>
                </div>
                <div className="p-6" id={`comment-${blog.id}`}></div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/3 w-full">
              <div className="space-y-6">
                {/* Search Input */}
                <div className="bg-white shadow-lg rounded-lg p-6">
                  <div className="relative mb-4">
                    <input
                      type="text"
                      placeholder="Search Here"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full border border-gray-300 rounded-md py-2 px-4 pr-10 focus:outline-none focus:ring-2 focus:ring-red-600"
                    />
                    <svg
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-red-600 w-5 h-5 pointer-events-none"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1110.5 3a7.5 7.5 0 016.15 13.65z"
                      ></path>
                    </svg>
                  </div>

                  {/* Recent Posts */}
                  <h2 className="text-xl font-semibold text-gray-800 mb-4">
                    Recent Posts
                  </h2>
                  {filteredBlogs.length > 0 ? (
                    filteredBlogs.slice(0, 3).map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center mb-4 last:mb-0"
                      >
                        <div className="w-20 h-14 mr-4">
                          <Link
                            to={`/blog/${slugify(item.blog_title)}`}
                            state={{ blog: item }}
                          >
                            <img
                              src={item.image}
                              alt={item.blog_title}
                              width={80}
                              height={55}
                              className="w-full h-full object-cover rounded"
                              loading="lazy"
                              decoding="async"
                            />
                          </Link>
                        </div>
                        <div>
                          <h4 className="text-base font-medium text-gray-800">
                            <Link
                              to={`/blog/${slugify(item.blog_title)}`}
                              state={{ blog: item }}
                              className="hover:text-[#FF3C00] transition-colors"
                            >
                              {item.blog_title.length > 50
                                ? item.blog_title.slice(0, 50) + "..."
                                : item.blog_title}
                            </Link>
                          </h4>
                          <span className="text-sm text-gray-600">
                            {handleDateChange(item.created_at)}
                          </span>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p className="text-gray-600">No Blog Found.</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default BlogNextPage;
