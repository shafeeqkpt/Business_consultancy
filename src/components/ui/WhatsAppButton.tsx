import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import ServiceSelector from './ServiceSelector';

export default function WhatsAppButton() {
  const [showServiceSelector, setShowServiceSelector] = useState(false);
  const phoneNumber = '919645353469';

  return (
    <>
      <button
        onClick={() => setShowServiceSelector(true)}
        className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300 flex items-center gap-2 group"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 ease-in-out">
          Chat with us
        </span>
      </button>

      {showServiceSelector && (
        <ServiceSelector 
          phoneNumber={phoneNumber}
          onClose={() => setShowServiceSelector(false)}
        />
      )}
    </>
  );
}