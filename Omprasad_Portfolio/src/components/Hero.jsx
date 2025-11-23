import React from "react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen w-full bg-black text-white flex flex-col md:flex-row justify-center items-center px-10 pt-32 relative overflow-hidden"
    >
      {/* Green glowing background */}
      <div className="section-glow"></div>

      {/* Floating Icons */}
      <span className="floating-icon text-yellow-400 text-3xl top-20 left-16">JS</span>
      <span className="floating-icon text-green-400 text-4xl top-40 right-14">⚛</span>
      <span className="floating-icon text-orange-400 text-3xl bottom-32 right-20">HTML</span>
      <span className="floating-icon text-blue-400 text-4xl bottom-20 left-20">🐍</span>

      {/* LEFT TEXT */}
      <div className="flex-1 fade-slide">
        <p className="text-gray-300 text-lg mb-1">Hello, I'm</p>

        <h1 className="text-5xl font-extrabold">Omprasad A Katkar</h1>

        <h2 className="text-3xl text-green-400 mt-4 font-semibold">
          Aspiring Software Engineer
        </h2>

        <p className="text-gray-300 text-lg mt-2">Java Full Stack Developer</p>

        <div className="flex gap-4 mt-8">
          <a href="#projects" className="px-8 py-3 bg-green-500 text-black rounded-full text-lg hover:bg-green-400">
            View Projects
          </a>

          <a href="#contact" className="px-8 py-3 border border-green-500 rounded-full text-lg text-green-500 hover:bg-green-500 hover:text-black">
            Contact Me
          </a>
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="flex-1 flex justify-center mt-10 md:mt-0">
        <img
          src="/assets/hero-avatar.png"
          alt="avatar"
          className="w-72 md:w-96 glow"
        />
      </div>
    </section>
  );
};

export default Hero;
