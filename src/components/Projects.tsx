'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: "AI Workspace",
      slug: "ai-workspace",
      tech: "TypeScript, Next.js, Node.js, AI Workflows, Automation Systems",
      description:
        "Developed an AI-focused workspace designed for workflow automation, intelligent system integration, scalable backend operations, and AI-driven process execution using modern TypeScript architecture.",
      bg: "from-indigo-500/20 to-purple-500/20",
      accent: "text-indigo-400",
      githubUrl: "https://github.com/lightcode01-oss/AI---WORKPLACE",
      liveUrl: ""
    },

    {
      title: "Web-3eventmanagement",
      slug: "Web-3 Tech",
      tech: "TypeScript, Next.js, Node.js, Solidity, Python, Web3_Sockets, Web3_Auth02",
      description:
        "Built multiple frontend interface experiments focused on Event Managements Using Web3 Chain Management, modern Web3 backend which connects with Digital currency wallets, interactive web3 Event Management experiences.",
      bg: "from-cyan-500/20 to-slate-500/20",
      accent: "text-cyan-400",
      githubUrl: "https://github.com/lightcode01-oss/CrowdChainWeb-3eventmanagement",
      liveUrl: "https://crowd-chain-web-3eventmanagement-29.vercel.app/"
    }

    {
      title: "Automation Workflows",
      slug: "n8n-workflows",
      tech: "n8n, APIs, Workflow Automation, AI Agents, Integrations",
      description:
        "Built advanced workflow automation pipelines using n8n for API integrations, automated operations, intelligent execution flows, and scalable business automation systems.",
      bg: "from-violet-500/20 to-fuchsia-500/20",
      accent: "text-violet-400",
      githubUrl: "https://github.com/lightcode01-oss/AI_Workflow",
      liveUrl: ""
    },

    {
      title: "Food Delivery Platform",
      slug: "food-delivery-platform",
      tech: "HTM, CSS , SCSS, Java Script, Python",
      description:
        "Developed a modern food delivery platform featuring responsive frontend architecture, scalable backend integration, real-time operational workflows, and optimized user experience systems.",
      bg: "from-blue-500/20 to-cyan-500/20",
      accent: "text-blue-400",
      githubUrl: "https://github.com/lightcode01-oss/foods-delivery",
      liveUrl: "https://lightcode01-oss.github.io/foods-delivery/"
    },

    {
      title: "GDG Hackathon Project",
      slug: "gdg-hackathon-project",
      tech: "JavaScript, React, APIs, Modern Web Technologies",
      description:
        "Built a scalable hackathon solution focused on modern UI/UX, frontend responsiveness, real-world functionality, and efficient API integration under rapid development timelines.",
      bg: "from-sky-500/20 to-blue-500/20",
      accent: "text-sky-400",
      githubUrl: "https://github.com/lightcode01-oss/GDG_HACKATHON",
      liveUrl: "https://gdg-hackathon-alpha.vercel.app/"
    },

    {
      title: "ESP-32 IoT Automation System",
      slug: "esp32-iot-automation",
      tech: "C++, ESP-32, IoT, Hardware Automation, Embedded Systems",
      description:
        "Created an ESP-32 based automation system for real-time device communication, IoT operations, wireless control systems, and smart hardware integration workflows.",
      bg: "from-emerald-500/20 to-teal-500/20",
      accent: "text-emerald-400",
      githubUrl: "https://github.com/lightcode01-oss/ESP-32-Project",
      liveUrl: ""
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

                  <div className="flex gap-3 pointer-events-auto">
                    <Link
                      href={p.githubUrl || '/404'}
                      target={p.githubUrl ? "_blank" : "_self"}
                      className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"
                      title="Source Code"
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                    </Link>
                    <Link
                      href={p.liveUrl || '/404'}
                      target={p.liveUrl ? "_blank" : "_self"}
                      className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"
                      title="Live Demo"
                    >
                      <ExternalLink size={20} strokeWidth={2} />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
