import { useState, useEffect } from "react";
import React from "react";
import Layout from "../Layout";
import aboutheadimg from "../../assets/header img.jpg";
import aboutcompany from "../../assets/About company.jpg";
import acheivement from "../../assets/acheivement.jpg";
import aari from "../../assets/aari.png";
import acfixer from "../../assets/ac-fixer.png";
import advatjoytesh from "../../assets/advatjoytesh.png";
import birthwiselogo from "../../assets/birthwise_logo.jpg";
import animallogo from "../../assets/animal_logo.jpg";
import CA from "../../assets/ca.png";
import cooperlogo from "../../assets/cooper_logo.jpg";
import dad from "../../assets/dad.png";
import Udawat from "../../assets/Udawat.jpg";
import deilogo from "../../assets/dei_logo.jpg";
import erigologo from "../../assets/erigo_logo.jpg";
import infocox from "../../assets/infocox.png";
import moneymatter from "../../assets/money-matter.png";
import Jotun from "../../assets/Jotun.png";
import lift_logo from "../../assets/lift_logo.jpg";
import junamahal from "../../assets/juna mahal.jpg";
import oxford_logo from "../../assets/oxford_logo.jpg";
import minddesign_logo from "../../assets/minddesign_logo.jpg";
import mari from "../../assets/mari.png";
import peacockgems from "../../assets/peacock gems.jpg";
import romex from "../../assets/romex.jpg";
import plumenova from "../../assets/plumenova.png";
import SKP from "../../assets/SKP.png";
import { motion } from "framer-motion";
import { Link } from "react-router";
import CountUp from "react-countup";
import { Helmet } from "react-helmet";
import AOS from "aos";
import "aos/dist/aos.css";

const Aboutus = () => {
  const [activeTab, setActiveTab] = useState("mission");

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const progressData = [
    { title: "App Development", percent: 90 },
    { title: "UI/UX Design", percent: 80 },
    { title: "Web Developement", percent: 95 },
  ];

  const stats = [
    { label: "Completed Project", value: 40, suffix: "+", duration: 2 },
    { label: "Expert Member", value: 25, suffix: "+", duration: 2 },
    { label: "Years Experience", value: 15, suffix: "+", duration: 2 },
    { label: "Satisfied Customers", value: 100, suffix: "%", duration: 2 },
  ];

  const tabs = [
    {
      id: "mission",
      label: "Our Mission",
      content:
        "At Infomagine, we drive continuous innovation in IT services by delivering clients with cutting-edge solutions that help their business goals. With advanced technology, we enable digital transformation and sustainable growth for businesses all over the world. Our mission is to exceed client expectations and ensure lasting success.",
    },
    {
      id: "vision",
      label: "Our Vision",
      content:
        "To be a global leader in IT services, driving digital transformation through innovation and advanced technology. Our success is determined by the success of our clients, and we are dedicated to empowering businesses worldwide, delivering unmatched value, and fostering an excellence-driven culture.",
    },
    {
      id: "value",
      label: "Our Value",
      content: (
        <ul className="list-disc pl-5 flex flex-col gap-2">
          At Infomagine, our core values drive everything we do:
          <li>
            Integrity: We uphold honesty and transparency in all our
            interactions.
          </li>
          <li>
            Innovation: We embrace cutting-edge technology to create impactful
            solutions.
          </li>
          <li>
            Excellence: We deliver high-quality results that exceed
            expectations.
          </li>
          <li>
            Collaboration: We believe in teamwork to achieve shared success.
          </li>
        </ul>
      ),
    },
  ];

  const logos = [
    aari,
    acfixer,
    advatjoytesh,
    animallogo,
    birthwiselogo,
    CA,
    cooperlogo,
    dad,
    Udawat,
    deilogo,
    erigologo,
    infocox,
    Jotun,
    lift_logo,
    junamahal,
    mari,
    minddesign_logo,
    moneymatter,
    oxford_logo,
    peacockgems,
    romex,
    plumenova,
    SKP,
  ];

  return (
    <Layout>
      <Helmet>
        <title>About Our Company - Infomagine</title>
        <meta
          name="description"
          content="Learn more about Infomagine Softwares – a forward-thinking tech partner delivering innovative software solutions through expertise, creativity, and collaboration."
        />
        <link rel="canonical" href="https://infomagine.in/about-us" />
        <meta property="og:title" content="About Us | Infomagine Softwares" />
        <meta
          property="og:description"
          content="Learn more about Infomagine Softwares, our values, our vision, and how we are committed to delivering high-quality tech solutions."
        />
        <meta
          property="og:image"
          content="https://infomagine.in/assets/infomagine%20logo-BsvjEvw5.png"
        />
        <meta property="og:url" content="https://infomagine.in/about-us" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Infomagine Softwares" />
        <meta property="og:locale" content="en_US" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Infomagine Softwares",
            url: "https://infomagine.in/about-us",
            logo: "https://infomagine.in/logo.png",
            sameAs: [
              "https://www.facebook.com/Infomaginesoftwares",
              "https://www.instagram.com/infomagine_softwares/",
              "https://www.linkedin.com/company/13313914/",
              "https://x.com/InfocoxSocial",
              "https://in.pinterest.com/infomaginesoftwares/",
            ],
            description:
              "Infomagine Softwares is a leading IT solutions provider specializing in software, mobile, and digital marketing services.",
          })}
        </script>
      </Helmet>

      <div className="flex flex-col gap-20">
        {/* Header */}
        <div className="relative w-full h-[25rem] md:h-[35rem]">
          <img
            src={aboutheadimg}
            alt="Header"
            className="w-full h-full object-cover"
          />
          <div
            className="absolute text-white top-1/2 left-6 md:left-20 transform -translate-y-1/2"
            data-aos="fade-right"
          >
            <p className="text-4xl md:text-5xl font-bold">About Us</p>
            <div className="flex gap-2 text-lg">
              <Link to={"/"}>Home</Link>
              <span>&gt;</span>
              <span>About Us</span>
            </div>
          </div>
        </div>

        {/* About Company */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 px-4 md:px-20">
          <img
            src={aboutcompany}
            alt="About Company"
            className="w-full max-w-sm object-contain"
            data-aos="fade-right"
          />
          <div
            className="w-full md:w-[60%] flex flex-col gap-6"
            data-aos="fade-left"
          >
            <h2 className="text-[#FF3C00] text-lg font-medium md:text-start text-center">
              About Company
            </h2>
            <h2 className="text-3xl md:text-4xl font-bold md:text-start text-center">
              Transforming Businesses with Tailored IT Services
            </h2>
            <hr className="w-[20%] border-2 border-[#ff3c00] md:text-start text-center" />
            <p className="md:text-start text-center">
              Infomagine is a global IT services provider, helping businesses
              transform digitally...
            </p>
            <div className="w-full">
              <div className="flex border-b flex-wrap">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`py-2 px-4 text-sm font-medium ${
                      activeTab === tab.id
                        ? "border-b-2 text-[#ff3c00]"
                        : "text-gray-500 hover:text-[#ff3c00]"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
              <div className="mt-4 text-gray-700 text-sm">
                {tabs.find((tab) => tab.id === activeTab)?.content}
              </div>
            </div>
          </div>
        </div>

        {/* Experience Section */}
        <div className="flex flex-col items-center text-center px-4 gap-6">
          <span className="text-sm text-[#ff3c00]" data-aos="zoom-in">
            OUR EXPERIENCE
          </span>
          <h2
            className="text-2xl md:text-3xl font-bold max-w-xl"
            data-aos="zoom-in"
          >
            15 Years Of Experience With IT Solution Services
          </h2>
          <hr className="w-1/4 border-2 border-[#ff3c00]" />
          <div className="w-full max-w-2xl">
            {progressData.map((item, index) => (
              <div
                key={index}
                className="flex flex-col gap-2"
                data-aos="fade-right"
              >
                <div className="flex justify-between text-sm font-medium">
                  <span>{item.title}</span>
                  <span>{item.percent}%</span>
                </div>
                <div className="bg-gray-300 h-4 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${item.percent}%` }}
                    transition={{ duration: 1.5, delay: index * 0.2 }}
                    className="h-full bg-[#FF3C00]"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 px-4 md:px-20">
          <img
            src={acheivement}
            alt="Achievements"
            className="w-full max-w-sm object-contain"
            data-aos="fade-right"
          />
          <div
            className="w-full md:w-[60%] flex flex-col gap-6"
            data-aos="fade-left"
          >
            <h2 className="text-[#FF3C00] md:text-start text-center text-lg font-medium">
              FUN FACT
            </h2>
            <h2 className="text-3xl md:text-start text-center font-bold">
              See Our Achievement
            </h2>
            <hr className="w-[20%] border-2 border-[#ff3c00]" />
            <p className="md:text-start text-center">
              At Infomagine, we pride ourselves on the success and growth of our
              clients...
            </p>
            <div
              className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center"
              data-aos="zoom-in-up"
            >
              {stats.map((stat, index) => (
                <div key={index}>
                  <h2 className="text-3xl font-bold text-gray-900">
                    <CountUp
                      end={stat.value}
                      duration={stat.duration}
                      suffix={stat.suffix}
                    />
                  </h2>
                  <p className="mt-1 text-sm text-gray-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Client Logos (Responsive scroll animation) */}
        {/* <div className="w-full bg-gray-50 py-10 overflow-hidden">
          <div className="flex gap-10 animate-scroll whitespace-nowrap px-4">
            {logos.map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt={`client-${index}`}
                className="h-20 md:h-32 object-contain"
                data-aos="zoom-in"
              />
            ))}
          </div>
        </div> */}

        <div className="w-full bg-gray-50 py-10 overflow-hidden">
          <div className="scroll-wrapper relative w-full">
            <div className="scroll-content flex gap-10 whitespace-nowrap px-4">
              {/* Duplicate logos for seamless looping */}
              {logos.map((logo, index) => (
                <img
                  key={index}
                  src={logo}
                  alt={`client-${index}`}
                  className="h-20 md:h-32 object-contain inline-block"
                  data-aos="zoom-in"
                />
              ))}
            </div>
          </div>

          {/* Inline scroll animation styles */}
          <style>{`
        .scroll-wrapper {
          overflow: hidden;
        }

        .scroll-content {
          display: inline-flex;
          animation: scroll-left 30s linear infinite;
        }

        @keyframes scroll-left {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        } 
      `}</style>
        </div>
      </div>
    </Layout>
  );
};

export default Aboutus;
