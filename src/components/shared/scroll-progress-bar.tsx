"use client";

import React from "react";
import { motion, useScroll, useSpring, useReducedMotion } from "framer-motion";
import { useMounted } from "@/lib/use-mounted";

export function ScrollProgressBar() {
  const mounted = useMounted();
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  if (!mounted || shouldReduceMotion) {
    return null;
  }

  return (
    <motion.div
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-500 z-[100] origin-left pointer-events-none"
      style={{ scaleX }}
    />
  );
}
