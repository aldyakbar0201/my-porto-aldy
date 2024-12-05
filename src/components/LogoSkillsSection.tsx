import React from "react";

// List of skills with their logo paths
const skills = {
  frontEnd: [
    { name: "HTML", logo: "/skills-logo/html-logo.svg" },
    { name: "CSS", logo: "/skills-logo/css-logo.svg" },
    { name: "JavaScript", logo: "/skills-logo/javascript-logo.svg" },
    { name: "React", logo: "/skills-logo/reactjs-logo.svg" },
    { name: "Tailwind", logo: "/skills-logo/tailwindcss-logo.svg" },
    { name: "Figma", logo: "/skills-logo/figma-logo.svg" },
  ],
  backEnd: [
    { name: "Node.js", logo: "/skills-logo/nodejs-logo.svg" },
    { name: "MongoDB", logo: "/skills-logo/mongodb-svgrepo-com.svg" },
    { name: "Express", logo: "/skills-logo/express-svgrepo-com.svg" },
    { name: "Python", logo: "/skills-logo/python-svgrepo-com.svg" },
  ],
  devOps: [
    { name: "Docker", logo: "/skills-logo/docker-svgrepo-com.svg" },
    { name: "Git", logo: "/skills-logo/git-logo.svg" },
    { name: "AWS", logo: "/skills-logo/aws-svgrepo-com.svg" },
    { name: "MySql", logo: "/skills-logo/mysql-logo.svg" },
  ],
};

const LogoSkillsSection: React.FC = () => {
  return (
    <section className="bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-8"></h2>

        {/* Front-End Section */}
        <div className="mb-8">
          <div className="flex flex-wrap justify-center space-x-4">
            {skills.frontEnd.map((skill) => (
              <div
                key={skill.name}
                className="flex flex-col items-center space-y-2"
              >
                <img
                  src={skill.logo}
                  alt={skill.name}
                  className="w-16 h-16 object-contain"
                />
                <span className="text-sm">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Back-End Section */}
        <div className="mb-8">
          <div className="flex flex-wrap justify-center space-x-4">
            {skills.backEnd.map((skill) => (
              <div
                key={skill.name}
                className="flex flex-col items-center space-y-2"
              >
                <img
                  src={skill.logo}
                  alt={skill.name}
                  className="w-16 h-16 object-contain"
                />
                <span className="text-sm">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* DevOps Section */}
        <div>
          <div className="flex flex-wrap justify-center space-x-4">
            {skills.devOps.map((skill) => (
              <div
                key={skill.name}
                className="flex flex-col items-center space-y-2"
              >
                <img
                  src={skill.logo}
                  alt={skill.name}
                  className="w-16 h-16 object-contain"
                />
                <span className="text-sm">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoSkillsSection;
