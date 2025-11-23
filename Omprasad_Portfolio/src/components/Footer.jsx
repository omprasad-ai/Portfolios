import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white text-center py-10 mt-20 relative overflow-hidden">

      <div className="section-glow bottom-0 left-1/3"></div>

      {/* Floating icons */}
      <span className="floating-icon text-green-400 text-4xl top-8 left-16">⚛</span>
      <span className="floating-icon text-blue-400 text-3xl bottom-16 right-20">🐍</span>
      <span className="floating-icon text-yellow-300 text-3xl bottom-20 left-10">JS</span>

      <p className="text-lg">www.omprasadkatkar.in</p>

      <p className="mt-3">
        This Website was made with <span className="text-green-400">React</span>
      </p>

      <div className="flex justify-center gap-6 mt-8 text-2xl">
        <span>LinkedIn</span>
        <span>GitHub</span>
        <span>WhatsApp</span>
        <span>Telegram</span>
        <span>Instagram</span>
      </div>

      <a
        href="#hero"
        className="scroll-top-btn fixed bottom-6 right-6 w-12 h-12 rounded-full bg-green-500 text-black flex justify-center items-center text-2xl"
      >
        ↑
      </a>
    </footer>
  );
};

export default Footer;
