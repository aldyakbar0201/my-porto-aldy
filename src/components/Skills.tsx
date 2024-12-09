import React from "react";

const skills = [
  {
    category: "Front-End", items: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "Figma"],
  },
  { category: "Back-End", items: ["Node.js", "Express", "MongoDB", "Python"] },
  { category: "DevOps", items: ["Docker", "Git", "AWS", "MySql"] },
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-green-500 text-center">
          Skills
        </h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map(({ category, items }) => (
            <div
              key={category}
              className="p-6 bg-gray-800 rounded-lg shadow-lg text-center"
            >
              <h3 className="text-xl font-semibold text-green-500">
                {category}
              </h3>
              <ul className="mt-4 space-y-2">
                {items.map((skill) => (
                  <li key={skill}> {skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
