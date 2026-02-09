import React from "react";
import Layout from "../Layout";
import portfolio from "../../assets/portfolio.jpg";
import acfixer from "../../assets/ac-fixer.png";
import SKP from "../../assets/SKP.png";
import peacock from "../../assets/peacock.png";
import infocox from "../../assets/infocox.png";
import moneymatter from "../../assets/money-matter.png";
import mari from "../../assets/mari.png";
import birthwise_logo from "../../assets/Birthwise.jpg";
import cooper from "../../assets/cooper research group.jpg";
import juna from "../../assets/juna mahal.jpg";
import quack from "../../assets/img-3.jpg";
import lifecreative from "../../assets/life creative.jpg";
import DEi from "../../assets/DEi.jpg";
import mind from "../../assets/mind designing.jpg";
import ABC from "../../assets/ABC.jpg";
import animal from "../../assets/animals we care.jpg";
import oxford from "../../assets/my oxford.jpg";
import wordsfeast from "../../assets/wordsfeast.jpg";
import himalaya from "../../assets/himalaya.jpg";
import Dadn from "../../assets/Dadn.jpg";
import { FaCircleArrowRight } from "react-icons/fa6";
import romex from "../../assets/romesh300.png";
import file from "../../assets/logo1 (2).png";
import peny from "../../assets/logo_coin.png";
import Bubbles from "../../assets/Bubbles.png";
import invitehive from "../../assets/invitehive.png";
import Zedbox from "../../assets/Zedbox.png";
import vksodtware from "../../assets/vksodtware.png";
import carpetlogo from "../../assets/carpetlogo.png";
import Jmexports from "../../assets/Jm-exports.png";
import krridahome from "../../assets/krrida-home.png";

import KHT from "../../assets/KHT.png";
import fundnest from "../../assets/FUNDNEST 2.png";
import madstack from "../../assets/MadStack Invovation logo Black-01.png";
import { href, Link } from "react-router";
import { Helmet } from "react-helmet";

const portfolioItems = [
  // { id: 1, title: "Ac Fixer", image: acfixer, href: "" },
  {
    id: 2,
    title: "SKP",
    image: SKP,
    href: "https://www.skplegalsolutions.com/",
  },
  // { id: 3, title: "Peacock Gems", image: peacock, href: ""  },
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
    href: "https://invitehive.com/",
  },
  {
    id: 6,
    title: "Kanha home tutions",
    image: KHT,
    href: "https://kanhahometutions.com/",
  },
  { id: 7, title: "Fundnest", image: fundnest, href: "https://fundnest.in/" },
  // { id: 8, title: "Cooper research group", image: cooper, href: ""  },
  // { id: 9, title: "juna mahal", image: juna, href: "" },
  // { id: 10, title: "Quack quack go", image: quack, href: "" },
  {
    id: 11,
    title: "Lift creative",
    image: lifecreative,
    href: "https://liftcreative.com/",
  },
  // { id: 12, title: "Dei", image: DEi, href: "" },
  {
    id: 13,
    title: "Mind designing",
    image: mind,
    href: "https://minddesigning.com/",
  },
  
  // { id: 14, title: "FileXplorer", image: file, href: "" },
  // { id: 15, title: "Amazing Alphabets", image: ABC, href: "" },
  // { id: 16, title: "Animals We Care", image: animal, href: "" },
  // { id: 17, title: "MyOxford", image: oxford, href: "" },
  // { id: 18, title: "Penny Perfect", image: peny, href: "" },
  // { id: 19, title: "Words Feast", image: wordsfeast, href: "" },
  // { id: 20, title: "Romex Power", image: romex, href: "" },
  // { id: 21, title: "Himalaya Fine Dining", image: himalaya, href: "" },
  // { id: 22, title: "Bang Bang Bubble", image: Bubbles, href: "" },
  // { id: 23, title: "DADn.ME", image: Dadn, href: "" },
  // { id: 24, title: "Infocox", image: infocox, href: "" },
  {
    id: 25,
    title: "Moneymatter",
    image: moneymatter,
    href: "https://moneymatters.co.in/",
  },
  // { id: 26, title: "Birthwise", image: birthwise_logo, href: "" },

  {
    id: 27,
    title: "Carpet & Textile House",
    image: carpetlogo,
    href: "https://carpetandtextilehouse.com/",
  },
  // { id: 28, title: "Jmgemstones", image: birthwise_logo, href: "https://jmgemstones.com/" },
  {
    id: 29,
    title: "VK Softwares",
    image: vksodtware,
    href: "https://vksoftwares.com/",
  },
  { id: 30, title: "Krrida", image: krridahome, href: "https://krrida.com/" },
  { id: 31, title: "Zedbox", image: Zedbox, href: "https://zedbox.co.in/" },
  // { id: 32, title: "", image: , href: "" },
  // { id: 33, title: "", image: , href: "" },
  {
    id: 34,
    title: "JM Exports",
    image: Jmexports,
    href: "https://jmgemstones.com/",
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

const Portfolio = () => {
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
              "@type": "Organization",
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

        {/* Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:pl-40 md:pr-40 pl-5 pr-5 ">
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
      </div>
    </Layout>
  );
};

export default Portfolio;
