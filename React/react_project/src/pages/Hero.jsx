import React from "react";
import { Link } from "react-router-dom";
import Banner from "../components/Landing_page/Banner";
import Footer from "../components/Landing_page/Footer";
import ProductsFetch from "../components/fetch_api/ProductsFetch";

const Hero = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Banner />
      <ProductsFetch />
      <Footer />
    </div>
  );
};

export default Hero;
