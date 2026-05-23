'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useState } from 'react';

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
    title: "AI---WORKPLACE", 
    category: "AI & ML",
    tech: ["TypeScript", "AI Workflows", "Automation"], 
    description: "A specialized TypeScript workplace focused on AI algorithm implementation, intelligent workflows, and system integration.",
    bg: "from-indigo-500/20 to-purple-500/20",
    accent: "text-indigo-400"
  },
  { 
    title: "GDG_HACKATHON", 
    category: "Full Stack",
    tech: ["JavaScript", "Web Tech"], 
    description: "Developed a high-impact solution during the GDG Hackathon focusing on real-world scalability and modern UI/UX design.",
    bg: "from-blue-500/20 to-cyan-500/20",
    accent: "text-blue-400"
  },
  { 
    title: "ESP-32-Project", 
    category: "Automation",
    tech: ["C++", "Hardware", "IoT"], 
    description: "Hardware integration project using ESP-32 for real-time automation, smart control systems, and IoT communication.",
    bg: "from-emerald-500/20 to-teal-500/20",
    accent: "text-emerald-400"
  },
  { 
    title: "Data Structures & Algorithms", 
    category: "Core Tech",
    tech: ["C++", "Java", "Optimization"], 
    description: "Comprehensive Data Structures and Algorithms repositories (CPP-C-DSA & JAVA-Sem-2-LAB) implementing optimized core concepts.",
    bg: "from-orange-500/20 to-pink-500/20",
    accent: "text-orange-400"
  },
];

const filters = ["All", "AI & ML", "Automation", "Full Stack", "Core Tech"];

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const filteredProjects = projects.filter(p => activeFilter === "All" || p.category === activeFilter);

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 sm:px-12 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="space-y-6 mb-16 relative z-10"
      >
        <div className="flex items-center gap-4">
          <span className="h-px bg-white/20 w-12 sm:w-24"></span>
          <span className="text-blue-400 font-mono tracking-[0.2em] uppercase text-sm">GitHub Archive</span>
        </div>
        <h1 className="text-5xl md:text-[6rem] font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white via-zinc-300 to-zinc-600 leading-[1.1]">
          Featured Projects
        </h1>
      </motion.div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-4 mb-16 relative z-10">
        {filters.map(filter => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${activeFilter === filter ? 'bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.2)]' : 'bg-white/[0.03] text-zinc-400 border border-white/5 hover:bg-white/10 hover:text-white'}`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Project Grid */}
      <div style={{ perspective: 1200 }} className="relative z-10">
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {filteredProjects.map((p) => (
            <TiltCard key={p.title} className="h-[400px] md:h-[480px]">
              <motion.div 
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="group relative overflow-hidden rounded-[2rem] flex flex-col h-full bg-[#0a0a0a] border border-white/5 transition-all duration-500 hover:-translate-y-2 hover:border-white/30 shadow-2xl"
              >
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out z-0 pointer-events-none" />
                <div className={`absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b ${p.bg} opacity-50 group-hover:opacity-80 transition-opacity duration-500 blur-2xl z-0 pointer-events-none`} />
                
                <div style={{ transform: "translateZ(40px)" }} className="relative z-10 flex-1 p-8 md:p-12 flex flex-col justify-between h-full bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/90 to-transparent">
                  <div>
                    <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-4 block">{p.category}</span>
                    <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-zinc-100 group-hover:text-white transition-colors">{p.title}</h3>
                    <p className="text-zinc-400 text-sm md:text-base leading-relaxed max-w-lg">{p.description}</p>
                  </div>
                  <div className="flex flex-wrap items-center gap-3 mt-8">
                    {p.tech.map(t => (
                      <span key={t} className={`${p.accent} font-mono text-xs uppercase tracking-widest bg-white/5 px-4 py-2 rounded-full border border-white/5`}>
                        {t}
                      </span>
                    ))}
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
