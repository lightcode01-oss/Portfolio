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
    "nexus-os": {
      title: "NEXUS OS — Autonomous AI Company Operating System",
      category: "AI & ML",
      description: "Designed and architected an enterprise-grade multi-agent AI operating system capable of managing autonomous AI employees, workflow execution, intelligent task delegation, memory systems, and real-world business automation pipelines.",
      tech: ["Python", "FastAPI", "Next.js", "AI Agents", "Supabase", "Docker"],
      github: "https://github.com/lightcode01-oss/AI---WORKPLACE",
      challenges: "Architecting a highly scalable multi-agent system where independent AI modules can communicate seamlessly without race conditions or memory leaks.",
      icon: <Cpu className="w-12 h-12 text-indigo-400" />
    },
    "ai-workflow-automation": {
      title: "AI Workflow Automation System",
      category: "Automation",
      description: "Built advanced AI automation workflows for client outreach, intelligent messaging, follow-ups, and operational automation using AI-driven response generation and multi-node execution systems.",
      tech: ["n8n", "LLMs", "AI Agents", "Workflows", "APIs"],
      github: "https://github.com/lightcode01-oss/AI-Workflow",
      challenges: "Handling rate limits, complex conditional logic, and state management across hundreds of concurrent webhook triggers and LLM processing chains.",
      icon: <Server className="w-12 h-12 text-violet-400" />
    },
    "food-delivery-ecosystem": {
      title: "AI-Powered Food Delivery Ecosystem",
      category: "Full Stack",
      description: "Developed a scalable food delivery ecosystem integrating AI meal recommendations, real-time order tracking, cloud kitchen workflows, contactless delivery systems, live chat support, and eco-friendly operational infrastructure.",
      tech: ["HTML", "CSS", "SCSS", "Java Script", "MongoDB", "Python"],
      github: "https://github.com/lightcode01-oss/food-delivery",
      challenges: "Maintaining sub-second latency for live order tracking using WebSockets while running computationally heavy AI recommendation algorithms in the background.",
      icon: <LayoutTemplate className="w-12 h-12 text-blue-400" />
    },
    "ai-saas-platform": {
      title: "AI SaaS Subscription & Access Control Platform",
      category: "Full Stack",
      description: "Created a secure SaaS infrastructure with subscription management, premium AI feature access control, payment integration, user authentication, and scalable permission-based system architecture.",
      tech: ["Next.js", "Firebase", "Authentication", "Payments", "Node.js"],
      github: "https://github.com/lightcode01-oss/AI-SaaS",
      challenges: "Ensuring 100% secure webhook processing for payment integration and building a flexible role-based access control (RBAC) system.",
      icon: <Cpu className="w-12 h-12 text-emerald-400" />
    },
    "edtech-automation": {
      title: "Educational Content Automation System",
      category: "Automation",
      description: "Developed AI-assisted educational systems for generating structured notes, previous-year questions, formula roadmaps, and academic resources focused on scalable learning workflows and exam preparation.",
      tech: ["Python", "OCR", "PDF Automation", "EdTech", "AI"],
      github: "https://github.com/lightcode01-oss/EdTech-Automation",
      challenges: "Designing robust OCR pipelines capable of reading complex mathematical formulas and poorly scanned PDFs with high accuracy.",
      icon: <Server className="w-12 h-12 text-orange-400" />
    },
    "ai-chatbot-monetization": {
      title: "AI Chatbot Platform with Monetization",
      category: "AI & ML",
      description: "Built a customizable AI chatbot platform with integrated payment systems, premium feature unlocking, user-based access control, and scalable monetization infrastructure for AI-powered applications.",
      tech: ["AI APIs", "Payment", "SaaS Logic", "Custom UI", "Next.js"],
      github: "https://github.com/lightcode01-oss/AI-Chatbot",
      challenges: "Managing conversational context length efficiently to minimize API token costs while maintaining high-quality responses.",
      icon: <LayoutTemplate className="w-12 h-12 text-rose-400" />
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
