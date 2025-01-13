import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductSection from './components/ProductSection';
import FinaccoAdvisory from './pages/FinaccoAdvisory';
import FinaccoConnect from './pages/FinaccoConnect';
import WhatsAppButton from './components/ui/WhatsAppButton';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <main>
              <Hero />
              <ProductSection />
            </main>
          } />
          <Route path="/finacco-advisory" element={<FinaccoAdvisory />} />
          <Route path="/finacco-connect" element={<FinaccoConnect />} />
        </Routes>
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;