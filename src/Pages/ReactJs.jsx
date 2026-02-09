import React from "react";
import Navbar2 from "../Components/navbar/Navbar2";
import Footer from "../Components/footer/Footer";
import { Link } from "react-router-dom";
import desktopheader from "../assets/desktopheader.jpg";
import testing from "../assets/testing.png";
import development from "../assets/development.png";
import Mobileapp from "../assets/Mobile app.png";
import Webapp from "../assets/Webapp.png";
import api from "../assets/api.png";
import ecommerce from "../assets/ecommerce.png";
import { FaUsers } from "react-icons/fa";
import {
  FaStore,
  FaChartLine,
  FaLaptopCode,
  FaTasks,
  FaLifeRing,
  FaBolt,
  FaLock,
  FaSearch,
  FaTachometerAlt,
  FaPalette,
} from "react-icons/fa";
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
    title: "Power Up Your Project",
    desc: "Our skilled React.js developers bring innovation and precision to every project, ensuring high-quality code, fast performance, and future-ready solutions.",
    icon: (
      <FaBolt className="text-[#FF3C00] text-5xl border border-[#FF3C00] p-2 rounded-full mr-2" />
    ),
  },
  {
    title: "Grow a Small Business",
    desc: "From budget-friendly solutions to scalable architectures, we help small businesses expand their online presence without compromising on quality.",
    icon: (
      <FaStore className="text-[#FF3C00] text-5xl border border-[#FF3C00] p-2 rounded-full mr-2" />
    ),
  },
  {
    title: "Foster Actionable Results",
    desc: "Our development process focuses on delivering measurable outcomes—more leads, higher engagement, and improved conversion rates.",
    icon: (
      <FaChartLine className="text-[#FF3C00] text-5xl border border-[#FF3C00] p-2 rounded-full mr-2" />
    ),
  },
  {
    title: "Agile & Transparent Process",
    desc: "We follow agile methodologies, keeping you involved at every stage with clear communication and complete project transparency.",
    icon: (
      <FaTasks className="text-[#FF3C00] text-5xl border border-[#FF3C00] p-2 rounded-full mr-2" />
    ),
  },
  {
    title: "Future-Proof Technology",
    desc: "We leverage the latest React.js features and ecosystem tools to build solutions that can adapt and grow with your business.",
    icon: (
      <FaLaptopCode className="text-[#FF3C00] text-5xl border border-[#FF3C00] p-2 rounded-full mr-2" />
    ),
  },
  {
    title: "End-to-End Support",
    desc: "From the first line of code to post-launch maintenance, we provide continuous support to keep your application running flawlessly.",
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
      <FaBolt className="text-[#FF3C00] text-5xl border border-[#FF3C00] p-2 rounded-full mr-2" />
    ),
    title: "Speedy and Scalable",
    desc: "React.js uses a virtual DOM and efficient rendering techniques, ensuring lightning-fast application performance. It also scales effortlessly, making it suitable for everything from small MVPs to large enterprise applications.",
  },
  {
    icon: (
      <FaLock className="text-[#FF3C00] text-5xl border border-[#FF3C00] p-2 rounded-full mr-2" />
    ),
    title: "Stability Ensured",
    desc: "With one-way data binding and component-based architecture, React.js ensures your applications remain stable and maintainable, even as they grow in complexity.",
  },
  {
    icon: (
      <FaSearch className="text-[#FF3C00] text-5xl border border-[#FF3C00] p-2 rounded-full mr-2" />
    ),
    title: "Search Engine Friendly",
    desc: "Unlike many JavaScript frameworks, React.js supports server-side rendering (SSR), improving search engine visibility and helping your website rank higher in search results.",
  },
  {
    icon: (
      <FaTachometerAlt className="text-[#FF3C00] text-5xl border border-[#FF3C00] p-2 rounded-full mr-2" />
    ),
    title: "Optimum Performance",
    desc: "React’s lightweight architecture and reusable components help achieve top-notch performance, reducing page load times and enhancing user satisfaction.",
  },
  {
    icon: (
      <FaPalette className="text-[#FF3C00] text-5xl border border-[#FF3C00] p-2 rounded-full mr-2" />
    ),
    title: "Rich User Interfaces",
    desc: "React.js makes it easy to create interactive, dynamic, and visually appealing UIs that engage users and keep them coming back for more.",
  },
  {
    icon: (
      <FaUsers className="text-[#FF3C00] text-5xl border border-[#FF3C00] p-2 rounded-full mr-2" />
    ),
    title: "Strong Community Support",
    desc: "Backed by Facebook and a vast developer community, React.js benefits from regular updates, extensive libraries, and continuous innovation, ensuring your app stays future-ready.",
  },
];

const faqs = [
  {
    question: "What is ReactJS?",
    answer:
      "ReactJS is a JavaScript library by Facebook for building user interfaces, especially for web applications. It helps make fast, interactive and dynamic websites.",
  },
  {
    question: "Why choose ReactJS for my web app?",
    answer:
      " Because it makes apps fast, lets you reuse components, makes it easier to manage UI updates, and gives a good user experience.",
  },
  {
    question: "What kinds of projects are good for ReactJS?",
    answer: [
      "Single Page Applications (SPAs)",
      "Dashboards, Admin Panels",
      "Real-time data apps (live updates, notifications)",
      "E-commerce front-ends",
      "Interactive user interfaces",
    ],
  },
  {
    question: "Can ReactJS apps be SEO friendly?",
    answer:
      "By default SPAs are harder for SEO, but yes — using server-side rendering (SSR), pre-rendering or frameworks like Next.js and proper meta tags, React apps can be made SEO-friendly.",
  },
  {
    question: "Is ReactJS good for building prototypes or MVPs?",
    answer:
      "Yes. Because of component reusability, speed of development, React is often used for Minimum Viable Products to test ideas quickly.",
  },
];

const ReactJs = () => {
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
          ReactJS | E-commerce | Web App Development Company in India
        </title>
        <meta
          name="description"
          content="Boost your business with a trusted ReactJS development company in India. We specialize in secure and scalable ReactJS E-commerce Development in India."
        />

        <link
          rel="canonical"
          href="https://infomagine.in/services/reactjs"
        ></link>
        <meta
          property="og:title"
          content="ReactJS | E-commerce | Web App Development Company in India"
        />
        <meta
          property="og:description"
          content="Boost your business with a trusted ReactJS development company in India. We specialize in secure and scalable ReactJS E-commerce Development in India."
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
          src={desktopheader}
          alt="iOS App"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center px-10 md:px-20">
          <div data-aos="fade-right" className="text-white max-w-2xl space-y-5">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              ReactJS E-commerce & Web App Development Company in India
            </h1>
            <p className="text-lg">
              At Infomagine, we understand that your business needs more than
              just code — it needs performance, scalability, and a seamless user
              experience. Our skilled React.js developers craft high-performing
              web and hybrid mobile applications that combine speed, robustness,
              and intuitive design. Whether you’re launching a new platform or
              upgrading an existing one, we deliver solutions that are
              future-ready, user-focused, and built your business.
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
          What Makes React.js Development Stand Out?
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
            React.js Development Services In A Nutshell
          </h2>

          <p className="w-[60%] mb-12 text-center">
            From interactive web platforms to high-performing applications, our
            React.js development services are designed to deliver speed,
            scalability, and seamless user experiences.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20 w-full px-6">
          {[
            {
              title: "Web Application Development",
              desc: "We craft responsive, high-performance web applications that load fast, look stunning, and work flawlessly across all devices.",
              icon: Webapp, // Replace with relevant web app icon
              aos: "fade-up",
            },
            {
              title: "E-Commerce Solutions",
              desc: "Boost your online store with robust React.js-powered e-commerce platforms, ensuring smooth navigation, secure transactions, and engaging user journeys.",
              icon: ecommerce, // Replace with e-commerce icon
              aos: "fade-down",
            },
            {
              title: "Single Page Application (SPA) Development",
              desc: "Deliver lightning-fast, dynamic SPAs with minimal load time and maximum interactivity for a truly immersive experience.",
              icon: Mobileapp, // Replace with SPA icon
              aos: "zoom-in",
            },
            {
              title: "Custom UI/UX Development",
              desc: "Our expert designers and developers collaborate to create visually appealing, intuitive interfaces tailored to your audience.",
              icon: testing, // Replace with UI/UX icon
              aos: "flip-left",
            },
            {
              title: "API Integration & Development",
              desc: "Seamlessly connect your app with third-party services and APIs to enhance functionality and user engagement.",
              icon: api, // Replace with API icon
              aos: "fade-right",
            },
            {
              title: "Maintenance & Support",
              desc: "Enjoy uninterrupted operations with our reliable post-deployment maintenance, updates, and troubleshooting services.",
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
            We go beyond coding—we create digital experiences that drive growth,
            engagement, and measurable success.
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
          FAQs about React JS
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

export default ReactJs;
