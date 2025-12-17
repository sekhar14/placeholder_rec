"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";

export function GrowthReportVisual() {
  const strengths = [
    "React architecture exceeded benchmark (94th percentile)",
    "Strong TypeScript patterns and type safety",
    "Clear communication in problem explanation",
  ];

  const gaps = [
    "System design lacked scalability considerations",
    "Performance optimization could be stronger",
  ];

  const recommendations = [
    { title: "System Design Fundamentals", type: "Course", icon: "book" },
    { title: "Web Performance Patterns", type: "Article", icon: "file" },
    { title: "Mock System Design Practice", type: "Exercise", icon: "code" },
  ];

  const icons: Record<string, ReactNode> = {
    book: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--ink)" strokeWidth="1.5">
        <path d="M4 19.5A2.5 2.5 0 016.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />
      </svg>
    ),
    file: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--ink)" strokeWidth="1.5">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
        <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
      </svg>
    ),
    code: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--ink)" strokeWidth="1.5">
        <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
      </svg>
    ),
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative"
    >
      {/* Report Card */}
      <div className="rounded-xl bg-white border border-mist overflow-hidden shadow-sm">
        {/* Report Header */}
        <div className="px-5 py-4 bg-cloud border-b border-mist">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-accent-muted flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="var(--accent)">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                </svg>
              </div>
              <div>
                <h4 className="font-display text-lg text-ink">Growth Report</h4>
                <p className="text-xs text-ash">Senior Frontend Role</p>
              </div>
            </div>
            <span className="caption text-ash">Dec 2025</span>
          </div>
        </div>

        {/* Report Content */}
        <div className="p-5 space-y-4">
          {/* Strengths Section */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="w-5 h-5 rounded-full bg-verify-muted flex items-center justify-center">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="var(--verify)" strokeWidth="3">
                  <path d="M5 12l5 5L20 7" />
                </svg>
              </span>
              <span className="text-sm font-medium text-verify">Strengths</span>
            </div>
            <div className="space-y-1.5 pl-7">
              {strengths.map((strength, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.08 }}
                  className="flex items-start gap-2"
                >
                  <span className="text-verify mt-0.5 text-sm">+</span>
                  <p className="text-sm text-charcoal">{strength}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Divider */}
          <div className="h-px bg-mist" />

          {/* Growth Areas Section */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="w-5 h-5 rounded-full bg-accent-muted flex items-center justify-center">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2">
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </span>
              <span className="text-sm font-medium text-accent">Growth Areas</span>
            </div>
            <div className="space-y-1.5 pl-7">
              {gaps.map((gap, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 + i * 0.08 }}
                  className="flex items-start gap-2"
                >
                  <span className="text-accent mt-0.5 text-sm">*</span>
                  <p className="text-sm text-charcoal">{gap}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Divider */}
          <div className="h-px bg-mist" />

          {/* Recommendations Section */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.75 }}
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="w-5 h-5 rounded-full bg-ink flex items-center justify-center">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
              <span className="text-sm font-medium text-ink">Next Steps</span>
            </div>
            <div className="space-y-2 pl-7">
              {recommendations.map((rec, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.85 + i * 0.08 }}
                  className="flex items-center gap-2.5 p-2 rounded-lg bg-cloud hover:bg-mist transition-colors cursor-pointer group"
                >
                  <div className="w-7 h-7 rounded bg-white border border-mist flex items-center justify-center">
                    {icons[rec.icon]}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-ink font-medium group-hover:text-accent transition-colors truncate">
                      {rec.title}
                    </p>
                    <p className="text-xs text-ash">{rec.type}</p>
                  </div>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="var(--ash)"
                    strokeWidth="2"
                    className="opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Report Footer */}
        <div className="px-5 py-3 bg-cloud border-t border-mist">
          <p className="text-xs text-ash text-center">
            This report is yours to keep. <span className="text-accent">Use it to grow.</span>
          </p>
        </div>
      </div>

      {/* Decorative Badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotate: -12 }}
        whileInView={{ opacity: 1, scale: 1, rotate: -6 }}
        viewport={{ once: true }}
        transition={{ delay: 1, type: "spring" }}
        className="absolute -top-2 -right-2 px-3 py-1.5 bg-ink text-white rounded-full text-xs font-medium shadow-lg"
      >
        Always Yours
      </motion.div>
    </motion.div>
  );
}
