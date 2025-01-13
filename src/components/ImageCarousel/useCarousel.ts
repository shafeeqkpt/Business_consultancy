import { useState, useEffect } from 'react';

export default function useCarousel(totalSlides: number) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(timer);
  }, [totalSlides]);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  return {
    currentIndex,
    setCurrentIndex: (newIndex: number | ((prev: number) => number)) => {
      if (typeof newIndex === 'function') {
        setCurrentIndex((prev) => {
          const next = newIndex(prev);
          setDirection(next > prev ? 1 : -1);
          return next;
        });
      } else {
        setDirection(newIndex > currentIndex ? 1 : -1);
        setCurrentIndex(newIndex);
      }
    },
    direction,
    slideVariants
  };
}