import React, { useState, useEffect } from "react";
import { initMap } from "./api/map"; // Import your map initializer

const MenuIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="3" y1="12" x2="21" y2="12"></line>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <line x1="3" y1="18" x2="21" y2="18"></line>
  </svg>
);

const CloseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

const Index = () => {
  const [message, setMessage] = useState("Loading");
  const [activeItem, setActiveItem] = useState("home");
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    // Dynamically load Google Maps script
    const loadGoogleMapsScript = () => {
      if (window.google && window.google.maps) {
        // Initialize map once the script is loaded
        initMap();
      } else {
        const script = document.createElement("script");
        script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyAHP4EymGHsVNUoPLfgwyx0gnlM9OujR8k&callback=initMap`;
        script.async = true;
        script.defer = true;
        script.onload = () => {
          if (window.google && window.google.maps) {
            initMap();
          }
        };
        document.head.appendChild(script);
      }
    };

    loadGoogleMapsScript();

    fetch("http://localhost:8080/api/home")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setMessage(data.message);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const menuItems = [
    { id: "home", label: "🏠 Home" },
    { id: "analytics", label: "📊 Analytics" },
    { id: "profile", label: "👤 Profile" },
    { id: "settings", label: "⚙️ Settings" },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Top Navigation Bar - Always visible */}
      <nav className="bg-gray-800 text-white fixed w-full z-10">
        <div className="flex items-center px-4 py-3">
          <button
            onClick={() => setSidebarOpen(!isSidebarOpen)}
            className="p-2 rounded-lg hover:bg-gray-700 transition-colors mr-4"
            aria-label="Toggle menu"
          >
            {isSidebarOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
          <h1 className="text-xl font-bold">Wayfeel</h1>
        </div>
      </nav>

      <div className="flex pt-14">
        {/* Sidebar */}
        <div
          className={`fixed inset-y-0 left-0 transform ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } bg-gray-800 text-white w-64 transition-transform duration-300 ease-in-out z-20 mt-14`}
        >
          <nav className="p-4">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveItem(item.id);
                  setSidebarOpen(false);
                }}
                className={`flex items-center w-full p-3 mb-2 rounded-lg hover:bg-gray-700 transition-colors ${
                  activeItem === item.id ? "bg-gray-700" : ""
                }`}
              >
                <span>{item.label}</span>
              </button>
            ))}
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          {/* Overlay */}
          {isSidebarOpen && (
            <div
              className="fixed inset-0 bg-black bg-opacity-50 z-10 mt-14"
              onClick={() => setSidebarOpen(false)}
            />
          )}

          <main className="p-4">
            <div
              id="map"
              style={{ height: "500px", width: "100%" }}
              className="rounded-lg shadow-lg mb-4"
            ></div>
            <div className="bg-white p-4 rounded-lg shadow">{message}</div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Index;
