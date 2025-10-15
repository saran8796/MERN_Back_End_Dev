import React from "react";
import { Link } from "react-router-dom";
import Banner from "../components/Landing_page/Banner";
import Footer from "../components/Landing_page/Footer";
import ProductsFetch from "../components/fetch_api/ProductsFetch";

/**
 * Home Page Component for React Learning Platform
 *
 * Structure:
 * - Sticky Navbar with navigation links
 * - Hero section with CTA and illustration placeholder
 * - Features grid with 4 cards
 * - How It Works section with step-by-step process
 * - Featured Projects showcase
 * - Footer with links and copyright
 *
 * Responsive Design:
 * - Mobile: Single column layout
 * - Tablet: 2-column features grid
 * - Desktop: 4-column features grid, horizontal steps
 */

const Hero = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* <Banner /> */}
      {/* <Footer /> */}

      <ProductsFetch />
    </div>
  );
};

export default Hero;
