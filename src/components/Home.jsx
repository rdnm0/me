import React from 'react';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center px-4 dark:bg-gray-900">
      <h1 className="text-6xl font-bold mb-4 text-gray-900 dark:text-white">Hey, I'm Rohan 👋</h1>
      <p className="text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-2xl">
        I'm a product designer based in Toronto who enjoys breaking down complex problems
        to craft solutions that make it simpler for people to achieve their goals.
      </p>
      <hr className="border-gray-300 dark:border-gray-700 w-3/4 mb-8" />
      <p className="text-sm text-gray-500 dark:text-gray-500">
      </p>
    </div>
  );
};

export default Home;
