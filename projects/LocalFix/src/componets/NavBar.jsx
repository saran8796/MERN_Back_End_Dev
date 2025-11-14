import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [hasBackground, setHasBackground] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;

      // Add background when scrolled past a certain point
      setHasBackground(currentScrollY > 50);

      // Hide navbar when scrolling down past threshold
      if (currentScrollY > 100) {
        if (currentScrollY > lastScrollY) {
          setIsNavbarVisible(false);
        } else {
          setIsNavbarVisible(true);
        }
      } else {
        setIsNavbarVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", controlNavbar);

    // Initial check on mount
    controlNavbar();

    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <>
      <nav
        className={`w-full px-6 lg:px-8 py-2 flex justify-between items-center fixed top-0 z-50 transition-all duration-300 ${
          isNavbarVisible ? "translate-y-0" : "-translate-y-full"
        } ${
          hasBackground
            ? "bg-white/95 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
      >
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
            className={`font-medium transition-colors duration-300 relative group text-gray-700 hover:text-blue-600`}
          >
            Home
            <span
              className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full bg-blue-600`}
            ></span>
          </Link>
          <Link
            to="/services"
            className={`font-medium transition-colors duration-300 relative group text-gray-700 hover:text-blue-600`}
          >
            Services
            <span
              className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full bg-blue-600`}
            ></span>
          </Link>
          <Link
            to="/about"
            className={`font-medium transition-colors duration-300 relative group text-gray-700 hover:text-blue-600`}
          >
            About
            <span
              className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full bg-blue-600`}
            ></span>
          </Link>
          <Link
            to="/contact"
            className={`font-medium transition-colors duration-300 relative group text-gray-700 hover:text-blue-600`}
          >
            Contact
            <span
              className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full bg-blue-600`}
            ></span>
          </Link>
          <button
            className={`px-6 py-2 rounded-full font-medium transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl bg-linear-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700`}
          >
            Login
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col gap-1.5 w-6 h-6"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span
            className={`w-full h-0.5 transition-all duration-300 ${
              isMenuOpen ? "rotate-45 translate-y-2" : ""
            } ${hasBackground ? "bg-gray-700" : "bg-black"}`}
          ></span>
          <span
            className={`w-full h-0.5 transition-all duration-300 ${
              isMenuOpen ? "opacity-0" : "opacity-100"
            } ${hasBackground ? "bg-gray-700" : "bg-black"}`}
          ></span>
          <span
            className={`w-full h-0.5 transition-all duration-300 ${
              isMenuOpen ? "-rotate-45 -translate-y-2" : ""
            } ${hasBackground ? "bg-gray-700" : "bg-black"}`}
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
            <Link
              to="/about"
              className="text-gray-700 hover:text-blue-600 font-medium py-2 border-b border-gray-100 transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-gray-700 hover:text-blue-600 font-medium py-2 border-b border-gray-100 transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
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
