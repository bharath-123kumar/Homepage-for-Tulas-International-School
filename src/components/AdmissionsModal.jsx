import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, Sparkles, Send } from 'lucide-react';
import { schoolInfo } from '../data/schoolData';

export default function AdmissionsModal({ isOpen, onClose }) {
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

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-navy-950/85 backdrop-blur-xl overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          onClick={(e) => e.stopPropagation()}
          className="glass-card max-w-xl w-full rounded-3xl p-6 sm:p-8 border border-gold-500/40 shadow-2xl relative my-8"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Close admissions modal"
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-navy-900 border border-white/10 text-slate-300 hover:text-white flex items-center justify-center focus:outline-none"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header */}
          <div className="mb-6">
            <span className="inline-flex items-center gap-1 text-xs font-bold text-gold-400 uppercase tracking-widest bg-gold-500/10 px-3 py-1 rounded-full border border-gold-500/30">
              <Sparkles className="w-3.5 h-3.5" /> Admissions Session 2026-27
            </span>
            <h3 className="text-2xl font-serif font-bold text-white mt-2">
              Apply to Tula's International School
            </h3>
            <p className="text-slate-300 text-xs mt-1">
              Residential CBSE Boarding School | Grades IV to XII | Dehradun
            </p>
          </div>

          {submitted ? (
            <div className="bg-emerald-950/60 border border-emerald-500/40 rounded-2xl p-8 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-serif font-bold text-white">Application Received!</h4>
              <p className="text-slate-300 text-xs leading-relaxed">
                Thank you, <strong className="text-white">{formData.parentName}</strong>. Our admissions director will get in touch with you shortly at <strong className="text-gold-400">{formData.phone}</strong>.
              </p>
              <button
                onClick={onClose}
                className="px-6 py-2.5 rounded-full bg-gold-500 text-navy-950 font-bold text-xs hover:bg-gold-400 transition-colors"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Parent Name *</label>
                  <input
                    type="text"
                    name="parentName"
                    required
                    value={formData.parentName}
                    onChange={handleChange}
                    placeholder="Full Name"
                    className="w-full bg-navy-950/90 border border-white/15 rounded-xl px-3.5 py-2 text-sm text-white focus:outline-none focus:border-gold-400"
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
                    placeholder="Student Full Name"
                    className="w-full bg-navy-950/90 border border-white/15 rounded-xl px-3.5 py-2 text-sm text-white focus:outline-none focus:border-gold-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Mobile Phone *</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 9876543210"
                    className="w-full bg-navy-950/90 border border-white/15 rounded-xl px-3.5 py-2 text-sm text-white focus:outline-none focus:border-gold-400"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Email *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="parent@example.com"
                    className="w-full bg-navy-950/90 border border-white/15 rounded-xl px-3.5 py-2 text-sm text-white focus:outline-none focus:border-gold-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Grade Seeking *</label>
                  <select
                    name="grade"
                    value={formData.grade}
                    onChange={handleChange}
                    className="w-full bg-navy-950/90 border border-white/15 rounded-xl px-3.5 py-2 text-sm text-white focus:outline-none focus:border-gold-400"
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
                    placeholder="City / State"
                    className="w-full bg-navy-950/90 border border-white/15 rounded-xl px-3.5 py-2 text-sm text-white focus:outline-none focus:border-gold-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Note / Question</label>
                <textarea
                  name="message"
                  rows="2"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Any specific query..."
                  className="w-full bg-navy-950/90 border border-white/15 rounded-xl px-3.5 py-2 text-sm text-white focus:outline-none focus:border-gold-400"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-300 via-gold-400 to-amber-500 text-navy-950 font-bold text-sm shadow-gold-glow flex items-center justify-center gap-2 hover:opacity-95 transition-opacity"
              >
                {isSubmitting ? 'Processing...' : 'Submit Official Application'}
              </button>
            </form>
          )}

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
