import React from 'react';

const Work = () => {
  return (
    <div id="work" className="p-8 dark:bg-gray-900">
      <h2 className="text-6xl font-bold text-center mb-12 text-gray-900 dark:text-white">My Work</h2>
      <p className="text-center text-xl text-gray-700 dark:text-gray-300 mb-8">
        Here are some of my projects that showcase my skills in web development and AI. Click on the titles to explore them!
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {/* Ducki Project */}
        <div className="p-8 rounded-lg bg-gray-100 dark:bg-gray-800 text-center shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
          <a href="https://duckiapp.vercel.app/" className="text-3xl font-semibold text-blue-500 dark:text-blue-400 hover:underline">Ducki</a>
          <img src="/ducki.png" alt="Ducki Project" className="w-full h-60 object-cover rounded-lg mt-4" />
          <p className="mt-4 text-gray-600 dark:text-gray-400 text-lg">Ducki is an A.I. powered code extension, situated in your IDE (VSCode, JetBrains, Zed).</p>
        </div>
        {/* DevR Project */}
        <div className="p-8 rounded-lg bg-gray-100 dark:bg-gray-800 text-center shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
          <a href="https://graphimator.vercel.app/" className="text-3xl font-semibold text-blue-500 dark:text-blue-400 hover:underline">DevR</a>
          <img src="/devr.png" alt="DevR Project" className="w-full h-60 object-cover rounded-lg mt-4" />
          <p className="mt-4 text-gray-600 dark:text-gray-400 text-lg">DevR is a dynamic equation visualizer built with ThreeJs - I was bored in English class.</p>
        </div>
        {/* VerbalFlow Project */}
        <div className="p-8 rounded-lg bg-gray-100 dark:bg-gray-800 text-center shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
          <a href="https://github.com/RC-6989/Verbalflow" className="text-3xl font-semibold text-blue-500 dark:text-blue-400 hover:underline">VerbalFlow</a>
          <img src="verbal.png" alt="VerbalFlow Project" className="w-full h-60 object-cover rounded-lg mt-4" />
          <p className="mt-4 text-gray-600 dark:text-gray-400 text-lg">VerbalFlow is an A.I. powered interview prep assistant - built for HackTheNorth 2024.</p>
        </div>
        {/* SEVA Project */}
        <div className="p-8 rounded-lg bg-gray-100 dark:bg-gray-800 text-center shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
          <a href="https://devpost.com/software/seva-6ofbzh" className="text-3xl font-semibold text-blue-500 dark:text-blue-400 hover:underline">SEVA</a>
          <img src="seva.png" alt="SEVA Project" className="w-full h-60 object-cover rounded-lg mt-4" />
          <p className="mt-4 text-gray-600 dark:text-gray-400 text-lg">SEVA is a volunteer searching platform powered by various API databases - built for NSBEHacks 2024.</p>
        </div>
      </div>
    </div>
  );
};

export default Work;
