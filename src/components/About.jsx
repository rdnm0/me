import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div id="about" className="relative flex flex-col md:flex-row items-center justify-center min-h-screen p-8 dark:bg-gray-900">
      {/* Image Section */}
      <motion.div
        className="md:w-1/2 flex justify-center h-full mb-8 md:mb-0"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <div className="w-full md:w-[500px] h-auto overflow-hidden rounded-full transition-transform shadow-lg duration-300 transform hover:scale-110">
          <motion.img
            src="/gohanpfp.jpg"
            alt="Rohan's profile"
            className="object-cover w-full h-full"
            transition={{ duration: 5 }}
          />
        </div>
      </motion.div>

      {/* Text Section */}
      <motion.div
        className="md:w-1/2 h-full text-center md:text-left p-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-6xl font-bold mb-8 text-gray-900 dark:text-white">Who Am I?</h2>
        <p className="text-3xl text-gray-600 dark:text-gray-400 md:float-left md:w-3/4 md:pr-6">
          Hi, I'm Rohan, a passionate software developer based in <a href="https://ca.octobersveryown.com/" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">Toronto</a>. I'm currently studying in the International Baccalaureate Diploma Programme (IBDP) in 11th grade. In my free time, I enjoy hitting the gym to stay fit and playing video games to unwind (obsessed with <a href="https://dragonballsparkingzero.com/" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">Sparking Zero!</a> currently). For the past two years, I've been honing my coding skills, particularly focusing on competitive programming. I have a strong background in web development, where I enjoy creating user-friendly solutions that empower people to achieve their goals.
        </p>
      </motion.div>
    </div>
  );
};

export default About;
