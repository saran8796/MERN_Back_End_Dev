const Hero = () => {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-purple-900 to-blue-900">
        <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
          <div className="text-center px-3 w-fit max-w-fit">
            {/* Title */}
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
                React Mastery
              </span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-cyan-400 to-blue-400">
                Interview Ready
              </span>
            </h1>

            {/* Description */}
            <p className="text-slate-300 text-xl mb-12 leading-relaxed max-w-2xl mx-auto">
              Hands-on projects covering essential React concepts.
              <br />
              <span className="font-bold text-slate-100">
                No theory overload. Just practical, interview-focused
                components.
              </span>
            </p>

            {/* Feature Tags */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <span className="px-4 py-2 bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 rounded-full text-blue-200 text-sm">
                useState & useEffect
              </span>
              <span className="px-4 py-2 bg-purple-500/20 backdrop-blur-sm border border-purple-400/30 rounded-full text-purple-200 text-sm">
                React Router
              </span>
              <span className="px-4 py-2 bg-green-500/20 backdrop-blur-sm border border-green-400/30 rounded-full text-green-200 text-sm">
                Form Handling
              </span>
              <span className="px-4 py-2 bg-cyan-500/20 backdrop-blur-sm border border-cyan-400/30 rounded-full text-cyan-200 text-sm">
                LocalStorage CRUD
              </span>
              <span className="px-4 py-2 bg-orange-500/20 backdrop-blur-sm border border-orange-400/30 rounded-full text-orange-200 text-sm">
                Component Patterns
              </span>
            </div>

            {/* Button */}
            <button className="px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 rounded-full text-white font-semibold text-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 flex items-center gap-3 mx-auto backdrop-blur-sm border border-cyan-400/30">
              Explore Components
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
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>

            {/* Quick Stats */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
