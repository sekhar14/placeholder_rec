"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Container, Button } from "@/components/ui";

export function CTA() {
  const [email, setEmail] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [teamSize, setTeamSize] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          user_type: "recruiter",
          company_name: companyName,
          team_size: teamSize
        }),
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
    <section id="cta" className="py-24 lg:py-32 relative overflow-hidden bg-ink">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
          className="w-full h-full"
        />
      </div>

      {/* Accent Glow */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

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
              {/* Headline */}
              <span className="caption text-white/50 inline-flex items-center gap-2 justify-center mb-4">
                <span className="w-6 h-px bg-accent" />
                Early Access
                <span className="w-6 h-px bg-accent" />
              </span>

              <h2 className="font-display display-lg text-white mb-5 leading-tight">
                Ready to unify your{" "}
                <span className="text-accent-gradient italic">hiring?</span>
              </h2>

              <p className="body-lg text-white/70 leading-relaxed mb-10 max-w-lg mx-auto">
                Join the waitlist and be among the first recruiters in India to experience
                unified hiring. Free for early adopters.
              </p>

              {/* Signup Form */}
              <form
                onSubmit={handleSubmit}
                className="max-w-md mx-auto space-y-4"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Work email"
                  required
                  disabled={isLoading}
                  className="w-full px-6 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all disabled:opacity-50"
                />

                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    placeholder="Company name"
                    disabled={isLoading}
                    className="w-full px-5 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all disabled:opacity-50 text-sm"
                  />
                  <select
                    value={teamSize}
                    onChange={(e) => setTeamSize(e.target.value)}
                    disabled={isLoading}
                    className="w-full px-5 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all disabled:opacity-50 text-sm appearance-none cursor-pointer"
                    style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='white'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center', backgroundSize: '16px' }}
                  >
                    <option value="" className="bg-ink text-white">Team size</option>
                    <option value="1-5" className="bg-ink text-white">1-5 recruiters</option>
                    <option value="6-20" className="bg-ink text-white">6-20 recruiters</option>
                    <option value="20+" className="bg-ink text-white">20+ recruiters</option>
                  </select>
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className={`w-full ${isLoading ? "opacity-50 cursor-not-allowed" : ""}`}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <span className="flex items-center gap-2 justify-center">
                      <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Joining...
                    </span>
                  ) : (
                    <>
                      Get Early Access
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </>
                  )}
                </Button>
              </form>

              {error && (
                <p className="text-red-400 text-sm mt-4">{error}</p>
              )}

              <p className="text-white/40 text-sm mt-4">
                No credit card required. Free during early access.
              </p>

              {/* Trust Indicators */}
              <div className="mt-12 pt-8 border-t border-white/10">
                <div className="grid grid-cols-3 gap-6 text-center">
                  {[
                    { value: "5 min", label: "Setup time" },
                    { value: "10+ hrs", label: "Saved weekly" },
                    { value: "0", label: "Ghosted candidates" },
                  ].map((stat) => (
                    <div key={stat.label}>
                      <p className="font-mono text-2xl sm:text-3xl font-bold text-white mb-1">
                        {stat.value}
                      </p>
                      <p className="text-xs sm:text-sm text-white/50">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
            >
              <div className="w-20 h-20 rounded-full bg-verify/20 flex items-center justify-center mx-auto mb-6">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--verify)" strokeWidth="2">
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                  <path d="M22 4L12 14.01l-3-3" />
                </svg>
              </div>
              <h2 className="font-display heading-1 text-white mb-4">
                You&apos;re on the list!
              </h2>
              <p className="body-md text-white/70 mb-8">
                We&apos;ll be in touch soon with your early access invite.
              </p>
              <div className="flex justify-center gap-4">
                <a
                  href="https://twitter.com/intent/tweet?text=Just%20joined%20the%20waitlist%20for%20@ClarionHiring%20-%20a%20unified%20hiring%20platform%20for%20recruiters%20in%20India!%20No%20more%20juggling%205%20job%20portals.&url=https://clarion.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-xl bg-white/10 text-white hover:bg-white/20 transition-colors border border-white/20"
                >
                  Share on Twitter
                </a>
                <a
                  href="https://www.linkedin.com/sharing/share-offsite/?url=https://clarion.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-xl bg-white/10 text-white hover:bg-white/20 transition-colors border border-white/20"
                >
                  Share on LinkedIn
                </a>
              </div>
            </motion.div>
          )}
        </motion.div>
      </Container>
    </section>
  );
}
