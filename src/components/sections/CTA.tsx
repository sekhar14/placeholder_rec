"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Container, Button } from "@/components/ui";

type UserType = "candidate" | "company" | null;

export function CTA() {
  const [userType, setUserType] = useState<UserType>(null);
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !userType) return;

    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, user_type: userType }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      setIsSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to join waitlist");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="cta" className="py-24 lg:py-32 relative overflow-hidden bg-paper">
      {/* Subtle Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-verify/5 rounded-full blur-[100px]" />
      </div>

      <Container size="md">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {!isSubmitted ? (
            <>
              {/* Editorial Headline */}
              <span className="caption text-stone inline-flex items-center gap-2 justify-center mb-4">
                <span className="w-6 h-px bg-accent" />
                AI-Powered Hiring
                <span className="w-6 h-px bg-accent" />
              </span>

              <h2 className="font-display display-lg text-ink mb-5 leading-tight">
                Ready for{" "}
                <span className="text-accent-gradient italic">AI-Driven</span>{" "}
                Recruitment?
              </h2>

              <p className="body-md text-stone leading-relaxed mb-10 max-w-lg mx-auto">
                Join the waitlist and be among the first to experience AI-powered
                recruitment that works—for everyone.
              </p>

              {/* User Type Selection */}
              <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
                <button
                  onClick={() => setUserType("candidate")}
                  className={`flex items-center gap-3 px-6 py-4 rounded-xl border-2 transition-all duration-300 ${
                    userType === "candidate"
                      ? "border-ink bg-ink text-white"
                      : "border-mist bg-white text-charcoal hover:border-ash"
                  }`}
                >
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    userType === "candidate" ? "bg-white/20" : "bg-cloud"
                  }`}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                  </div>
                  <span className="font-medium">I&apos;m a Candidate</span>
                </button>

                <button
                  onClick={() => setUserType("company")}
                  className={`flex items-center gap-3 px-6 py-4 rounded-xl border-2 transition-all duration-300 ${
                    userType === "company"
                      ? "border-accent bg-accent text-white"
                      : "border-mist bg-white text-charcoal hover:border-ash"
                  }`}
                >
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    userType === "company" ? "bg-white/20" : "bg-cloud"
                  }`}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M3 21h18M5 21V7l8-4v18M13 21V3l6 3v15M9 9v.01M9 13v.01M9 17v.01" />
                    </svg>
                  </div>
                  <span className="font-medium">I&apos;m Hiring</span>
                </button>
              </div>

              {/* Email Form */}
              <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  disabled={isLoading}
                  className="flex-1 px-6 py-4 rounded-xl bg-white border border-mist text-ink placeholder:text-ash focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all disabled:opacity-50"
                />
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className={`${!userType || isLoading ? "opacity-50 cursor-not-allowed" : ""}`}
                  disabled={!userType || isLoading}
                >
                  {isLoading ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Joining...
                    </span>
                  ) : (
                    "Request Invite"
                  )}
                </Button>
              </form>

              {error && (
                <p className="text-red-500 text-sm mt-4">{error}</p>
              )}

              <p className="text-ash text-sm mt-4">
                No spam, ever. We&apos;ll only reach out when we&apos;re ready.
              </p>
            </>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
            >
              <div className="w-20 h-20 rounded-full bg-verify-muted flex items-center justify-center mx-auto mb-6">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--verify)" strokeWidth="2">
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                  <path d="M22 4L12 14.01l-3-3" />
                </svg>
              </div>
              <h2 className="font-display heading-1 text-ink mb-4">
                You&apos;re on the list!
              </h2>
              <p className="body-md text-stone mb-8">
                We&apos;ll be in touch when Clarion is ready for you.
              </p>
              <div className="flex justify-center gap-4">
                <a
                  href="#"
                  className="px-6 py-3 rounded-xl bg-cloud text-charcoal hover:bg-mist transition-colors border border-mist"
                >
                  Share on Twitter
                </a>
                <a
                  href="#"
                  className="px-6 py-3 rounded-xl bg-cloud text-charcoal hover:bg-mist transition-colors border border-mist"
                >
                  Share on LinkedIn
                </a>
              </div>
            </motion.div>
          )}
        </motion.div>

        {/* Editorial Stats */}
        {!isSubmitted && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-16 pt-10 border-t border-mist"
          >
            <div className="grid grid-cols-3 gap-6 text-center">
              {[
                { value: "2,500+", label: "Early signups" },
                { value: "150+", label: "Companies interested" },
                { value: "Q1 2026", label: "Expected launch" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="font-display text-2xl sm:text-3xl text-ink mb-1">
                    {stat.value}
                  </p>
                  <p className="text-xs sm:text-sm text-ash">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* All AI Features Grid */}
        {!isSubmitted && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 pt-10 border-t border-mist"
          >
            <p className="caption text-center text-stone mb-8">All AI Features</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
              {[
                { icon: "code", title: "AI Skill Verification", desc: "Prove abilities through challenges" },
                { icon: "match", title: "Semantic Matching", desc: "20+ dimension compatibility" },
                { icon: "feedback", title: "Glass Box Feedback", desc: "Personalized growth reports" },
                { icon: "career", title: "Career Guidance", desc: "AI-mapped trajectories" },
                { icon: "shield", title: "Bias-Free Screening", desc: "Anonymous until interview" },
                { icon: "salary", title: "Salary Intelligence", desc: "Real-time market data" },
                { icon: "quality", title: "Job Quality Scoring", desc: "Flag fake/vague posts" },
                { icon: "intent", title: "Intent Prediction", desc: "Filter serious candidates" },
                { icon: "copilot", title: "Recruiter Co-pilot", desc: "AI-assisted screening" },
                { icon: "chat", title: "Pre-Apply Q&A", desc: "Ask before you apply" },
              ].map((feature, i) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + i * 0.05 }}
                  className="p-3 rounded-xl bg-white border border-mist hover:border-accent/30 hover:shadow-sm transition-all group"
                >
                  <div className="w-8 h-8 rounded-lg bg-cloud group-hover:bg-accent-muted flex items-center justify-center mb-2 transition-colors">
                    <FeatureIcon type={feature.icon} />
                  </div>
                  <p className="text-sm font-medium text-ink mb-0.5 leading-tight">{feature.title}</p>
                  <p className="text-xs text-ash leading-snug">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </Container>
    </section>
  );
}

function FeatureIcon({ type }: { type: string }) {
  const iconProps = {
    width: 16,
    height: 16,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "var(--ink)",
    strokeWidth: 1.5,
  };

  switch (type) {
    case "code":
      return <svg {...iconProps}><path d="M16 18l6-6-6-6M8 6l-6 6 6 6" /></svg>;
    case "match":
      return <svg {...iconProps}><circle cx="12" cy="12" r="3" /><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4" /></svg>;
    case "feedback":
      return <svg {...iconProps}><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" /></svg>;
    case "career":
      return <svg {...iconProps}><path d="M23 6l-9.5 9.5-5-5L1 18" /><path d="M17 6h6v6" /></svg>;
    case "shield":
      return <svg {...iconProps}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>;
    case "salary":
      return <svg {...iconProps}><path d="M12 1v22M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" /></svg>;
    case "quality":
      return <svg {...iconProps}><path d="M9 11l3 3L22 4M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" /></svg>;
    case "intent":
      return <svg {...iconProps}><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></svg>;
    case "copilot":
      return <svg {...iconProps}><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" /><circle cx="9" cy="7" r="4" /></svg>;
    case "chat":
      return <svg {...iconProps}><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" /></svg>;
    default:
      return <svg {...iconProps}><circle cx="12" cy="12" r="10" /></svg>;
  }
}
