"use client";

import { motion } from "framer-motion";
import { Container, Button } from "@/components/ui";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      {/* Subtle Background */}
      <div className="absolute inset-0 -z-10">
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(var(--ink) 1px, transparent 1px), linear-gradient(90deg, var(--ink) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
        {/* Warm accent glow */}
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] transform translate-x-1/3" />
        {/* Secondary glow */}
        <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-verify/3 rounded-full blur-[80px] transform -translate-x-1/2" />
      </div>

      <Container>
        {/* Editorial Layout */}
        <div className="max-w-6xl">
          {/* Eyebrow with AI Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 flex flex-wrap items-center gap-4"
          >
            <span className="caption text-stone inline-flex items-center gap-2">
              <span className="w-6 h-px bg-accent" />
              Early Access Open
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-ink text-white text-xs font-medium">
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="3" />
                <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
              </svg>
              AI-Powered
            </span>
          </motion.div>

          {/* Main Headline - Refined Editorial Typography */}
          <div className="mb-8">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display display-xl text-ink"
            >
              Get Matched.
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="font-display display-xl text-ink flex flex-wrap items-baseline gap-x-4"
            >
              <span className="pl-2 lg:pl-8">Get</span>
              <span className="relative inline-block">
                <span className="text-accent-gradient">Feedback.</span>
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  className="absolute -bottom-1 left-0 w-full h-0.5 bg-accent origin-left"
                />
              </span>
            </motion.h1>
          </div>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="font-display text-stone display-md mb-10 max-w-2xl"
          >
            <span className="text-charcoal">AI-powered hiring.</span>{" "}
            <span className="italic">Zero ghosting.</span>
          </motion.p>

          {/* Two Column: Body + Stats */}
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            {/* Left: Body Copy & CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="max-w-lg"
            >
              <p className="body-lg text-stone leading-relaxed mb-8">
                Stop the bots-talking-to-bots cycle. Our AI matches{" "}
                <span className="text-ink font-medium">verified abilities</span> with{" "}
                <span className="text-ink font-medium">real opportunities</span>
                —and gives every candidate actionable feedback.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 mb-10">
                <Button variant="primary" size="lg" href="#cta">
                  Join as Talent
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Button>
                <Button variant="outline" size="lg" href="#for-companies">
                  I&apos;m Hiring
                </Button>
              </div>

              {/* Trust Signals */}
              <div className="flex items-center gap-6 text-sm text-ash">
                <div className="flex items-center gap-2">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--verify)" strokeWidth="2">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                    <path d="M22 4L12 14.01l-3-3" />
                  </svg>
                  <span>2,500+ candidates</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--verify)" strokeWidth="2">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                    <path d="M22 4L12 14.01l-3-3" />
                  </svg>
                  <span>150+ companies</span>
                </div>
              </div>
            </motion.div>

            {/* Right: AI Verified Candidate Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="relative"
            >
              {/* Main Visual Card */}
              <div className="card-elevated p-6 lg:p-8">
                {/* Candidate Preview Header */}
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <p className="caption text-ash">AI-Verified Candidate</p>
                    </div>
                    <p className="font-display text-3xl lg:text-4xl text-ink">#402</p>
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-verify-muted text-verify text-sm font-medium">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    Verified
                  </div>
                </div>

                {/* AI Skill Metrics */}
                <div className="space-y-4 mb-6">
                  {[
                    { skill: "Problem Solving", score: 94, color: "bg-verify" },
                    { skill: "Technical Depth", score: 87, color: "bg-ink" },
                    { skill: "Communication", score: 91, color: "bg-ink" },
                  ].map((item, index) => (
                    <div key={item.skill}>
                      <div className="flex justify-between text-sm mb-1.5">
                        <span className="text-charcoal">{item.skill}</span>
                        <span className="font-mono text-ink font-medium">{item.score}%</span>
                      </div>
                      <div className="h-1.5 bg-cloud rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${item.score}%` }}
                          transition={{ duration: 0.8, delay: 0.8 + index * 0.1 }}
                          className={`h-full ${item.color} rounded-full`}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Culture Match Highlight */}
                <div className="p-4 bg-accent-muted rounded-xl border border-accent/20">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="var(--accent)" stroke="none">
                        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                      </svg>
                      <span className="text-sm text-charcoal">Culture Match</span>
                    </div>
                    <span className="font-mono text-accent font-semibold text-lg">
                      95%
                    </span>
                  </div>
                </div>

                {/* AI Badge */}
                <div className="mt-4 pt-4 border-t border-mist flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-ash">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <circle cx="12" cy="12" r="3" />
                      <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
                    </svg>
                    <span>Analyzed by Clarion AI</span>
                  </div>
                  <span className="font-mono text-xs text-ash">3 challenges completed</span>
                </div>
              </div>

              {/* Floating Feedback Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.1 }}
                className="absolute -bottom-4 -left-4 card p-3 shadow-lg"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-full bg-verify-muted flex items-center justify-center">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="var(--verify)"
                      strokeWidth="2"
                    >
                      <path d="M9 11l3 3L22 4M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-ash">Always receive</p>
                    <p className="font-medium text-ink text-sm">Growth Report</p>
                  </div>
                </div>
              </motion.div>

              {/* Decorative AI Element */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.2 }}
                className="absolute -top-3 -right-3 w-16 h-16 rounded-xl bg-ink flex items-center justify-center shadow-lg"
              >
                <span className="font-mono text-white text-xs font-medium">AI</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
