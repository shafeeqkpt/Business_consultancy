import React, { useEffect } from 'react';
import AdvisoryHero from '../components/advisory/AdvisoryHero';
import { motion } from 'framer-motion';
import { advisoryServices } from '../data/advisoryServices';

export default function FinaccoAdvisory() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <AdvisoryHero />
      
      <div id="services" className="max-w-6xl mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our comprehensive range of financial and business advisory services designed to help your business thrive.
          </p>
        </motion.div>

        <div className="space-y-32">
          {advisoryServices.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`flex flex-col ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } gap-12 items-center rounded-3xl p-12 group ${
                index % 2 === 0 ? 'bg-blue-50/50' : 'bg-indigo-50/50'
              }`}
            >
              <div className="w-full md:w-1/2">
                <div className="overflow-hidden rounded-2xl relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-indigo-600/10 group-hover:opacity-0 transition-opacity duration-500" />
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-[400px] object-cover rounded-2xl shadow-lg transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2 space-y-6 group-hover:translate-y-[-8px] transition-transform duration-500">
                <div className="space-y-2">
                  <h3 className="text-3xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {service.name}
                  </h3>
                  <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full transform origin-left group-hover:scale-x-150 transition-transform duration-500" />
                </div>
                <p className="text-lg text-gray-600">{service.description}</p>
                <p className="text-gray-700">{service.detailedDescription}</p>
                <button 
                  onClick={() => {
                    const message = encodeURIComponent(`Hi, I'm interested in your ${service.name} service. Can you provide more information?`);
                    window.open(`https://wa.me/919645353469?text=${message}`, '_blank');
                  }}
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transform hover:translate-y-[-2px] transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  Enquire Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 text-center bg-white rounded-2xl p-16 shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact us today for a personalized consultation about your business needs.
          </p>
          <a
            href="mailto:contact@finaccosolutions.com"
            className="inline-block px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transform hover:translate-y-[-2px] transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Get Started Today
          </a>
        </motion.div>
      </div>
    </div>
  );
}