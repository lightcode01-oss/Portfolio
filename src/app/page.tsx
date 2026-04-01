import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Agency from "@/components/Agency";
import Founder from "@/components/Founder";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="bg-black min-h-screen text-white select-none selection:bg-white selection:text-black">
      <div className="relative">
        <ScrollyCanvas />
        <Overlay />
      </div>
      
      <Skills />
      <Projects />
      <Agency />
      <Founder />
      <Achievements />
      <Contact />
    </main>
  );
}
