"use client";

import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring, motion } from "framer-motion";
import { counterSpring } from "@/lib/animations";

interface AnimatedCounterProps {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  duration?: number;
  delay?: number;
  className?: string;
  once?: boolean;
}

export function AnimatedCounter({
  value,
  prefix = "",
  suffix = "",
  decimals = 0,
  duration = 1.5,
  delay = 0,
  className = "",
  once = true,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    ...counterSpring,
    duration: duration * 1000,
  });
  const isInView = useInView(ref, { once, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      const timeout = setTimeout(() => {
        motionValue.set(value);
      }, delay * 1000);
      return () => clearTimeout(timeout);
    }
  }, [isInView, value, motionValue, delay]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent =
          prefix + latest.toFixed(decimals) + suffix;
      }
    });
    return unsubscribe;
  }, [springValue, prefix, suffix, decimals]);

  return (
    <motion.span
      ref={ref}
      className={className}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.3, delay }}
    >
      {prefix}0{suffix}
    </motion.span>
  );
}

// Simpler version that just animates the number display
export function CountUp({
  value,
  prefix = "",
  suffix = "",
  className = "",
  delay = 0,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-20px" });
  const count = useMotionValue(0);
  const rounded = useSpring(count, { stiffness: 100, damping: 30 });

  useEffect(() => {
    if (isInView) {
      const timeout = setTimeout(() => {
        count.set(value);
      }, delay * 1000);
      return () => clearTimeout(timeout);
    }
  }, [isInView, value, count, delay]);

  useEffect(() => {
    const unsubscribe = rounded.on("change", (v) => {
      if (ref.current) {
        ref.current.textContent = prefix + Math.round(v) + suffix;
      }
    });
    return unsubscribe;
  }, [rounded, prefix, suffix]);

  return (
    <span ref={ref} className={className}>
      {prefix}0{suffix}
    </span>
  );
}
