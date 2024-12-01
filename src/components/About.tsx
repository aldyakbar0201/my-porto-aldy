import React from "react";

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-100 text-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center">About Me</h2>
        <p className="mt-6 text-center max-w-2xl mx-auto">
          Hello! I'm Aldy Hidayatul Akbar, a passionate full-stack developer
          with a knack for creating dynamic and user-friendly web applications.
          With over 3 years of experience in web development, I specialize in
          both front-end and back-end technologies, delivering seamless and
          engaging digital experiences. My expertise includes technologies like
          React, Node.js, MongoDB, and Tailwind CSS. I thrive on solving complex
          problems and collaborating with teams to bring ideas to life. When I'm
          not coding, you'll find me exploring new tech trends or enjoying
          outdoor adventures. I'm always eager to take on challenging projects
          that push the boundaries of innovation. Let's create something amazing
          together!
        </p>
      </div>
    </section>
  );
};

export default About;
