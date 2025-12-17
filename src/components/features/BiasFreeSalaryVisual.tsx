"use client";

import { motion } from "framer-motion";

export function BiasFreeSalaryVisual() {
  const hiddenFields = ["Name", "Photo", "Age", "Gender", "University", "Location"];
  const visibleTags = ["94% Skills", "Culture Fit", "Work Samples", "Challenges"];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="space-y-4"
    >
      {/* Anonymous Profile Section */}
      <div className="p-5 rounded-xl bg-white border border-mist">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-ink flex items-center justify-center">
              <span className="text-white text-xl font-mono font-bold">#</span>
            </div>
            <div>
              <p className="caption text-ash">Anonymous Profile</p>
              <p className="font-display text-xl text-ink">Candidate 293</p>
            </div>
          </div>
          <div className="px-2.5 py-1 rounded-full bg-verify-muted text-verify text-xs font-medium">
            Verified
          </div>
        </div>

        {/* Hidden Fields Grid */}
        <div className="grid grid-cols-3 gap-2 mb-4">
          {hiddenFields.map((field, i) => (
            <motion.div
              key={field}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 + i * 0.05 }}
              className="p-2 rounded-lg bg-cloud border border-mist"
            >
              <p className="text-xs text-ash mb-1">{field}</p>
              <div className="flex items-center gap-1">
                <div className="flex-1 h-2.5 bg-ink/10 rounded" />
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="var(--ash)" strokeWidth="2">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0110 0v4" />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>

        {/* What IS Visible */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p className="caption text-accent mb-2">Visible to Employers</p>
          <div className="flex flex-wrap gap-1.5">
            {visibleTags.map((item, i) => (
              <motion.span
                key={item}
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.55 + i * 0.08 }}
                className="px-2.5 py-1 rounded-full bg-ink text-white text-xs font-medium"
              >
                {item}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Salary Intelligence Section */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.7 }}
        className="p-5 rounded-xl bg-cloud border border-mist"
      >
        <div className="flex items-center gap-2 mb-4">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--ink)" strokeWidth="1.5">
            <path d="M12 1v22M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
          </svg>
          <span className="font-medium text-ink text-sm">Salary Intelligence</span>
          <span className="ml-auto text-xs text-ash font-mono">Live data</span>
        </div>

        {/* Salary Range Visualization */}
        <div className="relative mb-4">
          <div className="flex justify-between text-xs text-ash mb-1.5">
            <span>$120k</span>
            <span>Market Range</span>
            <span>$180k</span>
          </div>

          {/* Range Bar */}
          <div className="relative h-7 bg-white rounded-lg border border-mist overflow-hidden">
            {/* Market Range Background */}
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ delay: 0.85, duration: 0.6 }}
              className="absolute inset-y-0 left-0 bg-mist/50"
            />

            {/* 25th-75th Percentile Highlight */}
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "50%" }}
              viewport={{ once: true }}
              transition={{ delay: 1, duration: 0.5 }}
              className="absolute inset-y-0 left-[25%] bg-ink/15"
            />

            {/* Your Expectation Marker */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.3, type: "spring" }}
              className="absolute top-1/2 -translate-y-1/2 left-[58%] w-3.5 h-3.5 rounded-full bg-accent border-2 border-white shadow-md"
            />

            {/* Median Marker */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.1 }}
              className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-ink/30"
            />
          </div>

          {/* Labels */}
          <div className="flex justify-between mt-1.5">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.4 }}
              className="text-xs"
            >
              <span className="text-stone">25th: </span>
              <span className="font-mono text-ink">$135k</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.45 }}
              className="text-xs"
            >
              <span className="text-stone">Med: </span>
              <span className="font-mono text-ink">$150k</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.5 }}
              className="text-xs"
            >
              <span className="text-stone">75th: </span>
              <span className="font-mono text-ink">$165k</span>
            </motion.div>
          </div>
        </div>

        {/* Your Position Callout */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1.6 }}
          className="p-3 rounded-lg bg-accent-muted border border-accent/20"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-accent" />
              <span className="text-sm text-charcoal">Your expectation</span>
            </div>
            <span className="font-mono text-accent font-medium">$155k</span>
          </div>
          <p className="text-xs text-stone mt-1 pl-4">
            58th percentile — <span className="text-verify">competitive</span>
          </p>
        </motion.div>
      </motion.div>

      {/* Privacy Assurance */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1.8 }}
        className="flex items-center justify-center gap-2 text-xs text-ash"
      >
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
        <span>Salary shared only when both parties opt-in</span>
      </motion.div>
    </motion.div>
  );
}
