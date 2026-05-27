'use client';

import { useEffect, useRef, useState } from 'react';
import { useTransform, MotionValue, useMotionValue, useSpring } from 'framer-motion';

const FRAME_COUNT = 192;
const currentFrame = (index: number) => `/sequence/frame_${index.toString().padStart(3, '0')}_delay-0.041s.png`;

export default function ScrollyCanvas({ progress }: { progress: MotionValue<number> }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  
  // Preload images
  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    for (let i = 0; i < FRAME_COUNT; i++) {
        const img = new Image();
        img.src = currentFrame(i);
        loadedImages.push(img);
    }
    setImages(loadedImages);
  }, []);

  const fallbackProgress = useMotionValue(0);
  const activeProgress = progress || fallbackProgress;
  const smoothProgress = useSpring(activeProgress, { stiffness: 50, damping: 20, mass: 1 });
  const frameIndex = useTransform(smoothProgress, [0, 1], [0, FRAME_COUNT - 1]);

  useEffect(() => {
    // Initial draw
    if (images.length > 0 && canvasRef.current) {
        const firstImg = images[0];
        if (firstImg.complete) {
            drawImage(0);
        } else {
            firstImg.onload = () => drawImage(0);
        }
    }
  }, [images]);

  useEffect(() => {
    const unsubscribe = frameIndex.on('change', (latest) => {
        drawImage(Math.round(latest));
    });
    return () => unsubscribe();
  }, [frameIndex, images]);

  const drawImage = (index: number) => {
    if (!canvasRef.current || !images[index] || !images[index].complete) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Fast resize without full layout thrash if possible, but required for canvas
    if (canvas.width !== window.innerWidth || canvas.height !== window.innerHeight) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    const img = images[index];
    
    // Calculate aspect ratio object-fit cover
    const canvasRatio = canvas.width / canvas.height;
    const imgRatio = img.width / img.height;

    let drawWidth = canvas.width;
    let drawHeight = canvas.height;
    let offsetX = 0;
    let offsetY = 0;

    if (canvasRatio > imgRatio) {
      // Canvas is wider than image (cropping top/bottom)
      drawHeight = canvas.width / imgRatio;
      offsetY = (canvas.height - drawHeight) / 2;
    } else {
      // Canvas is taller than image (cropping sides)
      drawWidth = canvas.height * imgRatio;
      offsetX = (canvas.width - drawWidth) / 2;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // Use good image smoothing
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';
    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
  };

  // Add resize listener
  useEffect(() => {
    const handleResize = () => {
        drawImage(Math.round(frameIndex.get()));
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [frameIndex, images]);

  return (
    <div className="fixed inset-0 w-full h-screen bg-black z-[-10] pointer-events-none">
      <canvas ref={canvasRef} className="w-full h-full object-cover" />
    </div>
  );
}
