"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { progressTransition } from "@/lib/animations";
import { CountUp } from "./AnimatedCounter";

interface AnimatedProgressRingProps {
  value: number; // 0-100
  size?: number;
  strokeWidth?: number;
  color?: string;
  trackColor?: string;
  delay?: number;
  showValue?: boolean;
  valueSuffix?: string;
  className?: string;
  animated?: boolean;
}

export function AnimatedProgressRing({
  value,
  size = 60,
  strokeWidth = 4,
  color = "var(--accent)",
  trackColor = "var(--mist)",
  delay = 0,
  showValue = true,
  valueSuffix = "%",
  className = "",
  animated = true,
}: AnimatedProgressRingProps) {
  const ref = useRef<SVGSVGElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-20px" });

  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const clampedValue = Math.min(100, Math.max(0, value));

  return (
    <div className={`relative inline-flex items-center justify-center ${className}`}>
      <svg
        ref={ref}
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className="-rotate-90"
      >
        {/* Track */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={trackColor}
          strokeWidth={strokeWidth}
        />
        {/* Progress */}
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={
            isInView && animated
              ? { strokeDashoffset: circumference - (clampedValue / 100) * circumference }
              : { strokeDashoffset: circumference }
          }
          transition={{
            ...progressTransition,
            delay,
          }}
        />
      </svg>
      {showValue && (
        <div className="absolute inset-0 flex items-center justify-center">
          <CountUp
            value={clampedValue}
            suffix={valueSuffix}
            delay={delay}
            className="font-mono text-sm font-bold text-ink"
          />
        </div>
      )}
    </div>
  );
}

// Smaller inline version for candidate scores
export function ScoreRing({
  score,
  size = 40,
  className = "",
}: {
  score: number;
  size?: number;
  className?: string;
}) {
  const color = score >= 90 ? "var(--verify)" : score >= 80 ? "var(--accent)" : "var(--charcoal)";

  return (
    <AnimatedProgressRing
      value={score}
      size={size}
      strokeWidth={3}
      color={color}
      showValue
      valueSuffix="%"
      className={className}
    />
  );
}
