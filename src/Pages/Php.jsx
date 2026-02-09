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
import {
  FaHeart,
  FaMobileAlt,
  FaCode,
  FaChartBar,
  FaBook,
  FaSearch,
} from "react-icons/fa";
import { Helmet } from "react-helmet";
import {
  FaLaptopCode,
  FaShoppingCart,
  FaUsers,
  FaCloud,
  FaCogs,
  FaLink,
} from "react-icons/fa";
import { MdSecurityUpdateGood, MdContentPaste } from "react-icons/md";
import { AiFillApi, AiFillMobile } from "react-icons/ai";
import { GiTrophyCup } from "react-icons/gi";
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
      <FaMobileAlt className="text-orange-500 text-5xl mx-auto mb-4 group-hover:text-white" />
    ),
    title: "Fully Responsive",
    description:
      "Deliver seamless performance across devices with web solutions that adapt beautifully to any screen size.",
  },
  {
    id: 2,
    icon: (
      <FaCode className="text-orange-500 text-5xl mx-auto mb-4 group-hover:text-white" />
    ),
    title: "Open-Source Language",
    description:
      "Save costs while enjoying the flexibility and community-driven innovation of PHP.",
  },
  {
    id: 3,
    icon: (
      <FaCloud className="text-orange-500 text-5xl mx-auto mb-4 group-hover:text-white" />
    ),
    title: "Highly Scalable",
    description:
      "From small websites to enterprise-level applications, PHP grows with your business needs.",
  },
  {
    id: 4,
    icon: (
      <FaSearch className="text-orange-500 text-5xl mx-auto mb-4 group-hover:text-white" />
    ),
    title: "SEO-Friendly",
    description:
      "Boost your online visibility with PHP frameworks optimized for search engine performance.",
  },
  {
    id: 5,
    icon: (
      <FaChartBar className="text-orange-500 text-5xl mx-auto mb-4 group-hover:text-white" />
    ),
    title: "Web-Aware",
    description:
      "Designed specifically for the web, PHP ensures smooth integrations and faster execution of dynamic pages.",
  },
  {
    id: 6,
    icon: (
      <FaBook className="text-orange-500 text-5xl mx-auto mb-4 group-hover:text-white" />
    ),
    title: "Cross Platform Integration",
    description:
      "Run your applications on multiple platforms without compatibility issues.",
  },
];

const services = [
  {
    id: 1,
    icon: <GiTrophyCup />,
    title: "Web App Development",
    description:
      "Build dynamic, feature-rich web applications that deliver unmatched performance and user satisfaction.",
  },
  {
    id: 2,
    icon: <MdContentPaste />,
    title: "CMS Development",
    description:
      "Take control of your content with custom CMS solutions that are intuitive, secure, and scalable.",
  },
  {
    id: 3,
    icon: <AiFillApi />,
    title: "API Development",
    description:
      "Enable seamless communication between applications with robust and secure APIs.",
  },
  {
    id: 4,
    icon: <MdSecurityUpdateGood />,
    title: "Seamless Maintenance",
    description:
      "Keep your platforms running at peak performance with ongoing support and regular updates.",
  },
  {
    id: 5,
    icon: <FaCloud />,
    title: "Cloud-Based Solutions",
    description:
      "Unlock scalability and flexibility with secure, cloud-powered PHP applications.",
  },
  {
    id: 6,
    icon: <AiFillMobile />,
    title: "Thorough Consultation",
    description:
      "Get expert guidance at every step — from planning to execution — to ensure the right solutions for your business.",
  },
  {
    id: 7,
    icon: <FaShoppingCart />,
    title: "E-commerce Web Solutions",
    description:
      "Drive sales with customized e-commerce platforms designed for smooth navigation and secure transactions.",
  },
  {
    id: 8,
    icon: <FaUsers />,
    title: "Social Networking Sites",
    description:
      "Create engaging, community-driven platforms that connect people and ideas effectively.",
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
    question: "What is PHP development?",
    answer:
      "PHP is a programming language used to build dynamic and interactive websites or web applications. PHP development means writing back-end code that runs on the server and handles things like databases, user login, content management, etc.",
  },
  {
    question: "What frameworks do you use in PHP?",
    answer:
      "Often we use modern PHP frameworks like Laravel, Symfony, CodeIgniter, or Yii, depending on project requirements (scalability, performance, maintainability).",
  },
  {
    question: "Can you build my website, web-app or API with PHP?",
    answer:
      "Yes. PHP is capable of building everything from simple static/dynamic websites, content management systems (CMS), e-commerce platforms, to complex web applications and APIs that communicate with other services.",
  },
  {
    question: "Will my PHP application be scalable?",
    answer:
      "Yes. With good architecture and using frameworks that allow modularity, caching, load balancing, and optimized database queries, a PHP application can scale to handle large traffic.",
  },
  {
    question: "Can you integrate my PHP app with other systems or services?",
    answer:
      "Yes. We can connect with payment gateways, external APIs, third-party services (email, analytics), or other software tools as needed.",
  },
];


const Php = () => {
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
          PHP Website | PHP CMS | PHP E-commerce Development Company
        </title>
        <meta
          name="description"
          content="Partner with a professional PHP eCommerce development in India team. From PHP backend development to CMS & APIs, we deliver innovation & quality."
        />

        <link rel="canonical" href="https://infomagine.in/services/php"></link>
        <meta
          property="og:title"
          content="PHP Website | PHP CMS | PHP E-commerce Development Company"
        />
        <meta
          property="og:description"
          content="Partner with a professional PHP eCommerce development in India team. From PHP backend development to CMS & APIs, we deliver innovation & quality."
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
              Empowering Businesses with Custom PHP Development in India{" "}
            </h1>
            <p className="text-lg">
              At Infomagine, we harness the power of PHP to craft dynamic,
              scalable, and secure web solutions tailored to your business
              needs. Our PHP development services go beyond coding—we integrate
              path-breaking technologies and proven frameworks to build websites
              and applications that are robust, fast, and future-ready.
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
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          Why PHP Should Be Your{" "}
          <span className="text-[#ff5722]">Top Choice </span>
          for Web Development
        </h2>
        <p className="mt-4 text-base text-slate-600 mb-8 sm:text-lg max-w-5xl text-center justify-center mx-auto">
          When it comes to building powerful, scalable, and user-centric web
          applications, PHP continues to dominate as one of the most reliable
          and versatile technologies. Here’s why it deserves to be at the top of
          your priority list
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
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Highlights Of <span className="text-[#ff5722]">Our Services</span>
          </h2>
          <p className="mt-4 text-base text-white mb-8 sm:text-lg max-w-5xl text-center justify-center mx-auto">
            At Infomagine, we don’t just build websites — we craft powerful
            digital experiences that drive business growth. Our PHP development
            services are tailored to suit your unique requirements, ensuring
            agility, scalability, and long-term success.
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

      {/* FAQ Section */}
      <section className="py-20 px-6 md:px-20 bg-[#f9f9f9]">
        <h2
          className="text-center text-4xl font-medium mb-15"
          data-aos="fade-up"
        >
          FAQs about PHP
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

export default Php;
