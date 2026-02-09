import React, { useEffect, useState } from "react";
import Blogimg1 from "../../assets/Blog -1.jpg";
import Blogimg2 from "../../assets/Blog-2.jpg";
import logo from "../../assets/main-logo.png";
import subscribebg from "../../assets/subscribebg.jpg";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import axiosInstance from "../../axios";
import { toast } from "react-toastify";
import { FaInstagram } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa";
import { slugify } from "../../../slugify";
import { GrLocation } from "react-icons/gr";
import { LuMail } from "react-icons/lu";
import { FiPhone } from "react-icons/fi";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handlesubmit = async (e) => {
    e.preventDefault();
    const formdata = new FormData();
    formdata.append("email", email);
    const response = await axiosInstance.post("subscribe.php", formdata);
    if (response.status === 200) {
      toast.success(response.data.message);
      setEmail("");
    } else {
      toast.error("Something went wrong");
    }
  };

  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = async () => {
    try {
      const response = await axiosInstance.get("get_blog.php");
      setBlogs(response.data.data);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <>
      <div className="bg-[#030615] flex flex-col  px-6 md:px-10 lg:px-20 justify-center site-footer">
        {/* <form onSubmit={handlesubmit} className="w-full">
          <div
            style={{ backgroundImage: `url(${subscribebg})` }}
            className="bg-[#FF3C00] bg-contain bg-center rounded-sm px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-6 w-full h-auto py-6"
          >
            <span className="text-2xl md:text-3xl text-white font-bold text-center">
              Subscribe to our Newsletter
            </span>
            <div className="bg-white relative w-[100%] md:w-[30rem] flex rounded-3xl p-2">
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex  px-3 py-3 focus:outline-none"
                placeholder="Enter your Email"
                type="text"
              />
              <button
                className="bg-[#FF3C00] absolute right-4 top-3 text-white px-4 py-2 rounded-3xl"
                type="submit"
              >
                Subscribe
              </button>
            </div>
          </div>
        </form> */}

        {/* Blogs Section */}

        <div className="w-full flex flex-col pt-7 items-start">
          <img src={logo} alt="Infomagine Logo" className="w-25" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-white mt-5 w-full">
          {/* About Us */}
          <div className="flex flex-col gap-6">
            <h3 className="text-2xl font-bold">About Us</h3>
            <p className="text-sm leading-relaxed">
              Leading software development and IT firm Infomagine offers clients
              all around the world cutting-edge solutions...
            </p>
            <div className="flex gap-2">
              {[
                {
                  icon: <FaFacebookF />,
                  link: "https://www.facebook.com/Infomaginesoftwares",
                },
                {
                  icon: <FaInstagram />,
                  link: "https://www.instagram.com/infomagine_softwares/",
                },
                {
                  icon: <FaPinterest />,
                  link: "https://in.pinterest.com/infomaginesoftwares/",
                },
                {
                  icon: <FaLinkedin />,
                  link: "https://www.linkedin.com/company/13313914/admin/dashboard/",
                },
                {
                  icon: <FaXTwitter />,
                  link: "https://x.com/i/flow/login?redirect_after_login=%2FInfocoxSocial",
                },
              ].map(({ icon, link }, idx) => (
                <a
                  key={idx}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#FF3C00] p-2 rounded-full hover:bg-white transition-colors duration-200"
                >
                  {React.cloneElement(icon, {
                    className: "hover:text-[#FF3C00]",
                  })}
                </a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div className="flex flex-col gap-6">
            <h3 className="text-2xl font-bold">Company</h3>
            <ul className="space-y-2">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about-us" },
                { name: "Contact Us", path: "/contact-us" },
                { name: "Hire Developer", path: "/hire-developer" },
                { name: "Career", path: "/career" },
                { name: "Blog", path: "/blogs" },
              ].map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.path}
                    className="hover:text-[#FF3C00] transition"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="flex flex-col gap-6">
            <h3 className="text-2xl font-bold">Services</h3>
            <ul className="space-y-2">
              {[
                { name: "Custom Software", path: "/services/custom-software" },
                { name: "Full Stack Development", path: "/services/full-stack-development" },
                { name: "Digital Marketing", path: "/services/digital-marketing" },
                { name: "Flutter", path: "/services/flutter" },
                { name: "Content Management System", path: "/services/Content-management-system" },
                { name: "Laravel", path: "/services/laravel" },
              ].map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.path}
                    className="hover:text-[#FF3C00] transition"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}

          <div className="flex flex-col gap-4">
            <h3 className="text-2xl font-bold">Contact Us</h3>

            {/* Address */}
            <div className="flex items-center gap-2">
              <div className="text-[#FF3C00] text-2xl">
                <GrLocation />
              </div>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Mansarovar+Plaza,+520,+Madhyam+Marg,+Mansarovar+Sector+7,+Agarwal+Farm,+Sector+9,+Mansarovar,+Jaipur,+Rajasthan+302020"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hover:text-[#FF3C00] transition"
              >
                520, Mansarovar Plaza, Madhyam Marg, Mansarovar, Jaipur-302020
              </a>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-2">
              <div className="text-[#FF3C00] text-2xl">
                <FiPhone />
              </div>
              <a
                href="tel:+919468629248"
                className="text-sm hover:text-[#FF3C00] transition"
              >
                +91 94686 29248
              </a>
            </div>

            {/* Email */}
            <div className="flex items-center gap-2">
              <div className="text-[#FF3C00] text-2xl">
                <LuMail />
              </div>
              <a
                href="mailto:hi@infomagine.in"
                className="text-sm hover:text-[#FF3C00] transition"
              >
                hi@infomagine.in
              </a>
            </div>
          </div>
        </div>
        {/* Footer Bottom */}
        <span className="text-white text-sm text-center mb-5 mt-4 md:text-right">
            © 2025 Infomagine. All rights reserved.
        </span>
      </div>
    </>
  );
};

export default Footer;
