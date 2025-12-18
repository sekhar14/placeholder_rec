"use client";

import { motion } from "framer-motion";
import { Container, Button } from "@/components/ui";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      {/* Subtle Background */}
      <div className="absolute inset-0 -z-10">
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(var(--ink) 1px, transparent 1px), linear-gradient(90deg, var(--ink) 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
          }}
        />
        {/* Warm accent glow */}
        <div className="absolute top-1/3 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] transform translate-x-1/3" />
        {/* Secondary glow */}
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-ink/5 rounded-full blur-[100px] transform -translate-x-1/3" />
      </div>

      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <div className="max-w-xl">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6 flex flex-wrap items-center gap-3"
            >
              <span className="caption text-stone inline-flex items-center gap-2">
                <span className="w-6 h-px bg-accent" />
                For Recruiters
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-ink text-white text-xs font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-verify animate-pulse" />
                Early Access
              </span>
            </motion.div>

            {/* Headline */}
            <div className="mb-8">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="font-display display-xl text-ink mb-4"
              >
                Screen Smarter.
              </motion.h1>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="font-display display-xl text-ink"
              >
                Hire{" "}
                <span className="text-accent-gradient italic">Faster.</span>
              </motion.h1>
            </div>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="body-lg text-stone leading-relaxed mb-8 max-w-lg"
            >
              Upload resumes and job descriptions, or use our Chrome extension to capture candidates from anywhere.
              AI screens, ranks, and helps you never ghost a candidate again.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-3 mb-8"
            >
              <Button variant="primary" size="lg" href="#cta">
                Get Early Access
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
              <Button variant="outline" size="lg" href="#how-it-works">
                See How It Works
              </Button>
            </motion.div>

            {/* Trust signals */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex items-center gap-6 text-sm text-ash"
            >
              <div className="flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--verify)" strokeWidth="2">
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                  <path d="M22 4L12 14.01l-3-3" />
                </svg>
                <span>Free for early adopters</span>
              </div>
              <div className="flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--verify)" strokeWidth="2">
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                  <path d="M22 4L12 14.01l-3-3" />
                </svg>
                <span>Chrome Extension</span>
              </div>
            </motion.div>
          </div>

          {/* Right: Dashboard Visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            {/* Main Dashboard Card */}
            <div className="card-elevated p-5 lg:p-6">
              {/* Dashboard Header */}
              <div className="flex items-center justify-between mb-5 pb-4 border-b border-mist">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-ink flex items-center justify-center">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                      <rect x="3" y="3" width="18" height="18" rx="2" />
                      <path d="M3 9h18M9 21V9" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-ink text-sm">Candidate Pipeline</p>
                    <p className="text-xs text-ash">AI-powered screening</p>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-verify-muted text-verify text-xs font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-verify animate-pulse" />
                  Live
                </div>
              </div>

              {/* Upload Sources */}
              <div className="flex items-center gap-2 mb-5">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.8 }}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-accent-muted text-xs"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2">
                    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M17 8l-5-5-5 5M12 3v12" />
                  </svg>
                  <span className="text-accent font-medium">47 uploaded</span>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.9 }}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cloud text-xs"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--charcoal)" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <circle cx="12" cy="12" r="4" />
                    <line x1="21.17" y1="8" x2="12" y2="8" />
                    <line x1="3.95" y1="6.06" x2="8.54" y2="14" />
                    <line x1="10.88" y1="21.94" x2="15.46" y2="14" />
                  </svg>
                  <span className="text-charcoal font-medium">12 via extension</span>
                </motion.div>
              </div>

              {/* Candidate List */}
              <div className="space-y-2.5">
                {[
                  { initials: "PS", role: "Sr. Frontend Developer", match: 94 },
                  { initials: "RV", role: "Full Stack Engineer", match: 89 },
                  { initials: "AD", role: "React Developer", match: 86 },
                ].map((candidate, i) => (
                  <motion.div
                    key={candidate.initials}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 1 + i * 0.15 }}
                    className={`flex items-center justify-between p-3 rounded-xl border transition-all ${
                      i === 0 ? "border-accent/30 bg-accent-muted" : "border-mist bg-white hover:border-ash"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-cloud flex items-center justify-center text-sm font-medium text-charcoal">
                        {candidate.initials}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-ink">Candidate #{i + 1}</p>
                        <p className="text-xs text-ash">{candidate.role}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className={`font-mono text-sm font-semibold ${candidate.match >= 90 ? "text-verify" : "text-ink"}`}>
                        {candidate.match}%
                      </p>
                      <p className="text-xs text-ash">AI Match</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Total Count */}
              <div className="mt-4 pt-4 border-t border-mist flex items-center justify-between">
                <p className="text-xs text-ash">
                  <span className="font-mono text-ink font-medium">59</span> total candidates
                </p>
                <button className="text-xs text-accent font-medium hover:underline">
                  View all →
                </button>
              </div>
            </div>

            {/* Floating AI Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.5 }}
              className="absolute -top-3 -right-3 w-14 h-14 rounded-xl bg-ink flex items-center justify-center shadow-lg"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
                <circle cx="12" cy="12" r="3" />
                <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
              </svg>
            </motion.div>

            {/* Floating Stats Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.7 }}
              className="absolute -bottom-4 -left-4 card p-3 shadow-lg"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-verify-muted flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--verify)" strokeWidth="2">
                    <path d="M23 6l-9.5 9.5-5-5L1 18" />
                    <path d="M17 6h6v6" />
                  </svg>
                </div>
                <div>
                  <p className="font-mono text-lg font-semibold text-ink">10+ hrs</p>
                  <p className="text-xs text-ash">saved weekly</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
