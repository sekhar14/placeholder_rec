"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui";

export function BiasShield() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden bg-ink">
      {/* Subtle accent glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[150px] -z-10" />

      <Container>
        {/* Centered Dramatic Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-20"
        >
          <span className="caption text-white/40 inline-flex items-center gap-2 justify-center mb-4">
            <span className="w-6 h-px bg-accent" />
            AI Bias Shield + Salary Intelligence
            <span className="w-6 h-px bg-accent" />
          </span>
          <h2 className="font-display display-lg text-white mb-5 max-w-3xl mx-auto">
            Merit Is the{" "}
            <span className="text-accent-gradient italic">Only</span> Metric
          </h2>
          <p className="body-md text-white/50 max-w-2xl mx-auto">
            AI anonymizes profiles. Hiring managers see verified skills, culture fit,
            and salary alignment—nothing that could bias the decision.
          </p>
        </motion.div>

        {/* Anonymous Profile Card - Editorial Style */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-white rounded-2xl p-8 lg:p-10 relative">
            {/* Header */}
            <div className="flex items-center justify-between mb-10 pb-6 border-b border-mist">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-xl bg-ink flex items-center justify-center">
                  <span className="text-white text-2xl font-mono font-bold">#</span>
                </div>
                <div>
                  <p className="caption text-ash mb-1">Verified Candidate</p>
                  <p className="font-display text-4xl text-ink">402</p>
                </div>
              </div>
              <div className="px-4 py-2 rounded-full bg-verify-muted text-verify text-sm font-medium">
                95% Match
              </div>
            </div>

            {/* Redacted Fields Grid */}
            <div className="mb-10">
              <p className="caption text-ash mb-4">Hidden Until Interview Booked</p>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                {["Name", "Gender", "Age", "University"].map((field) => (
                  <div
                    key={field}
                    className="p-4 rounded-xl bg-cloud border border-mist group relative overflow-hidden"
                  >
                    <p className="text-xs text-ash mb-2">{field}</p>
                    {/* Redacted bar */}
                    <div className="h-5 bg-ink/10 rounded flex items-center justify-end pr-2">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="text-ash"
                      >
                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                        <path d="M7 11V7a5 5 0 0110 0v4" />
                      </svg>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Visible Metrics */}
            <div>
              <p className="caption text-accent mb-4">Visible to Hiring Manager</p>
              <div className="space-y-4">
                {[
                  { label: "Challenge Score", value: 94 },
                  { label: "Technical Depth", value: 87 },
                  { label: "Culture Match", value: 95 },
                ].map((metric) => (
                  <div key={metric.label}>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-charcoal">{metric.label}</span>
                      <span className="font-mono text-ink font-medium">{metric.value}%</span>
                    </div>
                    <div className="h-2 bg-cloud rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${metric.value}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="h-full bg-ink rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Salary Intelligence Section */}
            <div className="mt-8 pt-6 border-t border-mist">
              <p className="caption text-stone mb-3">AI Salary Intelligence</p>
              <div className="p-4 rounded-xl bg-cloud border border-mist">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-charcoal">Salary Alignment</span>
                  <span className="px-2 py-1 rounded-full bg-verify-muted text-verify text-xs font-medium">Overlap Found</span>
                </div>
                <div className="relative h-6 bg-white rounded-lg border border-mist mb-2">
                  {/* Range bar */}
                  <div className="absolute inset-y-0 left-[20%] w-[35%] bg-ink/10 rounded" />
                  {/* Company budget marker */}
                  <div className="absolute top-1/2 -translate-y-1/2 left-[20%] w-2 h-2 rounded-full bg-ink border-2 border-white" />
                  <div className="absolute top-1/2 -translate-y-1/2 left-[55%] w-2 h-2 rounded-full bg-ink border-2 border-white" />
                  {/* Candidate marker */}
                  <div className="absolute top-1/2 -translate-y-1/2 left-[45%] w-3 h-3 rounded-full bg-accent border-2 border-white" />
                </div>
                <div className="flex justify-between text-xs text-ash">
                  <span>Company: $140k-$170k</span>
                  <span className="text-accent font-medium">Candidate: $155k</span>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="mt-6 flex gap-3">
              <button className="flex-1 py-3 px-6 rounded-xl bg-accent text-white font-medium hover:bg-accent-light transition-colors">
                Book Interview
              </button>
              <button className="py-3 px-6 rounded-xl bg-cloud text-charcoal font-medium hover:bg-mist transition-colors border border-mist">
                View Work
              </button>
            </div>

            {/* Editorial decorative number */}
            <div className="absolute -top-6 -right-4 font-display text-8xl text-ink/5 italic">
              ∅
            </div>
          </div>

          {/* Caption below card */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.6 }}
            className="text-center text-white/40 text-sm mt-6"
          >
            Identity revealed <span className="text-accent">after booking interview</span>
          </motion.p>
        </motion.div>

        {/* Bottom Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 flex flex-wrap justify-center gap-6 lg:gap-12"
        >
          {[
            { text: "AI-Anonymized", icon: "shield" },
            { text: "Skills-First", icon: "check" },
            { text: "Salary-Aligned", icon: "dollar" },
          ].map((item) => (
            <div key={item.text} className="flex items-center gap-2.5 text-white/60">
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                {item.icon === "shield" && (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                )}
                {item.icon === "check" && (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                )}
                {item.icon === "dollar" && (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 1v22M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
                  </svg>
                )}
              </div>
              <span className="font-medium text-sm">{item.text}</span>
            </div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
