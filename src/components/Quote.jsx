import React from 'react';
import { motion } from 'framer-motion';

const quote = "“A lesson without pain is meaningless. That’s because no one can gain without sacrificing something. But by enduring that pain and overcoming it, you shall obtain a powerful, unmatched heart.” ― Edward Elric, Fullmetal Alchemist: Brotherhood";

const Quote = () => {
  const quoteArray = quote.split(''); 
  return (
    <motion.div
      className="flex justify-center items-center py-8 px-4 bg-white dark:bg-gray-800"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.p 
        className="text-4xl font-semibold italic text-black dark:text-gray-300 text-center w-full max-w-none"
        style={{ fontFamily: "'Arima', cursive", letterSpacing: '0.1em' }}
      >
        {quoteArray.map((char, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 20 }}  // Start with invisible and moved down slightly
            animate={{ opacity: 1, y: 0 }}   // Animate to visible and normal position
            transition={{ 
              duration: 0.5, // Duration of each letter animation
              ease: 'easeOut', // Smooth easing
              delay: index * 0.03, // Delay each letter slightly (smooth cascade effect)
            }}
          >
            {char}
          </motion.span>
        ))}
      </motion.p>
    </motion.div>
  );
};

export default Quote;
