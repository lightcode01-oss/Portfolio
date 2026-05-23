'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function PageLoader() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Ultra-fast 1.2 second intro animation instead of waiting for heavy assets
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -50, filter: "blur(10px)", transition: { duration: 0.8, ease: "easeInOut" } }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#050505] overflow-hidden"
        >
          {/* Subtle Background Elements */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent opacity-50" />
          
          <div className="relative z-10 flex flex-col items-center">
            {/* Pulsing Scanner */}
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="relative w-32 h-32 flex items-center justify-center mb-8"
            >
              <div className="absolute inset-0 border border-emerald-500/30 rounded-full animate-ping opacity-20" />
              <div className="absolute inset-0 border-t-2 border-r-2 border-emerald-500 rounded-full animate-spin [animation-duration:1s]" />
              <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-emerald-500/50">
                <div className="w-8 h-8 bg-emerald-400 rounded-full animate-pulse shadow-[0_0_30px_rgba(52,211,153,0.8)]" />
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="flex flex-col items-center gap-3"
            >
              <p className="text-xs font-mono tracking-[0.4em] text-emerald-400 uppercase">
                Initializing System
              </p>
              <div className="w-48 h-[2px] bg-white/10 rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-gradient-to-r from-blue-500 via-emerald-500 to-teal-400"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ ease: "easeInOut", duration: 1 }}
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
