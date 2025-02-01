import React, { useState } from "react";
import { Card, CardContent } from "./ProfilePage";


const SettingsPage = () => {
  // State for settings
  const [username, setUsername] = useState("John Doe");
  const [email, setEmail] = useState("john.doe@example.com");
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  const handleSave = () => {
    alert("Settings saved successfully!");
    // Logic to save settings can be added here
  };

  return (
    
    <div className="min-h-screen bg-gray-100 p-4">
        
      <h1 className="text-2xl font-bold mb-4">Settings</h1>

      <Card className="mb-4">
        <CardContent>
          <h2 className="text-xl font-bold mb-2">Profile Settings</h2>
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium">
              Username
            </label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full mt-1 p-2 border rounded-md"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mt-1 p-2 border rounded-md"
            />
          </div>
        </CardContent>
      </Card>

      <Card className="mb-4">
        <CardContent>
          <h2 className="text-xl font-bold mb-2">Preferences</h2>
          <div className="flex items-center justify-between mb-4">
            <span>Enable Notifications</span>
            <input
              type="checkbox"
              checked={notificationsEnabled}
              onChange={() => setNotificationsEnabled(!notificationsEnabled)}
              className="form-checkbox h-5 w-5"
            />
          </div>
          <div className="flex items-center justify-between">
            <span>Dark Mode</span>
            <input
              type="checkbox"
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
              className="form-checkbox h-5 w-5"
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SettingsPage;
