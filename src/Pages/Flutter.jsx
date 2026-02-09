import React from "react";
import Navbar2 from "../Components/navbar/Navbar2";
import Footer from "../Components/footer/Footer";
import { Link } from "react-router-dom";
import headerflutter from "../assets/headerflutter.jpg";
import multiplatform from "../assets/multiplatform.png";
import development from "../assets/development.png";
import apple from "../assets/apple.png";
import android from "../assets/android.png";
import chat from "../assets/chat.png";
import api from "../assets/api.png";
import officebuilding from "../assets/office-building.png";
import { FaChartLine, FaUsers } from "react-icons/fa";
import { FaBuilding, FaClock, FaInfinity } from "react-icons/fa";
import { FaCode, FaBolt, FaPaintBrush, FaTachometerAlt } from "react-icons/fa";
import { Helmet } from "react-helmet";
import { BsQuestionDiamond } from "react-icons/bs";
import { MdAddCircle, MdRemoveCircle } from "react-icons/md";
import { useState } from "react";

const offerings = [
  {
    title: "Grow Your Start-Up",
    desc: "Transform your ideas into reality with our expert development team, helping you launch fast and scale efficiently.",
    icon: (
      <FaRocket className="text-[#FF3C00] text-5xl border border-[#FF3C00] p-2 rounded-full mr-2" />
    ),
  },
  {
    title: "Boost Small Scale Business",
    desc: "Get tailored digital solutions to increase your reach, enhance customer engagement, and improve sales.",
    icon: (
      <FaChartLine className="text-[#FF3C00] text-5xl border border-[#FF3C00] p-2 rounded-full mr-2" />
    ),
  },
  {
    title: "Scale Your Enterprise",
    desc: "Streamline operations, modernize systems, and implement advanced technologies to stay ahead in competitive markets.",
    icon: (
      <FaBuilding className="text-[#FF3C00] text-5xl border border-[#FF3C00] p-2 rounded-full mr-2" />
    ),
  },
  {
    title: "Save Time & Cost",
    desc: "Leverage our agile development approach and ready-to-use solutions to reduce development costs and timelines.",
    icon: (
      <FaClock className="text-[#FF3C00] text-5xl border border-[#FF3C00] p-2 rounded-full mr-2" />
    ),
  },
  {
    title: "Access Expert Talent",
    desc: "Work with experienced developers, designers, and strategists who understand your industry and business challenges.",
    icon: (
      <FaUsers className="text-[#FF3C00] text-5xl border border-[#FF3C00] p-2 rounded-full mr-2" />
    ),
  },
  {
    title: "Continuous Growth Support",
    desc: "Benefit from long-term partnerships with ongoing updates, maintenance, and strategic consultation to keep your business evolving.",
    icon: (
      <FaInfinity className="text-[#FF3C00] text-5xl border border-[#FF3C00] p-2 rounded-full mr-2" />
    ),
  },
];

import { HeartPulse, Car, BookText, Store } from "lucide-react";

import { RiMoneyRupeeCircleLine } from "react-icons/ri";

import {
  FaGlobe,
  FaWallet,
  FaSlidersH,
  FaMobileAlt,
  FaRocket,
  FaGoogle,
} from "react-icons/fa";

import { MdOutlineRealEstateAgent } from "react-icons/md";

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

const appTypes = [
  {
    title: "Kotlin",
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/74/Kotlin_Icon.png",
  },
  {
    title: "Java",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/1200px-Java_programming_language_logo.svg.png",
  },
  {
    title: "Android Studio",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Android_Studio_icon_%282023%29.svg/1200px-Android_Studio_icon_%282023%29.svg.png",
  },
  {
    title: "XML",
    logoGroup: ["https://www.svgrepo.com/show/31053/xml.svg"],
  },
  {
    title: "JavaScript",
    logo: "https://static.vecteezy.com/system/resources/previews/027/127/463/non_2x/javascript-logo-javascript-icon-transparent-free-png.png", // Placeholder for CoreData
  },
];

const benefits = [
  {
    icon: (
      <FaCode className="text-[#FF3C00] text-5xl border border-[#FF3C00] p-2 rounded-full mr-2" />
    ),
    title: "Open Source",
    desc: "Flutter is a free, open-source framework backed by Google, allowing developers to create high-quality apps without licensing costs. This ensures transparency, flexibility, and continuous improvement through a global developer community.",
  },
  {
    icon: (
      <FaGlobe className="text-[#FF3C00] text-5xl border border-[#FF3C00] p-2 rounded-full mr-2" />
    ),
    title: "Cross-Platform Compatibility",
    desc: "Build once, deploy anywhere. Flutter enables seamless app development for Android, iOS, web, and desktop from a single codebase, reducing time and development expenses.",
  },
  {
    icon: (
      <FaBolt className="text-[#FF3C00] text-5xl border border-[#FF3C00] p-2 rounded-full mr-2" />
    ),
    title: "Hot Reload for Faster Development",
    desc: "With Flutter’s hot reload feature, developers can instantly see the changes they make in the code, making the development process faster, more efficient, and perfect for real-time collaboration.",
  },
  {
    icon: (
      <FaPaintBrush className="text-[#FF3C00] text-5xl border border-[#FF3C00] p-2 rounded-full mr-2" />
    ),
    title: "Rich UI and Custom Widgets",
    desc: "Flutter offers a wide range of pre-designed widgets and customizable components, helping create stunning, responsive, and consistent user interfaces across platforms.",
  },
  {
    icon: (
      <FaTachometerAlt className="text-[#FF3C00] text-5xl border border-[#FF3C00] p-2 rounded-full mr-2" />
    ),
    title: "High Performance",
    desc: "Built with the Dart programming language and leveraging a high-performance rendering engine, Flutter apps are smooth, fast, and optimized for performance on all devices.",
  },
  {
    icon: (
      <FaUsers className="text-[#FF3C00] text-5xl border border-[#FF3C00] p-2 rounded-full mr-2" />
    ),
    title: "Strong Community and Long-Term Support",
    desc: "Backed by Google and supported by a rapidly growing community, Flutter guarantees regular updates, new features, and a strong ecosystem for long-term app stability.",
  },
];

const faqs = [
  {
    question: "What is Flutter development?",
    answer:
      "Flutter is a framework from Google for building mobile apps that run on both Android and iOS from the same code. It uses the Dart language.",
  },
  {
    question: "Can Flutter handle advanced features?",
    answer:
      "Yes. Flutter supports most device features like camera, GPS, sensors, push notifications, in-app purchases. For very new or rare features, custom plugins or native code can be used.",
  },
  {
    question: "How good is performance in Flutter apps?",
    answer:
      "Very good in most cases. Flutter draws UI itself, so animations and UI transitions tend to be smooth. But for extremely graphics-intensive or real-time apps (like heavy gaming or AR), sometimes native or mixed approach may be better.",
  },
  {
    question: "Can Flutter apps scale as my business grows?",
    answer:
      "Yes. Flutter supports modular development and can be scaled with new features, integrations, and larger user bases as your business grows.",
  },
  {
    question: "Are Flutter apps secure?",
    answer:
      "Yes. We follow best practices like secure APIs, encrypted data, strong authentication, and regular updates to keep apps safe.",
  },
];

const Flutter = () => {
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
          Top-Notch iOS Flutter | Api Integration Services | Infomagine
          Softwares
        </title>
        <meta
          name="description"
          content="Infomagine – a trusted Flutter app development company in India, offering top-notch iOS Flutter development services with seamless API integrations."
        />

        <link
          rel="canonical"
          href="https://infomagine.in/services/flutter"
        ></link>
        <meta
          property="og:title"
          content="Top-Notch iOS Flutter | Api Integration Services | Infomagine Softwares"
        />
        <meta
          property="og:description"
          content="Infomagine – a trusted Flutter app development company in India, offering top-notch iOS Flutter development services with seamless API integrations."
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
          src={headerflutter}
          alt="iOS App"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center px-10 md:px-20">
          <div data-aos="fade-right" className="text-white max-w-2xl space-y-5">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              End-to-End Flutter App Development and API Integration Services in
              India{" "}
            </h1>
            <p className="text-lg">
              Bring your mobile app vision to life with our highly experienced
              Flutter developers. At Infomagine, we combine technical expertise,
              creative design, and agile methodologies to build cross-platform
              apps that are fast, secure, and visually stunning — all while
              reducing your time-to-market and development costs.
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
          Benefits of Choosing Flutter App Development Services
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          {benefits.map((item, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 100}
              className="bg-white p-6 flex flex-col gap-5 rounded-xl shadow hover:shadow-md transition"
            >
              <div className=""> {item.icon}</div>
              <h4 className="font-bold text-lg mb-2 flex items-center">
                {item.title}
              </h4>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 flex flex-col items-center px-6 md:px-20 bg-white">
        <h2
          className="text-3xl w-[40%] font-bold text-center mb-12"
          data-aos="fade-up"
        >
          Flutter Services That We Offer
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20 w-full px-6">
          {[
            {
              title: "Flutter App Development",
              desc: "Build high-performance mobile applications for both Android and iOS using a single codebase, reducing cost and development time.",
              icon: multiplatform, // You can replace with a more relevant Flutter icon
              aos: "fade-up",
            },
            {
              title: "Top-Notch iOS Development",
              desc: "Deliver smooth, fast, and visually engaging iOS applications built with Flutter that provide a native-like user experience.",
              icon: apple, // Replace with iOS-specific icon if available
              aos: "fade-down",
            },
            {
              title: "Enhanced Android Development",
              desc: "Create Android apps that are optimized for performance, stability, and user satisfaction—powered by Flutter’s advanced toolkit.",
              icon: android, // Replace with Android-specific icon if available
              aos: "zoom-in",
            },
            {
              title: "Improved Chat Feature",
              desc: "Integrate real-time, responsive, and feature-rich chat modules to boost user engagement and communication within your app.",
              icon: chat, // Replace with chat-related icon if available
              aos: "flip-left",
            },
            {
              title: "API Integration Services",
              desc: "Seamlessly connect your Flutter application with third-party services and APIs to enhance functionality and scalability.",
              icon: api, // Replace with API icon if available
              aos: "fade-right",
            },
            {
              title: "App Maintenance & Support",
              desc: "Ensure your Flutter applications run smoothly with regular updates, bug fixes, and performance optimization.",
              icon: development,
              aos: "fade-left",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center transition duration-300 ease-in-out"
              data-aos={item.aos}
            >
              <div className="text-orange-600 mb-4 bg-white shadow-md hover:border-4 border-[#FF5722] rounded-[50%] p-4">
                <img src={item.icon} alt="" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.desc}</p>
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

      {/* Who We Help Section */}
      <section className="py-20 px-6 md:px-20 bg-[#f0f9ff]">
        <div className="flex flex-col items-center gap-4">
          <h2 className="text-3xl font-bold text-center " data-aos="fade-up">
            How Can You Benefit by Associating with Infomagine?
          </h2>

          <p className="w-[60%] mb-12 text-center">
            Partnering with Infomagine means gaining a trusted technology
            partner dedicated to helping you achieve your business goals through
            innovative, scalable, and cost-effective solutions.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {offerings.map((item, i) => (
            <div
              key={i}
              className="bg-white p-6 space-y-4 rounded-lg shadow hover:shadow-lg transition"
            >
              <div>{item.icon}</div>
              <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
              <p className="text-gray-600">{item.desc}</p>
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
          FAQs about Flutter
        </h2>

        <div
          className="grid grid-cols-1 gap-6 px-4 md:px-10 lg:px-20"
          data-aos="fade-up"
        >
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="flex flex-col border border-gray-200 rounded-2xl p-4 sm:p-6 gap-4 bg-white shadow-sm cursor-pointer"
              data-aos="fade-up"
              data-aos-delay={index * 100}
              onClick={() => toggleFAQ(index)} // ✅ Click anywhere in the box
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

export default Flutter;
