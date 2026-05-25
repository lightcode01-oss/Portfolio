'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Agency', path: '/agency' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-500',
        isScrolled ? 'py-3' : 'py-5'
      )}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        <div
          className={cn(
            'flex items-center justify-between rounded-full border transition-all duration-500',
            isScrolled
              ? 'bg-[#0a0a0a]/80 backdrop-blur-xl border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.5)] px-6 py-3'
              : 'bg-transparent border-transparent px-0 py-2'
          )}
        >
          {/* Logo */}
          <Link href="/" className="relative z-10 group flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-500 to-emerald-500 flex items-center justify-center group-hover:shadow-[0_0_15px_rgba(59,130,246,0.6)] transition-shadow">
              <span className="text-white font-bold text-sm">AD</span>
            </div>
            <span className="font-semibold text-lg tracking-tight text-white group-hover:text-zinc-400 transition-colors">
              ABHINAV DASH
              <p className="text-xs font-normal opacity-70 mt-1">TECH MAGNITUDE © 2026</p>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.path;
              return (
                <Link
                  key={link.name}
                  href={link.path}
                  className={cn(
                    'relative px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 group',
                    isActive ? 'text-white' : 'text-zinc-400 hover:text-white'
                  )}
                >
                  {isActive && (
                    <motion.div
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-white/10 rounded-full border border-white/5"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </Link>
              );
            })}
          </nav>

          {/* Contact CTA & Mobile Toggle */}
          <div className="flex items-center gap-4 z-10">
            <Link
              href="/contact"
              className="hidden sm:flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black text-sm font-semibold hover:bg-zinc-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:scale-105 active:scale-95"
            >
              Let's Talk
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-zinc-300 hover:text-white transition-colors"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden absolute top-full left-0 w-full px-6 pt-4 pb-6"
          >
            <div className="bg-[#0a0a0a]/95 backdrop-blur-2xl rounded-3xl border border-white/10 p-6 shadow-2xl flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    'text-lg font-medium py-3 border-b border-white/5',
                    pathname === link.path ? 'text-white' : 'text-zinc-400'
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-4 text-center py-4 rounded-full bg-white text-black font-semibold"
              >
                Let's Talk
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
