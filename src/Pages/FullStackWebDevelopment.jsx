import React from "react";
import Navbar2 from "../Components/navbar/Navbar2";
import Footer from "../Components/footer/Footer";
import { Link } from "react-router-dom";
import headercustomsoftware from "../assets/headercustomsoftware.jpg";
import fullstacksection1img from "../assets/fullstacksection1img.png";
import ecommercedevelopment from "../assets/ecommercedevelopment.jpg";
import apidevelopment from "../assets/apidevelopment.jpg";
import { useState } from "react";
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
import { motion } from "framer-motion";
import { Lightbulb, Palette, Code2, ShieldCheck, Rocket } from "lucide-react";
import { Helmet } from "react-helmet";
import { BsQuestionDiamond } from "react-icons/bs";
import { MdAddCircle, MdRemoveCircle } from "react-icons/md";

const steps = [
  {
    id: 1,
    title: "Ideation",
    icon: Lightbulb,
    color: "from-yellow-100 to-amber-100",
    badge: "Plan",
    blurb:
      "We start by understanding your vision, goals, and target audience, then brainstorm creative and practical solutions to lay a strong foundation for the project.",
  },
  {
    id: 2,
    title: "UI Creation",
    icon: Palette,
    color: "from-pink-100 to-rose-100",
    badge: "Design",
    blurb:
      "Our design team crafts visually appealing and intuitive interfaces that enhance user experience while aligning perfectly with your brand identity.",
  },
  {
    id: 3,
    title: "Development & Integration",
    icon: Code2,
    color: "from-indigo-100 to-sky-100",
    badge: "Build",
    blurb:
      "Using cutting-edge technologies, we build robust, scalable, and secure solutions, integrating all required features for flawless functionality.",
  },
  {
    id: 4,
    title: "Testing & Quality Assurance",
    icon: ShieldCheck,
    color: "from-emerald-100 to-teal-100",
    badge: "QA",
    blurb:
      "Every product undergoes rigorous testing to ensure it’s bug-free, secure, and performance-optimized.",
  },
  {
    id: 5,
    title: "Deployment & Support",
    icon: Rocket,
    color: "from-purple-100 to-fuchsia-100",
    badge: "Launch",
    blurb:
      "We ensure a smooth launch and continue to provide post-deployment support to keep your solution up-to-date and running seamlessly.",
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

const faqs = [
  {
    question: "Why do I need a full-stack developer?",
    answer:
      "Because with one team or developer you get both sides handled. That means: smoother integration, fewer communication issues, faster delivery, and usually lower cost than hiring separate front-end and back-end teams.",
  },
  {
    question: "Which technologies are used in full-stack development?",
    answer:
      "Technologies could include: HTML/CSS/JavaScript for front end; frameworks like React, Angular, or Vue; for back end, languages / platforms like Node.js, Python, PHP, Java, .NET; plus databases like MySQL, PostgreSQL, MongoDB, etc.",
  },
  {
    question: "Can you support both web and mobile with full-stack?",
    answer:
      "Yes. Full-stack work can include web apps, APIs, as well as server-side logic that supports mobile apps. The back end part can serve both platforms.",
  },
  {
    question: "What about testing and quality assurance?",
    answer:
      "Full-stack development includes testing: frontend usability, backend logic, performance, security, compatibility. We aim to deliver a stable, reliable product with minimal bugs.",
  },
  {
    question: "Can you maintain and update the software later?",
    answer:
      "Yes. We offer post-launch support: bug fixes, updates, adding new features, scaling, adapting to new hardware or software.",
  },
];

const FullStackWebDevelopment = () => {
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
        <title>Full Stack | E-commerce Development Company | Infomagine</title>
        <meta
          name="description"
          content="Empowering businesses with Full Stack Development Solutions and scalable e-commerce platforms. Trusted .NET Development company in India for your digital growth."
        />

        <link
          rel="canonical"
          href="https://infomagine.in/services/full-stack-development"
        ></link>
        <meta
          property="og:title"
          content="Full Stack | E-commerce Development Company | Infomagine"
        />
        <meta
          property="og:description"
          content="Empowering businesses with Full Stack Development Solutions and scalable e-commerce platforms. Trusted .NET Development company in India for your digital growth."
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
              From Full Stack to E-commerce Development – We Code Your Success
            </h1>
            <p className="text-lg">
              At Infomagine, we focus on offering complete web development
              services. We create reliable back-end systems and ensure a smooth
              user experience on the front end. If you need a lively business
              website, an online shopping site, or a special web application,
              our skilled developers will make sure your solution is quick,
              safe, and ready for the future. We use the latest tools,
              technologies, and coding methods to create Applications.
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
        <div className="flex-1">
          <div className="mb-2 text-[#FF3C00]">
            Process-Driven Full-Stack Web Apps
          </div>
          <h2 className="text-3xl font-bold mb-5" data-aos="fade-up">
            For an Enhanced UX and a Unique Brand Identity
          </h2>
          <p className="max-w-2xl text-gray-700 text-sm leading-relaxed mb-6">
            At Infomagine, we follow a well-defined, process-driven approach to
            build high-performance full-stack web applications that not only
            look stunning but also deliver a flawless user experience. Our team
            blends design thinking, advanced coding, and strategic execution to
            ensure your application stands out while perfectly representing your
            brand.
          </p>

          {/* Added Points */}
          <ul className="list-disc pl-5 space-y-3 text-gray-700">
            <li>
              <strong>Fully Functional Prototype –</strong> We create an
              interactive prototype before development to ensure your vision
              aligns with the final product.
            </li>
            <li>
              <strong>Faster Turnaround –</strong> Agile methodologies help us
              deliver projects efficiently without compromising quality.
            </li>
            <li>
              <strong>Advanced Programming Language Expertise –</strong> From
              JavaScript frameworks to backend technologies, we use the best
              tools for speed, security, and scalability.
            </li>
            <li>
              <strong>Seamless Integration –</strong> Easily connect your web
              app with APIs, databases, and third-party tools for optimal
              performance.
            </li>
            <li>
              <strong>Custom UI/UX Design –</strong> Tailored designs that
              reflect your brand and improve user engagement.
            </li>
            <li>
              <strong>Ongoing Support –</strong> Post-launch assistance to keep
              your web application updated and competitive.
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

      {/* New Full Stack Intro */}
      <section className="py-20 px-6 md:px-20 bg-white">
        <h2 className="text-3xl font-bold text-center mb-12">
          Explore Our Comprehensive Full Stack Development Solutions
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {/* PHP Development */}
          <div className="p-6 border border-gray-300 rounded-2xl shadow hover:shadow-lg transition">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg"
              alt="PHP Development"
              className="w-16 h-16 mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">PHP Development</h3>
            <p className="text-gray-700">
              Build dynamic, secure, and high-performing web solutions using
              robust PHP frameworks like Laravel, CodeIgniter, and Symfony.
            </p>
          </div>

          {/* Python Development */}
          <div className="p-6 border border-gray-300 rounded-2xl shadow hover:shadow-lg transition">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg"
              alt="Python Development"
              className="w-16 h-16 mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Python Development</h3>
            <p className="text-gray-700">
              Develop versatile, data-driven applications with Python’s powerful
              capabilities and frameworks like Django and Flask.
            </p>
          </div>

          {/* JavaScript Development */}
          <div className="p-6 border border-gray-300 rounded-2xl shadow hover:shadow-lg transition">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
              alt="JavaScript Development"
              className="w-16 h-16 mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">
              JavaScript Development
            </h3>
            <p className="text-gray-700">
              From front-end interactivity to backend logic, we harness
              JavaScript’s full potential using React, Vue, Node.js, and more.
            </p>
          </div>

          {/* .NET Development */}
          <div className="p-6 border border-gray-300 rounded-2xl shadow hover:shadow-lg transition">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/e/ee/.NET_Core_Logo.svg"
              alt=".NET Development"
              className="w-16 h-16 mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">.NET Development</h3>
            <p className="text-gray-700">
              Deliver enterprise-grade applications with the scalability and
              security of Microsoft’s .NET ecosystem.
            </p>
          </div>

          {/* E-commerce Development */}
          <div className="p-6 border border-gray-300  rounded-2xl shadow hover:shadow-lg transition">
            <img
              src={ecommercedevelopment}
              alt="E-commerce Development"
              className="w-16 h-16 mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">
              E-commerce Development
            </h3>
            <p className="text-gray-700">
              Create feature-rich online stores with smooth navigation, secure
              payments, and seamless user experiences.
            </p>
          </div>

          {/* API Development */}
          <div className="p-6 border border-gray-300 rounded-2xl shadow hover:shadow-lg transition">
            <img
              src={apidevelopment}
              alt="API Development"
              className="w-16 h-16 mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">
              API Development & Integration
            </h3>
            <p className="text-gray-700">
              Connect systems effortlessly with secure, efficient API design and
              integration services.
            </p>
          </div>
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
          <h2 className="text-3xl font-bold mb-5" data-aos="fade-up">
            We Strive to Excel in Every Facet of Full Stack Web Development
          </h2>
          <p className="max-w-2xl text-gray-700 text-sm leading-relaxed mb-6">
            At Infomagine, our Full Stack Web Developers bring unmatched
            expertise in both front-end and back-end development. From crafting
            intuitive user interfaces to managing robust databases and resolving
            complex bugs, we provide end-to-end solutions that ensure seamless
            functionality and exceptional performance. With precision,
            innovation, and dedication, we aim to set new benchmarks in the
            industry.
          </p>

          <h2 className="font-bold mb-5 text-[#ff3c00]">
            Why Partner with Our Full Stack Experts?
          </h2>

          {/* Added Points */}
          <ul className="list-disc pl-5 space-y-3 text-gray-700">
            <li>
              <strong>Extensive Experience –</strong> Work with seasoned
              professionals with 9+ years of expertise in full stack web
              development.
            </li>
            <li>
              <strong>Mastery of Modern Technologies –</strong> Highly skilled
              in the latest tools, frameworks, and programming languages.
            </li>
            <li>
              <strong>Strict Confidentiality –</strong> We respect your privacy
              with binding non-disclosure agreements.
            </li>
            <li>
              <strong>Dedicated Project Management –</strong> 100% commitment
              from our project managers for smooth execution.
            </li>
            <li>
              <strong>Comprehensive Guidance –</strong> From concept creation to
              final launch, we’re with you every step of the way.
            </li>
          </ul>
        </div>
      </section>

      <section className="relative w-full bg-white">
        {/* Top gradient glow */}
        <div className="pointer-events-none absolute inset-x-0 -top-32 h-64 bg-gradient-to-b from-amber-50/70 to-transparent blur-2xl"></div>

        <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-3xl text-center"
          >
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl">
              Our Development Process
            </h2>
            <p className="mt-3 text-gray-600 md:text-lg">
              At Infomagine, we follow a strategic, transparent, and
              result-driven development process that ensures every project turns
              into a digital success story. From brainstorming innovative ideas
              to deploying the final product, we keep our approach agile,
              collaborative, and focused on your goals.
            </p>
          </motion.div>

          {/* Horizontal step progress for desktop */}

          {/* Cards timeline */}
          <motion.ol
            variants={container}
            initial="hidden"
            animate="show"
            className="relative mt-10 grid gap-6 md:mt-16"
          >
            {/* timeline line for mobile */}
            <div className="pointer-events-none absolute left-8 top-0 h-full w-px bg-gradient-to-b from-gray-200 via-gray-200 to-transparent md:hidden" />

            {steps.map((step, idx) => (
              <motion.li
                key={step.id}
                variants={item}
                className={
                  "group relative rounded-2xl border border-gray-300 bg-white/70 p-5 backdrop-blur-sm transition hover:shadow-md md:p-6 " +
                  (idx % 2 === 0 ? "md:ml-12" : "md:mr-12")
                }
              >
                {/* timeline dot on mobile */}
                <div className="absolute -left-[22px] top-6 grid size-6 place-items-center rounded-full border bg-white md:hidden">
                  <div className="size-2 rounded-full bg-amber-500" />
                </div>

                <div className="flex items-start gap-4">
                  <div
                    className={`grid size-12 place-items-center rounded-xl bg-gradient-to-br ${step.color}`}
                  >
                    <step.icon className="size-5" />
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-700">
                        <span className="size-1.5 rounded-full bg-emerald-500" />
                        {step.badge}
                      </span>
                      <span className="text-xs font-semibold tracking-wide text-gray-500">
                        Step {step.id} of {steps.length}
                      </span>
                    </div>

                    <h3 className="mt-2 text-lg font-semibold text-gray-900 md:text-xl">
                      {step.title}
                    </h3>

                    <p className="mt-2 text-gray-600">{step.blurb}</p>
                  </div>
                </div>
              </motion.li>
            ))}
          </motion.ol>

          {/* CTA */}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 md:px-20 bg-[#f9f9f9]">
        <h2
          className="text-center text-4xl font-medium mb-15"
          data-aos="fade-up"
        >
          FAQs about Full Stack Development
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

export default FullStackWebDevelopment;
