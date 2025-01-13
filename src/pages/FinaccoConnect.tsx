import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  FileSpreadsheet, 
  Columns, 
  ListTree, 
  Link2, 
  Download,
  PlayCircle,
  CheckCircle2,
  ArrowRight,
  Mail
} from 'lucide-react';

const features = [
  {
    icon: FileSpreadsheet,
    title: "Excel to Tally Import",
    description: "Import vouchers and masters like sales, purchases, expenses, income, and more directly from Excel to Tally Prime."
  },
  {
    icon: Columns,
    title: "Customizable Columns",
    description: "Choose specific columns for Excel and generate new templates that match your business needs."
  },
  {
    icon: ListTree,
    title: "Dropdown Ledger Selection",
    description: "Select ledgers from existing Tally entries or auto-create new ledgers during import process."
  },
  {
    icon: Link2,
    title: "Seamless Integration",
    description: "User-friendly interface ensures error-free data transfer between Excel and Tally Prime."
  }
];

const steps = [
  {
    title: "Customize Template",
    description: "Select your required columns and generate a custom Excel template."
  },
  {
    title: "Fill Data",
    description: "Enter your voucher or master data into the Excel template."
  },
  {
    title: "Import to Tally",
    description: "Use Finacco Connect to import your data into Tally Prime."
  },
  {
    title: "Ready to Use",
    description: "Your ledgers and vouchers are now ready in Tally Prime."
  }
];

const plans = [
  {
    name: "Free Trial",
    price: "₹0",
    duration: "14 Days",
    features: [
      "Basic Excel Import",
      "Standard Templates",
      "Email Support",
      "Single Company"
    ]
  },
  {
    name: "Premium",
    price: "₹4,999",
    duration: "Lifetime",
    features: [
      "Advanced Excel Import",
      "Custom Templates",
      "Priority Support",
      "Multiple Companies",
      "Auto Ledger Creation",
      "Free Updates"
    ]
  }
];

export default function FinaccoConnect() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[80vh] bg-gradient-to-br from-blue-600 to-indigo-700 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557264337-e8a93017fe92?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-10" />
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-white space-y-6"
            >
              <h1 className="text-5xl font-bold leading-tight">
                Finacco Connect: Simplify Tally Prime Data Management
              </h1>
              <p className="text-xl text-blue-100">
                Import, Customize, and Manage Data Seamlessly
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center gap-2">
                  <Download className="h-5 w-5" />
                  Download Now
                </button>
                <button className="px-8 py-3 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-400 transition-colors">
                  Buy Now
                </button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="hidden md:block"
            >
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
                alt="Excel to Tally"
                className="rounded-lg shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Finacco Connect?
            </h2>
            <p className="text-xl text-gray-600">
              Powerful features to streamline your data management
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <feature.icon className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600">
              Four simple steps to transform your data management
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">
                    {step.description}
                  </p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                    <ArrowRight className="h-6 w-6 text-blue-600" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Demo Section */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              See It In Action
            </h2>
            <p className="text-xl text-gray-600">
              Watch how Finacco Connect simplifies your workflow
            </p>
          </motion.div>

          <div className="aspect-video bg-gray-100 rounded-xl overflow-hidden shadow-lg">
            <div className="w-full h-full flex items-center justify-center">
              <PlayCircle className="h-20 w-20 text-blue-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-600">
              Select the perfect plan for your business needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-blue-600">
                    {plan.price}
                  </span>
                  <span className="text-gray-600">/{plan.duration}</span>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-blue-600" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-500 transition-colors">
                  Get Started
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-600">
              Have questions? We're here to help
            </p>
          </motion.div>

          <div className="bg-white p-8 rounded-xl shadow-lg">
            <form className="space-y-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Message
                </label>
                <textarea
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  rows={4}
                  placeholder="Your message"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-500 transition-colors flex items-center justify-center gap-2"
              >
                <Mail className="h-5 w-5" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}