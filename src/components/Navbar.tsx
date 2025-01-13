import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Calculator } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed w-full z-50"
    >
      <div className="absolute inset-0 bg-white/90 backdrop-blur-lg shadow-sm" />
      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center group">
            <motion.div
              whileHover={{ rotate: 180 }}
              transition={{ duration: 0.3 }}
              className="p-2 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg"
            >
              <Calculator className="h-6 w-6 text-white" />
            </motion.div>
            <span className="ml-2 text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800 group-hover:from-blue-700 group-hover:to-blue-900 transition-all">
              Finacco Solutions
            </span>
          </Link>
          
          <div className="hidden md:flex space-x-8">
            {['Services', 'Products', 'Contact'].map((item, index) => (
              <motion.a
                key={item}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                href={`#${item.toLowerCase()}`}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                {item}
              </motion.a>
            ))}
          </div>

          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700"
          >
            {isOpen ? <X /> : <Menu />}
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden relative"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white shadow-lg">
              {['Services', 'Products', 'Contact'].map((item, index) => (
                <motion.a
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  href={`#${item.toLowerCase()}`}
                  className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}