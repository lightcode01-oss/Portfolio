import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import ParticleBackground from "@/components/ParticleBackground";
import Contact from "@/components/Contact";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Abhinav Dash | Founder & AI Engineer",
  description: "Portfolio of Abhinav Dash - Founder of Tech Magnitude, AI Engineer & Automation Specialist turning ideas into scalable systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${jakarta.variable} antialiased font-sans bg-[#050505]`}
      suppressHydrationWarning
    >
      <body className="flex flex-col text-white selection:bg-white/20 relative" suppressHydrationWarning>
        <ParticleBackground />
        <SmoothScroll>
          <Navbar />
          <main className="relative z-10 flex-1">
            {children}
          </main>
          <Contact />
        </SmoothScroll>
      </body>
    </html>
  );
}
