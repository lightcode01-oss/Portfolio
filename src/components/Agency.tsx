'use client';
import { motion } from 'framer-motion';

export default function Agency() {
  const services = [
    "AI Workflow Automation", "Chatbot Development", "Lead Generation Systems",
    "Email Automation", "Business Process Automation", "Custom AI Solutions"
  ];
  
  const clients = ["Startups", "Small Businesses", "Freelancers", "Content Creators"];
  const whyChoose = ["Automation-first approach", "Real-world problem solving", "Scalable systems", "Cost-effective solutions", "Fast implementation"];

  return (
    <section className="relative w-full py-32 bg-[#050505] px-6 sm:px-12 z-20 overflow-hidden text-white border-y border-white/5">
      <div className="max-w-7xl mx-auto space-y-32">
        
        {/* Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block border border-blue-500/30 bg-blue-500/10 px-6 py-2 rounded-full mb-8 backdrop-blur-3xl">
              <p className="text-xs sm:text-sm text-blue-300 tracking-[0.3em] uppercase font-bold">The Agency</p>
            </div>
            <h2 className="text-5xl md:text-[5rem] font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-emerald-400 pb-2 leading-tight">
              TechMagnitude
            </h2>
            <p className="mt-6 text-xl sm:text-2xl text-zinc-400 font-light tracking-wide italic border-l-2 border-white/20 pl-6">
              "Scaling Businesses with AI & Automation"
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-zinc-400 text-lg sm:text-xl leading-relaxed space-y-6 bg-white/[0.02] p-8 sm:p-10 rounded-[2rem] border border-white/5"
          >
            <p>
              TechMagnitude is an AI automation agency focused on helping businesses streamline operations and eliminate repetitive manual work.
            </p>
            <p>
              We build smart systems that handle tasks like lead generation, messaging, follow-ups, and customer interaction—allowing businesses to focus entirely on growth. By combining AI technology with fundamental business strategy, we deliver exceptionally scalable and efficient solutions.
            </p>
          </motion.div>
        </div>

        {/* Services & Clients */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7 }}
            className="group p-8 md:p-10 rounded-[2rem] bg-[#0a0a0a] border border-white/5 flex flex-col h-full hover:border-blue-500/30 transition-all duration-500 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <h3 className="text-2xl font-bold mb-8 text-blue-400">Core Services</h3>
            <ul className="space-y-6 flex-1 relative z-10">
              {services.map(s => (
                <li key={s} className="flex items-start text-zinc-300 group-hover:text-zinc-100 transition-colors">
                  <span className="text-blue-500 mr-4 text-xl leading-none">✦</span>
                  <span className="font-medium tracking-wide">{s}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="group p-8 md:p-10 rounded-[2rem] bg-[#0a0a0a] border border-white/5 flex flex-col h-full hover:border-emerald-500/30 transition-all duration-500 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <h3 className="text-2xl font-bold mb-8 text-emerald-400">Target Clients</h3>
            <ul className="space-y-6 flex-1 relative z-10">
              {clients.map(c => (
                <li key={c} className="flex items-start text-zinc-300 group-hover:text-zinc-100 transition-colors">
                  <span className="text-emerald-500 mr-4 text-xl leading-none">✦</span>
                  <span className="font-medium tracking-wide">{c}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="group p-8 md:p-10 rounded-[2rem] bg-[#0a0a0a] border border-white/5 flex flex-col h-full hover:border-purple-500/30 transition-all duration-500 relative overflow-hidden md:col-span-2 lg:col-span-1"
          >
            <div className="absolute inset-0 bg-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <h3 className="text-2xl font-bold mb-8 text-purple-400">Why Choose Us</h3>
            <ul className="space-y-6 flex-1 relative z-10">
              {whyChoose.map(w => (
                <li key={w} className="flex items-start text-zinc-300 group-hover:text-zinc-100 transition-colors">
                  <span className="text-purple-500 mr-4 text-xl leading-none">✦</span>
                  <span className="font-medium tracking-wide">{w}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Vision */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="relative p-12 md:p-24 text-center rounded-[3rem] bg-gradient-to-b from-blue-900/10 to-transparent border border-blue-500/20 overflow-hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent pointer-events-none" />
          <span className="text-blue-400 font-mono tracking-[0.3em] uppercase text-sm mb-8 block relative z-10">The Vision</span>
          <p className="text-3xl sm:text-4xl md:text-[3.5rem] font-medium text-white leading-tight max-w-5xl mx-auto tracking-tight text-balance relative z-10">
            To become a leading AI automation agency that transforms how businesses operate by replacing manual work with intelligent systems.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
