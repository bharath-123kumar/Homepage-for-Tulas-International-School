import React, { useState } from 'react';
import SectionReveal from './SectionReveal';
import { schoolInfo } from '../data/schoolData';
import { MapPin, Phone, Mail, Send, CheckCircle2, Clock, Map, Sparkles } from 'lucide-react';

export default function Contact({ isModal = false, onClose }) {
  const [formData, setFormData] = useState({
    parentName: '',
    studentName: '',
    email: '',
    phone: '',
    grade: 'Grade IV',
    city: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1000);
  };

  return (
    <section id="contact" className={`py-24 bg-navy-950 relative overflow-hidden ${isModal ? 'py-6' : ''}`}>
      {/* Background accents */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {!isModal && (
          <SectionReveal variant="fade-up" className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy-900 border border-gold-500/30 text-gold-400 text-xs font-semibold">
              <Phone className="w-3.5 h-3.5" /> Admissions & Enquiries
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight mt-3">
              Get in Touch with TIS Admissions
            </h2>
            <p className="text-slate-300 text-sm sm:text-base mt-4 leading-relaxed">
              We welcome prospective parents and students to visit our campus in Dehradun or interact with our admissions officers.
            </p>
          </SectionReveal>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Official Contact Details & Map */}
          <div className="lg:col-span-5 space-y-8">
            <SectionReveal variant="fade-left">
              <div className="glass-card rounded-3xl p-8 border border-white/10 space-y-6">
                <h3 className="text-xl font-serif font-bold text-white border-b border-white/10 pb-4">
                  Official School Information
                </h3>

                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gold-500/20 border border-gold-500/30 flex items-center justify-center text-gold-400 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase font-bold tracking-wider text-slate-400">Campus Address</h4>
                    <p className="text-sm text-slate-200 mt-1 leading-relaxed">
                      {schoolInfo.address}
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gold-500/20 border border-gold-500/30 flex items-center justify-center text-gold-400 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase font-bold tracking-wider text-slate-400">Phone & Helpline</h4>
                    <p className="text-sm font-semibold text-gold-400 mt-1">
                      Admission Helpline: <a href={`tel:${schoolInfo.phoneHelpline}`}>{schoolInfo.phoneHelpline}</a>
                    </p>
                    <p className="text-xs text-slate-300 mt-0.5">
                      Landline: {schoolInfo.phoneLandline}
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gold-500/20 border border-gold-500/30 flex items-center justify-center text-gold-400 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase font-bold tracking-wider text-slate-400">Email Address</h4>
                    <a href={`mailto:${schoolInfo.email}`} className="text-sm text-slate-200 hover:text-gold-400 transition-colors mt-1 block">
                      {schoolInfo.email}
                    </a>
                  </div>
                </div>

                {/* Office Hours */}
                <div className="flex items-start gap-4 pt-4 border-t border-white/10">
                  <div className="w-10 h-10 rounded-xl bg-navy-900 border border-white/10 flex items-center justify-center text-slate-300 shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase font-bold tracking-wider text-slate-400">Admissions Office Hours</h4>
                    <p className="text-xs text-slate-300 mt-1">
                      Monday to Saturday: 9:00 AM – 5:00 PM IST
                    </p>
                  </div>
                </div>

                {/* Google Maps External Action */}
                <div className="pt-2">
                  <a
                    href="https://maps.google.com/?q=Tula's+International+School+Dehradun"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 px-4 rounded-xl bg-navy-900 border border-gold-500/30 text-gold-300 text-xs font-semibold hover:bg-gold-500 hover:text-navy-950 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <Map className="w-4 h-4" /> Open in Google Maps ↗
                  </a>
                </div>
              </div>
            </SectionReveal>
          </div>

          {/* Right Column: Admission Enquiry Form */}
          <div className="lg:col-span-7">
            <SectionReveal variant="fade-right">
              <div className="glass-card rounded-3xl p-8 sm:p-10 border border-gold-500/30 shadow-2xl relative">
                
                <div className="mb-6">
                  <div className="flex items-center gap-2 text-xs font-bold text-gold-400 uppercase tracking-widest">
                    <Sparkles className="w-4 h-4" /> Session 2026-27 Enquiry
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-white mt-1">
                    Request Campus Tour & Prospectus
                  </h3>
                  <p className="text-slate-300 text-xs mt-1">
                    Fill out the form below and our admissions counselors will contact you within 24 hours.
                  </p>
                </div>

                {submitted ? (
                  <div className="bg-emerald-950/60 border border-emerald-500/40 rounded-2xl p-8 text-center space-y-4">
                    <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h4 className="text-xl font-serif font-bold text-white">Enquiry Received Successfully!</h4>
                    <p className="text-slate-300 text-xs max-w-md mx-auto leading-relaxed">
                      Thank you for your interest in Tula's International School, Dehradun. Our admissions counselor will call you shortly at <strong className="text-gold-400">{formData.phone}</strong>.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-2.5 rounded-full bg-navy-900 border border-white/20 text-xs font-semibold text-slate-200 hover:bg-white/10 transition-colors"
                    >
                      Submit Another Enquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1">Parent / Guardian Name *</label>
                        <input
                          type="text"
                          name="parentName"
                          required
                          value={formData.parentName}
                          onChange={handleChange}
                          placeholder="e.g. Rajesh Sharma"
                          className="w-full bg-navy-950/80 border border-white/15 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400 transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1">Student Name *</label>
                        <input
                          type="text"
                          name="studentName"
                          required
                          value={formData.studentName}
                          onChange={handleChange}
                          placeholder="e.g. Aarav Sharma"
                          className="w-full bg-navy-950/80 border border-white/15 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400 transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1">Email Address *</label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="e.g. parent@example.com"
                          className="w-full bg-navy-950/80 border border-white/15 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400 transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1">Phone Number *</label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="e.g. +91 9876543210"
                          className="w-full bg-navy-950/80 border border-white/15 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400 transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1">Grade Seeking Admission *</label>
                        <select
                          name="grade"
                          value={formData.grade}
                          onChange={handleChange}
                          className="w-full bg-navy-950/80 border border-white/15 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400 transition-all"
                        >
                          <option value="Grade IV">Grade IV</option>
                          <option value="Grade V">Grade V</option>
                          <option value="Grade VI">Grade VI</option>
                          <option value="Grade VII">Grade VII</option>
                          <option value="Grade VIII">Grade VIII</option>
                          <option value="Grade IX">Grade IX</option>
                          <option value="Grade X">Grade X</option>
                          <option value="Grade XI (Science)">Grade XI (Science)</option>
                          <option value="Grade XI (Commerce)">Grade XI (Commerce)</option>
                          <option value="Grade XI (Humanities)">Grade XI (Humanities)</option>
                          <option value="Grade XII">Grade XII</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1">Current City *</label>
                        <input
                          type="text"
                          name="city"
                          required
                          value={formData.city}
                          onChange={handleChange}
                          placeholder="e.g. New Delhi / Dehradun"
                          className="w-full bg-navy-950/80 border border-white/15 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400 transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">Questions / Special Requirements</label>
                      <textarea
                        name="message"
                        rows="3"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your child's academic interest, sports background, or preferred campus visit date..."
                        className="w-full bg-navy-950/80 border border-white/15 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400 transition-all"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-300 via-gold-400 to-amber-500 text-navy-950 font-bold text-sm shadow-gold-glow hover:shadow-[0_0_20px_rgba(212,175,55,0.6)] transition-all flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <span>Submitting Request...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Submit Admission Enquiry</span>
                        </>
                      )}
                    </button>
                  </form>
                )}

              </div>
            </SectionReveal>
          </div>

        </div>
      </div>
    </section>
  );
}
