import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import SymptomsSection from '../components/SymptomsSection';
import TreatmentSection from '../components/TreatmentSection';
import FAQSection from '../components/FAQSection';
import ResourcesSection from '../components/ResourcesSection';
import Footer from '../components/Footer';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <Hero />
      <AboutSection />
      <SymptomsSection />
      <TreatmentSection />
      <FAQSection />
      <ResourcesSection />
      <Footer />
    </div>
  );
};

export default LandingPage;