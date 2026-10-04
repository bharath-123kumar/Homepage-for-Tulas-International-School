import React, { useState } from 'react';
import SectionReveal from './SectionReveal';
import { facilitiesList } from '../data/schoolData';
import { motion, AnimatePresence } from 'framer-motion';
import { Building2, Expand, X, Sparkles, ChevronRight } from 'lucide-react';

export default function Facilities() {
  const [selectedFacility, setSelectedFacility] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Academics", "STEM Hub", "Learning", "Sports", "Residential", "Creative Arts"];

  const filteredFacilities = activeCategory === "All"
    ? facilitiesList
    : facilitiesList.filter(f => f.category === activeCategory);

  return (
    <section id="facilities" className="py-24 bg-navy-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <SectionReveal variant="fade-up" className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy-900 border border-gold-500/30 text-gold-400 text-xs font-semibold">
            <Building2 className="w-3.5 h-3.5" /> World-Class Infrastructure
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight mt-3">
            State-of-the-Art Campus Facilities
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-4 leading-relaxed">
            Spread over 22 green acres, TIS provides an inspiring ecosystem designed to support world-class academics, athletics, and residential living.
          </p>
        </SectionReveal>

        {/* Category Filter Tabs */}
        <SectionReveal variant="fade-up" delay={0.1} className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-gold-500 text-navy-950 shadow-gold-glow'
                  : 'bg-navy-900/80 text-slate-300 hover:text-white border border-white/10 hover:border-white/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </SectionReveal>

        {/* Facility Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredFacilities.map((fac, idx) => (
            <SectionReveal
              key={fac.id}
              variant="fade-up"
              delay={idx * 0.05}
              className="group"
            >
              <div
                onClick={() => setSelectedFacility(fac)}
                className="glass-card glass-card-hover rounded-3xl overflow-hidden border border-white/10 cursor-pointer h-full flex flex-col justify-between transition-all duration-300 group-hover:-translate-y-1.5"
              >
                {/* Facility Image Container */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={fac.image}
                    alt={fac.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/20 to-transparent" />
                  
                  {/* Overlay Category Pill */}
                  <span className="absolute top-4 left-4 bg-navy-900/80 backdrop-blur-md border border-white/10 text-gold-300 text-[10px] font-bold px-3 py-1 rounded-full">
                    {fac.category}
                  </span>

                  {/* Expand Icon */}
                  <div className="absolute bottom-4 right-4 w-9 h-9 rounded-full bg-navy-950/80 border border-gold-500/40 flex items-center justify-center text-gold-400 group-hover:bg-gold-500 group-hover:text-navy-950 transition-colors shadow-lg">
                    <Expand className="w-4 h-4" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-base font-serif font-bold text-white group-hover:text-gold-300 transition-colors">
                      {fac.title}
                    </h3>
                    <p className="text-slate-300 text-xs mt-1.5 line-clamp-2 leading-relaxed">
                      {fac.description}
                    </p>
                  </div>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedFacility && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedFacility(null)}
            className="fixed inset-0 z-50 bg-navy-950/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-card max-w-2xl w-full rounded-3xl overflow-hidden border border-gold-500/30 shadow-2xl relative"
            >
              <button
                onClick={() => setSelectedFacility(null)}
                aria-label="Close modal"
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-navy-950/80 border border-white/20 text-slate-300 hover:text-white flex items-center justify-center focus:outline-none"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="h-72 sm:h-80 relative overflow-hidden">
                <img
                  src={selectedFacility.image}
                  alt={selectedFacility.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent" />
              </div>

              <div className="p-6 sm:p-8 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase font-bold tracking-widest text-gold-400">
                    {selectedFacility.category}
                  </span>
                  <span className="text-xs text-slate-400">TIS Campus Dehradun</span>
                </div>
                <h3 className="text-2xl font-serif font-bold text-white">
                  {selectedFacility.title}
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {selectedFacility.description}
                </p>
                <div className="pt-4 border-t border-white/10 flex justify-end">
                  <button
                    onClick={() => setSelectedFacility(null)}
                    className="px-6 py-2.5 rounded-full bg-gold-500 text-navy-950 font-bold text-xs hover:bg-gold-400 transition-colors"
                  >
                    Close Preview
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
