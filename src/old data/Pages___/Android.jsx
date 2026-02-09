import React from "react";
import Navbar2 from "../Components/navbar/Navbar2";
import Footer from "../Components/footer/Footer";
import { Link } from "react-router-dom";
import design from "../assets/design.png";
import headerandroid from "../assets/headerandroid.jpg";
import testing from "../assets/testing.png";
import lunch from "../assets/lunch.png";
import developer from "../assets/developer.png";
import api from "../assets/api.png";
import development from "../assets/development.png";
import {  FaChartLine, FaUsers, FaSyncAlt, FaTools, FaHandshake } from "react-icons/fa";

const offerings = [
  {
    title: "Power Up Your Project",
    desc: "Whether you’re building from scratch or scaling an existing app, Infomagine provides the technical expertise, strategic guidance, and reliable delivery you need to move fast and stay ahead. We focus on performance, scalability, and long-term success.",
    icon: <FaRocket className="text-[#FF3C00] text-5xl border border-[#FF3C00] p-2  rounded-full mr-2" />,
  },
  {
    title: "Grow a Small Business",
    desc: "We specialize in delivering affordable yet high-quality solutions for small and medium-sized businesses. From mobile apps to backend systems, our custom services help you streamline operations, reach more customers, and accelerate growth.",
    icon: <FaChartLine className="text-[#FF3C00] text-5xl border border-[#FF3C00] p-2  rounded-full mr-2" />,
  },
  {
    title: "Dedicated In-House Resources",
    desc: "Our experienced in-house team of developers, designers, and testers ensures consistent quality, on-time delivery, and smooth communication. You won’t deal with freelancers or outsourcing uncertainties—just accountable, skilled professionals.",
    icon: <FaUsers className="text-[#FF3C00] text-5xl border border-[#FF3C00] p-2  rounded-full mr-2" />,
  },
  {
    title: "Flexible Engagement Models",
    desc: "We offer multiple hiring options—hourly, part-time, or full-time—so you can scale your team based on your project needs and budget. Our agile approach allows for quick iterations, faster pivots, and real-time collaboration.",
    icon: <FaSyncAlt className="text-[#FF3C00] text-5xl border border-[#FF3C00] p-2  rounded-full mr-2" />,
  },
  {
    title: "Full-Cycle Development Services",
    desc: "From idea validation to deployment and post-launch support, we handle the entire development lifecycle. You get a single partner who understands your goals, handles every technical detail, and delivers a market-ready product.",
    icon: <FaTools className="text-[#FF3C00] text-5xl border border-[#FF3C00] p-2  rounded-full mr-2" />,
  },
  {
    title: "Client-First Approach",
    desc: "We believe in long-term partnerships built on trust, transparency, and measurable success. With personalized support, regular updates, and a deep understanding of your business, we go beyond just delivery—we ensure your satisfaction and growth.",
    icon: <FaHandshake className="text-[#FF3C00] text-5xl border border-[#FF3C00] p-2  rounded-full mr-2" />,
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
    logoGroup: [
      "https://www.svgrepo.com/show/31053/xml.svg",
    ],
  },              
  {
    title: "JavaScript",
    logo: "https://static.vecteezy.com/system/resources/previews/027/127/463/non_2x/javascript-logo-javascript-icon-transparent-free-png.png", // Placeholder for CoreData
  },
 
];

const benefits = [
  {
    icon: (
      <FaGlobe className="text-[#FF3C00] text-5xl border border-[#FF3C00] p-2 rounded-full mr-2" />
    ),
    title: "Wider Market Reach",
    desc: "Android holds the largest global market share, giving your app access to billions of users worldwide. Launching on Android ensures maximum visibility, especially in emerging markets with high smartphone adoption.",
  },
  {
    icon: (
      <FaWallet className="text-[#FF3C00] text-5xl border border-[#FF3C00] p-2 rounded-full mr-2" />
    ),
    title: "Cost-Effective Development",
    desc: "Android’s open-source nature and availability of reusable libraries make development affordable. Whether you're a startup or enterprise, Android offers a flexible and budget-friendly path to mobile success.",
  },
  {
    icon: (
      <FaSlidersH className="text-[#FF3C00] text-5xl border border-[#FF3C00] p-2 rounded-full mr-2" />
    ),
    title: "Highly Customizable",
    desc: "Android apps allow deeper customization—from UI/UX to device-level functionalities. This makes it perfect for businesses looking for unique, branded solutions that adapt to different customer segments.",
  },
  {
    icon: (
      <FaMobileAlt className="text-[#FF3C00] text-5xl border border-[#FF3C00] p-2 rounded-full mr-2" />
    ),
    title: "Diverse Device Compatibility",
    desc: "Android runs across a vast range of smartphones, tablets, smart TVs, and even wearables. Building for Android means your app can scale across multiple devices and reach a diverse user base.",
  },
  {
    icon: (
      <FaRocket className="text-[#FF3C00] text-5xl border border-[#FF3C00] p-2 rounded-full mr-2" />
    ),
    title: "Faster App Deployment",
    desc: "With fewer restrictions compared to other platforms, Android apps can be launched and updated quickly on the Play Store. This allows for rapid iterations, testing, and time-to-market advantage.",
  },
  {
    icon: (
      <FaGoogle className="text-[#FF3C00] text-5xl border border-[#FF3C00] p-2 rounded-full mr-2" />
    ),
    title: "Seamless Integration with Google Services",
    desc: "Android apps integrate effortlessly with powerful tools like Google Maps, Firebase, Google Pay, and Drive—enhancing functionality and delivering a smoother user experience.",
  },
];

const Android = () => {
  return (
    <>
      <Navbar2 />

      {/* Hero Section */}
      <div className="relative w-full h-screen">
        <img
          src={headerandroid}
          alt="iOS App"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center px-10 md:px-20">
          <div data-aos="fade-right" className="text-white max-w-2xl space-y-5">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Expert Android App Development Team
            </h1>
            <p className="text-lg">
              Get Scalable, Secure & Custom Android Apps Tailored to Your
              Business Goals
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
          Why Should You Choose Android Apps?

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
          Services We Provide
        </h2>
          
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20 w-full px-6">
          {[
            {
              title: "Custom-Built Android & iOS Apps",
              desc: "We develop fully customized mobile apps tailored to your business needs and target audience. Whether it’s a startup MVP or an enterprise-grade solution, our team ensures functionality, performance, and scalability from day one.",
              icon: design,
              aos: "fade-up",
            },
            {
              title: "Impressive UI/UX Design",
              desc: "Our designers craft visually stunning and intuitive user interfaces that align with modern design trends and platform guidelines. We focus on enhancing user experience through smooth navigation, responsive layouts, and consistent branding.",
              icon: testing,
              aos: "fade-down",
            },
            {
              title: "End-to-End Development",
              desc: "From ideation to deployment, we handle the complete mobile app development lifecycle. Our agile approach ensures faster delivery, real-time collaboration, and efficient handling of changes or feature updates.",
              icon: developer,
              aos: "zoom-in",
            },
            {
              title: " Thorough Maintenance & Support",
              desc: "Post-launch, we provide ongoing maintenance to keep your app updated, secure, and glitch-free. Whether it’s OS upgrades, performance enhancements, or feature improvements—we ensure your app stays ahead of the curve.",
              icon: development,
              aos: "flip-left",
            },
            {
              title: "App Store & Play Store Deployment",
              desc: "We manage the entire app publishing process—ensuring your app meets all technical and compliance guidelines for a smooth launch on the App Store or Google Play. We also assist in optimizing store listings for maximum reach.",
              icon: lunch,
              aos: "fade-right", 
            },
            {
              title: "API Integration & Backend Development",
              desc: "Our team builds powerful, secure backends and integrates third-party APIs for real-time data syncing, payments, maps, notifications, and more. This ensures your app is dynamic, data-driven, and feature-rich.",
              icon: api,
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
      <section className="py-20 px-6 md:px-20 bg-[#f5f5f5]/40">
        <h2 className="text-3xl font-bold text-center mb-12" data-aos="fade-up">
         Android Technologies We Are Working With

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
                    <img
                      src={app.logo}
                      alt={app.title}
                      className="w-20  h-20 object-contain"
                    />
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
                <h3 className="text-xl text-black font-semibold ">
                  {app.title}
                </h3>
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
          Why Should You Rely On Us?
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

export default Android;
