import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function ScrollIndicator() {
  const scrollToServices = () => {
    const servicesSection = document.getElementById('products');
    servicesSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.button
      onClick={scrollToServices}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, y: [0, 10, 0] }}
      transition={{ 
        opacity: { delay: 1 },
        y: { repeat: Infinity, duration: 1.5 }
      }}
      className="absolute bottom-4 left-1/2 -translate-x-1/2 text-gray-600 hover:text-gray-800 transition-colors"
    >
      <ChevronDown className="h-8 w-8" />
    </motion.button>
  );
}