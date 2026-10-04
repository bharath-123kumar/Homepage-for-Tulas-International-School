import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Mail, MapPin, ChevronRight, GraduationCap, Sparkles } from 'lucide-react';
import { schoolInfo, navigationLinks } from '../data/schoolData';

export default function Navbar({ onOpenAdmissions }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="bg-navy-950 border-b border-white/10 text-xs text-slate-300 hidden md:block relative z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 hover:text-gold-400 transition-colors">
              <MapPin className="w-3.5 h-3.5 text-gold-400" />
              <span>{schoolInfo.address}</span>
            </span>
            <span className="flex items-center gap-1.5 hover:text-gold-400 transition-colors">
              <Phone className="w-3.5 h-3.5 text-gold-400" />
              <a href={`tel:${schoolInfo.phoneHelpline}`}>{schoolInfo.phoneHelpline}</a>
            </span>
            <span className="flex items-center gap-1.5 hover:text-gold-400 transition-colors">
              <Mail className="w-3.5 h-3.5 text-gold-400" />
              <a href={`mailto:${schoolInfo.email}`}>{schoolInfo.email}</a>
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1 bg-gold-500/10 border border-gold-500/30 text-gold-400 px-2.5 py-0.5 rounded-full text-[11px] font-medium">
              <Sparkles className="w-3 h-3" /> Admissions Open 2026-27
            </span>
            <span className="text-slate-400">|</span>
            <a href={schoolInfo.websiteUrl} target="_blank" rel="noopener noreferrer" className="hover:text-gold-400 transition-colors">
              Official Portal ↗
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header
        className={`fixed top-0 md:top-[33px] left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'glass-nav shadow-lg py-3 backdrop-blur-md border-b border-white/10 bg-navy-950/90'
            : 'bg-gradient-to-b from-navy-950/90 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-gold-400 rounded-lg p-1"
          >
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-amber-400 via-gold-500 to-amber-600 p-[2px] shadow-gold-glow group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-navy-950 rounded-[10px] flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-gold-400" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-bold text-lg sm:text-xl tracking-wider text-white group-hover:text-gold-300 transition-colors leading-none">
                TULA'S
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-gold-400 font-semibold">
                International School
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-navy-900/60 p-1.5 rounded-full border border-white/10 backdrop-blur-sm">
            {navigationLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3.5 py-1.5 text-xs font-medium text-slate-300 hover:text-white hover:bg-white/10 rounded-full transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenAdmissions}
              className="relative group overflow-hidden px-5 py-2.5 rounded-full font-semibold text-xs text-navy-950 bg-gradient-to-r from-amber-300 via-gold-400 to-amber-500 shadow-gold-glow hover:shadow-[0_0_20px_rgba(212,175,55,0.6)] transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span className="relative z-10 flex items-center gap-1.5 font-bold">
                Apply Now <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
            className="lg:hidden p-2 rounded-xl bg-navy-900 border border-white/10 text-slate-200 hover:text-gold-400 focus:outline-none focus:ring-2 focus:ring-gold-400"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Overlay Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed inset-x-0 top-[60px] z-30 lg:hidden bg-navy-950/95 border-b border-white/10 backdrop-blur-xl px-6 py-6 shadow-2xl overflow-hidden"
          >
            <div className="flex flex-col gap-3">
              {navigationLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="px-4 py-3 text-base font-medium text-slate-200 hover:text-gold-400 hover:bg-navy-900/80 rounded-xl transition-colors flex items-center justify-between border-b border-white/5"
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-gold-400/60" />
                </a>
              ))}
              <div className="pt-4 flex flex-col gap-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenAdmissions();
                  }}
                  className="w-full py-3.5 text-center font-bold text-sm text-navy-950 bg-gradient-to-r from-amber-300 via-gold-400 to-amber-500 rounded-xl shadow-gold-glow flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4" /> Apply for Admissions 2026-27
                </button>
                <div className="text-center text-xs text-slate-400 pt-2">
                  Helpline: <a href={`tel:${schoolInfo.phoneHelpline}`} className="text-gold-400 font-semibold">{schoolInfo.phoneHelpline}</a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
