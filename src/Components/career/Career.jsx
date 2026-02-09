import React, { useEffect } from "react";
import Layout from "../Layout";
import careerimg from "../../assets/careerimg.jpg";
import collab from "../../assets/collab.png";
import learning from "../../assets/learning.png";
import cuttingedgeproject from "../../assets/cutting edge project.png";
import carrerdevelopment from "../../assets/carrer development.png";
import developer from "../../assets/developer.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Career = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <Layout>
      <Helmet>
        <title>Infomagine Career and Culture</title>
        <meta
          name="description"
          content="Infomagine Softwares offers dynamic career opportunities for passionate and driven software professionals to grow, learn, and excel in a fast-paced environment."
        />
        <link rel="canonical" href="https://infomagine.in/career" />
        <meta property="og:title" content="Career | Infomagine Softwares" />
        <meta
          property="og:description"
          content="Join Infomagine Softwares and be a part of an innovative and growth-driven team. Check out our open positions and apply now!"
        />
        <meta
          property="og:image"
          content="https://infomagine.in/assets/infomagine%20logo-BsvjEvw5.png"
        />
        <meta property="og:url" content="https://infomagine.in/career" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Infomagine Softwares" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:country" content="US, UK, UAE, AU, NZ" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "JobPosting",
            title: "Careers at Infomagine Softwares",
            description:
              "Explore career opportunities at Infomagine Softwares. We are hiring talented professionals to join our growing team.",
            url: "https://infomagine.in/career",
            identifier: {
              "@type": "PropertyValue",
              name: "Infomagine Softwares",
              value: "job-id",
            },
            hiringOrganization: {
              "@type": "Organization",
              name: "Infomagine Softwares",
              sameAs: "https://infomagine.in",
              logo: "https://infomagine.in/logo.png",
            },
            workHours: "Full-time",
            datePosted: "2025-05-15",
            employmentType: "FULL_TIME",
            jobLocation: {
              "@type": "Place",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Address line",
                addressLocality: "City",
                addressRegion: "State",
                postalCode: "12345",
                addressCountry: "IN",
              },
            },
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <div className="w-full relative" data-aos="fade-in">
        <img
          className="w-full h-[400px] object-cover"
          src={careerimg}
          alt="Career Banner"
        />
        <div className="absolute top-1/2 left-10 transform -translate-y-1/2 text-white">
          <h1 className="text-5xl font-bold mb-2" data-aos="fade-up">
            Career
          </h1>
          <div
            className="flex gap-2 text-lg"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <Link to="/">Home</Link>
            <span>&gt;</span>
            <span>Career</span>
          </div>
        </div>
      </div>

      {/* Main Section */}
      <div className="flex flex-col gap-20 px-4 lg:px-40 my-16">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Left Section */}
          <div
            className="lg:w-1/2 md:text-start text-center"
            data-aos="fade-right"
          >
            <p className="text-orange-600 font-semibold uppercase mb-2 md:text-start text-center">
              // Client Testimonial
            </p>
            <h2 className="text-4xl font-bold text-gray-900 leading-tight mb-4 md:text-start text-center">
              Reasons You Should <br /> Join Our Team
            </h2>
            <p className="text-gray-600 text-lg mb-6 md:text-start text-center">
              At Infomagine, we are dedicated to creating a workplace that
              fosters creativity, growth, and innovation...
            </p>
            <Link
              to="/contact-us"
              className="bg-orange-600 text-white px-6 py-3 w-fit rounded-full hover:bg-white hover:text-black hover:border transition"
            >
              JOIN OUR TEAM →
            </Link>
          </div>

          {/* Right Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:w-1/2">
            {[
              { icon: collab, title: "Collaborative Innovation" },
              { icon: learning, title: "Continuous Learning" },
              { icon: cuttingedgeproject, title: "Cutting-Edge Projects" },
              { icon: carrerdevelopment, title: "Career Development" },
            ].map((item, index) => (
              <div
                key={index}
                className="cursor-pointer rounded-lg p-8 shadow-sm items-center flex flex-col justify-center border border-gray-300 hover:shadow-xl transition text-center"
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                <img
                  width={50}
                  src={item.icon}
                  alt={item.title}
                  className="mb-4"
                />
                <h3 className="text-lg font-semibold text-gray-800">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </div>

        {/* Job Section */}
        <div
          className="flex flex-col items-center bg-[#F5F7F7] shadow-sm p-8 gap-6 justify-center"
          data-aos="fade-up"
        >
          {[
            {
              title: "React Native Developer",
              description:
                "We are looking for React Native Developer with minimum of 0-3 years of experience.",
            },
            {
              title: "Android Application Developer",
              description:
                "We are looking for Android Application Developer with minimum of 0-4 years of experience.",
            },
          ].map((job, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-center bg-white p-6 md:p-12 rounded-lg gap-6 w-full"
              data-aos="fade-left"
              data-aos-delay={index * 200}
            >
              <img width={60} src={developer} alt="Developer Icon" />
              <div className="flex flex-col md:flex-row md:justify-between w-full gap-6">
                <div className="flex flex-col">
                  <span className="text-2xl font-medium">{job.title}</span>
                  <span>{job.description}</span>
                </div>
                <button className="bg-orange-600 text-white px-6 py-3 rounded-full hover:bg-white hover:text-black hover:border transition">
                  APPLY THIS JOB →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Career;
