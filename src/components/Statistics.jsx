import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { keyStatistics } from '../data/schoolData';
import SectionReveal from './SectionReveal';
import { Award, BookOpen, Trophy, Users, ShieldCheck, CheckCircle } from 'lucide-react';

function Counter({ end, suffix = "", duration = 2 }) {
  const [count, setCount] = useState(0);
  const nodeRef = useRef(null);
  const isInView = useInView(nodeRef, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      
      // Easing easeOutExpo
      const easedProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(easedProgress * end));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }, [isInView, end, duration]);

  return (
    <span ref={nodeRef} className="font-serif font-extrabold text-3xl sm:text-4xl lg:text-5xl text-gradient-gold">
      {count.toLocaleString()}{suffix}
    </span>
  );
}

export default function Statistics() {
  const getIcon = (index) => {
    const icons = [Award, ShieldCheck, Trophy, BookOpen, Users, CheckCircle];
    const IconComponent = icons[index % icons.length];
    return <IconComponent className="w-6 h-6 text-gold-400" />;
  };

  return (
    <section className="py-16 bg-navy-900/80 border-y border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionReveal variant="fade-up" className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-widest text-gold-400 font-bold">Proven Legacy</span>
          <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mt-1">
            Numbers That Define TIS Excellence
          </h3>
          <p className="text-slate-400 text-xs sm:text-sm mt-2">
            Verified institutional facts from our 22-acre Dehradun residential campus.
          </p>
        </SectionReveal>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {keyStatistics.map((stat, idx) => (
            <SectionReveal
              key={stat.id}
              variant="scale"
              delay={idx * 0.08}
              className="glass-card glass-card-hover p-5 rounded-2xl border border-white/10 text-center flex flex-col items-center justify-between"
            >
              <div className="w-12 h-12 rounded-xl bg-navy-950/80 border border-gold-500/20 flex items-center justify-center mb-3">
                {getIcon(idx)}
              </div>
              <Counter end={stat.value} suffix={stat.suffix} />
              <div className="text-xs font-bold text-slate-200 mt-2 line-clamp-1">{stat.label}</div>
              <div className="text-[11px] text-slate-400 mt-1 line-clamp-1">{stat.description}</div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
