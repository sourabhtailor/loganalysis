import React from "react";
import Navbar2 from "../Components/navbar/Navbar2";
import Footer from "../Components/footer/Footer";
import { Link } from "react-router-dom";
import headeritconsulting from "../assets/headeritconsulting.jpg";
import fullstacksection1img from "../assets/fullstacksection1img.png";
import {
  FaChartLine,
  FaUsers,
  FaSyncAlt,
  FaFileContract,
  FaLifeRing,
  FaRocket,
  FaSearch,
  FaHandsHelping,
  FaCogs,
  FaLightbulb
} from "react-icons/fa";

import { FaNetworkWired, FaCloud, FaRobot, FaMicrochip, FaChartBar, FaMobileAlt } from "react-icons/fa";
import { FaHeart, FaWrench, FaUmbrella, FaPiggyBank, FaTools } from "react-icons/fa";  
import { HeartPulse, Car, BookText, Store } from "lucide-react";
import { RiMoneyRupeeCircleLine } from "react-icons/ri";
import { MdOutlineRealEstateAgent } from "react-icons/md";

import { motion } from "framer-motion";
import { Lightbulb, Palette, Code2, ShieldCheck, Rocket } from "lucide-react";

const services = [
  {
    icon: <FaHeart className="text-orange-500 text-4xl mb-4" />,
    title: "In-Depth Analysis",
    description:
      "Understanding your goals, target audience, and competitive landscape to ensure the right strategy for your start-up.",
  },
  {
    icon: <FaWrench className="text-orange-500 text-4xl mb-4" />,
    title: "Strategic Consultation",
    description:
      "Offering tailored guidance for maximum business impact, helping you make data-driven decisions for growth.",
  },
  {
    icon: <FaUmbrella className="text-orange-500 text-4xl mb-4" />,
    title: "UI/UX Design Excellence",
    description:
      "Crafting interfaces that are visually stunning, intuitive, and drive higher user engagement.",
  },
  {
    icon: <FaChartLine className="text-orange-500 text-4xl mb-4" />,
    title: "Robust Development",
    description:
      "Building secure, scalable, and future-ready digital solutions tailored to your needs.",
  },
  {
    icon: <FaPiggyBank className="text-orange-500 text-4xl mb-4" />,
    title: "Testing & Quality Assurance",
    description:
      "Ensuring flawless performance and cross-platform compatibility for a seamless user experience.",
  },
  {
    icon: <FaTools className="text-orange-500 text-4xl mb-4" />,
    title: "Ongoing Support",
    description:
      "Helping your product evolve with your business through continuous maintenance and enhancements.",
  },
];



const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 120 } },
};

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

const ItConsultingServices = () => {
  return (
    <>
      <Navbar2 />

      {/* Hero Section */}
      <div className="relative w-full h-screen">
        <img
          src={headeritconsulting}
          alt="Custom Software"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center px-10 md:px-20">
          <div data-aos="fade-right" className="text-white max-w-2xl space-y-5">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Strategic IT Consulting Services – Guiding Your Business Towards
              Digital Excellence
            </h1>
            <p className="text-sm">
              At Infomagine, our IT consulting services are designed to bridge
              the gap between technology and business growth. We analyze your
              current infrastructure, identify challenges, and recommend
              tailored, future-ready IT strategies to maximize efficiency,
              enhance productivity, and reduce costs.
            </p>

            <p className="text-sm">
              From choosing the right technology stack to optimizing workflows,
              our experts bring years of industry experience and cutting-edge
              insights to ensure your business stays ahead in today’s
              competitive digital era. Whether it’s software modernization,
              system integration, cloud adoption, or cybersecurity, we provide
              end-to-end consulting support that aligns perfectly with your
              business goals.
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
      <section className="flex flex-col md:flex-row p-20 bg-[#f9f9f9] gap-10">
        {/* Left Content */}
        <div className=" flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-5" data-aos="fade-up">
            Turn Your Start-Up Into an Established Brand
          </h2>
          <p className="max-w-2xl text-gray-700 text-sm leading-relaxed mb-6">
            At Infomagine, we fuel your start-up journey with next-generation IT
            and technology solutions that help you scale faster, operate
            smarter, and establish a strong market presence.
          </p>

          <span className="font-bold text-[#FF3C00]">Why Partner with Us?</span>

          {/* Added Points */}

          <ul className="list-disc pl-5 mt-5 space-y-3 text-gray-700">
            <li>
              <strong>Efficiency Ensured –</strong> Streamlined processes to
              save time, cut costs, and boost productivity.
            </li>
            <li>
              <strong>Premium Partnership –</strong> We work as an extension of
              your team, fully invested in your success.
            </li>
            <li>
              <strong>Professional Assistance –</strong> Expert guidance from
              initial idea to full-scale launch.
            </li>
            <li>
              <strong>Custom Solutions –</strong> Strategies tailored to your
              business needs and industry demands.
            </li>
            <li>
              <strong>Scalable Technology –</strong> Solutions built to grow
              alongside your business.
            </li>
            <li>
              <strong>End-to-End Support –</strong> Continuous assistance for
              long-term sustainability and innovation.
            </li>
          </ul>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center items-center">
          <img
            src={fullstacksection1img}
            alt="Full Stack Development"
            data-aos="fade-left"
          />
        </div>
      </section>

      <section className="flex flex-col md:flex-row p-20 bg-[#f9f9f9] gap-10">
        {/* Right Image */}
        <div className="flex-1 flex justify-start items-center">
          <img
            src={fullstacksection1img}
            width={600}
            alt="Full Stack Development"
            data-aos="fade-left"
          />
        </div>

        {/* Left Content */}
        <div className="flex-1">
          <span className="font-bold mb-10 text-[#ff3 c00]">
            Turn Your Dream Into a Reality
          </span>
          <h2 className="text-3xl font-bold mt-5 mb-5" data-aos="fade-up">
            Transforming Your Booming Business Into a Coveted Brand!
          </h2>
          <p className="max-w-2xl text-gray-700 text-sm leading-relaxed mb-6">
            At Infomagine, we empower businesses to evolve from promising
            ventures into highly recognized brands with strategic planning,
            cutting-edge technology, and result-driven execution. Whether you’re
            at the ideation stage or ready to scale, we help you achieve
            measurable growth and market authority.
          </p>

          <h2>Our Strategic Approach to Your Success</h2>

          {/* Added Points */}
          <ul className="list-disc pl-5 space-y-3 text-gray-700">
            <li>
              <strong>Gain Initial Thrust –</strong> Accelerate your business
              journey with powerful launch strategies and tech-driven solutions.
            </li>
            <li>
              <strong>MVP Determination –</strong> Identify and develop your
              Minimum Viable Product to validate ideas, attract investors, and
              reduce risks.
            </li>
            <li>
              <strong>Product Usability Testing –</strong> Ensure seamless user
              experience through rigorous testing and user feedback analysis.
            </li>
            <li>
              <strong>Scalable Development –</strong> Build technology that
              grows with your audience and market demands.
            </li>
            <li>
              <strong>Brand Positioning –</strong> Strategically position your
              brand to stand out in competitive markets.
            </li>
            <li>
              <strong>Continuous Optimization –</strong> Regularly refine and
              upgrade solutions to keep your business ahead of the curve.
            </li>
          </ul>
        </div>
      </section>

      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-[#EA3700] font-semibold text-lg">
            Customized IT Managed Services
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
            To Make Your Start-Up Business a Grand Success
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-12">
            At Infomagine, we don’t just provide IT services — we partner with
            you to transform ideas into impactful business realities. Our
            tailored IT managed solutions are designed to give your start-up the
            technology, scalability, and security it needs to thrive in a
            competitive market. From strategic consulting to full-scale
            implementation, we ensure your growth story is backed by innovation
            and efficiency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-xl p-6 text-center hover:shadow-2xl transition duration-300"
            >
              {service.icon}
              <h4 className="font-bold text-lg mb-2">{service.title}</h4>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

       <section className="py-16 px-6 md:px-20 bg-white">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <h3 className="text-orange-500     font-semibold mb-2">Grow Your Start-Up –</h3>
          <h2 className="text-4xl font-bold mb-4">
            From The Ground To The Sky!
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            At Infomagine, we partner with start-ups to turn bold ideas into
            market-leading realities. From the very first spark of an idea to a
            fully developed, revenue-generating product, we walk with you
            through every stage — ideation, conceptualization, business model
            development, product engineering, marketing, and value creation.
            With our innovation-driven approach, your start-up gets the perfect
            blend of strategy, technology, and execution to scale faster and
            smarter.
            <br />
            After all, empowering your start-up to reach new heights is what we
            do best!
          </p>
          
        </div>

        {/* Right Icons & Content */}
        <div className="space-y-8">
          <div className="flex items-start space-x-4">
            <FaNetworkWired className="text-orange-500 text-3xl" />
            <div>
              <h4 className="font-bold text-lg">Blockchain Technology</h4>
              <p className="text-gray-600">
                Secure, transparent, and future-ready business solutions.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <FaRobot className="text-orange-500 text-3xl" />
            <div>
              <h4 className="font-bold text-lg">AI-Integrated Solutions</h4>
              <p className="text-gray-600">
                Smarter systems that learn, adapt, and optimize performance.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <FaCloud className="text-orange-500 text-3xl" />
            <div>
              <h4 className="font-bold text-lg">Cloud Platform</h4>
              <p className="text-gray-600">
                Scalable, flexible, and cost-efficient infrastructure.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <FaMicrochip className="text-orange-500 text-3xl" />
            <div>
              <h4 className="font-bold text-lg">Internet of Things (IoT)</h4>
              <p className="text-gray-600">
                Connected devices for enhanced automation and data insights.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <FaChartBar className="text-orange-500 text-3xl" />
            <div>
              <h4 className="font-bold text-lg">Data Analytics & Insights</h4>
              <p className="text-gray-600">
                Turn raw data into actionable strategies.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <FaMobileAlt className="text-orange-500 text-3xl" />
            <div>
              <h4 className="font-bold text-lg">Mobile-First Applications</h4>
              <p className="text-gray-600">
                Engage users anywhere, anytime with intuitive mobile
                experiences.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="py-16 px-6 md:px-20 bg-gray-50">
      {/* Header */}
      <div className="text-center max-w-4xl mx-auto mb-12">
        <h3 className="text-orange-500 font-semibold">Your Ideas; Our Execution!</h3>
        <h1 className="text-3xl md:text-4xl font-bold mt-2">
          Empower Your Start-Up with Premium IT Solutions
        </h1>
        <p className="text-gray-600 mt-4 leading-relaxed">
          At Infomagine, we transform your start-up vision into a high-performing digital reality.
          From deep market understanding to flawless execution, our expert team ensures your business
          gets the perfect blend of strategy, design, and technology to stand out in today’s competitive market.
          We focus on delivering scalable, intuitive, and impactful IT solutions that fuel growth,
          enhance user experience, and set the foundation for long-term success.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg hover:-translate-y-1 transition-transform duration-300"
          >
            {service.icon}
            <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
          </div>
        ))}
      </div>
    </section> 



      <Footer />
    </>
  );
};

export default ItConsultingServices;
