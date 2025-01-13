import React from 'react';
import { motion } from 'framer-motion';
import ProductCard from './ProductCard';

export default function ProductSection() {
  const products = [
    {
      title: "Finacco Advisory",
      description: "Expert financial consulting and business advisory services to optimize your operations and drive sustainable growth.",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=800",
      link: "/finacco-advisory"
    },
    {
      title: "Finacco Connect",
      description: "Advanced utility software solutions for Tally Prime, enabling seamless data integration and enhanced business functionality.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
      link: "/finacco-connect"
    },
    {
      title: "Finacco Launch",
      description: "Complete Tally Prime implementation services with expert setup, customization, and comprehensive training support.",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800",
      link: "/finacco-launch"
    }
  ];

  return (
    <div id="products" className="absolute inset-x-0 top-screen min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center text-gray-900 mb-4"
        >
          Our Solutions
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-gray-700 text-center max-w-2xl mx-auto mb-12"
        >
          Comprehensive financial solutions tailored to your business needs
        </motion.p>
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}