import React from "react";
import Navbar2 from "../Components/navbar/Navbar2";
import Footer from "../Components/footer/Footer";
import { Link } from "react-router-dom";
import headercustomsoftware from "../assets/headercustomsoftware.jpg";
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
import { BsQuestionDiamond } from "react-icons/bs";
import { MdAddCircle, MdRemoveCircle } from "react-icons/md";
import { useState } from "react";

const logos = [
  { id: 1, src: "/logos/bobcat.png", alt: "Bobcat" },
  { id: 2, src: "/logos/door-window.png", alt: "Door & Window" },
  { id: 3, src: "/logos/nitsba.png", alt: "Nitsba Group" },
  { id: 4, src: "/logos/tianxia.png", alt: "Tianxia" },
  { id: 5, src: "/logos/sprayground.png", alt: "Sprayground" },
  { id: 6, src: "/logos/b-cure.png", alt: "B-Cure" },
];

const features = [
  {
    id: 1,
    icon: (
      <FaBook className="text-orange-500 text-5xl mx-auto mb-4 group-hover:text-white" />
    ),
    title: "Comprehensive Documentation",
    description:
      "Clear, structured, and developer-friendly documentation that streamlines the entire development process.",
  },
  {
    id: 2,
    icon: (
      <FaDatabase className="text-orange-500 text-5xl mx-auto mb-4 group-hover:text-white" />
    ),
    title: "Elegant ORM (Eloquent)",
    description:
      "Simplifies database management with intuitive and expressive query building for faster performance.",
  },
  {
    id: 3,
    icon: (
      <FaLock className="text-orange-500 text-5xl mx-auto mb-4 group-hover:text-white" />
    ),
    title: "Top-Notch Security",
    description:
      "Built-in features to safeguard your applications against SQL injection, cross-site scripting, and other threats.",
  },
  {
    id: 4,
    icon: (
      <FaPuzzlePiece className="text-orange-500 text-5xl mx-auto mb-4 group-hover:text-white" />
    ),
    title: "Open-Source Flexibility",
    description:
      "A powerful, community-driven framework that constantly evolves with new features and innovations.",
  },
  {
    id: 5,
    icon: (
      <FaChartBar className="text-orange-500 text-5xl mx-auto mb-4 group-hover:text-white" />
    ),
    title: "Efficient Caching Mechanism",
    description:
      "Enhances application speed and performance by reducing server load through optimized caching techniques.",
  },
  {
    id: 6,
    icon: (
      <FaCode className="text-orange-500 text-5xl mx-auto mb-4 group-hover:text-white" />
    ),
    title: "Object-Oriented Libraries",
    description:
      "Pre-installed, ready-to-use libraries that help developers implement advanced features quickly and effectively.",
  },
];

const services = [
  {
    id: 1,
    icon: <GiTrophyCup />,
    title: "Custom Laravel Development",
    description:
      "Build feature-rich, high-performance web applications customized to your business needs.",
  },
  {
    id: 2,
    icon: <MdSupportAgent />,
    title: "Proactive Maintenance & Support",
    description:
      "Keep your applications running smoothly with ongoing monitoring, updates, and troubleshooting.",
  },
  {
    id: 3,
    icon: <MdWeb />,
    title: "Dynamic Website Development",
    description:
      "Craft responsive, SEO-friendly, and user-centric websites for a powerful online presence.",
  },
  {
    id: 4,
    icon: <FaRobot />,
    title: "Automation & Browser Testing",
    description:
      "Automate workflows and ensure flawless performance with advanced testing solutions.",
  },
  {
    id: 5,
    icon: <MdOutlineManageSearch />,
    title: "Advanced Full-Text Search",
    description:
      "Deliver precise and quick search functionality to improve user experience.",
  },
  {
    id: 6,
    icon: <FaCloud />,
    title: "SAAS Application Development",
    description:
      "Develop secure, scalable, and efficient SaaS platforms to accelerate business growth.",
  },
  {
    id: 7,
    icon: <GiUpgrade />,
    title: "Laravel Shift Migration",
    description:
      "Upgrade your Laravel applications seamlessly with zero downtime or compatibility issues.",
  },
  {
    id: 8,
    icon: <AiFillApi />,
    title: "API Development & Lumen Services",
    description:
      "Build secure, fast, and scalable APIs with Laravel and its micro-framework, Lumen.",
  },
  {
    id: 9,
    icon: <RiLightbulbFlashFill />,
    title: "Expert Laravel Consultation",
    description:
      "Leverage our expertise to strategize, plan, and execute Laravel-powered digital solutions.",
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

const faqs = [
  {
    question: "What is Laravel?",
    answer:
      "Laravel is a powerful PHP framework for building web applications. It helps developers write clean, secure, and well-structured code faster.",
  },
  {
    question: "Is Laravel good for enterprise projects?",
    answer:
      "Yes. Laravel is robust enough for enterprise solutions with features like modular architecture, queue management, caching, multi-language support, and integration with third-party tools.",
  },
  {
    question: "Can you migrate my existing project to Laravel?",
    answer:
      "Yes. We can migrate your legacy PHP app or another framework to Laravel while preserving data, functionality, and improving performance.",
  },
  {
    question: "Does Laravel support e-commerce apps?",
    answer:
      "Absolutely. Laravel can be used to build scalable and secure e-commerce platforms with product catalogs, payment gateways, cart systems, and admin dashboards.",
  },
  {
    question: "Does Laravel support multilingual or multi-tenant applications?",
    answer:
      "Yes. Laravel has tools to create apps in multiple languages and handle multi-tenant architectures where one system serves many clients.",
  },
];

const Laravel = () => {
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
          Affordable | Custom Laravel Development Services in India | Infomagine
        </title>
        <meta
          name="description"
          content="Boost your business with custom Laravel development services in India. Our team specializes in CMS, web apps & offshore Laravel development."
        />

        <link
          rel="canonical"
          href="https://infomagine.in/services/laravel"
        ></link>
        <meta
          property="og:title"
          content="Affordable | Custom Laravel Development Services in India | Infomagine"
        />
        <meta
          property="og:description"
          content="Boost your business with custom Laravel development services in India. Our team specializes in CMS, web apps & offshore Laravel development."
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
              Affordable Laravel Development Services in India for Every
              Business{" "}
            </h1>
            <p className="text-lg">
              Accelerate your business growth with our dedicated Laravel
              developers, available on full-time, hourly, or fixed-cost project
              models. At Infomagine, we provide you with skilled professionals
              who seamlessly integrate with your in-house team, delivering
              scalable, secure, and high-performing web applications.
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

      {/* Slider */}

      {/* <div className="w-full bg-gray-100 py-8">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={5}
          loop={true}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          breakpoints={{
            320: { slidesPerView: 2 },
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
          }}
          className="max-w-7xl mx-auto"
        >
          {logos.map((logo) => (
            <SwiperSlide key={logo.id}>
              <div className="flex items-center justify-center bg-white p-4 rounded shadow-sm h-24">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="max-h-16 object-contain"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div> */}

      {/* why PHP */}

      <div className="bg-white py-12 mt-8 mb-5">
        <h2 className="text-3xl md:text-4xl font-bold mb-5 text-center">
          <span className="text-[#ff5722]">Why Laravel </span>
          Should Be Your First Choice{" "}
        </h2>

        <p className="mt-4 text-base text-slate-600 sm:text-lg max-w-5xl text-center justify-center mx-auto mb-10">
          We dedicate extensive time to understanding your brand’s goals,
          challenges, and target audience. This enables us to create a
          strategic, result-driven roadmap for your quality assurance and
          software testing needs. Here’s a glimpse into our structured approach:
        </p>

        <div className="max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-10">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="group bg-white shadow-2xl rounded-lg p-6 text-center transition-all duration-300 hover:bg-[#ff5722] hover:text-white"
            >
              {/* Icon */}
              {feature.icon}

              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-600 group-hover:text-white mb-6">
                {feature.description}
              </p>
              {/* <button className="px-4 py-2 bg-transparent text-orange-500 border border-orange-500 rounded-md transition-all duration-300 group-hover:bg-white group-hover:text-orange-500 group-hover:border-white">
                Discover More
              </button> */}
            </div>
          ))}
        </div>
      </div>

      {/* our services */}

      <div
        className="relative py-16 px-4 bg-cover bg-center"
        style={{ backgroundImage: "url('/bg-code.jpg')" }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative max-w-6xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-7">
            Our <span className="text-[#ff5722]">Laravel Development </span>
            Offerings
          </h2>
          <p className="mt-4 text-base text-white sm:text-lg max-w-5xl text-center justify-center mx-auto mb-10">
            At Infomagine, we deliver tailored Laravel solutions that empower
            your business with unmatched functionality, performance, and
            scalability. Our team of skilled Laravel experts ensures that your
            digital presence is built to last and thrive in today’s competitive
            market.
          </p>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="group bg-white text-black p-6 rounded-lg shadow-md transition-all duration-300 hover:bg-[#ff5722] hover:text-white"
              >
                <div className="flex justify-center text-5xl mb-4 text-orange-500 group-hover:text-white">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600 group-hover:text-white mb-6">
                  {service.description}
                </p>
                {/* <button className="px-4 py-2 bg-transparent text-orange-500 border border-orange-500 rounded-md transition-all duration-300 group-hover:bg-white group-hover:text-orange-500 group-hover:border-white">
                  Explore More
                </button> */}
              </div>
            ))}
          </div>
        </div>
      </div>

      <section className="py-16 px-4 md:px-8 lg:px-16 bg-white">
        {/* Heading */}
        <h2 className="text-center text-2xl md:text-3xl font-semibold mb-7">
          <span className="text-[#ff5722]">Why Partner </span>
          <span className="text-gray-800">
            Associating With Infomagine Softwares?
          </span>
        </h2>

        <p className="mt-4 text-base text-slate-600 sm:text-lg max-w-5xl text-center justify-center mx-auto mb-10">
          Whether you are just starting your journey or running a large-scale
          enterprise, Infomagine Softwares is your trusted technology partner.
          With tailored solutions, innovative approaches, and scalable services,
          we empower every business to achieve more with technology.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Card 1 - For Startups */}
          <div className="group bg-white text-gray-800 p-10 rounded-lg shadow-md relative transition duration-300 hover:bg-[#ff5722] hover:text-white text-center">
            <div className="absolute inset-0 flex items-center justify-center opacity-10">
              {/* Rocket Icon for Startups */}
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
                  d="M5 13l4 4L19 7M12 3l2 2-2 2-2-2 2-2zm0 18l2-2-2-2-2 2 2 2z"
                />
              </svg>
            </div>
            <h3 className="text-lg md:text-xl font-bold mb-4 relative group-hover:text-white">
              For Startups
            </h3>
            <p className="leading-relaxed relative z-10 text-sm md:text-base group-hover:text-white">
              Transform your ideas into reality with cost-effective, scalable,
              and innovative solutions that help you launch faster and grow
              smarter.
            </p>
          </div>

          {/* Card 2 - For Small-Scale Businesses */}
          <div className="group bg-white text-gray-800 p-10 rounded-lg shadow-md relative transition duration-300 hover:bg-[#ff5722] hover:text-white text-center">
            <div className="absolute inset-0 flex items-center justify-center opacity-10">
              {/* Shop/Store Icon */}
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
                  d="M3 7h18M5 7V5a2 2 0 012-2h10a2 2 0 012 2v2M4 7h16l-1 13H5L4 7z"
                />
              </svg>
            </div>
            <h3 className="text-lg md:text-xl font-bold mb-4 relative group-hover:text-white">
              For Small-Scale Businesses
            </h3>
            <p className="leading-relaxed relative z-10 text-sm md:text-base group-hover:text-white">
              Strengthen your digital presence with agile, affordable, and
              efficient solutions designed to expand your reach and boost ROI.
            </p>
          </div>

          {/* Card 3 - For Large-Scale Enterprises */}
          <div className="group bg-white text-gray-800 p-10 rounded-lg shadow-md relative transition duration-300 hover:bg-[#ff5722] hover:text-white text-center">
            <div className="absolute inset-0 flex items-center justify-center opacity-10">
              {/* Building/Enterprise Icon */}
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
                  d="M4 21h16M4 10h16M4 6h16M9 21V3h6v18"
                />
              </svg>
            </div>
            <h3 className="text-lg md:text-xl font-bold mb-4 relative group-hover:text-white">
              For Large-Scale Enterprises
            </h3>
            <p className="leading-relaxed relative z-10 text-sm md:text-base group-hover:text-white">
              Drive digital transformation with robust, secure, and
              enterprise-grade solutions that ensure efficiency, scalability,
              and long-term success.
            </p>
          </div>

          {/* Card 4 - For Software Development Companies */}
          <div className="group bg-white text-gray-800 p-10 rounded-lg shadow-md relative transition duration-300 hover:bg-[#ff5722] hover:text-white text-center">
            <div className="absolute inset-0 flex items-center justify-center opacity-10">
              {/* Code/Team Collaboration Icon */}
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
                  d="M16 18l6-6-6-6M8 6l-6 6 6 6m8-6H8"
                />
              </svg>
            </div>
            <h3 className="text-lg md:text-xl font-bold mb-4 relative group-hover:text-white">
              For Software Development Companies
            </h3>
            <p className="leading-relaxed relative z-10 text-sm md:text-base group-hover:text-white">
              Extend your capabilities by leveraging our expert developers, QA
              engineers, and consultants as your extended team for faster
              project delivery.
            </p>
          </div>
        </div>
      </section>

      {/* php framework */}

      {/* FAQ Section */}
      <section className="py-20 px-6 md:px-20 bg-[#f9f9f9]">
        <h2
          className="text-center text-4xl font-medium mb-15"
          data-aos="fade-up"
        >
          FAQs about Laravel
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

export default Laravel;
