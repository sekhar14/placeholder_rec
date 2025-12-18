"use client";

import { motion, AnimatePresence } from "framer-motion";

type Status = "applied" | "screening" | "interview" | "offer" | "rejected";

interface StatusBadgeProps {
  status: Status;
  animate?: boolean;
  size?: "sm" | "md" | "lg";
  showIcon?: boolean;
}

const statusConfig: Record<
  Status,
  { label: string; color: string; bg: string; icon: React.ReactNode }
> = {
  applied: {
    label: "Applied",
    color: "text-charcoal",
    bg: "bg-cloud",
    icon: (
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
        <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
      </svg>
    ),
  },
  screening: {
    label: "Screening",
    color: "text-sky-600",
    bg: "bg-sky-50",
    icon: (
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4" />
      </svg>
    ),
  },
  interview: {
    label: "Interview",
    color: "text-violet-600",
    bg: "bg-violet-50",
    icon: (
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
  },
  offer: {
    label: "Offer",
    color: "text-verify",
    bg: "bg-verify-muted",
    icon: (
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
        <path d="M22 4L12 14.01l-3-3" />
      </svg>
    ),
  },
  rejected: {
    label: "Rejected",
    color: "text-red-600",
    bg: "bg-red-50",
    icon: (
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <line x1="15" y1="9" x2="9" y2="15" />
        <line x1="9" y1="9" x2="15" y2="15" />
      </svg>
    ),
  },
};

const sizeClasses = {
  sm: "text-[10px] px-2 py-0.5 gap-1",
  md: "text-xs px-2.5 py-1 gap-1.5",
  lg: "text-sm px-3 py-1.5 gap-2",
};

export function StatusBadge({
  status,
  animate = true,
  size = "md",
  showIcon = true,
}: StatusBadgeProps) {
  const config = statusConfig[status];

  return (
    <AnimatePresence mode="wait">
      <motion.span
        key={status}
        initial={animate ? { scale: 0.8, opacity: 0 } : false}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
        className={`inline-flex items-center font-medium rounded-full ${config.bg} ${config.color} ${sizeClasses[size]}`}
      >
        {showIcon && config.icon}
        {config.label}
      </motion.span>
    </AnimatePresence>
  );
}

// Animated status transition showing all stages
export function StatusTransition({
  currentIndex,
  delay = 0,
}: {
  currentIndex: number;
  delay?: number;
}) {
  const stages: Status[] = ["applied", "screening", "interview", "offer"];

  return (
    <div className="flex items-center gap-1">
      {stages.map((stage, i) => (
        <motion.div
          key={stage}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: i <= currentIndex ? 1 : 0.3,
            scale: i === currentIndex ? 1.1 : 1,
          }}
          transition={{ delay: delay + i * 0.15, duration: 0.3 }}
        >
          <StatusBadge
            status={stage}
            animate={false}
            size="sm"
            showIcon={i === currentIndex}
          />
        </motion.div>
      ))}
    </div>
  );
}
