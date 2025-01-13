import React from 'react';
import { X, MessageCircle } from 'lucide-react';
import { advisoryServices } from '../../data/advisoryServices';

interface ServiceSelectorProps {
  phoneNumber: string;
  onClose: () => void;
}

export default function ServiceSelector({ phoneNumber, onClose }: ServiceSelectorProps) {
  const handleServiceSelect = (serviceName: string) => {
    const message = encodeURIComponent(`Hi, I'm interested in your ${serviceName} service. Can you provide more information?`);
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-xl max-w-md w-full max-h-[80vh] overflow-hidden">
        <div className="p-4 border-b border-gray-200 flex justify-between items-center">
          <h3 className="text-lg font-semibold text-gray-900">Select a Service</h3>
          <button
            onClick={onClose}
            className="p-1 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="h-5 w-5 text-gray-500" />
          </button>
        </div>
        
        <div className="overflow-y-auto p-4 space-y-2 max-h-[60vh]">
          {advisoryServices.map((service) => (
            <button
              key={service.name}
              onClick={() => handleServiceSelect(service.name)}
              className="w-full text-left p-3 hover:bg-gray-50 rounded-lg transition-colors flex justify-between items-center group"
            >
              <span className="text-gray-700 group-hover:text-blue-600">
                {service.name}
              </span>
              <MessageCircle className="h-4 w-4 text-green-500 opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}