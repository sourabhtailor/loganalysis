import React from "react";
import Navbar2 from "../Components/navbar/Navbar2";
import Footer from "../Components/footer/Footer";
import mobileHeader from "../assets/mobileHeader.jpg";
import { Link } from "react-router-dom";
import design from "../assets/design.png";
import development from "../assets/development.png";
import testing from "../assets/testing.png";
import lunch from "../assets/lunch.png";
import market from "../assets/market.png";
import deployment from "../assets/deployment.png";

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
  FaLink,
  FaWallet,
  FaShieldAlt,
  FaRocket,
  FaGlobeAmericas,
  FaAppStore,
} from "react-icons/fa";

import { MdOutlineRealEstateAgent } from "react-icons/md";


const industries = [
  { icon: <HeartPulse size={32} />, name: "Healthcare & Life Sciences", active: true },
  { icon: <RiMoneyRupeeCircleLine size={32} />, name: "Finance & FinTech" },
  { icon: <BookText size={32} />, name: "Education & E-Learning" },
  { icon: <Store size={32} />, name: "Retail & E-Commerce" },
  { icon: <Car size={32} />, name: "Travel, Hospitality & Logistics" },
  { icon: <MdOutlineRealEstateAgent size={32} />, name: "Real Estate & Property Tech" },
];

const appTypes = [
  {
    title: "Swift",
    logo: "https://cdn-icons-png.flaticon.com/512/5968/5968371.png",
  },
  {
    title: "Objective-C",
    logo: "https://pngimg.com/d/apple_logo_PNG19668.png",
  },
  {
    title: "Xcode",
    logo: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/67/c9/6c/67c96c86-06f3-1da3-5127-b29ca02c23e9/Xcode-85-220-0-4-0-0-2x-sRGB-0-0.png/1200x630bb.png",
  },
  {
    title: "Firebase",
    logoGroup: [
      "https://brandlogos.net/wp-content/uploads/2025/03/firebase_icon-logo_brandlogos.net_tcvck-512x646.png",
    ],
  },
  {
    title: "Node.js",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/2560px-Node.js_logo.svg.png", // Placeholder for CoreData
  },
  {
    title: "XCTest",
    logo: "https://about.codecov.io/wp-content/uploads/2020/11/xctest-logo.png",
  },
];


const benefits = [
  {
    icon: (
      <FaLink className="text-[#FF3C00] text-5xl border border-[#FF3C00] p-2  rounded-full mr-2" />
    ),
    title: "Specialized Integration",
    desc: "iOS apps seamlessly integrate with the Apple ecosystem including iPhone, iPad, Apple Watch, and Siri. This enables smooth device-to-device communication and provides a unified user experience across platforms, enhancing the overall value of your application.",
  },
  {
    icon: (
      <FaWallet className="text-[#FF3C00] text-5xl border border-[#FF3C00] p-2  rounded-full mr-2" />
    ),
    title: "Cost-Effective Development",
    desc: "iOS app development involves fewer devices, better development tools, and a standardized environment—resulting in faster builds and reduced testing time. This makes iOS development highly efficient and cost-effective, especially for startups and SMEs.",
  },
  {
    icon: (
      <FaShieldAlt className="text-[#FF3C00] text-5xl border border-[#FF3C00] p-2  rounded-full mr-2" />
    ),
    title: "Top-Notch Security",
    desc: "Apple’s strong data protection layers ensure end-to-end encryption, secure payments, and robust app sandboxing. This makes iOS ideal for industries like finance, healthcare, and eCommerce where user trust and data security are critical.",
  },
  {
    icon: (
      <FaRocket className="text-[#FF3C00] text-5xl border border-[#FF3C00] p-2  rounded-full mr-2" />
    ),
    title: "Superior Performance & Speed",
    desc: "iOS apps are optimized for performance, delivering faster load times, smoother UI transitions, and crash-free operation. Apple’s hardware-software synergy ensures maximum efficiency and responsiveness across all iOS devices",
  },
  {
    icon: (
      <FaGlobeAmericas className="text-[#FF3C00] text-5xl border border-[#FF3C00] p-2  rounded-full mr-2" />
    ),
    title: "High-Value Global Audience",
    desc: "iOS users, especially in markets like the US, UK, and Australia, tend to be tech-savvy and willing to spend. This opens doors to a high-paying, loyal user base that increases your app’s profitability and brand reach.",
  },
  {
    icon: (
      <FaAppStore className="text-[#FF3C00] text-5xl border border-[#FF3C00] p-2  rounded-full mr-2" />
    ),
    title: "Streamlined App Store Deployment",
    desc: "The Apple App Store offers a trusted, secure, and quality-driven platform for launching your apps. With clear guidelines and better visibility, your app is more likely to attract downloads and stand out in a competitive market.",
  },
];

const Ios = () => {
  return (
    <>
      <Navbar2 />

      {/* Hero Section */}
      <div className="relative w-full h-screen">
        <img
          src={mobileHeader}
          alt="iOS App"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center px-10 md:px-20">
          <div data-aos="fade-right" className="text-white max-w-2xl space-y-5">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Innovative iOS App Development Services
            </h1>
            <p className="text-lg">
              Crafting Seamless, Secure & High-Performance iOS Applications to
              Build Scalable and User-Centric Apps with Infomagine.
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
          Benefits of Developing iOS Applications
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
          iOS Application Development Services offered by{" "}
          <span className="text-[#FF5722]"> Infomagine</span>
        </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20 w-full px-6">
           {[
             { title: "Custom iOS App Development", desc: "We build tailor-made iOS applications that align with your unique business requirements. From concept to execution, our expert developers use Swift, Objective-C, and the latest iOS SDKs to deliver high-performance, intuitive apps designed for maximum user engagement.", icon: design, aos: "fade-up" },
             { title: " iOS App Development & Deployment", desc: "Our end-to-end iOS development process covers everything—from UI/UX design and coding to App Store submission. We ensure your app meets Apple’s guidelines for approval and deliver a smooth launch experience with complete version control and testing.", icon: deployment, aos: "fade-down" },
             { title: "App Maintenance & Support", desc: "We offer ongoing support and regular maintenance to ensure your app stays updated, bug-free, and compatible with the latest iOS versions. Whether it's feature enhancements, performance optimization, or post-launch support, we've got you covered.", icon: development, aos: "zoom-in" },
             { title: "UI/UX Design for iOS", desc: "Our design team creates visually stunning and user-friendly interfaces that match Apple’s Human Interface Guidelines. We focus on delivering intuitive navigation and engaging user experiences that enhance user satisfaction and retention.", icon: testing, aos: "flip-left" },
             { title: "iOS App Migration & Upgrade", desc: "Planning to move your existing app to iOS or upgrade to the latest iOS version? We provide seamless migration services without compromising performance, data, or user experience—ensuring a smooth transition across platforms or versions.", icon: lunch, aos: "fade-right" },
             { title: "Enterprise iOS App Development", desc: "We build scalable, secure, and feature-rich iOS apps tailored for internal business operations or B2B needs. With integration into enterprise systems like CRM, ERP, and cloud services, our solutions help streamline workflows and improve productivity..", icon: market, aos: "fade-left" },
           ].map((item, index) => (
             <div key={index} className="flex flex-col items-center text-center transition duration-300 ease-in-out" data-aos={item.aos}>
               <div className="text-orange-600 mb-4 bg-white shadow-md hover:border-4 border-[#FF5722] rounded-[50%] p-4">
                 <img src={item.icon} alt=""/>
               </div>
               <h3 className="text-xl font-semibold text-gray-800 mb-4">{item.title}</h3>
               <p className="text-gray-600">{item.desc}</p>
             </div>
           ))}
         </div>
      </section>

      {/* Technology Stack Section */}
      <section className="py-20 px-6 md:px-20 bg-[#f5f5f5]/40">
        <h2 className="text-3xl font-bold text-center mb-12" data-aos="fade-up">
       Our iOS Technology Stack
        </h2>
       <div className="pl-40 mt-25 pr-40">
    
    <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {appTypes.map((app, index) => (
    <div
      key={index}
      data-aos="zoom-in"
      className="p-12 bg-[gray]/5 border-b-4 border-[#FF3C00]/50 text-center transition rounded-xl"
    >
      <div className="mb-4  flex justify-center items-center gap-3 flex-wrap">
        {app.logo && (
          <img src={app.logo} alt={app.title} className="w-20  h-20 object-contain" />
        )}
        {app.logoGroup &&
          app.logoGroup.map((logoUrl, i) => (
            <img
              key={i}
              src={logoUrl}
              alt={`${app.title}-${i}`}
              className="w-20 h-20 object-contain"
            />
          ))}
      </div>
      <h3 className="text-xl text-black font-semibold ">{app.title}</h3>
    </div>
  ))}
</div>

  </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 px-6 md:px-20 bg-white">
        <h2 className="text-3xl font-bold text-center mb-12" data-aos="fade-up">
          Industries We Have Served To Date
        </h2>
         <div className="grid grid-cols-2 items-center sm:grid-cols-3 md:grid-cols-6 gap-4 max-w-7xl mx-auto">
      {industries.map(({ icon, name }, index) => (
        <div key={name} data-aos="zoom-in" className="flex text-[#FF3C00] flex-col items-center justify-center rounded-md w-50 h-35  border transition">
          {icon}
          <span className="mt-4 font-semibold text-center w-40 leading-6 text-lg">{name}</span>
        </div>
      ))}
    </div>
      </section>

      {/* Who We Help Section */}
      <section className="py-20 px-6 md:px-20 bg-[#f0f9ff]">
        <h2 className="text-3xl font-bold text-center mb-12" data-aos="fade-up">
          How Can You Benefit By Associating With Infomagine?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Startups",
              desc: "We help startups turn their innovative ideas into reality with scalable, cost-effective iOS apps. From MVP development to full-scale product launches, our agile team ensures fast delivery, technical excellence, and continuous support to help you gain a competitive edge early.",
            },
            {
              title: " Enterprises & Corporates",
              desc: "We build secure, scalable enterprise-grade iOS applications that enhance internal workflows, automate tasks, and integrate smoothly with legacy systems like CRMs and ERPs. Infomagine ensures compliance, performance, and long-term support.",
            },
            {
              title: "Agencies & Consultants",
              desc: "We support marketing agencies and IT consultants by delivering client-ready iOS solutions under tight deadlines. Our transparent communication, technical `expertise, and NDA-based approach make us a trusted backend tech partner.",
            },
            {
              title: " Product-Based Companies",
              desc: "If you're building a product or SaaS platform, Infomagine offers complete iOS development—from wireframes to launch and beyond. We ensure your app is performance-optimized, scalable, and feature-rich to attract users and grow your product effectively.",
            },
            {
              title: " Small-Scale Businesses",
              desc: "Infomagine empowers small businesses by creating custom iOS apps that streamline operations, attract customers, and boost digital presence. Our solutions are designed to fit your budget while delivering enterprise-grade performance and UI quality.",
            },
            {
              title: " Software Development Companies",
              desc: "As your white-label iOS development partner, we extend your in-house capabilities. Whether you need extra development bandwidth or complete project outsourcing, our team ensures seamless collaboration, timely delivery, and high code standards.",
            },
          ].map((audience, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 100}
              className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition"
            >
              <h4 className="text-xl font-semibold mb-2">{audience.title}</h4>
              <p className="text-gray-600">{audience.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Ios;
