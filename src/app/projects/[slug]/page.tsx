'use client';
import { use } from 'react';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, LayoutTemplate, Server, Cpu } from 'lucide-react';

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
);

export default function ProjectDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  // Mock data mapping based on slug
  const projectData = {
    "ai-workspace": {
      title: "AI Workspace",
      category: "AI & ML",
      description: "A specialized TypeScript workplace focused on AI algorithm implementation, intelligent workflows, and system integration. Built to automate manual processes and optimize large scale data sets.",
      tech: ["TypeScript", "Next.js", "AI Pipelines", "Node.js"],
      github: "https://github.com/lightcode01-oss/AI---WORKPLACE",
      challenges: "Implementing asynchronous AI workflows that don't block the main thread while maintaining high throughput and real-time frontend updates.",
      icon: <Cpu className="w-12 h-12 text-indigo-400" />
    },
    "gdg-hackathon": {
      title: "GDG Hackathon Core",
      category: "Full Stack",
      description: "Developed a high-impact solution during the GDG Hackathon focusing on real-world scalability and modern UI/UX design. Integrated multiple third-party APIs.",
      tech: ["JavaScript", "React", "Express", "Tailwind CSS"],
      github: "https://github.com/lightcode01-oss/GDG_HACKATHON",
      challenges: "Rapid prototyping within a 48-hour time constraint while ensuring the application remained completely mobile responsive and secure.",
      icon: <LayoutTemplate className="w-12 h-12 text-blue-400" />
    },
    "esp-32-project": {
      title: "ESP-32 Automata",
      category: "Automation",
      description: "Hardware integration project using ESP-32 for real-time automation, smart control systems, and IoT communication protocols over local Wi-Fi networks.",
      tech: ["C++", "ESP-32", "IoT", "Sockets"],
      github: "https://github.com/lightcode01-oss/ESP-32-Project",
      challenges: "Managing memory constraints on the ESP-32 chip and ensuring reliable WebSocket connections in unstable network environments.",
      icon: <Server className="w-12 h-12 text-emerald-400" />
    },
    "dsa-vault": {
      title: "Optimized DSA Vault",
      category: "Core Tech",
      description: "Comprehensive Data Structures and Algorithms repositories implementing optimized core concepts in C++ and Java. Focused on time and space complexity efficiency.",
      tech: ["C++", "Java", "Algorithms", "Optimization"],
      github: "https://github.com/lightcode01-oss/CPP-C-DSA",
      challenges: "Writing clean, extremely efficient implementations of complex graph and tree traversal algorithms while maintaining high readability.",
      icon: <Cpu className="w-12 h-12 text-orange-400" />
    }
  }[slug] || {
    title: "Project Not Found",
    category: "Unknown",
    description: "The requested project details could not be found.",
    tech: [],
    github: "/",
    challenges: "N/A",
    icon: null
  };

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 sm:px-12 max-w-5xl mx-auto">
      <Link href="/projects" className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors mb-12">
        <ArrowLeft className="w-5 h-5" />
        Back to Projects
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex items-center gap-6 mb-8">
          <div className="p-4 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-md">
            {projectData.icon}
          </div>
          <div>
            <span className="text-sm font-mono text-zinc-500 uppercase tracking-widest">{projectData.category}</span>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter text-white mt-2">
              {projectData.title}
            </h1>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-4 mb-16 pb-12 border-b border-white/10">
          <a 
            href={projectData.github} 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-8 py-4 bg-white text-black hover:bg-zinc-200 rounded-full font-semibold transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)]"
          >
            <GithubIcon />
            View Source on GitHub
          </a>
          <span className="px-6 py-4 bg-blue-500/10 text-blue-400 rounded-full font-semibold border border-blue-500/20">
            Live Deployment: Pending
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          <div className="md:col-span-2 space-y-12">
            <section>
              <h2 className="text-2xl font-bold text-white mb-6">Overview</h2>
              <p className="text-zinc-400 text-lg leading-relaxed">{projectData.description}</p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold text-white mb-6">Challenges Overcome</h2>
              <p className="text-zinc-400 text-lg leading-relaxed">{projectData.challenges}</p>
            </section>
          </div>

          <div>
            <div className="p-8 bg-white/[0.02] border border-white/5 rounded-3xl sticky top-32">
              <h3 className="text-xl font-bold text-white mb-6">Tech Stack</h3>
              <div className="flex flex-col gap-3">
                {projectData.tech.map(t => (
                  <span key={t} className="px-5 py-3 bg-white/5 border border-white/10 rounded-xl text-zinc-300 font-medium">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
