"use client";
import React, { useState } from "react";

export default function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.currentTarget);

    // 👉 ঠিক এইখানে আপনার Web3Forms এর Access Key টি বসান (কোটেশন চিহ্নের ভেতরে)
    formData.append("access_key", "2cf252d2-d17f-4e54-a68e-1498a0068c9e");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Message sent successfully!");
      event.currentTarget.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-12 relative z-10 max-w-3xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-3">
          Get In <span className="text-purple-400">Touch</span>
        </h2>
        <p className="text-slate-400 text-sm md:text-base max-w-xl mx-auto">
          Have a project in mind or want to collaborate? Send a message below. <br />
          Or email me directly at: <a href="mailto:contact@uptotechsyl.com" className="text-purple-400 hover:underline">contact@uptotechsyl.com</a>
        </p>
      </div>

      <div className="bg-slate-900/50 p-8 rounded-2xl border border-slate-800/80 backdrop-blur-md shadow-xl">
        <form onSubmit={onSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Your Name</label>
              <input
                type="text"
                name="name"
                required
                placeholder="John Doe"
                className="w-full px-4 py-3 rounded-lg bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-purple-500 transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Your Email</label>
              <input
                type="email"
                name="email"
                required
                placeholder="john@example.com"
                className="w-full px-4 py-3 rounded-lg bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-purple-500 transition-colors"
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">Message</label>
            <textarea
              name="message"
              required
              rows={5}
              placeholder="How can I help you?"
              className="w-full px-4 py-3 rounded-lg bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-purple-500 transition-colors resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3 px-6 rounded-lg bg-purple-500 hover:bg-purple-600 text-slate-950 font-bold tracking-wide transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/30"
          >
            Send Message
          </button>
        </form>
        
        {/* ফর্ম সাবমিট হওয়ার পর সাকসেস বা এরর মেসেজ দেখাবে */}
        {result && (
          <div className="mt-4 text-center text-sm font-medium text-purple-400">
            {result}
          </div>
        )}
      </div>
    </section>
  );
}