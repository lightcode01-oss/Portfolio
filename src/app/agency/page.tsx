'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function AgencyPage() {
  const [weeklyHours, setWeeklyHours] = useState(20);
  const [hourlyRate, setHourlyRate] = useState(50);

  // Math
  const monthlyHoursSaved = Math.round(weeklyHours * 4 * 0.8); // Assume 80% automation success
  const monthlyMoneySaved = monthlyHoursSaved * hourlyRate;

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 sm:px-12 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-4xl mx-auto mb-24 relative z-10"
      >
        <div className="inline-block border border-blue-500/30 bg-blue-500/10 px-6 py-2 rounded-full mb-8 backdrop-blur-3xl">
          <p className="text-xs sm:text-sm text-blue-300 tracking-[0.3em] uppercase font-bold">Tech Magnitude</p>
        </div>
        <h1 className="text-5xl md:text-[6rem] font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-emerald-400 leading-[1.1] pb-4 drop-shadow-[0_0_40px_rgba(59,130,246,0.3)]">
          Scale with AI.
        </h1>
        <p className="text-xl md:text-2xl text-zinc-400 font-light max-w-3xl mx-auto leading-relaxed mt-6">
          We build professional business websites, AI-integrated platforms, lead management systems, WhatsApp automation solutions, and digital growth strategies for startups and local businesses.
        </p>
      </motion.div>

      {/* ROI Calculator */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto bg-gradient-to-br from-white/[0.03] to-transparent border border-white/10 rounded-[3rem] p-8 md:p-16 relative overflow-hidden backdrop-blur-xl shadow-2xl"
      >
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="flex flex-col md:flex-row gap-16 relative z-10">
          <div className="flex-1 space-y-12">
            <div>
              <h3 className="text-3xl font-bold text-white mb-2">Automation ROI Calculator</h3>
              <p className="text-zinc-400">Estimate your savings by automating repetitive tasks (WhatsApp, Leads, Operations).</p>
            </div>

            <div className="space-y-8">
              <div>
                <div className="flex justify-between mb-4 text-white font-medium">
                  <label>Manual Hours (Weekly)</label>
                  <span className="text-blue-400">{weeklyHours} hrs</span>
                </div>
                <input 
                  type="range" 
                  min="5" max="100" 
                  value={weeklyHours} 
                  onChange={(e) => setWeeklyHours(Number(e.target.value))}
                  className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-blue-500"
                />
              </div>

              <div>
                <div className="flex justify-between mb-4 text-white font-medium">
                  <label>Avg. Value per Hour ($)</label>
                  <span className="text-emerald-400">${hourlyRate}</span>
                </div>
                <input 
                  type="range" 
                  min="15" max="200" step="5"
                  value={hourlyRate} 
                  onChange={(e) => setHourlyRate(Number(e.target.value))}
                  className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                />
              </div>
            </div>
          </div>

          <div className="flex-1 flex flex-col justify-center items-center p-8 bg-[#0a0a0a] rounded-[2rem] border border-white/5 text-center relative overflow-hidden">
             <div className="absolute inset-0 bg-gradient-to-t from-emerald-500/10 to-transparent pointer-events-none" />
             <p className="text-zinc-400 font-mono text-sm tracking-[0.2em] uppercase mb-4 relative z-10">Estimated Monthly Savings</p>
             <div className="text-6xl md:text-[5rem] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300 relative z-10">
               ${monthlyMoneySaved.toLocaleString()}
             </div>
             <p className="text-blue-400 mt-4 font-medium relative z-10">
               +{monthlyHoursSaved} Hours Recovered
             </p>
          </div>
        </div>
      </motion.div>

      {/* Services Breakdown */}
      <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
        {[
          { step: "01", title: "Modern Web", desc: "Performance-focused, responsive business websites tailored for maximum user engagement and SEO." },
          { step: "02", title: "AI & Automation", desc: "Lead management systems, WhatsApp chatbots, and workflow pipelines built into simple, effective solutions." },
          { step: "03", title: "Branding Growth", desc: "Digital branding and online growth strategies that help your local business transition into the AI-driven era." }
        ].map((s, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2, duration: 0.6 }}
            className="p-10 rounded-[2rem] bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] hover:border-white/20 transition-all shadow-2xl"
          >
            <span className="text-5xl font-extrabold text-white/10 block mb-6">{s.step}</span>
            <h4 className="text-2xl font-bold text-white mb-4">{s.title}</h4>
            <p className="text-zinc-400 leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
