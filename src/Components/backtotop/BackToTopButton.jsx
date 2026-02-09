// ./Components/common/BackToTopButton.jsx
import React from "react";
import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react"; // Optional: `lucide-react` for icon

export default function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-50 bg-[#FF3D00] text-white p-4 cursor-pointer rounded-full shadow-lg  transition-all duration-300"
        aria-label="Back to top"  
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    )
  );
}
