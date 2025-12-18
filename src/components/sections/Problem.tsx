"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui";

const painPoints = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
      </svg>
    ),
    title: "Scattered Data",
    description: "Resumes in email, spreadsheets everywhere, no single source of truth for candidates.",
    stat: "5+",
    statLabel: "tools to manage"
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    title: "Duplicate Work",
    description: "Same candidate applies multiple times. You end up reviewing them again and again.",
    stat: "30%",
    statLabel: "are duplicates"
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12,6 12,12 16,14" />
      </svg>
    ),
    title: "Hours of Manual Screening",
    description: "Reading 100+ resumes for one role. Most don't even match basic requirements.",
    stat: "12+",
    statLabel: "hours per hire"
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
        <path d="M8 10h.01M12 10h.01M16 10h.01" />
      </svg>
    ),
    title: "Candidate Ghosting",
    description: "No time to respond to everyone. Your employer brand suffers silently.",
    stat: "85%",
    statLabel: "never hear back"
  },
];

export function Problem() {
  return (
    <section className="py-24 lg:py-32 bg-paper relative overflow-hidden">
      <Container>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16"
        >
          <span className="caption text-stone inline-flex items-center gap-2 mb-4">
            <span className="w-6 h-px bg-accent" />
            The Problem
          </span>
          <h2 className="font-display display-md text-ink mb-5">
            Recruiting is{" "}
            <span className="text-accent-gradient italic">broken.</span>
          </h2>
          <p className="body-lg text-stone">
            Resumes pile up. Great candidates slip through the cracks. And 85% of applicants
            never hear back—damaging your employer brand with every silence.
          </p>
        </motion.div>

        {/* Pain Points Grid */}
        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
          {painPoints.map((point, i) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group"
            >
              <div className="card p-6 lg:p-8 h-full transition-all duration-300 hover:shadow-lg hover:border-stone/20">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-cloud flex items-center justify-center text-charcoal group-hover:bg-accent-muted group-hover:text-accent transition-colors">
                    {point.icon}
                  </div>
                  <div className="text-right">
                    <p className="font-mono text-2xl font-bold text-ink">{point.stat}</p>
                    <p className="text-xs text-ash">{point.statLabel}</p>
                  </div>
                </div>
                <h3 className="heading-3 text-ink mb-2">{point.title}</h3>
                <p className="body-sm text-stone">{point.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 p-6 lg:p-8 rounded-2xl bg-ink text-white text-center"
        >
          <p className="body-lg text-white/80 mb-2">
            The average recruiter spends
          </p>
          <p className="font-display text-4xl lg:text-5xl font-semibold mb-2">
            23 hours/week
          </p>
          <p className="body-md text-white/60">
            on administrative tasks instead of actually hiring.
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
