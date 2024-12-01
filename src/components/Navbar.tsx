import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-black text-white fixed top-0 w-full z-10 shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-lg font-bold">Porto</h1>
        <ul className="flex space-x-6">
          {['Hero', 'About', 'Skills', 'Portfolio', 'Contact'].map((section) => (
            <li key={section}>
              <a href={`#${section.toLowerCase()}`} className="hover:underline">
                {section}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
