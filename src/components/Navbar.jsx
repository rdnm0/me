import React from 'react';
import DarkModeToggle from './DarkModeToggle';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 flex flex-wrap justify-between items-center p-4 sm:p-6 bg-white dark:bg-gray-800 shadow-md text-lg z-50">
      <a href="#home" className="text-3xl font-bold text-gray-900 dark:text-white hover:animate-spin">
        RD.
      </a>
      <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8 mt-4 sm:mt-0">
        <a href="#about" className="text-gray-700 dark:text-gray-300 font-semibold hover:text-black dark:hover:text-white transform hover:scale-110 transition duration-300 ease-in-out">
          About
        </a>
        <a href="#work" className="text-gray-700 dark:text-gray-300 font-semibold hover:text-black dark:hover:text-white transform hover:scale-110 transition duration-300 ease-in-out">
          Work
        </a>
        <a href="#resume" className="text-gray-700 dark:text-gray-300 font-semibold hover:text-black dark:hover:text-white transform hover:scale-110 transition duration-300 ease-in-out">
          Resume
        </a>
        <DarkModeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
