'use client';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <footer className="w-full py-32 bg-[#050505] px-6 sm:px-12 text-white z-20 relative border-t border-white/5 overflow-hidden flex flex-col items-center text-center">
      {/* Dynamic Background Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent opacity-50 pointer-events-none" />

      <div className="max-w-4xl w-full relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="h-px bg-white/20 w-12"></span>
            <span className="text-zinc-400 font-mono tracking-[0.2em] uppercase text-sm">Next Steps</span>
            <span className="h-px bg-white/20 w-12"></span>
          </div>
          
          <h2 className="text-5xl md:text-[5rem] font-extrabold tracking-tighter mb-8 leading-[1.1] text-balance">
            Let's build something <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-emerald-400 inline-block mt-2 drop-shadow-[0_0_30px_rgba(59,130,246,0.3)]">
              extraordinary.
            </span>
          </h2>

          <p className="text-zinc-400 text-lg sm:text-xl font-light max-w-2xl mx-auto mb-16 leading-relaxed text-balance">
            Whether you're looking for automation consulting, AI integrations, or full-scale web development—I'm open to interesting opportunities.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-6"
        >
          <a
            href="mailto:techmagnitude6@gmail.com"
            className="px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-zinc-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_40px_rgba(255,255,255,0.4)] hover:scale-105 active:scale-95 duration-300"
          >
            Email Me
          </a>
          <a
            href="https://linkedin.com/in/[placeholder]"
            target="_blank" rel="noreferrer"
            className="px-8 py-4 bg-[#0a0a0a] text-white font-semibold rounded-full border border-white/10 hover:bg-white/[0.05] transition-all hover:border-white/30 backdrop-blur-xl hover:scale-105 active:scale-95 duration-300"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/[placeholder]"
            target="_blank" rel="noreferrer"
            className="px-8 py-4 bg-[#0a0a0a] text-white font-semibold rounded-full border border-white/10 hover:bg-white/[0.05] transition-all hover:border-white/30 backdrop-blur-xl hover:scale-105 active:scale-95 duration-300 flex items-center gap-2"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
            GitHub
          </a>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-32 pt-8 border-t border-white/5 text-zinc-600 text-sm font-mono flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p>© {new Date().getFullYear()} Abhinav Dash. All Rights Reserved.</p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <p>📍 Bhubaneswar, Odisha, India.</p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
