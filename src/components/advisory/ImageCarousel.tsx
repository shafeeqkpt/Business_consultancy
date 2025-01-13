import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import useCarousel from '../../hooks/useCarousel';

interface Image {
  url: string;
  alt: string;
}

interface ImageCarouselProps {
  images: Image[];
}

export default function ImageCarousel({ images }: ImageCarouselProps) {
  const { currentIndex, setCurrentIndex, direction, slideVariants } = useCarousel(images.length);

  return (
    <div className="relative h-full w-full overflow-hidden">
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          key={currentIndex}
          src={images[currentIndex].url}
          alt={images[currentIndex].alt}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="absolute h-full w-full object-cover"
        />
      </AnimatePresence>

      <button
        onClick={() => setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/20 text-white hover:bg-black/30 transition-colors"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={() => setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/20 text-white hover:bg-black/30 transition-colors"
      >
        <ChevronRight className="h-6 w-6" />
      </button>
    </div>
  );
}