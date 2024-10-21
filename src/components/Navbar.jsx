import React from 'react';
import DarkModeToggle from './DarkModeToggle';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-6 bg-white dark:bg-gray-800 shadow-md text-lg">
      <div className="text-3xl font-bold text-gray-900 dark:text-white">RD</div>
      <div className="flex items-center space-x-8">
        <a href="#about" className="text-gray-700 dark:text-gray-300 font-semibold hover:text-black dark:hover:text-white">About</a>
        <a href="#work" className="text-gray-700 dark:text-gray-300 font-semibold hover:text-black dark:hover:text-white">Work</a>
        <a href="#resume" className="text-gray-700 dark:text-gray-300 font-semibold hover:text-black dark:hover:text-white">Resume</a>
        <DarkModeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
