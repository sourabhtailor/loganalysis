import React from "react";
import Layout from "../Layout";
import itStaffingHEADER from "../../assets/itStaffingHEADER.jpg";
import itStffingaboutus from "../../assets/itStffingabout-us.jpg";
import team from "../../assets/team.png";
import { Helmet } from "react-helmet";
import experience from "../../assets/experience.png";
import resourcemanagement from "../../assets/resource management.png";
import staff from "../../assets/staff.png";
import { Link } from "react-router";
import {
  Landmark,
  HeartPulse,
  MousePointerClick,
  Monitor,
  UserRoundSearch,
  Factory,
  MessageCircleHeart,
  GraduationCap,
  SquareChartGantt,
  IndianRupee,
  Bolt,
} from "lucide-react";

const industries = [
  { icon: Landmark, name: "Finance & Banking" },
  { icon: HeartPulse, name: "Healthcare" },
  { icon: MousePointerClick, name: "Telecommunications" },
  { icon: Monitor, name: "Government" },
  { icon: Factory, name: "Manufacturing" },
  { icon: GraduationCap, name: "Education" },
];

const staffing = [
  { icon: UserRoundSearch, name: "No Recruitment Hassles" },
  { icon: MessageCircleHeart, name: "Access to Vetted Talent" },
  { icon: MessageCircleHeart, name: "Access to Vetted Talent" },
  { icon: SquareChartGantt, name: "Aggressive Deadlines" },
  { icon: IndianRupee, name: "Lower Operational Costs" },
  { icon: Bolt, name: "Full Control" },
];

const ItStaffing = () => {
  return (
    <Layout>
      <Helmet>
        <title> IT Staffing Services| IT Staffing Company | Infomagine</title>
        <meta
          name="description"
          content="One of the leading IT employment companies, Infomagine, connects businesses with skilled IT professionals. To meet your technology needs and drive success, we offer customized staffing solutions."
        />
        <link rel="canonical" href="https://infomagine.in/it-staffing"></link>
      </Helmet>

      <div className="flex flex-col mb-40 gap-20">
        {/* Header Section */}
        <div className="w-full h-[40rem] relative">
          <img
            className="w-full h-full object-cover"
            src={itStaffingHEADER}
            alt=""
          />
          <div
            className="absolute top-1/2 left-4 sm:left-10 transform -translate-y-1/2 text-white flex flex-col gap-4 w-[90%] sm:w-3/4 lg:w-1/2"
            data-aos="fade-right"
          >
            <h1 className="text-2xl sm:text-4xl font-bold">
              IT Staffing Services & Company
            </h1>
            <p className="text-sm sm:text-base">
              Infomagine connects businesses with top IT talent to drive
              innovation and success. Our expert staffing solutions are designed
              to precision and efficiency meet your unique technology needs.{" "}
            </p>
            <Link
              to="/contact-us"
              className="bg-[#FF5722] px-4 py-2 text-sm sm:text-base w-fit rounded-md"
            >
              Let's Talk
            </Link>
          </div>
        </div>
        {/* About Section */}
        <div
          className="flex flex-col md:flex-row items-center justify-center gap-10 px-4 md:px-12"
          data-aos="fade-up"
        >
          <div data-aos="zoom-in" className="flex justify-center">
            <img
              className="object-contain w-full max-w-xs md:max-w-md"
              src={itStffingaboutus}
              alt="About Us"
            />
          </div>
          <div
            className="flex flex-col justify-center gap-6 w-full md:w-1/2"
            data-aos="fade-left"
          >
            <h2 className="text-3xl md:text-start text-center md:text-4xl font-bold">
              Tailored IT Staffing Services for Cutting-Edge Technology
              Companies
            </h2>
            <hr className="w-20 border-2 border-[#FF5722]" />
            <p className="text-sm md:text-start text-center">
              With over 10 years of specialized experience, Infomagine Services
              has established itself as a leading provider of IT staffing
              solutions...
            </p>
          </div>
        </div>

        {/* Why Work With Us */}
        <div className="text-center px-4 md:px-12" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Work <span className="text-orange-600">with Us?</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[team, experience, resourcemanagement, staff].map((icon, i) => (
              <div
                key={i}
                className="bg-white flex flex-col items-center text-center justify-center border border-gray-300 p-6 rounded-lg"
                data-aos="flip-left"
                data-aos-delay={i * 100}
              >
                <div className="mb-4">
                  <img src={icon} alt="Icon" className="mx-auto h-12" />
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  {
                    [
                      "Dedicated Team",
                      "Experience",
                      "End-to-End Resource Management",
                      "Reduce Staffing Shortage",
                    ][i]
                  }
                </h3>
                <p className="text-gray-600 text-sm">
                  {
                    [
                      "Every client is assigned a dedicated team...",
                      "With years of experience in the field...",
                      "We manage all aspects of resource management...",
                      "Our IT staffing services swiftly source and place...",
                    ][i]
                  }
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Industries Section */}
        <section className="bg-gray-50 py-12 px-4 md:px-12" data-aos="fade-up">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
            <div className="flex justify-center" data-aos="zoom-in">
              <img
                src="https://wp.ditsolution.net/itsoft/wp-content/uploads/2020/10/main-pic3.png"
                alt="Industries illustration"
                className="w-full max-w-sm"
              />
            </div>
            <div data-aos="fade-left">
              <h2 className="text-3xl md:text-start text-center md:text-4xl font-bold mb-6 text-gray-900">
                Industries We Serve
              </h2>
              <hr className="border-2 border-orange-600 w-1/4 mb-6" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {industries.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-5 bg-white rounded-xl shadow hover:shadow-lg transition"
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    <div className="bg-orange-600 text-white p-3 rounded-full">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <span className="text-gray-800 font-semibold">
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="bg-gray-50 py-12 px-4 md:px-12" data-aos="fade-up">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
            <div data-aos="fade-right">
              <h2 className="text-3xl md:text-4xl md:text-start text-center font-bold mb-6 text-gray-900">
                Benefits of IT Staffing Services
              </h2>
              <hr className="border-2 border-orange-600 w-1/4 mb-6" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {staffing.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-5 bg-white rounded-xl shadow hover:shadow-lg transition"
                    data-aos="zoom-in"
                    data-aos-delay={index * 100}
                  >
                    <div className="bg-orange-600 text-white p-3 rounded-full">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <span className="text-gray-800 font-semibold">
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center" data-aos="zoom-in-left">
              <img
                src="https://wp.ditsolution.net/itsoft/wp-content/uploads/2020/10/web-design-img.png"
                alt="Benefits illustration"
                className="w-full max-w-sm"
              />
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default ItStaffing;
