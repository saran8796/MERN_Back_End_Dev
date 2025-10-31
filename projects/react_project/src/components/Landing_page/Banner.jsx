import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Left Content */}
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                Master React Step-by-Step
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Learn essential React concepts with practical examples and
                projects.
              </p>
              <Link
                to="/topics"
                className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transform hover:-translate-y-1 transition-all duration-300 shadow-lg"
              >
                Start Learning
              </Link>
            </div>

            {/* Right Illustration */}
            <div className="md:w-2/5 flex justify-center">
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 w-64 h-64 flex items-center justify-center shadow-xl">
                <div className="text-6xl">⚛️</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            What You'll Learn
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "⚛️",
                title: "Core React Concepts",
                description:
                  "Master JSX, components, props, state, hooks, and event handling with interactive examples",
                topics: [
                  "JSX & Rendering",
                  "Components & Props",
                  "State & Events",
                  "useState & useEffect",
                ],
              },
              {
                icon: "🌐",
                title: "Routing & Data Fetching",
                description:
                  "Learn React Router, API integration, data fetching patterns, and CRUD operations",
                topics: [
                  "React Router",
                  "REST API Integration",
                  "Loading & Error States",
                  "Data Management",
                ],
              },
              {
                icon: "🎨",
                title: "Styling & UI",
                description:
                  "Explore modern styling solutions including CSS Modules, Styled Components, and Tailwind CSS",
                topics: [
                  "CSS Modules",
                  "Styled Components",
                  "Tailwind CSS",
                  "Responsive Design",
                ],
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transform hover:-translate-y-2 transition-all duration-300 group"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <div className="border-t border-gray-100 pt-4">
                  <h4 className="font-medium text-gray-700 mb-2">
                    Key Topics:
                  </h4>
                  <ul className="space-y-2">
                    {feature.topics.map((topic, topicIndex) => (
                      <li
                        key={topicIndex}
                        className="flex items-center text-sm text-gray-600"
                      >
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
