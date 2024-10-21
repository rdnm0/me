import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-6 bg-white shadow-md text-lg">
      <div className="text-3xl font-bold">RD</div>
      <div className="space-x-8">
        <a href="#about" className="text-gray-700 font-semibold hover:text-black">About</a>
        <a href="#work" className="text-gray-700 font-semibold hover:text-black">Work</a>
        <a href="#resume" className="text-gray-700 font-semibold hover:text-black">Resume</a>
      </div>
    </nav>
  );
};

export default Navbar;
