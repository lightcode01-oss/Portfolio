'use client';
import { motion } from 'framer-motion';

export default function Skills() {
  const categories = [
    {
      title: "Core Technologies",
      skills: ["C++", "Java", "SQL", "JavaScript", "TypeScript", "Next.js", "Tailwind CSS"],
      accent: "group-hover:text-blue-400",
      border: "group-hover:border-blue-500/50",
      glow: "bg-blue-500/10"
    },
    {
      title: "AI & Automation",
      skills: ["AI Workflow Automation", "Prompt Engineering", "LLM Integration", "n8n Pipelines", "Python Scripts"],
      accent: "group-hover:text-purple-400",
      border: "group-hover:border-purple-500/50",
      glow: "bg-purple-500/10"
    },
    {
      title: "Architecture & Tools",
      skills: ["Database Management", "Data Structures", "System Design", "Git & GitHub", "VS Code"],
      accent: "group-hover:text-emerald-400",
      border: "group-hover:border-emerald-500/50",
      glow: "bg-emerald-500/10"
    }
  ];

  return (
    <section className="relative w-full py-32 bg-[#050505] px-6 sm:px-12 z-20 overflow-hidden text-white border-t border-white/5">
      {/* Background gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="h-px bg-white/20 w-12 sm:w-24"></span>
            <span className="text-zinc-400 font-mono tracking-[0.2em] uppercase text-sm">Capabilities</span>
          </div>
          <h2 className="text-5xl md:text-[5rem] font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white via-zinc-200 to-zinc-600">
            The Arsenal
          </h2>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {categories.map((cat, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: idx * 0.15 }}
              className={`group relative p-8 md:p-10 rounded-[2rem] bg-[#0a0a0a] border border-white/5 transition-all duration-500 ${cat.border} hover:bg-white/[0.02]`}
            >
              {/* Subtle inner glow on hover */}
              <div className={`absolute inset-0 rounded-[2rem] ${cat.glow} opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 pointer-events-none`} />
              
              <h3 className={`text-2xl md:text-3xl font-bold mb-8 text-zinc-200 transition-colors duration-500 ${cat.accent}`}>
                {cat.title}
              </h3>
              
              <div className="flex flex-wrap gap-3">
                {cat.skills.map((skill, sIdx) => (
                  <span 
                    key={sIdx} 
                    className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm font-medium text-zinc-300 tracking-wide hover:bg-white/10 hover:text-white transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
