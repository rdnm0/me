import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="flex justify-center space-x-6 p-6 bg-gray-100 dark:bg-gray-800">
      <a href="https://github.com/rdnm0" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white">
        <FaGithub size={24} />
      </a>
      <a href="https://www.linkedin.com/in/rohan-dhanam-55b846264/" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white">
        <FaLinkedin size={24} />
      </a>
      <a href="https://www.instagram.com/rohandnm/" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white">
        <FaInstagram size={24} />
      </a>
    </footer>
  );
};

export default Footer;
