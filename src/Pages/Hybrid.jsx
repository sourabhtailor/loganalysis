import React from "react";
import Navbar2 from "../Components/navbar/Navbar2";
import Footer from "../Components/footer/Footer";
import { Link } from "react-router-dom";
import headerhybrid from "../assets/headerhybrid.jpg";
import multiplatform from "../assets/multiplatform.png";
import development from "../assets/development.png";
import performance from "../assets/performance.png";
import growth from "../assets/growth.png";
import officebuilding from "../assets/office-building.png";
import WearableApplicationDevelopment from "../assets/WearableApplicationDevelopment.png";
import {
  FaChartLine,
  FaUsers,
  FaSyncAlt,
  FaTools,
  FaHandshake,
} from "react-icons/fa";
import {
  FaFileContract,
  FaMoneyCheckAlt,
  FaUserTie,
  FaLifeRing,
} from "react-icons/fa";
import { Helmet } from "react-helmet";
import { BsQuestionDiamond } from "react-icons/bs";
import { MdAddCircle, MdRemoveCircle } from "react-icons/md";
import { useState } from "react";

const offerings = [
  {
    title: "Access to Skilled & Certified Experts",
    desc: "Work with a team of highly qualified professionals who bring deep expertise in modern technologies, ensuring your projects meet global standards.",
    icon: (
      <FaRocket className="text-[#FF3C00] text-5xl border border-[#FF3C00] p-2 rounded-full mr-2" />
    ),
  },
  {
    title: "Tailored Solutions for Your Business",
    desc: "We understand that every business is unique, so we customize our strategies and solutions to match your exact needs and goals.",
    icon: (
      <FaChartLine className="text-[#FF3C00] text-5xl border border-[#FF3C00] p-2 rounded-full mr-2" />
    ),
  },
  {
    title: "Competitive & Transparent Pricing",
    desc: "Get premium quality services at fair, competitive rates with no hidden costs — complete transparency from day one.",
    icon: (
      <FaUsers className="text-[#FF3C00] text-5xl border border-[#FF3C00] p-2 rounded-full mr-2" />
    ),
  },
  {
    title: "Faster Time-to-Market",
    desc: "Our agile development process ensures your project moves from idea to launch swiftly, without compromising on quality.",
    icon: (
      <FaSyncAlt className="text-[#FF3C00] text-5xl border border-[#FF3C00] p-2 rounded-full mr-2" />
    ),
  },
  {
    title: "Reliable Post-Launch Support",
    desc: "From bug fixes to feature updates, we stand by your side even after delivery to keep your product running flawlessly.",
    icon: (
      <FaTools className="text-[#FF3C00] text-5xl border border-[#FF3C00] p-2 rounded-full mr-2" />
    ),
  },
  {
    title: "Long-Term Partnership Approach",
    desc: "We believe in building trust and fostering relationships that go beyond a single project, ensuring continued growth together.",
    icon: (
      <FaHandshake className="text-[#FF3C00] text-5xl border border-[#FF3C00] p-2 rounded-full mr-2" />
    ),
  },
];

import { HeartPulse, Car, BookText, Store } from "lucide-react";

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

const benefits = [
  {
    icon: (
      <FaUsers className="text-[#FF3C00] text-5xl border border-[#FF3C00] p-2 rounded-full mr-2" />
    ),
    title: "Access to Experienced Professionals",
    desc: "Our dedicated hybrid app team brings years of experience in frameworks like Flutter, React Native, and Ionic. You get access to UI/UX experts, developers, and QA professionals who deliver fast, secure, and scalable cross-platform applications—without needing to hire in-house.",
  },
  {
    icon: (
      <FaFileContract className="text-[#FF3C00] text-5xl border border-[#FF3C00] p-2 rounded-full mr-2" />
    ),
    title: "Full Confidentiality with NDA Protection",
    desc: "We respect your ideas and intellectual property. Every project we work on is protected with strict NDAs and security protocols, ensuring complete confidentiality and trust throughout the development cycle.",
  },
  {
    icon: (
      <FaMoneyCheckAlt className="text-[#FF3C00] text-5xl border border-[#FF3C00] p-2 rounded-full mr-2" />
    ),
    title: "Transparent Pricing with No Hidden Charges",
    desc: "With Infomagine, what you see is what you get. We offer clear, upfront pricing with flexible engagement models—whether hourly, part-time, or full-time—so you can plan your budget confidently with no surprise costs.",
  },
  {
    icon: (
      <FaUserTie className="text-[#FF3C00] text-5xl border border-[#FF3C00] p-2 rounded-full mr-2" />
    ),
    title: "Talented Project Manager for Every Engagement",
    desc: "Every dedicated team comes with an experienced project manager who ensures smooth communication, proper documentation, and timely delivery. They act as a bridge between your vision and our execution—keeping everything aligned.",
  },
  {
    icon: (
      <FaRocket className="text-[#FF3C00] text-5xl border border-[#FF3C00] p-2 rounded-full mr-2" />
    ),
    title: "Faster Development & Time-to-Market",
    desc: "Our hybrid development team works in agile sprints to ensure rapid prototyping, development, and deployment. With reusable codebases and optimized workflows, we help you launch faster across both Android and iOS.",
  },
  {
    icon: (
      <FaLifeRing className="text-[#FF3C00] text-5xl border border-[#FF3C00] p-2 rounded-full mr-2" />
    ),
    title: "Post-Launch Support & Flexibility",
    desc: "Hiring a dedicated team doesn’t end with deployment. We provide continued support, app updates, and scalability options to ensure your product evolves with market trends and user feedback—maximizing your long-term success.",
  },
];

const faqs = [
  {
    question: "What is hybrid app development?",
    answer:
      "Hybrid apps are mobile applications built using web technologies (like HTML, CSS, JavaScript) but wrapped so they work like native apps on both iOS and Android.",
  },
  {
    question: "Which tools/frameworks do you use for hybrid apps?",
    answer:
      "Common ones are React Native, Flutter, Ionic, or Xamarin – we choose based on what fits your app’s needs best (performance, UI, features).",
  },
  {
    question: "Will hybrid app performance be as good as native?",
    answer:
      "For many apps, yes. Hybrid apps work well for typical features (forms, static content, general animations). If your app needs very high performance (like heavy graphics or intense animations), we might recommend native modules or a mixed approach.",
  },
  {
    question: "Can hybrid apps access all device features (camera, GPS, offline use, etc.)?",
    answer:
      "Yes. Most device features are usable through plugins or bridges. For highly specialized hardware or very new device features, sometimes custom native modules are needed.",
  },
  {
    question: "How do you ensure quality in hybrid app development?",
    answer: [
      "Testing on many devices / screen sizes & operating systems",
      "Optimizing code & plugins",
      "Using best practices in UI/UX and performance",
      "Ensuring security, error handling, offline support etc.",
    ],
  },
];

const Hybrid = () => {
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
          Cross-Platform | Hybrid App Development Company | Infomagine Software
        </title>
        <meta
          name="description"
          content="As a leading wearable application development in India provider, we specialize in hybrid mobile app development frameworks for scalable business growth."
        />

        <link
          rel="canonical"
          href="https://infomagine.in/services/hybrid"
        ></link>
        <meta
          property="og:title"
          content="Cross-Platform | Hybrid App Development Company | Infomagine Software"
        />
        <meta
          property="og:description"
          content="As a leading wearable application development in India provider, we specialize in hybrid mobile app development frameworks for scalable business growth."
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
          src={headerhybrid}
          alt="iOS App"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center px-10 md:px-20">
          <div data-aos="fade-right" className="text-white max-w-2xl space-y-5">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Build Smarter Apps with Hybrid Mobile App Development Frameworks
            </h1>
            <p className="text-lg">
              Build Cross-Platform Apps with Native Performance and Faster
              Time-to-Market
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
          Why Do You Need a Dedicated Hybrid App Development Team?
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
          Hybrid Development Services We Offer
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20 w-full px-6">
          {[
            {
              title: "Multi-Platform Application Development",
              desc: "We develop hybrid apps that work seamlessly across Android, iOS, and web platforms using a single codebase. This approach ensures consistent user experiences while significantly reducing development time and costs.",
              icon: multiplatform,
              aos: "fade-up",
            },
            {
              title: " Wearable Application Development",
              desc: "Infomagine also specializes in hybrid apps for wearable devices like smartwatches and fitness bands. We build lightweight, responsive apps that sync effortlessly with mobile apps for real-time data and tracking.",
              icon: WearableApplicationDevelopment,
              aos: "fade-down",
            },
            {
              title: "Optimized Performance & Environment",
              desc: "Our hybrid apps are developed with performance-first strategies—optimized for speed, battery usage, and memory management. We use the best tools and frameworks (React Native, Flutter, Ionic) to ensure high efficiency across devices.",
              icon: performance,
              aos: "zoom-in",
            },
            {
              title: " Business Growth Enablement",
              desc: "Hybrid apps offer faster market reach and wider audience penetration. By targeting multiple platforms with one app, your business can scale quickly, reduce acquisition costs, and reach users wherever they are.",
              icon: growth,
              aos: "flip-left",
            },
            {
              title: "Enterprise Application Development",
              desc: "Whether you're a startup or a growing enterprise, our hybrid development team builds scalable business solutions tailored to your operations. From internal tools to customer-facing apps, we align functionality with business goals.",
              icon: officebuilding,
              aos: "fade-right",
            },
            {
              title: "App Maintenance & Upgrades",
              desc: "We don't stop at deployment. Our team ensures your hybrid app remains up-to-date with ongoing maintenance, performance tuning, security updates, and feature enhancements—all to support long-term user retention and growth.",
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

      <section className="py-20 px-6 md:px-20 bg-[#f9f9f9]">
        <h2 className="text-3xl font-bold text-center mb-8" data-aos="fade-up">
          Benefits of Hiring Certified Hybrid Developers
        </h2>
        <p className="text-center max-w-3xl mx-auto mb-12 text-gray-700">
          Hiring certified hybrid app developers from Infomagine ensures you get
          top-tier expertise, cost-effective solutions, and complete project
          transparency. Here’s why partnering with us is the smartest choice for
          your app development needs:
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: (
                <FaMoneyCheckAlt className="text-[#FF5722] text-5xl border border-[#FF5722] p-2 rounded-full mr-2" />
              ),
              title: "Competitive Rates",
              desc: "Get world-class hybrid app development services at prices that fit your budget, without compromising on quality or performance.",
            },
            {
              icon: (
                <FaUsers className="text-[#FF5722] text-5xl border border-[#FF5722] p-2 rounded-full mr-2" />
              ),
              title: "Customer Satisfaction",
              desc: "We prioritize client success by delivering high-performing apps that meet your exact business goals and user expectations.",
            },
            {
              icon: (
                <FaFileContract className="text-[#FF5722] text-5xl border border-[#FF5722] p-2 rounded-full mr-2" />
              ),
              title: "Transparency and Integrity",
              desc: "From project scope to pricing, we maintain complete honesty and clarity, ensuring you are always in control.",
            },
            {
              icon: (
                <FaUserTie className="text-[#FF5722] text-5xl border border-[#FF5722] p-2 rounded-full mr-2" />
              ),
              title: "Skilled & Certified Professionals",
              desc: "Work with developers who are certified, experienced, and up-to-date with the latest hybrid app development trends and tools.",
            },
            {
              icon: (
                <FaSyncAlt className="text-[#FF5722] text-5xl border border-[#FF5722] p-2 rounded-full mr-2" />
              ),
              title: "Agile Development Process",
              desc: "Our agile methodology ensures faster delivery, flexibility in updates, and the ability to adapt to changing project needs.",
            },
            {
              icon: (
                <FaLifeRing className="text-[#FF5722] text-5xl border border-[#FF5722] p-2 rounded-full mr-2" />
              ),
              title: "End-to-End Support",
              desc: "We provide comprehensive support, from app conceptualization to post-launch maintenance, ensuring your app runs smoothly at all times.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 space-y-4 rounded-lg shadow hover:shadow-lg transition"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div>{item.icon}</div>
              <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Technology Stack Section */}

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
            How Can You Benefit by Associating with Infomagine?
          </h2>

          <p className="w-[60%] mb-12 text-center">
            Partnering with Infomagine means more than just hiring a service
            provider — it’s about building a long-term relationship that drives
            your business forward. Here’s what you gain:
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
          FAQs about Hybrid
        </h2>

        <div
          className="grid grid-cols-1 gap-6 px-4 md:px-10 lg:px-20"
          data-aos="fade-up"
        >
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="flex flex-col border border-gray-200 rounded-2xl p-4 sm:p-6 gap-4 bg-white shadow-sm cursor-pointer"
              onClick={() => toggleFAQ(index)} // ✅ Click anywhere in the box
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

export default Hybrid;
