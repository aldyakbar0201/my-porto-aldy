import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-r from-indigo-600 to-purple-500 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold">Contact Me</h2>
        <p className="mt-4">Feel free to reach out for collaborations or just a friendly hello!</p>
        <form className="mt-6 max-w-lg mx-auto">
          <input
            type="text"
            placeholder="Name"
            className="w-full mb-4 p-3 rounded-lg"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full mb-4 p-3 rounded-lg"
          />
          <textarea
            placeholder="Message"
            className="w-full mb-4 p-3 rounded-lg"
            rows={4}
          ></textarea>
          <button className="w-full py-3 bg-black text-white rounded-lg">Send</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
