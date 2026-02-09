import React from "react";
import Layout from "../Layout";
import mobileHeader from "../../assets/mobileHeader.jpg";
import design from "../../assets/design.png";
import development from "../../assets/development.png";
import testing from "../../assets/testing.png";
import lunch from "../../assets/lunch.png";
import market from "../../assets/market.png";
import { BsQuestionDiamond } from "react-icons/bs";
import { MdAddCircle, MdRemoveCircle } from "react-icons/md";
import { Link } from "react-router";
import {
  Globe,
  HeartPulse,
  Car,
  BookText,
  Store,
  Sparkles,
} from "lucide-react";
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
import { useState } from "react";
import { Helmet } from "react-helmet";

const industries = [
  { icon: <Globe size={32} />, name: "Finance", active: true },
  { icon: <HeartPulse size={32} />, name: "Healthcare" },
  { icon: <Car size={32} />, name: "Consumer" },
  { icon: <BookText size={32} />, name: "Education" },
  { icon: <Store size={32} />, name: "Retail" },
  { icon: <Sparkles size={32} />, name: "Sports" },
];

const faqs = [
  {
    question: "Which frameworks do you recommend for global app rollout?",
    answer:
      "We recommend Flutter, PWA for multi-OS reach; Swift/Kotlin/UWP for platform-native innovation.",
  },
  {
    question: "Can you deploy apps in specific markets?",
    answer:
      " Yes — we handle App Store and Play Store submissions with localization support for USA, UAE, Germany, Australia, India, and more.",
  },
  {
    question: "How much does mobile app development cost?",
    answer:
      "Numerous factors, including the following, affect the cost of developing a mobile app:Native, hybrid, and cross - platform development platforms.App categories include on - demand delivery, gaming, entertainment, and e - commerce. App complexity includes things like the amount of displays, data limitations, admin console, API connectivity, and user profiles. Orlando or other American cities serve as the resource site. Following the establishment of these variables, we draft a thorough description that covers the tech stack, user journeys, project investment, and timetable.To find out the cost of developing a mobile app, contact us with your needs.",
  },
  {
    question:
      "What is the difference between native and hybrid app development?",
    answer:
      "Native apps are a type of mobile applications built specifically for a mobile platform which is compatible with its native programming languages and tools. Hybrid apps, on other hand, use web-based languages such as CSS, HTML, and JavaScript to code apps which are then executed in a native shell with an embedded web browser. Taking this approach, developers can share backend code, enabling them to create apps quickly and cost-effectively for multiple platforms.",
  },
  {
    question:
      "What are the benefits of mobile application development for businesses?",
    answer:
      "Some advantages of investing in mobile application development include: Enhanced customer engagement Redefined customer experience Competitive advantage Increased Sales and revenue Better reach of target audience Data collection and analysis.",
  },
  {
    question:
      "What is the difference between cross-platform and native app development?",
    answer:
      "The most common way of making a versatile application that can run on a few stages, including iOS and Android, is known as cross-stage application improvement. Since the code made can be used iteratively, code reusability is the principal benefit of creating cross-stage applications. The objective of local application improvement, then again, is to make applications that are viable with a solitary working framework and are intended to help capacities well defined for that framework.",
  },
  {
    question: "How long does it take to develop a mobile app?",
    answer:
      "There are a few phases engaged with making a versatile application, including arranging, planning, creating, and testing. At the point when taken overall, these stages can without much of a stretch require eight to a year. Nonetheless, various factors, similar to the application's highlights, capabilities, and intricacy, could influence how long it requires to create an application.",
  },
];

const appTypes = [
  {
    title: "Financial Management Apps",
    description:
      "Build mobile wallets, banking apps, and real-time finance tracking tools with secure transaction systems tailored to global users.",
  },
  {
    title: "Telehealth Solutions",
    description:
      "Enable remote healthcare consultations and scheduling via mobile platforms, ensuring global patient engagement and accessibility.",
  },
  {
    title: "Booking & Ticketing Solutions",
    description:
      "Develop mobile ticketing apps for travel, events, or services, integrating real-time updates and secure payment gateways.",
  },
  {
    title: "Healthcare & Hospital Apps",
    description:
      "Deliver hospital-grade mobile apps for patient records, appointment scheduling, and telemedicine — improving healthcare management globally.",
  },
  {
    title: "Lending Solutions",
    description:
      "We build custom lending platforms offering quick loans, eligibility checks, and real-time status for international users.",
  },
  {
    title: "Investment Solutions",
    description:
      "Empower users to manage wealth with mobile investing apps featuring market analysis tools, alerts, and portfolio tracking.",
  },
];

const services = [
  {
    title: "iOS App Development",
    description:
      "We develop custom iOS apps using Swift, SwiftUI & Objective-C for iPhones, iPads & Apple TVs. Our apps offer smooth performance, secure architecture & perfect integration within the Apple ecosystem.",
  },
  {
    title: "Android App Development",
    description:
      "We deliver powerful custom Android apps using Kotlin & modern frameworks. From strategy to store launch, we build scalable, secure, and high-performing apps crafted for the global Android audience.",
  },
  {
    title: "Flutter App Development",
    description:
      "We create cross-platform mobile apps using Flutter & Dart. One codebase, two platforms — our apps are fast, cost-effective, and deliver native-like performance on both iOS and Android devices.",
  },
  {
    title: "Progressive Web Apps (PWA)",
    description:
      "We build Progressive Web Apps that work seamlessly on mobile & desktop. Fast, secure, responsive, and installable — our PWAs deliver an app-like user experience across all browsers and devices.",
  },
];

const MobileApplication = () => {
  const [openStates, setOpenStates] = useState(Array(faqs.length).fill(false));

  const toggleFAQ = (index) => {
    setOpenStates((prevStates) =>
      prevStates.map((state, i) => (i === index ? !state : state))
    );
  };

  return (
    <Layout>
      <Helmet>
        <title>
          Custom Mobile App Development Services | USA, UK, UAE | Infomagine
        </title>
        <meta
          name="description"
          content="Custom iOS, Android & Cross-Platform Mobile App Development Company. Serving USA, UK, UAE, Germany, and more. Let's build your app."
        />
        <link
          rel="canonical"
          href="https://infomagine.in/mobile-applications"
        ></link>

        {/* Open Graph Meta Tags */}
        <meta
          property="og:title"
          content="Mobile Application Development Services | Infomagine Softwares"
        />
        <meta
          property="og:description"
          content="Explore mobile app development services by Infomagine Softwares. We create high-quality and user-friendly mobile apps for various platforms."
        />
        <meta
          property="og:image"
          content="https://infomagine.in/assets/infomagine%20logo-BsvjEvw5.png"
        />
        <meta
          property="og:url"
          content="https://infomagine.in/mobile-applications"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Infomagine Softwares" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:country" content="US, UK, UAE, AU, NZ" />

        {/* Schema Markup for Mobile Application Development */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Mobile Application Development",
            provider: {
              "@type": "Organization",
              name: "Infomagine Softwares",
              url: "https://infomagine.in/mobile-applications",
              logo: "https://infomagine.in/logo.png",
              sameAs: [
                "https://www.facebook.com/Infomaginesoftwares",
                "https://www.instagram.com/infomagine_softwares/",
                "https://www.linkedin.com/company/13313914/",
                "https://x.com/InfocoxSocial",
                "https://in.pinterest.com/infomaginesoftwares/",
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
            },
            description:
              "Infomagine Softwares specializes in mobile application development for iOS, Android, and cross-platform solutions.",
            url: "https://infomagine.in/mobile-applications",
          })}
        </script>
      </Helmet>

      <div className="flex  flex-col mb-20 lg:mb-40 gap-16 lg:gap-20">
        {/* Hero Section */}
        <div className="w-full h-[40rem] relative">
          <img
            className="w-full h-full object-cover"
            src={mobileHeader}
            alt=""
          />
          <div
            className="absolute top-1/2 left-4 sm:left-10 transform -translate-y-1/2 text-white flex flex-col gap-4 w-[90%] sm:w-3/4 lg:w-1/2"
            data-aos="fade-right"
          >
            <h1 className="text-2xl sm:text-4xl font-bold">
              Mobile App Development Services for Global Businesses
            </h1>
            <p className="text-sm sm:text-base">
              Infomagine is a trusted mobile app development company delivering
              scalable, innovative, and user-friendly mobile solutions. We have
              successfully built apps for clients across USA, UK, UAE, Germany,
              Italy, Australia, and more, empowering industries through custom
              Android, iOS, Flutter, and PWA technologies.
            </p>
            <Link
              to="/contact-us"
              className="bg-[#FF5722] px-4 py-2 text-sm sm:text-base w-fit rounded-md"
            >
              Let's Talk
            </Link>
          </div>
        </div>

        {/* Features Section */}
        <section className="py-12 px-4 sm:px-8 lg:px-20" data-aos="fade-up">
          <div className="text-center mb-10">
            <p className="text-orange-600 font-semibold mb-2">Our Features</p>
            <h2 className="text-2xl sm:text-4xl font-bold">
              Our Mobile App Development{" "}
              <span className="text-orange-600">Services</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <div
                key={index}
                data-aos="zoom-in"
                className="bg-[#F7F7F7] p-8 text-center hover:shadow-lg transition duration-300"
              >
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Process Section */}
        <div className="flex flex-col gap-12 items-center px-4 sm:px-10 lg:px-20">
          <h2
            className="text-2xl sm:text-4xl md:text-start text-center font-bold mb-6"
            data-aos="fade-up"
          >
            Our Mobile App Development Process
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 w-full">
            {[
              {
                title: "Idea & Planning",
                desc: "We work closely with your team to define app requirements, user goals, and features. Our strategic planning ensures your app aligns with long-term business objectives and sets the foundation for a successful product.",
                icon: design,
                aos: "fade-up",
              },
              {
                title: "Design",
                desc: "Our UI/UX experts craft visually engaging and easy-to-use interfaces. We focus on usability, consistency, and a smooth experience across devices, ensuring every tap feels intuitive and every screen looks polished.",
                icon: design,
                aos: "fade-down",
              },
              {
                title: "Development",
                desc: "We use the latest tech and industry best practices to build secure, fast, and scalable mobile apps. Each solution is tailored to your business needs — from robust architecture to seamless performance.",
                icon: development,
                aos: "zoom-in",
              },
              {
                title: "Testing",
                desc: "We conduct rigorous testing to ensure bug-free, smooth app performance across all platforms. From functionality to user experience, our QA team delivers quality and stability with every release.",
                icon: testing,
                aos: "flip-left",
              },
              {
                title: "Launch",
                desc: "After clearing all quality checks, we manage a smooth app launch across App Store, Google Play, or web. Our process ensures compliance, performance, and a seamless go-live experience for your users.",
                icon: lunch,
                aos: "fade-right",
              },
              {
                title: "Marketing",
                desc: "We help position your app globally with optimized launch campaigns, real-time feedback loops, and engagement strategies. From visibility to retention — we ensure your app doesn’t just launch, it grows.",
                icon: market,
                aos: "fade-left",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center transition duration-300 ease-in-out"
                data-aos={item.aos}
              >
                <div className="text-orange-600 mb-4 bg-white shadow-md hover:border-4 border-[#FF5722] rounded-full p-4">
                  <img
                    src={item.icon}
                    alt=""
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* App Types Section */}
        <div className="px-4 sm:px-8 lg:px-20 mt-20">
          <h2
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-12"
            data-aos="fade-up"
          >
            Types of Mobile Apps We Build
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {appTypes.map((app, index) => (
              <div
                key={index}
                data-aos="zoom-in"
                className="p-8 bg-[#F4F7FC] border-b-4 border-gray-300 text-center transition"
              >
                <h3 className="text-lg font-semibold mb-2 text-gray-800">
                  {app.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {app.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Industries Section */}
        <div className="text-center py-12 px-4 sm:px-8" data-aos="fade-up">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
            Industries We Serve Through Mobile App Development <br />
            App Development <span className="text-orange-600">Services</span>
          </h2>
          <div className="w-16 h-1 bg-orange-600 mx-auto mt-4 mb-12" />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 max-w-5xl mx-auto">
            {industries.map(({ icon, name }, index) => (
              <div
                key={name}
                data-aos="zoom-in"
                className="flex text-[#FF3C00] flex-col items-center justify-center rounded-md p-6 border transition"
              >
                {icon}
                <span className="mt-2 font-semibold text-base">{name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Logos Marquee */}
        <div className="flex overflow-hidden" data-aos="fade-left">
          <marquee scrollamount="20">
            <div className="flex items-center gap-10">
              {[
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
              ].map((logo, i) => (
                <img key={i} src={logo} alt="" className="h-28 sm:h-36" />
              ))}
            </div>
          </marquee>
        </div>

        {/* FAQs Section */}
        <h2
          className="text-center text-2xl sm:text-3xl lg:text-4xl font-medium px-4"
          data-aos="fade-up"
        >
          FAQs about Mobile Applications
        </h2>
        <div className="grid grid-cols-1 gap-8 px-4 sm:px-10 lg:px-20 mt-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              data-aos="fade-up"
              className="flex flex-col border rounded-2xl p-4 gap-4"
            >
              <div className="flex justify-between items-center gap-4">
                <div className="flex items-center gap-2">
                  <BsQuestionDiamond className="text-2xl sm:text-3xl text-[#FF3D00]" />
                  <span className="text-base sm:text-lg font-medium">
                    {faq.question}
                  </span>
                </div>
                <div
                  onClick={() => toggleFAQ(index)}
                  className="cursor-pointer"
                >
                  {openStates[index] ? (
                    <MdRemoveCircle className="text-2xl sm:text-3xl text-[#FF3D00]" />
                  ) : (
                    <MdAddCircle className="text-2xl sm:text-3xl text-[#FF3D00]" />
                  )}
                </div>
              </div>
              {openStates[index] && (
                <p className="text-gray-600 text-sm pl-4 pr-4">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default MobileApplication;
