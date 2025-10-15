import { useState } from "react";
import LocalStorage_CRUD from "../components/Form/LocalStorage_CRUD";
import PermissionRequestForm from "../components/Form/PermissionRequestForm";

const FormHandle = () => {
  const [activeComponent, setActiveComponent] = useState("localStorage");
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const menuItems = [
    { id: "localStorage", title: "LocalStorage", icon: "💾" },
    { id: "permission", title: "Permission Form", icon: "📝" },
    { id: "validation", title: "Validation", icon: "✅", comingSoon: true },
    { id: "multiStep", title: "Multi-step", icon: "🔢", comingSoon: true },
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Collapsible Sidebar */}
      <div
        className={`bg-white border-r border-gray-200 transition-all duration-300 ${
          sidebarOpen ? "w-64" : "w-20"
        }`}
      >
        {/* Toggle Button */}
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className={`w-full p-4 border-b flex ${
            !sidebarOpen ? "justify-center" : "justify-end pr-7"
          } border-gray-200 hover:bg-gray-50 transition-colors`}
        >
          {!sidebarOpen && (
            <svg
              className="w-6 h-6 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
          {sidebarOpen && (
            <svg
              className="w-5 h-5 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          )}
        </button>

        {/* Menu Items */}
        <div className="py-4">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => !item.comingSoon && setActiveComponent(item.id)}
              className={`w-full flex items-center p-4 transition-all duration-200 group ${
                activeComponent === item.id
                  ? "bg-blue-50 text-blue-700 border-r-2 border-blue-500"
                  : "text-gray-700 hover:bg-gray-50"
              }`}
            >
              <span className="text-2xl">{item.icon}</span>
              {sidebarOpen && (
                <span className="ml-3 font-medium">{item.title}</span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto p-6">
        {/* Your component rendering logic here */}
        <div className="max-w-4xl mx-auto">
          {activeComponent === "localStorage" && <LocalStorage_CRUD />}
          {activeComponent === "permission" && <PermissionRequestForm />}
        </div>
      </div>
    </div>
  );
};

export default FormHandle;
