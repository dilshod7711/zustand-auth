import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white shadow-inner mt-20 py-6">
      <div className="text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} MyApp. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
