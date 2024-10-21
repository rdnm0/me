import React from 'react';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center px-4 dark:bg-gray-900">
      <h1 className="text-6xl font-bold mb-4 text-gray-900 dark:text-white">
        Hey, I'm Rohan. 
        {/* Waving emoji button */}
        <button className="inline-flex items-center justify-center p-1 focus:outline-none">
          <span className="text-6xl hover:animate-spin transition-transform duration-300">
            👋
          </span>
        </button>
      </h1>
      <p className="text-xl text-black dark:text-gray-400 mb-12 max-w-2xl">
        I'm a 16 year old software developer based in Toronto, I love solving problems and building my imagination with programming!
      </p>
      
      <hr className="border-black dark:border-gray-700 w-3/4 mb-8" />
      <p className="text-mid text-gray-500 dark:text-gray-500">
        scroll down to learn more! : D
      </p> 
    </div>
  );
};

export default Home;
