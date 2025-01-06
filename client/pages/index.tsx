import React, { useEffect, useState } from "react";
import { initMap } from "./api/map"; // Import your map initializer

const Index = () => {
  const [message, setMessage] = useState("Loading");
  const [activeItem, setActiveItem] = useState("home");

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
    <div className="flex h-screen">
      <div className="w-64 bg-gray-800 text-white p-4">
        <div className="mb-8">
          <h1 className="text-xl font-bold">Time to Cry</h1>
        </div>
        <nav>
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveItem(item.id)}
              className={`flex items-center w-full p-3 mb-2 rounded-lg hover:bg-gray-700 transition-colors ${
                activeItem === item.id ? "bg-gray-700" : ""
              }`}
            >
              <span>{item.label}</span>
            </button>
          ))}
        </nav>
      </div>
      <div className="flex-1 p-8">
        <div id="map" style={{ height: "500px", width: "100%" }}></div>
        {message}
      </div>
    </div>
  );
};

export default Index;
