import React from "react";
import Navbar2 from "../Components/navbar/Navbar2";
import Footer from "../Components/footer/Footer";
import { Link } from "react-router-dom";
import headerwordpress from "../assets/headerwordpress.jpg";
import multiplatform from "../assets/multiplatform.png"; // You can replace icons for services if needed
import development from "../assets/development.png";
import performance from "../assets/performance.png";
import growth from "../assets/growth.png";
import officebuilding from "../assets/office-building.png";
import WearableApplicationDevelopment from "../assets/WearableApplicationDevelopment.png";

import {
  FaMobileAlt,
  FaSearch,
  FaCogs,
  FaPaintBrush,
  FaShieldAlt,
  FaMoneyBillWave,
  FaCode,
  FaPalette,
  FaFileImage,
  FaPlug,
  FaShoppingCart,
  FaLifeRing,
  FaUsers,
  FaRocket,
  FaHandshake,
  FaLightbulb,
} from "react-icons/fa";
import { HeartPulse, Car, BookText, Store } from "lucide-react";
import { RiMoneyRupeeCircleLine } from "react-icons/ri";
import { MdOutlineRealEstateAgent } from "react-icons/md";

// Updated Benefits Section
const benefits = [
  {
    icon: <FaMobileAlt className="text-[#FF3C00] text-5xl border border-[#FF3C00] p-2 rounded-full" />,
    title: "Mobile Responsive by Design",
    desc: "Your website will look and work flawlessly on every device—smartphones, tablets, and desktops—ensuring a smooth user experience that keeps visitors engaged no matter how they browse.",
  },
  {
    icon: <FaSearch className="text-[#FF3C00] text-5xl border border-[#FF3C00] p-2 rounded-full" />,
    title: "Search Engine Friendly Structure",
    desc: "WordPress comes with SEO-friendly architecture, making it easier for search engines to find and rank your site. Combined with our optimization expertise, your content gets maximum visibility.",
  },
  {
    icon: <FaCogs className="text-[#FF3C00] text-5xl border border-[#FF3C00] p-2 rounded-full" />,
    title: "Power-Packed CMS Features",
    desc: "Enjoy a robust content management system that allows you to add, edit, and manage pages, posts, media, and products with ease—no coding skills required.",
  },
  {
    icon: <FaPaintBrush className="text-[#FF3C00] text-5xl border border-[#FF3C00] p-2 rounded-full" />,
    title: "Highly Customizable Designs",
    desc: "From layout to functionality, every element is tailored to your brand’s identity and business needs, ensuring your website stands out in the crowd.",
  },
  {
    icon: <FaShieldAlt className="text-[#FF3C00] text-5xl border border-[#FF3C00] p-2 rounded-full" />,
    title: "Secure & Scalable",
    desc: "Our WordPress solutions are built with strong security measures and can easily adapt as your business grows, whether you’re adding new pages, features, or products.",
  },
  {
    icon: <FaMoneyBillWave className="text-[#FF3C00] text-5xl border border-[#FF3C00] p-2 rounded-full" />,
    title: "Cost-Effective & Time-Efficient",
    desc: "With ready-to-use frameworks, plugins, and our development expertise, you get a high-quality website in less time and at a fraction of the cost of custom-coded solutions.",
  },
];

// Updated Services Section
const services = [
  {
    icon: <FaCode className="text-[#FF5722] text-5xl border border-[#FF5722] p-2 rounded-full" />,
    title: "Custom Web Development",
    desc: "We create tailor-made WordPress websites designed to meet your specific business requirements, ensuring a perfect blend of creativity, functionality, and performance.",
  },
  {
    icon: <FaPalette className="text-[#FF5722] text-5xl border border-[#FF5722] p-2 rounded-full" />,
    title: "Theme Creation",
    desc: "Our designers develop visually stunning, fast-loading, and fully responsive WordPress themes that reflect your brand identity while delivering a seamless user experience.",
  },
  {
    icon: <FaFileImage className="text-[#FF5722] text-5xl border border-[#FF5722] p-2 rounded-full" />,
    title: "PSD to WordPress",
    desc: "We transform your PSD designs into pixel-perfect, responsive, and dynamic WordPress websites while retaining design integrity and enhancing performance.",
  },
  {
    icon: <FaPlug className="text-[#FF5722] text-5xl border border-[#FF5722] p-2 rounded-full" />,
    title: "API Integration",
    desc: "Integrate third-party APIs and tools seamlessly into your WordPress website to extend its functionality and provide a more connected digital experience.",
  },
  {
    icon: <FaShoppingCart className="text-[#FF5722] text-5xl border border-[#FF5722] p-2 rounded-full" />,
    title: "E-Commerce Solutions",
    desc: "We develop fully functional WooCommerce stores with secure payment gateways, product management systems, and customer-friendly navigation.",
  },
  {
    icon: <FaLifeRing className="text-[#FF5722] text-5xl border border-[#FF5722] p-2 rounded-full" />,
    title: "Website Maintenance & Support",
    desc: "From updates to bug fixes, our dedicated team ensures your WordPress website runs smoothly, stays secure, and remains up to date.",
  },
];

// Industries Section
const industries = [
  { icon: <HeartPulse size={32} />, name: "Healthcare & Life Sciences" },
  { icon: <RiMoneyRupeeCircleLine size={32} />, name: "Finance & FinTech" },
  { icon: <BookText size={32} />, name: "Education & E-Learning" },
  { icon: <Store size={32} />, name: "Retail & E-Commerce" },
  { icon: <Car size={32} />, name: "Travel, Hospitality & Logistics" },
  { icon: <MdOutlineRealEstateAgent size={32} />, name: "Real Estate & Property Tech" },
];

// Updated Offerings Section
const offerings = [
  {
    icon: <FaRocket className="text-[#FF3C00] text-5xl border border-[#FF3C00] p-2 rounded-full" />,
    title: "Power Up Your Project",
    desc: "Get the right blend of creativity, technology, and strategy to give your project the boost it deserves. We ensure your vision is brought to life with precision and impact.",
  },
  {
    icon: <FaUsers className="text-[#FF3C00] text-5xl border border-[#FF3C00] p-2 rounded-full" />,
    title: "Grow a Small Business",
    desc: "Our tailored digital solutions help small businesses make a big impression, drive customer engagement, and achieve sustainable growth.",
  },
  {
    icon: <FaHandshake className="text-[#FF3C00] text-5xl border border-[#FF3C00] p-2 rounded-full" />,
    title: "Proven Expertise",
    desc: "With years of industry experience, we have successfully delivered projects across diverse sectors, earning client trust and long-term partnerships.",
  },
  {
    icon: <FaMoneyBillWave className="text-[#FF3C00] text-5xl border border-[#FF3C00] p-2 rounded-full" />,
    title: "Cost-Effective Solutions",
    desc: "We provide premium quality services that fit your budget, ensuring maximum ROI without compromising on performance or quality.",
  },
  {
    icon: <FaLifeRing className="text-[#FF3C00] text-5xl border border-[#FF3C00] p-2 rounded-full" />,
    title: "End-to-End Support",
    desc: "From the initial concept to post-launch maintenance, we stay by your side to keep your digital presence strong and evolving.",
  },
  {
    icon: <FaLightbulb className="text-[#FF3C00] text-5xl border border-[#FF3C00] p-2 rounded-full" />,
    title: "Innovation-Driven Approach",
    desc: "We stay ahead of trends, integrating the latest tools and technologies to keep your business competitive in today’s fast-paced digital landscape.",
  },
];

const Wordpress = () => {
  return (
    <>
      <Navbar2 />

      {/* Hero Section */}
      <div className="relative w-full h-screen">
        <img src={headerwordpress} alt="WordPress" className="object-cover w-full h-full" />
        <div className="absolute inset-0 bg-black/50 flex items-center px-10 md:px-20">
          <div data-aos="fade-right" className="text-white max-w-2xl space-y-5">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Build, Manage, and Grow Your Website with Ease
            </h1>
            <p className="text-lg">
              We specialize in creating powerful, scalable, and easy-to-manage WordPress websites that put you in full control. From effortless content updates to SEO-ready designs, our WordPress solutions help your business thrive.
            </p>
            <Link
              to="/contact-us"
              className="inline-block bg-[#FF5722] text-white px-6 py-3 rounded-md font-semibold hover:bg-orange-600 transition"
            >
              Let’s Talk
            </Link>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <section className="py-20 px-6 md:px-20 bg-[#f9f9f9]">
        <h2 className="text-3xl font-bold text-center mb-12" data-aos="fade-up">
          What Makes WordPress Website Design Services Stand Out?
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          {benefits.map((item, i) => (
            <div key={i} data-aos="fade-up" data-aos-delay={i * 100} className="bg-white p-6 flex flex-col gap-5 rounded-xl shadow hover:shadow-md transition">
              {item.icon}
              <h4 className="font-bold text-lg">{item.title}</h4>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 md:px-20  bg-white">
        <h2 className="text-3xl font-bold text-center mb-12" data-aos="fade-up">
          Our WordPress Web Design Services
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          {services.map((item, i) => (
            <div key={i} data-aos="fade-up" data-aos-delay={i * 100} className="bg-white  border border-orange-500 p-6 flex flex-col gap-5 rounded-xl shadow hover:shadow-lg transition">
              {item.icon}
              <h4 className="font-bold text-lg">{item.title}</h4>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 px-6 md:px-20 bg-white">
        <h2 className="text-3xl font-bold text-center mb-12" data-aos="fade-up">
          Industries We Have Served To Date
        </h2>
        <div className="grid grid-cols-2 items-center sm:grid-cols-3 md:grid-cols-6 gap-4 max-w-7xl mx-auto">
          {industries.map(({ icon, name }, index) => (
            <div
              key={name}
              data-aos="zoom-in"
              className="flex text-[#FF3C00] flex-col items-center justify-center rounded-md w-50 h-35  border transition"
            >
              {icon}
              <span className="mt-4 font-semibold text-center w-40 leading-6 text-lg">
                {name}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Offerings Section */}
      <section className="py-20 px-6 md:px-20 bg-blue-100/30">
        <h2 className="text-3xl font-bold text-center mb-12" data-aos="fade-up">
          Why Should You Rely On Us?
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          {offerings.map((item, i) => (
            <div key={i} data-aos="fade-up" data-aos-delay={i * 100} className="bg-white p-6 space-y-4 rounded-lg shadow hover:shadow-lg transition">
              {item.icon}
              <h4 className="text-xl font-semibold">{item.title}</h4>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Wordpress;
