import React from "react";
import Navbar2 from "../Components/navbar/Navbar2";
import Footer from "../Components/footer/Footer";
import { Link } from "react-router-dom";
import headercms from "../assets/headercms.jpg";
import {
  FaChartLine,
  FaRocket,
  FaTools,
  FaCogs,
  FaSearch,
} from "react-icons/fa";
import { HeartPulse, Car, BookText, Store, Globe } from "lucide-react";
import { RiMoneyRupeeCircleLine } from "react-icons/ri";
import { MdOutlineRealEstateAgent } from "react-icons/md";
// Benefits
import {
  FaPaintBrush,
  FaWordpress,
  FaShoppingCart,
  FaSitemap,
  FaExchangeAlt,
  FaPlug,
  FaLifeRing,
} from "react-icons/fa";
import {
  FaUserTie,
  FaDraftingCompass,
  FaShieldAlt,
  FaRegSmile,
  FaHandsHelping,
  FaClipboardCheck,
} from "react-icons/fa";
import { FaBolt, FaMoneyCheckAlt, FaGlobe } from "react-icons/fa";
import { Helmet } from "react-helmet";
import { BsQuestionDiamond } from "react-icons/bs";
import { MdAddCircle, MdRemoveCircle } from "react-icons/md";
import { useState } from "react";

const steps = [
  {
    id: 1,
    title: "Discovery & Consultation",
    desc: "We understand your requirements, audience, and future goals.",
    icon: <FaSearch />,
  },
  {
    id: 2,
    title: "Planning & Architecture",
    desc: "Drafting a blueprint of the CMS structure, modules, and integrations.",
    icon: <FaDraftingCompass />,
  },
  {
    id: 3,
    title: "Design & Development",
    desc: "UI/UX design for intuitive dashboards and backend development for smooth functionality.",
    icon: <FaPaintBrush />,
  },
  {
    id: 4,
    title: "Migration & Integration",
    desc: "Safely moving your existing content and integrating with other systems.",
    icon: <FaExchangeAlt />,
  },
  {
    id: 5,
    title: "Testing & QA",
    desc: "Comprehensive testing for performance, security, and compatibility.",
    icon: <FaClipboardCheck />,
  },
  {
    id: 6,
    title: "Deployment & Training",
    desc: "Launching your CMS with proper handover and client training.",
    icon: <FaRocket />,
  },
  {
    id: 7,
    title: "Ongoing Maintenance",
    desc: "Continuous improvements, updates, and feature enhancements.",
    icon: <FaTools />,
  },
];

const benefits = [
  {
    icon: (
      <FaPaintBrush className="text-[#FF3C00] text-5xl border border-[#FF3C00] p-2 rounded-full mr-2" />
    ),
    title: "Custom CMS Development",
    desc: "Tailor-made CMS platforms designed from scratch to match your business workflows, branding, and future growth plans.",
  },
  {
    icon: (
      <FaWordpress className="text-[#FF3C00] text-5xl border border-[#FF3C00] p-2 rounded-full mr-2" />
    ),
    title: "Open-Source CMS Solutions",
    desc: "Implementation and customization of leading CMS platforms like WordPress, Drupal, Joomla, and Magento with plugin/module development.",
  },
  {
    icon: (
      <FaShoppingCart className="text-[#FF3C00] text-5xl border border-[#FF3C00] p-2 rounded-full mr-2" />
    ),
    title: "E-Commerce CMS Development",
    desc: "Secure and scalable CMS solutions with integrated shopping carts, product management, and advanced e-commerce features.",
  },
  {
    icon: (
      <FaSitemap className="text-[#FF3C00] text-5xl border border-[#FF3C00] p-2 rounded-full mr-2" />
    ),
    title: "Headless CMS Development",
    desc: "Build future-ready CMS solutions with decoupled architecture, enabling seamless content delivery across websites, mobile apps, and IoT.",
  },
  {
    icon: (
      <FaExchangeAlt className="text-[#FF3C00] text-5xl border border-[#FF3C00] p-2 rounded-full mr-2" />
    ),
    title: "CMS Migration & Upgradation",
    desc: "Hassle-free migration from legacy systems or outdated CMS platforms to advanced, feature-rich solutions—without downtime or data loss.",
  },
  {
    icon: (
      <FaPlug className="text-[#FF3C00] text-5xl border border-[#FF3C00] p-2 rounded-full mr-2" />
    ),
    title: "Integration Services",
    desc: "Connect your CMS with CRMs, ERPs, marketing automation tools, and third-party applications to ensure smooth business operations.",
  },
  {
    icon: (
      <FaLifeRing className="text-[#FF3C00] text-5xl border border-[#FF3C00] p-2 rounded-full mr-2" />
    ),
    title: "Maintenance & Support",
    desc: "Regular updates, bug fixing, performance optimization, and 24/7 technical support to keep your CMS performing flawlessly.",
  },
];

const cmsDemands = [
  {
    icon: <FaUserTie className="text-[#FF3C00] text-3xl" />,
    title: "Proven Expertise",
    desc: "Skilled developers with years of experience in both custom and open-source CMS.",
  },
  {
    icon: <FaDraftingCompass className="text-[#FF3C00] text-3xl" />,
    title: "Tailored Solutions",
    desc: "Every CMS is designed around your exact business goals, not a one-size-fits-all.",
  },
  {
    icon: <FaShieldAlt className="text-[#FF3C00] text-3xl" />,
    title: "Scalable & Secure",
    desc: "We build future-ready systems with enterprise-level security protocols.",
  },
  {
    icon: <FaRegSmile className="text-[#FF3C00] text-3xl" />,
    title: "Seamless User Experience",
    desc: "Easy-to-use dashboards that require little to no technical knowledge.",
  },
  {
    icon: <FaHandsHelping className="text-[#FF3C00] text-3xl" />,
    title: "End-to-End Support",
    desc: "From planning and development to deployment and long-term maintenance.",
  },
];

// Steadfast
const steadfast = [
  {
    icon: <FaBolt className="text-[#FF3C00] text-3xl" />,
    title: "Efficiency",
    desc: "Update and manage content without technical knowledge.",
  },
  {
    icon: <FaSearch className="text-[#FF3C00] text-3xl" />,
    title: "SEO-Friendly",
    desc: "Optimized for search engines to boost online visibility.",
  },
  {
    icon: <FaMoneyCheckAlt className="text-[#FF3C00] text-3xl" />,
    title: "Cost-Effective",
    desc: "Open-source and custom solutions that reduce long-term overhead.",
  },
  {
    icon: <FaChartLine className="text-[#FF3C00] text-3xl" />,
    title: "Future-Proof",
    desc: "Scalable architecture that adapts as your business grows.",
  },
  {
    icon: <FaGlobe className="text-[#FF3C00] text-3xl" />,
    title: "Multi-Platform Delivery",
    desc: "Publish content across websites, apps, and digital platforms effortlessly.",
  },
];

// Industries
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
    question:
      "What is a CMS?",
    answer:"A Content Management System is software that helps you create, edit, manage, and publish content (like text, images, videos) on your website without needing to code everything from scratch.",
  },
  {
    question: "What are CMS Plugins / Modules?",
    answer:
      "Plugins (WordPress) or Modules (Drupal/Joomla) are add-ons that extend CMS functionality — like SEO tools, forms, e-commerce, etc.",
  },
  {
    question: "What is the difference between CMS and DXP?",
   answer:  [
      "CMS = Manages website content.",
      "DXP (Digital Experience Platform) = CMS + personalization, analytics, marketing automation, integrations for customer journey.",
    ],
  },
  {
    question: "How does CMS help with Digital Marketing?",
    answer:
      "A CMS makes it easy to add blogs, landing pages, forms, SEO tags, and connect with marketing automation tools like HubSpot or Mailchimp.",
  },
  {
    question: "Does CMS support eCommerce?",
    answer:
      "Yes. With plugins (WooCommerce for WordPress, Magento integrations, Shopify headless setup) or custom modules, you can sell products directly.",
  },
];

const Cms = () => {
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
          Custom CMS Web | Drupal CMS | Webflow CMS Development Company
        </title>
        <meta
          name="description"
          content="Partner with an experienced CMS development company in India offering modern Webflow CMS development services, WordPress & Drupal solutions for every need."
        />

        <link
          rel="canonical"
          href="https://infomagine.in/services/Content-management-system"
        ></link>
        <meta
          property="og:title"
          content="Custom CMS Web | Drupal CMS | Webflow CMS Development Company"
        />
        <meta
          property="og:description"
          content="Partner with an experienced CMS development company in India offering modern Webflow CMS development services, WordPress & Drupal solutions for every need."
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
          src={headercms}
          alt="CMS header"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center px-10 md:px-20">
          <div data-aos="fade-right" className="text-white max-w-2xl space-y-5">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Custom CMS Development Company in India – WordPress, Webflow &
              Drupal
            </h1>
            <p className="text-lg">
              Content management and publication have to be easy and flexible.
              As an experienced CMS development company, we create safe, user
              friendly systems that are customized for your company. Our
              developers make content management easy whether you're using a
              custom CMS or platforms like WordPress, Drupal, or Joomla. Our
              solutions improve output, reduce manual effort, and build a strong
              digital base for expansion.
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
          Our CMS Development Services
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          {benefits.map((item, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 100}
              className="bg-white p-6 flex flex-col gap-5 rounded-xl shadow hover:shadow-md transition"
            >
              <div>{item.icon}</div>
              <h4 className="font-bold text-lg mb-2 flex items-center">
                {item.title}
              </h4>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CMS Demands Section */}
      <section className="py-20 px-6 md:px-20 bg-white">
        <h2 className="text-3xl font-bold text-center mb-8" data-aos="fade-up">
          Why Choose Us as Your CMS Development Partner?{" "}
        </h2>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {cmsDemands.map((item, idx) => (
            <div
              key={idx}
              data-aos="fade-up"
              className="bg-[#f8fafc] p-6 rounded-lg flex gap-4 items-start"
            >
              <div>{item.icon}</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="bg-gray-50 py-16 px-6 md:px-12 lg:px-20">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our <span className="text-[#FF3C00]">CMS Development Process</span>
        </h2>

        <div className="flex flex-col md:flex-row md:flex-wrap md:justify-center gap-8 relative">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className="relative bg-white rounded-2xl shadow-md p-6 w-full md:w-[300px] flex flex-col items-center text-center"
            >
              <div className="bg-[#FF3C00] text-white w-14 h-14 flex items-center justify-center rounded-full text-2xl mb-4 shadow-lg">
                {step.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">
                {step.id}. {step.title}
              </h3>
              <p className="text-sm text-gray-600">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* <div>
        <img src={infographic} alt="" />
      </div> */}

      {/* Stand Steadfast Section */}
      <section
        className="py-20 px-6 
      md:px-20 bg-[#f0f9ff]"
      >
        <h2 className="text-3xl font-bold text-center mb-8" data-aos="fade-up">
          Key Benefits for Your Business
        </h2>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {steadfast.map((item, idx) => (
            <div
              key={idx}
              data-aos="fade-up"
              className="bg-white p-6 rounded-lg shadow flex gap-4 items-start"
            >
              <div>{item.icon}</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 md:px-20 bg-[#f9f9f9]">
        <h2
          className="text-center text-4xl font-medium mb-15"
          data-aos="fade-up"
        >
          FAQs about Content Management System
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

export default Cms;
