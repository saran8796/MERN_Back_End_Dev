import { useState } from "react";

const True_False = () => {
  const [bool, setBool] = useState(true);
  const change = () => {
    setBool(!bool);
  };
  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50 p-6">
        <div className="text-center max-w-md w-full">
          {/* Header Section */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent mb-3">
              Smart Search Bar
            </h1>
            <p className="text-gray-600">
              Click the search bar to expand and explore
            </p>
          </div>

          {/* Search Container */}
          <div className="relative mb-6">
            <input
              type="text"
              placeholder={bool ? "🔍" : "Search anything..."}
              className={`bg-gradient-to-r from-amber-400 to-orange-400 p-4 ${
                bool ? "w-16" : "w-80"
              } rounded-full text-white placeholder-white/80 transition-all duration-600 ease-out shadow-xl focus:outline-none focus:ring-4 focus:ring-amber-200 focus:ring-opacity-50`}
              onFocus={change}
              onBlur={change}
            />

            {/* Animated Search Icon */}
            <div className="absolute left-5 top-1/2 transform -translate-y-1/2 pointer-events-none">
              <svg
                className={`w-5 h-5 text-white transition-all duration-600 ${
                  bool ? "opacity-100 scale-100" : "opacity-0 scale-0"
                }`}
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
      </div>
    </>
  );
};

export default True_False;
