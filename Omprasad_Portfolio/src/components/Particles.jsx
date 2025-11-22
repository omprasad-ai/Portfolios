import React from "react";

const Particles = () => {
  // number of particles floating
  const dots = new Array(40).fill(0);

  return (
    <div className="fixed inset-0 -z-20 overflow-hidden pointer-events-none">
      {dots.map((_, i) => (
        <span
          key={i}
          className="absolute w-2 h-2 bg-green-500 rounded-full opacity-20 animate-pulse"
          style={{
            top: Math.random() * 100 + "%",
            left: Math.random() * 100 + "%",
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: "3s",
          }}
        ></span>
      ))}
    </div>
  );
};

export default Particles;
