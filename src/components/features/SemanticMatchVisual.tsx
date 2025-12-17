"use client";

import { motion } from "framer-motion";

export function SemanticMatchVisual() {
  const dimensions = [
    {
      dimension: "Technical Skills",
      score: 96,
      icon: "code",
      detail: "Python, React, System Design",
    },
    {
      dimension: "Culture Alignment",
      score: 91,
      icon: "heart",
      detail: "Values autonomy, quality-focused",
    },
    {
      dimension: "Salary Match",
      score: 88,
      icon: "dollar",
      detail: "Within budget range",
    },
    {
      dimension: "Growth Trajectory",
      score: 94,
      icon: "trending",
      detail: "Strong upward momentum",
    },
  ];

  const icons: Record<string, JSX.Element> = {
    code: (
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--ink)" strokeWidth="2">
        <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
      </svg>
    ),
    heart: (
      <svg width="12" height="12" viewBox="0 0 24 24" fill="var(--accent)" stroke="none">
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
      </svg>
    ),
    dollar: (
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--ink)" strokeWidth="2">
        <path d="M12 1v22M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
      </svg>
    ),
    trending: (
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--verify)" strokeWidth="2">
        <path d="M23 6l-9.5 9.5-5-5L1 18" />
        <path d="M17 6h6v6" />
      </svg>
    ),
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="space-y-4"
    >
      {/* Overall Match Header */}
      <div className="card-elevated p-5">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-ink flex items-center justify-center">
              <span className="text-white font-mono text-lg">#</span>
            </div>
            <div>
              <p className="caption text-ash">Match Analysis</p>
              <p className="font-display text-xl text-ink">Candidate 847</p>
            </div>
          </div>
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", delay: 0.3 }}
            className="text-right"
          >
            <span className="font-mono text-3xl text-verify font-bold">94%</span>
            <p className="text-xs text-stone">Overall Match</p>
          </motion.div>
        </div>

        {/* Multi-Dimensional Breakdown */}
        <div className="p-4 rounded-xl bg-cloud border border-mist">
          <p className="caption text-stone mb-3">Match Dimensions</p>

          <div className="space-y-3">
            {dimensions.map((item, i) => (
              <motion.div
                key={item.dimension}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + i * 0.1 }}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded bg-white flex items-center justify-center border border-mist">
                      {icons[item.icon]}
                    </div>
                    <span className="text-sm text-charcoal">{item.dimension}</span>
                  </div>
                  <span className="font-mono text-sm text-ink font-medium">{item.score}%</span>
                </div>

                <div className="h-1.5 bg-white rounded-full overflow-hidden border border-mist/50 ml-8">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.score}%` }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + i * 0.1, duration: 0.6, ease: "easeOut" }}
                    className={`h-full rounded-full ${item.score >= 90 ? "bg-verify" : "bg-ink"}`}
                  />
                </div>

                <p className="text-xs text-ash mt-1 ml-8">{item.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Semantic Connection Callout */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8 }}
        className="p-4 bg-accent-muted rounded-xl border border-accent/20"
      >
        <div className="flex items-center gap-2 mb-2">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2">
            <circle cx="12" cy="12" r="3" />
            <path d="M12 1v6M12 17v6M4.22 4.22l4.24 4.24M15.54 15.54l4.24 4.24M1 12h6M17 12h6M4.22 19.78l4.24-4.24M15.54 8.46l4.24-4.24" />
          </svg>
          <span className="text-sm font-medium text-accent">Beyond Keywords</span>
        </div>
        <p className="text-xs text-stone">
          Matched on <span className="text-ink font-medium">problem-solving style</span>,{" "}
          <span className="text-ink font-medium">communication patterns</span>, and{" "}
          <span className="text-ink font-medium">collaboration approach</span>
        </p>
      </motion.div>
    </motion.div>
  );
}
