"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui";

const steps = [
  {
    step: 1,
    title: "Upload or Capture",
    description: "Upload resumes and your JD directly, or use our Chrome extension to capture candidates from anywhere.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
        <polyline points="17,8 12,3 7,8" />
        <line x1="12" y1="3" x2="12" y2="15" />
      </svg>
    ),
    visual: (
      <div className="flex items-center justify-center gap-3">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="w-8 h-8 rounded-lg bg-accent-muted flex items-center justify-center"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2">
            <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
            <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
          </svg>
        </motion.div>
        <span className="text-stone text-xs">+</span>
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="w-8 h-8 rounded-lg bg-cloud flex items-center justify-center"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--charcoal)" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <circle cx="12" cy="12" r="4" />
          </svg>
        </motion.div>
      </div>
    ),
  },
  {
    step: 2,
    title: "AI Parses & Matches",
    description: "Our AI extracts skills, experience, and qualifications—then matches candidates against your job description.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
      </svg>
    ),
    visual: (
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-verify/10 text-verify text-xs font-mono font-bold">
          96%
        </div>
        <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-ink/10 text-ink text-xs font-mono font-bold">
          89%
        </div>
        <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-ink/10 text-ink text-xs font-mono font-bold">
          84%
        </div>
      </div>
    ),
  },
  {
    step: 3,
    title: "Review & Manage",
    description: "See ranked candidates in your pipeline. Move them through stages, schedule interviews, collaborate with your team.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="7" height="9" rx="1" />
        <rect x="14" y="3" width="7" height="5" rx="1" />
        <rect x="14" y="12" width="7" height="9" rx="1" />
        <rect x="3" y="16" width="7" height="5" rx="1" />
      </svg>
    ),
    visual: (
      <div className="flex items-center gap-1">
        {["New", "Screen", "Interview", "Offer"].map((stage, i) => (
          <div
            key={stage}
            className={`px-2 py-1 rounded text-[10px] font-medium ${
              i === 2 ? "bg-accent text-white" : "bg-cloud text-charcoal"
            }`}
          >
            {stage}
          </div>
        ))}
      </div>
    ),
  },
  {
    step: 4,
    title: "Hire & Notify",
    description: "Make your hire. Every candidate automatically gets status updates—no one gets ghosted.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
        <path d="M22 4L12 14.01l-3-3" />
      </svg>
    ),
    visual: (
      <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-verify/10 text-verify text-xs font-medium">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
          <path d="M22 4L12 14.01l-3-3" />
        </svg>
        0 ghosted
      </div>
    ),
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 lg:py-32 bg-paper relative overflow-hidden">
      {/* Subtle Background */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(var(--ink) 1px, transparent 1px), linear-gradient(90deg, var(--ink) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <Container>
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="caption text-stone inline-flex items-center gap-2 justify-center mb-4">
              <span className="w-6 h-px bg-accent" />
              How It Works
              <span className="w-6 h-px bg-accent" />
            </span>
            <h2 className="font-display display-md text-ink mb-5">
              From resume to <span className="text-accent-gradient">hire</span> in 4 steps.
            </h2>
            <p className="body-lg text-stone">
              Simple workflow. Powerful AI. Zero ghosted candidates.
            </p>
          </motion.div>
        </div>

        {/* Steps Grid */}
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden lg:block absolute top-16 left-[12%] right-[12%] h-px bg-mist" />

            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center relative"
              >
                {/* Step Number Circle */}
                <div className="relative mx-auto mb-6">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="w-16 h-16 rounded-full bg-white border-2 border-ink flex items-center justify-center relative z-10 mx-auto"
                  >
                    <span className="text-ink">{step.icon}</span>
                  </motion.div>
                  {/* Step Number Badge */}
                  <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-accent text-white text-xs font-bold flex items-center justify-center">
                    {step.step}
                  </span>
                </div>

                {/* Arrow Between Steps (Mobile) */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center my-4 md:hidden">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--mist)" strokeWidth="2">
                      <path d="M12 5v14M5 12l7 7 7-7" />
                    </svg>
                  </div>
                )}

                <h3 className="heading-3 text-ink mb-2">{step.title}</h3>
                <p className="text-stone text-sm leading-relaxed mb-4 max-w-xs mx-auto">
                  {step.description}
                </p>

                {/* Visual Indicator */}
                <div className="flex justify-center">{step.visual}</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Hint */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-cloud border border-mist">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--verify)" strokeWidth="2">
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
              <path d="M22 4L12 14.01l-3-3" />
            </svg>
            <span className="text-sm text-charcoal">
              Get started in <span className="font-mono font-bold text-ink">under 2 minutes</span>
            </span>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
