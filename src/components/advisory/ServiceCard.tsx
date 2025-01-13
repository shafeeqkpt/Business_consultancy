import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

interface ServiceCardProps {
  name: string;
  description: string;
  detailedDescription: string;
  image: string;
  index: number;
}

export default function ServiceCard({ name, description, detailedDescription, image, index }: ServiceCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow bg-white"
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img 
          src={image}
          alt={name}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/80" />
      </div>
      <div className="absolute inset-0 flex flex-col justify-end p-6">
        <h3 className="text-2xl font-bold text-white mb-2">{name}</h3>
        <p className="text-white/90 text-sm mb-4">{description}</p>
        <button
          onClick={() => setIsExpanded(true)}
          className="inline-flex items-center text-white/90 hover:text-white text-sm font-medium group"
        >
          Learn More 
          <ChevronRight className="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      {isExpanded && (
        <div
          className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4"
          onClick={() => setIsExpanded(false)}
        >
          <div
            className="bg-white rounded-2xl p-6 max-w-lg w-full shadow-2xl"
            onClick={e => e.stopPropagation()}
          >
            <h4 className="text-2xl font-bold text-gray-900 mb-4">{name}</h4>
            <p className="text-gray-600 mb-2">{description}</p>
            <p className="text-gray-700">{detailedDescription}</p>
            <button
              onClick={() => setIsExpanded(false)}
              className="mt-6 w-full py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </motion.div>
  );
}