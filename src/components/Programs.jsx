import React from 'react';
import SectionReveal from './SectionReveal';
import { academicPrograms } from '../data/schoolData';
import { ArrowUpRight, BookOpen, CheckCircle, Sparkles } from 'lucide-react';

export default function Programs({ onSelectProgram }) {
  return (
    <section id="academics" className="py-24 bg-navy-950 relative overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <SectionReveal variant="fade-up" className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy-900 border border-gold-500/30 text-gold-400 text-xs font-semibold">
            <BookOpen className="w-3.5 h-3.5" /> Academic Pathways
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight mt-3">
            Tailored Education for Every Stage
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-4 leading-relaxed">
            From Grade IV foundational discovery to Senior Secondary competitive preparation, TIS combines CBSE curriculum rigor with individual student guidance.
          </p>
        </SectionReveal>

        {/* Academic Program Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {academicPrograms.map((prog, idx) => (
            <SectionReveal
              key={prog.id}
              variant="fade-up"
              delay={idx * 0.1}
              className="group h-full"
            >
              <div className="glass-card glass-card-hover rounded-3xl overflow-hidden border border-white/10 h-full flex flex-col justify-between transition-all duration-300 group-hover:-translate-y-2">
                
                {/* Image Top */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={prog.image}
                    alt={prog.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/20 to-transparent" />
                  
                  {/* Badge */}
                  <span className="absolute top-4 left-4 bg-navy-900/90 border border-gold-500/40 text-gold-300 text-[11px] font-bold px-3 py-1 rounded-full backdrop-blur-md">
                    {prog.badge}
                  </span>
                </div>

                {/* Content Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-xl font-serif font-bold text-white group-hover:text-gold-300 transition-colors">
                      {prog.title}
                    </h3>
                    <p className="text-slate-300 text-xs mt-2 leading-relaxed">
                      {prog.description}
                    </p>

                    {/* Features List */}
                    <div className="mt-4 space-y-2 pt-4 border-t border-white/5">
                      {prog.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2 text-xs text-slate-300">
                          <CheckCircle className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Footer Button */}
                  <button
                    onClick={() => onSelectProgram(prog)}
                    className="w-full pt-4 flex items-center justify-between text-xs font-bold text-gold-400 group-hover:text-gold-300 border-t border-white/5"
                  >
                    <span>View Curriculum Details</span>
                    <div className="w-8 h-8 rounded-full bg-navy-900 border border-gold-500/30 flex items-center justify-center group-hover:bg-gold-500 group-hover:text-navy-950 transition-all">
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </button>
                </div>

              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
