import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-32 px-6 text-center">
        <h1 className="text-5xl font-bold mb-6">Welcome to MyApp</h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Manage your dashboard, profile, and FAQ with ease. Experience a clean
          and professional interface.
        </p>
        <button className="bg-white text-indigo-600 font-bold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition">
          Get Started
        </button>
      </section>

      <section className="py-20 px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-indigo-600 mb-2">
              Dashboard
            </h3>
            <p className="text-gray-600">
              Real-time analytics and clean dashboard layout to monitor all
              activities.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-indigo-600 mb-2">
              Profile Management
            </h3>
            <p className="text-gray-600">
              Update your profile, avatar, and settings easily in one place.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-indigo-600 mb-2">
              Security
            </h3>
            <p className="text-gray-600">
              Two-factor authentication and secure login to protect your data.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gray-100">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              About MyApp
            </h2>
            <p className="text-gray-600 mb-6">
              MyApp is designed to make your workflow seamless and organized.
              From dashboards to user settings, everything is built with
              simplicity and efficiency in mind.
            </p>
            <button className="bg-indigo-600 text-white px-6 py-3 rounded-xl shadow hover:bg-indigo-700 transition">
              Learn More
            </button>
          </div>
          <div className="flex-1">
            <img
              src="https://images.unsplash.com/photo-1581091012184-84b4c4c1f151?auto=format&fit=crop&w=800&q=80"
              alt="About illustration"
              className="rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          What Users Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <p className="text-gray-600 mb-4">
              "MyApp transformed the way I manage my tasks. Clean and
              efficient!"
            </p>
            <h4 className="text-indigo-600 font-semibold">Emily R.</h4>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <p className="text-gray-600 mb-4">
              "The dashboard is intuitive and simple to use. Highly
              recommended."
            </p>
            <h4 className="text-indigo-600 font-semibold">John D.</h4>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <p className="text-gray-600 mb-4">
              "Everything I need is right at my fingertips. Excellent support!"
            </p>
            <h4 className="text-indigo-600 font-semibold">Sarah K.</h4>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-indigo-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to get started?</h2>
        <p className="text-lg mb-8">
          Join thousands of users who trust MyApp for their daily workflow.
        </p>
        <button className="bg-white text-indigo-600 font-bold px-8 py-3 rounded-full shadow hover:shadow-lg transition">
          Sign Up Now
        </button>
      </section>
    </div>
  );
};

export default Home;
