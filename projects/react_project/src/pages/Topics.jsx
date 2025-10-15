import React, { useState } from "react";

/**
 * Topics Page Component for React Learning Platform
 *
 * Features:
 * - Search and filter functionality
 * - Category-based topic filtering
 * - Clean topic cards with essential information
 * - Responsive grid layout
 */

const Topics = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Topics data
  const topics = [
    // Core React Concepts
    {
      id: 1,
      title: "Introduction to React",
      category: "core",
      description:
        "Learn the fundamentals of React and how it compares to vanilla JavaScript",
      learningPoints: [
        "What is React and Virtual DOM",
        "React vs Vanilla JS comparison",
        "Setting up React environment",
      ],
    },
    {
      id: 2,
      title: "JSX & Rendering",
      category: "core",
      description:
        "Master JSX syntax and different rendering patterns in React",
      learningPoints: [
        "JSX syntax and rules",
        "Conditional rendering patterns",
        "List rendering with keys",
      ],
    },
    {
      id: 3,
      title: "Components & Props",
      category: "core",
      description: "Understand functional components and props system",
      learningPoints: [
        "Functional components creation",
        "Props passing and validation",
        "Component composition patterns",
      ],
    },
    {
      id: 4,
      title: "State & Events",
      category: "core",
      description: "Manage component state and handle user interactions",
      learningPoints: [
        "useState hook fundamentals",
        "Event handling in React",
        "Form state management",
      ],
    },
    {
      id: 5,
      title: "Side Effects & Lifecycle",
      category: "core",
      description:
        "Control side effects and component lifecycle with useEffect",
      learningPoints: [
        "useEffect hook usage",
        "Data fetching patterns",
        "Cleanup and dependencies",
      ],
    },
    // Styling & UI
    {
      id: 6,
      title: "CSS in React",
      category: "styling",
      description: "Different approaches to styling React components",
      learningPoints: [
        "CSS Modules implementation",
        "Inline styles approach",
        "ClassName dynamic handling",
      ],
    },
    {
      id: 7,
      title: "Styled Components",
      category: "styling",
      description: "Learn CSS-in-JS with Styled Components library",
      learningPoints: [
        "CSS-in-JS setup",
        "Dynamic styling with props",
        "Theming system",
      ],
    },
    {
      id: 8,
      title: "Tailwind CSS",
      category: "styling",
      description: "Utility-first CSS framework for rapid UI development",
      learningPoints: [
        "Utility-first workflow",
        "Responsive design utilities",
        "Custom configuration",
      ],
    },
    // Routing & Data Fetching
    {
      id: 9,
      title: "React Router",
      category: "routing",
      description: "Client-side routing for single-page applications",
      learningPoints: [
        "Route configuration",
        "Navigation methods",
        "Dynamic routing patterns",
      ],
    },
    {
      id: 10,
      title: "API Integration",
      category: "routing",
      description: "Connect your React app to external APIs and services",
      learningPoints: [
        "REST API consumption",
        "Loading and error states",
        "CRUD operations",
      ],
    },
    {
      id: 11,
      title: "Context API",
      category: "routing",
      description: "Global state management without external libraries",
      learningPoints: [
        "Global state management",
        "Provider/Consumer pattern",
        "Performance optimization",
      ],
    },
  ];

  // Filter topics based on search and category
  const filteredTopics = topics.filter((topic) => {
    const matchesSearch =
      topic.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      topic.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || topic.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Category display names
  const categoryNames = {
    all: "All Topics",
    core: "Core Concepts",
    styling: "Styling & UI",
    routing: "Routing & APIs",
  };

  // Category colors
  const categoryColors = {
    core: "bg-blue-100 text-blue-800",
    styling: "bg-purple-100 text-purple-800",
    routing: "bg-green-100 text-green-800",
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              React Learning Topics
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Master React development through comprehensive topics and
              practical examples. Start with core concepts and progress to
              advanced patterns.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="bg-gray-100 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
            {/* Search Input */}
            <div className="w-full md:w-1/3">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search topics..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <div className="absolute left-3 top-3 text-gray-400">
                  <svg
                    className="w-5 h-5"
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

            {/* Category Filter */}
            <div className="w-full md:w-auto">
              <div className="flex flex-wrap gap-2 justify-center">
                {Object.entries(categoryNames).map(([key, name]) => (
                  <button
                    key={key}
                    onClick={() => setSelectedCategory(key)}
                    className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                      selectedCategory === key
                        ? "bg-blue-600 text-white shadow-md"
                        : "bg-white text-gray-700 hover:bg-gray-200 border border-gray-300"
                    }`}
                  >
                    {name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Topics Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {/* Results Count */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800">
              {categoryNames[selectedCategory]}
              <span className="text-gray-600 text-lg ml-2">
                ({filteredTopics.length}{" "}
                {filteredTopics.length === 1 ? "topic" : "topics"})
              </span>
            </h2>
          </div>

          {/* Topics Grid */}
          {filteredTopics.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredTopics.map((topic) => (
                <div
                  key={topic.id}
                  className="bg-white rounded-xl shadow-md border border-gray-100 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                >
                  <div className="p-6">
                    {/* Category Badge */}
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-4 ${
                        categoryColors[topic.category]
                      }`}
                    >
                      {categoryNames[topic.category]}
                    </span>

                    {/* Title */}
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">
                      {topic.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 mb-4">{topic.description}</p>

                    {/* Learning Points */}
                    <div className="mb-6">
                      <h4 className="font-medium text-gray-700 mb-2">
                        You'll learn:
                      </h4>
                      <ul className="space-y-1">
                        {topic.learningPoints.map((point, index) => (
                          <li
                            key={index}
                            className="flex items-start text-sm text-gray-600"
                          >
                            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA Button */}
                    <button className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors duration-300">
                      Start Learning
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* Empty State */
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                No topics found
              </h3>
              <p className="text-gray-600">
                Try adjusting your search or filter to find what you're looking
                for.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <div className="text-xl font-bold mb-2">ReactLearn</div>
              <p className="text-gray-400">
                Master React development with hands-on learning
              </p>
            </div>
            <div className="flex space-x-6 mb-4 md:mb-0">
              {["Home", "Topics", "Projects", "About"].map((item) => (
                <a
                  key={item}
                  href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
          <div className="border-t border-gray-700 mt-6 pt-6 text-center text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} React Learning Platform. All
              rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Topics;
