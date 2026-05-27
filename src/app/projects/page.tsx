'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import Link from 'next/link';

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
);

// Custom 3D Tilt Component
function TiltCard({ children, className }: { children: React.ReactNode, className?: string }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [7, -7]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [-7, 7]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set((mouseX / width) - 0.5);
    y.set((mouseY / height) - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={`relative ${className}`}
    >
      {children}
    </motion.div>
  );
}

const projects = [
  {
    title: "AI Workspace",
    slug: "ai-workspace",
    category: "AI & ML",
    tech: ["TypeScript", "Next.js", "Node.js", "AI Workflows", "Automation"],
    description:
      "Developed an AI-focused workspace designed for workflow automation, intelligent system integration, scalable backend operations, and AI-driven process execution using modern TypeScript architecture.",
    bg: "from-indigo-500/20 to-purple-500/20",
    accent: "text-indigo-400",
    github: "https://github.com/lightcode01-oss/AI---WORKPLACE",
    live: null
  },

  {
    title: "CrowdChain Web3 Event Management",
    slug: "web3-event-management",
    category: "Core Tech",
    tech: ["TypeScript", "Next.js", "Solidity", "Python", "Web3"],
    description:
      "Built a decentralized Web3 event management platform integrating blockchain authentication, smart contracts, wallet connectivity, decentralized ticket validation, and secure event operations.",
    bg: "from-cyan-500/20 to-slate-500/20",
    accent: "text-cyan-400",
    github: "https://github.com/lightcode01-oss/CrowdChainWeb-3eventmanagement",
    live: "https://crowd-chain-web-3eventmanagement-29.vercel.app/"
  },

  {
    title: "Automation Workflows",
    slug: "automation-workflows",
    category: "Automation",
    tech: ["n8n", "Workflow Automation", "AI Agents", "APIs", "Integrations"],
    description:
      "Built advanced workflow automation pipelines using n8n for API integrations, intelligent task execution, operational automation, and scalable business workflow systems.",
    bg: "from-violet-500/20 to-fuchsia-500/20",
    accent: "text-violet-400",
    github: "https://github.com/lightcode01-oss/AI_Workflow",
    live: null
  },

  {
    title: "Food Delivery Platform",
    slug: "food-delivery-platform",
    category: "Full Stack",
    tech: ["HTML", "CSS", "SCSS", "JavaScript", "Python"],
    description:
      "Developed a responsive food delivery platform featuring scalable frontend architecture, optimized user experience systems, and integrated backend operational workflows.",
    bg: "from-blue-500/20 to-cyan-500/20",
    accent: "text-blue-400",
    github: "https://github.com/lightcode01-oss/foods-delivery",
    live: "https://lightcode01-oss.github.io/foods-delivery/"
  },

  {
    title: "GDG Hackathon Project",
    slug: "gdg-hackathon-project",
    category: "Full Stack",
    tech: ["JavaScript", "React", "APIs", "Web Technologies"],
    description:
      "Built a scalable hackathon solution focused on responsive frontend systems, modern UI/UX, real-world usability, and seamless API integrations under rapid development timelines.",
    bg: "from-sky-500/20 to-blue-500/20",
    accent: "text-sky-400",
    github: "https://github.com/lightcode01-oss/GDG_HACKATHON",
    live: "https://gdg-hackathon-alpha.vercel.app/"
  },

  {
    title: "ESP-32 IoT Automation System",
    slug: "esp32-iot-automation",
    category: "AI & ML",
    tech: ["C++", "ESP-32", "IoT", "Embedded Systems", "Hardware Automation"],
    description:
      "Created an ESP-32 based automation system for smart device communication, wireless operational control, IoT workflows, and real-time hardware automation systems.",
    bg: "from-emerald-500/20 to-teal-500/20",
    accent: "text-emerald-400",
    github: "https://github.com/lightcode01-oss/ESP-32-Project",
    live: null
  }
];

const filters = ["All", "AI & ML", "Automation", "Full Stack", "Core Tech"];

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const filteredProjects = projects.filter(p => activeFilter === "All" || p.category === activeFilter);

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 sm:px-12 max-w-[90rem] mx-auto relative">
      
      {/* Animated Background Blobs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen animate-pulse" />
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen animate-pulse" style={{ animationDelay: '2s' }} />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="space-y-6 mb-20 relative z-10"
      >
        <div className="flex items-center gap-4">
          <span className="h-px bg-white/20 w-12 sm:w-24"></span>
          <span className="text-blue-400 font-mono tracking-[0.2em] uppercase text-sm">GitHub Archive</span>
        </div>
        <h1 className="text-6xl md:text-[8rem] font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white via-zinc-300 to-zinc-600 leading-[1.1]">
          Featured Projects
        </h1>
      </motion.div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-4 mb-20 relative z-10">
        {filters.map(filter => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-8 py-4 rounded-full text-sm sm:text-base font-semibold transition-all duration-300 ${activeFilter === filter ? 'bg-white text-black shadow-[0_0_30px_rgba(255,255,255,0.2)]' : 'bg-white/[0.03] text-zinc-400 border border-white/5 hover:bg-white/10 hover:text-white'}`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Project Grid */}
      <div style={{ perspective: 1200 }} className="relative z-10">
        <motion.div layout className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {filteredProjects.map((p) => (
            <TiltCard key={p.title} className="h-[500px] md:h-[550px]">
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="group relative overflow-hidden rounded-[3rem] flex flex-col h-full bg-[#0a0a0a] border border-white/5 transition-all duration-500 hover:-translate-y-4 hover:border-white/30 shadow-2xl"
              >
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out z-0 pointer-events-none" />
                <div className={`absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b ${p.bg} opacity-50 group-hover:opacity-80 transition-opacity duration-500 blur-3xl z-0 pointer-events-none`} />

                <div style={{ transform: "translateZ(40px)" }} className="relative z-10 flex-1 p-10 md:p-14 flex flex-col justify-between h-full bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/90 to-transparent">
                  <div>
                    <span className="text-sm font-mono text-zinc-500 uppercase tracking-widest mb-6 block">{p.category}</span>
                    <h3 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-zinc-100 group-hover:text-white transition-colors">{p.title}</h3>
                    <p className="text-zinc-400 text-lg leading-relaxed max-w-xl">{p.description}</p>

                    <div className="flex flex-wrap items-center gap-3 mt-8">
                      {p.tech.map(t => (
                        <span key={t} className={`${p.accent} font-mono text-xs uppercase tracking-widest bg-white/5 px-4 py-2 rounded-full border border-white/5`}>
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Dual Action Buttons */}
                  <div className="flex items-center gap-4 mt-8 pt-8 border-t border-white/5">
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-white/5 hover:bg-white/10 text-white rounded-2xl font-semibold transition-all border border-white/5"
                    >
                      <GithubIcon />
                      Source Code
                    </a>
                    <Link
                      href={p.live || '/deployment-pending'}
                      className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-white text-black hover:bg-zinc-200 rounded-2xl font-semibold transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                    >
                      <ExternalLink className="w-5 h-5" />
                      Visit Website
                    </Link>
                  </div>

                </div>
              </motion.div>
            </TiltCard>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
