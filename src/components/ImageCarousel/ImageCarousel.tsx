import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import useCarousel from './useCarousel';
import CarouselIndicators from './CarouselIndicators';
import CarouselControls from './CarouselControls';

const images = [
  {
    url: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=2000&h=1000",
    alt: "Business Consulting"
  },
  {
    url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2000&h=1000",
    alt: "Software Solutions"
  },
  {
    url: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=2000&h=1000",
    alt: "Implementation Services"
  }
];

export default function ImageCarousel() {
  const { currentIndex, direction, setCurrentIndex, slideVariants } = useCarousel(images.length);

  return (
    <div className="relative h-full w-full">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <div className="relative h-full">
            <img
              src={images[currentIndex].url}
              alt={images[currentIndex].alt}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/30" />
          </div>
        </motion.div>
      </AnimatePresence>

      <CarouselControls
        onPrevious={() => setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))}
        onNext={() => setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))}
      />

      <CarouselIndicators
        total={images.length}
        current={currentIndex}
        onChange={setCurrentIndex}
      />
    </div>
  );
}