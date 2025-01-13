import React from 'react';
import { ChevronDown } from 'lucide-react';
import ImageCarousel from './ImageCarousel';

const heroImages = [
  {
    url: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=2000&h=1000",
    alt: "Financial Advisory"
  },
  {
    url: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=2000&h=1000",
    alt: "Tax Services"
  },
  {
    url: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=2000&h=1000",
    alt: "Accounting Services"
  }
];

export default function AdvisoryHero() {
  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative">
      <div className="h-[80vh]">
        <ImageCarousel images={heroImages} />
      </div>
      <button
        onClick={scrollToServices}
        className="w-full flex flex-col items-center justify-center py-8 bg-white hover:bg-gray-50 transition-colors"
      >
        <ChevronDown className="h-8 w-8 text-gray-600 animate-bounce" />
      </button>
    </div>
  );
}