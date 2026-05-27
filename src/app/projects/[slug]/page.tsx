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

  const projectData = {
    "ai-workspace": {
      title: "AI Workspace",
      category: "AI & ML",
      description:
        "Developed an AI-focused workspace designed for workflow automation, intelligent system integration, scalable backend operations, and AI-driven process execution using modern TypeScript architecture.",
      tech: ["TypeScript", "Next.js", "Node.js", "AI Workflows", "Automation"],
      github: "https://github.com/lightcode01-oss/AI---WORKPLACE",
      challenges:
        "Building scalable AI workflow systems capable of handling asynchronous task execution, real-time processing, and modular backend communication without impacting application performance.",
      icon: <Cpu className="w-12 h-12 text-indigo-400" />
    },

    "web3-event-management": {
      title: "CrowdChain Web3 Event Management",
      category: "Blockchain",
      description:
        "Built a decentralized Web3 event management platform integrating wallet authentication, blockchain-based event registration, smart contract interaction, digital ticket validation, and secure decentralized event operations.",
      tech: ["TypeScript", "Next.js", "Solidity", "Python", "Web3", "Smart Contracts"],
      github: "https://github.com/lightcode01-oss/CrowdChainWeb-3eventmanagement",
      challenges:
        "Managing secure blockchain wallet authentication, smart contract deployment, and reliable Web3 transaction handling across multiple decentralized workflows.",
      icon: <Server className="w-12 h-12 text-cyan-400" />
    },

    "automation-workflows": {
      title: "Automation Workflows",
      category: "Automation",
      description:
        "Built advanced workflow automation pipelines using n8n for API integrations, automated operations, intelligent execution flows, and scalable business automation systems.",
      tech: ["n8n", "APIs", "Workflow Automation", "AI Agents", "Integrations"],
      github: "https://github.com/lightcode01-oss/AI_Workflow",
      challenges:
        "Handling complex automation logic, webhook orchestration, API rate limitations, and scalable workflow execution across multiple integrated systems.",
      icon: <Server className="w-12 h-12 text-violet-400" />
    },

    "food-delivery-platform": {
      title: "Food Delivery Platform",
      category: "Full Stack",
      description:
        "Developed a modern food delivery platform featuring responsive frontend architecture, scalable backend integration, real-time operational workflows, and optimized user experience systems.",
      tech: ["HTML", "CSS", "SCSS", "JavaScript", "Python"],
      github: "https://github.com/lightcode01-oss/foods-delivery",
      challenges:
        "Building responsive real-time frontend systems while maintaining optimized backend communication and scalable operational workflows for delivery management.",
      icon: <LayoutTemplate className="w-12 h-12 text-blue-400" />
    },

    "gdg-hackathon-project": {
      title: "GDG Hackathon Project",
      category: "Full Stack",
      description:
        "Built a scalable hackathon solution focused on modern UI/UX, frontend responsiveness, real-world functionality, and efficient API integration under rapid development timelines.",
      tech: ["JavaScript", "React", "APIs", "Modern Web Technologies"],
      github: "https://github.com/lightcode01-oss/GDG_HACKATHON",
      challenges:
        "Developing and deploying a scalable full-stack solution within limited hackathon timelines while maintaining performance, responsiveness, and integration stability.",
      icon: <LayoutTemplate className="w-12 h-12 text-sky-400" />
    },

    "esp32-iot-automation": {
      title: "ESP-32 IoT Automation System",
      category: "IoT & Automation",
      description:
        "Created an ESP-32 based automation system for real-time device communication, IoT operations, wireless control systems, and smart hardware integration workflows.",
      tech: ["C++", "ESP-32", "IoT", "Hardware Automation", "Embedded Systems"],
      github: "https://github.com/lightcode01-oss/ESP-32-Project",
      challenges:
        "Optimizing hardware memory management, maintaining stable wireless communication, and ensuring reliable automation execution in constrained embedded environments.",
      icon: <Cpu className="w-12 h-12 text-emerald-400" />
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
