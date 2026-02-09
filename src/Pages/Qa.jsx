import React from "react";
import Navbar2 from "../Components/navbar/Navbar2";
import Footer from "../Components/footer/Footer";
import { Link } from "react-router-dom";
import qatesting from "../assets/qatesting.jpg";
import infographic from "../assets/infographic.png";
import { motion } from "framer-motion";
import { Globe, Smartphone, Cog, Gauge, Shield, Bot } from "lucide-react";
import { Helmet } from "react-helmet";
import { BsQuestionDiamond } from "react-icons/bs";
import { MdAddCircle, MdRemoveCircle } from "react-icons/md";
import { useState } from "react";

const sectionClasses =
  "relative w-full bg-gradient-to-b from-slate-50 via-white to-slate-50";
const container = "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8";
const services = [
  {
    title: "Comprehensive Website Testing",
    desc: "Ensuring flawless functionality, design compatibility, and performance across all browsers and devices.",
    icon: Globe,
    points: [
      "Cross-browser & cross-device validation",
      "Accessibility (WCAG) checks",
      "Visual regression & responsive QA",
    ],
  },
  {
    title: "Mobile App Testing",
    desc: "Optimizing your apps for speed, usability, and stability on both iOS and Android platforms.",
    icon: Smartphone,
    points: [
      "Real-device & emulator coverage",
      "Battery, network & offline scenarios",
      "App Store & Play Store readiness",
    ],
  },
  {
    title: "Software Functionality Testing",
    desc: "Validating features, workflows, and integrations to ensure a smooth user experience.",
    icon: Cog,
    points: [
      "End-to-end & integration flows",
      "API & contract testing",
      "User acceptance criteria mapping",
    ],
  },
  {
    title: "Performance & Load Testing",
    desc: "Measuring scalability and responsiveness under real-world conditions.",
    icon: Gauge,
    points: [
      "Load, stress & soak tests",
      "Bottleneck analysis & tuning",
      "Capacity planning insights",
    ],
  },
  {
    title: "Security Testing",
    desc: "Detecting vulnerabilities to protect your applications from cyber threats.",
    icon: Shield,
    points: [
      "OWASP Top 10 coverage",
      "Static/Dynamic scans (SAST/DAST)",
      "Penetration testing reports",
    ],
  },
  {
    title: "Automation Testing",
    desc: "Accelerating release cycles with precise, repeatable, and efficient automated testing scripts.",
    icon: Bot,
    points: [
      "UI, API & mobile automation",
      "CI/CD pipeline integration",
      "Flaky test detection & triage",
    ],
  },
];

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.05 * i, duration: 0.45 },
  }),
};

const faqs = [
  {
    question: "What is software testing & QA?",
    answer:
      "Software testing means checking your software to find bugs or problems before people use it. QA (Quality Assurance) means putting in steps and processes so the software works well, safely, and reliably.",
  },
  {
    question: "When do you do QA & testing during a project?",
    answer:
      "Testing should happen at many stages: when features are developing, after major changes, during integration, before release, and after deployment for updates.",
  },
  {
    question: "Do you use manual testing, automated testing, or both?",
    answer:
      "Often both. Manual testing is good for exploratory or usability tests. Automated testing helps with repeated tests, large scale load, regressions. We decide the mix based on your needs.",
  },
  {
    question: "Can you help even after release?",
    answer:
      "Yes. We offer post-launch support: monitoring, fixing bugs that appear, ensuring updates don’t break anything, helping with improvements.",
  },
  {
    question: "How do we start with your QA & testing service?",
    answer:
      "You tell us about your software: features, where it's used, what devices, what risks you worry about. We plan a test strategy, test cases, decide tools, give cost & timeline. Then begin testing with your approval.",
  },
];

const Qa = () => {
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
          Software Testing Services | Quality Assurance company - Infomagine
          Softwares
        </title>
        <meta
          name="description"
          content="Partner with Infomagine, one of the top software testing companies in India. We provide advanced software testing services & QA to improve performance, security, and quality."
        />

        <link
          rel="canonical"
          href="https://infomagine.in/services/software-testing-&-qa"
        ></link>
        <meta
          property="og:title"
          content="Software Testing Services | Quality Assurance company - Infomagine Softwares"
        />
        <meta
          property="og:description"
          content="Partner with Infomagine, one of the top software testing companies in India. We provide advanced software testing services & QA to improve performance, security, and quality."
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
          src={qatesting}
          alt="Custom Software"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center px-10 md:px-20">
          <div data-aos="fade-right" className="text-white max-w-2xl space-y-5">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Delivering Excellence as a Leading QA & Software Testing Partner
            </h1>
            <p className="text-lg">
              Fuel Your Business Growth with Premium Quality and Better Agility
            </p>

            <p>
              Delivering flawless digital experiences starts with rigorous
              testing and uncompromised quality assurance. At Infomagine, we
              ensure your software is bug-free, reliable, and ready to perform
              in real-world scenarios. Our expert QA engineers combine manual
              and automated testing to detect issues early, reduce risks, and
              accelerate time-to-market.
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

      <section className={sectionClasses}>
        {/* top glow */}
        <div className="pointer-events-none absolute inset-x-0 -top-20 h-40 bg-gradient-to-b from-indigo-100/70 to-transparent blur-2xl" />

        <div className={`${container} py-16 sm:py-20 lg:py-24`}>
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-3xl text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Our Key{" "}
              <span className=" text-[#FF3C00] bg-clip-text ">
                Testing Services
              </span>
            </h2>
            <p className="mt-4 text-base text-slate-600 sm:text-lg">
              Bulletproof quality across web, mobile, and platforms—engineered
              for speed, security, and reliability.
            </p>
          </motion.div>

          {/* Grid */}
          <div className="mt-12 grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, idx) => (
              <motion.div
                key={s.title}
                custom={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={itemVariants}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md"
              >
                {/* Accent ring */}
                <div className="absolute inset-0 -z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="" />
                </div>

                {/* Icon */}
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100">
                  <s.icon className="h-6 w-6 text-orange-500" aria-hidden />
                </div>

                <h3 className="text-lg font-semibold text-slate-900">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {s.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* bottom glow */}
        <div className="pointer-events-none absolute inset-x-0 -bottom-20 h-40 bg-gradient-to-t " />
      </section>

      <div className="mt-20">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center px-4"
        >
          <h2 className="text-4xl font-bold tracking-tight text-slate-900">
            Our Way of{" "}
            <span className="text-[#FF3C00] bg-clip-text">
              Testing & Assuring Quality
            </span>
          </h2>
          <p className="mt-4 text-base text-slate-600 sm:text-lg">
            We dedicate extensive time to understanding your brand’s goals,
            challenges, and target audience. This enables us to create a
            strategic, result-driven roadmap for your quality assurance and
            software testing needs. Here’s a glimpse into our structured
            approach:
          </p>
        </motion.div>
      </div>

      <div className="mt-10 max-w-7xl mx-auto px-4">
        <img
          src={infographic}
          alt="Infographic"
          className="w-full h-auto max-w-5xl mx-auto"
        />
      </div>

      {/* FAQ Section */}
      <section className="py-20 px-6 md:px-20 bg-[#f9f9f9]">
        <h2
          className="text-center text-4xl font-medium mb-15"
          data-aos="fade-up"
        >
          FAQs about Software Testing & QA
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

export default Qa;
