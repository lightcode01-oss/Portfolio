'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function ContactPage() {
  const [subject, setSubject] = useState('AI Automation');
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const subjects = ["AI Automation", "Full Stack Project", "Consulting", "General Inquiry"];

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("Sending....");
    
    const formData = new FormData(event.currentTarget);
    formData.append("access_key", "c5cc294f-5e2f-4b47-b132-88eba05de331");
    formData.append("subject", subject);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Message Sent Successfully!");
        (event.target as HTMLFormElement).reset();
      } else {
        setResult(data.message);
      }
    } catch (error) {
      setResult("Something went wrong. Please try again later.");
    }
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 sm:px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
      {/* Left Column: Copy */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col justify-center"
      >
        <div className="flex items-center gap-4 mb-8">
          <span className="h-px bg-white/20 w-12 sm:w-24"></span>
          <span className="text-emerald-400 font-mono tracking-[0.2em] uppercase text-sm">Next Steps</span>
        </div>
        <h1 className="text-5xl md:text-[5.5rem] font-extrabold tracking-tighter text-white leading-[1.1] mb-8 text-balance">
          Let's build something <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400 drop-shadow-[0_0_30px_rgba(52,211,153,0.3)]">extraordinary.</span>
        </h1>
        <p className="text-xl text-zinc-400 font-light leading-relaxed max-w-lg mb-12">
          Whether you're looking for automation consulting, custom AI integrations, or full-scale web architecture—I'm ready to help you scale.
        </p>

        <div className="space-y-6 text-zinc-300 font-mono text-sm">
          <p className="flex items-center gap-4">
            <span className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10">📧</span>
            techmagnitude6@gmail.com
          </p>
          <p className="flex items-center gap-4">
            <span className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 text-lg">📞</span>
            +91 9583346242
          </p>
          <p className="flex items-center gap-4">
            <span className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10">📍</span>
            Bhubaneswar, Odisha, India
          </p>
        </div>
      </motion.div>

      {/* Right Column: Form */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="bg-white/[0.02] border border-white/5 rounded-[3rem] p-8 md:p-12 backdrop-blur-xl relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-full h-1/2 bg-gradient-to-b from-blue-500/5 to-transparent pointer-events-none" />
        
        <form className="relative z-10 space-y-8" onSubmit={onSubmit}>
          <input type="hidden" name="apikey" value="c5cc294f-5e2f-4b47-b132-88eba05de331" />
          <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <label className="text-sm font-medium text-zinc-400">First Name</label>
              <input type="text" name="first_name" required className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="John" />
            </div>
            <div className="space-y-3">
              <label className="text-sm font-medium text-zinc-400">Last Name</label>
              <input type="text" name="last_name" required className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="Doe" />
            </div>
          </div>

          <div className="space-y-3">
            <label className="text-sm font-medium text-zinc-400">Email Address</label>
            <input type="email" name="email" required className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="john@company.com" />
          </div>

          <div className="space-y-4">
            <label className="text-sm font-medium text-zinc-400">What are you looking for?</label>
            <div className="flex flex-wrap gap-3">
              {subjects.map(s => (
                <button 
                  key={s}
                  type="button"
                  onClick={() => setSubject(s)}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${subject === s ? 'bg-blue-500/20 border-blue-500/50 text-blue-300 border' : 'bg-[#0a0a0a] border border-white/10 text-zinc-400 hover:border-white/30'}`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <label className="text-sm font-medium text-zinc-400">Project Details</label>
            <textarea name="message" required rows={4} className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-blue-500 transition-colors resize-none" placeholder="Tell me about your workflow bottlenecks..." />
          </div>

          <button 
            type="submit" 
            disabled={isSubmitting}
            className={`w-full py-5 rounded-xl font-bold text-lg transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_40px_rgba(255,255,255,0.4)] ${isSubmitting ? 'bg-zinc-500 text-zinc-300 cursor-not-allowed' : 'bg-white text-black hover:bg-zinc-200'}`}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>

          {result && (
            <p className={`text-center mt-4 text-sm font-medium ${result.includes("Success") ? "text-emerald-400" : "text-zinc-400"}`}>
              {result}
            </p>
          )}
        </form>
      </motion.div>
    </div>
  );
}
