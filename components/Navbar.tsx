"use client";
import React, { useState, useEffect } from "react";
import { Menu, X, Code2 } from "lucide-react";

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-950/80 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-cyan-950/20 py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* লোগো বা ব্র্যান্ড নেম */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-purple-400 group-hover:bg-cyan-500/20 transition-colors">
            <Code2 size={20} />
          </div>
          <span className="font-bold text-lg tracking-wide text-white">
            Farhana<span className="text-purple-400">.</span>
          </span>
        </a>

        {/* ডেস্কটপ মেনু */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <a href="#about" className="hover:text-purple-500 transition-colors">About</a>
          <a href="#skills" className="hover:text-purple-500 transition-colors">Skills</a>
          <a href="#projects" className="hover:text-purple-500 transition-colors">Projects</a>
          <a href="#contact" className="hover:text-purple-400 transition-colors">Contact</a>
        </nav>

        {/* ডানপাশের কল টু অ্যাকশন বাটন */}
        <div className="hidden md:block">
          <a
            href="#contact"
            className="px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-cyan-500/10 border border-cyan-500/40 text-cyan-400 hover:bg-cyan-500 hover:text-slate-950 transition-all duration-300 shadow-sm shadow-cyan-500/10"
          >
            Let's Talk
          </a>
        </div>

        {/* মোবাইল মেনু বাটন */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-slate-300 hover:text-purple-400 transition-colors p-1"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* মোবাইল ড্রপডাউন মেনু */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-slate-950/95 border-b border-slate-800/80 backdrop-blur-xl px-6 py-6 flex flex-col gap-4 md:hidden shadow-2xl">
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="text-slate-300 hover:text-cyan-400 font-medium py-1"
          >
            About
          </a>
          <a
            href="#skills"
            onClick={() => setMobileMenuOpen(false)}
            className="text-slate-300 hover:text-cyan-400 font-medium py-1"
          >
            Skills
          </a>
          <a
            href="#projects"
            onClick={() => setMobileMenuOpen(false)}
            className="text-slate-300 hover:text-cyan-400 font-medium py-1"
          >
            Projects
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="text-slate-300 hover:text-cyan-400 font-medium py-1"
          >
            Contact
          </a>
          <div className="pt-2">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center block py-3 rounded-xl text-xs font-semibold uppercase tracking-wider bg-purple-500 text-slate-950 shadow-md shadow-purple-500/50"
            >
              Let's Talk
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;