import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-amber-400 via-gold-500 to-amber-300 z-[100] origin-left shadow-[0_0_10px_rgba(212,175,55,0.8)]"
      style={{ scaleX }}
      aria-hidden="true"
    />
  );
}
