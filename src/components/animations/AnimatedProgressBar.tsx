"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { progressTransition } from "@/lib/animations";

interface AnimatedProgressBarProps {
  value: number; // 0-100
  height?: number;
  colorScheme?: "accent" | "verify" | "ink" | "gradient";
  delay?: number;
  showLabel?: boolean;
  className?: string;
  animated?: boolean;
}

const colorMap = {
  accent: "bg-accent",
  verify: "bg-verify",
  ink: "bg-ink",
  gradient: "bg-gradient-to-r from-accent to-accent-light",
};

const bgMap = {
  accent: "bg-accent-muted",
  verify: "bg-verify-muted",
  ink: "bg-cloud",
  gradient: "bg-cloud",
};

export function AnimatedProgressBar({
  value,
  height = 8,
  colorScheme = "accent",
  delay = 0,
  showLabel = false,
  className = "",
  animated = true,
}: AnimatedProgressBarProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-20px" });
  const clampedValue = Math.min(100, Math.max(0, value));

  return (
    <div ref={ref} className={`relative ${className}`}>
      {showLabel && (
        <div className="flex justify-between mb-1">
          <span className="text-xs text-stone">Progress</span>
          <span className="text-xs font-mono font-medium text-ink">
            {clampedValue}%
          </span>
        </div>
      )}
      <div
        className={`w-full rounded-full overflow-hidden ${bgMap[colorScheme]}`}
        style={{ height }}
      >
        <motion.div
          className={`h-full rounded-full ${colorMap[colorScheme]}`}
          initial={{ width: 0 }}
          animate={isInView && animated ? { width: `${clampedValue}%` } : { width: 0 }}
          transition={{
            ...progressTransition,
            delay,
          }}
        />
      </div>
    </div>
  );
}

// Segmented progress bar for multi-step processes
export function SegmentedProgressBar({
  current,
  total,
  delay = 0,
  className = "",
}: {
  current: number;
  total: number;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-20px" });

  return (
    <div ref={ref} className={`flex gap-1.5 ${className}`}>
      {Array.from({ length: total }).map((_, i) => (
        <motion.div
          key={i}
          className={`h-1.5 flex-1 rounded-full ${
            i < current ? "bg-accent" : "bg-mist"
          }`}
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{
            duration: 0.4,
            delay: delay + i * 0.1,
            ease: [0.16, 1, 0.3, 1],
          }}
          style={{ originX: 0 }}
        />
      ))}
    </div>
  );
}
