import React, { useState } from "react";

const Portfolio: React.FC = () => {
  const [activeProjectIndex, setActiveProjectIndex] = useState<number | null>(
    null
  );

  const projects = [
    {
      title: "E-commerce Platform for XYZ Retail",
      technologies: ["React", "Node.js", "MongoDB", "AWS"],
      situation:
        "XYZ Retail sought to expand into e-commerce to reach a wider audience and streamline its sales processes. They needed a scalable, user-friendly platform to support both desktop and mobile users.",
      task: "I was responsible for building the front-end and back-end components, ensuring seamless integration with the client’s inventory and payment systems.",
      action:
        "Using React, I designed a responsive, intuitive UI focused on user engagement. On the back end, I developed RESTful APIs with Node.js and MongoDB and integrated AWS for optimal performance. I also set up a CI/CD pipeline for deployment.",
      result:
        "The project led to a 35% increase in online sales within the first three months. User feedback praised the site's speed and ease of use, and the client saw reduced manual inventory tasks.",
      image: "/images/project-3.jpg", // Replace with an actual image path
    },
    {
      title: "Portfolio Website",
      technologies: ["React", "Tailwind CSS", "TypeScript"],
      situation:
        "As a developer, I needed a professional platform to showcase my skills, projects, and expertise.",
      task: "Design and develop a visually appealing and responsive portfolio site highlighting my work and achievements.",
      action:
        "Using React and Tailwind CSS, I built a modern UI with responsive design. I focused on accessibility, smooth navigation, and performance optimization.",
      result:
        "The portfolio site enhanced my online presence and became a valuable tool in landing freelance and full-time roles.",
      image: "/images/project-6.jpg", // Replace with an actual image path
    },
    {
      title: "Social Media Analytics Dashboard",
      technologies: ["Angular", "Django", "PostgreSQL"],
      situation:
        "A startup required a dashboard to analyze social media performance metrics for better marketing strategies.",
      task: "Develop a full-stack application with data visualization capabilities and real-time updates.",
      action:
        "I built an interactive front-end with Angular and a robust back-end using Django. PostgreSQL was used for data storage, and I implemented real-time updates with WebSockets.",
      result:
        "The dashboard improved client insights, leading to a 20% increase in marketing efficiency.",
      image: "/images/project-5.jpg", // Replace with an actual image path
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-100 text-black">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <h2
          id="portfolio-section"
          className="text-3xl font-bold text-center text-green-500 mb-6"
        >
          Portfolio
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-green-500">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-2">
                  Technologies: {project.technologies.join(", ")}
                </p>
                <button
                  onClick={() => setActiveProjectIndex(index)}
                  className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {activeProjectIndex !== null && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
            <div className="bg-white text-black w-11/12 max-w-lg p-6 rounded-lg shadow-lg relative">
              <button
                onClick={() => setActiveProjectIndex(null)}
                className="absolute top-2 right-2 text-black text-xl font-bold hover:text-gray-600"
              >
                &times;
              </button>
              <h3 className="text-2xl font-bold mb-4">
                {projects[activeProjectIndex].title}
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                <strong>Technologies:</strong>{" "}
                {projects[activeProjectIndex].technologies.join(", ")}
              </p>
              <h4 className="text-lg font-semibold">Situation:</h4>
              <p className="mb-4">{projects[activeProjectIndex].situation}</p>
              <h4 className="text-lg font-semibold">Task:</h4>
              <p className="mb-4">{projects[activeProjectIndex].task}</p>
              <h4 className="text-lg font-semibold">Action:</h4>
              <p className="mb-4">{projects[activeProjectIndex].action}</p>
              <h4 className="text-lg font-semibold">Result:</h4>
              <p>{projects[activeProjectIndex].result}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
