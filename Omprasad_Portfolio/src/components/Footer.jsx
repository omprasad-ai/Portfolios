import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white text-center py-10 mt-20 relative">

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
      </a>
    </footer>
  );
};

export default Footer;
