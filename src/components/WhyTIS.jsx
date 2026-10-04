import React from 'react';
import SectionReveal from './SectionReveal';
import { bentoFeatures } from '../data/schoolData';
import { Compass, Trophy, Users, Cpu, Utensils, Sparkles, ShieldCheck } from 'lucide-react';

export default function WhyTIS() {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Compass': return <Compass className="w-6 h-6 text-gold-400" />;
      case 'Trophy': return <Trophy className="w-6 h-6 text-gold-400" />;
      case 'Users': return <Users className="w-6 h-6 text-gold-400" />;
      case 'Cpu': return <Cpu className="w-6 h-6 text-gold-400" />;
      case 'Utensils': return <Utensils className="w-6 h-6 text-gold-400" />;
      default: return <Sparkles className="w-6 h-6 text-gold-400" />;
    }
  };

  return (
    <section id="why-tis" className="py-24 bg-navy-950 relative overflow-hidden">
      {/* Dynamic Background accents */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-emerald-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <SectionReveal variant="fade-up" className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy-900 border border-gold-500/30 text-gold-400 text-xs font-semibold">
            <ShieldCheck className="w-3.5 h-3.5" /> Institutional Distinction
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight mt-3">
            Why Discerning Parents Choose TIS
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-4 leading-relaxed">
            Discover the unique pillars that make Tula's International School Dehradun one of India's most sought-after residential institutions.
          </p>
        </SectionReveal>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[280px]">
          
          {/* Card 1: Large Featured Card (Spans 2 cols, 2 rows) */}
          <SectionReveal
            variant="scale"
            className="md:col-span-2 md:row-span-2 group relative rounded-3xl overflow-hidden glass-card border border-gold-500/30 shadow-2xl p-8 flex flex-col justify-between"
          >
            {/* Background Image */}
            <img
              src={bentoFeatures[0].image}
              alt={bentoFeatures[0].title}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/80 to-navy-950/40" />

            <div className="relative z-10 flex items-center justify-between">
              <span className="bg-gold-500/20 text-gold-300 text-xs font-bold px-3.5 py-1 rounded-full border border-gold-500/40">
                {bentoFeatures[0].category}
              </span>
              <span className="text-xs font-semibold text-slate-300 bg-navy-900/80 px-3 py-1 rounded-full border border-white/10">
                {bentoFeatures[0].stat}
              </span>
            </div>

            <div className="relative z-10 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-navy-900/90 border border-gold-500/40 flex items-center justify-center">
                {getIcon(bentoFeatures[0].icon)}
              </div>
              <div>
                <span className="text-xs text-gold-400 font-semibold uppercase tracking-wider">{bentoFeatures[0].subtitle}</span>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mt-1">
                  {bentoFeatures[0].title}
                </h3>
                <p className="text-slate-300 text-sm mt-3 leading-relaxed max-w-xl">
                  {bentoFeatures[0].description}
                </p>
              </div>
            </div>
          </SectionReveal>

          {/* Card 2: Medium Card (Spans 2 cols, 1 row) */}
          <SectionReveal
            variant="scale"
            delay={0.1}
            className="md:col-span-2 md:row-span-1 group relative rounded-3xl overflow-hidden glass-card border border-white/10 p-6 flex flex-col justify-between"
          >
            <img
              src={bentoFeatures[1].image}
              alt={bentoFeatures[1].title}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/90 to-navy-950/50" />

            <div className="relative z-10 flex items-center justify-between">
              <span className="bg-emerald-500/20 text-emerald-300 text-xs font-bold px-3 py-1 rounded-full border border-emerald-500/30">
                {bentoFeatures[1].category}
              </span>
              <span className="text-xs font-bold text-gold-400">{bentoFeatures[1].stat}</span>
            </div>

            <div className="relative z-10 flex items-end justify-between gap-4">
              <div>
                <h3 className="text-xl font-serif font-bold text-white group-hover:text-gold-300 transition-colors">
                  {bentoFeatures[1].title}
                </h3>
                <p className="text-slate-300 text-xs mt-1 leading-relaxed max-w-md">
                  {bentoFeatures[1].description}
                </p>
              </div>
              <div className="w-10 h-10 rounded-xl bg-navy-900 border border-white/10 flex items-center justify-center shrink-0">
                {getIcon(bentoFeatures[1].icon)}
              </div>
            </div>
          </SectionReveal>

          {/* Card 3: Small Card (1 col, 1 row) */}
          <SectionReveal
            variant="scale"
            delay={0.2}
            className="md:col-span-1 md:row-span-1 group glass-card glass-card-hover rounded-3xl p-6 border border-white/10 flex flex-col justify-between"
          >
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-xl bg-navy-900 border border-gold-500/30 flex items-center justify-center">
                {getIcon(bentoFeatures[2].icon)}
              </div>
              <span className="text-xs font-bold text-gold-400">{bentoFeatures[2].stat}</span>
            </div>
            <div>
              <span className="text-[10px] text-slate-400 uppercase tracking-widest">{bentoFeatures[2].category}</span>
              <h4 className="text-base font-serif font-bold text-white mt-1">{bentoFeatures[2].title}</h4>
              <p className="text-slate-300 text-xs mt-1 leading-relaxed">{bentoFeatures[2].description}</p>
            </div>
          </SectionReveal>

          {/* Card 4: Small Card (1 col, 1 row) */}
          <SectionReveal
            variant="scale"
            delay={0.3}
            className="md:col-span-1 md:row-span-1 group glass-card glass-card-hover rounded-3xl p-6 border border-white/10 flex flex-col justify-between"
          >
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-xl bg-navy-900 border border-gold-500/30 flex items-center justify-center">
                {getIcon(bentoFeatures[3].icon)}
              </div>
              <span className="text-xs font-bold text-gold-400">{bentoFeatures[3].stat}</span>
            </div>
            <div>
              <span className="text-[10px] text-slate-400 uppercase tracking-widest">{bentoFeatures[3].category}</span>
              <h4 className="text-base font-serif font-bold text-white mt-1">{bentoFeatures[3].title}</h4>
              <p className="text-slate-300 text-xs mt-1 leading-relaxed">{bentoFeatures[3].description}</p>
            </div>
          </SectionReveal>

          {/* Card 5: Medium Dining & Health Card (Spans 2 cols, 1 row) */}
          <SectionReveal
            variant="scale"
            delay={0.4}
            className="md:col-span-2 md:row-span-1 group relative rounded-3xl overflow-hidden glass-card border border-white/10 p-6 flex flex-col justify-between"
          >
            <img
              src={bentoFeatures[4].image}
              alt={bentoFeatures[4].title}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/90 to-navy-950/50" />

            <div className="relative z-10 flex items-center justify-between">
              <span className="bg-amber-500/20 text-amber-300 text-xs font-bold px-3 py-1 rounded-full border border-amber-500/30">
                {bentoFeatures[4].category}
              </span>
              <span className="text-xs font-bold text-gold-400">{bentoFeatures[4].stat}</span>
            </div>

            <div className="relative z-10 flex items-end justify-between gap-4">
              <div>
                <h3 className="text-xl font-serif font-bold text-white group-hover:text-gold-300 transition-colors">
                  {bentoFeatures[4].title}
                </h3>
                <p className="text-slate-300 text-xs mt-1 leading-relaxed max-w-md">
                  {bentoFeatures[4].description}
                </p>
              </div>
              <div className="w-10 h-10 rounded-xl bg-navy-900 border border-white/10 flex items-center justify-center shrink-0">
                {getIcon(bentoFeatures[4].icon)}
              </div>
            </div>
          </SectionReveal>

        </div>
      </div>
    </section>
  );
}
