import React from 'react';
import SectionReveal from './SectionReveal';
import { studentLifeActivities } from '../data/schoolData';
import { Shield, Globe, Bot, Music, Sprout, HeartHandshake, Sparkles, Smile } from 'lucide-react';

export default function CampusLife() {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Shield': return <Shield className="w-5 h-5 text-gold-400" />;
      case 'Globe': return <Globe className="w-5 h-5 text-gold-400" />;
      case 'Bot': return <Bot className="w-5 h-5 text-gold-400" />;
      case 'Music': return <Music className="w-5 h-5 text-gold-400" />;
      case 'Sprout': return <Sprout className="w-5 h-5 text-gold-400" />;
      case 'HeartHandshake': return <HeartHandshake className="w-5 h-5 text-gold-400" />;
      default: return <Sparkles className="w-5 h-5 text-gold-400" />;
    }
  };

  return (
    <section id="student-life" className="py-24 bg-navy-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <SectionReveal variant="fade-up" className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy-900 border border-gold-500/30 text-gold-400 text-xs font-semibold">
            <Smile className="w-3.5 h-3.5" /> Vibrant Boarding Experience
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight mt-3">
            Life Beyond the Classroom
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-4 leading-relaxed">
            At TIS, weekends and evenings are vibrant with clubs, equestrian training, international Model UN conferences, bio-farming, and performing arts.
          </p>
        </SectionReveal>

        {/* Student Life Activity Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {studentLifeActivities.map((act, idx) => (
            <SectionReveal
              key={idx}
              variant="fade-up"
              delay={idx * 0.08}
              className="glass-card glass-card-hover rounded-3xl p-6 border border-white/10 flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1.5"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-navy-900 border border-gold-500/30 flex items-center justify-center group-hover:border-gold-500/60 transition-colors">
                    {getIcon(act.icon)}
                  </div>
                  <span className="text-[10px] uppercase font-bold tracking-wider px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-300">
                    {act.tag}
                  </span>
                </div>
                <h3 className="text-xl font-serif font-bold text-white group-hover:text-gold-300 transition-colors">
                  {act.title}
                </h3>
                <p className="text-slate-300 text-xs mt-2 leading-relaxed">
                  {act.description}
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-white/5 flex items-center justify-between text-xs text-slate-400">
                <span>Co-curricular Activity</span>
                <span className="text-gold-400 font-semibold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                  Explore ↗
                </span>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
