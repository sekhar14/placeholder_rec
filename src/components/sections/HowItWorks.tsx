"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui";

const candidateSteps = [
  {
    step: 1,
    title: "Take AI Challenges",
    description: "Complete adaptive micro-challenges. AI generates questions based on your claimed skills and experience level.",
    aiLabel: "AI-Generated",
  },
  {
    step: 2,
    title: "Get AI-Verified",
    description: "Receive your verified skill profile with detailed scores. AI evaluates not just answers, but your problem-solving approach.",
    aiLabel: "AI-Analyzed",
  },
  {
    step: 3,
    title: "Match & Feedback",
    description: "AI matches you to roles across 20+ dimensions. Even if not selected, receive a personalized Growth Report.",
    aiLabel: "AI-Matched",
  },
];

const companySteps = [
  {
    step: 1,
    title: "Post & Quality Check",
    description: "Post your role. AI scores your job description for clarity and flags issues that reduce candidate quality.",
    aiLabel: "AI-Scored",
  },
  {
    step: 2,
    title: "AI Screens & Ranks",
    description: "AI filters by verified skills and intent signals. Review anonymous profiles ranked by technical and culture fit.",
    aiLabel: "AI-Ranked",
  },
  {
    step: 3,
    title: "Interview Best Fits",
    description: "Book interviews with bias-free, pre-verified candidates. AI provides suggested questions based on skill gaps.",
    aiLabel: "AI-Assisted",
  },
];

export function HowItWorks() {
  const [activeTab, setActiveTab] = useState<"candidates" | "companies">("candidates");
  const steps = activeTab === "candidates" ? candidateSteps : companySteps;

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Subtle Background */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(var(--ink) 1px, transparent 1px), linear-gradient(90deg, var(--ink) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <Container>
        {/* Editorial Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="caption text-stone inline-flex items-center gap-2 justify-center mb-4">
              <span className="w-6 h-px bg-accent" />
              AI-Powered Process
              <span className="w-6 h-px bg-accent" />
            </span>
            <h2 className="font-display heading-1 text-ink mb-5">
              How <span className="text-accent-gradient">AI</span> Works For You
            </h2>
            <p className="body-md text-stone max-w-xl mx-auto">
              Three AI-driven steps that transform how you find or fill roles—with transparency at every stage.
            </p>
          </motion.div>
        </div>

        {/* Tab Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex justify-center mb-16"
        >
          <div className="inline-flex p-1 rounded-full bg-cloud border border-mist">
            <button
              onClick={() => setActiveTab("candidates")}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${
                activeTab === "candidates"
                  ? "bg-ink text-white shadow-sm"
                  : "text-stone hover:text-ink"
              }`}
            >
              For Candidates
            </button>
            <button
              onClick={() => setActiveTab("companies")}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${
                activeTab === "companies"
                  ? "bg-ink text-white shadow-sm"
                  : "text-stone hover:text-ink"
              }`}
            >
              For Companies
            </button>
          </div>
        </motion.div>

        {/* Horizontal Steps */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="max-w-5xl mx-auto"
          >
            <div className="grid md:grid-cols-3 gap-8 relative">
              {/* Connecting Line (Desktop) */}
              <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-px bg-mist" />

              {steps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="text-center relative"
                >
                  {/* Step Number with AI Badge */}
                  <div className="relative mx-auto mb-6">
                    <div className="w-20 h-20 rounded-full bg-white border-2 border-mist flex items-center justify-center relative z-10">
                      <span className="font-display text-3xl text-ink">{step.step}</span>
                    </div>
                    {/* AI Label */}
                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-full bg-ink text-white text-xs font-medium whitespace-nowrap">
                      {step.aiLabel}
                    </span>
                  </div>

                  {/* Arrow (Mobile) */}
                  {index < steps.length - 1 && (
                    <div className="md:hidden flex justify-center my-4">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--mist)" strokeWidth="2">
                        <path d="M12 5v14M5 12l7 7 7-7" />
                      </svg>
                    </div>
                  )}

                  <h3 className="font-display heading-3 text-ink mb-2">{step.title}</h3>
                  <p className="text-stone text-sm leading-relaxed max-w-xs mx-auto">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Decorative Editorial Number */}
        <div className="absolute -bottom-20 -right-10 font-display text-[20rem] text-mist/50 italic leading-none pointer-events-none select-none hidden lg:block">
          3
        </div>
      </Container>
    </section>
  );
}
