import React, { useEffect, useState } from 'react';
import Papa from 'papaparse';
import { motion } from 'framer-motion';

const MonkeytypeStats = () => {
  const [stats, setStats] = useState([]);

  useEffect(() => {
    // Fetch and parse the CSV file
    Papa.parse('/results.csv', {
      download: true,
      header: true,
      complete: (results) => {
        setStats(results.data);
      },
      error: (error) => {
        console.error('Error parsing CSV:', error);
      },
    });
  }, []);

  return (
    <div id="monkeytype-stats" className="p-8 dark:bg-gray-900">
      <h2 className="text-5xl font-bold text-center mb-12 text-gray-900 dark:text-white">My Monkeytype Stats</h2>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <table className="min-w-full bg-white dark:bg-gray-800 rounded-lg shadow-lg">
          <thead>
            <tr className="bg-gray-200 dark:bg-gray-700">
              <th className="py-3 px-6 text-left text-gray-800 dark:text-white">Date</th>
              <th className="py-3 px-6 text-left text-gray-800 dark:text-white">WPM</th>
              <th className="py-3 px-6 text-left text-gray-800 dark:text-white">Accuracy</th>
            </tr>
          </thead>
          <tbody>
            {stats.map((stat, index) => (
              <tr key={index} className="border-b border-gray-200 dark:border-gray-600">
                <td className="py-3 px-6 text-gray-800 dark:text-gray-300">{stat.Date}</td>
                <td className="py-3 px-6 text-gray-800 dark:text-gray-300">{stat.WPM}</td>
                <td className="py-3 px-6 text-gray-800 dark:text-gray-300">{stat.Accuracy}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </motion.div>
    </div>
  );
};

export default MonkeytypeStats;
