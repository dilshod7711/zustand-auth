import React from "react";

const Home = () => {
  return (
    <div className=" bg-gray-50">
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
    </div>
  );
};

export default Home;
