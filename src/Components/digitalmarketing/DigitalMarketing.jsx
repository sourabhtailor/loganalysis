import React from "react";
import { useState } from "react";
import Layout from "../Layout";
import seoHeader from "../../assets/seoHeader.jpg";
import { Helmet } from "react-helmet";
import imgseo from "../../assets/imgseo.jpg";
import MarketingAgency from "../../assets/Marketing Agency.png";
import { Link } from "react-router";
import { BsQuestionDiamond } from "react-icons/bs";
import { MdAddCircle, MdRemoveCircle } from "react-icons/md";

const faqs = [
  {
    question: "Why is digital marketing important for my business?",
    answer: [
      "Reach more people online",
      "Target specific audiences who are interested in your product or service",
      "Get measurable results so you know what works and what doesn’t",
      "Usually more cost-effective than traditional offline ads",
    ],
  },
  {
    question: "How long will it take to see results?",
    answer:
      "It depends on what you’re doing. Some things like paid ads can show results quickly. Other things like SEO and content take time—often several weeks or months—to build up.",
  },
  {
    question: "How much does digital marketing cost?",
    answer:
      "Cost depends on your goals, platforms used, how much content or ads you need, how competitive your industry is. We will estimate the cost after understanding your specific needs.",
  },
  {
    question: "Do I need to use all digital marketing services, or just some?",
    answer:
      "You can use as few or as many as make sense. If you are just starting, you might pick 1-2 services (e.g. SEO + social media). If you want full growth, you might use a mix. We can help design a plan fit for your budget.",
  },

  {
    question: "How do you measure success?",
    answer: [
      "Website traffic (how many people visit)",
      "Lead generation (how many people show interest or request information)",
      "Sales/conversions (how many become customers)",
      "Engagement on social media (likes, comments, shares)",
      "Return on Investment (ROI) — comparing what you spend vs what you earn",
    ],
  },

  ,
];

const benefits = [
  {
    number: "01",
    title: "Increased Online Visibility",
    description:
      "We help businesses in the USA, UK, UAE and more dominate search rankings through targeted strategies that boost brand exposure and web traffic.",
  },
  {
    number: "02",
    title: "Cost-Effective Growth",
    description:
      "Digital marketing offers a better ROI compared to traditional media. Reach customers in Germany, Australia, and other markets without breaking your budget.",
  },
  {
    number: "03",
    title: "Support Brand Value",
    description:
      "Build trust and enhance credibility through consistent branding and content across digital platforms. This fosters long-term customer loyalty in markets like Netherlands and Italy.",
  },
  {
    number: "04",
    title: "Drive More Traffic",
    description:
      "Drive qualified traffic to your site using high-converting ad campaigns, SEO, and retargeting strategies optimized for audiences in Luxembourg, UAE, and Indonesia.",
  },
  {
    number: "05",
    title: "Improve Conversion Rates",
    description:
      "Turn clicks into customers with optimized landing pages, engaging content, and strategic funnels tailored to audiences in New Zealand, USA, and UK.",
  },
  {
    number: "06",
    title: "Get Measurable Results",
    description:
      "Track your campaign's success in real-time with detailed analytics that help you scale what works best in Germany, Australia, and other target regions.",
  },
];

const services = [
  {
    id: 1,
    title: "SEO",
    description:
      "Improve your organic search rankings and online visibility with our SEO services. We use keyword research and best practices to help businesses in the USA, UK, and beyond achieve higher search rankings and increased web traffic.",
  },
  {
    id: 2,
    title: "Local SEO",
    description:
      "Capture your audience with local SEO strategies designed to improve local listings, NAP accuracy, and Google Maps presence. Ideal for businesses in Germany, Netherlands, and Austria looking to boost local conversions.",
  },
  {
    id: 3,
    title: "Technical SEO",
    description:
      "Optimize your website’s backend—page speed, structured data, and indexing—for improved technical SEO and global search performance. We serve clients in India, Netherlands, New Zealand, and Italy seeking international reach.",
  },
  {
    id: 4,
    title: "Link Building",
    description:
      "Increase your site’s authority with backlink building through guest blogging, outreach, and digital PR. Trusted by businesses in the UK, Luxembourg, and the USA to improve strength and search rankings.",
  },
  {
    id: 5,
    title: "Website Design",
    description:
      "We create responsive, ADA-compliant websites built for performance and user engagement. Whether you’re a startup in New Zealand or an enterprise in the USA, we design digital experiences that drive conversions.",
  },
  {
    id: 6,
    title: "SMM",
    description:
      "Our social media marketing services increase engagement, grow your business presence, and build customer loyalty. We manage social media campaigns for clients in markets such as UK, USA, and Germany.",
  },
  {
    id: 7,
    title: "PPC",
    description:
      "Get results with our performance-driven PPC services. We plan, launch, and manage Google Ads, Bing Ads, and display campaigns for businesses in the USA, Netherlands, and Austria—driving quality targeted leads.",
  },
  {
    id: 8,
    title: "Analytics & Reporting",
    description:
      "Understand your marketing performance through custom dashboards and real-time analytics. We serve clients in Luxembourg, Italy, and the UK to make data-driven decisions using in-depth reporting and tracking insights.",
  },
  {
    id: 9,
    title: "CRO",
    description:
      "Maximize conversions with our highly effective CRO strategies focused on UX, A/B testing, and website optimization. Consistently proven to help clients in India, UK, USA, and Europe get more from existing traffic.",
  },
];

// ServiceCard component
const ServiceCard = ({ id, title, description, className }) => (
  <div
    className={`bg-white shadow-xl p-6 flex flex-col justify-between items-center text-center h-full min-h-[12rem] sm:min-h-[10rem] lg:min-h-[14rem] ${className}`}
  >
    <div className="text-orange-500 font-bold text-xl mb-4">
      <img src="" alt="" />
    </div>
    <h3 className="text-2xl font-semibold mb-3">{title}</h3>
    <p className="text-sm text-gray-700 flex-grow flex items-center justify-center px-2">
      {description}
    </p>
  </div>
);

const DigitalMarketing = () => {
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
          {" "}
          Pay Per Lead Generation | Performance Driven Digital Marketing Agency
        </title>
        <meta
          name="description"
          content=" Boost your business growth with the Best Performance Driven Digital Marketing Agency in India. We are also known as Meta Ads, SEO, Pay Per Lead Generation service providers company in India."
        />
        <link
          rel="canonical"
          href="https://infomagine.in/services/digital-marketing"
        ></link>

        {/* Open Graph Tags for Social Sharing */}
        <meta
          property="og:title"
          content="Pay Per Lead Generation | Performance Driven Digital Marketing Agency"
        />
        <meta
          property="og:description"
          content="Boost your business growth with the Best Performance Driven Digital Marketing Agency in India. We are also known as Meta Ads, SEO, Pay Per Lead Generation service providers company in India."
        />
        <meta
          property="og:image"
          content="https://infomagine.in/assets/infomagine%20logo-BsvjEvw5.png"
        />
        <meta
          property="og:url"
          content="https://infomagine.in/digital-marketing"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Infomagine Softwares" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:country" content="US, UK, UAE, AU, NZ" />

        {/* Schema Markup in JSON-LD format */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Digital Marketing",
            provider: {
              "@type": "Organization",
              name: "Infomagine Softwares",
              url: "https://infomagine.in/digital-marketing",
              logo: "https://infomagine.in/logo.png",
              sameAs: [
                "https://www.facebook.com/Infomaginesoftwares",
                "https://www.instagram.com/infomagine_softwares/",
                "https://www.linkedin.com/company/13313914/",
                "https://x.com/InfocoxSocial",
                "https://in.pinterest.com/infomaginesoftwares/",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91-XXXXXXXXXX",
                contactType: "Customer Service",
                areaServed: "Global",
                availableLanguage: "English",
              },
            },
            areaServed: "US, UK, UAE, AU, NZ",
            description:
              "Infomagine Softwares offers SEO, Social Media Marketing, PPC, and other digital marketing services to grow your business online.",
            url: "https://infomagine.in/digital-marketing",
          })}
        </script>
      </Helmet>

      <div className="flex flex-col mb-20 gap-20">
        <div className="w-full h-[40rem] relative">
          <img className="w-full h-full object-cover" src={seoHeader} alt="" />
          <div
            className="absolute top-1/2 left-4 sm:left-10 transform -translate-y-1/2 text-white flex flex-col gap-4 w-[90%] sm:w-3/4 lg:w-1/2"
            data-aos="fade-right"
          >
            <h1 className="text-2xl sm:text-4xl font-bold">
              Grow Smarter with Best Performance Driven Digital Marketing Agency
              in India
            </h1>
            <p className="text-sm sm:text-base">
              Our digital marketing services are tailored to fuel your company’s
              growth across international markets including the USA, UK, UAE,
              Germany, Australia, and Netherlands. From custom web design to
              SEO, PPC, and social media marketing, we create data-driven
              strategies to boost brand visibility, generate high-quality leads,
              and maximize conversions.{" "}
            </p>
            <Link
              to="/contact-us"
              className="bg-[#FF5722] px-4 py-2 text-sm sm:text-base w-fit rounded-md"
            >
              Let's Talk
            </Link>
          </div>
        </div>

        <div
          className="flex flex-col-reverse md:flex-row items-center justify-center gap-10 px-5 md:px-20 py-10"
          data-aos="fade-right"
        >
          {/* Text Section */}
          <div
            className="w-full md:w-1/2 flex flex-col justify-center gap-6"
            data-aos="fade-left"
          >
            <h2 className="text-2xl sm:text-3xl md:text-start text-center md:text-4xl font-bold">
              How a Digital Marketing Agency Can Transform Your Brand’s Online
              Presence
            </h2>

            <hr className="w-24 border-2 border-[#F54900]" />

            <p className="md:text-start text-center text-gray-700">
              The key to revolutionizing your online presence lies in a
              comprehensive digital marketing strategy. Whether you're in
              Luxembourg, Indonesia, New Zealand, or Italy, you can increase
              visibility, attract targeted traffic, and better engage your
              audience using tactics like SEO, PPC, content marketing, and
              social media optimization.
            </p>
          </div>

          {/* Image Section */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              className="object-contain w-full max-w-md md:max-w-lg"
              src={imgseo}
              alt="About Us"
            />
          </div>
        </div>

        {/* Services Section */}
        <div
          className="md:px-10 p-6 bg-gray-50 min-h-screen"
          data-aos="fade-up"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Infomagine Digital Marketing{" "}
              <span className="text-orange-500">Services</span>
            </h2>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <div
                key={service.id}
                data-aos="zoom-in"
                data-aos-delay={i * 100}
                className="h-full"
              >
                {/* ServiceCard fills equal height */}
                <ServiceCard {...service} className="h-full" />
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div
          className="px-4 md:px-10 lg:px-20 py-10 bg-white text-gray-800"
          data-aos="fade-up"
        >
          {/* Section Header */}
          <div className="text-center flex flex-col gap-4 mb-12 px-4">
            {/* Optional small heading */}
            {/* <h3 className="text-md font-medium uppercase tracking-widest text-[#FF3C00]">
                  Digital Marketing
                </h3> */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              Why Your Business Needs Digital{" "}
              <span className="text-red-600">Marketing Services</span>
            </h2>
          </div>

          {/* Benefit Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10">
            {benefits.map((benefit, i) => (
              <div
                key={benefit.number}
                className="p-6 border-l-4 border-[#FF3C00] bg-gray-50 rounded-xl shadow-sm"
                data-aos="fade-up"
                data-aos-delay={i * 100}
              >
                <h3 className="text-[#FF3C00] text-2xl font-bold mb-2">
                  {benefit.number}
                </h3>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-sm text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-6 items-center" data-aos="zoom-in-up">
          <span className="text-4xl text-center font-bold">
            Why Choose Infomagine as Your Digital{" "}
            <span className="text-[#ff3b00]">Marketing Agency? </span>
          </span>
          <img className="w-[90%]" src={MarketingAgency} alt="" />
        </div>

        <h2 className="text-center text-4xl font-medium" data-aos="fade-up">
          FAQs about Digital Marketing
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
      </div>
    </Layout>
  );
};

export default DigitalMarketing;
