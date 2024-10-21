import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div id="about" className="relative flex flex-col md:flex-row items-center justify-center min-h-screen p-8 dark:bg-gray-900">

      {/* Text Section */}
      <motion.div
        className="md:w-1/2 h-full text-center md:text-left p-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-6xl font-bold mb-8 text-gray-900 dark:text-white">About Me</h2>
        <p className="text-2xl text-gray-600 dark:text-gray-400">
          Hi, I'm Rohan, a passionate product designer based in Toronto. I enjoy simplifying complex problems 
          and crafting user-friendly solutions that empower people to achieve their goals. I'm driven by a 
          love for minimalistic design and a desire to create meaningful experiences.
        </p>
      </motion.div>
      {/* Image Section */}
      <motion.div
        className="md:w-1/2 flex justify-center h-full"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <div className="w-96 h-96 rounded-full overflow-hidden">
          <img src="/gohanpfp.jpg" alt="Rohan's profile" className="object-cover w-full h-full" />
        </div>
      </motion.div>
    </div>
  );
};

export default About;
