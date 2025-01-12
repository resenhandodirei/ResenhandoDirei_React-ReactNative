import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { containerStyle, letterStyle, subtitleStyle } from './AnimationWordStyles';

const shuffleArray = (array: string[]) => {
  return array
    .map((a) => [Math.random(), a] as [number, string])
    .sort((a, b) => a[0] - b[0])
    .map((a) => a[1]);
};

const AnimatedWord: React.FC = () => {
  const [letters, setLetters] = useState<string[]>([]);
  const word = 'ResenhandoDirei';

  useEffect(() => {
    const interval = setInterval(() => {
      setLetters(shuffleArray(word.split('')));
    }, 200); // Slower shuffle interval

    setTimeout(() => {
      clearInterval(interval);
      setLetters(word.split(''));
    }, 5000); // Stop shuffling after 5 seconds for a slower effect

    return () => clearInterval(interval);
  }, [word]);

  return (
    <div style={containerStyle}>
      <div>
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }} // Slower animation
            style={letterStyle}
          >
            {letter}
          </motion.span>
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 5 }} // Appear after main word
        style={subtitleStyle}
      >
        Porque o futuro começa com um jovem que acredita
      </motion.div>
    </div>
  );
};

export default AnimatedWord;
