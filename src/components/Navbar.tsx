import React, { useState } from "react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white fixed top-0 w-full z-10 shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-lg font-bold">Porto</h1>

        {/* Hamburger Menu (Mobile View) */}
        <button
          className="block md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="button label"
        >
          <svg
            className="w-6 h-6"
            xmlns="/"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Navigation Links */}
        <ul
          className={`flex flex-col md:flex-row md:space-x-6 absolute md:static bg-black md:bg-transparent w-full md:w-auto left-0 top-0 md:top-auto transition-transform duration-300 ${
            isOpen ? "translate-y-[60px]" : "-translate-y-full"
          } md:translate-y-0`}
        >
          {["Hero", "About", "Skills", "Portfolio", "Contact"].map(
            (section) => (
              <li key={section} className="text-center md:text-left">
                <a
                  href={`#${section.toLowerCase()}`}
                  className="block py-2 px-4 hover:underline"
                >
                  {section}
                </a>
              </li>
            )
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
