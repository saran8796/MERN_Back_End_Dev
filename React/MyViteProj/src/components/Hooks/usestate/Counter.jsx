import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const counter = () => {
    setCount(count + 1);
  };
  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="text-center">
          {/* Counter Display */}
          <div className="mb-8">
            <h2 className="text-lg font-semibold text-gray-600 mb-2">
              Current Count
            </h2>
            <div className="text-7xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {count}
            </div>
          </div>

          {/* Counter Button */}
          <button
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-2xl text-lg transition-all duration-300 transform hover:scale-105 shadow-lg active:scale-95"
            onClick={counter}
          >
            Click to Count ↑
          </button>

          {/* Additional Info */}
          <p className="mt-4 text-gray-500 text-sm">
            Click the button to increase the counter
          </p>
        </div>
      </div>
    </>
  );
};

export default Counter;
