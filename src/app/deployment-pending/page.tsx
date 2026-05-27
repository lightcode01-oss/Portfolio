'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function DeploymentPending() {
  return (
    <div className="min-h-screen bg-[#050505] flex items-center justify-center px-6 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-2xl w-full bg-[#0a0a0a] border border-white/10 rounded-[3rem] p-12 md:p-20 text-center shadow-[0_0_100px_rgba(59,130,246,0.1)] backdrop-blur-xl"
      >
        <div className="absolute inset-0 bg-grid-white opacity-[0.02] pointer-events-none" />
        
        {/* Animated Gears/Spinner */}
        <div className="relative w-32 h-32 mx-auto mb-10 flex items-center justify-center">
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 border-4 border-dashed border-blue-500/30 rounded-full"
          />
          <motion.div 
            animate={{ rotate: -360 }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            className="absolute inset-4 border-4 border-dashed border-purple-500/30 rounded-full"
          />
          <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full shadow-[0_0_30px_rgba(96,165,250,0.5)] flex items-center justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v4"></path><path d="M12 18v4"></path><path d="M4.93 4.93l2.83 2.83"></path><path d="M16.24 16.24l2.83 2.83"></path><path d="M2 12h4"></path><path d="M18 12h4"></path><path d="M4.93 19.07l2.83-2.83"></path><path d="M16.24 7.76l2.83-2.83"></path></svg>
          </div>
        </div>

        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6">
          Deployment Pending
        </h1>
        <p className="text-lg text-zinc-400 leading-relaxed mb-12 text-balance">
          This project's live environment is currently being configured or is undergoing maintenance. The source code is available, and the deployment will be live shortly.
        </p>

        <Link 
          href="/#projects" 
          className="inline-flex items-center justify-center px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-zinc-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_40px_rgba(255,255,255,0.4)] hover:scale-105 active:scale-95 duration-300"
        >
          Return to Portfolio
        </Link>
      </motion.div>
    </div>
  );
}
