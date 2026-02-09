import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import axiosInstance from "../../axios";
import { toast } from "react-toastify";
import subscribebg from "../../assets/subscribebg.jpg"; // Ensure this image exists or replace with appropriate background

const Popup = () => {
  const [email, setEmail] = useState("");
  const [isOpen, setIsOpen] = useState(false); // Popup is closed by default

  // Open popup after 2 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 2000); // 2000ms = 2 seconds

    return () => clearTimeout(timer); // Cleanup timer on component unmount
  }, []);

  // Close popup
  const handleClose = () => {
    setIsOpen(false);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
  const formdata = new FormData();
    formdata.append("email", email);
    const response = await axiosInstance.post("subscribe.php", formdata);
    if (response.status === 200) {
      toast.success(response.data.message);
      setEmail("");
    } else {
      toast.error("Something went wrong");
    } // Replace with actual subscription logic
    setEmail("");
    setIsOpen(false);
  };

  // Animation variants for the pop-up
  const popupVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
    exit: { opacity: 0, scale: 0.8, y: 50, transition: { duration: 0.3, ease: "easeIn" } },
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <motion.div
            variants={popupVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            style={{ backgroundImage: `url(${subscribebg})`,
                  backgroundRepeat: "no-repeat", // Prevent image repetition
                  backgroundPosition: "center", // Center the image
                  
                }}
            className="relative bg-[#FF3C00] bg-contain bg-center rounded-lg p-6 w-full max-w-md mx-4 shadow-xl"
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-2 cursor-pointer right-2 text-white hover:text-gray-700"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Newsletter Form */}
            <form onSubmit={handleSubmit} className="w-full">
              <div
                className=" rounded-sm px-6 py-6 flex flex-col items-center gap-6 w-full"
              >
                <span className="text-2xl text-white font-bold text-center">
                  Subscribe to our Newsletter
                </span>
                <div className="bg-white w-full flex rounded-3xl p-2">
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex w-full px-3 py-3 focus:outline-none rounded-3xl"
                    placeholder="Enter your Email"
                    type="email"
                    required
                  />
                  <button
                    className="bg-[#FF3C00] cursor-pointer right-2 top-3 text-white px-4 py-2 rounded-3xl"
                    type="submit"
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default Popup;