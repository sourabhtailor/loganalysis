import React from "react";
import Layout from "../Layout";
import portfolio from "../../assets/portfolio.jpg";
import SKP from "../../assets/SKP.png";
import moneymatter from "../../assets/money-matter.png";
import lifecreative from "../../assets/life creative.jpg";
import mind from "../../assets/mind designing.jpg";
import { FaCircleArrowRight } from "react-icons/fa6";
import invitehive from "../../assets/invitehive.png";
import Zedbox from "../../assets/Zedbox.png";
import vksodtware from "../../assets/vksodtware.png";
import carpetlogo from "../../assets/carpetlogo.png";
import Jmexports from "../../assets/Jm-exports.png";
import krridahome from "../../assets/krrida-home.png";
import KHT from "../../assets/KHT.png";
import fundnest from "../../assets/FUNDNEST 2.png";
import madstack from "../../assets/MadStack Invovation logo Black-01.png";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useState } from "react";
import phoneMockup from "../../assets/mob.png";
import bgImage from "../../assets/portfolio1.png";

const portfolioItems = [
  {
    id: 2,
    title: "SKP",
    image: SKP,
    href: "https://www.skplegalsolutions.com/",
  },
  {
    id: 4,
    title: "Madstack Invovation",
    image: madstack,
    href: "https://www.madstackinnovation.com/",
  },
  {
    id: 5,
    title: "Invitehive",
    image: invitehive,
    href: "/casestudy/invitehive",
  },
  {
    id: 6,
    title: "Kanha home tutions",
    image: KHT,
    href: "/casestudy/kanha-home-tution",
  },
  { id: 7, title: "Fundnest", image: fundnest, href: "https://fundnest.in/" },
  {
    id: 11,
    title: "Lift creative",
    image: lifecreative,
    href: "https://liftcreative.com/",
  },
  {
    id: 13,
    title: "Mind designing",
    image: mind,
    href: "https://minddesigning.com/",
  },
  {
    id: 25,
    title: "Moneymatter",
    image: moneymatter,
    href: "https://moneymatters.co.in/",
  },
  {
    id: 27,
    title: "Carpet & Textile House",
    image: carpetlogo,
    href: "https://carpetandtextilehouse.com/",
  },
  {
    id: 29,
    title: "VK Softwares",
    image: vksodtware,
    href: "https://vksoftwares.com/",
  },
  { id: 30, title: "Krrida", image: krridahome, href: "https://krrida.com/" },
  { id: 31, title: "Zedbox", image: Zedbox, href: "https://zedbox.co.in/" },
  {
    id: 34,
    title: "JM Exports",
    image: Jmexports,
    href: "https://jmgemstones.com/",
  },
  {
    id: 35,
    title: "Ticked",
    image: Jmexports,
    href: "/casestudy/ticked",
  },
    {
    id: 36,
    title: "Ctrl+p",
    image: Jmexports,
    href: "/casestudy/ctrlp",
  },

];

const bgColors = [
  "bg-[#FBE4E4]",
  "bg-[#E4F9F5]",
  "bg-[#F3E5F5]",
  "bg-[#FFF9C4]",
  "bg-[#E1F5FE]",
  "bg-[#E8F5E9]",
  "bg-[#FFEBEE]",
  "bg-[#EDE7F6]",
  "bg-[#FFF3E0]",
  "bg-[#E1F8E1]",
  "bg-[#F7F6F7]",
  "bg-[#F5E1F4]",
  "bg-[#FFEBB5]",
  "bg-[#E6F7F2]",
  "bg-[#F4F9FC]",
  "bg-[#E3F5FC]",
  "bg-[#FFF0F0]",
  "bg-[#F6F8D4]",
  "bg-[#F0F8F7]",
  "bg-[#E3F8F0]",
  "bg-[#E5F5F5]",
];

const caseStudies = [
  {
    id: 1,
    title: "SKP",
    subtitle: "Shop Smart & Live Well with E-commerce Platform",
    description:
      "Fashion Porters is a mobile app platform for customers/service seekers who like to buy dresses by knowing exactly how they would look on them.",
    link: "https://devtechnosys.com/case-study/ecommerce-application-fashion-porters.php",
    phoneMockup: phoneMockup, // already imported
    bgImage: bgImage, // already imported
  },
  {
    id: 2,
    title: "Madstack Invovation",
    subtitle: "Financial Management Simplified",
    description:
      "Madstack Invovation helps individuals and businesses manage expenses, investments, and financial growth with ease.",
    link: "https://madstackinvovation.com/",
    phoneMockup: phoneMockup, // replace with correct phone mockup if you have one
    bgImage: bgImage,
  },
  {
    id: 3,
    title: "Invitehive",
    subtitle: "Your Social Event Management Hub",
    description:
      "Invitehive enables seamless event planning, RSVP management, and guest engagement in a modern mobile experience.",
    link: "https://invitehive.com/",
    phoneMockup: phoneMockup, // mockup if available
    bgImage: bgImage,
  },
  {
    id: 4,
    title: "Kanha home tutions",
    subtitle: "Your Social Event Management Hub",
    description:
      "Kanha home tutions enables seamless event planning, RSVP management, and guest engagement in a modern mobile experience.",
    link: "https://kanhahometutions.com/",
    phoneMockup: phoneMockup, // mockup if available
    bgImage: bgImage,
  },
  {
    id: 5,
    title: "Fundnest",
    subtitle: "Your Social Event Management Hub",
    description:
      "Fundnest enables seamless event planning, RSVP management, and guest engagement in a modern mobile experience.",
    link: "https://fundnest.com/",
    phoneMockup: phoneMockup, // mockup if available
    bgImage: bgImage,
  },
  {
    id: 6,
    title: "Lift creative",
    subtitle: "Your Social Event Management Hub",
    description:
      "Lift creative enables seamless event planning, RSVP management, and guest engagement in a modern mobile experience.",
    link: "https://liftcreative.com/",
    phoneMockup: phoneMockup, // mockup if available
    bgImage: bgImage,
  },
  {
    id: 7,
    title: "Mind designing",
    subtitle: "Your Social Event Management Hub",
    description:
      "Mind designing enables seamless event planning, RSVP management, and guest engagement in a modern mobile experience.",
    link: "https://minddesigning.com/",
    phoneMockup: phoneMockup, // mockup if available
    bgImage: bgImage,
  },
  {
    id: 8,
    title: "Moneymatter",
    subtitle: "Your Social Event Management Hub",
    description:
      "Moneymatter enables seamless event planning, RSVP management, and guest engagement in a modern mobile experience.",
    link: "https://moneymatter.com/",
    phoneMockup: phoneMockup,
    bgImage: bgImage,
  },
  {
    id: 9,
    title: "Carpet & Textile House",
    subtitle: "Your Social Event Management Hub",
    description:
      "Carpet & Textile House enables seamless event planning, RSVP management, and guest engagement in a modern mobile experience.",
    link: "https://carpetandtextilehouse.com/",
    phoneMockup: phoneMockup,
    bgImage: bgImage,
  },
  {
    id: 10,
    title: "VK Softwares",
    subtitle: "Your Social Event Management Hub",
    description:
      "VK Softwares enables seamless event planning, RSVP management, and guest engagement in a modern mobile experience.",
    link: "https://vksoftwares.com/",
    phoneMockup: phoneMockup,
    bgImage: bgImage,
  },
  {
    id: 11,
    title: "Krrida",
    subtitle: "Your Social Event Management Hub",
    description:
      "Krrida enables seamless event planning, RSVP management, and guest engagement in a modern mobile experience.",
    link: "https://krrida.com/",
    phoneMockup: phoneMockup,
    bgImage: bgImage,
  },
  {
    id: 12,
    title: "Zedbox",
    subtitle: "Your Social Event Management Hub",
    description:
      "Zedbox enables seamless event planning, RSVP management, and guest engagement in a modern mobile experience.",
    link: "https://zedbox.com/",
    phoneMockup: phoneMockup,
    bgImage: bgImage,
  },
  {
    id: 13,
    title: "JM Exports",
    subtitle: "Your Social Event Management Hub",
    description:
      "JM Exports enables seamless event planning, RSVP management, and guest engagement in a modern mobile experience.",
    link: "https://jmexports.com/",
    phoneMockup: phoneMockup,
    bgImage: bgImage,
  },
];

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("portfolio");

  return (
    <Layout>
      <Helmet>
        <title> Software and Web App Development Portfolio | Infomagine</title>
        <meta
          name="description"
          content="Browse our portfolio to see innovative software solutions crafted with the right tech stack, delivering results across web, mobile, and enterprise platforms."
        />
        <link rel="canonical" href="https://infomagine.in/portfolio"></link>

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Portfolio | Infomagine Softwares" />
        <meta
          property="og:description"
          content="Explore Infomagine Softwares' portfolio of successful projects across various industries. See how we help businesses grow with tech solutions."
        />
        <meta
          property="og:image"
          content="https://infomagine.in/assets/infomagine%20logo-BsvjEvw5.png"
        />
        <meta property="og:url" content="https://infomagine.in/portfolio" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Infomagine Softwares" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:country" content="US, UK, UAE, AU, NZ" />

        {/* JSON-LD Schema Markup */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            headline: "Portfolio of Infomagine Softwares",
            provider: {
              "@type": "Organi  zation",
              name: "Infomagine Softwares",
              url: "https://infomagine.in/portfolio",
              logo: "https://infomagine.in/logo.png",
              sameAs: [
                "https://www.facebook.com/Infomaginesoftwares",
                "https://www.instagram.com/infomagine_softwares/",
                "https://www.linkedin.com/company/13313914/",
                "https://x.com/InfocoxSocial",
                "https://in.pinterest.com/infomaginesoftwares/",
              ],
            },
            url: "https://infomagine.in/portfolio",
            description:
              "Infomagine Softwares' portfolio includes successful projects in custom software development, mobile apps, and digital solutions.",
          })}
        </script>
      </Helmet>
      <div className="mb-20 flex gap-20 flex-col">
        {/* Header Section */}
        <div className="w-full relative h-[35rem]" data-aos="fade-down">
          <img className="w-full h-full object-cover" src={portfolio} alt="" />
          <div className="absolute text-white top-[50%] left-[10%]">
            <p className="text-5xl font-bold">Portfolio</p>
            <div className="flex gap-2">
              <Link to={"/"}>Home</Link>
              <p>&gt;</p>
              <p>Portfolio</p>
            </div>
          </div>
        </div>

        {/* Title Section */}
        <div className="flex flex-col gap-2 items-center" data-aos="zoom-in">
          <span className="text-xl text-[#FF3C00]">Portfolio</span>
          <span className="text-4xl md:text-start text-center font-bold">
            Check Out Our Latest Projects
          </span>
        </div>

        {/* Tabs Section */}

        <div className="flex justify-center gap-4 mb-8">
          <button
            className={`px-6 py-2 text-lg font-semibold ${
              activeTab === "portfolio"
                ? "bg-[#FF3C00] text-white"
                : "bg-gray-200 text-gray-800"
            } rounded`}
            onClick={() => setActiveTab("portfolio")}
          >
            Portfolio
          </button>
          <button
            className={`px-6 py-2 text-lg font-semibold ${
              activeTab === "caseStudies"
                ? "bg-[#FF3C00] text-white"
                : "bg-gray-200 text-gray-800"
            } rounded`}
            onClick={() => setActiveTab("caseStudies")}
          >
            Case Studies
          </button>
        </div>

        {/* Content Section */}
        {activeTab === "portfolio" ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:pl-40 md:pr-40 pl-5 pr-5">
            {portfolioItems.map((item, index) => (
              <div
                key={item.id}
                className={`relative group overflow-hidden flex transition duration-300 ease-in-out ${
                  bgColors[index % bgColors.length]
                }`}
                data-aos={
                  [
                    "fade-up",
                    "fade-down",
                    "zoom-in",
                    "flip-left",
                    "flip-right",
                    "fade-right",
                  ][index % 6]
                }
              >
                <div className="w-[500px] flex justify-center items-center h-[300px]">
                  <div className="bg-white w-[250px] rounded-full flex items-center justify-center h-[250px]">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-[90%] h-[50%] object-contain"
                    />
                  </div>
                </div>
                <a href={item.href} target="_blank">
                  <div className="absolute inset-0 bg-opacity-0 hover:opacity-60 hover:bg-black flex-col gap-2 cursor-pointer flex items-start justify-start p-10 transition duration-300">
                    <p className="text-white text-2xl font-semibold opacity-0 group-hover:opacity-100 transition duration-300">
                      {item.title}
                    </p>
                    <button className="opacity-0 group-hover:opacity-100">
                      <FaCircleArrowRight className="text-4xl cursor-pointer text-white" />
                    </button>
                  </div>
                </a>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col gap-20">
            {caseStudies.map((study, index) => (
              <section
                key={study.id}
                className={`relative w-full py-16 lg:px-20 overflow-hidden ${
                  index % 2 === 0 ? "bg-[#fdeee9]" : "bg-[#e6f7f2]"
                }`}
              >
                <img
                  src={study.bgImage}
                  alt="Background"
                  className={`absolute top-0 z-0 object-cover w-full h-80 lg:h-full lg:w-1/2 ${
                    index % 2 === 0 ? "lg:right-0" : "lg:left-0"
                  }`}
                />

                {/* Mobile Phone Mockup */}
                <div className="lg:hidden absolute top-60 left-0 w-full h-40 z-10 flex justify-center items-center">
                  <img
                    src={study.phoneMockup}
                    alt={study.title}
                    className="w-[80px] drop-shadow-2xl animate-float"
                  />
                </div>

                {/* Content */}
                <div className="relative z-20 mt-80 lg:mt-0 grid grid-cols-1 lg:grid-cols-3 items-center gap-10">
                  {index % 2 === 0 ? (
                    <div className="text-left lg:col-span-1 p-5">
                      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        {study.title}
                      </h2>
                      <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-4">
                        {study.subtitle}
                      </h3>
                      <p className="text-gray-700 mb-6  mx-auto lg:mx-0 lg:max-w-none">
                        {study.description}
                      </p>
                      {/* <a
                        href={study.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#ff5722] font-medium hover:underline inline-flex items-center gap-1"
                      >
                        View Case Study <span>↗</span>
                      </a> */}
                    </div>
                  ) : (
                    <div className="hidden lg:block lg:col-span-1"></div>
                  )}

                  {/* Desktop Phone Mockup */}
                  <div className="hidden lg:flex justify-center lg:col-span-1">
                    <img
                      src={study.phoneMockup}
                      alt={study.title}
                      className="w-[280px] drop-shadow-2xl animate-float"
                    />
                  </div>
                  {index % 2 === 0 ? (
                    <div className="hidden lg:block lg:col-span-1"></div>
                  ) : (
                    <div className="text-left lg:text-left lg:col-span-1 p-5">
                      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        {study.title}
                      </h2>
                      <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-4">
                        {study.subtitle}
                      </h3>
                      <p className="text-gray-700 mb-6 mx-auto lg:mx-0 lg:ml-auto">
                        {study.description}
                      </p>
                      {/* <a
                        href={study.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#ff5722] font-medium hover:underline inline-flex items-center gap-1"
                      >
                        View Case Study <span>↗</span>
                      </a> */}
                    </div>
                  )}
                </div>
              </section>
            ))}

            {/* Floating animation */}
            <style jsx>
              {`
                @keyframes float {
                  0% {
                    transform: translateY(0);
                  }
                  50% {
                    transform: translateY(-20px);
                  }
                  100% {
                    transform: translateY(0);
                  }
                }
                .animate-float {
                  animation: float 5s ease-in-out infinite;
                }
              `}
            </style>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Portfolio;
