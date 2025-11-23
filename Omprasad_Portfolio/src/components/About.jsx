import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen bg-black text-white px-10 py-20 flex flex-col md:flex-row justify-center items-center gap-16 relative overflow-hidden"
    >
      {/* Glow */}
      <div className="section-glow"></div>

      {/* Floating icons */}
      <span className="floating-icon text-yellow-400 text-3xl top-10 left-10">JS</span>
      <span className="floating-icon text-green-400 text-4xl bottom-16 right-20">⚛</span>
      <span className="floating-icon text-orange-400 text-3xl top-52 right-16">HTML</span>
      <span className="floating-icon text-blue-400 text-4xl bottom-20 left-24">🐍</span>

      <div className="flex-1 fade-slide">
        <h2 className="text-4xl font-bold text-green-400 mb-8">About me</h2>

        <p className="text-gray-300 text-lg leading-relaxed max-w-xl">
          Hi there! I’m Omprasad Á K, an enthusiastic Software Engineer skilled
          in web development, machine learning, and scalable software solutions.
          <br /><br />
          I build responsive web applications, fine-tune ML models, and implement robust backend services.
          <br /><br />
          I also work with CMS platforms like WordPress and Shopify.
        </p>

        <h3 className="text-green-400 text-xl mt-10">Education:</h3>
        <p className="text-gray-300 mt-1">
          <strong>Bachelor of Engineering (B.E.)</strong><br />
          Impact College of Engineering, Bengaluru <br />
          2021–2025
        </p>

        <h3 className="text-green-400 text-xl mt-10">Experience:</h3>
        <p className="text-gray-300 mt-1">
          <strong>Java Full Stack Intern</strong><br />
          Dhee Coding Lab | Nov 2024 – Jun 2025 <br />
          Bengaluru
        </p>
      </div>

      <div className="flex-1 flex justify-center fade-slide">
        <img
          src="/assets/about-avatar.png"
          className="w-64 md:w-80 rounded-full"
          alt="about-avatar"
        />
      </div>
    </section>
  );
};

export default About;
