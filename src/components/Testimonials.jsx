import React from 'react';
import SectionReveal from './SectionReveal';
import { testimonials } from '../data/schoolData';
import { Quote, Star, MessageSquareQuote } from 'lucide-react';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-navy-950 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <SectionReveal variant="fade-up" className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy-900 border border-gold-500/30 text-gold-400 text-xs font-semibold">
            <MessageSquareQuote className="w-3.5 h-3.5" /> Authentic Feedback
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight mt-3">
            Voices from Our Community
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-4 leading-relaxed">
            Read how Tula's International School shapes future leaders through words of parents, alumni, and student council members.
          </p>
        </SectionReveal>

        {/* Testimonials Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <SectionReveal
              key={item.id}
              variant="fade-up"
              delay={idx * 0.1}
              className="glass-card glass-card-hover rounded-3xl p-8 border border-white/10 flex flex-col justify-between relative group hover:-translate-y-2 transition-all duration-300"
            >
              {/* Top Quote Icon & Rating */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-10 h-10 rounded-xl bg-gold-500/20 border border-gold-500/30 flex items-center justify-center text-gold-400">
                    <Quote className="w-5 h-5" />
                  </div>
                  <div className="flex items-center gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>

                <p className="text-slate-300 text-sm leading-relaxed italic">
                  "{item.quote}"
                </p>
              </div>

              {/* Author Footer */}
              <div className="pt-6 mt-6 border-t border-white/10 flex items-center gap-4">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-gold-400/50"
                />
                <div>
                  <h4 className="text-sm font-serif font-bold text-white group-hover:text-gold-300 transition-colors">
                    {item.name}
                  </h4>
                  <div className="text-xs text-gold-400 font-medium">{item.role}</div>
                  <div className="text-[11px] text-slate-400">{item.location}</div>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
