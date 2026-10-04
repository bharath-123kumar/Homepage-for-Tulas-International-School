import React from 'react';
import { schoolInfo, navigationLinks } from '../data/schoolData';
import { GraduationCap, MapPin, Phone, Mail, ArrowUp, Sparkles, Heart } from 'lucide-react';

export default function Footer({ onOpenAdmissions }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-navy-950 border-t border-white/10 pt-16 pb-12 text-slate-400 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          
          {/* Col 1: Brand & Logo (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 via-gold-500 to-amber-600 p-[2px]">
                <div className="w-full h-full bg-navy-950 rounded-[10px] flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-gold-400" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-bold text-xl tracking-wider text-white">TULA'S</span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-gold-400 font-semibold">International School</span>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed max-w-sm">
              Tula's International School (TIS) is a premier CBSE co-educational residential boarding school in Dehradun, combining modern academics with traditional Gurukul values across a 22-acre lush campus.
            </p>

            <div className="pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-navy-900 border border-gold-500/30 text-gold-400 text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5" /> Admissions Open 2026-27
              </span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-serif font-bold text-white uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2 text-xs">
              {navigationLinks.slice(0, 5).map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-gold-400 transition-colors flex items-center gap-1.5"
                  >
                    <span>›</span> {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Academic Programs */}
          <div className="space-y-3">
            <h4 className="text-sm font-serif font-bold text-white uppercase tracking-wider">Academics</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#academics" className="hover:text-gold-400 transition-colors">Primary Foundation (Grades IV-V)</a></li>
              <li><a href="#academics" className="hover:text-gold-400 transition-colors">Middle School (Grades VI-VIII)</a></li>
              <li><a href="#academics" className="hover:text-gold-400 transition-colors">Secondary School (Grades IX-X)</a></li>
              <li><a href="#academics" className="hover:text-gold-400 transition-colors">Senior Secondary (Grades XI-XII)</a></li>
              <li><a href="#why-tis" className="hover:text-gold-400 transition-colors">15+ Olympic Sports</a></li>
            </ul>
          </div>

          {/* Col 4: Contact Support */}
          <div className="space-y-3">
            <h4 className="text-sm font-serif font-bold text-white uppercase tracking-wider">Admissions Office</h4>
            <div className="space-y-2 text-xs">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                <span>Dhoolkot, P.O. Selaqui, Chakrata Road, Dehradun - 248011</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-gold-400 shrink-0" />
                <a href={`tel:${schoolInfo.phoneHelpline}`} className="hover:text-gold-400">{schoolInfo.phoneHelpline}</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-gold-400 shrink-0" />
                <a href={`mailto:${schoolInfo.email}`} className="hover:text-gold-400">{schoolInfo.email}</a>
              </div>
            </div>
            <div className="pt-2">
              <button
                onClick={onOpenAdmissions}
                className="w-full py-2 px-3 rounded-lg bg-gold-500 text-navy-950 font-bold text-xs hover:bg-gold-400 transition-colors"
              >
                Apply Online
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Scroll to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div>
            © {new Date().getFullYear()} Tula's International School. All rights reserved. Official Website Redesign.
          </div>

          <div className="flex items-center gap-4">
            <a href={schoolInfo.websiteUrl} target="_blank" rel="noopener noreferrer" className="hover:text-gold-400 transition-colors">
              Official TIS Portal
            </a>
            <span>•</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-navy-900 border border-white/10 hover:border-gold-400 text-slate-300 hover:text-gold-400 transition-colors"
              aria-label="Scroll to top of page"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
