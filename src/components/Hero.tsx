import React from 'react';
import ImageCarousel from './ImageCarousel/ImageCarousel';
import ContactSection from './sections/ContactSection';
import ScrollIndicator from './ui/ScrollIndicator';

export default function Hero() {
  return (
    <div className="flex flex-col">
      {/* Fixed height for navbar */}
      <div className="h-16" />
      
      {/* Fixed height for carousel */}
      <div className="h-[500px] relative overflow-hidden">
        <ImageCarousel />
      </div>

      {/* Contact section */}
      <ContactSection />

      {/* Scroll indicator */}
      <ScrollIndicator />
    </div>
  );
}