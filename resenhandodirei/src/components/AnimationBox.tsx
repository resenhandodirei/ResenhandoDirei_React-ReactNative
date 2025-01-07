import React from 'react';
import { motion } from 'framer-motion';

const AnimatedBox: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        width: '100px',
        height: '100px',
        backgroundColor: 'skyblue',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <p>Animated Box</p>
    </motion.div>
  );
};

export default AnimatedBox;
