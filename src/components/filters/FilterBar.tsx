import React from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, Award } from 'lucide-react';

interface FilterBarProps {
  onSearch: (query: string) => void;
  onFilter: (category: string) => void;
}

export default function FilterBar({ onSearch, onFilter }: FilterBarProps) {
  const categories = ['All', 'Website', 'Mobile', 'E-commerce', 'Portfolio'];

  return (
    <motion.div 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="sticky top-0 z-20 bg-white/80 backdrop-blur-lg border-b border-gray-200 py-4"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="flex items-center gap-3">
            <Award className="h-8 w-8 text-blue-600" />
            <h1 className="text-xl font-bold text-gray-900">Design Awards</h1>
          </div>

          <div className="flex-1 max-w-md relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search awards..."
              onChange={(e) => onSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0">
            <Filter className="text-gray-400 w-5 h-5" />
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => onFilter(category)}
                className="px-4 py-1.5 text-sm rounded-full border border-gray-200 hover:border-blue-500 hover:text-blue-600 transition-colors whitespace-nowrap"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}