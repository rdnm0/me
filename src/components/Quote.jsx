import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const quote = "“A lesson without pain is meaningless. That’s because no one can gain without sacrificing something. But by enduring that pain and overcoming it, you shall obtain a powerful, unmatched heart.” ― Edward Elric, Fullmetal Alchemist: Brotherhood";

const Quote = () => {
  const quoteRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // Stop observing after it becomes visible
        }
      });
    });

    if (quoteRef.current) {
      observer.observe(quoteRef.current);
    }

    return () => {
      if (quoteRef.current) {
        observer.unobserve(quoteRef.current);
      }
    };
  }, []);

  return (
    <motion.div
      ref={quoteRef}
      className="flex justify-center items-center py-8 px-4 bg-white dark:bg-gray-800"
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }} // Fade in when visible
      transition={{ duration: 0.5 }} // Fade duration
    >
      <p 
        className="text-4xl font-semibold italic text-black dark:text-gray-300 text-center w-full max-w-none"
        style={{ fontFamily: "'Caveat Brush', cursive", letterSpacing: '0.1em' }}
      >
        {quote}
      </p>
    </motion.div>
  );
};

export default Quote;
