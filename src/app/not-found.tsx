'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center bg-[#050505] overflow-hidden relative">
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40vw] h-[40vw] bg-emerald-500/10 blur-[120px] rounded-full" />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 space-y-8"
      >
        <h1 className="text-[12rem] font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-900 leading-none tracking-tighter select-none">
          404
        </h1>
        <h2 className="text-3xl md:text-4xl font-bold text-white">System Anomaly Detected</h2>
        <p className="text-xl text-zinc-400 max-w-lg mx-auto">
          The page or project you are looking for has either been moved, deleted, or never existed in this timeline.
        </p>

        <div className="pt-8">
          <Link 
            href="/"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-black font-semibold hover:bg-zinc-200 transition-all shadow-[0_0_30px_rgba(255,255,255,0.15)] hover:shadow-[0_0_50px_rgba(255,255,255,0.3)]"
          >
            <ArrowLeft className="w-5 h-5" />
            Return to Core
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
