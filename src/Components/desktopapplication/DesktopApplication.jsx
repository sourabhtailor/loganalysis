import React from "react";
import Layout from "../Layout";
import desktopheader from "../../assets/desktopheader.jpg";
import problemsolving from "../../assets/problem solving.png";
import design from "../../assets/design.png";
import development from "../../assets/development.png";
import testing from "../../assets/testing.png";
import market from "../../assets/market.png";
import lunch from "../../assets/lunch.png";
import { Link } from "react-router";
import { useState } from "react";
import { BsQuestionDiamond } from "react-icons/bs";
import { MdAddCircle, MdRemoveCircle } from "react-icons/md";

import {
  Globe,
  HeartPulse,
  Car,
  BookText,
  Store,
  Sparkles,
} from "lucide-react";
import { Helmet } from "react-helmet";

const industries = [
  { icon: <Globe size={32} />, name: "Finance", active: true },
  { icon: <HeartPulse size={32} />, name: "Healthcare" },
  { icon: <Car size={32} />, name: "Consumer" },
  { icon: <BookText size={32} />, name: "Education" },
  { icon: <Store size={32} />, name: "Retail" },
  { icon: <Sparkles size={32} />, name: "Sports" },
];

const features = [
  {
    title: "Performance",
    description:
      "Desktop applications directly utilize hardware power to deliver superior performance, especially for high-computation tasks.",
    icon: "⚡", // Represents speed/performance
  },
  {
    title: "Offline Connection",
    description:
      "They function without needing an internet connection—ideal for industries with unreliable networks or offline operations.",
    icon: "📴", // Represents offline mode
  },
  {
    title: "Security",
    description:
      "Run offline to reduce exposure to online threats. Desktop apps offer better data protection and platform-level security options.",
    icon: "🔒", // Represents security/lock
  },
  {
    title: "Customization",
    description:
      "Highly customizable to suit specific workflows and business rules, giving you total control over features and data management.",
    icon: "🎛️", // Represents control/customization
  },
];

const faqs = [
{
    question: "Is desktop app development still popular in 2025?",
    answer:
      "Yes, many enterprises in the USA, Europe, and Asia still rely on robust desktop apps for security and offline access.",
  },
  {
    question: "What technologies do you use for desktop apps?",
    answer:
      " We build apps using .NET (WPF/UWP), Qt (C++), Python (PyQt), Electron, and more.",
  },
  {
    question:
      "Can you develop apps for international clients?",
    answer:
      " Yes, we serve businesses in USA, UK, UAE, France, Australia, and more with localized compliance and timezone support.",
  },

  {
    question: " What are some popular examples of desktop applications?",
    answer:
      "A few popular desktop programs are Adobe Creative Suite, Microsoft Office, and a number of data analysis tools including MATLAB and Tableau.",
  },
  {
    question: "How do desktop applications differ from web applications?",
    answer:
      "While web apps run in a browser and need an internet connection to work properly, desktop apps are installed on a computer's operating system and can operate offline.",
  },
  {
    question: "What is the Cost of Desktop Application Development?",
    answer:
      "Complexity, platform, functionality, and design specifications are some of the variables that affect desktop application development costs. While sophisticated, feature-rich, and highly secure desktop software can be substantially more expensive, basic desktop apps might be less expensive. Depending on development requirements, a standard desktop application might cost anything from a few thousand to tens of thousands of dollars.",
  },
  {
    question:
      " What are the best frameworks for desktop application development?",
    answer:
      "For desktop development, popular frameworks include Electron for web-based programs, Qt for cross-platform development, and.NET for Windows apps.",
  },
  
];

const services = [
  {
    title: "Desktop Application Development",
    description:
      "We have extensive experience building licensed desktop solutions that drive rapid business growth. Partner with us to create a market-ready product through our skilled developers, robust technologies, and years of global experience. ",
  },
  {
    title: "Research & Development",
    description:
      "Our R&D team explores innovative technologies and strategies to deliver efficient, scalable solutions. If you have unique concepts, we help transform them into real-world applications through structured research and creative development.",
  },
  {
    title: "API Development Process",
    description:
      "Infomagine delivers robust API development services to enhance software connectivity and streamline operations. Our APIs ensure seamless integration, better productivity, and compatibility with your existing enterprise ecosystem.",
  },
  {
    title: "Desktop Software Modernization",
    description:
      "Is your legacy software affecting productivity or user experience? Our team revitalizes outdated systems by upgrading security, improving UI/UX, and building modern solutions from the ground up.",
  },

  {
    title: "Desktop Software Integration",
    description:
      "We enable complex enterprise software integration to seamlessly unify and optimize your digital operations. Get centralized access,and enhanced operational continuity across all your core business systems and applications. ",
  },

  {
    title: "UWP Application Development",
    description:
      "We build Universal Windows Platform (UWP) apps from scratch or migrate your existing software to run across all Windows-compatible devices—ideal for scalable and modern desktop experiences.",
  },
];
const DesktopApplication = () => {
  const [openStates, setOpenStates] = useState(Array(faqs.length).fill(false));

  const toggleFAQ = (index) => {
    setOpenStates((prevStates) =>
      prevStates.map((state, i) => (i === index ? !state : state))
    );
  };
  return (
    <Layout>
      <Helmet>
        <title>
          Custom Desktop Application Development Company | Infomagine
        </title>
        <meta
          name="description"
          content="We offer secure, cross-platform desktop application development services using .NET & Python. Trusted by global clients in the USA, UK, UAE, Europe & Australia."
        />
        <link
          rel="canonical"
          href="https://infomagine.in/desktop-applications"
        ></link>

        {/* Open Graph Meta Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="Infomagine Software" />
        <meta
          property="og:title"
          content="Desktop App Development | .NET & Python Experts"
        />
        <meta
          property="og:description"
          content="Secure, high-performance desktop applications for Windows & Mac. Serving USA, UK, Europe, UAE & Australia."
        />
        <meta
          property="og:url"
          content="https://infomagine.in/desktop-applications"
        />
        <meta
          property="og:image"
          content="https://infomagine.in/assets/og-image-desktop.jpg"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Schema Markup for Desktop Application Development */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Infomagine Software",
            url: "https://infomagine.in",
            logo: "https://infomagine.in/assets/main-logo.png",
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+91-XXXXXXXXXX",
              contactType: "Customer Support",
              areaServed: [
                "US",
                "UK",
                "UAE",
                "France",
                "Netherlands",
                "Luxembourg",
                "Australia",
                "New Zealand",
              ],
            },
            sameAs: [
              "https://www.linkedin.com/company/infomagine",
              "https://twitter.com/infomagine",
              "https://www.facebook.com/infomagine",
            ],
          })}
        </script>
      </Helmet>

      <div className="flex flex-col mb-20 lg:mb-40 gap-16 lg:gap-20">
        <div className="w-full h-[40rem] relative">
          <img
            className="w-full h-full object-cover"
            src={desktopheader}
            alt=""
          />
          <div
            className="absolute top-1/2 left-4 sm:left-10 transform -translate-y-1/2 text-white flex flex-col gap-4 w-[90%] sm:w-3/4 lg:w-1/2"
            data-aos="fade-right"
          >
            <h1 className="text-2xl sm:text-4xl font-bold">
              Desktop Application Development Company
            </h1>
            <p className="text-sm sm:text-base">
              We specialize in custom desktop application development services, delivering secure, high-performance solutions tailored to your unique business needs. Let's collaborate to transform your ideas into powerful software and enhance your operational efficiency.
            </p>
            <Link
              to="/contact-us"
              className="bg-[#FF5722] px-4 py-2 text-sm sm:text-base w-fit rounded-md"
            >
              Let's Talk
            </Link>
          </div>
        </div>

        {/* OUR FEATURES SECTION */}
        <section
          className="py-12 flex flex-col items-center px-4"
          data-aos="fade-up"
        >
          <span className="text-[#ff3c00] font-medium text-lg sm:text-xl text-center mb-4">
            Our Features
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-10 w-full sm:w-[90%]">
            Our Desktop Application Development{" "}
            <span className="text-[#ff3c00]">Services</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-[#F7F7F7] p-6 sm:p-8 text-center hover:shadow-lg transition duration-300"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <h3 className="text-xl sm:text-2xl font-bold mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* DEVELOPMENT PROCESS */}
        <div className="flex flex-col gap-12 items-center px-4 sm:px-10 lg:px-40">
          <h2
            className="text-2xl sm:text-3xl md:text-start text-center lg:text-4xl font-bold mb-6"
            data-aos="fade-up"
          >
            Our Desktop Application Development Process
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="flex flex-col items-center text-center transition duration-300 ease-in-out"
                data-aos="zoom-in"
                data-aos-delay={i * 100}
              >
                <div className="text-orange-600 mb-4 bg-white shadow-md hover:border-4 border-[#FF5722] rounded-full p-4">
                  <img
                    src={
                      [
                        problemsolving,
                        design,
                        development,
                        testing,
                        lunch,
                        market,
                      ][i]
                    }
                    alt=""
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
                  {
                    [
                      "Requirement Gathering & Analysis",
                      "System Design & Architecture",
                      "Development & Customization",
                      "Testing & Quality Assurance",
                      "Deployment & Support",
                      "Marketing",
                    ][i]
                  }
                </h3>
                <p className="text-gray-600 text-sm">
                  {
                    [
                      "We begin by understanding your goals, target users, and specific needs. This helps us define clear objectives and tailor the application to meet your business vision.",
                      "We design a solid architecture using the best technology stack—ensuring high performance, scalability, and security from day one.",
                      "Our developers create user-friendly applications, fully customized to your workflow and feature needs, with intuitive design and seamless navigation.",
                      "Comprehensive testing is performed across platforms (Windows, Mac, Linux) to ensure flawless functionality, security, and user experience.",
                      "Post-deployment, we provide continuous support, updates, and maintenance to ensure your software remains efficient and reliable.",
                      "We boost your app's visibility with launch campaigns, ASO, and targeted digital marketing—ensuring it reaches the right audience from day one.",
                    ][i]
                  }
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* REASONS TO CHOOSE */}
        <div className="max-w-6xl mx-auto px-4" data-aos="fade-up">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-10">
            Reasons to Choose Desktop{" "}
            <span className="text-[#FF3C00]">Application</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-10">
            {features.map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-4"
                data-aos="fade-right"
                data-aos-delay={idx * 100}
              >
                <div className="text-2xl">{item.icon}</div>
                <div>
                  <h3 className="font-semibold text-lg sm:text-xl">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-700 mt-1">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* INDUSTRIES SERVED */}
        <div className="text-center py-12 px-4" data-aos="fade-up">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
            Industries We Serve for <br className="block sm:hidden" />
             Desktop Applications Development{" "}
            <span className="text-orange-600">Services</span>
          </h2>
          <div className="w-16 h-1 bg-orange-600 mx-auto mt-4 mb-10" />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 max-w-5xl mx-auto">
            {industries.map(({ icon, name }, i) => (
              <div
                key={name}
                className="flex text-[#FF3C00] flex-col items-center justify-center rounded-md p-4 border transition"
                data-aos="zoom-in-up"
                data-aos-delay={i * 100}
              >
                {icon}
                <span className="mt-2 font-semibold text-base">{name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* FAQs */}
        <h2
          className="text-center text-2xl sm:text-3xl lg:text-4xl font-medium px-4"
          data-aos="fade-up"
        >
          FAQs about Desktop Applications
        </h2>
        <div className="grid grid-cols-1 gap-8 px-4 sm:px-10 lg:px-40 mt-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="flex flex-col border rounded-2xl p-4 gap-4"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="flex justify-between items-center gap-4">
                <div className="flex items-center gap-2">
                  <BsQuestionDiamond className="text-2xl sm:text-3xl text-[#FF3D00]" />
                  <span className="text-base sm:text-lg font-medium">
                    {faq.question}
                  </span>
                </div>
                <div
                  onClick={() => toggleFAQ(index)}
                  className="cursor-pointer"
                >
                  {openStates[index] ? (
                    <MdRemoveCircle className="text-2xl sm:text-3xl text-[#FF3D00]" />
                  ) : (
                    <MdAddCircle className="text-2xl sm:text-3xl text-[#FF3D00]" />
                  )}
                </div>
              </div>
              {openStates[index] && (
                <p className="text-gray-600 text-sm pl-4 pr-4">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default DesktopApplication;
