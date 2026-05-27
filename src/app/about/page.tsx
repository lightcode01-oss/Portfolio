'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FileText, ArrowRight } from 'lucide-react';

// Custom 3D Tilt Component
function TiltCard({ children, className }: { children: React.ReactNode, className?: string }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [10, -10]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [-10, 10]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = (mouseX / width) - 0.5;
    const yPct = (mouseY / height) - 0.5;
    x.set(xPct);
    y.set(yPct);
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
      <div style={{ transform: "translateZ(30px)" }} className="relative w-full h-full">
        {children}
      </div>
    </motion.div>
  );
}

export default function AboutPage() {
  const milestones = [
    { year: "2023", title: "BCA with AI & ML", desc: "Pursuing Bachelor of Computer Applications with a strict specialization in Artificial Intelligence and Machine Learning algorithms." },
    { year: "2024", title: "Founded Tech Magnitude", desc: "Launched a digital solutions startup to build AI-powered systems, modern websites, and intelligent automation workflows for businesses." },
    { year: "2025", title: "Advanced Automation", desc: "Developed large-scale chatbot systems, lead management solutions, and WhatsApp automation for startups and local businesses." },
    { year: "2026", title: "Future Ecosystems", desc: "Building scalable AI-driven digital products and autonomous ecosystems to transition businesses into the AI era." }
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 sm:px-12 max-w-[90rem] mx-auto overflow-x-hidden">
      
      {/* Massive Split Header */}
      <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24 mb-32 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 space-y-8"
        >
          <div className="flex items-center gap-4">
            <span className="h-px bg-white/20 w-12 sm:w-24"></span>
            <span className="text-emerald-400 font-mono tracking-[0.2em] uppercase text-sm">Founder & Architect</span>
          </div>
          <h1 className="text-5xl md:text-[5rem] lg:text-[7rem] font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white via-zinc-300 to-zinc-600 leading-[1.1]">
            About Me.
          </h1>
          <p className="text-xl md:text-2xl text-zinc-400 font-light max-w-4xl leading-relaxed text-balance">
            I am an aspiring AI Engineer, automation developer, and the founder of <strong className="text-white">Tech Magnitude</strong>. 
            I operate at the intersection of artificial intelligence, intelligent automation, full-stack development, and business systems design to create incredibly scalable digital experiences.
          </p>
        </motion.div>

        {/* Large Profile Visual */}
        <div style={{ perspective: 1200 }} className="flex-1 w-full max-w-xl flex justify-center lg:justify-end">
          <TiltCard className="w-full aspect-[4/5] md:aspect-square relative rounded-[3rem] overflow-hidden border border-white/10 shadow-[0_0_80px_rgba(52,211,153,0.15)] group">
            <div className="absolute inset-0 bg-[#050505] z-0" />
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 to-blue-500/20 z-10 opacity-50 mix-blend-overlay pointer-events-none" />
            <Image 
              src="/profile.jpg" 
              alt="Abhinav Dash - Founder" 
              fill 
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover relative z-0 grayscale-[50%] group-hover:grayscale-0 transition-all duration-700 ease-out scale-105 group-hover:scale-110" 
              style={{ objectPosition: "center 15%" }}
            />
            <div className="absolute inset-0 border-[2px] border-white/5 rounded-[3rem] z-20 pointer-events-none" />
          </TiltCard>
        </div>
      </div>

      {/* Career Timeline */}
      <div className="space-y-16 relative z-10">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-white flex items-center gap-6"
        >
          <span className="text-emerald-500">◈</span> The Journey
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" style={{ perspective: 1000 }}>
          {milestones.map((milestone, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.7 }}
            >
              <TiltCard className="group h-full p-10 rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] hover:border-white/20 transition-all duration-500 shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2.5rem] pointer-events-none" />
                <span className="text-5xl font-extrabold text-white/10 group-hover:text-emerald-500/30 transition-colors absolute top-8 right-8">
                  {milestone.year}
                </span>
                <h3 className="text-2xl font-bold text-white mb-6 mt-12 pr-12">{milestone.title}</h3>
                <p className="text-zinc-400 text-base md:text-lg leading-relaxed">{milestone.desc}</p>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Core Philosophy & Call to Action */}
      <div style={{ perspective: 1200 }}>
        <TiltCard className="mt-40 mb-20">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="p-12 md:p-24 lg:p-32 rounded-[4rem] bg-gradient-to-b from-emerald-900/20 via-[#0a0a0a] to-transparent border border-emerald-500/20 relative overflow-hidden shadow-[0_0_100px_rgba(16,185,129,0.1)] text-center flex flex-col items-center justify-center gap-12"
          >
            <div className="absolute inset-0 bg-grid-white opacity-[0.02] pointer-events-none" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1/2 bg-emerald-500/10 blur-[100px] rounded-full pointer-events-none" />
            
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white leading-tight max-w-5xl tracking-tight text-balance relative z-10">
              "My long-term goal is to build intelligent AI ecosystems and next-generation autonomous platforms that transform how businesses and people interact with technology."
            </h3>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-8 relative z-10">
              <Link 
                href="/resume.pdf" 
                target="_blank"
                className="group relative flex items-center justify-center gap-3 px-8 py-4 bg-emerald-500 text-black font-semibold rounded-full overflow-hidden transition-transform hover:scale-105 active:scale-95 w-full sm:w-auto"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <FileText size={20} />
                  View Resume
                </span>
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
              </Link>
              
              <Link 
                href="/contact" 
                className="group flex items-center justify-center gap-3 px-8 py-4 bg-white/5 text-white font-semibold rounded-full border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all w-full sm:w-auto"
              >
                <span>Get in Touch</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </TiltCard>
      </div>
    </div>
  );
}
