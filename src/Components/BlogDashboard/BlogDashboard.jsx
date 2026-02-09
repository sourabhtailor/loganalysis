import React, { useState, useEffect } from "react";
import Layout from "../Layout";
import { Helmet } from "react-helmet";
import axiosInstance from "../../axios";
import { toast } from "react-toastify";
import { FaEdit, FaTrash, FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

const BlogDashboard = () => {
  const [blogs, setBlogs] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [currentBlog, setCurrentBlog] = useState({ id: "", blog_title: "", image: "", content: "" });
  const [error, setError] = useState("");

  // Fetch blogs from API
  const fetchBlogs = async () => {
    try {
      const response = await axiosInstance.get("get_blog.php");
      setBlogs(response.data.data || []);
    } catch (error) {
      toast.error("Error fetching blogs: " + error.message);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentBlog({ ...currentBlog, [name]: value });
  };

  // Handle blog creation
  const handleCreateBlog = async (e) => {
    e.preventDefault();
    if (!currentBlog.blog_title || !currentBlog.content) {
      toast.error("Title and content are required.");
      return;
    }
    try {
      const response = await axiosInstance.post("create_blog.php", currentBlog);
      toast.success(response.data.message || "Blog created successfully!");
      setIsModalOpen(false);
      setCurrentBlog({ id: "", blog_title: "", image: "", content: "" });
      fetchBlogs();
    } catch (error) {
      toast.error("Error creating blog: " + (error.response?.data?.message || error.message));
    }
  };

  // Handle blog update
  const handleUpdateBlog = async (e) => {
    e.preventDefault();
    if (!currentBlog.blog_title || !currentBlog.content) {
      toast.error("Title and content are required.");
      return;
    }
    try {
      const response = await axiosInstance.post("update_blog.php", currentBlog);
      toast.success(response.data.message || "Blog updated successfully!");
      setIsModalOpen(false);
      setCurrentBlog({ id: "", blog_title: "", image: "", content: "" });
      setIsEditMode(false);
      fetchBlogs();
    } catch (error) {
      toast.error("Error updating blog: " + (error.response?.data?.message || error.message));
    }
  };

  // Handle blog deletion
  const handleDeleteBlog = async (id) => {
    if (window.confirm("Are you sure you want to delete this blog?")) {
      try {
        const response = await axiosInstance.post("delete_blog.php", { id });
        toast.success(response.data.message || "Blog deleted successfully!");
        fetchBlogs();
      } catch (error) {
        toast.error("Error deleting blog: " + (error.response?.data?.message || error.message));
      }
    }
  };

  // Open modal for creating or editing
  const openModal = (blog = { id: "", blog_title: "", image: "", content: "" }) => {
    setCurrentBlog(blog);
    setIsEditMode(!!blog.id);
    setIsModalOpen(true);
    setError("");
  };

  // Close modal
  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentBlog({ id: "", blog_title: "", image: "", content: "" });
    setIsEditMode(false);
    setError("");
  };

  return (
    <Layout>
      <Helmet>
        <title>Blog Dashboard | Infomagine Softwares</title>
        <meta
          name="description"
          content="Manage your blog posts with Infomagine's dashboard. Create, edit, and delete blogs to keep your content up-to-date."
        />
        <link rel="canonical" href="https://infomagine.in/dashboard" />
        <meta property="og:title" content="Blog Dashboard | Infomagine Softwares" />
        <meta
          property="og:description"
          content="Manage your blog posts with Infomagine's dashboard. Create, edit, and delete blogs to keep your content up-to-date."
        />
        <meta
          property="og:image"
          content="https://infomagine.in/assets/infomagine%20logo-BsvjEvw5.png"
        />
        <meta property="og:url" content="https://infomagine.in/dashboard" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Infomagine Softwares" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:country" content="US, UK, UAE, AU, NZ" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            mainEntityOfPage: "https://infomagine.in/dashboard",
            provider: {
              "@type": "Organization",
              name: "Infomagine Softwares",
              url: "https://infomagine.in/",
              logo: "https://infomagine.in/logo.png",
              sameAs: [
                "https://www.facebook.com/Infomaginesoftwares",
                "https://www.instagram.com/infomagine_softwares/",
                "https://www.linkedin.com/company/13313914/",
                "https://x.com/InfocoxSocial",
                "https://in.pinterest.com/infomaginesoftwares/",
              ],
            },
          })}
        </script>
      </Helmet>
      <div className="flex flex-col gap-20 mb-20">
        {/* Header Section */}
        <div className="w-full relative h-[35rem]" data-aos="fade-down">
          <div className="absolute inset-0 bg-[#030615] opacity-80"></div>
          <div className="absolute text-white top-[50%] left-[10%] transform -translate-y-1/2">
            <p className="text-5xl font-bold">Blog Dashboard</p>
            <div className="flex gap-2">
              <Link to={"/"}>Home</Link>
              {/* <p>></p> */}
              <p>Blog Dashboard</p>
            </div>
          </div>
        </div>

        {/* Blog Management Section */}
        <div className="flex flex-col md:flex-row gap-10 px-4 sm:px-6 md:px-10 lg:px-20">
          {/* Blog List */}
          <div className="md:w-1/2 space-y-6">
            <h4 className="text-[#FF3C00] font-semibold uppercase">Blog Management</h4>
            <h2 className="text-3xl font-bold">Manage Your Blogs</h2>
            <hr className="border-2 border-[#FF3C00] w-20" />
            <p className="text-gray-600">
              Easily create, edit, or delete blog posts to keep your content fresh and engaging. Use the tools below to manage your blog content effectively.
            </p>
            <button
              onClick={() => openModal()}
              className="bg-[#FF3C00] text-white py-3 px-6 rounded hover:bg-red-700 transition flex items-center gap-2"
            >
              <FaPlus /> Add New Blog
            </button>
            <div className="space-y-4">
              {blogs.map((blog) => (
                <div
                  key={blog.id}
                  className="bg-white p-4 rounded-md shadow-md flex items-center gap-4"
                >
                  <img
                    src={blog.image}
                    alt={blog.blog_title}
                    className="w-24 h-24 object-cover rounded"
                  />
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold">{blog.blog_title}</h3>
                    <p className="text-gray-600 text-sm">
                      {blog.content.length > 50 ? blog.content.slice(0, 50) + "..." : blog.content}
                    </p>
                    <div className="flex gap-2 mt-2">
                      <button
                        onClick={() => openModal(blog)}
                        className="text-[#FF3C00] hover:text-red-700 flex items-center gap-2"
                      >
                        <FaEdit /> Edit
                      </button>
                      <button
                        onClick={() => handleDeleteBlog(blog.id)}
                        className="text-red-500 hover:text-red-700 flex items-center gap-2"
                      >
                        <FaTrash /> Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Blog Form (Modal) */}
          {isModalOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
              <div className="md:w-1/2 bg-[#F4F7FC] p-6 rounded-md space-y-6">
                <h4 className="text-[#FF3C00] font-semibold uppercase">
                  {isEditMode ? "Edit Blog" : "Create Blog"}
                </h4>
                <h2 className="text-3xl font-bold">{isEditMode ? "Update Blog Post" : "Add New Blog Post"}</h2>
                <hr className="border-2 border-[#FF3C00] w-20" />
                <form onSubmit={isEditMode ? handleUpdateBlog : handleCreateBlog} className="space-y-4">
                  <input
                    required
                    type="text"
                    name="blog_title"
                    placeholder="Blog Title"
                    className="w-full p-3 border bg-white border-gray-300 rounded"
                    value={currentBlog.blog_title}
                    onChange={handleInputChange}
                  />
                  <input
                    type="text"
                    name="image"
                    placeholder="Image URL"
                    className="w-full p-3 border bg-white border-gray-300 rounded"
                    value={currentBlog.image}
                    onChange={handleInputChange}
                  />
                  <textarea
                    required
                    rows="4"
                    name="content"
                    placeholder="Blog Content"
                    className="w-full p-3 border bg-white border-gray-300 rounded"
                    value={currentBlog.content}
                    onChange={handleInputChange}
                  ></textarea>
                  <div className="flex justify-end gap-4">
                    <button
                      type="button"
                      onClick={closeModal}
                      className="bg-gray-300 text-black py-3 px-6 rounded hover:bg-gray-400 transition"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="bg-[#FF3C00] text-white py-3 px-6 rounded hover:bg-red-700 transition"
                    >
                      {isEditMode ? "Update Blog" : "Create Blog"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default BlogDashboard;