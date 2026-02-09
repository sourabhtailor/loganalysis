import React, { useState, useEffect } from "react";
import infomaginelogo from "../../assets/infomagine logo.png";
import { RiArrowDropDownLine } from "react-icons/ri";
import { HiMenu, HiX } from "react-icons/hi";
import { useRef } from "react";

const Navbar2 = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openSection, setOpenSection] = useState(null);
  const [desktopCompanyOpen, setDesktopCompanyOpen] = useState(false);
  const [desktopServicesOpen, setDesktopServicesOpen] = useState(false);

  const servicesRef = useRef(null); // new ref for Services dropdown
  const companyRef = useRef(null);


    // Detect click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        servicesRef.current &&
        !servicesRef.current.contains(event.target)
      ) {
        setDesktopServicesOpen(false);
      }

      if (
        companyRef.current &&
        !companyRef.current.contains(event.target)
      ) {
        setDesktopCompanyOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);



  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false); // Close mobile drawer on desktop
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* Top Navbar */}

      {/* <div className="relative w-full h-[50px] hidden lg:block">
        <img className="w-full h-full object-cover" src={topnavbg} alt="Top Navigation Background" />
        <div className="absolute inset-0 flex items-center justify-between text-white text-sm text-center px-4 lg:px-40">
          <div className="flex flex-wrap gap-4 items-center">
            <div className="flex items-center gap-1">
              <LuMail />
              <a href="mailto:hi@infomagine.in" className="hover:underline">
                hi@infomagine.in
              </a>
            </div>
            <div className="flex items-center gap-1">
              <GrLocation />
              <span>
                520, Mansarovar Plaza, Madhyam Marg, Mansarovar, Jaipur-302020
              </span>
            </div>
          </div>

          {/* Social Icons */}
      {/* <div className="flex gap-4">
            <a href="https://www.facebook.com/Infomaginesoftwares"><FaFacebookF className="hover:text-[#FF3C00]" /></a>
            <a href="https://www.instagram.com/infomagine_softwares/"><FaInstagram className="hover:text-[#FF3C00]" /></a>
            <a href="https://www.linkedin.com/company/13313914/admin/dashboard/"><FaLinkedin className="hover:text-[#FF3C00]" /></a>
            <a href="https://x.com/i/flow/login?redirect_after_login=%2FInfocoxSocial"><FaXTwitter className="hover:text-[#FF3C00]" /></a>
            <a href="https://in.pinterest.com/infomaginesoftwares/"><FaPinterest className="hover:text-[#FF3C00]" /></a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div
        className={`w-full p-5 ${
          isScrolled
            ? "fixed top-0 bg-white text-black shadow-md"
            : "bg-[rgb(3,6,21)] text-white"
        } transition-all duration-300 z-50`}
      >
        <div className="flex justify-between items-center px-4 md:px-8 lg:px-20 xl:px-40 h-20">
          {/* Logo */}
          <a href="/">
            <div>
              <img
                src={infomaginelogo}
                alt="Infomagine Logo"
                className="w-28 sm:w-20 md:w-28 lg:w-25 xl:w-25"
              />
            </div>
          </a>

          {/* Desktop Nav Items */}
          <ul className="hidden lg:flex items-center gap-7">
            <a href="/" className="hover:text-[#FF3C00]">
              Home
            </a>

            <li
              ref={companyRef} 
              className="relative group"
              onClick={() => setDesktopCompanyOpen(!desktopCompanyOpen)}
            >
              <span className="flex items-center cursor-pointer">
                Company <RiArrowDropDownLine className="text-2xl" />
              </span>

              <div
                className={`absolute top-4 flex-col gap-4 w-40 bg-white text-black shadow-lg    p-4 mt-2 z-50 
                ${desktopCompanyOpen ? "flex" : "hidden"} lg:group-hover:flex`}
              >
                <a href="/about-us" className="hover:text-[#FF3C00]">
                  About Us
                </a>
                <a href="/career" className="hover:text-[#FF3C00]">
                  Careers
                </a>
              </div>
            </li>

            <a href="/hire-developer" className="hover:text-[#FF3C00]">
              Hire Developer
            </a>

            {/* Services with dropdown */}
            <li
              ref={servicesRef}
              className="group cursor-pointer"
              onClick={() => setDesktopServicesOpen(!desktopServicesOpen)}
            >
              <span className="flex items-center">
                Services <RiArrowDropDownLine className="text-2xl" />
              </span>

              <div
                className={`absolute top-25 left-1/2 -translate-x-1/2 z-50 w-[1050px] 
                          bg-white text-black shadow-xl transition-all duration-300 p-8 grid grid-cols-5 gap-8 
                          ${
                            desktopServicesOpen
                              ? "opacity-100 visible translate-y-0"
                              : "opacity-0 invisible translate-y-2"
                          } lg:group-hover:opacity-100 lg:group-hover:visible lg:group-hover:translate-y-0`}
              >
                {/* IT Services */}
                
                <div>
                  <h3 className=" text-[16px] text-[#FF3C00] mb-2 border-b pb-1">
                    IT Services
                  </h3>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <a
                        href="/services/custom-software"
                        className="hover:text-[#FF3C00]"
                      >
                        Custom Software
                      </a>
                    </li>
                    <li>
                      <a
                        href="/services/full-stack-development"
                        className="hover:text-[#FF3C00]"
                      >
                        Full-Stack Web Development
                      </a>
                    </li>
                    <li>
                      <a
                        href="/services/it-consulting-services"
                        className="hover:text-[#FF3C00]"
                      >
                        IT Consulting Services
                      </a>
                    </li>
                    <li>
                      <a
                        href="/services/software-testing-and-qa"
                        className="hover:text-[#FF3C00]"
                      >
                        Software Testing & QA
                      </a>
                    </li>
                    <li>
                      <a
                        href="/services/digital-marketing"
                        className="hover:text-[#FF3C00]"
                      >
                        Digital Marketing
                      </a>
                    </li>
                    {/* <li>
                      <a href="#" className="hover:text-[#FF3C00]">
                        Outsourced Product Development
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-[#FF3C00]">
                        Software Development & IT Ops
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-[#FF3C00]">
                        Data As A Service
                      </a>
                    </li> */}
                  </ul>
                </div>

                {/* Mobile */}
                <div>
                  <h3 className=" text-[16px] text-[#FF3C00] mb-2 border-b pb-1">
                    Mobile
                  </h3>
                  <ul className="space-y-2 text-sm">
                    {/* <li>
                      <a href="#" className="hover:text-[#FF3C00]">
                        Mobile App Development
                      </a>
                    </li> */}
                    <li>
                      <a href="/services/ios" className="hover:text-[#FF3C00]">
                        IOS
                      </a>
                    </li>
                    <li>
                      <a
                        href="/services/android"
                        className="hover:text-[#FF3C00]"
                      >
                        Android
                      </a>
                    </li>
                    <li>
                      <a
                        href="/services/react-native"
                        className="hover:text-[#FF3C00]"
                      >
                        React Native
                      </a>
                    </li>
                    <li>
                      <a
                        href="/services/hybrid"
                        className="hover:text-[#FF3C00]"
                      >
                        Hybrid
                      </a>
                    </li>
                    <li>
                      <a
                        href="/services/flutter"
                        className="hover:text-[#FF3C00]"
                      >
                        Flutter
                      </a>
                    </li>
                    {/* <li>
                      <a href="#" className="hover:text-[#FF3C00]">
                        Ionic
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-[#FF3C00]">
                        Swift
                      </a>
                    </li> */}
                  </ul>
                </div>

                {/* Server Side */}
                <div>
                  <h3 className=" text-[16px] text-[#FF3C00] mb-2 border-b pb-1">
                    Server Side
                  </h3>
                  <ul className="space-y-2 text-sm">
                    {/* <li>
                      <a href="#" className="hover:text-[#FF3C00]">
                        AI Chatbot
                      </a>
                    </li> */}
                    <li>
                      <a href="/services/php" className="hover:text-[#FF3C00]">
                        PHP
                      </a>
                    </li>
                    <li>
                      <a
                        href="/services/laravel"
                        className="hover:text-[#FF3C00]"
                      >
                        Laravel
                      </a>
                    </li>
                    <li>
                      <a
                        href="/services/codeigniter"
                        className="hover:text-[#FF3C00]"
                      >
                        Codeigniter
                      </a>
                    </li>
                    {/* <li>
                      <a href="#" className="hover  :text-[#FF3C00]">
                        Symfony
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-[#FF3C00]">
                        NodeJS
                      </a>
                    </li> */}
                  </ul>
                </div>

                <div>
                  <h3 className=" text-[16px] text-[#FF3C00] mb-2 border-b pb-1">
                    Web Development
                  </h3>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <a
                        href="/services/angular"
                        className="hover:text-[#FF3C00]"
                      >
                        Angular
                      </a>
                    </li>
                    <li>
                      <a
                        href="/services/reactjs"
                        className="hover:text-[#FF3C00]"
                      >
                        ReactJS
                      </a>
                    </li>
                    <li>
                      <a
                        href="/services/VueJs"
                        className="hover:text-[#FF3C00]"
                      >
                        VueJS
                      </a>
                    </li>
                    {/* <li>
                      <a href="#" className="hover:text-[#FF3C00]">
                        Magento
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-[#FF3C00]">
                        WooCommerce
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-[#FF3C00]">
                        Shopify
                      </a>
                    </li>
                    <li>
                      <a href="/services/wordpress" className="hover:text-[#FF3C00]">
                        WordPress
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-[#FF3C00]">
                        Drupal
                      </a>
                    </li> */}
                  </ul>
                </div>

                <div>
                  <h3 className=" text-[16px] text-[#FF3C00] mb-2 border-b pb-1">
                    CMS
                  </h3>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <a
                        href="/services/Content-management-system"
                        className="hover:text-[#FF3C00]"
                      >
                        Content Management System
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>

            <a href="/portfolio" className="hover:text-[#FF3C00]">
              Portfolio
            </a>
            <a href="/blogs" className="hover:text-[#FF3C00]">
              Blog
            </a>
            <a
              href="/contact-us"
              className="bg-[#FF3C00] text-white px-4 py-2 rounded hover:bg-white hover:text-black transition"
            >
              Get Contact
            </a>
          </ul>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed  z-90 top-0 right-0 h-full w-72 bg-white text-black shadow-lg transform transition-transform duration-300 ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="flex items-center justify-between p-5 border-b">
              <img src={infomaginelogo} alt="logo" className="w-28" />
              <button onClick={() => setMobileMenuOpen(false)}>
                <HiX size={28} />
              </button>
            </div>

            {/* Links */}
            <nav className="flex-1 overflow-y-auto p-5 space-y-4">
              <a href="/" className="block hover:text-[#FF3C00]">
                Home
              </a>

              {/* Accordion - Company */}
              <div>
                <button
                  onClick={() => toggleSection("company")}
                  className="flex justify-between w-full font-semibold"
                >
                  Company{" "}
                  <RiArrowDropDownLine
                    className={`text-2xl transition-transform ${
                      openSection === "company" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openSection === "company" && (
                  <div className="mt-2 ml-3 space-y-2 text-sm">
                    <a href="/about-us" className="block hover:text-[#FF3C00]">
                      About Us
                    </a>
                    <a href="/career" className="block hover:text-[#FF3C00]">
                      Careers
                    </a>
                  </div>
                )}
              </div>

              {/* Accordion - Services */}
              <div>
                <button
                  onClick={() => toggleSection("services")}
                  className="flex justify-between w-full font-semibold"
                >
                  Services{" "}
                  <RiArrowDropDownLine
                    className={`text-2xl transition-transform ${
                      openSection === "services" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openSection === "services" && (
                  <div className="mt-2 ml-3 space-y-3 text-sm">
                    <div>
                      <p className="font-semibold text-[#FF3C00]">
                        IT Services
                      </p>
                      <a href="/services/custom-software" className="block">
                        Custom Software
                      </a>
                      <a
                        href="/services/full-stack-development"
                        className="block"
                      >
                        Full-Stack Development
                      </a>
                      <a
                        href="/services/it-consulting-services"
                        className="block"
                      >
                        IT Consulting
                      </a>
                      <a
                        href="/services/software-testing-and-qa"
                        className="block"
                      >
                        Software Testing & QA
                      </a>
                      <a href="/services/digital-marketing" className="block">
                        Digital Marketing
                      </a>
                    </div>
                    <div>
                      <p className="font-semibold text-[#FF3C00]">Mobile</p>
                      <a href="/services/ios" className="block">
                        iOS
                      </a>
                      <a href="/services/android" className="block">
                        Android
                      </a>
                      <a href="/services/react-native" className="block">
                        React Native
                      </a>
                      <a href="/services/flutter" className="block">
                        Flutter
                      </a>
                      <a href="/services/hybrid" className="block">
                        Hybrid
                      </a>
                    </div>
                    <div>
                      <p className="font-semibold text-[#FF3C00]">
                        Server Side
                      </p>
                      <a href="/services/php" className="block">
                        PHP
                      </a>
                      <a href="/services/laravel" className="block">
                        Laravel
                      </a>
                      <a href="/services/codeigniter" className="block">
                        Codeigniter
                      </a>
                    </div>
                    <div>
                      <p className="font-semibold text-[#FF3C00]">
                        Web Development
                      </p>
                      <a href="/services/angular" className="block">
                        Angular
                      </a>
                      <a href="/services/reactjs" className="block">
                        ReactJS
                      </a>
                      <a href="/services/VueJs" className="block">
                        VueJS
                      </a>
                    </div>
                    <div>
                      <p className="font-semibold text-[#FF3C00]">CMS</p>
                      <a
                        href="/services/Content-management-system"
                        className="block"
                      >
                        Content Management System
                      </a>
                    </div>
                  </div>
                )}
              </div>

              <a href="/hire-developer" className="block hover:text-[#FF3C00]">
                Hire Developer
              </a>
              <a href="/portfolio" className="block hover:text-[#FF3C00]">
                Portfolio
              </a>
              <a href="/blogs" className="block hover:text-[#FF3C00]">
                Blog
              </a>
            </nav>

            {/* Footer - Contact button */}
            <div className="p-5 border-t">
              <a
                href="/contact-us"
                className="block text-center bg-[#FF3C00] text-white py-2 rounded-lg hover:bg-black"
              >
                Get Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar2;
