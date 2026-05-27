'use client';

import { useEffect, useState, ReactNode } from "react";
import Lenis from "lenis";
import { usePathname } from "next/navigation";

export default function SmoothScroll({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [lenis, setLenis] = useState<Lenis | null>(null);

  useEffect(() => {
    const l = new Lenis({
       lerp: 0.1, duration: 1.2, smoothWheel: true
    });
    setLenis(l);

    function raf(time: number) {
      l.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      l.destroy();
    };
  }, []);

  useEffect(() => {
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    }
  }, [pathname, lenis]);

  return <>{children}</>;
}
