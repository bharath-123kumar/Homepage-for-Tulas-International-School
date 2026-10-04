import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // Smooth springs for cursor outer ring
  const cursorX = useSpring(0, { stiffness: 400, damping: 28 });
  const cursorY = useSpring(0, { stiffness: 400, damping: 28 });
  
  // Exact dot spring for immediate feedback
  const dotX = useSpring(0, { stiffness: 1000, damping: 50 });
  const dotY = useSpring(0, { stiffness: 1000, damping: 50 });

  useEffect(() => {
    // Check if touch device or screen width < 1024px
    const checkTouch = () => {
      const isMobile = window.innerWidth < 1024 || 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      setIsTouchDevice(isMobile);
    };

    checkTouch();
    window.addEventListener('resize', checkTouch);

    const onMouseMove = (e) => {
      if (isTouchDevice) return;
      if (!isVisible) setIsVisible(true);

      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      dotX.set(e.clientX);
      dotY.set(e.clientY);

      // Check if target or parent is interactive
      const target = e.target;
      const isInteractive = Boolean(
        target.closest('a, button, input, textarea, select, [role="button"], .interactive-hover')
      );
      setIsHovered(isInteractive);
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    return () => {
      window.removeEventListener('resize', checkTouch);
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
    };
  }, [cursorX, cursorY, dotX, dotY, isTouchDevice, isVisible]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <>
      {/* Central Precision Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-gold-400 rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 shadow-[0_0_8px_rgba(212,175,55,0.8)]"
        style={{
          x: dotX,
          y: dotY,
        }}
      />

      {/* Smooth Following Ring */}
      <motion.div
        className={`fixed top-0 left-0 rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 transition-colors duration-200 border ${
          isHovered
            ? 'w-12 h-12 border-gold-400 bg-gold-400/15 backdrop-blur-[1px]'
            : 'w-7 h-7 border-slate-300/40 bg-transparent'
        }`}
        style={{
          x: cursorX,
          y: cursorY,
        }}
        animate={{
          scale: isHovered ? 1.25 : 1,
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      />
    </>
  );
}
