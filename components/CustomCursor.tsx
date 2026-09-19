"use client";
import React, { useEffect, useState } from "react";

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(true);
  const [trail, setTrail] = useState<Array<{ x: number; y: number; id: number }>>([]);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });

      // নতুন ডট ট্রেইলে যোগ করা এবং সর্বোচ্চ ৫টি ডট রাখা
      setTrail((prev) => {
        const newTrail = [...prev, { x: e.clientX, y: e.clientY, id: Date.now() }];
        if (newTrail.length > 5) {
          return newTrail.slice(newTrail.length - 5);
        }
        return newTrail;
      });
    };

    const handleMouseEnter = () => setHidden(false);
    const handleMouseLeave = () => setHidden(true);

    window.addEventListener("mousemove", updatePosition);
    window.addEventListener("mouseover", handleMouseEnter);
    window.addEventListener("mouseout", handleMouseLeave);

    const interactiveElements = document.querySelectorAll("a, button, .clickable");
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => setHidden(true));
        el.addEventListener('mouseleave', () => setHidden(false));
    });

    return () => {
      window.removeEventListener("mousemove", updatePosition);
      window.removeEventListener("mouseover", handleMouseEnter);
      window.removeEventListener("mouseout", handleMouseLeave);
    };
  }, []);

  if (typeof navigator !== 'undefined' && navigator.userAgent.match(/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i)) {
    return null; // মোবাইল ডিভাইসে কার্সর দেখাবে না
  }

  return (
    <>
      {/* মূল পিংক কালার কার্সর ডট */}
      <div
        className={`fixed top-0 left-0 w-5 h-5 bg-pink-500 rounded-full pointer-events-none z-[9999] mix-blend-difference transition-opacity duration-100 ease-out ${
          hidden ? "opacity-0 scale-50" : "opacity-100 scale-100"
        }`}
        style={{
          transform: `translate(${position.x - 10}px, ${position.y - 10}px)`,
          transition: "transform 0.1s ease-out, opacity 0.2s ease-out, background-color 0.3s ease"
        }}
      />

      {/* ৫টি ডটের পিংক ট্রেইল ইফেক্ট */}
      {trail.map((point, index) => (
        <div
          key={point.id}
          className="fixed top-0 left-0 w-3 h-3 bg-pink-500/50 rounded-full pointer-events-none z-[9998] mix-blend-difference"
          style={{
            left: point.x - 6,
            top: point.y - 6,
            opacity: (5 - index) / 6,
            transform: `scale(${(5 - index) / 5})`,
            transition: "opacity 0.5s ease-out, transform 0.5s ease-out"
          }}
        />
      ))}
    </>
  );
};

export default CustomCursor;