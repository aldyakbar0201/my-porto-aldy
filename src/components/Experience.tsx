import React from "react";

const Experience: React.FC = () => {
  const experiences = [
    {
      jobTitle: "Full Stack Developer",
      company: "SpaceX",
      timeline: "2023 - Present",
      responsibilities: [
        "Developed and maintained the front-end and back-end of e-commerce platforms.",
        "Worked closely with clients to understand their needs and implemented features based on feedback.",
        "Led the development of RESTful APIs using Node.js and integrated them with front-end technologies like React and Redux.",
        "Optimized performance and implemented scalable solutions for high traffic applications.",
      ],
    },
    {
      jobTitle: "Software Engineer",
      company: "META VERSE",
      timeline: "2022 - 2023",
      responsibilities: [
        "Built interactive web applications using Angular and React.",
        "Implemented responsive design using Tailwind CSS to ensure mobile compatibility.",
        "Worked on backend systems using Django and PostgreSQL.",
        "Collaborated with cross-functional teams to deliver high-quality software solutions on time.",
      ],
    },
    {
      jobTitle: "Freelance Full Stack Developer",
      company: "Self-Employed",
      timeline: "2021 - 2022",
      responsibilities: [
        "Designed and developed custom websites for small to medium-sized businesses.",
        "Provided ongoing maintenance and updates for client websites.",
        "Utilized technologies such as JavaScript, Node.js, Express, MongoDB, and React to build full-stack applications.",
      ],
    },
  ];

  return (
    <section className="bg-black text-white py-16">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <h2 className="text-3xl font-bold text-center text-green-500 mb-6">Experience</h2>
        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-green-500">{experience.jobTitle}</h3>
              <p className="text-white text-sm mb-2">{experience.company}</p>
              <p className="text-white text-sm mb-4">{experience.timeline}</p>
              <ul className="list-disc pl-6 text-white">
                {experience.responsibilities.map((responsibility, idx) => (
                  <li key={idx}>{responsibility}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
