"use client";
import React, { useState, useEffect } from "react";
import { 
  SiReact, 
  SiTypescript, 
  SiNodedotjs, 
  SiTailwindcss, 
  SiMongodb, 
  SiNextdotjs, 
  SiJavascript,
  SiBootstrap
} from "react-icons/si";

const skillsData = [
  { name: "React", category: "Frontend", level: "90% Proficiency", exp: "3+ years", projects: "10+", icon: SiReact, color: "text-cyan-400", desc: "Building modern web applications with React, including context and state management." },
  { name: "TypeScript", category: "Language", level: "85% Proficiency", exp: "2+ years", projects: "8+", icon: SiTypescript, color: "text-blue-400", desc: "Developing type-safe applications with TypeScript, including advanced types and interfaces." },
  { name: "Node.js", category: "Backend", level: "80% Proficiency", exp: "3+ years", projects: "12+", icon: SiNodedotjs, color: "text-green-500", desc: "Creating backend services and APIs using Node.js and Express." },
  { name: "Tailwind", category: "Styling", level: "95% Proficiency", exp: "3+ years", projects: "15+", icon: SiTailwindcss, color: "text-teal-400", desc: "Building responsive and modern user interfaces with Tailwind CSS." },
  { name: "MongoDB", category: "Database", level: "75% Proficiency", exp: "2+ years", projects: "8+", icon: SiMongodb, color: "text-green-400", desc: "Database management, schema design, and querying with MongoDB." },
  { name: "Next.js", category: "Framework", level: "88% Proficiency", exp: "2+ years", projects: "9+", icon: SiNextdotjs, color: "text-white", desc: "Server-side rendering, App Router, and full-stack performance optimization." },
  { name: "Javascript", category: "Language", level: "92% Proficiency", exp: "4+ years", projects: "20+", icon: SiJavascript, color: "text-yellow-400", desc: "Core language mastery for both client-side and server-side scripting." },
  { name: "Bootstrap", category: "Styling", level: "90% Proficiency", exp: "3+ years", projects: "15+", icon: SiBootstrap, color: "text-purple-500", desc: "Designing responsive websites quickly using Bootstrap framework." }
];

const Skills: React.FC = () => {
  const [viewMode, setViewMode] = useState<"grid" | "cloud" | "solar">("grid");
  const [selectedSkill, setSelectedSkill] = useState(skillsData[0]);
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    if (viewMode === "solar" || viewMode === "cloud") {
      const interval = setInterval(() => {
        setRotation((prev) => (prev + 0.5) % 360);
      }, 50);
      return () => clearInterval(interval);
    }
  }, [viewMode]);

  return (
    <section id="skills" className="py-24 px-6 md:px-12 relative z-10 max-w-7xl mx-auto overflow-hidden">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-3">
          Technical <span className="text-purple-400">Expertise</span>
        </h2>
        <p className="text-slate-400 text-sm md:text-base max-w-xl mx-auto mb-6">
          Explore my core technologies and technical proficiency.
        </p>

        {/* View Toggle Buttons */}
        <div className="flex flex-wrap justify-center items-center gap-3">
          <button
            onClick={() => setViewMode("grid")}
            className={`px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
              viewMode === "grid"
                ? "bg-purple-500 text-slate-950 shadow-lg shadow-purple-500/20"
                : "bg-slate-900/80 border border-slate-800 text-slate-300 hover:border-purple-500/50"
            }`}
          >
            Auto Marquee View
          </button>
          <button
            onClick={() => setViewMode("cloud")}
            className={`px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
              viewMode === "cloud"
                ? "bg-purple-500 text-slate-950 shadow-lg shadow-purple-500/20"
                : "bg-slate-900/80 border border-slate-800 text-slate-300 hover:border-purple-500/50"
            }`}
          >
            Cloud View
          </button>
          <button
            onClick={() => setViewMode("solar")}
            className={`px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
              viewMode === "solar"
                ? "bg-purple-500 text-slate-950 shadow-lg shadow-purple-500/20"
                : "bg-slate-900/80 border border-slate-800 text-slate-300 hover:border-purple-500/50"
            }`}
          >
            Solar View
          </button>
        </div>
      </div>

      {/* Grid / Auto Marquee View */}
      {viewMode === "grid" && (
        <div className="relative w-full overflow-hidden py-4">
          <div className="flex w-max animate-marquee gap-6 hover:[animation-play-state:paused]">
            {[...skillsData, ...skillsData].map((skill, index) => {
              const IconComponent = skill.icon;
              return (
                <div
                  key={index}
                  className="w-72 group p-6 rounded-2xl bg-slate-900/50 border border-slate-800/80 hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/20 backdrop-blur-md transition-all duration-300 cursor-pointer flex-shrink-0"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/50 group-hover:border-purple-500/50 transition-colors">
                      <IconComponent size={24} className={skill.color} />
                    </div>
                    <span className="text-[10px] font-semibold uppercase tracking-widest px-2.5 py-1 rounded-full bg-slate-800 text-purple-400">
                      {skill.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{skill.name}</h3>
                  <p className="text-slate-400 text-xs leading-relaxed">{skill.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Cloud View */}
      {viewMode === "cloud" && (
        <div className="py-16 px-4 rounded-3xl bg-slate-900/40 border border-slate-800 backdrop-blur-xl flex flex-col lg:flex-row items-center justify-around gap-10 min-h-[450px] relative overflow-hidden">
          <div className="relative w-[300px] h-[300px] flex items-center justify-center">
            {skillsData.map((skill, index) => {
              const angle = ((index / skillsData.length) * 360 + rotation) * (Math.PI / 180);
              const radius = 120;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;
              const IconComp = skill.icon;
              const isSelected = selectedSkill.name === skill.name;

              return (
                <div
                  key={index}
                  className="absolute cursor-pointer transition-transform duration-100 hover:scale-110"
                  style={{ transform: `translate(${x}px, ${y}px)` }}
                  onMouseEnter={() => setSelectedSkill(skill)}
                  onClick={() => setSelectedSkill(skill)}
                >
                  <div className={`p-3 rounded-2xl border backdrop-blur-md flex items-center justify-center transition-all duration-300 ${isSelected ? "bg-purple-500 text-slate-950 border-white scale-125 shadow-lg shadow-purple-500/50" : "bg-slate-950 border-slate-700 hover:border-purple-400 hover:shadow-md hover:shadow-purple-500/30"}`}>
                    <IconComp size={22} className={isSelected ? "text-slate-950" : skill.color} />
                  </div>
                </div>
              );
            })}
          </div>

          <div className="w-full lg:w-96 p-6 rounded-2xl bg-slate-950/90 border border-purple-500/30 shadow-2xl backdrop-blur-xl">
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-lg font-bold text-white flex items-center gap-2">
                <selectedSkill.icon size={22} className={selectedSkill.color} />
                {selectedSkill.name}
              </h4>
              <span className="text-xs font-semibold text-purple-400">{selectedSkill.level}</span>
            </div>
            <p className="text-slate-300 text-xs leading-relaxed mb-4">{selectedSkill.desc}</p>
            <div className="flex justify-between border-t border-slate-800 pt-3 text-xs text-slate-400">
              <span>Experience: <strong className="text-white">{selectedSkill.exp}</strong></span>
              <span>Projects: <strong className="text-white">{selectedSkill.projects}</strong></span>
            </div>
          </div>
        </div>
      )}

      {/* Solar View */}
      {viewMode === "solar" && (
        <div className="py-20 px-4 rounded-3xl bg-slate-900/30 border border-slate-800/80 backdrop-blur-xl flex flex-col lg:flex-row items-center justify-around gap-10 min-h-[520px] relative overflow-hidden">
          <div className="absolute w-[240px] h-[240px] rounded-full border border-slate-800 pointer-events-none"></div>
          <div className="absolute w-[360px] h-[360px] rounded-full border border-purple-500/20 pointer-events-none"></div>

          <div className="absolute z-10 p-6 rounded-full bg-purple-500/20 border border-purple-500/40 text-purple-300 shadow-2xl shadow-purple-500/30 flex items-center justify-center w-24 h-24 text-center backdrop-blur-xl">
            <span className="text-xs font-bold uppercase tracking-wider text-white">Skills</span>
          </div>

          <div className="relative w-[380px] h-[380px] flex items-center justify-center">
            {skillsData.map((skill, index) => {
              const angle = ((index / skillsData.length) * 360 + rotation * 0.8) * (Math.PI / 180);
              const radius = index % 2 === 0 ? 130 : 180;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;
              const IconComp = skill.icon;
              const isSelected = selectedSkill.name === skill.name;

              return (
                <div
                  key={index}
                  className="absolute cursor-pointer transition-transform duration-100 hover:scale-110"
                  style={{ transform: `translate(${x}px, ${y}px)` }}
                  onMouseEnter={() => setSelectedSkill(skill)}
                  onClick={() => setSelectedSkill(skill)}
                >
                  <div className={`p-3 rounded-2xl border backdrop-blur-md flex items-center justify-center transition-all duration-300 ${isSelected ? "bg-purple-500 text-slate-950 border-white scale-125 shadow-xl shadow-purple-500/50" : "bg-slate-950 border-slate-700 hover:border-purple-400 hover:shadow-md hover:shadow-purple-500/30"}`}>
                    <IconComp size={22} className={isSelected ? "text-slate-950" : skill.color} />
                  </div>
                </div>
              );
            })}
          </div>

          <div className="w-full lg:w-96 p-6 rounded-2xl bg-slate-950/90 border border-purple-500/30 shadow-2xl backdrop-blur-xl relative z-20">
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-lg font-bold text-white flex items-center gap-2">
                <selectedSkill.icon size={22} className={selectedSkill.color} />
                {selectedSkill.name}
              </h4>
              <span className="text-xs font-semibold text-purple-400">{selectedSkill.level}</span>
            </div>
            <p className="text-slate-300 text-xs leading-relaxed mb-4">{selectedSkill.desc}</p>
            <div className="flex justify-between border-t border-slate-800 pt-3 text-xs text-slate-400">
              <span>Experience: <strong className="text-white">{selectedSkill.exp}</strong></span>
              <span>Projects: <strong className="text-white">{selectedSkill.projects}</strong></span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Skills;