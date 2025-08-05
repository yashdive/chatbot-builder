import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion';
import { Brain } from 'lucide-react';

// Spinner component displays a loading animation with rotating tips
const Spinner = ({message = "Setting up your bot's brain..."}) => {

  // Array of fun loading tips to display
  const tips = [
    'Spinning up neurons...',
    'Teaching your bot grammar...',
    'Training emotional intelligence...',
    'Wiring virtual synapses...',
    'Feeding the bot pizza...',
  ];

  // State to keep track of which tip is currently shown
  const [tipIndex, setTipIndex] = useState(0);

  // Cycle through tips every 1.5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setTipIndex((i) => (i + 1) % tips.length);
    }, 1500);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-100 to-indigo-200 text-gray-800">
      {/* Animated brain icon using framer-motion */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0.5 }}
        animate={{ scale: [1, 1.1, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 1.2, repeat: Infinity }}
        className="text-7xl"
      >
        <Brain />
      </motion.div>
      {/* Display the current tip below the spinner */}
      <p className="mt-6 text-xl font-semibold animate-pulse">
        {tips[tipIndex]}
      </p>
    </div>
  )
}

export default Spinner
