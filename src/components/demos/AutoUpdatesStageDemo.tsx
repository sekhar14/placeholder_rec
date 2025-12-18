"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { EmailTimeline, StatusTransition } from "@/components/mockups";
import { CountUp } from "@/components/animations";

const updates = [
  { status: "received" as const, timestamp: "Just now" },
  { status: "reviewing" as const, timestamp: "2 days ago" },
  { status: "interview" as const, timestamp: "5 days ago" },
];

export function AutoUpdatesStageDemo() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const [statusIndex, setStatusIndex] = useState(0);
  const [showZeroGhosted, setShowZeroGhosted] = useState(false);

  useEffect(() => {
    if (!isInView) return;

    // Animate through status transitions
    const statusTimer = setInterval(() => {
      setStatusIndex((prev) => (prev + 1) % 4);
    }, 2000);

    // Show zero ghosted badge
    const ghostedTimer = setTimeout(() => {
      setShowZeroGhosted(true);
    }, 1500);

    return () => {
      clearInterval(statusTimer);
      clearTimeout(ghostedTimer);
    };
  }, [isInView]);

  return (
    <div ref={ref} className="space-y-6">
      {/* Hero Stat */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        className="text-center py-6 bg-gradient-to-br from-verify-muted to-white rounded-2xl border border-verify/20"
      >
        <motion.div
          animate={showZeroGhosted ? { scale: [1, 1.05, 1] } : {}}
          transition={{ duration: 0.5 }}
        >
          <p className="font-mono text-5xl font-bold text-verify mb-2">
            <CountUp value={0} delay={0.5} />
          </p>
          <p className="text-lg font-medium text-ink">Ghosted Candidates</p>
          <p className="text-sm text-stone mt-1">Every applicant gets a response</p>
        </motion.div>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Email Timeline */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-2xl border border-mist p-5"
        >
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-lg bg-accent-muted flex items-center justify-center">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--accent)"
                strokeWidth="2"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-medium text-ink">Auto Notifications</p>
              <p className="text-xs text-ash">Sent automatically at each stage</p>
            </div>
          </div>

          <EmailTimeline updates={updates} delay={0.5} />
        </motion.div>

        {/* Status Transition Demo */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-2xl border border-mist p-5"
        >
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-lg bg-cloud flex items-center justify-center">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--charcoal)"
                strokeWidth="2"
              >
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                <path d="M22 4L12 14.01l-3-3" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-medium text-ink">Status Journey</p>
              <p className="text-xs text-ash">Candidates see their progress</p>
            </div>
          </div>

          {/* Candidate View Simulation */}
          <div className="bg-cloud/50 rounded-xl p-4">
            <div className="flex items-center gap-3 mb-4 pb-3 border-b border-mist">
              <div className="w-10 h-10 rounded-full bg-white border border-mist flex items-center justify-center text-sm font-medium text-charcoal">
                JD
              </div>
              <div>
                <p className="text-sm font-medium text-ink">John Doe</p>
                <p className="text-xs text-ash">Sr. Frontend Developer</p>
              </div>
            </div>

            {/* Status badges */}
            <div className="mb-4">
              <p className="text-xs text-stone mb-2">Current Status:</p>
              <StatusTransition currentIndex={statusIndex} delay={0} />
            </div>

            {/* Progress bar */}
            <div className="space-y-1">
              <div className="flex justify-between text-xs text-ash">
                <span>Application Progress</span>
                <span>{Math.round((statusIndex + 1) / 4 * 100)}%</span>
              </div>
              <div className="h-2 bg-mist rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-accent rounded-full"
                  animate={{ width: `${(statusIndex + 1) / 4 * 100}%` }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Stats Row */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.6 }}
        className="grid grid-cols-3 gap-4"
      >
        {[
          { value: 100, suffix: "%", label: "Response rate", color: "text-verify" },
          { value: 24, suffix: "h", label: "Avg. response time", color: "text-ink" },
          { value: 4.8, suffix: "", label: "Candidate rating", color: "text-accent", decimals: 1 },
        ].map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.7 + i * 0.1 }}
            className="bg-white rounded-xl border border-mist p-4 text-center"
          >
            <p className={`font-mono text-2xl font-bold ${stat.color}`}>
              <CountUp value={stat.value} suffix={stat.suffix} delay={0.8 + i * 0.1} />
            </p>
            <p className="text-xs text-ash mt-1">{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Brand Builder Message */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 0.9 }}
        className="flex items-center justify-center gap-3 px-5 py-3 rounded-full bg-cloud border border-mist mx-auto w-fit"
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="var(--verify)"
          strokeWidth="2"
        >
          <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
        </svg>
        <span className="text-sm text-charcoal">
          Build your employer brand through <span className="font-medium text-ink">respectful communication</span>
        </span>
      </motion.div>
    </div>
  );
}
