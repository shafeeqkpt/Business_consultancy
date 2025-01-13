import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  index: number;
}

export default function ProductCard({ title, description, image, link, index }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="group relative overflow-hidden rounded-2xl bg-white shadow-xl"
    >
      <div className="aspect-[16/9] overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      
      <div className="relative p-6 bg-gradient-to-br from-white to-gray-50">
        <motion.h3 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-2xl font-bold text-gray-900 mb-4"
        >
          {title}
        </motion.h3>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-gray-700 mb-6"
        >
          {description}
        </motion.p>
        <Link
          to={link}
          className="inline-flex items-center text-blue-600 font-semibold group-hover:text-blue-700"
        >
          Learn More <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>
    </motion.div>
  );
}