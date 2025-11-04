import React, { useState } from "react";
import { Link } from "react-router-dom"; // Make sure to import Link

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="bg-transparent w-full px-6 lg:px-8 py-2 flex justify-between items-center fixed top-0 z-50">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/">
            <img
              src="./logo_2.png"
              alt="LocalFix"
              className="w-35 h-auto transition-transform duration-300 hover:scale-105"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            to="/"
            className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300 relative group"
          >
            Home
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            to="/services"
            className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300 relative group"
          >
            Services
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <button className="bg-linear-to-r from-blue-500 to-blue-600 text-white px-6 py-2 rounded-full font-medium hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl">
            Login
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col gap-1.5 w-6 h-6"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span
            className={`w-full h-0.5 bg-gray-700 transition-all duration-300 ${
              isMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`w-full h-0.5 bg-gray-700 transition-all duration-300 ${
              isMenuOpen ? "opacity-0" : "opacity-100"
            }`}
          ></span>
          <span
            className={`w-full h-0.5 bg-gray-700 transition-all duration-300 ${
              isMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>

        {/* Mobile Navigation */}
        <div
          className={`absolute top-full left-0 w-full bg-white/95 backdrop-blur-md shadow-lg md:hidden transition-all duration-300 ${
            isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          <div className="flex flex-col p-6 gap-6">
            <Link
              to="/"
              className="text-gray-700 hover:text-blue-600 font-medium py-2 border-b border-gray-100 transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/services"
              className="text-gray-700 hover:text-blue-600 font-medium py-2 border-b border-gray-100 transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <button className="bg-linear-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-full font-medium hover:from-blue-600 hover:to-blue-700 transition-all duration-300 mt-4">
              Login
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
