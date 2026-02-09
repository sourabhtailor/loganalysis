import React from "react";
import Navbar2 from "../Components/navbar/Navbar2";
import Footer from "../Components/footer/Footer";
import { Link } from "react-router-dom";
import headercustomsoftware from "../assets/headercustomsoftware.jpg";
import codeigniter from "../assets/codeigniter.png";
import { HeartPulse, Car, BookText, Store } from "lucide-react";
import { RiMoneyRupeeCircleLine } from "react-icons/ri";
import { MdOutlineRealEstateAgent } from "react-icons/md";
import { motion } from "framer-motion";
import { Lightbulb, Palette, Code2, ShieldCheck, Rocket } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { Helmet } from "react-helmet";
import { BsQuestionDiamond } from "react-icons/bs";
import { MdAddCircle, MdRemoveCircle } from "react-icons/md";
import { useState } from "react";
import {
  FaHeart,
  FaMobileAlt,
  FaCode,
  FaChartBar,
  FaBook,
  FaSearch,
} from "react-icons/fa";
import {
  FaLaptopCode,
  FaShoppingCart,
  FaUsers,
  FaCloud,
  FaCogs,
  FaLink,
} from "react-icons/fa";
import { MdSecurityUpdateGood, MdContentPaste } from "react-icons/md";
import { AiFillMobile } from "react-icons/ai";
import { GiTrophyCup, GiUpgrade } from "react-icons/gi";
import { MdSupportAgent, MdWeb, MdOutlineManageSearch } from "react-icons/md";
import { FaRobot, FaExchangeAlt, FaUsersCog } from "react-icons/fa";
import { AiFillApi } from "react-icons/ai";
import { RiLightbulbFlashFill } from "react-icons/ri";
import { FaLock, FaPuzzlePiece, FaDatabase } from "react-icons/fa";
import { Cog } from "lucide-react"; // using Lucide gear icon
import { CheckCircle, Cloud, Globe, Database, Bug, Layers } from "lucide-react";

const logos = [
  { id: 1, src: "/logos/bobcat.png", alt: "Bobcat" },
  { id: 2, src: "/logos/door-window.png", alt: "Door & Window" },
  { id: 3, src: "/logos/nitsba.png", alt: "Nitsba Group" },
  { id: 4, src: "/logos/tianxia.png", alt: "Tianxia" },
  { id: 5, src: "/logos/sprayground.png", alt: "Sprayground" },
  { id: 6, src: "/logos/b-cure.png", alt: "B-Cure" },
];

const services = [
  {
    title: "Smooth Maintenance",
    description:
      "Proactive monitoring and updates to keep your applications running effortlessly.",
    icon: CheckCircle,
  },
  {
    title: "Seamless Development",
    description:
      "Fast, agile, and tailored development processes for quick deployment.",
    icon: Layers,
  },
  {
    title: "Cloud-Based Apps",
    description:
      "Scalable cloud-ready applications to give your business a competitive edge.",
    icon: Cloud,
  },
  {
    title: "Website Development",
    description:
      "Responsive, feature-rich websites designed for performance and engagement.",
    icon: Globe,
  },
  {
    title: "Database Development",
    description:
      "Robust database integration and management for optimized workflows.",
    icon: Database,
  },
  {
    title: "Automated Testing",
    description:
      "Thorough testing frameworks ensuring bug-free, high-quality applications.",
    icon: Bug,
  },
];

const frameworks = [
  { id: 1, name: "CakePHP", logo: "/logos/cakephp.png" },
  { id: 2, name: "Symfony", logo: "/logos/symfony.png" },
  { id: 3, name: "CodeIgniter", logo: "/logos/codeigniter.png" },
  { id: 4, name: "Laravel", logo: "/logos/laravel.png" },
  { id: 5, name: "Yii", logo: "/logos/yii.png" },
  { id: 6, name: "Zend", logo: "/logos/zend.png" },
];

const features = [
  {
    title: "Fully Secure",
    description:
      "Advanced security features to protect your applications from threats.",
  },
  {
    title: "Agile Development",
    description: "Rapid development cycles that save time and cost.",
  },
  {
    title: "Hassle-Free Customization",
    description:
      "Flexible framework that adapts to your unique business requirements.",
  },
  {
    title: "Easy HTML Code Maintenance",
    description: "Clean and manageable code structure for smooth updates.",
  },
  {
    title: "Flexible & Scalable",
    description: "Designed to grow with your business demands.",
  },
  {
    title: "Optimum Performance",
    description:
      "Lightweight architecture ensuring fast, high-performing applications.",
  },
];

const industries = [
  {
    icon: <HeartPulse size={32} />,
    name: "Healthcare & Life Sciences",
    active: true,
  },
  { icon: <RiMoneyRupeeCircleLine size={32} />, name: "Finance & FinTech" },
  { icon: <BookText size={32} />, name: "Education & E-Learning" },
  { icon: <Store size={32} />, name: "Retail & E-Commerce" },
  { icon: <Car size={32} />, name: "Travel, Hospitality & Logistics" },
  {
    icon: <MdOutlineRealEstateAgent size={32} />,
    name: "Real Estate & Property Tech",
  },
];

const faqs = [
  {
    question: "What is CodeIgniter?",
    answer:
      "CodeIgniter is a lightweight PHP framework used to build web applications quickly. It provides tools and a structure so developers can write code faster and more cleanly.",
  },
  {
    question: "Is CodeIgniter still a good choice in 2025?",
    answer:
      "Yes. CodeIgniter 4 is actively maintained, lightweight, and perfect for small to mid-sized projects where speed and low resource usage matter.",
  },
  {
    question: "Is CodeIgniter good for prototyping or MVPs?",
    answer:
      "Yes. Because it is lightweight and fast to work with, CodeIgniter is a good choice for building Minimum Viable Products (MVPs) to test ideas quickly.",
  },
  {
    question: "How do you make CodeIgniter applications scalable?",
    answer: [
      "Good database design",
      "Modular architecture: splitting app into modules or components",
      "Caching where needed",
      "Using optimized queries and minimizing server load",
    ],
  },
  {
    question: "What kinds of applications can you build with CodeIgniter?",
    answer:
      "You can build websites, small web apps, APIs, dashboard/admin panels, forms & data management systems, content-management tools, etc.",
  },
];

const Codeigniter = () => {
  const [openStates, setOpenStates] = useState(Array(faqs.length).fill(false));

  const toggleFAQ = (index) => {
    setOpenStates((prevStates) =>
      prevStates.map((state, i) => (i === index ? !state : state))
    );
  };

  return (
    <>
      <Navbar2 />

      <Helmet>
        <title>
          Codeigniter | Web Development Services in India | Infomagine Softwares
        </title>
        <meta
          name="description"
          content="Boost your business with our Secure CodeIgniter Development Services. As a leading CodeIgniter Web Development Company in India, we build fast, reliable solutions."
        />

        <link
          rel="canonical"
          href="https://infomagine.in/services/codeigniter"
        ></link>
        <meta
          property="og:title"
          content="Codeigniter | Web Development Services in India | Infomagine Softwares"
        />
        <meta
          property="og:description"
          content="Boost your business with our Secure CodeIgniter Development Services. As a leading CodeIgniter Web Development Company in India, we build fast, reliable solutions."
        />
        <meta
          property="og:image"
          content="https://infomagine.in/assets/infomagine%20logo-BsvjEvw5.png"
        />
        <meta property="og:url" content="https://infomagine.in/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Infomagine Softwares" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:country" content="US, UK, UAE, AU, NZ" />

        {/* Schema Markup for Software Development Services */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@type": "Organization",
            name: "Infomagine",
            url: "https://infomagine.in/",
            logo: "https://infomagine.in/assets/logo.png",

            sameAs: [
              "https://www.linkedin.com/company/infomagine",
              "https://www.facebook.com/infomagine",
            ],
            address: {
              "@type": "PostalAddress",
              addressLocality: "Jaipur",
              addressRegion: "Rajasthan",
              addressCountry: [
                "US",
                "UK",
                "UAE",
                "Australia",
                "Germany",
                "France",
                "Luxembourg",
                "Indonesia",
                "Netherlands",
                "Italy",
                "New Zealand",
              ],
            },
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <div className="relative w-full h-screen">
        <img
          src={headercustomsoftware}
          alt="Custom Software"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center px-10 md:px-20">
          <div data-aos="fade-right" className="text-white max-w-2xl space-y-5">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Secure, and Smart CodeIgniter Web Development Services in India{" "}
            </h1>
            <p className="text-lg">
              Work with our skilled CodeIgniter developers to build secure,
              feature-rich, and scalable PHP-based websites and applications. At
              Infomagine Softwares, we use the CodeIgniter framework's strength
              to deliver high-performance solutions customized to your business
              needs. Whether you need a custom solution, dynamic enterprise
              portal, or lightweight web app, our expertise ensures speed,
              security, and seamless functionality to keep your brand ahead of
              the digital curve.
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

      {/* codeigniter */}

      <section className="bg-[#2a2f36] text-white py-16 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Left Section */}
          <div className="flex flex-col items-center md:items-start">
            <img
              src={codeigniter} // put your logo in public folder
              alt="CodeIgniter"
              className="w-84 md:w-100 mb-4"
            />
          </div>

          {/* Right Section */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              <span className="text-orange-600">CodeIgniter</span> The Ultimate
              Game Changer!
            </h2>
            <p className="text-lg mb-7">
              Supercharge your digital presence with CodeIgniter, a lightweight
              yet powerful PHP framework that blends simplicity with
              performance. At Infomagine, we harness its full potential to build
              dynamic, secure, and scalable applications tailored to your
              business needs.
            </p>

            <div className="grid md:grid-cols-2 gap-10">
              {features.map((feature, idx) => (
                <div key={idx}>
                  <div className="flex items-center mb-2">
                    <Cog className="text-[#ff5722] mr-2" size={22} />
                    <h3 className="font-semibold text-lg">{feature.title}</h3>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* our services */}

      <section className="bg-white py-16 px-6">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-orange-600 mb-4">
            Our CodeIgniter Solutions{" "}
            <span className="text-black">All Inclusive!</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            At Infomagine, we go beyond conventional development to deliver
            end-to-end CodeIgniter solutions that power up your business with
            performance, scalability, and reliability. From building custom apps
            to ensuring long-term maintenance, our experts make sure your
            digital journey is seamless and future-ready.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="group border border-white rounded-xl shadow-lg p-8 text-left transition duration-300 ease-in-out hover:bg-orange-600 hover:text-white cursor-pointer"
            >
              <service.icon
                className="text-orange-500 group-hover:text-white mb-4"
                size={40}
              />
              <h3 className="font-semibold text-xl mb-3">{service.title}</h3>
              <p className="text-gray-600 group-hover:text-white">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 px-6 md:px-20 bg-gray-200">
        <h2 className="text-3xl font-bold text-center mb-12" data-aos="fade-up">
          Industries We Have Served To Date
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 max-w-7xl mx-auto">
          {industries.map(({ icon, name }) => (
            <div
              key={name}
              data-aos="zoom-in"
              className="flex text-[#FF3C00] flex-col items-center justify-center rounded-md border transition 
                   w-full h-auto min-h-[120px] p-4"
            >
              {icon}
              <span className="mt-4 font-semibold text-center text-sm sm:text-base md:text-lg leading-6">
                {name}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* why should you rely on us */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-white">
        {/* Heading */}
        <h2 className="text-center text-2xl md:text-3xl font-semibold mb-7">
          <span className="text-[#ff5722]">Why Should </span>
          <span className="text-gray-800">You Rely On Us?</span>
        </h2>

        <p className="mt-4 text-base text-slate-600 sm:text-lg max-w-5xl text-center justify-center mx-auto mb-10">
          At Infomagine, we don’t just deliver projects—we deliver impact. Our
          team is dedicated to helping businesses of all sizes thrive in the
          digital world. With the right mix of expertise, innovation, and
          commitment, we ensure that every solution we provide fuels your growth
          and delivers measurable outcomes.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Card 1 - Accomplish Your Project */}
          <div className="group bg-white text-gray-800 p-10 rounded-lg shadow-md relative transition duration-300 hover:bg-[#ff5722] hover:text-white text-center">
            <div className="absolute inset-0 flex items-center justify-center opacity-10">
              {/* Rocket Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-40 h-40"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M12 2c4 4 6 8 6 12s-2 8-6 8-6-4-6-8 2-8 6-12zm0 0v4m0 4v4"
                />
              </svg>
            </div>
            <h3 className="text-lg md:text-xl font-bold mb-4 relative group-hover:text-white">
              Accomplish Your Project
            </h3>
            <p className="leading-relaxed relative z-10 text-sm md:text-base group-hover:text-white">
              From idea to execution, we ensure your project is completed on
              time, within scope, and beyond expectations.
            </p>
          </div>

          {/* Card 2 - Fuel a Small Business */}
          <div className="group bg-white text-gray-800 p-10 rounded-lg shadow-md relative transition duration-300 hover:bg-[#ff5722] hover:text-white text-center">
            <div className="absolute inset-0 flex items-center justify-center opacity-10">
              {/* Shop/Storefront Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-40 h-40"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M3 9l1-4h16l1 4M4 9h16v11H4V9zm4 11V9m8 11V9"
                />
              </svg>
            </div>
            <h3 className="text-lg md:text-xl font-bold mb-4 relative group-hover:text-white">
              Fuel a Small Business
            </h3>
            <p className="leading-relaxed relative z-10 text-sm md:text-base group-hover:text-white">
              We empower startups and small businesses with cost-effective,
              high-performing digital solutions.
            </p>
          </div>

          {/* Card 3 - Bring Actionable Results */}
          <div className="group bg-white text-gray-800 p-10 rounded-lg shadow-md relative transition duration-300 hover:bg-[#ff5722] hover:text-white text-center">
            <div className="absolute inset-0 flex items-center justify-center opacity-10">
              {/* Analytics / Growth Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-40 h-40"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4 20h16M4 10h6v10H4V10zm10 0h6v10h-6V10zM9 4h6v4H9V4z"
                />
              </svg>
            </div>
            <h3 className="text-lg md:text-xl font-bold mb-4 relative group-hover:text-white">
              Bring Actionable Results
            </h3>
            <p className="leading-relaxed relative z-10 text-sm md:text-base group-hover:text-white">
              Our strategies are data-driven and result-oriented, ensuring your
              business sees real growth.
            </p>
          </div>

          {/* Card 4 - In-House Resources */}
          <div className="group bg-white text-gray-800 p-10 rounded-lg shadow-md relative transition duration-300 hover:bg-[#ff5722] hover:text-white text-center">
            <div className="absolute inset-0 flex items-center justify-center opacity-10">
              {/* Teamwork / Collaboration Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-40 h-40"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M17 20h5V10H2v10h5m10 0v-6m-6 6v-6m-6 6v-6M12 4a4 4 0 110 8 4 4 0 010-8z"
                />
              </svg>
            </div>
            <h3 className="text-lg md:text-xl font-bold mb-4 relative group-hover:text-white">
              In-House Resources
            </h3>
            <p className="leading-relaxed relative z-10 text-sm md:text-base group-hover:text-white">
              A skilled in-house team of developers, designers, and strategists
              dedicated to your success.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 md:px-20 bg-[#f9f9f9]">
        <h2
          className="text-center text-4xl font-medium mb-15"
          data-aos="fade-up"
        >
          FAQs about Codeigniter
        </h2>

        <div
          className="grid grid-cols-1 gap-6 px-4 md:px-10 lg:px-20"
          data-aos="fade-up"
        >
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="flex flex-col border border-gray-200 rounded-2xl p-4 sm:p-6 gap-4 bg-white shadow-sm cursor-pointer"
              onClick={() => toggleFAQ(index)} 
            >
              {/* Question Header */}
              <div className="flex justify-between items-center gap-4">
                <div className="flex items-center gap-3">
                  <BsQuestionDiamond className="text-2xl sm:text-3xl text-[#FF3D00]" />
                  <span className="text-base sm:text-lg font-medium">
                    {faq.question}
                  </span>
                </div>
                <div>
                  {openStates[index] ? (
                    <MdRemoveCircle className="text-2xl sm:text-3xl text-[#FF3D00]" />
                  ) : (
                    <MdAddCircle className="text-2xl sm:text-3xl text-[#FF3D00]" />
                  )}
                </div>
              </div>

              {/* Answer Content */}
           
              {openStates[index] && (
                <div className="text-gray-600 text-sm sm:text-base pl-1 sm:pl-10 pr-1 sm:pr-10">
                  {Array.isArray(faq.answer) ? (
                    <ul className="list-disc pl-6 space-y-2">
                      {faq.answer.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  ) : (
                    <p>{faq.answer}</p>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Codeigniter;
