"use client";
import React from "react";
import { Code, Rocket, Palette, Coffee } from "lucide-react";

const aboutCards = [
  {
    icon: Code,
    title: "Full-Stack Development",
    description: "Building scalable web apps with Next.js, React, Node.js, and modern tech stacks.",
  },
  {
    icon: Rocket,
    title: "Performance & UI/UX",
    description: "Focusing on high-speed performance, clean code, and exceptional user experiences.",
  },
  {
    icon: Palette,
    title: "Creative Design",
    description: "Implementing pixel-perfect designs and fluid animations using Tailwind CSS.",
  },
  {
    icon: Coffee,
    title: "Problem Solver",
    description: "Continuously learning and tackling complex challenges to deliver robust solutions.",
  }
];

export default function AboutMe() {
  return (
    <section id="about" className="py-20 px-4 md:px-10 max-w-6xl mx-auto overflow-hidden">
      {/* সেকশন টাইটেল */}
      <div className="text-center mb-16 space-y-3">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          Who <span className="text-purple-400">I Am</span>
        </h2>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
          A passionate Full Stack Developer dedicated to crafting digital solutions that blend aesthetic design with high-performance functionality.
        </p>
      </div>

      {/* গ্রিড লেআউট */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {aboutCards.map((card, index) => {
          const IconComponent = card.icon;
          return (
            <div
              key={index}
              className="group relative p-8 rounded-3xl bg-slate-900/80 border border-slate-800 transition-all duration-500 hover:border-purple-500/50 hover:shadow-[0_0_35px_-5px_rgba(168,85,247,0.2)] overflow-hidden"
            >
              {/* ১. আইকন (উপরে) */}
              <div className="relative z-10 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-center text-purple-400 group-hover:text-white group-hover:bg-purple-600 transition-all duration-500 shadow-inner">
                  <IconComponent className="w-7 h-7" strokeWidth={1.5} />
                </div>
              </div>

              {/* ২. কন্টেন্ট */}
              <div className="relative z-10 space-y-3 mb-12">
                <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300">
                  {card.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {card.description}
                </p>
              </div>

              {/* ৩. নিচের লম্বা লাইন ও কোণ থেকে পার্পল বৃত্ত ভেসে ওঠার অ্যানিমেশন */}
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-slate-800">
                <div className="absolute bottom-0 left-0 w-full h-full bg-purple-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-in-out"></div>
                <div className="absolute -bottom-1 left-0 w-2.5 h-2.5 rounded-full bg-purple-400 opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-all"></div>
                <div className="absolute -top-1 left-0 w-3 h-3 rounded-full bg-purple-400 shadow-[0_0_12px_#c084fc] transform translate-y-2 opacity-0 group-hover:opacity-100 group-hover:-translate-y-16 transition-all duration-700 ease-out"></div>
              </div>

            </div>
          );
        })}
      </div>
    </section>
  );
}