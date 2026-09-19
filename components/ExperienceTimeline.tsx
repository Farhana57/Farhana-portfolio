"use client";
import React, { useState, useEffect, useRef } from "react";
import { Briefcase, GraduationCap, Award, MapPin } from "lucide-react";

const timelineData = [
  {
    id: 1,
    type: "education",
    period: "2010",
    title: "Higher Secondary Certificate (HSC)",
    organization: "Sylhet Government Women’s College",
    location: "Sylhet, Bangladesh",
    description: [
      "Completed Higher Secondary Certificate (HSC) with strong academic background."
    ],
    skills: ["Higher Secondary", "Academic Studies"]
  },
  {
    id: 2,
    type: "certification",
    period: "2010",
    title: "Certificate Course in Computer (Basic)",
    organization: "Bangladesh Computer College (Moulvibazar Branch)",
    location: "Bangladesh",
    description: [
      "Approved by the Government, People's Republic of Bangladesh."
    ],
    skills: ["Computer Basics", "ICT Literacy"]
  },
  {
    id: 3,
    type: "certification",
    period: "Dec 2011",
    title: "Basic IT & ICT Literacy Training",
    organization: "ICT Division, Bangladesh (LEDP)",
    location: "Bangladesh",
    description: [
      "15 Days (90 Hours) intensive training under Learning and Earning Development Project, Ministry of Posts, Telecommunications and Information Technology.",
      "Completed with Grade: A."
    ],
    skills: ["IT Literacy", "ICT Skills"]
  },
  {
    id: 4,
    type: "education",
    period: "Graduated",
    title: "Bachelor of Social Science (BSS) Degree",
    organization: "Academic Degree & Higher Studies",
    location: "Bangladesh",
    description: [
      "Completed Bachelor of Social Science degree."
    ],
    skills: ["Social Science", "Higher Education"]
  },
  {
    id: 5,
    type: "certification",
    period: "August 22",
    title: "Full-Stack Web Development with JavaScript (MERN)",
    organization: "Ostad Platform",
    location: "Online / Remote",
    description: [
      "Successfully completed comprehensive MERN stack training course and received certificate.",
      "Intensive training in MERN stack development, advanced backend engineering, and live coding projects."
    ],
    skills: ["MongoDB", "Express.js", "React.js", "Node.js", "JavaScript", "Next.js", "Tailwind CSS", "Bootstrap", "Canva", "CapCut"]
  },
  {
    id: 6,
    type: "work",
    period: "Feb 2025 - Present",
    title: "Executive Officer & Full Stack Developer",
    organization: "UpToTechSyl",
    location: "Sylhet, Bangladesh",
    description: [
      "Serving as an Executive Officer starting from February 2025, overseeing agency operations.",
      "Managing full-stack development projects and digital solutions.",
      "Specializing in MERN stack development, custom web solutions, and digital branding."
    ],
    skills: ["Executive Operations", "MERN Stack", "Web Development", "Project Management"]
  }
];

export default function ExperienceTimeline() {
  const [activeIndex, setActiveIndex] = useState(0);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      itemRefs.current.forEach((el, index) => {
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 1.5 && rect.bottom >= window.innerHeight / 3) {
            setActiveIndex(index);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="experience" className="py-20 px-4 md:px-10 max-w-5xl mx-auto overflow-hidden">
      <div className="text-center mb-16 space-y-3">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
          Education & Credentials
        </h2>
        <p className="text-slate-400 text-sm max-w-xl mx-auto">
          A complete timeline of my academic background, technical certifications, and professional career milestones.
        </p>
      </div>

      <div className="relative border-l-2 border-slate-800 ml-4 md:ml-32 space-y-12">
        {timelineData.map((item, index) => {
          const isActive = index <= activeIndex;

          return (
            <div
              key={item.id}
              ref={(el) => { itemRefs.current[index] = el; }}
              className={`relative pl-8 md:pl-12 group transition-all duration-700 transform ${
                isActive ? "opacity-100 translate-y-0" : "opacity-40 translate-y-8"
              }`}
            >
              {/* Dynamic Circle / Dot with multi-shadow */}
              <div 
                className={`absolute -left-[17px] top-1.5 w-8 h-8 rounded-full border-4 flex items-center justify-center transition-all duration-500 shadow-xl ${
                  isActive 
                    ? "bg-slate-950 border-cyan-400 text-cyan-400 shadow-cyan-500/50 scale-110 ring-4 ring-purple-500/20" 
                    : "bg-slate-900 border-slate-700 text-slate-500"
                }`}
              >
                {item.type === "education" ? <GraduationCap size={14} /> : item.type === "certification" ? <Award size={14} /> : <Briefcase size={14} />}
              </div>

              {/* Period Tag (Desktop) */}
              <div className="hidden md:block absolute -left-36 top-2 text-right w-28">
                <span className={`text-xs font-bold px-2.5 py-1 rounded-lg border transition-all duration-300 ${
                  isActive ? "bg-gradient-to-r from-cyan-500/10 to-purple-500/10 text-cyan-300 border-cyan-500/40 shadow-md shadow-cyan-500/10" : "bg-slate-900/60 text-slate-400 border-slate-800"
                }`}>
                  {item.period}
                </span>
              </div>

              {/* Card Container with Mixed Border & Multi-layered Box-Shadow */}
              <div className={`p-6 md:p-8 rounded-3xl transition-all duration-500 backdrop-blur-xl relative overflow-hidden ${
                isActive 
                  ? "bg-slate-900/80 border-2 border-transparent bg-origin-border shadow-[0_0_30px_rgba(6,182,212,0.15),inset_0_0_15px_rgba(168,85,247,0.1)] hover:scale-[1.01]" 
                  : "bg-slate-900/30 border border-slate-800/80 hover:border-slate-700"
              }`}
              style={{
                borderImage: isActive ? "linear-gradient(to right, #06b6d4, #a855f7, #ec4899) 1" : undefined
              }}
              >
                
                {/* Period Tag (Mobile) */}
                <div className="md:hidden inline-block mb-3">
                  <span className="text-xs font-bold px-2.5 py-1 rounded-lg bg-gradient-to-r from-cyan-500/10 to-purple-500/10 text-cyan-300 border border-cyan-500/40">
                    {item.period}
                  </span>
                </div>

                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-3">
                  <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h3>
                  <span className="text-xs font-semibold text-cyan-400 flex items-center gap-1.5 bg-slate-950/80 px-3 py-1 rounded-full border border-slate-800 w-fit shadow-inner">
                    <MapPin size={12} /> {item.location}
                  </span>
                </div>

                <h4 className="text-sm font-semibold text-slate-300 mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 animate-pulse"></span>
                  {item.organization}
                </h4>

                <ul className="space-y-2 mb-6">
                  {item.description.map((desc, i) => (
                    <li key={i} className="text-slate-400 text-xs md:text-sm flex items-start gap-2 leading-relaxed">
                      <span className="text-purple-400 mt-1">•</span>
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-2 pt-3 border-t border-slate-800/80">
                  {item.skills.map((skill, i) => (
                    <span 
                      key={i} 
                      className="text-[11px] font-medium px-3 py-1 rounded-lg bg-slate-950/80 text-slate-300 border border-slate-800/80 hover:border-purple-500/50 transition-colors shadow-inner"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}