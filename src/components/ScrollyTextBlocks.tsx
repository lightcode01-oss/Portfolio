'use client';

import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Cpu, Sparkles, Terminal } from 'lucide-react';

function TextBlock({ 
  children, 
  index, 
  progress 
}: { 
  children: React.ReactNode, 
  index: number, 
  progress: MotionValue<number> 
}) {
  // Each block appears in a specific window of the scroll progress
  // 3 blocks total. progress ranges from 0 to 1 over the 600vh height.
  // Block 0: 0.1 to 0.3
  // Block 1: 0.4 to 0.6
  // Block 2: 0.7 to 0.9

  const start = 0.1 + (index * 0.3);
  const peak = start + 0.1;
  const end = peak + 0.1;

  const opacity = useTransform(progress, [start - 0.05, start, peak, end, end + 0.05], [0, 1, 1, 0, 0]);
  const y = useTransform(progress, [start - 0.05, start, peak, end, end + 0.05], [100, 0, 0, -100, -100]);
  const scale = useTransform(progress, [start - 0.05, start, peak, end, end + 0.05], [0.8, 1, 1, 1.1, 1.1]);
  const blur = useTransform(progress, [start - 0.05, start, peak, end, end + 0.05], [10, 0, 0, 10, 10]);

  return (
    <motion.div 
      style={{ opacity, y, scale, filter: blur }}
      className="absolute inset-0 flex items-center justify-center px-6 pointer-events-none"
    >
      <div className="max-w-5xl w-full">
        {children}
      </div>
    </motion.div>
  );
}

export default function ScrollyTextBlocks({ progress }: { progress: MotionValue<number> }) {
  return (
    <div className="sticky top-0 w-full h-screen overflow-hidden z-10 pointer-events-none">
      
      {/* Frame 1: AI & Engineering */}
      <TextBlock index={0} progress={progress}>
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-[3rem] blur opacity-20" />
          <div className="relative bg-black/40 backdrop-blur-xl border border-white/10 p-12 md:p-20 rounded-[3rem] shadow-2xl overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-20">
              <Cpu className="w-32 h-32 text-emerald-400" />
            </div>
            <div className="flex items-center gap-4 mb-6">
              <span className="px-4 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-sm font-mono tracking-widest uppercase flex items-center gap-2">
                <Sparkles className="w-4 h-4" /> System: Neural
              </span>
            </div>
            <h2 className="text-5xl md:text-7xl font-extrabold text-white mb-8 tracking-tight">
              Intelligence <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Architected.</span>
            </h2>
            <p className="text-xl md:text-2xl text-zinc-400 font-light max-w-2xl leading-relaxed">
              Designing scalable AI ecosystems and neural architectures that transition businesses into the autonomous era.
            </p>
          </div>
        </div>
      </TextBlock>

      {/* Frame 2: Automation & IoT */}
      <TextBlock index={1} progress={progress}>
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-[3rem] blur opacity-20" />
          <div className="relative bg-black/40 backdrop-blur-xl border border-white/10 p-12 md:p-20 rounded-[3rem] shadow-2xl overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-20">
              <Terminal className="w-32 h-32 text-blue-400" />
            </div>
            <div className="flex items-center gap-4 mb-6">
              <span className="px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 text-sm font-mono tracking-widest uppercase flex items-center gap-2">
                <Code2 className="w-4 h-4" /> Protocol: Automate
              </span>
            </div>
            <h2 className="text-5xl md:text-7xl font-extrabold text-white mb-8 tracking-tight">
              Operational <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Supremacy.</span>
            </h2>
            <p className="text-xl md:text-2xl text-zinc-400 font-light max-w-2xl leading-relaxed">
              From IoT robotics to massive enterprise pipelines—eliminating friction through ruthless, intelligent automation.
            </p>
          </div>
        </div>
      </TextBlock>

      {/* Frame 3: The Founder / Agency */}
      <TextBlock index={2} progress={progress}>
        <div className="relative group pointer-events-auto">
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-[3rem] blur opacity-20" />
          <div className="relative bg-black/40 backdrop-blur-xl border border-white/10 p-12 md:p-20 rounded-[3rem] shadow-2xl overflow-hidden text-center flex flex-col items-center">
            <h2 className="text-5xl md:text-7xl font-extrabold text-white mb-8 tracking-tight">
              Ready to <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Transcend?</span>
            </h2>
            <p className="text-xl md:text-2xl text-zinc-400 font-light max-w-2xl leading-relaxed mb-12">
              Join Tech Magnitude. Let's build the infrastructure of tomorrow, today.
            </p>
            <a 
              href="/contact" 
              className="group relative inline-flex items-center justify-center gap-3 px-10 py-5 bg-white text-black rounded-full font-bold text-lg overflow-hidden transition-transform hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-200 to-pink-200 opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="relative z-10">Initiate Sequence</span>
            </a>
          </div>
        </div>
      </TextBlock>

    </div>
  );
}
