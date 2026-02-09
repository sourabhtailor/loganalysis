import React, { useEffect } from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaPinterestP,
  FaInstagram,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";
import infomaginelogo from "../../assets/infomagine logo.png";
import insta from "../../assets/instagram.png";
import righttick from "../../assets/righttick.png"; // your tick image
import Footer from "../footer/Footer";
import Navbar2 from "../navbar/Navbar2";

const ThankYou = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar2 />
      <div className="relative min-h-[20rem] p-20 flex flex-col items-center justify-center overflow-hidden text-center bg-[#f8fafc] ">
        {/* Angled background sections */}
        <div className="absolute top-0 left-0 w-1/2 h-full bg-[#FF3C00] -skew-x-12 origin-top-right"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[rgb(3,6,21)] -skew-x-12 origin-top-left"></div>
        <div className="absolute inset-0 bg-white/90"></div>

        {/* Main Content */}
        <div className="relative z-10 flex flex-col items-center max-w-4xl mx-auto">
          {/*  Right tick in center instead of logo */}
          <img
            src={righttick}
            alt="Success Tick"
            className="w-12 sm:w-20 mb-6"
          />

          {/* Title */}
          <h1 className="text-7xl  font-bold text-[#FF3C00] mb-3">Thank You</h1>
          <p className="text-gray-700 max-w-2xl mb-10 mt-3">
            Thank you for showing interest in{" "}
            <span className="">Infomagine Software</span>. Our experts are
            reviewing your request — you’ll hear from us within 24 hours
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ThankYou;
