"use client";
import React, { useState } from "react";
import Image from "next/image";

const projectsData = [
  {
    id: 1,
    title: "UpToTechSyl Agency Platform",
    category: "Web Design",
    description: "Corporate portfolio and branding platform built with Next.js & Tailwind CSS.",
    tags: ["Next.js", "Tailwind", "MongoDB"],
    liveLink: "https://uptotechsyl.com",
    githubLink: "https://github.com",
    image: "/uptotech..jpeg",
  },
  {
    id: 2,
    title: "Zaman Traders BD",
    category: "Full Stack",
    description: "Professional e-commerce business platform with dynamic product catalogs.",
    tags: ["React.js", "Node.js", "MongoDB"],
    liveLink: "https://zamantradersbd.com",
    githubLink: "https://github.com",
    image: "/zamantraders.jpeg",
  },
  {
    id: 3,
    title: "Aaryan Sourcing",
    category: "E-Commerce",
    description: "International trade sourcing and e-commerce platform with clean UI.",
    tags: ["Next.js", "React", "Tailwind"],
    liveLink: "https://www.aaryansourcing.com",
    githubLink: "https://github.com",
    image: "/aaryansourcing.jpeg",
  }
];

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const filteredProjects = filter === "All" 
    ? projectsData 
    : projectsData.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-20 px-4 md:px-10 max-w-6xl mx-auto">
      <div className="text-center mb-16 space-y-3">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
          Featured Projects
        </h2>
        <p className="text-slate-400 text-sm max-w-xl mx-auto">
          A showcase of my recent full-stack applications and digital solutions.
        </p>

        {/* ফিল্টার বাটন */}
        <div className="flex flex-wrap justify-center gap-2 pt-4">
          {["All", "Full Stack", "E-Commerce", "Web Design"].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all border ${
                filter === cat
                  ? "bg-cyan-500 text-slate-950 border-cyan-400 shadow-lg shadow-cyan-500/20"
                  : "bg-slate-900/60 text-slate-300 border-slate-800 hover:border-slate-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* প্রজেক্ট গ্রিড */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="group relative p-[2px] rounded-3xl overflow-hidden shadow-2xl transition-transform duration-500 hover:scale-105"
          >
            {/* ব্যাকগ্রাউন্ডে রোটেটিং কালার বা বর্ডার গ্লো অ্যানিমেশন */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-3xl opacity-75 group-hover:opacity-100 transition-opacity animate-pulse"></div>

            {/* মেইন কার্ড কন্টেন্ট */}
            <div className="relative bg-slate-950 rounded-[22px] overflow-hidden flex flex-col justify-between h-full p-2">
              <div>
                {/* বড় থাম্বনেইল ইমেজ প্রিভিউ */}
                <div className="h-56 bg-slate-900 rounded-2xl relative overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent z-10" />
                  <span className="absolute top-3 right-3 z-20 text-[10px] font-bold px-3 py-1 rounded-full bg-slate-900/90 text-cyan-400 border border-slate-700 backdrop-blur-md">
                    {project.category}
                  </span>
                </div>

                {/* টেক্সট ও বিবরণ (কম সংক্ষিপ্ত আকারে) */}
                <div className="p-4 space-y-2">
                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-xs leading-relaxed line-clamp-2">
                    {project.description}
                  </p>

                  {/* টেকনোলজি ট্যাগ */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-[10px] font-medium px-2.5 py-0.5 rounded bg-slate-900 text-cyan-300 border border-cyan-500/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* ফুটার লিংকস */}
              <div className="p-4 pt-0 flex items-center justify-between border-t border-slate-900/80 mt-2">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-slate-400 hover:text-white transition-colors"
                >
                  Source Code
                </a>
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold px-4 py-1.5 rounded-xl bg-cyan-500 text-slate-950 hover:bg-cyan-400 transition-all shadow-md shadow-cyan-500/20"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}