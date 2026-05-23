'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useEffect } from 'react';
import Link from 'next/link';

export default function Hero3D() {
  // Magnetic / 3D Tilt effect for the central card
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Smooth out the raw mouse values
  const springConfig = { damping: 30, stiffness: 150, mass: 1 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  // Map mouse position to rotation angles (e.g. max 15 degrees)
  const rotateX = useTransform(smoothMouseY, [-0.5, 0.5], [15, -15]);
  const rotateY = useTransform(smoothMouseX, [-0.5, 0.5], [-15, 15]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Normalize mouse coordinates to [-0.5, 0.5]
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth) - 0.5;
      const y = (e.clientY / innerHeight) - 0.5;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-20">
      
      {/* Background Gradients & Light Orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-[20%] -left-[10%] w-[50vw] h-[50vw] rounded-full bg-blue-600/20 blur-[120px]" 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-[20%] -right-[10%] w-[40vw] h-[40vw] rounded-full bg-emerald-600/20 blur-[120px]" 
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-12 flex flex-col items-center">
        
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8 shadow-[0_0_20px_rgba(255,255,255,0.05)]"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-xs font-mono tracking-widest text-zinc-300 uppercase">Available for new opportunities</span>
        </motion.div>

        {/* 3D Tilt Container */}
        <div style={{ perspective: 1200 }} className="w-full flex justify-center mb-12">
          <motion.div
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative w-full max-w-4xl text-center"
          >
            <h1 
              style={{ transform: "translateZ(60px)" }}
              className="text-5xl sm:text-7xl md:text-[6rem] lg:text-[7.5rem] font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-zinc-200 to-zinc-600 leading-[1.05] drop-shadow-2xl mb-8"
            >
              Abhinav Dash
            </h1>
            
            <p 
              style={{ transform: "translateZ(40px)" }}
              className="text-xl sm:text-2xl md:text-3xl font-light text-zinc-300 max-w-3xl mx-auto leading-relaxed text-balance"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400 font-medium">Founder of Tech Magnitude</span> — building AI-powered automation systems, intelligent web applications, and modern digital infrastructure.
            </p>

            <motion.div 
              style={{ transform: "translateZ(20px)" }}
              className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6"
            >
              <Link 
                href="/projects"
                className="px-8 py-4 rounded-full bg-white text-black font-semibold tracking-wide hover:scale-105 active:scale-95 transition-all shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:shadow-[0_0_50px_rgba(255,255,255,0.4)] relative group overflow-hidden"
              >
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
                Explore Projects
              </Link>
              <Link 
                href="/agency"
                className="px-8 py-4 rounded-full bg-white/5 text-white border border-white/10 font-semibold tracking-wide hover:bg-white/10 hover:border-white/20 transition-all backdrop-blur-md"
              >
                Tech Magnitude ↗
              </Link>
            </motion.div>
          </motion.div>
        </div>

      </div>

      {/* Floating 3D Elements */}
      <motion.div 
        animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }} 
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[20%] left-[10%] w-24 h-24 rounded-3xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-white/10 backdrop-blur-xl hidden lg:block"
      />
      <motion.div 
        animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }} 
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-[20%] right-[10%] w-32 h-32 rounded-full bg-gradient-to-br from-emerald-500/20 to-teal-500/20 border border-white/10 backdrop-blur-xl hidden lg:block"
      />
    </section>
  );
}
