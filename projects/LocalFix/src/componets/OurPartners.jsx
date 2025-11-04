import React, { useState } from "react";

const OurPartners = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  // Sample partner data
  const partners = [
    {
      id: 1,
      name: "Spark",
      category: "electrician",
      logo: "https://i.fbcd.co/products/original/logo-20-975c2344a508ec213ddc9aada5afbd2d465b611f15c847af66bc94ae7e892965.jpg",
    },
    {
      id: 2,
      name: "PipeMasters",
      category: "plumbing",
      logo: "https://a.mktgcdn.com/p/PqnyOYctYq8auJdaqefqkF57v4HS1ne_BYX8GW5kCWY/1.0000/481x481.jpg",
    },
    {
      id: 3,
      name: "Wood Working",
      category: "carpentry",
      logo: "https://png.pngtree.com/templates/20180829/woodworking-gear-logo-design-template-vector-element-png_30040.jpg",
    },
    {
      id: 4,
      name: "Air Conditioners",
      category: "ac-repair",
      logo: "https://cdn.create.vista.com/downloads/80b9d240-c7a6-4425-908a-1fe1fb6c023c_640.jpeg",
    },
    {
      id: 5,
      name: "Home Painters",
      category: "painting",
      logo: "https://cdn.logojoy.com/wp-content/uploads/20220322105731/painter-logo-7.png",
    },
  ];

  const categories = [
    { value: "all", label: "All Services" },
    { value: "electrician", label: "Electrician" },
    { value: "plumbing", label: "Plumbing" },
    { value: "carpentry", label: "Carpentry" },
    { value: "ac-repair", label: "AC Repair" },
    { value: "painting", label: "Painting" },
  ];

  const filteredPartners = partners.filter((partner) => {
    const matchesCategory =
      selectedCategory === "all" || partner.category === selectedCategory;
    const matchesSearch = partner.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="py-16 bg-linear-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-0 bg-blue-500">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Our <span className="text-blue-600">Partners</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We collaborate with industry leaders and innovative companies to
            deliver exceptional services and solutions.
          </p>
        </div>

        {/* Filters and Search Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
          {/* Category Filter */}
          <div className="flex items-center gap-4">
            <label
              htmlFor="category"
              className="text-gray-700 font-medium whitespace-nowrap"
            >
              Filter by:
            </label>
            <select
              id="category"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-white shadow-sm"
            >
              {categories.map((category) => (
                <option key={category.value} value={category.value}>
                  {category.label}
                </option>
              ))}
            </select>
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-64">
            <input
              type="text"
              placeholder="Search partners..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-white shadow-sm"
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg
                className="h-5 w-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredPartners.map((partner) => (
            <div
              key={partner.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden group"
            >
              {/* Partner Logo */}
              <div className="h-48 bg-white flex items-center justify-center group-hover:from-blue-100 group-hover:to-gray-200 transition-all duration-300">
                {/* <div className="w-32 h-32 bg-white rounded-full shadow-md flex items-center justify-center p-4">
                  <div className="text-2xl font-bold text-blue-600 text-center">
                    {partner.name.split("").slice(0, 2).join("")}
                  </div>
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-w-full max-h-full object-contain"
                  />
                </div> */}
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-w-full max-h-full object-contain cover"
                />
              </div>

              {/* Partner Info */}
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-200">
                  {partner.name}
                </h3>
                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-600 text-sm font-medium rounded-full capitalize">
                  {partner.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredPartners.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <svg
                className="w-16 h-16 mx-auto"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">
              No partners found
            </h3>
            <p className="text-gray-500">
              Try adjusting your filters or search term
            </p>
          </div>
        )}

        {/* CTA Section */}
        <div className="text-center mt-16 bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Become a Partner
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Join our network of trusted partners and grow your business with us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-200 transform hover:-translate-y-1 shadow-lg hover:shadow-xl">
              Partner With Us
            </button>
            <button className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-200">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurPartners;
