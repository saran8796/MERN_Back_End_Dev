import React from "react";
import { Card, CardContent } from "./Card";
import { ImageWithFallback } from "./ImageWithFallBack";

const OurServices = () => {
  const categories = [
    {
      name: "Electrician",
      icon: "⚡",
      image:
        "https://images.unsplash.com/photo-1660330589693-99889d60181e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2lhbiUyMHdvcmtpbmd8ZW58MXx8fHwxNzYyMTg4MjUwfDA&ixlib=rb-4.1.0&q=80&w=1080",
      workers: 127,
    },
    {
      name: "Plumber",
      icon: "🔧",
      image:
        "https://images.unsplash.com/photo-1599463698367-11cb72775b67?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbHVtYmVyJTIwcmVwYWlyfGVufDF8fHx8MTc2MjE1NzYwM3ww&ixlib=rb-4.1.0&q=80&w=1080",
      workers: 93,
    },
    {
      name: "Carpenter",
      icon: "🪚",
      image:
        "https://images.unsplash.com/photo-1592843131305-18bc6c8b5432?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJwZW50ZXIlMjB3b29kfGVufDF8fHx8MTc2MjExMDI4NXww&ixlib=rb-4.1.0&q=80&w=1080",
      workers: 81,
    },
    {
      name: "AC Repair",
      icon: "❄️",
      image:
        "https://images.unsplash.com/photo-1647022528152-52ed9338611d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaXIlMjBjb25kaXRpb25pbmclMjByZXBhaXJ8ZW58MXx8fHwxNzYyMDk2NDQ4fDA&ixlib=rb-4.1.0&q=80&w=1080",
      workers: 64,
    },
    {
      name: "Painter",
      icon: "🎨",
      image:
        "https://images.unsplash.com/photo-1613844044163-1ad2f2d0b152?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3VzZSUyMHBhaW50ZXJ8ZW58MXx8fHwxNzYyMDcyMDE1fDA&ixlib=rb-4.1.0&q=80&w=1080",
      workers: 72,
    },
  ];

  const onNavigate = (path) => {
    // Navigation logic here
    console.log(`Navigating to: ${path}`);
  };

  return (
    <div className="py-12 bg-linear-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Popular <span className="text-blue-600">Services</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            Choose from our most requested professional services
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6 lg:gap-8">
          {categories.map((category, index) => (
            <Card
              key={index}
              className="cursor-pointer hover:shadow-xl border-gray-200 transition-all duration-300 transform hover:-translate-y-1 lg:hover:-translate-y-2 overflow-hidden group bg-white"
              onClick={() => onNavigate("services")}
            >
              {/* Image Container */}
              <div className="relative h-28 sm:h-32 md:h-36 lg:h-40 overflow-hidden">
                <ImageWithFallback
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-2 left-3 text-2xl sm:text-3xl drop-shadow-lg">
                  {category.icon}
                </div>
              </div>

              {/* Content */}
              <CardContent className="p-3 sm:p-4">
                <h3 className="font-semibold text-gray-900 text-sm sm:text-base md:text-lg mb-1 line-clamp-1">
                  {category.name}
                </h3>
                <p className="text-xs sm:text-sm text-gray-500 font-medium">
                  {category.workers.toLocaleString()} available workers
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12 lg:mt-16">
          <button
            onClick={() => onNavigate("all-services")}
            className="bg-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-200 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl text-sm sm:text-base"
          >
            View All Services
          </button>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
