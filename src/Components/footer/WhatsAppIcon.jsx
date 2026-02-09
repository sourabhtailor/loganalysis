import React, { useState, useEffect } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppIcon = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [hasMoved, setHasMoved] = useState(false);
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });
  const DRAG_THRESHOLD = 5; // Pixels to move before considering it a drag

  const handleStart = (e) => {
    e.preventDefault();
    const clientX = e.clientX || (e.touches && e.touches[0].clientX);
    const clientY = e.clientY || (e.touches && e.touches[0].clientY);
    const rect = e.currentTarget.getBoundingClientRect();
    setOffset({
      x: clientX - rect.left,
      y: clientY - rect.top,
    });
    setStartPos({ x: clientX, y: clientY });
    setIsDragging(true);
    setHasMoved(false);
  };

  const handleMove = (e) => {
    if (isDragging) {
      const clientX = e.clientX || (e.touches && e.touches[0].clientX);
      const clientY = e.clientY || (e.touches && e.touches[0].clientY);
      // Check if moved beyond threshold
      if (
        Math.abs(clientX - startPos.x) > DRAG_THRESHOLD ||
        Math.abs(clientY - startPos.y) > DRAG_THRESHOLD
      ) {
        setHasMoved(true);
        setPosition({
          x: clientX - offset.x,
          y: clientY - offset.y,
        });
      }
    }
  };

  const handleEnd = () => {
    setIsDragging(false);
  };

  const handleClick = (e) => {
    if (hasMoved || isDragging) {
      e.preventDefault(); // Prevent link click if dragged or dragging
    }
  };

  // Add global event listeners for move and end
  useEffect(() => {
    window.addEventListener('mousemove', handleMove);
    window.addEventListener('mouseup', handleEnd);
    window.addEventListener('touchmove', handleMove, { passive: false });
    window.addEventListener('touchend', handleEnd);

    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('mouseup', handleEnd);
      window.removeEventListener('touchmove', handleMove);
      window.removeEventListener('touchend', handleEnd);
    };
  }, [isDragging, offset, startPos]);

  return (
    <>
      <a
        href="https://wa.me/919468639248"
        target="_blank"
        rel="noopener noreferrer"
        className={`fixed z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 cursor-grab ${isDragging && hasMoved ? 'dragging' : 'bottom-6 right-6 animate-pulse animate-bounce'}`}
        style={isDragging && hasMoved ? { left: `${position.x}px`, top: `${position.y}px` } : {}}
        onMouseDown={handleStart}
        onTouchStart={handleStart}
        onClick={handleClick}
        aria-label="Contact us on WhatsApp"
      >
        <FaWhatsapp className="text-3xl" />
      </a>
      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }

        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.7); }
          70% { box-shadow: 0 0 0 10px rgba(34, 197, 94, 0); }
          100% { box-shadow: 0 0 0 0 rgba(34, 197, 94, 0); }
        }

        .animate-bounce {
          animation: bounce 2s infinite;
        }

        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        .fixed {
          transition: all 0.5s ease-in-out;
        }

        .dragging {
          cursor: grabbing;
          transition: none;
        }
      `}</style>
    </>
  );
};

export default WhatsAppIcon;