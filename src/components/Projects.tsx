'use client';
import { motion } from 'framer-motion';

export default function Projects() {
  const projects = [
    {
      title: "NEXUS OS — Autonomous AI Company Operating System",
      tech: "Python, FastAPI, Next.js, TypeScript, LangChain, OpenAI APIs, Supabase, PostgreSQL, Docker, AI Agents",
      description: "Designed and architected an enterprise-grade multi-agent AI operating system capable of managing autonomous AI employees, workflow execution, intelligent task delegation, memory systems, and real-world business automation pipelines.",
      bg: "from-indigo-500/20 to-purple-500/20",
      accent: "text-indigo-400"
    },

    {
      title: "AI Workflow Automation System",
      tech: "n8n, LLMs, API Integrations, AI Agents, Workflow Nodes",
      description: "Built advanced AI automation workflows for client outreach, intelligent messaging, follow-ups, and operational automation using AI-driven response generation and multi-node execution systems.",
      bg: "from-violet-500/20 to-fuchsia-500/20",
      accent: "text-violet-400"
    },

    {
      title: "AI-Powered Food Delivery Ecosystem",
      tech: "Next.js, Node.js, MongoDB, Socket.IO, AI Recommendation Systems, Real-Time APIs",
      description: "Developed a scalable food delivery ecosystem integrating AI meal recommendations, real-time order tracking, cloud kitchen workflows, contactless delivery systems, live chat support, and eco-friendly operational infrastructure.",
      bg: "from-blue-500/20 to-cyan-500/20",
      accent: "text-blue-400"
    },

    {
      title: "AI SaaS Subscription & Access Control Platform",
      tech: "Next.js, Firebase, Node.js, Authentication Systems, Payment Gateway APIs",
      description: "Created a secure SaaS infrastructure with subscription management, premium AI feature access control, payment integration, user authentication, and scalable permission-based system architecture.",
      bg: "from-emerald-500/20 to-teal-500/20",
      accent: "text-emerald-400"
    },

    {
      title: "Educational Content Automation System",
      tech: "Python, AI Content Structuring, OCR Systems, PDF Automation, EdTech Workflows",
      description: "Developed AI-assisted educational systems for generating structured notes, previous-year questions, formula roadmaps, and academic resources focused on scalable learning workflows and exam preparation.",
      bg: "from-orange-500/20 to-pink-500/20",
      accent: "text-orange-400"
    },

    {
      title: "AI Chatbot Platform with Monetization",
      tech: "Custom UI, AI APIs, Payment Integration, Authentication, SaaS Logic",
      description: "Built a customizable AI chatbot platform with integrated payment systems, premium feature unlocking, user-based access control, and scalable monetization infrastructure for AI-powered applications.",
      bg: "from-rose-500/20 to-red-500/20",
      accent: "text-rose-400"
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
