import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, ShieldCheck, Award, Users, BookOpen, Star, Play } from 'lucide-react';
import { schoolInfo } from '../data/schoolData';

export default function Hero({ onOpenAdmissions, onExplore }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1.0] }
    }
  };

  return (
    <section id="hero" className="relative min-h-screen pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden flex items-center justify-center">
      {/* Dynamic Background Glow & Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-navy-800/40 via-gold-500/10 to-emerald-600/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-10 right-10 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-navy-900/80 border border-gold-500/30 text-gold-300 text-xs sm:text-sm font-semibold shadow-inner">
              <Sparkles className="w-4 h-4 text-gold-400 animate-pulse" />
              <span>{schoolInfo.tagline} • {schoolInfo.subTagline}</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-serif font-extrabold tracking-tight leading-[1.15] text-white"
            >
              Shape Your Future at{' '}
              <span className="text-gradient-gold block mt-1">
                Tulas International School
              </span>
            </motion.h1>

            {/* Supporting Text */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal"
            >
              Ranked among India's top CBSE co-ed residential boarding schools in Dehradun. 
              Synthesizing ancient Gurukul discipline with 22 acres of modern sports arenas, STEM labs, and pastoral boarding care.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={onOpenAdmissions}
                className="group px-7 py-3.5 rounded-full bg-gradient-to-r from-amber-300 via-gold-400 to-amber-500 text-navy-950 font-bold text-sm shadow-gold-glow hover:shadow-[0_0_25px_rgba(212,175,55,0.7)] transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2"
              >
                <span>Admissions Open 2026-27</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#about"
                onClick={onExplore}
                className="px-7 py-3.5 rounded-full bg-navy-900/80 border border-white/15 text-slate-200 font-semibold text-sm hover:bg-white/10 hover:border-gold-400/40 transition-all flex items-center gap-2"
              >
                <span>Explore TIS</span>
                <Play className="w-3.5 h-3.5 text-gold-400 fill-gold-400" />
              </a>
            </motion.div>

            {/* Trust Highlights */}
            <motion.div variants={itemVariants} className="pt-6 border-t border-white/10 grid grid-cols-3 gap-4 text-left max-w-lg mx-auto lg:mx-0">
              <div className="space-y-1">
                <div className="flex items-center gap-1 text-gold-400 text-xs font-bold uppercase tracking-wider">
                  <Award className="w-3.5 h-3.5" /> Established
                </div>
                <div className="text-xl sm:text-2xl font-serif font-bold text-white">2012</div>
                <div className="text-[11px] text-slate-400">Dehradun, UK</div>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-1 text-gold-400 text-xs font-bold uppercase tracking-wider">
                  <ShieldCheck className="w-3.5 h-3.5" /> Campus
                </div>
                <div className="text-xl sm:text-2xl font-serif font-bold text-white">22+ Acres</div>
                <div className="text-[11px] text-slate-400">100% Boarding</div>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-1 text-gold-400 text-xs font-bold uppercase tracking-wider">
                  <Star className="w-3.5 h-3.5 fill-gold-400" /> Sports
                </div>
                <div className="text-xl sm:text-2xl font-serif font-bold text-white">15+ Olympic</div>
                <div className="text-[11px] text-slate-400">Riding & Shooting</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Hero Visual Cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.1, 0.25, 1.0] }}
            className="lg:col-span-5 relative"
          >
            {/* Main Campus Image Frame */}
            <div className="relative rounded-3xl overflow-hidden border border-white/15 shadow-2xl group">
              <img
                src="https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?q=80&w=1200&auto=format&fit=crop"
                alt="Tula's International School Dehradun Campus"
                className="w-full h-[420px] sm:h-[480px] object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/20 to-transparent" />
              
              {/* Overlay Badge */}
              <div className="absolute bottom-6 left-6 right-6 glass-card p-4 rounded-2xl border border-white/15">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs uppercase tracking-widest text-gold-400 font-bold">Lush Foothills Campus</span>
                    <h3 className="text-base font-serif font-bold text-white">Dehradun, Uttarakhand</h3>
                  </div>
                  <div className="bg-emerald-600/30 text-emerald-400 text-xs font-semibold px-3 py-1 rounded-full border border-emerald-500/30">
                    Safe Gurukul Environment
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Info Card 1 - Top Right */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-6 -right-4 sm:-right-6 glass-card p-3.5 rounded-2xl border border-gold-500/30 shadow-2xl hidden sm:flex items-center gap-3 bg-navy-900/90 backdrop-blur-md"
            >
              <div className="w-10 h-10 rounded-xl bg-gold-500/20 flex items-center justify-center text-gold-400">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs text-slate-300 font-medium">Ranked #1 Boarding</div>
                <div className="text-sm font-bold text-white">Education Today 2024</div>
              </div>
            </motion.div>

            {/* Floating Info Card 2 - Bottom Left */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute -bottom-6 -left-4 sm:-left-6 glass-card p-3.5 rounded-2xl border border-white/15 shadow-2xl hidden sm:flex items-center gap-3 bg-navy-900/90 backdrop-blur-md"
            >
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs text-slate-300 font-medium">Faculty Student Ratio</div>
                <div className="text-sm font-bold text-gold-400">1 : 8 Mentorship</div>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
