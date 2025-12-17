"use client";

import { motion } from "framer-motion";
import { Container, Button } from "@/components/ui";

const candidateBenefits = [
  {
    title: "AI-Verified Skills",
    description: "Complete adaptive challenges once. AI analyzes not just answers, but your problem-solving approach.",
  },
  {
    title: "Glass Box Feedback",
    description: "Every application gets an AI-generated Growth Report—exact strengths, gaps, and how to improve.",
  },
  {
    title: "AI Career Guidance",
    description: "See AI-mapped career trajectories, skill gaps to bridge, and roles that match your growth path.",
  },
  {
    title: "Salary Intelligence",
    description: "Know your market worth with AI-analyzed salary data before you apply.",
  },
];

const companyBenefits = [
  {
    title: "AI Skill Verification",
    description: "No more resume claims. AI verifies actual abilities through adaptive challenges.",
  },
  {
    title: "Semantic AI Matching",
    description: "AI matches candidates across 20+ dimensions—skills, culture, salary alignment, growth trajectory.",
  },
  {
    title: "Bias-Free Screening",
    description: "AI screens anonymized profiles. Name, gender, age, college hidden until interview.",
  },
  {
    title: "Recruiter Co-pilot",
    description: "AI ranks candidates, drafts outreach, and suggests interview questions based on skill gaps.",
  },
];

export function TwoPaths() {
  return (
    <section id="for-candidates" className="py-24 lg:py-32 relative bg-cloud">
      <Container>
        {/* Editorial Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="caption text-stone inline-flex items-center gap-2 justify-center mb-4">
            <span className="w-6 h-px bg-accent" />
            AI for Both Sides
            <span className="w-6 h-px bg-accent" />
          </span>
          <h2 className="font-display heading-1 text-ink mb-5">
            AI That Works for <span className="text-accent-gradient">Everyone</span>
          </h2>
          <p className="body-md text-stone">
            Whether you&apos;re seeking your next role or building your team,
            our AI delivers genuine value at every step.
          </p>
        </motion.div>

        {/* Split Screen Layout */}
        <div className="grid lg:grid-cols-2 relative">
          {/* Vertical Divider */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-mist" />

          {/* For Candidates */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-8 lg:p-12 lg:pr-16"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-xl bg-ink flex items-center justify-center">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="1.5"
                >
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>
              <div>
                <p className="caption text-ash">For</p>
                <h3 className="font-display heading-3 text-ink">Candidates</h3>
              </div>
            </div>

            <div className="space-y-6 mb-10">
              {candidateBenefits.map((benefit, i) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="w-6 h-6 rounded-full bg-verify-muted flex items-center justify-center shrink-0 mt-0.5">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--verify)" strokeWidth="3">
                      <path d="M5 12l5 5L20 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-ink mb-1">{benefit.title}</h4>
                    <p className="text-sm text-stone">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <Button variant="primary" size="lg" className="w-full" href="#cta">
              Join as Talent
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Button>
          </motion.div>

          {/* For Companies */}
          <motion.div
            id="for-companies"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-8 lg:p-12 lg:pl-16 bg-accent-muted lg:bg-transparent"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="1.5"
                >
                  <path d="M3 21h18M5 21V7l8-4v18M13 21V3l6 3v15M9 9v.01M9 13v.01M9 17v.01" />
                </svg>
              </div>
              <div>
                <p className="caption text-ash">For</p>
                <h3 className="font-display heading-3 text-ink">Companies</h3>
              </div>
            </div>

            <div className="space-y-6 mb-10">
              {companyBenefits.map((benefit, i) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="3">
                      <path d="M5 12l5 5L20 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-ink mb-1">{benefit.title}</h4>
                    <p className="text-sm text-stone">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <Button variant="outline" size="lg" className="w-full" href="#cta">
              Start Hiring
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Button>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
