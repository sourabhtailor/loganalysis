import React from "react";
import Navbar2 from "../Components/navbar/Navbar2";
import Footer from "../Components/footer/Footer";
import { Link } from "react-router-dom";
import headervuejs from "../assets/headervuejs.jpg";
import multiplatform from "../assets/multiplatform.png";
import development from "../assets/development.png";
import Mobileapp from "../assets/Mobile app.png";
import migration from "../assets/migration.png";
import testing from "../assets/testing.png";
import premium from "../assets/premium.png";
import { FaUsers } from "react-icons/fa";
import {
  FaLightbulb,
  FaBolt,
  FaExchangeAlt,
  FaRetweet,
  FaCogs,
  FaPuzzlePiece,
  FaHandsHelping,
  FaStopwatch,
  FaChartLine,
  FaDollarSign,
} from "react-icons/fa";
import { Helmet } from "react-helmet";
import { BsQuestionDiamond } from "react-icons/bs";
import { MdAddCircle, MdRemoveCircle } from "react-icons/md";
import { useState } from "react";
import { HeartPulse, Car, BookText, Store } from "lucide-react";

import { RiMoneyRupeeCircleLine } from "react-icons/ri";

import { FaGlobe } from "react-icons/fa";

import { MdOutlineRealEstateAgent } from "react-icons/md";

const offerings = [
  {
    title: "Tailored Solutions for Every Stage",
    desc: "Whether you’re a budding startup or a growing small-scale business, we design customized strategies that align with your current stage and future ambitions.",
    icon: (
      <FaPuzzlePiece className="text-[#FF3C00] text-5xl border border-[#FF3C00] p-2 rounded-full mr-2" />
    ),
  },
  {
    title: "Cost-Effective Development",
    desc: "Get premium-quality IT solutions without breaking your budget, ensuring maximum value for every penny you invest.",
    icon: (
      <FaDollarSign className="text-[#FF3C00] text-5xl border border-[#FF3C00] p-2 rounded-full mr-2" />
    ),
  },
  {
    title: "Scalable Technology for Growth",
    desc: "We build solutions that grow with your business—ready to handle increased users, new features, and expanding markets seamlessly.",
    icon: (
      <FaChartLine className="text-[#FF3C00] text-5xl border border-[#FF3C00] p-2 rounded-full mr-2" />
    ),
  },
  {
    title: "Faster Time-to-Market",
    desc: "Our agile development process ensures your product or service reaches customers quickly, helping you stay ahead of competitors.",
    icon: (
      <FaStopwatch className="text-[#FF3C00] text-5xl border border-[#FF3C00] p-2 rounded-full mr-2" />
    ),
  },
  {
    title: "End-to-End Support",
    desc: "From idea validation to launch and beyond, our expert team provides continuous technical, strategic, and operational guidance.",
    icon: (
      <FaHandsHelping className="text-[#FF3C00] text-5xl border border-[#FF3C00] p-2 rounded-full mr-2" />
    ),
  },
  {
    title: "Access to a Skilled Team",
    desc: "Work with experienced developers, designers, and strategists who understand the unique challenges of startups and small businesses.",
    icon: (
      <FaUsers className="text-[#FF3C00] text-5xl border border-[#FF3C00] p-2 rounded-full mr-2" />
    ),
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
      <FaLightbulb className="text-[#FF3C00] text-5xl border border-[#FF3C00] p-2 rounded-full mr-2" />
    ),
    title: "Simplicity & Ease of Learning",
    desc: "Vue.js is designed to be straightforward, with a gentle learning curve that makes it easy for developers to adopt and integrate. This simplicity accelerates development and reduces project onboarding time.",
  },
  {
    icon: (
      <FaBolt className="text-[#FF3C00] text-5xl border border-[#FF3C00] p-2 rounded-full mr-2" />
    ),
    title: "Lightweight & High Performance",
    desc: "With its minimal framework size, Vue.js ensures lightning-fast load times and seamless performance—perfect for delivering an engaging user experience across devices.",
  },
  {
    icon: (
      <FaCogs className="text-[#FF3C00] text-5xl border border-[#FF3C00] p-2 rounded-full mr-2" />
    ),
    title: "Flexibility & Versatility",
    desc: "Whether you’re building a small interactive widget or a large-scale enterprise app, Vue.js adapts effortlessly, allowing integration with other technologies and existing projects.",
  },
  {
    icon: (
      <FaExchangeAlt className="text-[#FF3C00] text-5xl border border-[#FF3C00] p-2 rounded-full mr-2" />
    ),
    title: "Smooth Migration",
    desc: "Vue.js offers a gradual adoption approach, meaning you can integrate it into existing applications without the need for a complete overhaul—saving both time and resources.",
  },
  {
    icon: (
      <FaRetweet className="text-[#FF3C00] text-5xl border border-[#FF3C00] p-2 rounded-full mr-2" />
    ),
    title: "Two-Way Data Binding",
    desc: "Its reactive data binding ensures that changes in the user interface are instantly reflected in the application data, making it ideal for dynamic, real-time applications.",
  },
  {
    icon: (
      <FaUsers className="text-[#FF3C00] text-5xl border border-[#FF3C00] p-2 rounded-full mr-2" />
    ),
    title: "Strong Community & Ecosystem",
    desc: "Backed by an active global community and a rich ecosystem of tools and libraries, Vue.js provides reliable support, continuous improvements, and ready-to-use solutions.",
  },
];

const faqs = [
  {
    question: "What is Vue.js?",
    answer:
      "Vue.js is a JavaScript framework used to build interactive web user interfaces and single-page applications.",
  },
  {
    question: "Why choose Vue.js for my project?",
    answer:
      "Because it's easy to learn, fast to build with, flexible, and good for both small and large projects.",
  },
  {
    question: "Can Vue.js apps be SEO friendly?",
    answer:
      "Yes. By using server-side rendering (SSR) with Nuxt.js, or pre-rendering, and proper meta tags, you can make Vue apps more SEO friendly.",
  },
  {
    question: "Can Vue.js integrate with existing projects or sites?",
    answer:
      "Yes. You can integrate Vue gradually into existing sites for parts of the UI, or build full apps from scratch.",
  },
  {
    question: "Is Vue.js future-proof?",
    answer:
      "Yes. Vue has a strong and growing community, continues to evolve, and is used in many production apps around the world.",
  },
];

const Vuejs = () => {
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
          Reliable Vue JS Development Company | Infomagine Softwares
        </title>
        <meta
          name="description"
          content="Build dynamic, user-friendly apps with our Vue JS development services company in India. From single page app development VueJS to custom solutions."
        />

        <link
          rel="canonical"
          href="https://infomagine.in/services/VueJs"
        ></link>
        <meta
          property="og:title"
          content="Reliable Vue JS Development Company | Infomagine Softwares"
        />
        <meta
          property="og:description"
          content="Build dynamic, user-friendly apps with our Vue JS development services company in India. From single page app development VueJS to custom solutions."
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
          src={headervuejs}
          alt="iOS App"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center px-10 md:px-20">
          <div data-aos="fade-right" className="text-white max-w-2xl space-y-5">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Single Page & Custom VueJS Application Development Services
            </h1>
            <p className="text-lg">
              At Infomagine, we understand your unique business needs and
              deliver customized Vue.js solutions provide outstanding user
              experience with performance. Our skilled developers build reliable
              web and hybrid mobile applications that ensure scalability,
              stability, and speed—whether you need a powerful enterprise
              platform or a simple single-page application.
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
          Benefits of Using the Vue.js Framework
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
        <div className="flex flex-col items-center gap-4">
          <h2
            className="text-3xl font-bold text-center mb-15"
            data-aos="fade-up"
          >
            VueJS Development Services
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20 w-full px-6">
          {[
            {
              title: "Premium Application Development",
              desc: "Delivering top-notch web applications built with VueJS, ensuring sleek interfaces, high responsiveness, and unmatched user experiences tailored to your business goals.",
              icon: premium,
              aos: "fade-up",
            },
            {
              title: "Single-Page Applications (SPAs)",
              desc: "Creating fast, interactive, and dynamic SPAs that load instantly, enhance engagement, and provide a seamless browsing experience without constant page reloads.",
              icon: Mobileapp,
              aos: "fade-down",
            },
            {
              title: "VueJS Migration",
              desc: "Helping you migrate from legacy frameworks or outdated systems to VueJS smoothly, without data loss, downtime, or performance issues.",
              icon: migration,
              aos: "zoom-in",
            },
            {
              title: "Native App Development",
              desc: "Utilizing Vue Native and supporting tools to build cross-platform mobile apps with native-like performance and appealing designs.",
              icon: Mobileapp,
              aos: "flip-left",
            },
            {
              title: "UI/UX Development",
              desc: "Crafting visually appealing, intuitive, and functional user interfaces using VueJS, ensuring easy navigation and high user retention rates.",
              icon: testing,
              aos: "fade-right",
            },
            {
              title: "Support & Maintenance",
              desc: "Offering ongoing VueJS support, bug fixes, updates, and performance optimizations to keep your application running at its best.",
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
                <img src={item.icon} alt={item.title} />
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
          <h2
            className="text-3xl font-bold text-center mb-15"
            data-aos="fade-up"
          >
            How Can You Benefit By Associating With Infomagine?
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {offerings.map((item, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 100}
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
          FAQs about Vue JS
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

export default Vuejs;
