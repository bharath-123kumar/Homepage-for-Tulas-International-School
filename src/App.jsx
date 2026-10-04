import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Statistics from './components/Statistics';
import Programs from './components/Programs';
import WhyTIS from './components/WhyTIS';
import Facilities from './components/Facilities';
import CampusLife from './components/CampusLife';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';
import AdmissionsModal from './components/AdmissionsModal';

export default function App() {
  const [isAdmissionsModalOpen, setIsAdmissionsModalOpen] = useState(false);

  const handleOpenAdmissions = () => {
    setIsAdmissionsModalOpen(true);
  };

  const handleCloseAdmissions = () => {
    setIsAdmissionsModalOpen(false);
  };

  const handleExplore = (e) => {
    e?.preventDefault();
    const aboutElem = document.getElementById('about');
    if (aboutElem) {
      aboutElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-navy-950 text-slate-100 font-sans relative overflow-x-hidden selection:bg-gold-500 selection:text-navy-950">
      {/* Scroll Progress Bar at very top */}
      <ScrollProgress />

      {/* Navigation Bar */}
      <Navbar onOpenAdmissions={handleOpenAdmissions} />

      {/* Main Page Content */}
      <main id="main-content">
        <Hero
          onOpenAdmissions={handleOpenAdmissions}
          onExplore={handleExplore}
        />
        <About onLearnMore={handleExplore} />
        <Statistics />
        <Programs onSelectProgram={handleOpenAdmissions} />
        <WhyTIS />
        <Facilities />
        <CampusLife />
        <Testimonials />
        <CTA onOpenAdmissions={handleOpenAdmissions} />
        <Contact />
      </main>

      {/* Footer */}
      <Footer onOpenAdmissions={handleOpenAdmissions} />

      {/* Custom Desktop Cursor */}
      <CustomCursor />

      {/* Global Interactive Admissions Modal */}
      <AdmissionsModal
        isOpen={isAdmissionsModalOpen}
        onClose={handleCloseAdmissions}
      />
    </div>
  );
}
