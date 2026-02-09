import React from "react";
import Navbar2 from "../Components/navbar/Navbar2";
import Footer from "../Components/footer/Footer";
import { Link } from "react-router-dom";
import headerreactnative from "../assets/headerreactnative.jpg";
import testing from "../assets/testing.png";
import developer from "../assets/developer.png";
import api from "../assets/api.png";
import migration from "../assets/migration.png";
import apptesting from "../assets/apptesting.png";
import development from "../assets/development.png";
import { FaRocket, FaBuilding, FaUsersCog, FaChartBar, FaMoneyCheckAlt, FaTools } from "react-icons/fa";


const offerings = [
  {
    title: "Accelerate Your Time-to-Market",
    desc: "Our agile approach, in-house expertise, and rapid development cycles ensure that your mobile or web app is launched faster—without compromising quality. We help you stay ahead of the competition and seize market opportunities on time.",
    icon: <FaRocket className="text-[#FF3C00] text-5xl border border-[#FF3C00] p-2 rounded-full mr-2" />,
  },
  {
    title: "Scalable Solutions for Startups & Enterprises",
    desc: "Whether you're a startup building your MVP or an enterprise scaling digital operations, we offer flexible, scalable solutions tailored to your needs. Our tech stack and architecture ensure your app grows with your business.",
    icon: <FaBuilding className="text-[#FF3C00] text-5xl border border-[#FF3C00] p-2 rounded-full mr-2" />,
  },
  {
    title: "Access to Skilled In-House Teams",
    desc: "With a team of experienced developers, designers, and QA experts, we eliminate the risks of outsourcing. You get direct access to a committed team focused on delivering robust, secure, and innovative digital products.",
    icon: <FaUsersCog className="text-[#FF3C00] text-5xl border border-[#FF3C00] p-2 rounded-full mr-2" />,
  },
  {
    title: "Transparent Communication & Reporting",
    desc: "We believe in complete transparency. From daily updates to milestone tracking and real-time communication via Slack or email, you’re always in the loop—ensuring clarity, control, and confidence throughout the project.",
    icon: <FaChartBar className="text-[#FF3C00] text-5xl border border-[#FF3C00] p-2 rounded-full mr-2" />,
  },
  {
    title: "Cost-Effective Development Models",
    desc: "Our flexible engagement models—hourly, part-time, or full-time—help you optimize your budget without sacrificing quality. We ensure maximum ROI through efficient planning and resource allocation.",
    icon: <FaMoneyCheckAlt className="text-[#FF3C00] text-5xl border border-[#FF3C00] p-2 rounded-full mr-2" />,
  },
  {
    title: "Post-Launch Support & Growth Partnership",
    desc: "Our relationship doesn't end at deployment. We offer continuous maintenance, feature enhancements, and performance monitoring—helping your product evolve, scale, and succeed in the long run.",
    icon: <FaTools className="text-[#FF3C00] text-5xl border border-[#FF3C00] p-2 rounded-full mr-2" />,
  },
];


import {
  Globe,
  HeartPulse,
  Car,
  BookText,
  Store,
  Sparkles,
} from "lucide-react";

import { RiMoneyRupeeCircleLine } from "react-icons/ri";

import {
  FaCode,
  FaBolt,
  FaSyncAlt,
  FaDollarSign,
  FaTachometerAlt,
  FaUsers,
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



const benefits = [
  {
    icon: (
      <FaCode className="text-[#FF3C00] text-5xl border border-[#FF3C00] p-2 rounded-full mr-2" />
    ),
    title: "Reusable Codebase",
    desc: "React Native allows developers to write one codebase that works on both Android and iOS platforms. This significantly reduces development time, cost, and effort—while maintaining consistent functionality and UI across devices.",
  },
  {
    icon: (
      <FaBolt className="text-[#FF3C00] text-5xl border border-[#FF3C00] p-2 rounded-full mr-2" />
    ),
    title: "Quick Development",
    desc: "With its pre-built components and third-party plugin support, React Native speeds up the app development process. It’s ideal for startups and businesses looking to launch MVPs or full-scale apps in less time.",
  },
  {
    icon: (
      <FaSyncAlt className="text-[#FF3C00] text-5xl border border-[#FF3C00] p-2 rounded-full mr-2" />
    ),
    title: "Live & Hot Reloading",
    desc: "Developers can instantly view code changes without rebuilding the entire app. Live and hot reloading improve productivity, streamline debugging, and accelerate development cycles.",
  },
  {
    icon: (
      <FaDollarSign className="text-[#FF3C00] text-5xl border border-[#FF3C00] p-2 rounded-full mr-2" />
    ),
    title: "Cost-Effective Solution",
    desc: "By eliminating the need to build separate apps for Android and iOS, React Native helps reduce overall development costs. It’s a smart choice for businesses seeking high-quality apps on a tighter budget.",
  },
  {
    icon: (
      <FaUsers className="text-[#FF3C00] text-5xl border border-[#FF3C00] p-2 rounded-full mr-2" />
    ),
    title: "Strong Community Support",
    desc: "Backed by Meta (Facebook) and a large global developer community, React Native enjoys frequent updates, extensive libraries, and fast issue resolution—ensuring your app stays current and competitive.",
  },
  {
    icon: (
      <FaTachometerAlt className="text-[#FF3C00] text-5xl border border-[#FF3C00] p-2 rounded-full mr-2" />
    ),
    title: "Near-Native Performance",
    desc: "React Native bridges native code and delivers performance close to that of fully native apps. Smooth animations, responsive interfaces, and fast load times ensure a top-tier user experience.",
  },
];

const ReactNative = () => {
  return (
    <>
      <Navbar2 />

      {/* Hero Section */}
      <div className="relative w-full h-screen">
        <img
          src={headerreactnative}
          alt="iOS App"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center px-10 md:px-20">
          <div data-aos="fade-right" className="text-white max-w-2xl space-y-5">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Expert React Native App Development Services

            </h1>
            <p className="text-lg">
              Establish a Strong Digital Presence with Fast, Flexible & Future-Ready Mobile Apps
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
         Key Benefits of Choosing React Native

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
          React Native Services We Offer
        </h2>
          
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20 w-full px-6">
          {[
            {
              title: "Custom React Native App Development",
              desc: "We build tailor-made cross-platform mobile apps that align with your business goals and user needs. From wireframes to launch, our apps offer native-like performance and intuitive UI—ensuring seamless experiences across Android and iOS.",
              icon: developer,
              aos: "fade-up",
            },
            {
              title: " API & Backend Development",
              desc: "Our team develops secure, scalable APIs and robust backend systems that power your React Native applications. Whether it's Firebase, Node.js, or RESTful APIs, we ensure smooth data exchange and real-time performance.",
              icon: api,
              aos: "fade-down",
            },
            {
              title: "App Migration to React Native",
              desc: "Already have a native app? We help you migrate to React Native smoothly—retaining your app’s core functionality while improving performance, maintainability, and cross-platform reach, all without disrupting your user base.",
              icon: migration,
              aos: "zoom-in",
            },
            {
              title: " UI/UX Design for Cross-Platform Apps",
              desc: "Our designers create clean, modern, and platform-consistent interfaces using React Native’s UI libraries and best practices. The result? Apps that look stunning and feel native on both Android and iOS devices.",
              icon: testing,
              aos: "flip-left",
            },
            {
              title: "React Native App Testing & QA",
              desc: "We follow a rigorous testing process to ensure your app is bug-free, fast, and secure. From manual testing to automated tools like Jest and Detox, we ensure your users get a smooth and stable experience.",
              icon: apptesting,
              aos: "fade-right", 
            },
            {
              title: " Maintenance & Support Services",
              desc: "Post-deployment, we offer regular updates, performance monitoring, and feature enhancements. Our support ensures your app stays up-to-date with the latest React Native versions and OS requirements.",
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

      {/* Technology Stack Section */}
   

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

      {/* Who We Help Section */}
      <section className="py-20 px-6 md:px-20 bg-[#f0f9ff]">
        <h2 className="text-3xl font-bold text-center mb-12" data-aos="fade-up">
           How Can You Benefit by Associating with Infomagine?
        </h2>
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

      <Footer />
    </>
  );
};

export default ReactNative;
