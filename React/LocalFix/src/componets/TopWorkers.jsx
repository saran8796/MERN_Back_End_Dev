import React from "react";

const TopWorkers = () => {
  const workers = [
    {
      profile: "",
      name: "James Miller",
      role: "Electrician",
      experience: "8 years",
    },
    {
      profile: "",
      name: "Sarah Johnson",
      role: "Plumber",
      experience: "6 years",
    },
    {
      profile: "",
      name: "Robert Lee",
      role: "Carpenter",
      experience: "12 years",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Top Rated Workers
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Trusted professionals ready to help with your home projects
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {workers.map((worker, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl flex  hover:shadow-xl transition-all duration-300 p-6 border border-gray-200"
          >
            {/* Profile Image */}
            <div className="flex justify-center mr-4">
              <div className="w-18 h-18 bg-linear-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white text-2xl font-semibold">
                  {worker.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </span>
              </div>
            </div>

            {/* Worker Info */}
            <div className="w-full">
              <h3 className="text-xl font-normal text-gray-900 mb-2">
                {worker.name}
              </h3>
              <div className="flex justify-start gap-2 mb-2">
                <span className="text-blue-600 font-normal">{worker.role}</span>
                <span className="text-gray-400">•</span>
                <span className="text-gray-600">{worker.experience}</span>
              </div>

              {/* Rating Stars */}
              <div className="flex justify-start gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="text-sm text-gray-600 ml-2">5.0</span>
              </div>
              {/* Action Button */}
              <div className="text-center">
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-1 px-8 rounded-lg transition-colors duration-200 w-full">
                  View Profile
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View All Button */}
      {workers.length > 3 ?? (
        <div className="text-center mt-12">
          <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-medium py-3 px-8 rounded-lg transition-all duration-200">
            View All Workers
          </button>
        </div>
      )}
    </div>
  );
};

export default TopWorkers;
