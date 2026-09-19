"use client";
import React, { useState, useEffect, useRef } from "react";
import { Quote, ExternalLink } from "lucide-react";

const reviews = [
  {
    name: "Farhana Khatun",
    role: "Executive Officer & Full-Stack Developer",
    project: "UpToTechSyl Platform",
    link: "https://uptotechsyl.com",
    comment: "As the Executive Officer and Full-Stack Developer, I spearheaded the complete digital architecture, branding, and web solutions for UpToTechSyl, ensuring seamless operational workflows and modern web presence."
  },
  {
    name: "Anissuzaman",
    role: "Founder, Zaman Traders BD",
    project: "zamantradersbd.com",
    link: "https://zamantradersbd.com",
    comment: "Farhana independently designed and developed our e-commerce platform from scratch. The code quality, speed, and attention to detail exceeded our expectations!"
  },
  {
    name: "Management",
    role: "Aaryan Sourcing",
    project: "aaryansourcing.com",
    link: "https://www.aaryansourcing.com/",
    comment: "Successfully delivered our corporate sourcing website with high responsiveness and professional UI/UX design. Highly skilled developer for any complex web project."
  },
  {
    name: "Project Collaborator",
    role: "Web Development Partner",
    project: "MERN Stack Solutions",
    link: "#",
    comment: "Working alongside Farhana on full-stack web applications has been amazing. Her deep expertise in MERN stack and clean coding practices make every project a success."
  }
];

export default function Testimonials() {
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
          Client & Project <span className="text-cyan-400">Reviews</span>
        </h2>
        <p className="text-slate-400 text-sm max-w-xl mx-auto">
          Feedback and successful delivery highlights from platforms and client ventures I've built
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {reviews.map((review, index) => (
          <div 
            key={index}
            className={`p-8 rounded-3xl backdrop-blur-xl relative overflow-hidden transition-all duration-700 transform ${
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

            <Quote className="absolute top-6 right-6 w-10 h-10 text-cyan-400/20" />
            
            <div className="mb-4">
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
                {review.project}
              </span>
            </div>

            <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-8 relative z-10">
              &ldquo;{review.comment}&rdquo;
            </p>

            <div className="flex items-center justify-between pt-4 border-t border-slate-800/80 relative z-10">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-cyan-500 to-purple-500 flex items-center justify-center text-white font-bold text-sm shadow-md">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-white font-bold text-base tracking-wide">{review.name}</h4>
                  <span className="text-cyan-400 text-xs font-medium">{review.role}</span>
                </div>
              </div>

              {review.link !== "#" && (
                <a 
                  href={review.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl bg-slate-950 text-slate-300 hover:text-cyan-400 hover:bg-slate-900 border border-slate-800 transition-all flex items-center gap-1 text-xs"
                >
                  <span>Visit</span> <ExternalLink size={12} />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}