import React from 'react';
import { Code, ShoppingBag, Palette } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Code className="w-8 h-8 text-purple-400" />,
      title: "Full-Stack Web Development",
      description: "Building scalable, high-performance, and secure web applications using the modern MERN stack."
    },
    {
      icon: <ShoppingBag className="w-8 h-8 text-purple-400" />,
      title: "E-Commerce Solutions",
      description: "Designing and developing robust online stores and e-commerce platforms (such as boisell.com)."
    },
    {
      icon: <Palette className="w-8 h-8 text-purple-400" />,
      title: "UI/UX & Branding Design",
      description: "Crafting modern logos, branding materials, and engaging user interfaces for digital products."
    }
  ];

  return (
    <section id="services" className="py-20 px-4 md:px-10 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-3">My Services</h2>
        <p className="text-slate-400 text-sm max-w-xl mx-auto">Professional web development and design services I offer to bring your ideas to life</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div 
            key={index} 
            className="p-8 rounded-3xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-xl shadow-xl shadow-cyan-950/20 hover:border-purple-500 hover:shadow-cyan-500/10 transition-all duration-300 group"
          >
            <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              {service.icon}
            </div>
            <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}