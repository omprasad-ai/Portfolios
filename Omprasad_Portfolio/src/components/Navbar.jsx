import React, { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-black/20 backdrop-blur-md px-8 py-6 flex justify-between items-center text-white">

      <h1 className="text-2xl font-bold">
        Omprasad A Katkar/&gt;
      </h1>

      <div className="hidden md:flex gap-10 text-lg">
        <a href="#hero" className="hover:text-green-400 transition">HOME</a>
        <a href="#about" className="hover:text-green-400 transition">ABOUT ME</a>
        <a href="#projects" className="hover:text-green-400 transition">PROJECTS</a>
      </div>

      <button onClick={() => setOpen(true)} className="md:hidden text-3xl">☰</button>

      {/* Mobile Menu */}
      <div className={`fixed top-0 right-0 h-full w-64 bg-black/90 backdrop-blur-xl p-6 transition-transform ${open ? "translate-x-0" : "translate-x-full"}`}>
        <button onClick={() => setOpen(false)} className="text-3xl text-white">×</button>

        <div className="mt-10 flex flex-col gap-6 text-xl">
          <a href="#hero" className="hover:text-green-400">HOME</a>
          <a href="#about" className="hover:text-green-400">ABOUT ME</a>
          <a href="#projects" className="hover:text-green-400">PROJECTS</a>
          <a href="#contact" className="hover:text-green-400">CONTACT</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
