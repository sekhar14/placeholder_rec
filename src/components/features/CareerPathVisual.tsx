"use client";

import { motion } from "framer-motion";

export function CareerPathVisual() {
  const paths = [
    {
      title: "Engineering Manager",
      match: 87,
      skills: ["Leadership", "Roadmapping"],
      gaps: ["Team scaling", "Budget mgmt"],
      highlight: false,
    },
    {
      title: "Staff Engineer",
      match: 94,
      skills: ["Architecture", "Mentoring"],
      gaps: ["Public speaking"],
      highlight: true,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="space-y-4"
    >
      {/* Current Position */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="p-4 rounded-xl bg-ink text-white"
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
            </svg>
          </div>
          <div>
            <p className="text-xs text-white/50">Current Role</p>
            <p className="font-medium">Senior Frontend Dev</p>
          </div>
          <div className="ml-auto text-right">
            <p className="text-xs text-white/50">Experience</p>
            <p className="font-mono text-sm">5 years</p>
          </div>
        </div>
      </motion.div>

      {/* Path Connector */}
      <div className="flex justify-center">
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.3 }}
          className="w-0.5 h-6 bg-mist origin-top"
        />
      </div>

      {/* AI Suggested Paths */}
      <div className="relative">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35 }}
          className="caption text-stone text-center mb-3"
        >
          AI-Predicted Paths (3-5 years)
        </motion.p>

        {/* Path Options */}
        <div className="grid grid-cols-2 gap-3">
          {paths.map((path, i) => (
            <motion.div
              key={path.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.45 + i * 0.1 }}
              className={`p-3.5 rounded-xl border ${
                path.highlight
                  ? "bg-verify-muted border-verify/30"
                  : "bg-cloud border-mist"
              }`}
            >
              {/* Path Header */}
              <div className="flex items-start justify-between mb-2.5">
                <div>
                  <p className="font-medium text-ink text-sm">{path.title}</p>
                  <p className="text-xs text-ash">3-5 years</p>
                </div>
                <span
                  className={`font-mono text-sm font-medium ${
                    path.highlight ? "text-verify" : "text-stone"
                  }`}
                >
                  {path.match}%
                </span>
              </div>

              {/* Skills You Have */}
              <div className="mb-2">
                <p className="text-xs text-verify mb-1">Aligned</p>
                <div className="flex flex-wrap gap-1">
                  {path.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-0.5 rounded bg-white text-xs text-charcoal border border-mist"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Skill Gaps */}
              <div>
                <p className="text-xs text-accent mb-1">To build</p>
                <div className="flex flex-wrap gap-1">
                  {path.gaps.map((gap) => (
                    <span
                      key={gap}
                      className="px-2 py-0.5 rounded bg-accent/10 text-xs text-accent border border-accent/20"
                    >
                      {gap}
                    </span>
                  ))}
                </div>
              </div>

              {/* Best Match Indicator */}
              {path.highlight && (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 }}
                  className="mt-2.5 pt-2 border-t border-verify/20 flex items-center gap-1"
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="var(--verify)">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                  </svg>
                  <span className="text-xs text-verify font-medium">Best match</span>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Skill Gap Bridge */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.9 }}
        className="p-3.5 rounded-xl bg-accent-muted border border-accent/20"
      >
        <div className="flex items-center gap-2 mb-1.5">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2">
            <path d="M23 6l-9.5 9.5-5-5L1 18" />
            <path d="M17 6h6v6" />
          </svg>
          <span className="text-sm font-medium text-accent">Your Next Step</span>
        </div>
        <p className="text-xs text-charcoal">
          Build <span className="font-medium text-ink">public speaking</span> skills to unlock Staff path.
          <span className="text-accent"> 3 opportunities found.</span>
        </p>
      </motion.div>
    </motion.div>
  );
}
