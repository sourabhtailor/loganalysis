import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import Layout from "../Layout";
import headimg from "../../assets/headimg.png";
import mobileapp from "../../assets/Mobile app.png";
import webapp from "../../assets/Web app.png";
import desktopsoftware from "../../assets/desktop software.png";
import itstaffing from "../../assets/it staffing.png";
import itconsulting from "../../assets/it-consulting.png";
import digitalmarketing from "../../assets/Digital marketing.png";
import aboutus from "../../assets/aboutus.png";
import skillsandabilities from "../../assets/skills and abilities.png";
import acfixer from "../../assets/ac fixer.png";
import icon1 from "../../assets/icon-1.png";
import icon2 from "../../assets/icon-2.png";
import icon3 from "../../assets/icon-3.png";
import icon4 from "../../assets/icon-4.png";
import icon5 from "../../assets/icon-5.png";
import icon6 from "../../assets/icon-6.png";
import headbg from "../../assets/headbg.jpg";
import heroimg1 from "../../assets/heroimg1.jpg";
import heroimg2 from "../../assets/heroimg2.jpg";
import heroimg3 from "../../assets/heroimg3.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Navbar from "../navbar/Navbar";
import { Link } from "react-router";
import axiosInstance from "../../axios";
import SKP from "../../assets/SKP.png";
import infocox from "../../assets/infocox.png";
import moneymatter from "../../assets/money-matter.png";
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
import KHT from "../../assets/KHT.png";
import fundnest from "../../assets/FUNDNEST 2.png";
import Jmexports from "../../assets/Jm-exports.png";
import Man from "../../assets/man.png";
import Man_1 from "../../assets/man-1.png";
import Man_2 from "../../assets/man-2.png";
import madstack from "../../assets/MadStack Invovation logo Black-01.png";
import { slugify } from "../../../slugify";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaStar } from "react-icons/fa";
import Popup from "../footer/Popup";
import ceoimage from "../../assets/ceo.png";


const portfolioItems = [
  {
    id: 1,
    title: "Invitehive",
    image: invitehive,
    href: "https://invitehive.com/",
  },
  {
    id: 2,
    title: "JM Exports",
    image: Jmexports,
    href: "https://jmgemstones.com/",
  },
  {
    id: 3,
    title: "Madstack Invovation",
    image: madstack,
    href: "https://www.madstackinnovation.com/",
  },
  {
    id: 4,
    title: "Kanha home tutions",
    image: KHT,
    href: "https://kanhahometutions.com/",
  },
  { id: 5, title: "Fundnest", image: fundnest, href: "https://fundnest.in/" },
  {
    id: 6,
    title: "SKP",
    image: SKP,
    href: "https://www.skplegalsolutions.com/",
  },
  { id: 7, title: "Ac Fixer", image: acfixer },
  { id: 8, title: "Cooper research group", image: cooper },
  { id: 9, title: "juna mahal", image: juna },
  { id: 10, title: "Quack quack go", image: quack },
  { id: 11, title: "Life creative", image: lifecreative },
  { id: 12, title: "Dei", image: DEi },
  { id: 13, title: "Mind designing", image: mind },
  { id: 14, title: "FileXplorer", image: file },
  { id: 15, title: "Amazing Alphabets", image: ABC },
  { id: 16, title: "Animals We Care", image: animal },
  { id: 17, title: "MyOxford", image: oxford },
  { id: 18, title: "Penny Perfect", image: peny },
  { id: 19, title: "Words Feast", image: wordsfeast },
  { id: 20, title: "Romesh Power", image: romex },
  { id: 21, title: "Himalaya Fine Dining", image: himalaya },
  { id: 22, title: "Bang Bang Bubble", image: Bubbles },
  { id: 23, title: "DADn.ME", image: Dadn },
  { id: 24, title: "Infocox", image: infocox },
  { id: 25, title: "Moneymatter", image: moneymatter },
  { id: 26, title: "Birthwise", image: birthwise_logo },
];

const steps = [
  {
    icon: icon1,
    title: "Discovery – Define Goals & Requirements",
    desc: "We analyze your business needs, pain points, and goals through stakeholder sessions. Our discovery process sets the foundation for tailored, growth-oriented software development.",
  },
  {
    icon: icon2,
    title: "System Design – Scalable Software Architecture",
    desc: "We design a scalable architecture and select the right tech stack for performance, security, and cost-efficiency. Your software is built to support future business expansion.",
  },
  {
    icon: icon3,
    title: "UI/UX & Architecture – User-Centric & Secure",
    desc: "We craft intuitive UI/UX backed by secure architecture. The result is responsive, user-friendly software experiences optimized for web, mobile, and enterprise platforms.",
  },
  {
    icon: icon4,
    title: "Development & Deployment – Fast, Agile & Reliable",
    desc: "Using agile sprints, we build, test, and deploy your solution efficiently. We ensure smooth, secure delivery with zero downtime, scalably optimized for live production use.",
  },
  {
    icon: icon5,
    title: "Testing & QA – Secure & Bug-Free Launch",
    desc: "Our QA experts run detailed manual, automated, and UAT testing cycles to ensure your software is bug-free, high-performing, and fully aligned with your business logic.",
  },
  {
    icon: icon6,
    title: "Maintenance & Support – Keep Growing Safely",
    desc: "Post-launch, we offer long-term software support, upgrades, and performance checks. Your solution stays secure, scalable, and aligned with evolving business needs.",
  },
];

const reviews = [
  {
    id: 1,
    name: "Abhishek Jain",
    company: "Peacock Gemstones",
    review:
      "Infomagine delivered a robust web application that exceeded our expectations. Their team was professional, responsive, and committed to our success.",
    rating: 5,
    avatar: Man,
  },
  {
    id: 2,
    name: "Nitesh Aggarwal",
    company: "InviteHive",
    review:
      "The mobile app developed by Infomagine transformed our customer engagement. Their attention to detail and innovative approach made all the difference.",
    rating: 4,
    avatar: Man_2,
  },
  {
    id: 3,
    name: "Rohit Khandelwal",
    company: "Money Matter",
    review:
      "Working with Infomagine was a game-changer. Their IT consulting services helped us streamline operations and scale efficiently.",
    rating: 5,
    avatar: Man_1,
  },
  {
    id: 5,
    name: "Abhishek Khandelwal",
    company: "SKP Legal Solutions",
    review:
      "Infomagine’s digital marketing strategies significantly boosted our online presence. Their team is knowledgeable and results-driven.",
    rating: 5,
    avatar: Man,
  },
  {
    id: 6,
    name: "Pritam Aggarwal",
    company: "Kanha Home Tutions",
    review:
      "The desktop software developed by Infomagine is user-friendly and highly functional. Their commitment to quality is evident in every aspect of their work.",
    rating: 5,
    avatar: Man_2,
  },
];

const technologies = [
  // Programming Languages
  {
    name: ".NET",
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/dotnet.svg",
  },
  { name: "Java", icon: "/java.png" }, // Suggest local SVG; download from simpleicons.org
  {
    name: "PHP",
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/php.svg",
  },
  {
    name: "Python",
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/python.svg",
  },
  {
    name: "ROR (Ruby on Rails)",
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/ruby.svg",
  },
  {
    name: "HTML",
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/html5.svg",
  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/javascript.svg",
  },
  {
    name: "Flutter",
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/flutter.svg",
  },

  // Frameworks
  {
    name: "CakePHP",
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/cakephp.svg",
  },
  {
    name: "CodeIgniter",
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/codeigniter.svg",
  },
  { name: "Yii", icon: "/yii.png" }, // Suggest local SVG; download from yiiframework.com
  {
    name: "Laravel",
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/laravel.svg",
  },
  { name: "Zend", icon: "/zend.png" }, // Suggest local SVG; download from zend.com
  {
    name: "Spring Boot",
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/springboot.svg",
  },
  {
    name: "Hibernate",
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/hibernate.svg",
  },
  {
    name: "Node.js",
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/nodedotjs.svg",
  },
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/react.svg",
  },
  {
    name: "AngularJS",
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/angular.svg",
  },

  // CMS
  {
    name: "Drupal",
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/drupal.svg",
  },
  {
    name: "Joomla",
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/joomla.svg",
  },
  {
    name: "Magento",
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/magento.svg",
  },
  {
    name: "WordPress",
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/wordpress.svg",
  },
  { name: "OpenCart", icon: "/opencart.png" }, // Suggest local png; download from opencart.com
  {
    name: "Shopify",
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/shopify.svg",
  },
  {
    name: "OS Commerce",
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/woocommerce.svg",
  },

  // Database & Web Services
  {
    name: "SQL Server",
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/microsoftsqlserver.svg",
  },
  {
    name: "Oracle",
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/oracle.svg",
  },
  {
    name: "MySQL",
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/mysql.svg",
  },
  {
    name: "SQLite",
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/sqlite.svg",
  },
  {
    name: "PostgreSQL",
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/postgresql.svg",
  },
  {
    name: "MongoDB",
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/mongodb.svg",
  },
  {
    name: "Firebase",
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/firebase.svg",
  },
  { name: "REST", icon: "/rest.png" }, // Suggest local png; custom design recommended
  { name: "SOAP", icon: "/api.png" }, // Suggest local png; custom design recommended
  {
    name: "GraphQL",
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/graphql.svg",
  },
  {
    name: "AWS",
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/amazonaws.svg",
  },
  {
    name: "Azure",
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/microsoftazure.svg",
  },
  {
    name: "Google Cloud",
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/googlecloud.svg",
  },
  {
    name: "Docker",
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/docker.svg",
  },

  // Mobile Platforms
  {
    name: "iOS",
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/apple.svg",
  },
  {
    name: "Android",
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/android.svg",
  },
  {
    name: "Ionic",
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/ionic.svg",
  },
  { name: "PhoneGap", icon: "/phonegap.png" }, // Suggest local SVG; download from phonegap.com
  {
    name: "Sencha",
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/sencha.svg",
  },
  {
    name: "Xamarin",
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/xamarin.svg",
  },

  // Cloud Computing
  {
    name: "Azure",
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/microsoftazure.svg",
  },
  {
    name: "Google Cloud",
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/googlecloud.svg",
  },
  { name: "Salesforce", icon: "/salesforce.png" },
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

const Home = () => {

  const [projectCount, setProjectCount] = useState(0);
  const [experienceYears, setExperienceYears] = useState(0);
  const [expertMembers, setExpertMembers] = useState(0);
  const [satisfactionRate, setSatisfactionRate] = useState(0);

  const progressData = [
    { title: "Business Strategy", percent: 90 },
    { title: "Technology Consulting", percent: 99 },
    { title: "Product Development", percent: 100 },
  ];

  useEffect(() => {
    countUp(200, setProjectCount, 1500);
    countUp(15, setExperienceYears, 2000);
    countUp(25, setExpertMembers, 2500);
    countUp(100, setSatisfactionRate, 1000);
  }, []);

  const countUp = (target, setFunction, duration = 2000) => {
    let start = 0;
    const increment = Math.ceil(target / (duration / 16));

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setFunction(target);
        clearInterval(timer);
      } else {
        setFunction(start);
      }
    }, 16);
  };

  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = async () => {
    try {
      const response = await axiosInstance.get("get_blog.php");
      setBlogs(response.data.data);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };
  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <>
      <Navbar />
      <Layout>
        <Helmet>
          <title>
            Custom software | Application | Web Development Services | Infomagine
          </title>
          <meta
            name="description"
            content="As a trusted partner, Infomagine offers custom software development services and stands tall among the top IT software companies in India, with mobile apps, web apps & IT consultation in Jaipur."
          />

          <link rel="canonical" href="https://infomagine.in"></link>
          <meta
            property="og:title"
            content="Custom software | Application | Web Development Services | Infomagine"
          />
          <meta
            property="og:description"
            content="As a trusted partner, Infomagine offers custom software development services and stands tall among the top IT software companies in India, with mobile apps, web apps & IT consultation in Jaipur."
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
        <div className="flex flex-col">
          <div
            style={{
              backgroundImage: `url(${headbg})`,
            }}
            className="bg-cover bg-center bg-[#030615] w-full md:h-[45rem] h-[60rem]  "
          >
            
            <div className="flex flex-col-reverse lg:flex-row items-center px-4 lg:px-20 py-10 gap-10">
              {/* Left Content */}
              <div className="flex flex-col gap-6 text-center lg:text-left lg:w-1/2">
                <h1
                  data-aos="fade-right"
                  className="text-white text-4xl sm:text-5xl lg:text-6xl leading-tight font-bold"
                >
                  Custom Software Development
                  <span className="text-[#FF3C00]"> Services</span>
                </h1>
                <p
                  data-aos="fade-left"
                  className="text-white leading-6 text-sm sm:text-base md:text-lg mx-auto lg:mx-0 lg:w-[90%]"
                >
                  Our custom software development services help businesses build
                  secure, scalable, and high-performance applications tailored
                  to their goals. From modernizing legacy systems to developing
                  new digital products, we deliver solutions that align with
                  your business strategy. With a focus on usability, speed, and
                  flexibility, we serve clients across the USA, UK, UAE, and
                  beyond. Whether it’s web, mobile, or desktop software, our
                  team ensures every product supports long-term growth and
                  operational efficiency.
                </p>
                <Link
                  data-aos="fade-left"
                  to={"/contact-us"}
                  className="bg-[#FF3C00] hover:bg-white hover:text-black transition text-white py-3 px-6 rounded-full w-fit mx-auto lg:mx-0"
                >
                  Let's talk
                </Link>
              </div>

              {/* Right Image */}
              <div data-aos="fade-left" className="w-full lg:w-1/2">
                <img
                  className="w-full h-auto max-w-md mx-auto lg:max-w-full"
                  src={headimg}
                  alt="Custom Software Development Services by Infomagine"
                />
              </div>
            </div>
          </div>

          {/* Services Section */}
          <div
            style={{
              backgroundImage: `url(${heroimg1})`,
            }}
            className="flex bg-cover bg-center flex-col gap-10 px-4 md:px-10 lg:px-40 pt-24 pb-16"
          >
            <span className="text-xl md:text-2xl font-medium text-[#FF3C00] text-center lg:text-left">
              Services
            </span>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center lg:text-left lg:w-1/2">
              Custom Software Development Services: Our Global
              <span className="text-[#FF3C00]"> Expertise</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  img: mobileapp,
                  title: "Mobile Application Development",
                  desc: "We create custom iOS and Android apps with user-friendly interfaces and robust features. Our mobile solutions enhance customer experience and support business growth across industries.",
                  link: "/mobile-applications",
                  aos: "flip-left",
                },
                {
                  img: webapp,
                  title: "Web Application Development",
                  desc: "Build secure, scalable web applications tailored to your business needs. We deliver responsive, SEO-friendly web solutions with strong backend architecture for global reach.",
                  link: "/web-applications",
                  aos: "flip-right",
                },
                {
                  img: desktopsoftware,
                  title: "Desktop Software Development",
                  desc: "Get high-performance desktop applications built for speed, security, and cross-platform use. Ideal for businesses needing offline access and enterprise-grade functionality.",
                  link: "/desktop-applications",
                  aos: "flip-left",
                },
                {
                  img: itstaffing,
                  title: "IT Consulting for Global Enterprises",
                  desc: "We help you align your IT infrastructure with your business strategy. Our consulting services enable digital transformation, system optimization, and long-term tech scalability.",
                  link: "/it-consulting",
                  aos: "flip-left",
                },
                {
                  img: itconsulting,
                  title: "IT Staffing Solutions",
                  desc: "Hire skilled IT professionals on demand. We connect you with remote developers and engineers who integrate seamlessly to accelerate your software development and reduce costs.",
                  link: "/it-staffing",
                  aos: "flip-right",
                },
                {
                  img: digitalmarketing,
                  title: "Digital Marketing Services",
                  desc: "Boost your online presence with tailored digital marketing. From SEO to lead generation, we help software companies grow visibility, attract traffic, and convert leads globally.",
                  link: "/digital-marketing",
                  aos: "flip-left",
                },
              ].map((service, index) => (
                <div
                  key={index}
                  data-aos={service.aos}
                  data-aos-delay={index * 100}
                  className="bg-[#F4F4F4] hover:shadow-2xl transition-shadow relative flex flex-col items-start justify-between gap-5 p-6 sm:p-8 rounded-lg"
                >
                  <img width={60} src={service.img} alt={service.title} />
                  <span className="text-lg sm:text-xl font-bold">
                    {service.title}
                  </span>
                  <p className="text-sm sm:text-base">{service.desc}</p>
                  <a
                    href={service.link}
                    className="bg-white hover:bg-[#ff3c00] hover:text-white px-4 py-2 border border-gray-300 rounded-full text-sm font-medium"
                  >
                    Read More +
                  </a>
                  <div className="bg-black text-white text-sm px-2 py-1 absolute top-0 right-0 rounded-bl">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* About Section */}

          <div className="bg-[#030615] flex flex-col items-center justify-center gap-20 mt-24 px-4 py-16">
            {/* About Section */}
            <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-20 w-full max-w-7xl">
              {/* Image */}
              <div data-aos="fade-right" className="w-full lg:w-1/2">
                <img
                  className="w-full h-auto object-contain"
                  src={aboutus}
                  alt="About Us"
                />
              </div>

              {/* Text Content */}
              <div
                data-aos="zoom-out-left"
                className="w-full lg:w-1/2 flex flex-col justify-center gap-6 text-white text-center lg:text-left"
              >
                <span className="text-[#FF3C00] text-lg font-medium">
                  About Infomagine
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
                  Global Software Development Company
                </h2>
                <p>
                  With over 15+ years of global experience, Infomagine delivers
                  innovative, scalable software development services that drive
                  business transformation. We specialize in building
                  high-performance solutions for startups, enterprises, and
                  digital agencies across the USA, UK, UAE, Australia, and other
                  leading markets.
                </p>
                <p>
                  Our mission is to simplify complex processes, accelerate
                  digital innovation, and empower clients with cutting-edge
                  technologies.
                </p>
                <ul className="flex flex-col gap-3 list-disc pl-6">
                  <li>
                    Create user-friendly, intuitive interfaces that improve
                    engagement and streamline operations.
                  </li>
                  <li>
                    Apply data-driven strategies to accelerate your digital
                    transformation journey.
                  </li>
                  <li>
                    Deliver future-ready solutions using scalable, secure, and
                    modern technologies tailored to your industry.
                  </li>
                </ul>

                <hr className="opacity-15 border-t border-white/10 my-4" />

                <a
                  data-aos="fade-left"
                  href="/about-us"
                  className="flex items-center justify-center gap-4 py-3 px-6 bg-[#FF3C00] hover:bg-white hover:text-black transition rounded-full w-fit mx-auto lg:mx-0"
                >
                  Learn More
                  <div className="bg-white text-black px-3 py-1 rounded-full hover:bg-[#FF3C00] hover:text-white">
                    +
                  </div>
                </a>
              </div>
            </div>

            {/* Divider Text */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-white text-center px-4">
              <hr className="w-full md:w-[30rem] border opacity-20 border-amber-50" />
              <span className="whitespace-nowrap text-sm sm:text-base">
                Infomagine Finished this Achievement in 15 Years
              </span>
              <hr className="w-full md:w-[30rem] border opacity-20 border-amber-50" />
            </div>

            {/* Stats Section */}
            <div className="w-full px-4 sm:px-6 lg:px-8">
              <div className="max-w-7xl mx-auto">
                <div
                  data-aos="zoom-in"
                  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center"
                >
                  {[
                    { label: "Project Complete", value: projectCount },
                    { label: "Years Experience", value: experienceYears },
                    { label: "Expert Member", value: expertMembers },
                    {
                      label: "Satisfaction Rate",
                      value: satisfactionRate,
                      isPercentage: true,
                    },
                  ].map((stat, index) => (
                    <div key={index} className="space-y-2">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 + index * 0.2 }}
                        className="text-3xl sm:text-4xl font-bold text-[#FF3C00]"
                      >
                        {stat.value}
                        {stat.isPercentage ? "%" : "+"}
                      </motion.div>
                      <p className="text-base text-gray-300">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Technologies Section */}
          <div className="flex flex-col bg-cover bg-center items-center justify-center gap-10 lg:gap-20 px-4 lg:px-40 py-16">
            <div className="flex flex-col items-center justify-center gap-6 text-center">
              <span className="text-[#FF3C00] font-semibold text-lg sm:text-xl">
                Technologies
              </span>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-snug">
                Cutting-Edge Technologies for Modern Solutions
              </h3>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-8 gap-6">
              {technologies.map((tech, index) => (
                <div>
                  <div
                    key={index}
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
                    data-aos-delay={index * 100}
                    className="bg-[#F4F4F4] hover:shadow-2xl transition-shadow flex flex-col items-center justify-center gap-4 p-6 rounded-lg"
                  >
                    <img
                      src={tech.icon}
                      alt={tech.name}
                      className="w-16 h-16 object-contain"
                    />
                  </div>
                  <div className="flex justify-center items-center mt-2">
                    <p className="text-sm sm:text-base font-medium text-gray-800">
                      {tech.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Section */}
          <div
            style={{ backgroundImage: `url(${heroimg2})` }}
            className="flex flex-col lg:flex-row bg-cover bg-center items-center justify-center gap-10 lg:gap-20 px-4 lg:px-20 py-16"
          >
            {/* Text Content */}
            <div
              data-aos="fade-up-right"
              className="w-full lg:w-1/2 flex flex-col justify-center gap-6 text-center lg:text-left"
            >
              <span className="text-[#FF3C00] font-semibold text-lg sm:text-xl">
                Skills & Abilities
              </span>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-snug">
                End-to-End Software Development Expertise for Business Growth
              </h3>
              <p className="text-sm sm:text-base text-gray-100">
                Infomagine offers full-cycle software development services to
                solve complex business challenges and accelerate innovation.
                From strategic planning to product delivery, our expert team
                builds scalable, secure, and user-centric digital solutions
                tailored to your industry.
              </p>

              {/* Progress Bars */}
              <div className="w-full">
                <div className="flex flex-col gap-6 w-full">
                  {progressData.map((item, index) => (
                    <div key={index} className="flex flex-col gap-2">
                      <div className="flex justify-between text-sm sm:text-base">
                        <span className="font-medium">{item.title}</span>
                        <span>{item.percent}%</span>
                      </div>
                      <div className="w-full bg-gray-300 rounded-full h-2 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${item.percent}%` }}
                          transition={{ duration: 1.5, delay: index * 0.2 }}
                          className="h-full bg-[#FF3C00] rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Image Section */}
            <div
              data-aos="fade-up-left"
              className="w-full lg:w-1/2 flex justify-center"
            >
              <img
                src={skillsandabilities}
                alt="Skills and Abilities"
                className="w-full max-w-md object-contain"
              />
            </div>
          </div>

          {/* Client Success Stories Section */}
          {/* Portfolio Section */}
          <div className="flex flex-col lg:flex-row md:mt-15 pl-20 pr-20 justify-between items-start gap-6">
            <div className="flex flex-col gap-2">
              <span className="text-[#FF3C00] font-semibold text-xl">
                Client Success Stories
              </span>
              <h4 className="text-3xl md:text-4xl font-bold text-center max-w-xl">
                Discover How We Helped...
              </h4>
            </div>
            <a
              href="/portfolio"
              className="bg-[#FF3C00] hover:bg-white hover:text-black text-white px-6 py-3 rounded-full flex items-center gap-2"
            >
              All Projects{" "}
              <div className="bg-white text-black px-3 py-1 rounded-full">
                +
              </div>
            </a>
          </div>

          {/* Grid Section */}
          <div className="px-5 md:px-20 mt-30 relative w-full">
            <Swiper
              spaceBetween={30}
              slidesPerView={3}
              slidesPerGroup={1} // Slide one by one
              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              breakpoints={{
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
              }}
              className="custom-swiper"
              style={{ width: "100%", maxWidth: "none" }} // Ensure full width
            >
              {portfolioItems.slice(0, 6).map((item, index) => (
                <SwiperSlide
                  key={item.id}
                  className={`relative group flex transition duration-200 ease-in-out px-2 ${
                    bgColors[index % bgColors.length]
                  }`}
                  style={{
                    minHeight: "300px",
                    overflow: "visible",
                    width: "33.33%",
                  }} // Force 1/3 width per slide
                >
                  <div className=" flex justify-center items-center h-[300px]">
                    <div className="bg-white w-[250px] rounded-full flex items-center justify-center h-[250px] overflow-visible">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-[90%] h-[50%] object-contain"
                        style={{
                          display: "block",
                          visibility: "visible",
                          opacity: 1,
                        }}
                      />
                    </div>
                  </div>
                  <a href={item.href} target="_blank" rel="noopener noreferrer">
                    <div className="absolute inset-0 bg-opacity-0 hover:opacity-60 hover:bg-black flex-col gap-2 cursor-pointer flex items-start justify-start p-10 transition duration-300">
                      <p className="text-white text-2xl font-semibold opacity-0 group-hover:opacity-100 transition duration-300">
                        {item.title}
                      </p>
                      <button className="opacity-0 group-hover:opacity-100">
                        <FaCircleArrowRight className="text-4xl cursor-pointer text-white" />
                      </button>
                    </div>
                  </a>
                </SwiperSlide>
              ))}
            </Swiper>
            <style jsx>{`
              .custom-swiper .swiper-slide {
                overflow: visible !important;
                opacity: 1 !important;
                display: block !important;
                visibility: visible !important;
                // width: 45%!important; // Ensure each slide takes 1/3 of the container
              }
              .custom-swiper .swiper-slide img {
                display: block !important;
                visibility: visible !important;
                opacity: 1 !important;
              }
              .custom-swiper .swiper-wrapper {
                align-items: center;
                height: auto !important;
              }
              .custom-swiper {
                width: 100% !important;
                max-width: none !important;
              }
              @media (max-width: 1024px) {
                .custom-swiper .swiper-slide {
                  width: 50% !important; // Adjust for 2 slides on medium screens
                }
              }
              @media (max-width: 768px) {
                .custom-swiper .swiper-slide {
                  width: 100% !important; // Adjust for 1 slide on small screens
                }
              }
            `}</style>
          </div>

          {/* Process Section */}
          <div className="flex flex-col items-center pl-40 pr-40 justify-center gap-4 mt-20">
            <span className="text-xl text-[#FF3C00]">Process</span>

            <span className="font-bold text-center text-4xl">
              Our Proven Custom Software Development Process
            </span>
          </div>
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 px-6 md:px-20 lg:px-40 mt-20 items-center"
            data-aos="fade-down"
          >
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex items-center text-center flex-col gap-8"
              >
                <img width={250} src={step.icon} alt={step.title} />
                <span className="text-2xl font-bold">{step.title}</span>
                <p className="text-center">{step.desc}</p>
              </div>
            ))}
          </div>

          {/* Testimonials Section */}
          <div className="flex flex-col items-center justify-center gap-10 mt-24">
            <span className="text-[#FF3C00] font-semibold text-lg sm:text-xl">
              Testimonials
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center">
              What Our Clients Says
            </h2>
            <div className="px-4 sm:px-6 md:px-10 lg:px-20 py-10 w-full">
              <Swiper
                spaceBetween={16}
                slidesPerView={1} // Default to 1 slide for mobile
                slidesPerGroup={1}
                loop={true}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                pagination={{
                  clickable: true,
                  bulletClass: "swiper-pagination-bullet bg-gray-400",
                  bulletActiveClass:
                    "swiper-pagination-bullet-active bg-[#FF3C00]",
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                breakpoints={{
                  640: {
                    slidesPerView: 1,
                    spaceBetween: 16,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 24,
                  },
                }}
                className="w-full"
              >
                {reviews.map((review) => (
                  <SwiperSlide
                    key={review.id}
                    className="flex justify-center items-center"
                  >
                    <div className="flex flex-col relative justify-between p-6 bg-[#F4F4F4]/50 rounded-lg shadow-md w-full max-w-[350px] sm:max-w-[400px] h-[300px]">
                      <div className="flex items-center gap-4 mb-4">
                        <img
                          className="w-12 h-12 rounded-full object-cover"
                          src={review.avatar}
                          alt={review.name}
                        />
                        <div className="flex flex-col gap-1">
                          <span className="text-base sm:text-lg font-semibold text-gray-800">
                            {review.name}
                          </span>
                          <div className="flex items-center gap-1">
                            {[...Array(review.rating)].map((_, i) => (
                              <FaStar
                                key={i}
                                className="text-yellow-400 w-4 h-4"
                              />
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col gap-4">
                        <p className="text-sm text-gray-600 line-clamp-4">
                          {review.review}
                        </p>
                      </div>

                      <div>
                        <hr className="w-10 border-[#FF3C00] border-2 rounded-full mb-2" />
                        <span className="text-sm text-gray-500">
                          {review.company}
                        </span>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              <style jsx>{`
                .swiper {
                  width: 100%;
                  max-width: 100%;
                }
                .swiper-slide {
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  height: auto;
                }
                .swiper-pagination-bullet {
                  width: 8px;
                  height: 8px;
                  margin: 0 4px;
                  background-color: #ff3c00;
                }
                .swiper-pagination-bullet-active {
                  color: #1e40af; /* changed to dark blue */
                }
                .swiper-button-next,
                .swiper-button-prev {
                  color: Transparent;
                  width: 40px;
                  height: 40px;
                }
                .swiper-button-next {
                  position: absolute;
                  right: 0px;
                }
                .swiper-button-prev {
                  position: absolute;
                  left: 0px;
                }
                .swiper-button-next:after,
                .swiper-button-prev:after {
                  color: Transparent;
                  font-size: 30px;
                }
                @media (max-width: 640px) {
                  .swiper-button-next,
                  .swiper-button-prev {
                    display: none; /* Hide navigation arrows on small screens */
                  }
                }
              `}</style>
            </div>
          </div>

          {/* CEO Quote Section */}
          <div
            style={{
              backgroundImage: `url(${heroimg3})`,
            }}
            className="bg-[#030615] bg-cover bg-center flex flex-col items-center justify-center gap-20 mt-24 py-16 px-6 lg:px-40"
          >
            <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-20">
              <div
                data-aos="fade-right"
                className="w-full lg:w-1/2 flex justify-center"
              >
                <img
                  className="object-contain max-w-[300px] lg:max-w-full"
                  src={ceoimage}
                  alt="About Us"
                />
              </div>
              <div
                data-aos="fade-left"
                className="w-full lg:w-1/2 flex flex-col justify-center gap-6 text-white"
              >
                <h2 className="text-[#FF3C00] md:text-start text-center">
                  CEO Quote
                </h2>
                <h2 className="text-3xl md:text-start text-center md:text-4xl font-bold">
                  What Our CEO Says About Software Development Services,
                  Innovation & Customer Success
                </h2>
                <p className="italic md:text-start text-center md:text-lg">
                  “At Infomagine, we help global businesses transform digitally
                  with innovative, scalable software development services. Our
                  mission is to simplify operations, accelerate growth, and
                  build future-ready digital experiences that deliver measurable
                  results.”
                </p>

                <p className="text-gray-400 md:text-start text-center">
                  Through our dedicated approach and multidisciplinary
                  expertise, we craft customized strategies that not only meet
                  but exceed our clients' expectations, driving sustainable
                  growth and success in today’s ever-evolving digital landscape.
                </p>

                <div className="flex flex-col items-start justify-center">
                  <p className="font-semibold md:text-start text-center">
                    Rahul VK Khandelwal
                  </p>
                  <p className="md:text-start text-center">
                    CEO – Infomagine Softwares
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Latest Blog Section */}
          <div className="mt-24 px-6 lg:px-20 flex flex-col lg:flex-row justify-center gap-8 lg:gap-16">
            <div data-aos="fade-right" className="flex flex-col gap-2 lg:w-1/2">
              <span className="text-[#FF3C00] font-semibold md:text-start text-center text-xl">
                Latest Blog
              </span>
              <h4 className="text-3xl md:text-4xl md:text-start text-center font-bold">
                Latest Insights on Software Development, Mobile Apps & Digital
                Strategy
              </h4>
            </div>

            <p
              data-aos="fade-left"
              className="md:text-start text-center lg:w-1/2 mt-10"
            >
              Stay ahead in the digital era with expert insights from our blog.
              Explore trending topics on web & mobile app development, digital
              transformation, software technologies, and IT strategies for
              businesses across the USA, UK, UAE, Australia, and Europe.
            </p>
          </div>

          {/* Blog Cards */}
          <div className="px-4 sm:px-10 lg:px-20 mt-10 mb-40">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {blogs.slice(0, 3).map((blog, index) => (
                <a
                  key={index}
                  href={`/blog/${slugify(blog.blog_title)}`}
                  state={{ blog }}
                  className="relative hover:cursor-pointer w-full"
                >
                  {/* Blog Image */}
                  <div className="w-full h-60 sm:h-64 md:h-72 lg:h-64">
                    <img
                      className="w-full h-full object-cover rounded-t-md"
                      src={blog.image}
                      alt={blog.blog_title}
                    />
                  </div>

                  {/* Blog Content Overlay */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[90%] sm:w-[20rem] bg-[#F4F4F4] border-t-2 border-[#FF3C00] p-6 flex flex-col gap-4 h-[10rem] shadow-md">
                    <span className="text-sm text-gray-500">
                      Infomagine /{" "}
                      {new Date(blog.created_at).toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                    <div className="flex flex-col justify-between h-full">
                      <span className="text-lg leading-6 font-semibold">
                        {blog.blog_title.length > 50
                          ? blog.blog_title.slice(0, 50) + "..."
                          : blog.blog_title}
                      </span>
                      <p className="text-[#FF3C00] hover:font-semibold transition mt-2 text-sm w-full">
                        Read More +
                      </p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        <Popup />
      </Layout>
    </>
  );
};

export default Home;
