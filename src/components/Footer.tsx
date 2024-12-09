// Footer.tsx
import React from "react";
const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Left Section */}
          <div className="mb-4 md:mb-0">
            <p className="text-center md:text-left text-lg">
              &copy; {new Date().getFullYear()} Aldyhidayatulakbar0201@gmial.com. All Rights
              Reserved.
            </p>
          </div>

          {/* Center Section - Social Links */}
          <div className="flex space-x-6 mb-4 md:mb-0">
            <a
              href="https://github.com/aldyakbar0201"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition duration-300"
              aria-label="link to my github"
            >
              <i className="fab fa-github text-2xl"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/aldy-hidayatul-akbar-27236b170"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition duration-300"
              aria-label="link to my linkedin"
            >
              <i className="fab fa-linkedin text-2xl"></i>
            </a>
            <a
              href="https://www.instagram.com/aldyhidayatulakbarrrr/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition duration-300"
              aria-label="link to my instagram"
            >
              <i className="fab fa-instagram text-2xl"></i>
            </a>
            </div>

          {/* Right Section - Quick Links */}
          <div className="flex space-x-6">
            <a
              href="#about"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              About
            </a>

            <a
              href="#contact"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
