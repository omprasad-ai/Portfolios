import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="min-h-screen bg-black text-white px-10 py-24 text-center">

      <h2 className="text-4xl font-bold mb-4">Contact</h2>

      <p className="text-green-400 text-lg">Ready to get started on your project?</p>
      <p className="text-green-400 text-lg mb-10">Contact me now for free consultation.</p>

      <div className="flex flex-col md:flex-row justify-center gap-6 mb-14 fade-slide">
        <div className="bg-green-500 text-black px-8 py-4 rounded-xl text-lg font-semibold w-80">
          omprasadkatkar@gmail.com
        </div>

        <div className="bg-green-500 text-black px-8 py-4 rounded-xl text-lg font-semibold w-80">
          (+91) 886171625
        </div>
      </div>

      <h3 className="text-2xl font-semibold">Get in touch using the form</h3>

      <form className="max-w-xl mx-auto mt-8 space-y-5 fade-slide">
        <input
          type="email"
          placeholder="Email"
          className="w-full p-4 bg-gray-900 border border-white/20 rounded-xl"
        />

        <textarea
          rows="4"
          placeholder="Send a message..."
          className="w-full p-4 bg-gray-900 border border-white/20 rounded-xl"
        ></textarea>

        <button className="btn-glow w-full py-3 bg-green-500 text-black font-semibold rounded-full">
          SUBMIT
        </button>
      </form>
    </section>
  );
};

export default Contact;
