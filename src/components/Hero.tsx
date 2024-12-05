import React from "react";

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-purple-500 to-indigo-600 text-white text-center"
    >
      <h1 className="text-5xl font-bold">Hello, I'm Aldy Hidayatul Akbar</h1>
      <p className="mt-4 text-lg">Full-Stack Web Developer</p>
      <p className="mt-2 text-sm">
        Building scalable and high-performance web solutions
      </p>
      <a
        href="#portfolio-section"
        className="mt-6 bg-white text-black px-6 py-3 rounded-lg shadow-md hover:bg-gray-200"
      >
        View Portfolio
      </a>
    </section>
  );
};

export default Hero;
