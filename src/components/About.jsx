import React from 'react';
import SectionReveal from './SectionReveal';
import { Sparkles, CheckCircle2, Heart, Compass, Shield, ArrowRight } from 'lucide-react';
import { schoolInfo } from '../data/schoolData';

export default function About({ onLearnMore }) {
  const corePillars = [
    { title: "Mind (Intellect)", desc: "CBSE academic excellence, critical reasoning, and STEM innovation." },
    { title: "Body (Fitness)", desc: "15+ Olympic sports, horse riding, swimming, and organic nutrition." },
    { title: "Soul (Character)", desc: "Gurukul pastoral care, ethics, mindfulness, and community leadership." },
  ];

  return (
    <section id="about" className="py-24 bg-navy-950 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-emerald-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Image Editorial Composition */}
          <div className="lg:col-span-6 relative">
            <SectionReveal variant="fade-left">
              <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl group">
                <img
                  src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1000&auto=format&fit=crop"
                  alt="Tula's International School Academic Experience"
                  className="w-full h-[450px] sm:h-[520px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent opacity-80" />

                {/* Editorial Floating Card */}
                <div className="absolute bottom-6 left-6 right-6 glass-card p-5 rounded-2xl border border-gold-500/30 shadow-2xl">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 to-gold-600 flex items-center justify-center text-navy-950 font-bold shrink-0">
                      <Compass className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-sm font-serif font-bold text-white">The Gurukul Tradition</h4>
                      <p className="text-xs text-slate-300 mt-0.5">Blending ancient Indian wisdom with futuristic global education.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Overlapping Badge */}
              <div className="absolute -top-6 -left-6 bg-navy-900 border border-gold-500/40 p-4 rounded-2xl shadow-2xl hidden sm:block">
                <div className="text-xs uppercase tracking-widest text-gold-400 font-bold">Location</div>
                <div className="text-sm font-bold text-white">Dehradun Valley, UK</div>
                <div className="text-[11px] text-slate-400">22-Acre Green Campus</div>
              </div>
            </SectionReveal>
          </div>

          {/* Right Column: Editorial Copy */}
          <div className="lg:col-span-6 space-y-6">
            <SectionReveal variant="fade-up">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy-900 border border-gold-500/30 text-gold-400 text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5" /> About Tula's International School
              </div>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight leading-tight mt-3">
                More Than a School.{' '}
                <span className="text-gradient-gold block">A Place to Grow.</span>
              </h2>
            </SectionReveal>

            <SectionReveal variant="fade-up" delay={0.1}>
              <p className="text-slate-300 text-base leading-relaxed">
                Founded in 2012 in the serene, unpolluted foothills of Dehradun, <strong className="text-white">Tula's International School (TIS)</strong> is recognized among India's premier co-educational residential boarding institutions.
              </p>
              <p className="text-slate-300 text-base leading-relaxed mt-3">
                At TIS, education extends far beyond textbooks. We operate on our signature <strong>"Modern Gurukul"</strong> philosophy—a harmonious alignment of the <span className="text-gold-400 font-semibold">Mind, Body, and Soul</span>. Our 22-acre campus offers a sanctuary where academic rigor coexists with equestrian arenas, STEM robotics labs, and organic farm-to-table nutrition.
              </p>
            </SectionReveal>

            {/* Core Pillars List */}
            <SectionReveal variant="fade-up" delay={0.2}>
              <div className="space-y-3 pt-2">
                {corePillars.map((pillar, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-navy-900/60 border border-white/5 hover:border-gold-500/20 transition-colors">
                    <CheckCircle2 className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-white">{pillar.title}</h4>
                      <p className="text-xs text-slate-400 mt-0.5">{pillar.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </SectionReveal>

            <SectionReveal variant="fade-up" delay={0.3}>
              <div className="pt-4">
                <button
                  onClick={onLearnMore}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-navy-900 border border-gold-500/40 text-gold-300 font-semibold text-sm hover:bg-gold-500 hover:text-navy-950 transition-all duration-300 group"
                >
                  <span>Discover Our Full Story</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </SectionReveal>

          </div>
        </div>
      </div>
    </section>
  );
}
