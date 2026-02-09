import React from "react";
import Navbar2 from "../Components/navbar/Navbar2";
import Footer from "../Components/footer/Footer";
import { Link } from "react-router-dom";
import headerangular from "../assets/headerangular.jpg";
import multiplatform from "../assets/multiplatform.png";
import development from "../assets/development.png";
import apple from "../assets/apple.png";
import Mobileapp from "../assets/Mobile app.png";
import Webapp from "../assets/Webapp.png";
import api from "../assets/api.png";
import growth from "../assets/growth.png";
import { FaChartLine, FaUsers } from "react-icons/fa";
import {
  FaRocket,
  FaBuilding,
  FaClock,
  FaInfinity,
  FaCogs,
  FaPuzzlePiece,
  FaLaptopCode,
  FaComments,
  FaCalendarCheck,
  FaLifeRing,
} from "react-icons/fa";
import { FaTerminal, FaProjectDiagram, FaSmile } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { Helmet } from "react-helmet";
import { HeartPulse, Car, BookText, Store } from "lucide-react";
import { RiMoneyRupeeCircleLine } from "react-icons/ri";
import { FaGlobe } from "react-icons/fa";
import { MdOutlineRealEstateAgent } from "react-icons/md";
import { BsQuestionDiamond } from "react-icons/bs";
import { MdAddCircle, MdRemoveCircle } from "react-icons/md";
import { useState } from "react";

const offerings = [
  {
    title: "Proven Industry Expertise",
    desc: "With years of experience across diverse domains, we bring deep technical know-how and business understanding to every project.",
    icon: (
      <FaCogs className="text-[#FF3C00] text-5xl border border-[#FF3C00] p-2 rounded-full mr-2" />
    ),
  },
  {
    title: "Tailor-Made Solutions",
    desc: "We craft strategies and applications that fit your unique requirements — no one-size-fits-all approach.",
    icon: (
      <FaPuzzlePiece className="text-[#FF3C00] text-5xl border border-[#FF3C00] p-2 rounded-full mr-2" />
    ),
  },
  {
    title: "Cutting-Edge Technology",
    desc: "Our team works with the latest tools, frameworks, and industry best practices to ensure future-ready solutions.",
    icon: (
      <FaLaptopCode className="text-[#FF3C00] text-5xl border border-[#FF3C00] p-2 rounded-full mr-2" />
    ),
  },
  {
    title: "Transparent Communication",
    desc: "We keep you informed at every stage, ensuring clarity, collaboration, and complete peace of mind.",
    icon: (
      <FaComments className="text-[#FF3C00] text-5xl border border-[#FF3C00] p-2 rounded-full mr-2" />
    ),
  },
  {
    title: "On-Time Delivery",
    desc: "We respect deadlines and consistently deliver high-quality results within the agreed timeline.",
    icon: (
      <FaCalendarCheck className="text-[#FF3C00] text-5xl border border-[#FF3C00] p-2 rounded-full mr-2" />
    ),
  },
  {
    title: "Long-Term Support & Maintenance",
    desc: "Our job doesn’t end at delivery — we offer continuous support to help your business grow and adapt.",
    icon: (
      <FaLifeRing className="text-[#FF3C00] text-5xl border border-[#FF3C00] p-2 rounded-full mr-2" />
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
      <FaCode className="text-[#FF3C00] text-5xl border border-[#FF3C00] p-2 rounded-full mr-2" />
    ),
    title: "Better Development, Lesser Code",
    desc: "AngularJS’s modular design and built-in templates allow developers to write cleaner and shorter code, reducing complexity and speeding up development time.",
  },
  {
    icon: (
      <FaTerminal className="text-[#FF3C00] text-5xl border border-[#FF3C00] p-2 rounded-full mr-2" />
    ),
    title: "Better Command Line Interface (CLI)",
    desc: "With Angular CLI, developers can easily generate components, run tests, and deploy apps quickly—boosting productivity and ensuring consistent project structure.",
  },
  {
    icon: (
      <FaProjectDiagram className="text-[#FF3C00] text-5xl border border-[#FF3C00] p-2 rounded-full mr-2" />
    ),
    title: "Stronger Architecture",
    desc: "AngularJS follows a well-structured MVC (Model-View-Controller) architecture, making applications more organized, scalable, and easier to maintain in the long run.",
  },
  {
    icon: (
      <FaSmile className="text-[#FF3C00] text-5xl border border-[#FF3C00] p-2 rounded-full mr-2" />
    ),
    title: "Greater User Experience",
    desc: "Thanks to its two-way data binding and fast rendering, AngularJS provides highly interactive, responsive, and smooth applications that users love to engage with.",
  },
  {
    icon: (
      <FaGlobe className="text-[#FF3C00] text-5xl border border-[#FF3C00] p-2 rounded-full mr-2" />
    ),
    title: "Seamless Cross-Platform Support",
    desc: "Build applications that work flawlessly on web, mobile, and desktop platforms, ensuring your business reaches a wider audience with a single codebase.",
  },
  {
    icon: (
      <FaUsers className="text-[#FF3C00] text-5xl border border-[#FF3C00] p-2 rounded-full mr-2" />
    ),
    title: "Backed by Google & a Strong Community",
    desc: "AngularJS is powered by Google and supported by a vast community of developers, ensuring regular updates, rich resources, and long-term reliability.",
  },
];

const faqs = [
  {
    question: "What is Angular development?",
    answer:
      "Angular is a front-end framework by Google. It helps build dynamic, interactive web apps that run in the browser.",
  },
  {
    question: "How long does it take to build an Angular app?",
    answer:
      "It depends on the complexity: number of features, UI design, integrations, etc. A simple app might take a few weeks; more complex enterprise apps may take a few months. We'll give you a timeline after discussing your needs.",
  },
  {
    question: "Is Angular good for enterprise-level applications?",
    answer:
      "Yes. Angular is widely used by enterprises because it supports modular architecture, scalability, maintainability, and has long-term support from Google.",
  },
  {
    question: "Can you integrate Angular with cloud platforms?",
    answer:
      "Yes. We can integrate Angular apps with AWS, Google Cloud, Azure, or Firebase for hosting, storage, authentication, and APIs.",
  },
  {
    question: "Can Angular apps be integrated with CRM/ERP systems?",
    answer:
      "Yes. Angular apps can be connected with CRMs (like Salesforce, HubSpot) or ERPs (like SAP, Odoo) through APIs.",
  },
];

const Angular = () => {
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
          Angular JS | Angular Web App Development Company | Infomagine
          softwares
        </title>
        <meta
          name="description"
          content="Partner with the best AngularJS development company in India offering cutting-edge Angular web app development services in India for scalable solutions."
        />

        <link
          rel="canonical"
          href="https://infomagine.in/services/angular"
        ></link>
        <meta
          property="og:title"
          content="Angular JS | Angular Web App Development Company | Infomagine softwares "
        />
        <meta
          property="og:description"
          content="Partner with the best AngularJS development company in India offering cutting-edge Angular web app development services in India for scalable solutions."
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
          src={headerangular}
          alt="iOS App"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center px-10 md:px-20">
          <div data-aos="fade-right" className="text-white max-w-2xl space-y-5">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Best AngularJS Development Company in India for Modern Solutions{" "}
            </h1>
            <p className="text-lg">
              Build high-performing, secure, and user-friendly web & mobile
              applications with our expert Angular development services. We
              deliver scalable, easy-to-maintain solutions tailored to your
              business needs—ensuring seamless functionality and a smooth user
              experience.
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
          Reasons Why You Should Pick AngularJS Services
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
          <h2 className="text-3xl font-bold text-center " data-aos="fade-up">
            Let Our Offerings Meet Your Yearnings
          </h2>

          <p className="w-[60%] mb-12 text-center">
            At Infomagine, we align our technical expertise with your business
            goals, delivering solutions that don’t just meet your expectations
            but exceed them.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20 w-full px-6">
          {[
            {
              title: "Bespoke App Development",
              desc: "We craft tailor-made applications designed to perfectly fit your business model, ensuring a unique digital experience that sets you apart from competitors.",
              icon: multiplatform, // Replace with relevant custom app icon
              aos: "fade-up",
            },
            {
              title: "Real-Time Applications",
              desc: "Deliver instant updates, seamless interactions, and smooth performance with our robust real-time app solutions, keeping your users engaged every second.",
              icon: Mobileapp, // Replace with real-time/chat icon
              aos: "fade-down",
            },
            {
              title: "API Development & Integration",
              desc: "We build secure, scalable, and efficient APIs to connect your applications and systems, ensuring effortless data flow and better functionality.",
              icon: api, // Replace with API icon
              aos: "zoom-in",
            },
            {
              title: "Progressive Web Applications (PWA)",
              desc: "Combine the best of web and mobile experiences with our high-performance PWAs that work flawlessly across devices, even offline.",
              icon: Webapp, // Replace with PWA icon
              aos: "flip-left",
            },
            {
              title: "Enterprise-Grade Solutions",
              desc: "Our enterprise-level Angular solutions ensure security, scalability, and stability for businesses that demand excellence at every step.",
              icon: growth, // Replace with enterprise icon
              aos: "fade-right",
            },
            {
              title: "Maintenance & Support",
              desc: "Beyond development, we provide continuous monitoring, upgrades, and technical support to ensure your app performs at its best—always.",
              icon: development, // Replace with maintenance icon
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
            Why Should You Rely On Us?
          </h2>

          <p className="w-[60%] mb-12 text-center">
            At Infomagine, we go beyond delivering services — we deliver trust,
            innovation, and long-term partnerships. Here’s why clients
            confidently choose us:
          </p>
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
          FAQs about Angular
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

export default Angular;
