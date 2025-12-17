"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui";

const problems = [
  {
    audience: "Candidates",
    number: "01",
    title: "Ghosted & Dehumanized",
    description:
      "You spend hours crafting applications, only to be rejected by an algorithm without ever knowing why. No feedback, no closure.",
  },
  {
    audience: "Companies",
    number: "02",
    title: "Hiring Resume Writers",
    description:
      "Your AI filters applicants based on keywords, so you end up hiring the best resume optimizers—not the best talent.",
  },
  {
    audience: "Everyone",
    number: "03",
    title: "Bots Talking to Bots",
    description:
      "AI writes resumes. AI filters resumes. The human signal is lost in a dead internet loop where neither side wins.",
    featured: true,
  },
];

export function Problem() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden bg-cloud">
      <Container>
        {/* Editorial Header */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="caption text-stone inline-flex items-center gap-2 mb-6">
              <span className="w-8 h-px bg-accent" />
              The Problem
            </span>
            <h2 className="font-display heading-1 text-ink">
              The Recruitment{" "}
              <span className="relative inline-block">
                <span className="italic">Black Hole</span>
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-ink/20" />
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-end"
          >
            <p className="body-md text-stone max-w-md">
              Current platforms have digitized the filing cabinet but
              inadvertently created a &ldquo;Spam Cannon&rdquo; where quantity
              trumps quality on both sides.
            </p>
          </motion.div>
        </div>

        {/* Asymmetric Problem Cards */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* First two cards - smaller */}
          {problems.slice(0, 2).map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card p-8 relative group"
            >
              {/* Editorial Number */}
              <span className="font-display text-6xl text-mist absolute top-6 right-6 italic">
                {problem.number}
              </span>

              <span className="caption text-ash mb-6 block">{problem.audience}</span>

              <h3 className="font-display heading-3 text-ink mb-4 relative z-10">
                {problem.title}
              </h3>
              <p className="text-stone leading-relaxed relative z-10">
                {problem.description}
              </p>
            </motion.div>
          ))}

          {/* Featured card - larger */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="card-featured p-8 relative lg:row-span-1"
          >
            <span className="font-display text-6xl text-accent/20 absolute top-6 right-6 italic">
              03
            </span>

            <span className="caption text-accent mb-6 block">Everyone</span>

            <h3 className="font-display heading-3 text-ink mb-4">
              Bots Talking to Bots
            </h3>
            <p className="text-stone leading-relaxed mb-8">
              AI writes resumes. AI filters resumes. The human signal is lost in a dead internet loop where neither side wins.
            </p>

            {/* Mini Loop Visualization */}
            <div className="flex items-center justify-between gap-4 pt-6 border-t border-mist">
              <div className="text-center">
                <div className="w-10 h-10 rounded-full bg-cloud flex items-center justify-center mx-auto mb-2">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--charcoal)" strokeWidth="1.5">
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </div>
                <span className="text-xs text-ash">Candidate</span>
              </div>

              <div className="flex-1 relative h-8">
                <motion.div
                  animate={{ x: [0, 10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute top-1/2 left-0 right-0 h-px bg-mist"
                />
                <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xs text-ash bg-white px-2">
                  AI ↔ AI
                </span>
              </div>

              <div className="text-center">
                <div className="w-10 h-10 rounded-full bg-cloud flex items-center justify-center mx-auto mb-2">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--charcoal)" strokeWidth="1.5">
                    <path d="M3 21h18M5 21V7l8-4v18M13 21V3l6 3v15" />
                  </svg>
                </div>
                <span className="text-xs text-ash">Company</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Transition */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center gap-4">
            <span className="w-12 h-px bg-mist" />
            <span className="text-stone italic">There&apos;s a better way.</span>
            <span className="w-12 h-px bg-mist" />
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
