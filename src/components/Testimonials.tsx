import React from "react";

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "John Doe",
      title: "Project Manager at SpaceX",
      image: "/images/people-3.jpg", // Replace with actual image path
      testimonial:
        "The developer was fantastic to work with. They exceeded our expectations on every project and delivered high-quality work consistently.",
    },
    {
      name: "Ricardo Zaneti",
      title: "Team Lead tech at META VERSE",
      image: "/images/people-2.jpg", // Replace with actual image path
      testimonial:
        "A pleasure to collaborate with. They took the time to understand our business needs and delivered a custom solution that really helped us grow.",
    },
    {
      name: "Anthony D. Santoz",
      title: "Freelance Client",
      image: "/images/people-6.jpg", // Replace with actual image path
      testimonial:
        "Highly professional and skilled. The final product exceeded my expectations and has helped me enhance my online presence significantly.",
    },
  ];

  return (
    <section className="bg-black text-white py-16">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <h2 className="text-3xl font-bold text-center text-green-500 mb-6">
          Testimonials
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-green-500">
                    {testimonial.name}
                  </p>
                  <p className="text-gray-400 text-sm">{testimonial.title}</p>
                </div>
              </div>
              <p className="text-gray-300 mt-4">"{testimonial.testimonial}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
