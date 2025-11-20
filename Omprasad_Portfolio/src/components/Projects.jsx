import React from "react";

const projects = [
  { title: "Query-AI", desc: "Natural language to SQL converter using Gemini + Flask + MySQL." },
  { title: "Auxlirium", desc: "College database management system built in Java + MySQL." },
  { title: "Desi QnA (Frontend)", desc: "Q&A UI platform with verification + reCAPTCHA." }
];

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen bg-black text-white px-10 py-24">
      <h2 className="text-4xl font-bold text-green-400 text-center mb-16">Projects</h2>

      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto fade-slide">
        {projects.map((p) => (
          <div
            key={p.title}
            className="card-hover bg-gray-900 p-6 rounded-xl border border-green-500/20"
          >
            <h3 className="text-2xl font-semibold">{p.title}</h3>
            <p className="text-gray-300 mt-2">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
