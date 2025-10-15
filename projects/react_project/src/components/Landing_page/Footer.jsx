import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
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
                <Link
                  key={item}
                  to={item === "Home" ? "#" : `/${item.toLowerCase()}`}
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  {item}
                </Link>
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
    </>
  );
};

export default Footer;
