import React from 'react';
import SectionReveal from './SectionReveal';
import { ArrowRight, Sparkles, Phone, Download, ShieldCheck } from 'lucide-react';
import { schoolInfo } from '../data/schoolData';

export default function CTA({ onOpenAdmissions }) {
  return (
    <section className="py-20 bg-navy-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionReveal variant="scale">
          <div className="relative rounded-3xl overflow-hidden glass-card border border-gold-500/40 shadow-2xl p-8 sm:p-12 lg:p-16 text-center">
            
            {/* Background Campus Image with Gradient */}
            <img
              src="https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?q=80&w=1400&auto=format&fit=crop"
              alt="TIS Campus Background"
              className="absolute inset-0 w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/95 to-navy-950/80" />

            <div className="relative z-10 max-w-3xl mx-auto space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-500/20 border border-gold-500/40 text-gold-300 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-gold-400" /> Admissions Open for Session 2026-27
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-extrabold text-white tracking-tight leading-tight">
                Give Your Child a Future Worth Looking Forward To.
              </h2>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
                Join India's leading residential boarding school in Dehradun. Experience 22 acres of academic, athletic, and character building excellence.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
                <button
                  onClick={onOpenAdmissions}
                  className="px-8 py-4 rounded-full bg-gradient-to-r from-amber-300 via-gold-400 to-amber-500 text-navy-950 font-bold text-sm shadow-gold-glow hover:shadow-[0_0_30px_rgba(212,175,55,0.8)] transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2"
                >
                  <span>Start Admission Enquiry</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={`tel:${schoolInfo.phoneHelpline}`}
                  className="px-8 py-4 rounded-full bg-navy-900 border border-white/20 text-white font-semibold text-sm hover:bg-white/10 hover:border-gold-400/40 transition-all flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-gold-400" />
                  <span>Call Helpline: {schoolInfo.phoneHelpline}</span>
                </a>
              </div>

              {/* Verified Trust Badges */}
              <div className="pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-300">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-gold-400" /> CBSE Affiliated
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-gold-400" /> Grades IV to XII Boarding
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-gold-400" /> Dehradun, Uttarakhand
                </span>
              </div>

            </div>
          </div>
        </SectionReveal>

      </div>
    </section>
  );
}
