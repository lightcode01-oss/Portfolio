'use client';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Overlay() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  // Opacity maps for 6 relaxed sections across 800vh
  const opacity1 = useTransform(scrollYProgress, [0, 0.1, 0.15], [1, 1, 0]);
  const opacity2 = useTransform(scrollYProgress, [0.10, 0.20, 0.30, 0.35], [0, 1, 1, 0]);
  const opacity3 = useTransform(scrollYProgress, [0.30, 0.40, 0.50, 0.55], [0, 1, 1, 0]);
  const opacity4 = useTransform(scrollYProgress, [0.50, 0.60, 0.70, 0.75], [0, 1, 1, 0]);
  const opacity5 = useTransform(scrollYProgress, [0.70, 0.80, 0.85, 0.90], [0, 1, 1, 0]);
  const opacity6 = useTransform(scrollYProgress, [0.85, 0.90, 0.95, 1], [0, 1, 1, 0]);

  // Y-axis transforms for parallax effect
  const y1 = useTransform(scrollYProgress, [0, 0.15], ['0%', '-30%']);
  const y2 = useTransform(scrollYProgress, [0.10, 0.35], ['20%', '-20%']);
  const y3 = useTransform(scrollYProgress, [0.30, 0.55], ['20%', '-20%']);
  const y4 = useTransform(scrollYProgress, [0.50, 0.75], ['20%', '-20%']);
  const y5 = useTransform(scrollYProgress, [0.70, 0.90], ['20%', '-20%']);
  const y6 = useTransform(scrollYProgress, [0.85, 1], ['20%', '-20%']);

  return (
    <div ref={containerRef} className="absolute top-0 left-0 w-full h-[800vh] pointer-events-none z-10 text-white selection:bg-white/20">
      <div className="sticky top-0 w-full h-screen overflow-hidden">
        
        {/* Section 1 -> Name & Niche */}
        <motion.div 
          style={{ opacity: opacity1, y: y1 }}
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 pointer-events-auto"
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl mb-8 shadow-2xl hover:bg-white/10 transition-colors cursor-pointer"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_10px_rgba(52,211,153,0.8)]" />
            <span className="text-xs sm:text-sm font-mono tracking-[0.2em] font-medium uppercase text-emerald-50">
              Available for work
            </span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-6xl sm:text-7xl md:text-[8rem] xl:text-[10rem] font-extrabold tracking-tighter drop-shadow-2xl"
          >
            ABHINAV DASH
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-6 text-xl sm:text-3xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 font-bold tracking-tight text-balance"
          >
            AI Engineer & Automation Specialist
          </motion.p>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-6 text-sm sm:text-lg md:text-xl font-mono text-gray-400/80 uppercase tracking-[0.3em] max-w-2xl"
          >
            BCA Scholar with AI & ML Specialization
          </motion.p>
        </motion.div>

        {/* Section 2 -> The Mission */}
        <motion.div 
          style={{ opacity: opacity2, y: y2 }}
          className="absolute inset-0 flex flex-col items-start justify-center px-6 sm:px-12 md:px-24 xl:px-32 pointer-events-auto"
        >
          <p className="text-sm font-mono tracking-widest text-indigo-400 mb-6 uppercase border-l-2 border-indigo-500/50 pl-4 py-1 bg-indigo-500/5 rounded-r-lg max-w-fit flex items-center gap-3 shadow-lg shadow-indigo-500/10 backdrop-blur-md">
            What I Do
          </p>
          <h2 className="text-5xl sm:text-6xl md:text-[6rem] xl:text-[7rem] font-extrabold leading-[1.1] drop-shadow-2xl tracking-tighter max-w-6xl text-balance">
            Turning Ideas into <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400 block mt-2">
              Scalable Systems.
            </span>
          </h2>
          <p className="mt-8 text-lg sm:text-2xl text-zinc-400 font-light max-w-3xl leading-relaxed text-balance">
            I help businesses and individuals automate workflows, build smart systems, and leverage AI to save time and scale faster.
          </p>
          <div className="mt-12 flex flex-wrap gap-6">
            <button className="px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-zinc-200 transition-colors shadow-xl shadow-white/10 hover:shadow-[0_0_40px_rgba(255,255,255,0.4)] hover:scale-105 active:scale-95 duration-300">
              View Projects
            </button>
            <button className="px-8 py-4 bg-black/40 text-white font-semibold rounded-full border border-white/20 hover:bg-white/10 transition-all backdrop-blur-2xl hover:border-white/50 hover:scale-105 active:scale-95 duration-300">
              Work With Me
            </button>
          </div>
        </motion.div>

        {/* Section 3 -> Implementation Focus */}
        <motion.div 
          style={{ opacity: opacity3, y: y3 }}
          className="absolute inset-0 flex flex-col items-end justify-center px-6 sm:px-12 md:px-24 xl:px-32 text-right pointer-events-none"
        >
          <h2 className="text-5xl sm:text-6xl md:text-[6rem] xl:text-[7rem] font-extrabold leading-[1.1] drop-shadow-2xl tracking-tighter max-w-5xl text-balance">
            Driven by <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-l from-orange-400 to-rose-500 inline-block mt-2">
              practical action.
            </span>
          </h2>
          <p className="mt-8 text-lg sm:text-2xl text-zinc-400 font-light max-w-2xl leading-relaxed text-balance">
            Rather than focusing exclusively on abstract theory, I believe in building projects fast, breaking boundaries, and solving massive real-world problems.
          </p>
        </motion.div>

        {/* Section 4 -> Entrepreneurial Edge */}
        <motion.div 
          style={{ opacity: opacity4, y: y4 }}
          className="absolute inset-0 flex flex-col items-start justify-center px-6 sm:px-12 md:px-24 xl:px-32 pointer-events-none"
        >
          <h2 className="text-5xl sm:text-6xl md:text-[6rem] xl:text-[7rem] font-extrabold leading-[1.1] drop-shadow-2xl tracking-tighter max-w-5xl text-balance">
            An <span className="italic font-light text-zinc-500">entrepreneurial</span><br/> edge.
          </h2>
          <div className="mt-8 relative max-w-3xl">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-white/40 to-white/0 rounded-full" />
            <p className="pl-8 text-lg sm:text-2xl text-zinc-400 font-light leading-relaxed text-balance">
              Constantly exploring ways to combine technical skills with digital product creation—aiming to automate systems and generate robust income through bleeding-edge tech.
            </p>
          </div>
        </motion.div>

        {/* Section 5 -> Traits */}
        <motion.div 
          style={{ opacity: opacity5, y: y5 }}
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 pointer-events-none"
        >
          <h2 className="text-5xl sm:text-6xl md:text-[6rem] xl:text-[7rem] font-extrabold leading-tight drop-shadow-2xl tracking-tighter max-w-6xl text-balance flex flex-col gap-6 sm:gap-8">
            <span className="text-emerald-400 opacity-90 hover:opacity-100 transition-opacity">Fast Learner.</span>
            <span className="text-blue-400 opacity-90 hover:opacity-100 transition-opacity">Problem Solver.</span>
            <span className="text-purple-400 opacity-90 hover:opacity-100 transition-opacity">Consistent & Disciplined.</span>
          </h2>
        </motion.div>

        {/* Section 6 -> TechMagnitude Hook */}
        <motion.div 
          style={{ opacity: opacity6, y: y6 }}
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 bg-black/40 backdrop-blur-sm pointer-events-auto"
        >
          <div className="inline-block border border-blue-500/30 bg-blue-500/10 px-8 py-3 rounded-full mb-10 shadow-[0_0_30px_rgba(59,130,246,0.2)] backdrop-blur-3xl">
            <p className="text-sm sm:text-base text-blue-300 tracking-[0.4em] uppercase font-bold">Welcome to the Agency</p>
          </div>
          <h2 className="text-6xl sm:text-8xl md:text-[10rem] xl:text-[12rem] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-emerald-400 tracking-tighter drop-shadow-[0_0_40px_rgba(59,130,246,0.3)]">
            TechMagnitude
          </h2>
          <p className="mt-8 sm:mt-12 text-xl sm:text-3xl text-zinc-200 font-light max-w-4xl text-balance uppercase tracking-[0.2em] border-b border-white/20 pb-6">
            Scaling Businesses with AI & Automation
          </p>
        </motion.div>
        
      </div>
    </div>
  );
}
