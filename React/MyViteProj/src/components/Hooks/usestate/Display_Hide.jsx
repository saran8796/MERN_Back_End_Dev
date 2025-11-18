import { useState } from "react";

const Display_Hide = () => {
  const [display, setDisplay] = useState(true);

  const dis = () => {
    setDisplay(!display);
  };
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header Section */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
              Interactive Content Toggle
            </h1>
            <p className="text-gray-600 text-lg">
              {display
                ? "Content is currently visible"
                : "Content is currently hidden"}
            </p>
          </div>

          {/* Toggle Button */}
          <button
            className="group relative bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-4 px-12 rounded-2xl text-lg transition-all duration-500 transform hover:scale-105 shadow-2xl hover:shadow-3xl mb-12 overflow-hidden"
            onClick={dis}
          >
            <span className="relative z-10 flex items-center gap-3">
              {display ? (
                <>
                  <svg
                    className="w-5 h-5 transition-transform group-hover:scale-110"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                    />
                  </svg>
                  Hide Content
                </>
              ) : (
                <>
                  <svg
                    className="w-5 h-5 transition-transform group-hover:scale-110"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                  Show Content
                </>
              )}
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
          </button>

          {/* Content Section with Enhanced Animation */}
          <div
            className={`transition-all duration-700 ease-out overflow-hidden ${
              display
                ? "opacity-100 max-h-[2000px] translate-y-0"
                : "opacity-0 max-h-0 -translate-y-8"
            }`}
          >
            <section className="py-16">
              <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-2xl font-bold text-gray-800 mb-8">
                  Featured Content
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="group text-center p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-white/50">
                    <div className="text-4xl mb-4">🚀</div>
                    <h3 className="font-semibold text-gray-800 mb-3">
                      Fast Performance
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ratione asperiores quaerat laborum dolorem.
                    </p>
                  </div>
                  <div className="group text-center p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-white/50 delay-75">
                    <div className="text-4xl mb-4">💡</div>
                    <h3 className="font-semibold text-gray-800 mb-3">
                      Innovative Solutions
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ratione asperiores quaerat laborum dolorem.
                    </p>
                  </div>
                  <div className="group text-center p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-white/50 delay-150">
                    <div className="text-4xl mb-4">⭐</div>
                    <h3 className="font-semibold text-gray-800 mb-3">
                      Premium Quality
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ratione asperiores quaerat laborum dolorem.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Display_Hide;
