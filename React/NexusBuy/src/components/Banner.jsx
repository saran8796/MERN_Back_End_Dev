import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <>
      {/* Main container with dark theme matching NavBar */}
      <div
        className="min-h-screen flex items-center justify-center relative bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url(https://images.unsplash.com/photo-1607082350899-7e105aa886ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)`,
        }}
      >
        {/* Content container */}
        <div className="text-center text-white relative z-10 max-w-4xl mx-auto px-4">
          {/* Main title with same gradient as NavBar */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Welcome to{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              NEXUSBUY
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl mb-8 font-light text-gray-300">
            Your premium destination for exclusive products
          </p>

          {/* Buttons container - matching NavBar button styles */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {/* Primary button - same gradient as NavBar login button */}
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
              <Link to="/shop">Start Shopping</Link>
            </button>

            {/* Secondary button - glass morphism matching NavBar */}
            <button className="bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 text-white font-semibold py-3 px-8 rounded-lg text-lg transition-all duration-300 hover:scale-105">
              <Link to="/about">Learn More</Link>
            </button>
          </div>

          {/* Feature highlights - matching NavBar glass morphism */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-lg hover:bg-white/20 transition-all duration-300">
              <div className="text-2xl mb-2">🚚</div>
              <h3 className="font-semibold text-lg mb-2 text-white">
                Free Shipping
              </h3>
              <p className="text-sm text-gray-300">On orders over $50</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-lg hover:bg-white/20 transition-all duration-300">
              <div className="text-2xl mb-2">↩️</div>
              <h3 className="font-semibold text-lg mb-2 text-white">
                Easy Returns
              </h3>
              <p className="text-sm text-gray-300">30-day return policy</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-lg hover:bg-white/20 transition-all duration-300">
              <div className="text-2xl mb-2">🔒</div>
              <h3 className="font-semibold text-lg mb-2 text-white">
                Secure Payment
              </h3>
              <p className="text-sm text-gray-300">100% secure checkout</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
