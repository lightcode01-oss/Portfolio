'use client';
import { motion } from 'framer-motion';

export default function Achievements() {
  const highlights = [
    "Built multiple real-world AI-based projects driving tangible automation.",
    "Created and successfully sold digital educational products to students.",
    "Strong focus on business-oriented logic and client outcome-based workflows.",
    "Active in content creation, breaking down complex topics for students.",
    "Consistently exploring and mastering the bleeding-edge of AI tools."
  ];

  return (
    <section className="w-full py-32 bg-[#050505] px-6 sm:px-12 text-white z-20 relative border-t border-white/5 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 relative z-10">
        
        {/* Achievements */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="space-y-10"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="h-px bg-white/20 w-12 sm:w-24"></span>
            <span className="text-zinc-400 font-mono tracking-[0.2em] uppercase text-sm">Milestones</span>
          </div>
          <h2 className="text-5xl md:text-[4.5rem] font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white via-zinc-200 to-zinc-600 leading-tight">
            Key Highlights
          </h2>
          <div className="space-y-6">
            {highlights.map((item, idx) => (
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                key={idx} 
                className="flex items-start group"
              >
                <span className="text-blue-500 mr-5 text-xl mt-1 opacity-70 group-hover:opacity-100 transition-opacity drop-shadow-[0_0_8px_rgba(59,130,246,0.6)]">✦</span>
                <p className="text-zinc-400 text-lg leading-relaxed group-hover:text-zinc-200 transition-colors">{item}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Career Goals */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative group"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 rounded-[3rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
          <div className="p-10 md:p-14 rounded-[3rem] backdrop-blur-2xl bg-white/[0.02] border border-white/5 shadow-2xl hover:border-indigo-500/20 transition-all duration-700 h-full flex flex-col justify-center">
            <h3 className="text-3xl sm:text-4xl tracking-tight font-bold mb-10 text-white flex items-center gap-5">
              <span className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 text-xl shadow-[0_0_20px_rgba(99,102,241,0.15)]">◈</span>
              Future Vision
            </h3>
            <ul className="space-y-8">
              <li className="flex flex-col group/li">
                <span className="text-xs sm:text-sm text-indigo-400/80 font-mono mb-2 tracking-[0.2em] group-hover/li:text-indigo-400 transition-colors uppercase">01 / ROLE</span>
                <span className="text-lg sm:text-xl text-zinc-300 group-hover/li:text-white transition-colors">To become a principal AI Engineer / Automation Specialist.</span>
              </li>
              <li className="flex flex-col group/li">
                <span className="text-xs sm:text-sm text-indigo-400/80 font-mono mb-2 tracking-[0.2em] group-hover/li:text-indigo-400 transition-colors uppercase">02 / IMPACT</span>
                <span className="text-lg sm:text-xl text-zinc-300 group-hover/li:text-white transition-colors">Build highly scalable AI-driven tech solutions for modern businesses.</span>
              </li>
              <li className="flex flex-col group/li">
                <span className="text-xs sm:text-sm text-indigo-400/80 font-mono mb-2 tracking-[0.2em] group-hover/li:text-indigo-400 transition-colors uppercase">03 / BUSINESS</span>
                <span className="text-lg sm:text-xl text-zinc-300 group-hover/li:text-white transition-colors">Create robust digital products and establish reliable online income streams.</span>
              </li>
              <li className="flex flex-col group/li">
                <span className="text-xs sm:text-sm text-indigo-400/80 font-mono mb-2 tracking-[0.2em] group-hover/li:text-indigo-400 transition-colors uppercase">04 / GROWTH</span>
                <span className="text-lg sm:text-xl text-zinc-300 group-hover/li:text-white transition-colors">Continuously master the intersection of tech and entrepreneurship.</span>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
