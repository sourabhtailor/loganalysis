import React from "react";
import Layout from "../Layout";
import headerimg from "../../assets/headerimg.png";
import logo from "../../assets/invitehivelogo.png";
import teamicon from "../../assets/teamicon.png";
import usericon from "../../assets/usericon.png";
import timericon from "../../assets/timericon.png";
import banner from "../../assets/banner.png";
import backgroundImage from "../../assets/headerbg.png";
import projectoverviewimg from "../../assets/projectoverviewimg.png";
import goalsimg from "../../assets/goalsimg.png";
import challenges from "../../assets/challenges.png";
import technologyicons from "../../assets/technologyicons.png";

const Card = ({ bgColor, icon, title, subtitle }) => (
  <div className={`rounded-2xl py-15 w-70 text-center ${bgColor}`}>
    <div className="bg-white w-20 h-20 mx-auto rounded-xl flex items-center justify-center mb-4">
      <img src={icon} alt="icon" className="w-10 h-10" />
    </div>
    <h4 className="text-black text-base font-medium">{title}</h4>
    <p className="text-sm text-gray-600">{subtitle}</p>
  </div>
);

const Invitehive = () => {
  const features = [
    "Unlimited guests",
    "Customization",
    "Sharing & Download",
    "Event Info & Maps",
    "Photo Gallery",
    "Secure and Permanent",
  ];

  return (
    <Layout>
      <div
        style={{ backgroundImage: `url(${backgroundImage})` }}
        className="w-[100%] bg-contain bg-center flex flex-col justify-center items-center py-8 text-white bg-[#030615] h-auto"
      >
        <div className="flex justify-between gap-60 items-start">
          <div className="flex items-start flex-col gap-5">
            <h1 className="bg-[#FF3C00] font-medium flex items-center justify-center w-30 px-4 py-2 rounded-4xl">
              Case Study
            </h1>
            <span className="text-2xl font-medium">
              Invitation Making & Share App
            </span>
            <div className="flex bg-white/15 px-6 py-4 gap-4 rounded-2xl justify-center items-center">
              <img width={100} src={logo} alt="" />
            </div>

            <div className="flex mt-5 text-xm flex-col gap-4">
              <div className="flex gap-4">
                <span className="border border-gray-700 px-4 py-4 rounded-full">
                  Unlimited Guest
                </span>
                <span className="border border-gray-700 px-4 py-4 rounded-full">
                  Unique Cards
                </span>
              </div>
              <div className="flex gap-4">
                <span className="border border-gray-700 px-4 py-4 rounded-full">
                  Event Details
                </span>
                <span className="border border-gray-700 px-4 py-4 rounded-full">
                 Customizable
                </span>
              </div>

              <div className="flex gap-4">
               
                <span className="border border-gray-700 px-4 py-4 rounded-full">
                 High-Quality Designs
                </span>
              </div>
            </div>
          </div>
          <div>
            <img width={500} src={headerimg} alt="" />
          </div>
        </div>
      </div>

      <div className="flex justify-center gap-20 p-10">
        <Card
          bgColor="bg-indigo-100"
          icon={teamicon}
          title="Team size"
          subtitle="10 People"
        />
        <Card
          bgColor="bg-pink-100"
          icon={usericon}
          title="About"
          subtitle="Invitehive"
        />
        <Card
          bgColor="bg-cyan-100"
          icon={timericon}
          title="Timeline"
          subtitle="20 Weeks"
        />
      </div>

      <div>
        <div className="w-[100%] relative h-100">
          <img className="w-[100%] h-[100%] object-cover" src={banner} alt="" />
          <div className="absolute text-white flex justify-between items-center gap-12 flex-col top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <h2 className="text-center  w-[100%] flex justify-center items-center text-4xl">
              Do You Want to Build a High-End Automotive App Like InviteHive ?
            </h2>

            <button className=" text-black bg-white w-80 text-2xl font-medium px-5 py-3  rounded-xl">
              Book a Free Consultation!
            </button>
          </div>
        </div>
      </div>

      <div className="bg-[#030615] text-white min-h-screen p-6 md:p-16 space-y-24">
        {/* 01 - Project Overview */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Text */}
          <div>
            <h2 className="text-orange-500 text-6xl font-bold">
              01<span className="text-white font-norm al text-2xl">/05</span>
            </h2>
            <h3 className="text-2xl font-semibold mt-4">Project Overview</h3>
            <p className="text-gray-300 mt-4">
              InviteHive is an event invitation & sharing mobile app that allows
              users to design, customize, share, and manage invitations and
              event details — all in one place. Whether weddings, birthdays, or
              any celebration, InviteHive makes it easy to create beautiful
              invites and keep guests informed. invitehive.com
            </p>
          </div>
          {/* Image */}
          <div className="flex justify-center">
            <div className=" rounded-xl p-4">
              <img
                src={projectoverviewimg}
                alt="Project Overview"
                className="w-120 md:w-120 object-contain"
              />
            </div>
          </div>
        </div>

        {/* 02 - Goals & Achievements (Reversed Layout) */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Image (on the left) */}
          <div className=" rounded-xl p-4">
            <img
              src={goalsimg}
              alt="Project Overview"
              className="w-140 md:w-140 object-contain"
            />
          </div>
          {/* Text */}
          <div className="order-2 md:order-none">
            <h2 className="text-orange-500 text-6xl font-bold">
              02<span className="text-white font-normal text-2xl">/05</span>
            </h2>
            <h3 className="text-4xl font-semibold mt-4">
              Goals & Achievements
            </h3>
            <li className="text-gray-300 mt-4">
              Goals: Simplify the invitation process, make it eco-friendly, and
              provide users with a stylish yet practical way to manage events.
            </li>

            <li className="text-gray-300 mt-4">
              Achievements: Successfully launched across iOS and Android, gained
              strong user adoption, and demonstrated measurable cost and time
              savings compared to traditional invitations
            </li>
          </div>
        </div>

        {/* 03 - Challenges */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Text */}
          <div>
            <h2 className="text-orange-500 text-6xl font-bold">
              03<span className="text-white font-normal text-2xl">/05</span>
            </h2>
            <h3 className="text-4xl font-semibold mt-4">Challenges</h3>
            <li className="text-gray-300 mt-4">
              API Integration Issues – Connecting WhatsApp properly with your
              app can be tricky and may cause errors.
            </li>
            <li className="text-gray-300 mt-4">
              Authentication & Security – Managing access tokens and keeping
              user data secure is challenging.
            </li>
            <li className="text-gray-300 mt-4">
              Device & Network Compatibility – The app may behave differently on
              various devices or slow networks.
            </li>

            <li className="text-gray-300 mt-4">
              Testing & Functionality Checks – Ensuring all features work
              correctly under all conditions is time-consuming.
            </li>
          </div>
          {/* Image */}
          <div className="flex justify-center">
            <div className=" rounded-xl p-4">
              <img
                src={challenges}
                alt="Challenges"
                className="w-140 md:w-140 object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="grid bg-[#0E111F] p-10 w-[100%] md:grid-cols-2 gap-10 items-center">
        {/* Text */}
        <div>
          <h2 className="text-orange-500 text-6xl font-bold">
            04<span className="text-white font-normal text-4xl">/05</span>
          </h2>
          <h3 className="text-4xl text-white font-semibold mt-4">
            Technology & Tools
          </h3>
        </div>
        {/* Image */}
        <div className="flex justify-center">
          <div className=" rounded-xl p-4">
            <img
              src={technologyicons}
              alt="Challenges"
              className="w-140 md:w-140 object-contain"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center px-4 py-12 bg-white">
        {/* Step Counter */}
        <div className="text-center mb-4">
          <span className="text-6xl font-bold text-orange-600">05</span>
          <span className="text-gray-400 text-xl">/05</span>
        </div>

        {/* Heading */}
        <h2 className="text-4xl font-semibold mb-8">App Features</h2>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl w-full">
          {features.map((feature, index) => (
            <div
              key={index}
              className="border border-gray-300 rounded-lg p-4 text-center shadow-sm hover:shadow-md transition"
            >
              {feature}
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Invitehive;
