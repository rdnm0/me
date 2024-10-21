import React from 'react';

const Work = () => {
  return (
    <div id="work" className="p-8 dark:bg-gray-900">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">My Work</h2>
      <div className="space-y-6">
        <div className="p-4 rounded-lg bg-gray-100 dark:bg-gray-800 text-center">
          <a href="https://duckiapp.vercel.app/" className="text-2xl font-semibold text-blue-500 dark:text-blue-400">Ducki</a>
          <p className="mt-2 text-gray-600 dark:text-gray-400">Ducki is an A.I. powered code extension, situated in your IDE. (VSCode, JetBrains, Zed)</p>
        </div>
        <div className="p-4 rounded-lg bg-gray-100 dark:bg-gray-800 text-center">
          <a href="https://graphimator.vercel.app/" className="text-2xl font-semibold text-blue-500 dark:text-blue-400">DevR</a>
          <p className="mt-2 text-gray-600 dark:text-gray-400">DevR is a dynamic equation visualizer built to use for my IBDP SL Math AA IA.</p>
        </div>
        <div className="p-4 rounded-lg bg-gray-100 dark:bg-gray-800 text-center">
          <a href="https://github.com/RC-6989/Verbalflow" className="text-2xl font-semibold text-blue-500 dark:text-blue-400">VerbalFlow</a>
          <p className="mt-2 text-gray-600 dark:text-gray-400">VerbalFlow is an A.I. powered interview prep assistant - built for HackTheNorth 2024.</p>
        </div>
        <div className="p-4 rounded-lg bg-gray-100 dark:bg-gray-800 text-center">
          <a href="https://devpost.com/software/seva-6ofbzh" className="text-2xl font-semibold text-blue-500 dark:text-blue-400">SEVA</a>
          <p className="mt-2 text-gray-600 dark:text-gray-400">SEVA is a volunteer searching platform powered by various API databases - built for NSBEHacks 2024.</p>
        </div>
      </div>
    </div>
  );
};

export default Work;
