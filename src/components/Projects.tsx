'use client';
import { motion } from 'framer-motion';

export default function Projects() {
  const projects = [
    { 
      title: "AI Workflow Automation", 
      tech: "n8n, LLMs, API", 
      description: "Automates client outreach, messaging, and follow-ups. Uses AI to generate responses and handle conversations, drastically reducing manual work and increasing efficiency.",
      bg: "from-indigo-500/20 to-purple-500/20",
      accent: "text-indigo-400"
    },
    { 
      title: "Food Delivery Platform", 
      tech: "Next.js, AI Recommendations", 
      description: "Advanced concept featuring real-time order tracking, AI-based meal recommendations, live chat support, cloud kitchen integration, and eco-friendly packaging.",
      bg: "from-blue-500/20 to-cyan-500/20",
      accent: "text-blue-400"
    },
    { 
      title: "Chatbot with Pricing System", 
      tech: "Custom UI, Payments", 
      description: "Custom chatbot interface featuring user-based access control and integrated payment logic for unlocking premium AI capabilities and features.",
      bg: "from-emerald-500/20 to-teal-500/20",
      accent: "text-emerald-400"
    },
    { 
      title: "Educational Content Creation", 
      tech: "Digital Products, EdTech", 
      description: "Created and sold structured materials for Computer Science. Strong focus on exam preparation, PYQs, and concept clarity for students aiming for top scores.",
      bg: "from-orange-500/20 to-pink-500/20",
      accent: "text-orange-400"
    },
  ];

  return (
    <section className="relative w-full py-32 bg-[#050505] px-6 sm:px-12 z-20 overflow-hidden text-white border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="h-px bg-white/20 w-12 sm:w-24"></span>
            <span className="text-zinc-400 font-mono tracking-[0.2em] uppercase text-sm">Portfolio</span>
          </div>
          <h2 className="text-5xl md:text-[5rem] font-extrabold mb-20 tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white via-zinc-200 to-zinc-600">
            Selected Works
          </h2>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 w-full">
          {projects.map((p, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-[2rem] flex flex-col h-[400px] md:h-[480px] bg-[#0a0a0a] border border-white/5 transition-all duration-500 hover:-translate-y-2 hover:border-white/20"
            >
              <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out z-0 pointer-events-none" />
              <div className={`absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b ${p.bg} opacity-50 group-hover:opacity-80 transition-opacity duration-500 blur-2xl z-0 pointer-events-none`} />
              
              <div className="relative z-10 flex-1 p-8 md:p-12 flex flex-col justify-between h-full bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/90 to-transparent">
                <div>
                  <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-zinc-100 group-hover:text-white transition-colors">{p.title}</h3>
                  <p className="text-zinc-400 text-sm md:text-base leading-relaxed max-w-lg">{p.description}</p>
                </div>
                <div className="flex items-center justify-between mt-8">
                  <p className={`${p.accent} font-mono text-xs uppercase tracking-widest bg-white/5 px-4 py-2 rounded-full border border-white/5`}>{p.tech}</p>
                  
                  <button className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300 pointer-events-auto">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"><line x1="5" y1="19" x2="19" y2="5"></line><polyline points="12 5 19 5 19 12"></polyline></svg>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
