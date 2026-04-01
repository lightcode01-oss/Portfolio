'use client';
import { motion } from 'framer-motion';

export default function Founder() {
  const goals = [
    "Become an AI Engineer / Automation Expert",
    "Build endlessly scalable AI systems",
    "Launch a high-impact tech startup",
    "Generate dynamic income streams through digital products"
  ];

  return (
    <section className="w-full py-32 bg-[#050505] px-6 sm:px-12 text-white z-20 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-center relative z-10">
        
        {/* Founder Description */}
        <motion.div 
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="space-y-10"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="h-px bg-white/20 w-12 sm:w-24"></span>
            <span className="text-zinc-400 font-mono tracking-[0.2em] uppercase text-sm">Behind the Code</span>
          </div>
          <h2 className="text-5xl md:text-[5rem] font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-600">
            The Founder
          </h2>
          <div className="space-y-8 text-zinc-400 text-lg sm:text-xl leading-relaxed">
            <p>
              <strong className="text-white font-semibold tracking-wide">Abhinav Dash</strong> is the founder of TechMagnitude, an AI automation agency focused on building smart systems for modern businesses.
            </p>
            <p className="border-l-4 border-emerald-500/50 pl-6 bg-emerald-500/5 py-4 rounded-r-xl">
              He started this agency with a singular vision: helping people save time, drastically increase efficiency, and scale effortlessly using AI-powered solutions.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4 pt-4">
            {["Fast Learner", "Builder Mindset", "Entrepreneurial Thinking", "Problem Solver", "Consistent & Disciplined"].map((trait, i) => (
              <motion.span 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.5 + (i * 0.1) }}
                key={trait} 
                className="px-6 py-3 rounded-full border border-white/10 bg-white/[0.03] text-sm sm:text-base font-medium tracking-wide text-zinc-300 hover:bg-white/10 hover:border-white/30 transition-all cursor-default shadow-lg shadow-black/20"
              >
                {trait}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Career Goals */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="p-10 md:p-16 rounded-[3rem] backdrop-blur-3xl bg-[#0a0a0a]/80 border border-white/5 shadow-2xl hover:border-emerald-500/30 transition-all duration-700 relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
          
          <h3 className="text-3xl sm:text-4xl tracking-tight font-bold mb-12 flex items-center gap-6 text-white relative z-10">
            <span className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 text-2xl shadow-[0_0_20px_rgba(16,185,129,0.15)]">✦</span>
            Career Goals
          </h3>
          <ul className="space-y-10 relative z-10">
            {goals.map((goal, idx) => (
              <li key={idx} className="flex flex-col group/item">
                <span className="text-xs sm:text-sm text-emerald-400/80 font-mono mb-3 tracking-[0.2em] group-hover/item:text-emerald-400 transition-colors uppercase">
                  Goal // {String(idx + 1).padStart(2, '0')}
                </span>
                <span className="text-xl sm:text-2xl text-zinc-400 font-medium tracking-wide group-hover/item:text-white transition-colors">{goal}</span>
              </li>
            ))}
          </ul>
        </motion.div>

      </div>
    </section>
  );
}
