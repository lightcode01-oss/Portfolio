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
            <span className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 text-emerald-500">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.052 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
            </span>
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
