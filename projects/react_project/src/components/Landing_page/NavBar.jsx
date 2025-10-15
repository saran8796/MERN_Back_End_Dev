import { Link } from "react-router-dom";
import { useState } from "react";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="bg-black text-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                LOGO
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <Link
                to="/"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300 hover:bg-gray-800"
              >
                Home
              </Link>
              <Link
                to="/formhandle"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300 hover:bg-gray-800"
              >
                Form
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
