'use client';

import { useRef } from "react";
import { useScroll } from "framer-motion";
import Hero3D from "@/components/Hero3D";
import PageLoader from "@/components/PageLoader";
import ScrollyCanvas from "@/components/ScrollyCanvas";
import ScrollyTextBlocks from "@/components/ScrollyTextBlocks";

import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Agency from "@/components/Agency";
import Founder from "@/components/Founder";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <main className="relative w-full overflow-x-hidden">
      <PageLoader />

      <div ref={containerRef} className="relative w-full">
        {/* The Fixed Canvas Background */}
        <ScrollyCanvas progress={scrollYProgress} />

        {/* 1. The Hero Content */}
        <div className="relative w-full h-[150vh]">
          <div className="sticky top-0 w-full min-h-screen flex flex-col justify-center pointer-events-none z-10">
            <div className="pointer-events-auto">
              <Hero3D />
            </div>
          </div>
        </div>

        {/* 2. Scrollytelling Text Blocks */}
        <ScrollyTextBlocks progress={scrollYProgress} />
      </div>

      {/* 3. The Full Page Content Array */}
      <div className="relative z-20 bg-[#050505] shadow-[0_-20px_50px_rgba(0,0,0,0.8)] border-t border-white/10">
        <Skills />
        <Projects />
        <Agency />
        <Founder />
        <Achievements />
        <Contact />
      </div>
    </main>
  );
}
