import { useState } from "react";
import FormHandle from "./FormHandle";
import VideoSkipping from "./VideoSkipping";
import Hooks from "../components/Hooks";

const Tasks = () => {
  const [pages, setPages] = useState("emt");

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}

      {/* Main Content */}
      <div className="bg-white shadow-xl">
        {/* Navigation */}
        <div className="flex justify-between items-center ">
          {pages !== "emt" && (
            <button
              onClick={() => setPages("emt")}
              className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors duration-200"
            >
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
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Back to Tasks
            </button>
          )}
          {pages === "emt" && <div className="w-32"></div>}{" "}
        </div>

        {/* Content Area */}
        <div className="min-h-screen flex items-center justify-center">
          {pages === "emt" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <button
                onClick={() => setPages("form")}
                className="group p-6 bg-white border-2 border-blue-200 rounded-xl hover:border-blue-500 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Form Handling
                </h3>
                <p className="text-gray-600">
                  Learn about form validation, submission, and state management
                </p>
              </button>

              <button
                onClick={() => setPages("video")}
                className="group p-6 bg-white border-2 border-purple-200 rounded-xl hover:border-purple-500 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Skippable Video
                </h3>
                <p className="text-gray-600">
                  Explore video player controls and skip functionality
                </p>
              </button>

              <button
                onClick={() => setPages("hooks")}
                className="group p-6 bg-white border-2 border-purple-200 rounded-xl hover:border-purple-500 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Hooks
                </h3>
                <p className="text-gray-600">Learn more about Hooks</p>
              </button>
            </div>
          )}

          {pages === "form" && (
            <div className="w-full">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                Form Handling
              </h2>
              <FormHandle />
            </div>
          )}

          {pages === "video" && (
            <div className="w-full">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                Skippable Video
              </h2>
              <VideoSkipping />
            </div>
          )}

          {pages === "hooks" && (
            <div className="w-full">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                Hooks
              </h2>
              <Hooks />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Tasks;
