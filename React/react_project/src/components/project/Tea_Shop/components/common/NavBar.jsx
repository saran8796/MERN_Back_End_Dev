// components/common/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navItems = [
    { name: "Home", href: "/" },
    { name: "Tea Collection", href: "/products" },
    { name: "About", href: "/about" },
    { name: "Brewing Guide", href: "/guide" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="md:flex gap-8 bg-black flex justify-end p-5">
      {navItems.map((item) => (
        <Link
          key={item.name}
          // href={item.href}
          className="text-white hover:text-green-500 transition-colors font-medium"
        >
          {item.name}
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;
