import React, { useState } from "react";
import Layout from "../Layout";
import hireDeveloperHeader from "../../assets/hireDeveloperHeader.jpg";
import { LuMail } from "react-icons/lu";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { GrLocation } from "react-icons/gr";
import { Link } from "react-router";
import axios from "axios";
import axiosInstance from "../../axios";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet";
import ReCAPTCHA from "react-google-recaptcha";
import { useNavigate } from "react-router-dom";

const Contactus = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [captcha, setCaptcha] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handlesubmit = async (e) => {
    e.preventDefault();

    if (!captcha) {
      toast.error("Please complete the CAPTCHA.");
      return;
    }

    setLoading(true); // start loading

    try {
      const formdata = new FormData();
      formdata.append("name", name);
      formdata.append("email", email);
      formdata.append("phone", phone);
      formdata.append("message", message);

      const response = await axiosInstance.post("contactUs.php", formdata);
      if (response.status === 200) {
        toast.success(response.data.message);
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");

        setTimeout(() => {
          navigate("/thank-you");
        }, 1000);
      } else {
        toast.error(response.data.data);
      }
    } catch (error) {
      console.error("Form submission error:", error);
      toast.error("Failed to submit form. Please try again later.");
    } finally {
      setLoading(false); // stop loading
    }
  };

  const position = [51.505, -0.09]; // example coordinates

  return (
    <Layout>
      <Helmet>
        <title>
          Let’s Turn Your Software Project into Reality – Contact Us Today
        </title>
        <meta
          name="description"
          content="Get in touch with Infomagine Softwares to discuss your project needs. We're here to help you build custom software solutions tailored to your business goals."
        />

        <link rel="canonical" href="https://infomagine.in/contact-us"></link>

        {/* Open Graph Tags */}
        <meta property="og:title" content="Contact Us | Infomagine Softwares" />
        <meta
          property="og:description"
          content="Get in touch with Infomagine Softwares for all your IT needs. Reach out to our experts today!"
        />
        <meta
          property="og:image"
          content="https://infomagine.in/assets/infomagine%20logo-BsvjEvw5.png"
        />
        <meta property="og:url" content="https://infomagine.in/contact-us" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Infomagine Softwares" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:country" content="US, UK, UAE, AU, NZ" />

        {/* Schema Markup (JSON-LD) */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            mainEntityOfPage: "https://infomagine.in/contact-us",
            provider: {
              "@type": "Organization",
              name: "Infomagine Softwares",
              url: "https://infomagine.in/contact-us",
              logo: "https://infomagine.in/logo.png",
              sameAs: [
                "https://www.facebook.com/Infomaginesoftwares",
                "https://www.instagram.com/infomagine_softwares/",
                "https://www.linkedin.com/company/13313914/",
                "https://x.com/InfocoxSocial",
                "https://in.pinterest.com/infomaginesoftwares/",
              ],
            },
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+91-XXXXXXXXXX",
              contactType: "Customer Service",
              areaServed: "Global",
              availableLanguage: "English",
            },
          })}
        </script>
      </Helmet>
      <div className="flex flex-col gap-20 mb-20">
        {/* Header Section */}

        <div className="w-full relative h-[35rem]" data-aos="fade-down">
          <img
            className="w-full h-full object-cover"
            src={hireDeveloperHeader}
            alt=""
          />
          <div className="absolute text-white top-[50%] left-[10%]">
            <p className="text-5xl font-bold">Contact Us</p>
            <div className="flex gap-2">
              <Link to={"/"}>Home</Link>
              <p>&gt;</p>
              <p>Contact Us</p>
            </div>
          </div>
        </div>
        {/* Contact Info and Form */}
        <div className="flex flex-col md:flex-row gap-10 px-4 sm:px-6 md:px-10 lg:px-20">
          {/* Contact Details */}
          <div className="md:w-1/2 space-y-6">
            <h4 className="text-[#FF3C00] font-semibold uppercase">
              Contact Details
            </h4>
            <h2 className="text-3xl font-bold">Contact Us</h2>
            <hr className="border-2 border-[#FF3C00] w-20" />
            <p className="text-gray-600">
              Feel free to reach out to us via phone or visit us anytime. We
              strive to respond to all inquiries within 24 hours on business
              days and are always happy to assist with any questions you may
              have.
            </p>

            <div className="flex items-start gap-4">
              <div className="text-[#FF3C00] text-3xl">
                <GrLocation />
              </div>
              <div>
                <p className="font-semibold">Our Address:</p>
                <p className="text-gray-700">
                  520, Mansarovar Plaza,
                  <br />
                  Madhyam Marg, Mansarovar,
                  <br />
                  Jaipur-302020
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="text-[#FF3C00] text-3xl">
                <LuMail />
              </div>
              <div>
                <p className="font-semibold">Our Mailbox:</p>
                <p className="text-gray-700">hi@infomagine.in</p>
                <p className="text-gray-700">+91 94686 29248</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:w-1/2 bg-[#F4F7FC] p-6 rounded-md space-y-6">
            <h4 className="text-[#FF3C00] font-semibold uppercase">
              Get in Touch
            </h4>
            <h2 className="text-3xl font-bold">Ready To Get Started?</h2>
            <hr className="border-2 border-[#FF3C00] w-20" />

            <p className="text-sm text-gray-500">
              Your email address will not be published.
            </p>

            <form onSubmit={handlesubmit} className="space-y-4">
              <input
                required
                type="text"
                placeholder="Your Name"
                className="w-full p-3 border bg-white border-gray-300 rounded"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                required
                type="email"
                placeholder="Your Email"
                className="w-full p-3 border bg-white border-gray-300 rounded"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                required
                type="tel"
                placeholder="Phone Number"
                className="w-full p-3 border bg-white border-gray-300 rounded"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <textarea
                required
                rows="4"
                placeholder="Your Message"
                className="w-full p-3 border bg-white border-gray-300 rounded"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>

              <ReCAPTCHA
                sitekey="6LfeuTorAAAAAGdTLPb4EWagagNF5TEfQeFZ8J8i"
                onChange={(value) => setCaptcha(value)}
              />

              {/* <button
                type="submit"
                className="bg-[#FF3C00] text-white py-3 px-6 rounded hover:bg-red-700 transition"
              >
                Free Consulting
              </button> */}
              <button
                type="submit"
                disabled={loading}
                className={`flex items-center justify-center bg-[#FF3C00] text-white py-3 px-6 rounded transition ${
                  loading ? "opacity-80 cursor-not-allowed" : "hover:bg-red-700"
                }`}
              >
                {loading && (
                  <svg
                    className="animate-spin h-5 w-5 mr-2 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                    ></path>
                  </svg>
                )}
                {loading ? "Submitting..." : "Free Consulting"}
              </button>
            </form>
          </div>
        </div>

        {/* Google Map Section */}
        <div className="px-4 sm:px-6 md:px-10">
          <div className="w-full h-[400px] md:h-[500px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3383.427982433622!2d75.76723!3d26.8542064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db5c3cc17c149%3A0xa2057e9f5e3e14f3!2sInfomagine%20Softwares%20Pvt.%20Ltd.!5e1!3m2!1sen!2sin!4v1746682019289!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Infomagine Map"
            ></iframe>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contactus;
