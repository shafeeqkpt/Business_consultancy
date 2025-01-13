import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function ContactSection() {
  return (
    <div className="bg-white shadow-inner">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Phone Numbers */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-4 p-4 rounded-xl bg-blue-50 border border-blue-100 group hover:shadow-md transition-shadow"
          >
            <div className="p-3 rounded-lg bg-blue-100 group-hover:bg-blue-200 transition-colors">
              <Phone className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h3 className="text-gray-900 font-semibold">Call Us</h3>
              <a href="tel:+919745524438" className="text-gray-600 hover:text-blue-600 block">
                +91 97455 24438
              </a>
              <a href="tel:+919645353469" className="text-gray-600 hover:text-blue-600 block">
                +91 96453 53469
              </a>
            </div>
          </motion.div>

          {/* Email */}
          <motion.a
            href="mailto:contact@finaccosolutions.com"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex items-center gap-4 p-4 rounded-xl bg-purple-50 border border-purple-100 group hover:shadow-md transition-shadow"
          >
            <div className="p-3 rounded-lg bg-purple-100 group-hover:bg-purple-200 transition-colors">
              <Mail className="h-6 w-6 text-purple-600" />
            </div>
            <div>
              <h3 className="text-gray-900 font-semibold">Email Us</h3>
              <p className="text-gray-600">contact@finaccosolutions.com</p>
            </div>
          </motion.a>

          {/* Location */}
          <motion.a
            href="https://maps.google.com/?q=Durrah+Tower+Manjeri"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex items-center gap-4 p-4 rounded-xl bg-emerald-50 border border-emerald-100 group hover:shadow-md transition-shadow"
          >
            <div className="p-3 rounded-lg bg-emerald-100 group-hover:bg-emerald-200 transition-colors">
              <MapPin className="h-6 w-6 text-emerald-600" />
            </div>
            <div>
              <h3 className="text-gray-900 font-semibold">Visit Us</h3>
              <p className="text-gray-600 text-sm">
                2nd Floor,<br />
                Court Road,<br />
                near Sreekrishna theatre, Manjeri,<br />
                Kerala 676121
              </p>
            </div>
          </motion.a>
        </div>
      </div>
    </div>
  );
}