import React, { useState } from "react";
import Layout from "../Layout";
import webHeader1 from "../../assets/webHeader1.jpg";
import { Link } from "react-router";
import problemsolving from "../../assets/problem solving.png";
import workflow from "../../assets/workflow.png";
import prototype from "../../assets/prototype.png";
import validation from "../../assets/validation.png";
import testing from "../../assets/testing.png";
import { MdAddCircle, MdRemoveCircle } from "react-icons/md";
import host from "../../assets/host.png";

import { BsQuestionDiamond } from "react-icons/bs";
import { Helmet } from "react-helmet";

const appTypes = [
  {
    title: "Custom Web Applications",
    description:
      "Tailored for your business logic, our custom apps solve unique problems with specialized functionality and future-ready infrastructure.",
  },
  {
    title: "eCommerce Web Solutions",
    description:
      "Create scalable B2B and B2C platforms with seamless checkout, live chat, advanced product filters, and third-party integrations to boost online sales.",
  },
  {
    title: "Enterprise & Public Web Portals",
    description:
      "Centralized platforms for internal operations, education, healthcare, or public services – with personalized dashboards and content access.",
  },
  {
    title: "Business & Corporate Websites",
    description:
      "Enhance your digital brand with professionally designed websites that drive traffic, convert visitors, and establish trust online.",
  },
];

const features = [
  {
    title: "Customized Solutions",
    description:
      "Tailored web app development to fit your exact business goals and workflows.",
    icon: "🛠️",
  },
  {
    title: "Expert Developers",
    description:
      "Skilled professionals experienced in modern frameworks and cross-platform development.",
    icon: "👨‍💻",
  },
  {
    title: "Scalable and Flexible Solutions",
    description:
      "Our solutions adapt as your business grows – no technical debt, only progress.",
    icon: "📈",
  },
  {
    title: "Cost-Effective Delivery",
    description:
      "High-quality web development at competitive rates with flexible pricing models.",
    icon: "💰",
  },
  {
    title: "User-Centered Design",
    description:
      "Focused on creating intuitive, engaging interfaces that retain users.",
    icon: "🧑‍🎨",
  },
  {
    title: "Cross-Device Compatibility",
    description:
      "Web apps that function seamlessly across desktops, tablets, and mobile devices.",
    icon: "📱",
  },
  {
    title: "On-Time Delivery",
    description: "We stick to your timelines without compromising quality.",
    icon: "📅",
  },
  {
    title: "Proven Results",
    description:
      "Our client portfolio showcases successful web apps across industries like eCommerce, tech, education, and healthcare.",
    icon: "🏆",
  },
];

const services = [
  {
    title: "Custom Web App Development",
    description:
      "Custom web app development delivers tailored solutions that go beyond expectations—designed for scalability, seamless usability, and cross-platform compatibility. From initial concept to final deployment, our experts collaborate with you to build applications that align precisely with your business goals, drive meaningful results, and deliver lasting value on your investment.",
  },
  {
    title: "eCommerce Web Development",
    description:
      "Transform your online presence into a dynamic marketplace with eCommerce web application development. We build eCommerce platforms that are robust, secure, and user-friendly. Our team has experience creating eCommerce portals using third-party platforms like Shopify and Magento, ensuring the solutions are scalable, secure, and ready for growth.",
  },
  {
    title: "Dynamic Web Development",
    description:
      "Build dynamic web applications that generate real-time pages and data based on server-side logic, delivering personalized and interactive user experiences. Our skilled team handles complex requirements with ease, crafting tailored solutions for seamless, intuitive, and engaging digital journeys, ensuring optimal performance across all devices.",
  },
  {
    title: "Content-Driven Web Applications",
    description:
      "We craft content-driven web applications using flexible CMS platforms like WordPress. From simple websites to feature-rich platforms, we ensure fast performance, secure architecture, and smooth integrations. Whether building from scratch or upgrading, our solutions are tailored to your specific goals and designed to scale as your business grows.",
  },
  {
    title: "Cloud-Based Applications",
    description:
      "Build powerful cloud-based applications designed for flexibility, performance, and growth. Our team leverages deep expertise in AWS and Azure to develop secure, scalable solutions tailored to your business needs. From new cloud-native apps to seamless cloud migration strategies, we ensure reliability, cost-efficiency, and high availability across every deployment.",
  },
  {
    title: "Backend Web Development",
    description:
      "Our backend web developers leverage microservices architecture to build highly scalable and maintainable systems. By utilizing cloud platforms like AWS and Azure for hosting, and integrating both SQL and NoSQL databases, we ensure reliable data storage and seamless access. This modern approach allows us to deliver flexible, high-performance backend solutions tailored to evolving business needs.",
  },
];

const faqs = [
  {
    question: "Do you offer SaaS-based web application development?",
    answer:
      "Yes, we specialize in building SaaS products with subscription models, multi-tenancy, and scalable cloud hosting.",
  },

  {
    question: "Can you migrate legacy apps to modern web platforms?",
    answer:
      "Absolutely. We modernize legacy systems using React, Node.js, or Laravel for security, performance, and future-proofing.",
  },
  {
    question: "What is web application development?",
    answer:
      "The process of creating software that runs on web servers and is accessible through browsers is known as web application development. This covers every aspect, from back-end programming and deployment to front-end design.",
  },
  {
    question: "How are web applications different from mobile apps?",
    answer:
      "Mobile apps must be downloaded and installed on a device, whereas web apps operate through a web browser and don't need to be installed. While mobile apps provide tighter interaction with device functions, web apps are usually easier to use.",
  },
  {
    question: "What are the benefits of web applications?",
    answer:
      "Because web applications operate in a browser and are accessible from a variety of devices, they provide advantages including cross-platform compatibility, simplicity of updating, and cost-effectiveness.",
  },
  {
    question: "What technologies are used in web application development?",
    answer:
      "Languages like HTML, CSS, and JavaScript are frequently used in web application development, along with server-side technologies like PHP, Python, Ruby, and frameworks like React, Angular, and Vue.",
  },

  {
    question: "Do I need a web application for my business?",
    answer:
      "A web application might be an excellent option for your company if you need to provide users with online access, synchronize data in real time, or manage a high volume of interactions. A skilled web development company can evaluate your requirements and suggest the best course of action.",
  },

  
];

const WebApplication = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

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
          Web Application Development Services | USA, UK, UAE | Infomagine
        </title>
        <meta
          name="description"
          content="Infomagine offers scalable, custom web application development services for global businesses in the USA, UK, UAE, Germany, France & more. Let’s build your vision!"
        />
        <link
          rel="canonical"
          href="https://infomagine.in/web-applications"
        ></link>

        {/* Open Graph Meta Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="Infomagine Softwares" />
        <meta
          property="og:title"
          content="Web Application Development Services | USA, UK, UAE | Infomagine"
        />
        <meta
          property="og:description"
          content="Custom web application development company serving global clients in USA, UK, UAE, Germany, France, and beyond. Build scalable digital products with us."
        />
        <meta
          property="og:url"
          content="https://infomagine.in/web-applications"
        />
        <meta
          property="og:image"
          content="https://infomagine.in/assets/og/web-app-banner.jpg"
        />
        <meta
          property="og:country-name"
          content="USA, UK, UAE, Australia, Germany, France, Italy"
        />

        {/* Schema Markup for Web Application Development */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Infomagine",

            serviceType: "Web Application Development",
            provider: {
              "@type": "Organization",
              name: "Infomagine Softwares",
              url: "https://infomagine.in/web-applications",
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
          })}
        </script>
      </Helmet>

      <div className="flex flex-col gap-20  mb-20">
        {/* Hero Section */}
        <div className="w-full h-[40rem] relative">
          <img className="w-full h-full object-cover" src={webHeader1} alt="" />
          <div
            className="absolute top-1/2 left-4 sm:left-10 transform -translate-y-1/2 text-white flex flex-col gap-4 w-[90%] sm:w-3/4 lg:w-1/2"
            data-aos="fade-right"
          >
            <h1 className="text-2xl sm:text-4xl font-bold">
              Top Web Application Development Services
            </h1>
            <p className="text-sm sm:text-base">
              Infomagine is a globally trusted web application development company specializing in secure, scalable, and high-performance web apps for USA, UK, Germany, Italy, UAE, Australia, and more. Whether you're a startup or an enterprise, our web application development services streamline processes, boost user engagement, and accelerate digital growth.
            </p>
            <Link
              to="/contact-us"
              className="bg-[#FF5722] px-4 py-2 text-sm sm:text-base w-fit rounded-md"
            >
              Let's Talk
            </Link>
          </div>
        </div>

        {/* Services Section */}
        <section className="py-12" data-aos="fade-up">
          <div className="text-center mb-10 px-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold max-w-3xl mx-auto">
              End-to-End Web Application Development Services
            </h2>
          </div>
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto px-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-[#F7F7F7] p-6 md:p-8 text-center hover:shadow-lg transition duration-300"
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose Us Section */}
        <div className="max-w-6xl mx-auto px-4" data-aos="fade-up">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10">
            Why Choose Our Web Application <br />
            Development <span className="text-[#FF3C00]">Services</span>
          </h2>
          <div className="grid gap-10 md:grid-cols-2">
            {features.map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-4"
                data-aos="fade-right"
                data-aos-delay={idx * 100}
              >
                <div className="text-2xl">{item.icon}</div>
                <div>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-sm text-gray-700 mt-1">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Development Process Section */}
        <div className="px-4 sm:px-6 lg:px-20" data-aos="fade-up">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10">
            Our Web Application Development Process
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              problemsolving,
              workflow,
              prototype,
              validation,
              testing,
              host,
            ].map((img, idx) => (
              <div
                key={idx}
                className="text-center flex flex-col items-center"
                data-aos="flip-up"
                data-aos-delay={idx * 100}
              >
                <div className="mb-4 bg-white shadow-md hover:border-4 border-[#FF5722] rounded-full p-4">
                  <img src={img} alt="Step" />
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  {
                    [
                      "Define the Problem",
                      "Plan the Workflow",
                      "Wireframing",
                      "User Feedback & Validation",
                      "Testing & QA",
                      "Hosting & Deployment",
                    ][idx]
                  }
                </h3>
                <p className="text-sm text-gray-600">
                  {
                    [
                      "We begin by identifying the exact problem your web application will solve. This ensures your project has clear direction and purpose.",
                      "We map out user flows, business logic, and app structure, ensuring that the application supports efficient processes and great UX.",
                      "We design wireframes and interactive prototypes that help visualize the product early and align stakeholders before development begins.",
                      "We test designs with real users, iterate quickly, and ensure the product meets both business goals and user expectations.",
                      "We perform automated and manual testing to ensure your application is secure, scalable, and bug-free before launch.",
                      "We deploy your web app using CI/CD pipelines on secure cloud infrastructure, ensuring reliability and performance at scale.",
                    ][idx]
                  }
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* App Types Section */}
        <div className="px-4 sm:px-6 lg:px-20" data-aos="fade-up">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10">
            Types of Web Applications We Develop
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {appTypes.map((app, index) => (
              <div
                key={index}
                className="p-6 bg-[#F4F7FC] border-b-4 border-gray-300 text-center"
                data-aos="zoom-in-up"
                data-aos-delay={index * 100}
              >
                <h3 className="text-lg font-semibold mb-2">{app.title}</h3>
                <p className="text-sm text-gray-600">{app.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="px-4 sm:px-6 lg:px-40" data-aos="fade-up">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10">
            FAQs about Web Applications
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border rounded-xl p-4"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <BsQuestionDiamond className="text-xl text-[#FF3D00]" />
                    <span className="font-medium text-sm sm:text-base">
                      {faq.question}
                    </span>
                  </div>
                  <button onClick={() => toggleFAQ(index)}>
                    {openStates[index] ? (
                      <MdRemoveCircle className="text-xl text-[#FF3D00]" />
                    ) : (
                      <MdAddCircle className="text-xl text-[#FF3D00]" />
                    )}
                  </button>
                </div>
                {openStates[index] && (
                  <p className="mt-2 text-sm text-gray-600">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default WebApplication;
