"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { 
  LayoutDashboard, 
  User, 
  Briefcase, 
  Code, 
  Layers, 
  Mail, 
  ArrowRight, 
  ChevronDown, 
  ChevronUp,
  Cpu,
  Globe,
  Server,
  MessageCircle
} from "lucide-react";

// কাউন্টার অ্যানিমেশন হুক
function useCounter(end: number, duration: number = 2000) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, duration]);

  return count;
}

const roles = [
  "Full-Stack MERN Developer",
  "React & Next.js Expert",
  "Frontend, Backend Developer",
  "Web Designer & Developer"
];

export default function Hero() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);
  
  const [isSkillsOpen, setIsSkillsOpen] = useState(false);

  useEffect(() => {
    const fullText = roles[currentRoleIndex];

    const handleTyping = () => {
      if (!isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        if (currentText === fullText) {
          setTimeout(() => setIsDeleting(true), 2000);
          setTypingSpeed(100);
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        if (currentText === "") {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
          setTypingSpeed(150);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentRoleIndex, typingSpeed]);

  const expCount = useCounter(3);
  const projectCount = useCounter(20);
  const clientCount = useCounter(15);
  const techCount = useCounter(10);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col pt-20 px-4 md:px-10">
      <div className="flex flex-col lg:flex-row gap-6 max-w-7xl mx-auto w-full my-6">
        
        {/* বামপাশে ড্যাশবোর্ড সাইডবার (শুধুমাত্র ডেস্কটপে দেখাবে, মোবাইলে hidden) */}
        <div 
          className="hidden lg:flex w-64 p-6 rounded-3xl backdrop-blur-xl flex-col justify-between shrink-0 h-fit"
          style={{
            background: "linear-gradient(to bottom right, rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.4))",
            border: "2px solid transparent",
            backgroundImage: "linear-gradient(rgba(15, 23, 42, 0.9), rgba(15, 23, 42, 0.9)), linear-gradient(to right, #06b6d4, #a855f7, #ec4899)",
            backgroundOrigin: "border-box",
            backgroundClip: "padding-box, border-box",
            boxShadow: "0 0 35px rgba(6, 182, 212, 0.12), inset 0 0 20px rgba(168, 85, 247, 0.08)"
          }}
        >
          <div>
            <div className="flex items-center gap-3 mb-8 pb-4 border-b border-slate-800">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold border border-cyan-500/30">
                FK
              </div>
              <div>
                <h3 className="text-sm font-bold text-white">Farhana Khatun</h3>
                <span className="text-[10px] text-cyan-400 font-medium">HR of UptoTechSyl</span>
              </div>
            </div>

            <nav className="space-y-2">
              <a href="#dashboard" className="flex items-center gap-3 px-4 py-3 rounded-xl bg-cyan-500 text-slate-950 font-semibold text-sm shadow-lg shadow-cyan-500/20">
                <LayoutDashboard size={18} /> Dashboard
              </a>
              <a href="#about" className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800/65 transition-all text-sm font-medium">
                <User size={18} /> About Me
              </a>
              <a href="#experience" className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800/65 transition-all text-sm font-medium">
                <Briefcase size={18} /> Experience
              </a>

              {/* স্কিলস ড্রপডাউন মেনু */}
              <div>
                <button 
                  onClick={() => setIsSkillsOpen(!isSkillsOpen)}
                  className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800/65 transition-all text-sm font-medium"
                >
                  <span className="flex items-center gap-3">
                    <Code size={18} /> Skills
                  </span>
                  {isSkillsOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>

                {isSkillsOpen && (
                  <div className="pl-9 pr-2 py-2 space-y-1 mt-1 border-l-2 border-cyan-500/40 ml-4">
                    <a href="#skills" className="flex items-center gap-2 py-1.5 text-xs text-slate-400 hover:text-cyan-400 transition-colors">
                      <Server size={14} /> MERN Dev
                    </a>
                    <a href="#skills" className="flex items-center gap-2 py-1.5 text-xs text-slate-400 hover:text-cyan-400 transition-colors">
                      <Cpu size={14} /> React
                    </a>
                    <a href="#skills" className="flex items-center gap-2 py-1.5 text-xs text-slate-400 hover:text-cyan-400 transition-colors">
                      <Globe size={14} /> Next Dev
                    </a>
                    <a href="#skills" className="flex items-center gap-2 py-1.5 text-xs text-slate-400 hover:text-cyan-400 transition-colors">
                      <Layers size={14} /> Full Stack Dev
                    </a>
                  </div>
                )}
              </div>

              <a href="#services" className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800/65 transition-all text-sm font-medium">
                <Layers size={18} /> Services
              </a>
              <a href="#contact" className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800/65 transition-all text-sm font-medium">
                <Mail size={18} /> Contact
              </a>
            </nav>
          </div>

          <div className="mt-8 pt-4 border-t border-slate-800 text-center text-xs text-slate-500">
            © 2026 Farhana Khatun
          </div>
        </div>

        {/* ডানপাশে মূল কন্টেন্ট */}
        <div className="flex-1 flex flex-col gap-6">
          <div 
            className="p-8 md:p-10 rounded-3xl backdrop-blur-2xl flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden group"
            style={{
              background: "linear-gradient(to bottom right, rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.4))",
              border: "2px solid transparent",
              backgroundImage: "linear-gradient(rgba(15, 23, 42, 0.9), rgba(15, 23, 42, 0.9)), linear-gradient(to right, #06b6d4, #a855f7, #ec4899)",
              backgroundOrigin: "border-box",
              backgroundClip: "padding-box, border-box",
              boxShadow: "0 0 35px rgba(6, 182, 212, 0.12), inset 0 0 20px rgba(168, 85, 247, 0.08)"
            }}
          >
            {/* Background Glow Accent */}
            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none"></div>

            <div className="space-y-4 text-center md:text-left flex-1 relative z-10">
              <div className="inline-block px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold tracking-wide shadow-sm">
                ✨ AVAILABLE FOR FREELANCE & FULL-TIME ROLES
              </div>
              <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
                FARHANA KHATUN
              </h1>
              <div className="text-lg md:text-2xl font-bold text-cyan-400 h-8 flex items-center justify-center md:justify-start gap-1">
                <span>{currentText}</span>
                <span className="w-0.5 h-6 bg-cyan-400 animate-pulse"></span>
              </div>
              <p className="text-slate-400 text-xs md:text-sm leading-relaxed max-w-xl">
                Passionate Full-Stack Developer & Executive Officer specializing in MERN Stack technologies. Experienced in building responsive web applications and robust digital platforms.
              </p>

              {/* বাটন এবং সোশ্যাল লিংকসমূহ */}
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-2">
                <a href="#projects" className="px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm transition-all shadow-lg shadow-cyan-500/25 flex items-center gap-2">
                  View My Work <ArrowRight size={16} />
                </a>
                
                {/* নতুন সিভি ডাউনলোড বাটন */}
                <a 
                  href="/farhana-khatun-cv.pdf" 
                  download="Farhana_Khatun_CV.pdf"
                  className="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-cyan-400 font-semibold text-sm border border-cyan-500/30 transition-all flex items-center gap-2 shadow-md hover:border-cyan-500"
                >
                  Download CV
                </a>

                <a href="#contact" className="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm border border-slate-700 transition-all flex items-center gap-2">
                  Get In Touch
                </a>

                {/* সোশ্যাল আইকন লিংক */}
                <div className="flex items-center gap-2 pl-2 border-l border-slate-800">
                  <a 
                    href="https://github.com/Farhana57" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-all shadow-md flex items-center justify-center"
                    title="GitHub"
                  >
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="18" width="18" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.22 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                    </svg>
                  </a>
                  <a 
                    href="https://linkedin.com/in/farhana-khatun-828691405" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-all shadow-md flex items-center justify-center"
                    title="LinkedIn"
                  >
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="18" width="18" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.21c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.21V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"></path>
                    </svg>
                  </a>
                  <a 
                    href="https://wa.me/8801759945057" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-all shadow-md flex items-center justify-center"
                    title="WhatsApp"
                  >
                    <MessageCircle size={18} />
                  </a>
                </div>
              </div>
            </div>

            {/* ডানপাশে ছবি */}
            <div className="relative group shrink-0 z-10">
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-cyan-500 to-blue-600 opacity-30 blur-lg group-hover:opacity-50 transition duration-500"></div>
              <div className="relative w-44 h-44 md:w-56 md:h-56 rounded-3xl overflow-hidden border-2 border-cyan-500/40 bg-slate-950 shadow-2xl">
                <Image 
                  src="/my-img.jpeg" 
                  alt="Farhana Khatun" 
                  fill 
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* অটো-কাউন্টিং স্ট্যাটস কার্ড */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div 
              className="p-6 rounded-2xl text-center backdrop-blur-xl transition-all duration-300 hover:scale-[1.02]"
              style={{
                background: "linear-gradient(to bottom right, rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.4))",
                border: "2px solid transparent",
                backgroundImage: "linear-gradient(rgba(15, 23, 42, 0.9), rgba(15, 23, 42, 0.9)), linear-gradient(to right, #06b6d4, #a855f7)",
                backgroundOrigin: "border-box",
                backgroundClip: "padding-box, border-box",
                boxShadow: "0 0 25px rgba(6, 182, 212, 0.1)"
              }}
            >
              <h2 className="text-2xl md:text-3xl font-extrabold text-cyan-400 mb-1">{expCount}+</h2>
              <p className="text-xs font-medium uppercase tracking-wider text-slate-400">Years Experience</p>
            </div>
            <div 
              className="p-6 rounded-2xl text-center backdrop-blur-xl transition-all duration-300 hover:scale-[1.02]"
              style={{
                background: "linear-gradient(to bottom right, rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.4))",
                border: "2px solid transparent",
                backgroundImage: "linear-gradient(rgba(15, 23, 42, 0.9), rgba(15, 23, 42, 0.9)), linear-gradient(to right, #06b6d4, #a855f7)",
                backgroundOrigin: "border-box",
                backgroundClip: "padding-box, border-box",
                boxShadow: "0 0 25px rgba(6, 182, 212, 0.1)"
              }}
            >
              <h2 className="text-2xl md:text-3xl font-extrabold text-cyan-400 mb-1">{projectCount}+</h2>
              <p className="text-xs font-medium uppercase tracking-wider text-slate-400">Projects Completed</p>
            </div>
            <div 
              className="p-6 rounded-2xl text-center backdrop-blur-xl transition-all duration-300 hover:scale-[1.02]"
              style={{
                background: "linear-gradient(to bottom right, rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.4))",
                border: "2px solid transparent",
                backgroundImage: "linear-gradient(rgba(15, 23, 42, 0.9), rgba(15, 23, 42, 0.9)), linear-gradient(to right, #06b6d4, #a855f7)",
                backgroundOrigin: "border-box",
                backgroundClip: "padding-box, border-box",
                boxShadow: "0 0 25px rgba(6, 182, 212, 0.1)"
              }}
            >
              <h2 className="text-2xl md:text-3xl font-extrabold text-cyan-400 mb-1">{clientCount}+</h2>
              <p className="text-xs font-medium uppercase tracking-wider text-slate-400">Happy Clients</p>
            </div>
            <div 
              className="p-6 rounded-2xl text-center backdrop-blur-xl transition-all duration-300 hover:scale-[1.02]"
              style={{
                background: "linear-gradient(to bottom right, rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.4))",
                border: "2px solid transparent",
                backgroundImage: "linear-gradient(rgba(15, 23, 42, 0.9), rgba(15, 23, 42, 0.9)), linear-gradient(to right, #06b6d4, #a855f7)",
                backgroundOrigin: "border-box",
                backgroundClip: "padding-box, border-box",
                boxShadow: "0 0 25px rgba(6, 182, 212, 0.1)"
              }}
            >
              <h2 className="text-2xl md:text-3xl font-extrabold text-cyan-400 mb-1">{techCount}+</h2>
              <p className="text-xs font-medium uppercase tracking-wider text-slate-400">Technologies</p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}