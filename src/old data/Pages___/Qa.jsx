import React from "react";
import Navbar2 from "../Components/navbar/Navbar2";
import Footer from "../Components/footer/Footer";
import { Link } from "react-router-dom";
import qatesting from "../assets/qatesting.jpg";
import infographic from "../assets/infographic.png";
import { motion } from "framer-motion";
import { Globe, Smartphone, Cog, Gauge, Shield, Bot } from "lucide-react";

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

const Qa = () => {
  return (
    <>
      <Navbar2 />

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
              Software Testing & QA
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
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="text-4xl font-bold tracking-tight text-slate-900 l">
            Our Way of{" "}
            <span className=" text-[#FF3C00] bg-clip-text ">
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

      <div>
        <img src={infographic} alt="" />
      </div>

      <Footer />
    </>
  );
};

export default Qa;
