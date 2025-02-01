import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button"

const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-blue-500 to-teal-400 text-white">
      {/* Header Section */}
      <header className="p-6 flex justify-between items-center">
        <h1 className="text-3xl font-bold">WayFeel</h1>
        <nav className="space-x-4">
          <a href="#features" className="hover:underline">
            Features
          </a>
          <a href="#about" className="hover:underline">
            About
          </a>
          <a href="#contact" className="hover:underline">
            Contact
          </a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="flex-1 flex flex-col items-center justify-center text-center p-6">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-bold mb-4">
            Track Your Moods Anywhere, Anytime
          </h2>
          <p className="text-lg mb-6">
            Discover patterns in your emotions and connect them to your
            locations. Start your journey to self-awareness today.
          </p>
          <Button className="bg-white text-blue-500 font-bold px-6 py-3 rounded-lg shadow-lg hover:bg-gray-100">
            Get Started
          </Button>
        </motion.div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-white text-gray-800 p-8">
        <h3 className="text-3xl font-bold text-center mb-8">Features</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            className="p-6 bg-blue-100 rounded-lg shadow"
            whileHover={{ scale: 1.05 }}
          >
            <h4 className="text-xl font-bold mb-2">Mood Journaling</h4>
            <p>Log your emotions and reflect on your day with ease.</p>
          </motion.div>
          <motion.div
            className="p-6 bg-blue-100 rounded-lg shadow"
            whileHover={{ scale: 1.05 }}
          >
            <h4 className="text-xl font-bold mb-2">Location Tracking</h4>
            <p>
              Link your emotional patterns to specific locations you visit.
            </p>
          </motion.div>
          <motion.div
            className="p-6 bg-blue-100 rounded-lg shadow"
            whileHover={{ scale: 1.05 }}
          >
            <h4 className="text-xl font-bold mb-2">Insights & Analytics</h4>
            <p>
              Visualize trends in your mood over time with beautiful charts.
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="p-8">
        <h3 className="text-3xl font-bold text-center mb-8">About Us</h3>
        <p className="max-w-2xl mx-auto text-center text-lg">
          WayFeel is your personal emotional companion. We aim to empower
          individuals to better understand themselves by connecting their
          emotions to their environment.
        </p>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gray-100 p-8">
        <h3 className="text-3xl font-bold text-center mb-8">Contact Us</h3>
        <form className="max-w-xl mx-auto">
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              type="text"
              className="w-full p-2 border rounded-md"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="w-full p-2 border rounded-md"
              placeholder="Your Email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              className="w-full p-2 border rounded-md"
              rows={4}
              placeholder="Your Message"
            ></textarea>
          </div>
          <Button className="bg-blue-500 text-white font-bold px-6 py-3 rounded-lg hover:bg-blue-600">
            Submit
          </Button>
        </form>
      </section>

      {/* Footer */}
      <footer className="p-6 bg-gray-800 text-center text-white">
        <p>&copy; {new Date().getFullYear()} WayFeel. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
