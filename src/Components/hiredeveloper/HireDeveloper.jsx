import React, { useState } from "react";
import Layout from "../Layout";
import hireDeveloperHeader from "../../assets/hireDeveloperHeader.jpg";
import php from "../../assets/php.png";
import Mobileapp from "../../assets/Mobile app.png";
import PHPdev from "../../assets/PHP dev.png";
import microsoft from "../../assets/microsoft.png";
import mobiledev from "../../assets/mobile dev.png";
import coding from "../../assets/coding.png";
import microsoftdev from "../../assets/microsoft dev.png";
import htmlcssimg from "../../assets/html css.png";
import { Link } from "react-router";
import { Helmet } from "react-helmet";

const features = [
  {
    title: "Expertise and Skillset",
    description:
      "Our committed developers at Infomagine have extensive knowledge of a wide range of technologies and a broad range of talents.",
    icon: "🧠",
  },
  {
    title: "Flexible Hiring & Models",
    description:
      "To fit the needs of your project and your budget, select one of our flexible employment options. From full-time and part-time developers.",
    icon: "📋",
  },
  {
    title: "Security and Compliances &",
    description:
      "We use global standards to protect your project and ensure compliance with legal regulations.",
    icon: "🔒",
  },
  {
    title: "Commitment to On-time Delivery",
    description:
      "We value deadlines and ensure timely, quality project execution.",
    icon: "⏰",
  },
  {
    title: "Time Zone Aligned",
    description:
      "Our developers provide real-time updates and seamless communication across time zones.",
    icon: "🌍",
  },
  {
    title: "Client-Centric Approach",
    description:
      "We listen and adapt to your needs to deliver tailored solutions.",
    icon: "🎯",
  },
];

const HireDeveloper = () => {
  const [activeTab, setActiveTab] = useState("Magento");
  const [activeTab2, setActiveTab2] = useState("Android");
  const [activeTab3, setActiveTab3] = useState("Microsoft");
  const [activeTab4, setActiveTab4] = useState("Website");

  const tabs = [
    {
      id: "Magento",
      label: "Hire Magento Developer",
      content: (
        <ul className="list-disc flex flex-col gap-2 text-sm sm:text-base">
          At Infomagine, Hire Magento Developer & Avail Services:
          <li>Magento Shopping Cart Development.</li>
          <li>Magento eCommerce Solutions.</li>
          <li>Magento Custom Extensions Development.</li>
          <li>Magento ThirdParty Application Integration.</li>
          <li>Payment Gateway Integration.</li>
          <li>Magento Mobile Ecommerce Solution.</li>
        </ul>
      ),
    },
    {
      id: "osCommerce",
      label: "Hire osCommerce Developer",
      content: (
        <ul className="list-disc flex flex-col gap-2 text-sm sm:text-base">
          At Infomagine, Hire osCommerce Developer & Avail Services:
          <li>osCommerce Ecommerce Development.</li>
          <li>osCommerce Theme Design & Development.</li>
          <li>osCommerce Theme Integration.</li>
          <li>Custom osCommerce Development.</li>
          <li>Custom osCommerce Store Development.</li>
          <li>osCommerce CMS Development.</li>
          <li>osCommerce Payment Integration.</li>
        </ul>
      ),
    },
    {
      id: "CodeIgniter",
      label: "Hire CodeIgniter Developer",
      content: (
        <ul className="list-disc flex flex-col gap-2 text-sm sm:text-base">
          At Infomagine, Hire CodeIgniter Developer & Avail Services:
          <li>MVC architecture development.</li>
          <li>System Authentication, Verification and Authorization.</li>
          <li>Theme Designing.</li>
          <li>AJAX enabled Widgets.</li>
          <li>Third party code integration.</li>
          <li>Error handling and logging.</li>
        </ul>
      ),
    },
  ];

  const tabs2 = [
    {
      id: "Android",
      label: "Hire Android Developer",
      content: (
        <ul className="list-disc flex flex-col gap-2 text-sm sm:text-base">
          At Infomagine, Hire Android Developer & Avail Services:
          <li>Android Gaming Applications.</li>
          <li>Android Enterprise Application.</li>
          <li>Android Web Application Development.</li>
          <li>Android Wi-Fi/GPS/Bluetooth Application.</li>
          <li>Android Business/e-Commerce Apps.</li>
          <li>Android QR Code Reading Application.</li>
          <li>Android Utility Applications.</li>
          <li>Android mCommerce Applications.</li>
        </ul>
      ),
    },
    {
      id: "IOS",
      label: "Hire IOS Developer",
      content: (
        <ul className="list-disc flex flex-col gap-2 text-sm sm:text-base">
          At Infomagine, Hire IOS Developer & Avail Services:
          <li>IOS Gaming Applications.</li>
          <li>IOS Enterprise Application.</li>
          <li>IOS Web Application Development.</li>
          <li>IOS Wi-Fi/GPS/Bluetooth Application.</li>
          <li>IOS Business/e-Commerce Apps.</li>
          <li>IOS QR Code Reading Application.</li>
          <li>IOS Utility Applications.</li>
          <li>IOS mCommerce Applications.</li>
        </ul>
      ),
    },
  ];

  const tabs3 = [
    {
      id: "Microsoft",
      label: "Hire ASP.Net developers",
      content: (
        <ul className="list-disc flex flex-col gap-2 text-sm sm:text-base">
          <li>Developing Internet & Intranet portals.</li>
          <li>CMS, HRM, GMTS (Goods Movement Tracking System).</li>
          <li>E-Commerce web development.</li>
          <li>Learning Management System (LMS).</li>
          <li>Web Services, Data Binding, Caching, JIT.</li>
        </ul>
      ),
    },
  ];

  const tabs4 = [
    {
      id: "Website",
      label: "Hire Website Designers",
      content: (
        <p className="text-sm sm:text-base">
          At Infomagine, we design websites that are not only informative and
          elucidative but also attractive and soothing for users to look at. We
          know that a website should be very attractive so that your customer
          loves to visit it again and again. A good-looking website is the key
          for success for any business. It represents the business authority and
          ingenuity amongst the stiff competition.
        </p>
      ),
    },
  ];

  return (
    <Layout>
      <Helmet>
        <title>
          Hire Dedicated Developers for Web & Mobile | Infomagine Softwares
        </title>
        <meta
          name="description"
          content="Looking to hire expert developers? Infomagine Softwares offers dedicated web and mobile developers to build secure, scalable solutions. Hire now!"
        />
        <link rel="canonical" href="https://infomagine.in/hire-developer" />
        {/* Open Graph Tags */}
        <meta
          property="og:title"
          content="Hire Developer | Infomagine Softwares"
        />
        <meta
          property="og:description"
          content="Hire top-rated developers from Infomagine Softwares to work on your custom software, mobile apps, or digital solutions."
        />
        <meta
          property="og:image"
          content="https://infomagine.in/assets/infomagine%20logo-BsvjEvw5.png"
        />
        <meta
          property="og:url"
          content="https://infomagine.in/hire-developer"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Infomagine Softwares" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:country" content="US, UK, UAE, AU, NZ" />
        {/* Schema Markup */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Hire Developer",
            provider: {
              "@type": "Organization",
              name: "Infomagine Softwares",
              url: "https://infomagine.in/hire-developer",
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
            areaServed: ["US", "UK", "UAE", "AU", "NZ"],
            description:
              "Hire experienced developers from Infomagine Softwares to build custom software, mobile applications, and digital solutions.",
            url: "https://infomagine.in/hire-developer",
          })}
        </script>
      </Helmet>
      <div className="flex flex-col gap-8 sm:gap-12 md:gap-16 lg:gap-24">
        {/* Header Section */}
        <div className="w-full relative h-[35rem]" data-aos="fade-down">
          <img
            className="w-full h-full object-cover"
            src={hireDeveloperHeader}
            alt=""
          />
          <div className="absolute text-white top-[50%] left-[10%]">
            <p className="text-5xl font-bold">Hire Developer</p>
            <div className="flex gap-2">
              <Link to={"/"}>Home</Link>
              <p>&gt;</p>
              <p>Hire Developer</p>
            </div>
          </div>
        </div>
        {/* Hire a Developer Section */}
        <div className="text-center px-4 sm:px-6 md:px-8 lg:px-12">
          <h3
            data-aos="fade-up"
            className="text-xs sm:text-sm text-orange-600 font-semibold tracking-wide uppercase mb-2"
          >
            Hire a Developer
          </h3>
          <h2
            data-aos="fade-up"
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4"
          >
            Hire Dedicated <span className="text-orange-600">Developers</span>
          </h2>
          <p
            data-aos="fade-up"
            className="text-gray-600 text-sm sm:text-base max-w-3xl mx-auto mb-8 sm:mb-12"
          >
            Infomagine is a platform connecting you with top-tier developers,
            engineers, programmers, coders, architects, and consultants. Harness
            the expertise of our professionals to build reliable, scalable, and
            high-performance software solutions that engage users. Employ
            Infomagine skilled developers, who all have a great deal of
            practical expertise in developing software while strictly following
            to DevOps and Agile methodologies.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 px-4 sm:px-8 md:px-12 lg:px-0">
            {[
              {
                img: php,
                title: "Hire PHP Developer",
                desc: "Infomagine offers customized solutions based on years of experience working with open source CMS platforms.",
                aos: "flip-right",
              },
              {
                img: Mobileapp,
                title: "Hire Mobile Developer",
                desc: "Around 75% of the world's population uses mobiles, and there are around 6 billion active mobile subscriptions.",
                aos: "flip-left",
              },
              {
                img: microsoft,
                title: "Hire Microsoft Developer",
                desc: "Microsoft technologies are one of the most preferred choice for developing enterprise level business applications.",
                aos: "flip-right",
              },
              {
                img: coding,
                title: "Hire HTML 5 / CSS Designers",
                desc: "One word that describe our website designers is 'Awesome!!!'.",
                aos: "flip-left",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                data-aos={item.aos}
                className="bg-white flex flex-col items-center justify-center shadow-md p-4 sm:p-6 rounded-lg"
              >
                <div className="mb-4">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="mx-auto h-10 sm:h-12"
                  />
                </div>
                <h4 className="text-base sm:text-lg font-semibold mb-2 text-center">
                  {item.title}
                </h4>
                <p className="text-gray-600 text-xs sm:text-sm text-center">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* PHP Developer Section */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 sm:gap-8 md:gap-12 lg:gap-20 px-4 sm:px-6 md:px-8">
          <div data-aos="fade-right" className="w-full md:w-1/2">
            <img
              className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] object-contain mx-auto"
              src={PHPdev}
              alt="PHP Developer"
            />
          </div>
          <div
            data-aos="fade-left"
            className="w-full md:w-1/2 flex flex-col gap-4 sm:gap-6"
          >
            <hr className="w-16 border-2 border-[#ff3c00]" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl md:text-start text-center font-bold">
              Hire Open Source PHP Developer
            </h2>
            <p className="text-sm md:text-start text-center">
              Infomagine has expertise and experience of several years of
              working on open source CMS. Through our extensive exposure in
              open-source development, we have offered highly leveraging
              solutions to our clients. Our dedicated developers also offer
              customized solutions to suit your needs by creating templates,
              adding custom modules, or changing the product functionality. Our
              expert resources are capable of doing any type of customization
              and modification job in these scripts to suit your needs
              perfectly. At Infomagine, we help you get the best worth from the
              open-source technologies by hiring experts in WordPress, Magento,
              Cake PHP, CodeIgniter, and other open-source frameworks.
            </p>
            <div className="border p-4 sm:p-6 md:p-8 border-gray-400 rounded-lg">
              <div className="flex flex-col sm:flex-row border-b">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`py-2 px-4 text-xs sm:text-sm font-medium focus:outline-none ${
                      activeTab === tab.id
                        ? "border-b-2 text-[#ff3c00]"
                        : "text-gray-500 hover:text-[#ff3c00]"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
              <div className="mt-4 text-gray-700">
                {tabs.find((tab) => tab.id === activeTab)?.content}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Developer Section */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 sm:gap-8 md:gap-12 lg:gap-20 px-4 sm:px-6 md:px-8">
          <div data-aos="fade-right" className="w-full md:w-1/2">
            <img
              className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] object-contain mx-auto"
              src={mobiledev}
              alt="Mobile Developer"
            />
          </div>
          <div
            data-aos="fade-left"
            className="w-full md:w-1/2 flex flex-col gap-4 sm:gap-6"
          >
            <hr className="w-16 border-2 border-[#ff3c00]" />
            <h2 className="text-2xl md:text-start text-center sm:text-3xl md:text-4xl font-bold">
              Hire Mobile Developer
            </h2>
            <p className="text-sm md:text-start text-center sm:text-base">
              Around 75% of the world’s population uses mobiles, with around 6
              billion active mobile subscriptions worldwide. For companies,
              having their brand on these devices is an easy way to engage
              customers and gain brand loyalty. With the presence of different
              platforms such as iOS, Android, BlackBerry, and Windows, it’s a
              challenging task to find mobile app developers whose skills extend
              across multiple platforms. Infomagine has a strong team of mobile
              programmers who have the qualifications and experience to develop
              apps across several platforms, including iOS, Android, BlackBerry,
              and Windows.
            </p>
            <div className="border p-4 sm:p-6 md:p-8 border-gray-400 rounded-lg">
              <div className="flex flex-col sm:flex-row border-b">
                {tabs2.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab2(tab.id)}
                    className={`py-2 px-4 text-xs sm:text-sm font-medium focus:outline-none ${
                      activeTab2 === tab.id
                        ? "border-b-2 text-[#ff3c00]"
                        : "text-gray-500 hover:text-[#ff3c00]"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
              <div className="mt-4 text-gray-700">
                {tabs2.find((tab) => tab.id === activeTab2)?.content}
              </div>
            </div>
          </div>
        </div>

        {/* Microsoft Developer Section */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 sm:gap-8 md:gap-12 lg:gap-20 px-4 sm:px-6 md:px-8">
          <div data-aos="fade-right" className="w-full md:w-1/2">
            <img
              className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] object-contain mx-auto"
              src={microsoftdev}
              alt="Microsoft Developer"
            />
          </div>
          <div
            data-aos="fade-left"
            className="w-full md:w-1/2 flex flex-col gap-4 sm:gap-6"
          >
            <hr className="w-16 border-2 border-[#ff3c00]" />
            <h2
              className="

text-2xl sm:text-3xl md:text-start text-center md:text-4xl font-bold"
            >
              Hire Microsoft Developer
            </h2>
            <p className="text-sm md:text-start text-center sm:text-base">
              Microsoft technologies are one of the most preferred choices for
              developing enterprise-level business applications. At Infomagine,
              we have highly skilled and certified developers. In past several
              years, we have worked on several Dot Net & SharePoint web portals,
              including ERP, CRM, HRM, CMS Project Management Systems &
              E-commerce applications. Our Microsoft Dot Net team has grown to a
              level where developing Internet or Intranet portals has become
              part of their daily life.
            </p>
            <div className="border p-4 sm:p-6 md:p-8 border-gray-400 rounded-lg">
              <div className="flex flex-col sm:flex-row border-b">
                {tabs3.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab3(tab.id)}
                    className={`py-2 px-4 text-xs sm:text-sm font-medium focus:outline-none ${
                      activeTab3 === tab.id
                        ? "border-b-2 text-[#ff3c00]"
                        : "text-gray-500 hover:text-[#ff3c00]"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
              <div className="mt-4 text-gray-700">
                {tabs3.find((tab) => tab.id === activeTab3)?.content}
              </div>
            </div>
          </div>
        </div>

        {/* HTML5/CSS Designers Section */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 sm:gap-8 md:gap-12 lg:gap-20 px-4 sm:px-6 md:px-8">
          <div data-aos="fade-right" className="w-full md:w-1/2">
            <img
              className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] object-contain mx-auto"
              src={htmlcssimg}
              alt="HTML5/CSS Designers"
            />
          </div>
          <div
            data-aos="fade-left"
            className="w-full md:w-1/2 flex flex-col gap-4 sm:gap-6"
          >
            <hr className="w-16 border-2 border-[#ff3c00]" />
            <h2 className="text-2xl sm:text-3xl md:text-start text-center md:text-4xl font-bold">
              Hire HTML 5 / CSS Designers
            </h2>
            <p className="text-sm md:text-start text-center sm:text-base">
              One word that describes our website designers is “Awesome!!!”.
              Website designing is an art that basically involves creating
              layouts, responsive websites, and web pages using HTML5,
              JavaScript, CSS3, jQuery, and several other web development
              technologies such as PHP web development and Dot Net Development.
            </p>
            <div className="border p-4 sm:p-6 md:p-8 border-gray-400 rounded-lg">
              <div className="flex flex-col sm:flex-row border-b">
                {tabs4.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab4(tab.id)} // Fixed to setActiveTab4
                    className={`py-2 px-4 text-xs sm:text-sm font-medium focus:outline-none ${
                      activeTab4 === tab.id
                        ? "border-b-2 text-[#ff3c00]"
                        : "text-gray-500 hover:text-[#ff3c00]"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
              <div className="mt-4 text-gray-700">
                {tabs4.find((tab) => tab.id === activeTab4)?.content}
              </div>
            </div>
          </div>
        </div>

        {/* Why Hire Section */}
        <div className="bg-gray-100 py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8">
          <div className="max-w-5xl mx-auto">
            <h2
              data-aos="fade-down"
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 sm:mb-8"
            >
              Why Hire Dedicated Developers <br />
              From <span className="text-[#FF3C00]">Infomagine</span>
            </h2>
            <div
              data-aos="flip-up"
              className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 md:gap-10 mt-8 sm:mt-12"
            >
              {features.map((item, idx) => (
                <div key={idx} className="flex items-start space-x-4">
                  <div className="text-xl sm:text-2xl">{item.icon}</div>
                  <div>
                    <h3 className="font-semibold text-lg sm:text-xl md:text-2xl">
                      {item.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-700 mt-1">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HireDeveloper;
