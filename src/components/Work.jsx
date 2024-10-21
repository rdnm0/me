import React from 'react';

const Work = () => {
  return (
    <div id="work" className="p-8 dark:bg-gray-900">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">My Work</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="border border-gray-300 dark:border-gray-700 p-6 rounded-lg text-center">
          <p className="text-gray-600 dark:text-gray-400">Project 1</p>
        </div>
        <div className="border border-gray-300 dark:border-gray-700 p-6 rounded-lg text-center">
          <p className="text-gray-600 dark:text-gray-400">Project 2</p>
        </div>
        <div className="border border-gray-300 dark:border-gray-700 p-6 rounded-lg text-center">
          <p className="text-gray-600 dark:text-gray-400">Project 3</p>
        </div>
        <div className="border border-gray-300 dark:border-gray-700 p-6 rounded-lg text-center">
          <p className="text-gray-600 dark:text-gray-400">Project 4</p>
        </div>
      </div>
    </div>
  );
};

export default Work;
