"use client";
import React, { useState, useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";

const blogs = [
  {
    title: "MERN Stack vs Next.js: Which one should you choose for your next project?",
    date: "May 2026",
    readTime: "4 min read",
    snippet: "A detailed comparison on choosing the right tech stack for building modern, high-performance full-stack web applications."
  },
  {
    title: "Key Strategies for Optimizing E-Commerce Website Performance",
    date: "April 2026",
    readTime: "5 min read",
    snippet: "Actionable tips to boost your online store's loading speed and improve user experience for higher conversions."
  },
  {
    title: "Building Scalable Agency Workflows with Modern React Ecosystem",
    date: "March 2026",
    readTime: "6 min read",
    snippet: "How we manage complex digital agency projects at UpToTechSyl using component-driven development and clean state management."
  },
  {
    title: "The Importance of UI/UX Branding for Corporate Businesses",
    date: "February 2026",
    readTime: "4 min read",
    snippet: "Exploring how cohesive digital branding, custom signboards, and fluid animations elevate a business's online authority."
  }
];

export default function BlogSection() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-24 px-4 md:px-10 max-w-7xl mx-auto overflow-hidden">
      <div className="text-center mb-16 space-y-3">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
          Latest <span className="text-cyan-400">Articles</span>
        </h2>
        <p className="text-slate-400 text-sm max-w-xl mx-auto">
          Thoughts, insights, and tips on web development, software engineering, and digital solutions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {blogs.map((blog, index) => (
          <div 
            key={index} 
            className={`p-8 rounded-3xl backdrop-blur-xl flex flex-col justify-between relative overflow-hidden transition-all duration-700 transform ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{
              transitionDelay: `${index * 150}ms`,
              background: "linear-gradient(to bottom right, rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.4))",
              border: "2px solid transparent",
              backgroundImage: "linear-gradient(rgba(15, 23, 42, 0.9), rgba(15, 23, 42, 0.9)), linear-gradient(to right, #06b6d4, #a855f7, #ec4899)",
              backgroundOrigin: "border-box",
              backgroundClip: "padding-box, border-box",
              boxShadow: "0 0 35px rgba(6, 182, 212, 0.12), inset 0 0 20px rgba(168, 85, 247, 0.08)"
            }}
          >
            {/* Background Glow Accent */}
            <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none"></div>

            <div>
              <div className="flex items-center gap-3 text-xs text-cyan-400 font-semibold mb-4">
                <span>{blog.date}</span>
                <span>•</span>
                <span>{blog.readTime}</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 hover:text-cyan-300 transition-colors cursor-pointer">
                {blog.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-8">
                {blog.snippet}
              </p>
            </div>

            <button className="flex items-center gap-2 text-cyan-400 text-sm font-semibold hover:gap-3 transition-all w-fit relative z-10">
              Read Article <ArrowRight size={16} />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}