import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import ParticleBackground from "@/components/ParticleBackground";

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
      className={`${jakarta.variable} h-full antialiased font-sans`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-[#050505] text-white selection:bg-white/20 relative" suppressHydrationWarning>
        <ParticleBackground />
        <SmoothScroll>
          <Navbar />
          <main className="relative z-10 flex-1">
            {children}
          </main>
        </SmoothScroll>
      </body>
    </html>
  );
}
