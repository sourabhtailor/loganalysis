import React from "react";
import { useState } from "react";
import Layout from "../Layout";
import { Helmet } from "react-helmet";
import itconsHeader from "../../assets/itconsHeader.jpg";
import Consenimg from "../../assets/Consen-2dfg.png";
import CertifiedCompany from "../../assets/Certified Company.png";
import Award from "../../assets/Award.png";
import cybersecurity from "../../assets/cyber-security.png";
import cloud from "../../assets/cloud.png";
import infrastructuresupport from "../../assets/infrastructure support.png";
import manage from "../../assets/manage it service.png";
import ProjectOutsourcing from "../../assets/Project Outsourcing.png";
import ITspecialist from "../../assets/IT specialist.png";
import problemsolving from "../../assets/problem solving.png";
import constantupdate from "../../assets/constant update.png";
import keepinformed from "../../assets/keep informed.png";
import costefficiant from "../../assets/cost efficiant.png";
import sucess from "../../assets/sucess.png";
import { Link } from "react-router";
import { BsQuestionDiamond } from "react-icons/bs";
import { MdAddCircle, MdRemoveCircle } from "react-icons/md";

const faqs = [
  {
    question: " What is IT consulting services?",
    answer:
      "IT consulting services offer expert guidance to assist companies in evaluate and implement into practice the best technology strategies, optimizing workflows and processes for effective digital transformation.",
  },
  {
    question: "What are the benefits of IT consulting services?",
    answer:
      "Expert Guidance: Consultants provide tailored technology solutions for business needs. Improved Efficiency: Streamlining IT systems to boost productivity and reduce manual tasks. Cost Savings: Making informed decisions to avoid unnecessary tech investments. Enhanced Security: Implementing strong security measures to protect data. Scalability: Ensuring technology solutions grow with your business. Strategic Planning: Aligning IT strategies with business goals for long-term success. Risk Management: Identifying and mitigating potential technology risks.",
  },
  {
    question: "When should my business consider IT consulting services?",
    answer:
      "Your business should consider IT consulting services when you need expert guidance on technology implementation, face challenges in digital transformation, or want to streamline processes and improve overall IT performance.",
  },
  {
    question: " What makes Infomagine’s IT consulting services unique?",
    answer:
      "Leveraging latest technology and industry expertise, Infomagine offers customized IT solutions to meet the particular needs of your business. Our focus on providing affordable strategies that promote measurable results and growth.",
  },

  ,
];

const services2 = [
  {
    title: "IT Specialists",
    description:
      "Our certified experts deliver results for businesses in USA, UK, UAE, and beyond.",
    icon: ITspecialist,
  },
  {
    title: "Constant Updates",
    description:
      "Stay informed with regular updates on job orders, projects, and deliverables.",
    icon: constantupdate,
  },
  {
    title: "Solve Problems",
    description:
      "We solve complex IT issues and offer high-impact solutions that improve performance.",
    icon: problemsolving,
  },
  {
    title: "Keeping Informed",
    description:
      "Receive transparent project progress and performance updates at every step.",
    icon: keepinformed,
  },
  {
    title: "Cost-Efficient Services",
    description:
      "We offer affordable, value-driven services for global businesses.",
    icon: costefficiant,
  },
  {
    title: "Proven Success",
    description:
      "Trusted by companies in Germany, Netherlands, France, and Australia to scale operations and transform digitally.",
    icon: sucess,
  },
];

const services = [
  {
    id: "01",
    title: "Cybersecurity Consulting",
    description:
      "Protect your business from digital threats with our cybersecurity consulting services. We offer vulnerability assessments, risk management, and robust security implementations for companies in the UK, USA, Germany, and UAE.",
    icon: cybersecurity,
  },
  {
    id: "02",
    title: "Cloud Consulting Services",
    description:
      "Leverage the full power of cloud technologies with Infomagine. We offer cloud migration services platform selection, and cloud infrastructure optimization to help businesses across Australia, France, Netherlands, and the UK maximize cost-efficiency and performance.",
    icon: cloud,
  },
  {
    id: "03",
    title: "IT Infrastructure Support",
    description:
      "Our IT infrastructure consulting ensures your systems are built for speed, reliability, and scalability. We help companies across Luxembourg, Italy, and the USA reduce costs and streamline operations through customized IT strategies.",
    icon: infrastructuresupport,
  },
  {
    id: "04",
    title: "Managed IT Services",
    description:
      "Infomagine offers fully managed IT services to support your internal teams. We handle ongoing maintenance, provide reliable system support, and monitor operations, allowing your staff to concentrate on innovation, growth, and core business functions.",
    icon: manage,
  },
];

const ItConsulting = () => {
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
          IT Consulting Services | IT Consulting Company | Infomagine
        </title>
        <meta
          name="description"
          content="Get expert IT consulting for cybersecurity, cloud migration & infrastructure planning. Serving USA, UK, UAE, Germany & more. Trusted by global enterprises."
        />
        <link rel="canonical" href="https://infomagine.in/it-consulting"></link>
        {/* Open Graph Meta Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="Infomagine Software" />
        <meta
          property="og:title"
          content="IT Consulting Services | Cloud & Security Experts"
        />
        <meta
          property="og:description"
          content="Strategic IT consulting, cloud infrastructure & cybersecurity from certified experts. Serving USA, UK, Europe, UAE, Australia & more."
        />
        <meta
          property="og:url"
          content="https://infomagine.in/it-consulting-services"
        />
        <meta
          property="og:image"
          content="https://infomagine.in/assets/og-image-itconsulting.jpg"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Schema Markup for IT Consulting Services */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Infomagine Software",
            url: "https://infomagine.in",
            logo: "https://infomagine.in/assets/main-logo.png",
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+91-XXXXXXXXXX",
              contactType: "Customer Support",
              areaServed: [
                "US",
                "UK",
                "UAE",
                "France",
                "Netherlands",
                "Luxembourg",
                "Australia",
                "New Zealand",
              ],
            },
            sameAs: [
              "https://www.linkedin.com/company/infomagine",
              "https://twitter.com/infomagine",
              "https://www.facebook.com/infomagine",
            ],
          })}
        </script>
      </Helmet>

      <div className="flex flex-col mb-20 gap-20">
        {/* Hero Section */}
        <div className="w-full h-[40rem] relative">
          <img
            className="w-full h-full object-cover"
            src={itconsHeader}
            alt=""
          />
          <div
            className="absolute top-1/2 left-4 sm:left-10 transform -translate-y-1/2 text-white flex flex-col gap-4 w-[90%] sm:w-3/4 lg:w-1/2"
            data-aos="fade-right"
          >
            <h1 className="text-2xl sm:text-4xl font-bold">
              Expert IT Consulting Services for Global Businesses
            </h1>
            <p className="text-sm sm:text-base">
              Infomagine is a global IT consulting company trusted across the
              USA, UK, UAE, Germany, France, and Australia. We help businesses
              modernize IT infrastructure, enhance cybersecurity, migrate to the
              cloud, and optimize operations through tailored consulting
              strategies. From startups to large enterprises, our consultants
              bring deep industry expertise and proven results.{" "}
            </p>
            <Link
              to="/contact-us"
              className="bg-[#FF5722] px-4 py-2 text-sm sm:text-base w-fit rounded-md"
            >
              Let's Talk
            </Link>
          </div>
        </div>
        {/* Works About Section */}
        <div
          className="flex flex-col md:flex-row items-center justify-center gap-10 px-6 md:px-20"
          data-aos="fade-up"
        >
          <div data-aos="flip-left">
            <img
              className="object-contain"
              src={Consenimg}
              alt="About Us"
              loading="lazy"
            />
          </div>
          <div
            className="md:w-1/2 flex flex-col justify-center items-center md:item-start md:text-start text-center gap-6"
            data-aos="fade-left"
          >
            <h2 className="text-4xl font-bold">
              Empower Your Business with Infomagine IT Consulting Company
            </h2>
            <p>
              Infomagine IT Consulting Services provides smart, tailored solutions for businesses looking to scale globally, including regions like the USA, UAE, UK, Australia, Netherlands, Luxembourg, and Italy. Our certified consultants work closely with your team to understand business challenges and offer strategies that drive performance and innovation.
            </p>
            <div className="flex flex-col sm:flex-row justify-between gap-6">
              <div
                className="flex items-center gap-4 text-2xl font-medium"
                data-aos="fade-right"
              >
                <img
                  src={CertifiedCompany}
                  alt="Certified Company"
                  loading="lazy"
                />
                <span>Certified Company</span>
              </div>
              <div
                className="flex items-center gap-4 text-2xl font-medium"
                data-aos="fade-left"
              >
                <img src={Award} alt="Award Ceremony" loading="lazy" />
                <span>Award Ceremony</span>
              </div>
            </div>
            <p>We deploy cutting-edge IT infrastructure solutions that support security, scalability, and efficiency. With a focus on digital transformation and seamless cloud integration, we help your business achieve long-term success and operational excellence.  </p>
          </div>
        </div>

        {/* Services Grid Section */}
        <div className="bg-[#F7F7F8] py-0" data-aos="fade-up">
          <div className="bg-white px-6 md:px-20">
            <h2 className="text-3xl md:text-4xl font-bold text-center mt-2">
              What Types Of IT Consulting Services Does Infomagine{" "}
              <span className="text-orange-500">Offer?</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {services.map((service, index) => (
                <div
                  key={service.id || index}
                  className="bg-gray-100 flex flex-col items-center pt-10 pb-10 justify-center rounded-lg relative"
                  data-aos="zoom-in-up"
                  data-aos-delay={`${index * 100}`}
                >
                  <img
                    className="mb-6"
                    src={service.icon}
                    alt={service.title}
                    width={40}
                    height={40}
                    loading="lazy"
                  />
                  <h3 className="text-xl font-semibold mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-center text-sm px-4">
                    {service.description}
                  </p>
                  <div className="absolute bottom-4 right-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold text-sm">
                    {service.id}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Outsourcing Section */}
        <div
          className="flex flex-col md:flex-row items-center justify-center gap-10 px-6 md:px-20"
          data-aos="fade-up"
        >
          <div data-aos="zoom-in-right">
            <img
              className="object-contain"
              src={ProjectOutsourcing}
              alt="Project Outsourcing"
              loading="lazy"
            />
          </div>
          <div
            className="md:w-1/2 flex flex-col justify-center gap-6"
            data-aos="fade-left"
          >
            <h2 className="text-4xl font-bold md:text-start text-center">
              IT Consulting and Project Outsourcing
            </h2>
            <p className="text-gray-500 text-sm">
              Outsource your IT projects like cloud migration...
            </p>
            <ul className="leading-8 list-disc text-gray-500 text-sm pl-4">
              <li>Reduce hiring costs by outsourcing to expert teams.</li>
              <li>
                Access global IT expertise tailored to your business goals.
              </li>
              <li>
                Strategic guidance for better project outcomes and scalability.
              </li>
            </ul>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="px-6 py-12 bg-gray-100 text-center" data-aos="fade-up">
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10">
            Why Choose Infomagine For IT{" "}
            <span className="text-orange-600">Consulting Services?</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6 md:px-20">
            {services2.map((service2, index) => (
              <div
                key={index}
                className="bg-white rounded-lg flex flex-col items-center p-6"
                data-aos="flip-left"
                data-aos-delay={`${index * 100}`}
              >
                <img
                  className="mb-6"
                  src={service2.icon}
                  alt={service2.title}
                  width={40}
                  height={40}
                  loading="lazy"
                />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {service2.title}
                </h3>
                <p className="text-gray-600 text-sm">{service2.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <h2 className="text-center text-4xl font-medium" data-aos="fade-up">
          FAQs about IT Consulting Services
        </h2>
        <div className="grid grid-cols-1 gap-8 px-6 md:px-20">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="flex flex-col border rounded-2xl p-4 gap-4"
              data-aos="fade-up"
              data-aos-delay={`${index * 100}`}
            >
              <div className="flex justify-between items-center gap-8">
                <div className="flex items-center gap-2">
                  <BsQuestionDiamond className="text-3xl text-[#FF3D00]" />
                  <span className="text-lg font-medium">{faq.question}</span>
                </div>
                <div
                  onClick={() => toggleFAQ(index)}
                  className="cursor-pointer"
                >
                  {openStates[index] ? (
                    <MdRemoveCircle className="text-3xl text-[#FF3D00]" />
                  ) : (
                    <MdAddCircle className="text-3xl text-[#FF3D00]" />
                  )}
                </div>
              </div>
              {openStates[index] && (
                <p className="text-gray-600 px-4">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default ItConsulting;
