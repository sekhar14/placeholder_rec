"use client";

import { motion } from "framer-motion";

export function AISkillVerificationVisual() {
  const codeLines = [
    { num: 1, code: "def optimize_query(data, filters):", color: "text-blue-400" },
    { num: 2, code: '    """Optimize database query"""', color: "text-emerald-400/60" },
    { num: 3, code: "    result = []", color: "text-white/80" },
    { num: 4, code: "    for item in data:", color: "text-white/80" },
    { num: 5, code: "        if matches(item, filters):", color: "text-white/80" },
    { num: 6, code: "            result.append(item)", color: "text-white/80", active: true },
  ];

  const metrics = [
    { label: "Logic Flow", score: 94 },
    { label: "Code Quality", score: 87 },
    { label: "Edge Cases", score: 72 },
  ];

  return (
    <div className="relative">
      {/* Code Editor Container */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="rounded-xl bg-ink overflow-hidden"
      >
        {/* Editor Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <span className="w-3 h-3 rounded-full bg-accent/60" />
              <span className="w-3 h-3 rounded-full bg-yellow-400/60" />
              <span className="w-3 h-3 rounded-full bg-verify/60" />
            </div>
            <span className="text-xs text-white/40 font-mono ml-3">challenge.py</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="px-2 py-1 rounded bg-verify/20 text-verify text-xs font-mono">
              Live
            </span>
            <span className="text-xs text-white/40 font-mono">12:34</span>
          </div>
        </div>

        {/* Code Content */}
        <div className="p-4 font-mono text-sm">
          <div className="space-y-1">
            {codeLines.map((line, i) => (
              <motion.div
                key={line.num}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.1 }}
                className={`flex items-center gap-4 ${
                  line.active ? "bg-white/5 -mx-4 px-4 py-0.5" : ""
                }`}
              >
                <span className="text-white/20 w-4 text-right text-xs">{line.num}</span>
                <span className={line.color}>{line.code}</span>
                {line.active && (
                  <motion.span
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ repeat: Infinity, duration: 0.8 }}
                    className="w-0.5 h-4 bg-accent"
                  />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* AI Analysis Overlay - Floating Card */}
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="absolute -bottom-6 -right-4 w-56 card-elevated p-4 shadow-xl"
      >
        <div className="flex items-center gap-2 mb-3">
          <div className="w-6 h-6 rounded-full bg-accent-muted flex items-center justify-center">
            <motion.svg
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="var(--accent)"
              strokeWidth="2"
            >
              <circle cx="12" cy="12" r="10" strokeDasharray="40 60" />
            </motion.svg>
          </div>
          <span className="text-sm font-medium text-ink">AI Analyzing</span>
        </div>

        {/* Real-time Analysis Metrics */}
        <div className="space-y-2.5">
          {metrics.map((metric, i) => (
            <div key={metric.label}>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-stone">{metric.label}</span>
                <motion.span
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7 + i * 0.15 }}
                  className="font-mono text-ink"
                >
                  {metric.score}%
                </motion.span>
              </div>
              <div className="h-1 bg-cloud rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${metric.score}%` }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7 + i * 0.15, duration: 0.6 }}
                  className={`h-full rounded-full ${
                    metric.score >= 90 ? "bg-verify" : metric.score >= 80 ? "bg-ink" : "bg-accent"
                  }`}
                />
              </div>
            </div>
          ))}
        </div>

        {/* AI Insight */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.2 }}
          className="mt-3 pt-3 border-t border-mist"
        >
          <p className="text-xs text-stone">
            <span className="text-accent font-medium">Tip:</span> Use generators for memory efficiency
          </p>
        </motion.div>
      </motion.div>

      {/* Challenge Context Badge */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="absolute -top-3 -left-3 px-3 py-1.5 bg-ink text-white rounded-lg text-xs font-medium shadow-lg"
      >
        <span className="text-accent">//</span> Challenge 1 of 3
      </motion.div>
    </div>
  );
}
