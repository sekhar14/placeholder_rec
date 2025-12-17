"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui";

const comparisons = [
  {
    old: "Resume Claims",
    oldDesc: "Self-reported skills, easily exaggerated",
    new: "AI-Verified Skills",
    newDesc: "Adaptive challenges that prove actual ability",
  },
  {
    old: "Keyword Matching",
    oldDesc: 'ATS matches "Java" to "Java"',
    new: "Semantic AI Matching",
    newDesc: "Multi-dimensional fit across 20+ factors",
  },
  {
    old: "Black Box Rejection",
    oldDesc: "Ghosted without any feedback",
    new: "Glass Box AI Feedback",
    newDesc: "Personalized growth reports for everyone",
  },
  {
    old: "Hidden Salaries",
    oldDesc: "Discover mismatch after 3 interview rounds",
    new: "AI Salary Intelligence",
    newDesc: "Real-time market data, aligned upfront",
  },
  {
    old: "Biased Screening",
    oldDesc: "Name, college, gaps influence decisions",
    new: "Anonymous AI Screening",
    newDesc: "Merit is the only metric until interview",
  },
];

export function Solution() {
  return (
    <section id="how-it-works" className="py-24 lg:py-32 relative bg-ink text-white">
      {/* Subtle Background Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.5) 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />

      <Container>
        {/* Editorial Header */}
        <div className="max-w-4xl mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="caption text-white/40 inline-flex items-center gap-2 mb-4">
              <span className="w-6 h-px bg-accent" />
              AI-Powered Transformation
            </span>
            <h2 className="font-display heading-1 text-white mb-5">
              Manual Hiring{" "}
              <span className="text-accent-gradient">→ AI-Driven</span>
            </h2>
            <p className="body-md text-white/50 max-w-2xl">
              We&apos;re not building another job board. We&apos;re building an{" "}
              <span className="text-white">
                AI-powered clearinghouse for verified human potential.
              </span>
            </p>
          </motion.div>
        </div>

        {/* Editorial Comparison Layout */}
        <div className="space-y-6">
          {comparisons.map((item, index) => (
            <motion.div
              key={item.new}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="grid lg:grid-cols-[1fr,auto,1fr] gap-4 lg:gap-8 items-center"
            >
              {/* Old Way - Struck Through */}
              <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                <div className="flex items-center gap-3 mb-2">
                  <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white/30">
                      <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                  </span>
                  <span className="font-medium text-white/30 line-through">{item.old}</span>
                </div>
                <p className="text-sm text-white/20 pl-9">{item.oldDesc}</p>
              </div>

              {/* Arrow Connector */}
              <div className="hidden lg:flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </div>

              {/* New Way - Highlighted */}
              <div className="p-6 rounded-xl bg-accent/10 border border-accent/30">
                <div className="flex items-center gap-3 mb-2">
                  <span className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent">
                      <path d="M5 12l5 5L20 7" />
                    </svg>
                  </span>
                  <span className="font-medium text-white">{item.new}</span>
                </div>
                <p className="text-sm text-white/60 pl-9">{item.newDesc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 pt-12 border-t border-white/10 text-center"
        >
          <p className="text-white/30 mb-6">
            See how each feature brings this vision to life
          </p>
          <a
            href="#features"
            className="inline-flex items-center gap-2 text-accent hover:text-accent-light transition-colors font-medium"
          >
            Explore Features
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </a>
        </motion.div>
      </Container>
    </section>
  );
}
