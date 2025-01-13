import React from 'react';
import { motion } from 'framer-motion';

interface CarouselIndicatorsProps {
  total: number;
  current: number;
  onChange: (index: number) => void;
}

export default function CarouselIndicators({ total, current, onChange }: CarouselIndicatorsProps) {
  return (
    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
      {Array.from({ length: total }).map((_, index) => (
        <motion.button
          key={index}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => onChange(index)}
          className={`w-2.5 h-2.5 rounded-full transition-colors ${
            index === current
              ? 'bg-white'
              : 'bg-white/50 hover:bg-white/70'
          }`}
        />
      ))}
    </div>
  );
}