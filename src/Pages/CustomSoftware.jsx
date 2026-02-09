import React from "react";
import { useState } from "react";
import Navbar2 from "../Components/navbar/Navbar2";
import Footer from "../Components/footer/Footer";
import { Link } from "react-router-dom";
import headercustomsoftware from "../assets/headercustomsoftware.jpg";
import {
  FaChartLine,
  FaUsers,
  FaSyncAlt,
  FaFileContract,
  FaLifeRing,
  FaRocket,
} from "react-icons/fa";
import { HeartPulse, Car, BookText, Store } from "lucide-react";
import { RiMoneyRupeeCircleLine } from "react-icons/ri";
import { MdOutlineRealEstateAgent } from "react-icons/md";
import { Helmet } from "react-helmet";
import { BsQuestionDiamond } from "react-icons/bs";
import { MdAddCircle, MdRemoveCircle } from "react-icons/md";

const offerings = [
  {
    title: "Business Growth",
    desc: "We develop solutions tailored to your business objectives, helping you increase revenue, expand market reach, and enhance customer engagement.",
    icon: (
      <FaChartLine className="text-[#FF3C00] text-5xl border border-[#FF3C00] p-2 rounded-full mr-2" />
    ),
  },
  {
    title: "Software Integration",
    desc: "Our seamless integration services ensure that your software works in perfect harmony with existing systems, improving efficiency and reducing operational bottlenecks.",
    icon: (
      <FaSyncAlt className="text-[#FF3C00] text-5xl border border-[#FF3C00] p-2 rounded-full mr-2" />
    ),
  },
  {
    title: "Compliance Consulting",
    desc: "We help you meet industry standards and regulatory requirements with ease, safeguarding your business from compliance risks while ensuring data security.",
    icon: (
      <FaFileContract className="text-[#FF3C00] text-5xl border border-[#FF3C00] p-2 rounded-full mr-2" />
    ),
  },
  {
    title: "Scalable Architecture",
    desc: "Our solutions are built to grow with your business, ensuring long-term performance and adaptability to new challenges.",
    icon: (
      <FaRocket className="text-[#FF3C00] text-5xl border border-[#FF3C00] p-2 rounded-full mr-2" />
    ),
  },
  {
    title: "User-Centric Approach",
    desc: "Every solution we deliver is designed with the end user in mind, ensuring intuitive navigation and superior user experience.",
    icon: (
      <FaUsers className="text-[#FF3C00] text-5xl border border-[#FF3C00] p-2 rounded-full mr-2" />
    ),
  },
  {
    title: "Continuous Support & Optimization",
    desc: "We provide ongoing maintenance and enhancements to ensure your software always delivers optimal performance.",
    icon: (
      <FaLifeRing className="text-[#FF3C00] text-5xl border border-[#FF3C00] p-2 rounded-full mr-2" />
    ),
  },
];

const processSteps = [
  {
    title: "Project Initiation",
    desc: "We start by understanding your business vision, goals, and expectations to lay a strong foundation for the project.",
  },
  {
    title: "Business Analysis",
    desc: "Our experts analyze your requirements in detail, identifying opportunities and defining a clear roadmap.",
  },
  {
    title: "UI/UX Design",
    desc: "We craft visually stunning, user-friendly interfaces that enhance engagement and provide a seamless experience.",
  },
  {
    title: "Development & Integration",
    desc: "Our developers bring your idea to life using the latest technologies, ensuring smooth integration with existing systems.",
  },
  {
    title: "Quality Assurance",
    desc: "Every project undergoes rigorous testing to ensure flawless performance, security, and scalability.",
  },
  {
    title: "Deployment & Support",
    desc: "We launch your solution seamlessly and provide ongoing support to keep it running at peak performance.",
  },
];

const industries = [
  { icon: <HeartPulse size={32} />, name: "Healthcare & Life Sciences" },
  { icon: <RiMoneyRupeeCircleLine size={32} />, name: "Finance & FinTech" },
  { icon: <BookText size={32} />, name: "Education & E-Learning" },
  { icon: <Store size={32} />, name: "Retail & E-Commerce" },
  { icon: <Car size={32} />, name: "Travel, Hospitality & Logistics" },
  {
    icon: <MdOutlineRealEstateAgent size={32} />,
    name: "Real Estate & Property Tech",
  },
];

const faqs = [
  {
    question:
      "Why should I choose custom software over off-the-shelf software?",
    answer: [
      "It matches your exact needs.",
      "It can integrate smoothly with your existing tools.",
      "It gives more control over features, security, and data.",
      "Over time, it may save money because you don’t pay for features you don’t need.",
    ],
  },
  {
    question: "How long does it take to build custom software?",
    answer:
      "Time depends on how complex your needs are. A simple tool may take a few weeks, more complex systems may take months. We will give you an estimate after discussing your requirements.",
  },
  {
    question: "What technologies do you use?",
    answer:
      "Infomagine uses technologies like PHP, .NET, Java, Python, and others. We choose the tech stack based on what fits your project best.",
  },
  {
    question: "Can you integrate custom software with my existing system?",
    answer:
      "Yes. If you are already using software tools, databases, or services, we can plan to integrate so that data flows smoothly and duplications or manual work are reduced.",
  },
  {
    question: "What about maintenance and support after delivery?",
    answer:
      "After software delivery, we provide support and maintenance. This can include fixing bugs, adding small improvements, updating for new devices/OS, etc. We can agree on service level and support terms beforehand.",
  },
];

const CustomerSoftware = () => {
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
          Personalized Software | Mobile Application Development | IT Solutions
          Provider
        </title>
        <meta
          name="description"
          content="Partner with Infomagine – your go-to custom software development company in India, providing seamless Mobile app development services & IT solutions."
        />

        <link
          rel="canonical"
          href="https://infomagine.in/services/custom-software"
        ></link>
        <meta
          property="og:title"
          content="Personalized Software | Mobile Application Development | IT Solutions Provider"
        />
        <meta
          property="og:description"
          content="Partner with Infomagine – your go-to custom software development company in India, providing seamless Mobile app development services & IT solutions."
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
          src={headercustomsoftware}
          alt="Custom Software"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center px-10 md:px-20">
          <div data-aos="fade-right" className="text-white max-w-2xl space-y-5">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Custom Software Development Company in India Delivering Scalable
              Mobile, Web, and IT Solutions
            </h1>
            <p className="text-lg">
              Customized, Intuitive & Future-Ready to Meet Your Unique Needs
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

      {/* Intro Section */}
      <section className="py-20 px-6 md:px-20 bg-[#f9f9f9]">
        <h2 className="text-3xl font-bold text-center mb-8" data-aos="fade-up">
          India’s Leading Custom Software Development Company for Next-Gen
          Businesses
        </h2>
        <p className="text-center max-w-5xl mx-auto text-gray-700 mb-12 leading-relaxed">
          At Infomagine, we are committed to empowering your business with
          custom software development services that accelerate growth, enhance
          user experience, and maximize ROI. Leveraging the latest technologies
          and innovative strategies, we design and deliver industry-specific,
          future-ready software solutions tailored to your unique requirements.
          Whether you need personalized software development, software testing,
          quality assurance, or end-to-end support, our skilled team ensures
          flawless execution and measurable results. Our customer-first
          approach, combined with a proven low-risk development process, enables
          us to tackle even the most complex challenges with confidence and
          precision. From concept to deployment – and beyond – we focus on
          delivering scalable, secure, and high-performing software that fuels
          your business success in today’s competitive digital landscape.
        </p>
      </section>

      {/* Process Section */}
      <section className="py-20 px-6 md:px-20 bg-white">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Development Process
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          {processSteps.map((step, index) => (
            <div
              key={index}
              className="p-6 bg-[#F54900] text-white rounded-xl transition"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <h4 className="font-bold text-lg mb-2">{step.title}</h4>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 px-6 md:px-20 bg-[#f9f9f9]">
        <h2 className="text-3xl font-bold text-center mb-12">
          Industries We Serve
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 max-w-7xl mx-auto">
          {industries.map(({ icon, name }, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              className="flex text-[#FF3C00] flex-col items-center justify-center rounded-md border p-4"
            >
              {icon}
              <span className="mt-4 font-semibold text-center">{name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6 md:px-20 bg-white">
        <h2 className="text-3xl font-bold text-center mb-12">
          Engineering Greater Software Solutions to Deliver Better Outcomes
        </h2>
        <p className="text-center max-w-4xl mx-auto text-gray-700 mb-12 leading-relaxed">
          At Infomagine, we combine innovation, expertise, and technology to
          create software solutions that not only meet your current needs but
          also pave the way for future success. Our approach focuses on driving
          measurable results, ensuring your business stays competitive in the
          ever-evolving digital landscape.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {offerings.map((item, i) => (
            <div
              key={i}
              className="bg-white p-6 border border-[#F54900] rounded-lg shadow hover:shadow-lg transition"
              data-aos="fade-up"
              data-aos-delay={i * 100}
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
          FAQs about Custom Software Development Services
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

export default CustomerSoftware;
