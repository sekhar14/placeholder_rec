"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Container } from "@/components/ui";
import { CountUp, AnimatedCounter, AnimatedProgressRing } from "@/components/animations";

const features = [
  {
    id: "unified-inbox",
    number: "01",
    title: "Unified Inbox",
    tagline: "All candidates, one view",
    description:
      "Every resume you upload and every profile captured via extension lands in a single, organized dashboard. No more scattered spreadsheets.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M9 21V9" />
      </svg>
    ),
    metrics: [
      { label: "Uploaded", value: 47, color: "var(--accent)" },
      { label: "Extension", value: 12, color: "var(--charcoal)" },
    ],
  },
  {
    id: "ai-screening",
    number: "02",
    title: "AI Screening",
    tagline: "From 500 resumes to 10 finalists in minutes",
    description:
      "Our AI reads every resume, matches against your JD, and ranks candidates by fit. Surface the best matches instantly—no manual filtering.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
      </svg>
    ),
    candidates: [
      { initials: "C1", score: 96, role: "Sr. Frontend Developer" },
      { initials: "C2", score: 91, role: "Full Stack Engineer" },
      { initials: "C3", score: 87, role: "React Developer" },
    ],
  },
  {
    id: "pipeline-management",
    number: "03",
    title: "Pipeline Management",
    tagline: "Visual hiring workflow",
    description:
      "Drag-and-drop Kanban board for every stage. See where every candidate stands. Collaborate with hiring managers seamlessly.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="3" width="6" height="18" rx="1" />
        <rect x="9" y="8" width="6" height="13" rx="1" />
        <rect x="16" y="5" width="6" height="16" rx="1" />
      </svg>
    ),
    stages: [
      { name: "Applied", count: 59 },
      { name: "Screening", count: 24 },
      { name: "Interview", count: 8 },
      { name: "Offer", count: 2 },
    ],
  },
  {
    id: "auto-updates",
    number: "04",
    title: "Auto-Updates",
    tagline: "Zero ghosted candidates",
    description:
      "Automated status emails keep every candidate informed. Build your employer brand by treating applicants with respect—at scale.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M22 17H2a3 3 0 003 3h14a3 3 0 003-3zM6 17V5a2 2 0 012-2h8a2 2 0 012 2v12" />
        <path d="M10 7h4M10 11h4" />
      </svg>
    ),
    updates: [
      { status: "Application received", time: "Just now", color: "bg-verify" },
      { status: "Under review", time: "2 days", color: "bg-sky-500" },
      { status: "Interview scheduled", time: "5 days", color: "bg-violet-500" },
    ],
  },
  {
    id: "glass-box-ai",
    number: "05",
    title: "Glass Box AI",
    tagline: "See why, not just who",
    description:
      "Understand exactly why each candidate matches—or doesn't. Our AI shows the reasoning behind every score, so you can make confident decisions and explain them to hiring managers.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="11" cy="11" r="8" />
        <path d="M21 21l-4.35-4.35" />
        <path d="M8 8h6M8 11h4" />
      </svg>
    ),
    criteria: [
      { skill: "Python 5+ years", requirement: "required: 3+", met: true },
      { skill: "AWS Certified", requirement: "required", met: true },
      { skill: "Startup experience", requirement: "preferred", met: true },
      { skill: "Management exp", requirement: "nice-to-have", met: false },
    ],
    matchScore: 94,
  },
  {
    id: "smart-scheduling",
    number: "06",
    title: "Smart Scheduling",
    tagline: "One-click interviews",
    description:
      "Connect your calendar, and Clarion finds the perfect slot automatically. No more 10-email back-and-forth. Just pick a time that works for everyone.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <path d="M16 2v4M8 2v4M3 10h18" />
        <circle cx="12" cy="15" r="3" />
        <path d="M12 14v2l1 1" />
      </svg>
    ),
    slots: [
      { day: "Mon", time: "2:00 PM", available: true },
      { day: "Wed", time: "10:00 AM", available: true },
      { day: "Thu", time: "3:30 PM", available: true },
    ],
    hoursSaved: 4,
  },
  {
    id: "candidate-portal",
    number: "07",
    title: "Candidate Portal",
    tagline: "Self-service status tracking",
    description:
      "Give every candidate a personal portal to track their status, update their profile, and view upcoming interviews. Fewer 'what's my status?' emails, better candidate experience.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="8" r="4" />
        <path d="M6 21v-2a4 4 0 014-4h4a4 4 0 014 4v2" />
        <path d="M16 11l2 2 4-4" />
      </svg>
    ),
    portalStages: [
      { name: "Applied", active: false, completed: true },
      { name: "Review", active: false, completed: true },
      { name: "Interview", active: true, completed: false },
      { name: "Offer", active: false, completed: false },
    ],
    inboxReduction: 30,
  },
  {
    id: "team-collaboration",
    number: "08",
    title: "Team Collaboration",
    tagline: "Hiring managers in the loop",
    description:
      "Comment on candidates, share scorecards, and @mention teammates—all in one place. No more feedback scattered across Slack, email, and spreadsheets.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
        <path d="M8 9h8M8 13h4" />
      </svg>
    ),
    comments: [
      { author: "Mike", text: "Strong system design", positive: true },
      { author: "Lisa", text: "Culture fit concern", positive: false },
    ],
    scorecard: 4.2,
  },
];

function FeatureCard({ feature, index }: { feature: typeof features[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="card p-6 lg:p-8 h-full hover:shadow-lg transition-all duration-300 group">
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div className="w-14 h-14 rounded-xl bg-cloud flex items-center justify-center text-charcoal group-hover:bg-ink group-hover:text-white transition-all">
            {feature.icon}
          </div>
          <span className="font-display text-5xl text-mist italic">
            {feature.number}
          </span>
        </div>

        {/* Content */}
        <span className="caption text-accent block mb-2">{feature.tagline}</span>
        <h3 className="heading-2 text-ink mb-3">{feature.title}</h3>
        <p className="body-sm text-stone mb-6">{feature.description}</p>

        {/* Feature-specific Visual */}
        {feature.id === "unified-inbox" && feature.metrics && (
          <div className="p-4 rounded-xl bg-cloud/50">
            <div className="flex items-center justify-center gap-6">
              {feature.metrics.map((m, i) => (
                <motion.div
                  key={m.label}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={isInView ? { scale: 1, opacity: 1 } : {}}
                  transition={{ delay: 0.3 + i * 0.15, type: "spring", stiffness: 300 }}
                  className="text-center"
                >
                  <div
                    className="w-12 h-12 rounded-xl mx-auto mb-2 flex items-center justify-center text-white text-lg font-bold"
                    style={{ backgroundColor: m.color }}
                  >
                    <CountUp value={m.value} delay={0.4 + i * 0.15} />
                  </div>
                  <span className="text-xs text-ash">{m.label}</span>
                </motion.div>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
              className="mt-3 pt-3 border-t border-mist text-center"
            >
              <span className="font-mono text-lg font-bold text-ink">
                <CountUp value={59} delay={0.7} />
              </span>
              <span className="text-xs text-ash ml-1">total candidates</span>
            </motion.div>
          </div>
        )}

        {feature.id === "ai-screening" && feature.candidates && (
          <div className="space-y-2">
            {feature.candidates.map((c, idx) => (
              <motion.div
                key={c.initials}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 + idx * 0.15 }}
                className={`flex items-center justify-between p-3 rounded-lg ${
                  idx === 0 ? "bg-accent-muted border border-accent/20" : "bg-cloud/50"
                }`}
              >
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-white border border-mist flex items-center justify-center text-xs font-medium text-charcoal">
                    {idx + 1}
                  </div>
                  <span className="text-sm text-charcoal">{c.role}</span>
                </div>
                <div className="flex items-center gap-2">
                  <AnimatedProgressRing
                    value={c.score}
                    size={36}
                    strokeWidth={3}
                    color={c.score >= 95 ? "var(--verify)" : "var(--accent)"}
                    delay={0.5 + idx * 0.15}
                    showValue={false}
                    animated={isInView}
                  />
                  <span className={`font-mono text-sm font-bold ${c.score >= 95 ? "text-verify" : "text-ink"}`}>
                    <CountUp value={c.score} suffix="%" delay={0.5 + idx * 0.15} />
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {feature.id === "pipeline-management" && feature.stages && (
          <div className="flex items-end justify-between gap-2 h-24">
            {feature.stages.map((s, idx) => (
              <div key={s.name} className="flex-1 text-center">
                <motion.div
                  initial={{ height: 0 }}
                  animate={isInView ? { height: `${Math.min(s.count * 1.5, 100)}%` } : { height: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className={`mx-auto w-full max-w-[40px] rounded-t-lg ${
                    idx === feature.stages.length - 1 ? "bg-verify" : "bg-ink"
                  }`}
                />
                <span className="text-[10px] text-ash mt-1 block">{s.name}</span>
                <span className="font-mono text-xs font-bold text-ink">
                  <CountUp value={s.count} delay={0.4 + idx * 0.1} />
                </span>
              </div>
            ))}
          </div>
        )}

        {feature.id === "auto-updates" && feature.updates && (
          <div className="space-y-2">
            {feature.updates.map((u, idx) => (
              <motion.div
                key={u.status}
                initial={{ opacity: 0, x: -10 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 + idx * 0.15 }}
                className="flex items-center gap-3 p-2.5 rounded-lg bg-cloud/50"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ delay: 0.4 + idx * 0.15, type: "spring", stiffness: 400 }}
                  className={`w-2 h-2 rounded-full ${u.color}`}
                />
                <span className="text-sm text-charcoal flex-1">{u.status}</span>
                <span className="text-xs text-ash">{u.time}</span>
              </motion.div>
            ))}
            {/* Zero ghosted emphasis */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 }}
              className="mt-3 pt-3 border-t border-mist flex items-center justify-center gap-2"
            >
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-6 h-6 rounded-full bg-verify-muted flex items-center justify-center"
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--verify)" strokeWidth="2">
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                  <path d="M22 4L12 14.01l-3-3" />
                </svg>
              </motion.div>
              <span className="text-sm text-charcoal">
                <span className="font-mono font-bold text-verify">0</span> ghosted candidates
              </span>
            </motion.div>
          </div>
        )}

        {/* Glass Box AI - Explainable screening */}
        {feature.id === "glass-box-ai" && "criteria" in feature && (
          <div className="p-4 rounded-xl bg-cloud/50">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.3 }}
              className="flex items-center justify-between mb-4"
            >
              <span className="text-sm text-ash">Match Score</span>
              <span className="font-mono text-2xl font-bold text-accent">
                <CountUp value={(feature as { matchScore: number }).matchScore} suffix="%" delay={0.4} />
              </span>
            </motion.div>
            <div className="space-y-2">
              {(feature as { criteria: Array<{ skill: string; requirement: string; met: boolean }> }).criteria.map((c, idx) => (
                <motion.div
                  key={c.skill}
                  initial={{ opacity: 0, x: -15 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + idx * 0.1 }}
                  className="flex items-center gap-2 text-sm"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ delay: 0.5 + idx * 0.1, type: "spring", stiffness: 400 }}
                  >
                    {c.met ? (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--verify)" strokeWidth="2.5">
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                    ) : (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--caution)" strokeWidth="2.5">
                        <path d="M12 9v4M12 17h.01" />
                        <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
                      </svg>
                    )}
                  </motion.div>
                  <span className={c.met ? "text-charcoal" : "text-ash"}>{c.skill}</span>
                  <span className="text-xs text-ash ml-auto">({c.requirement})</span>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Smart Scheduling - Calendar integration */}
        {feature.id === "smart-scheduling" && "slots" in feature && (
          <div className="p-4 rounded-xl bg-cloud/50">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="flex items-center gap-2 mb-3"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2">
                <rect x="3" y="4" width="18" height="18" rx="2" />
                <path d="M16 2v4M8 2v4M3 10h18" />
              </svg>
              <span className="text-sm text-charcoal font-medium">Available Slots Found</span>
            </motion.div>
            <div className="space-y-2">
              {(feature as { slots: Array<{ day: string; time: string; available: boolean }> }).slots.map((s, idx) => (
                <motion.div
                  key={`${s.day}-${s.time}`}
                  initial={{ opacity: 0, x: -15 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + idx * 0.12 }}
                  className="flex items-center justify-between p-2.5 rounded-lg bg-white border border-mist"
                >
                  <span className="text-sm text-charcoal">{s.day} {s.time}</span>
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ delay: 0.5 + idx * 0.12, type: "spring", stiffness: 400 }}
                    className="flex items-center gap-1 text-verify"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    <span className="text-xs">All available</span>
                  </motion.div>
                </motion.div>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 }}
              className="mt-3 pt-3 border-t border-mist flex items-center justify-between"
            >
              <span className="text-xs text-ash">Synced: Google, Outlook</span>
              <span className="text-sm text-accent font-medium">
                <CountUp value={(feature as { hoursSaved: number }).hoursSaved} delay={0.9} /> hrs/week saved
              </span>
            </motion.div>
          </div>
        )}

        {/* Candidate Portal - Self-service tracking */}
        {feature.id === "candidate-portal" && "portalStages" in feature && (
          <div className="p-4 rounded-xl bg-cloud/50">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-xs text-ash mb-3 font-mono"
            >
              candidate.clarion.app/xyz123
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.4 }}
              className="mb-4"
            >
              <span className="text-sm text-charcoal font-medium">Status: Interview Scheduled</span>
            </motion.div>
            <div className="flex items-center justify-between mb-4">
              {(feature as { portalStages: Array<{ name: string; active: boolean; completed: boolean }> }).portalStages.map((stage, idx) => (
                <div key={stage.name} className="flex-1 flex flex-col items-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ delay: 0.5 + idx * 0.1, type: "spring", stiffness: 300 }}
                    className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                      stage.active
                        ? "border-accent bg-accent"
                        : stage.completed
                        ? "border-verify bg-verify"
                        : "border-mist bg-white"
                    }`}
                  >
                    {stage.completed && (
                      <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                    )}
                  </motion.div>
                  <span className="text-[10px] text-ash mt-1">{stage.name}</span>
                  {idx < 3 && (
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={isInView ? { scaleX: 1 } : {}}
                      transition={{ delay: 0.6 + idx * 0.1 }}
                      className={`absolute h-0.5 w-full ${stage.completed ? "bg-verify" : "bg-mist"}`}
                      style={{ left: "50%", top: "8px", width: "calc(100% - 16px)", transformOrigin: "left" }}
                    />
                  )}
                </div>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.9 }}
              className="pt-3 border-t border-mist flex items-center justify-center gap-2"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--verify)" strokeWidth="2">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
              </svg>
              <span className="text-sm text-charcoal">
                <span className="font-mono font-bold text-verify">-<CountUp value={(feature as { inboxReduction: number }).inboxReduction} delay={1} />%</span> inbox volume
              </span>
            </motion.div>
          </div>
        )}

        {/* Team Collaboration - Comments and scorecards */}
        {feature.id === "team-collaboration" && "comments" in feature && (
          <div className="p-4 rounded-xl bg-cloud/50">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="flex items-center gap-2 mb-3"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--charcoal)" strokeWidth="2">
                <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
              </svg>
              <span className="text-sm text-charcoal font-medium">Comments on Sarah Chen</span>
            </motion.div>
            <div className="space-y-2">
              {(feature as { comments: Array<{ author: string; text: string; positive: boolean }> }).comments.map((c, idx) => (
                <motion.div
                  key={c.author}
                  initial={{ opacity: 0, x: -15 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + idx * 0.15 }}
                  className="flex items-start gap-2 p-2 rounded-lg bg-white"
                >
                  <div className="w-6 h-6 rounded-full bg-ink text-white flex items-center justify-center text-xs font-medium">
                    {c.author[0]}
                  </div>
                  <div className="flex-1">
                    <span className="text-xs text-accent">@{c.author}</span>
                    <p className="text-sm text-charcoal">{c.text}</p>
                  </div>
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ delay: 0.5 + idx * 0.15, type: "spring", stiffness: 400 }}
                  >
                    {c.positive ? (
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--verify)" strokeWidth="2.5">
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                    ) : (
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--caution)" strokeWidth="2.5">
                        <path d="M12 9v4M12 17h.01" />
                      </svg>
                    )}
                  </motion.div>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -15 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.7 }}
                className="flex items-center gap-2 p-2 rounded-lg border border-dashed border-mist text-ash"
              >
                <span className="text-xs">@You: Add your feedback...</span>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.85 }}
              className="mt-3 pt-3 border-t border-mist flex items-center justify-between"
            >
              <div className="flex items-center gap-2">
                <span className="text-sm text-charcoal">Scorecard:</span>
                <span className="font-mono font-bold text-ink">
                  <AnimatedCounter value={(feature as { scorecard: number }).scorecard} decimals={1} delay={0.9} />/5
                </span>
              </div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="px-3 py-1 rounded-full bg-accent text-white text-xs font-medium"
              >
                Submit
              </motion.div>
            </motion.div>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export function Features() {
  return (
    <section id="features" className="py-24 lg:py-32 bg-cloud relative">
      <Container>
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="caption text-stone inline-flex items-center gap-2 mb-4">
              <span className="w-6 h-px bg-accent" />
              Features
            </span>
            <h2 className="font-display display-md text-ink mb-5">
              Everything you need to{" "}
              <span className="text-accent-gradient">hire smarter.</span>
            </h2>
            <p className="body-lg text-stone">
              Eight powerful features that transform how you manage the entire hiring workflow.
            </p>
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {features.map((feature, i) => (
            <FeatureCard key={feature.id} feature={feature} index={i} />
          ))}
        </div>
      </Container>
    </section>
  );
}
