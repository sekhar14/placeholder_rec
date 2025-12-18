"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui";
import {
  WorkflowTabs,
  WorkflowProgress,
  WorkflowStage,
  UploadStageDemo,
  AIScreeningStageDemo,
  PipelineStageDemo,
  AutoUpdatesStageDemo,
} from "@/components/demos";

const stageComponents: Record<WorkflowStage, React.ReactNode> = {
  upload: <UploadStageDemo />,
  screening: <AIScreeningStageDemo />,
  pipeline: <PipelineStageDemo />,
  updates: <AutoUpdatesStageDemo />,
};

const stageDescriptions: Record<WorkflowStage, { title: string; subtitle: string }> = {
  upload: {
    title: "Upload & Capture",
    subtitle: "Upload resumes directly or capture from LinkedIn with our Chrome extension",
  },
  screening: {
    title: "AI Parses & Matches",
    subtitle: "Our AI analyzes resumes and ranks candidates by fit against your job description",
  },
  pipeline: {
    title: "Review & Manage",
    subtitle: "Visual pipeline to track candidates through every stage of your hiring process",
  },
  updates: {
    title: "Hire & Notify",
    subtitle: "Automatic status updates keep every candidate informed - zero ghosting",
  },
};

export function InteractiveDemo() {
  const [activeTab, setActiveTab] = useState<WorkflowStage>("upload");
  const activeIndex = ["upload", "screening", "pipeline", "updates"].indexOf(activeTab);

  return (
    <section id="how-it-works" className="py-24 lg:py-32 bg-paper relative overflow-hidden">
      {/* Subtle Background */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(var(--ink) 1px, transparent 1px), linear-gradient(90deg, var(--ink) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Accent glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/3 rounded-full blur-[150px] pointer-events-none" />

      <Container>
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="caption text-stone inline-flex items-center gap-2 justify-center mb-4">
              <span className="w-6 h-px bg-accent" />
              See It In Action
              <span className="w-6 h-px bg-accent" />
            </span>
            <h2 className="font-display display-md text-ink mb-5">
              From upload to <span className="text-accent-gradient">hire</span>, visualized.
            </h2>
            <p className="body-lg text-stone">
              Click through each stage to see exactly how Clarion transforms your hiring workflow.
            </p>
          </motion.div>
        </div>

        {/* Workflow Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <WorkflowTabs activeTab={activeTab} onTabChange={setActiveTab} />
        </motion.div>

        {/* Stage Description */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="text-center mb-8"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="heading-2 text-ink mb-2">
                {stageDescriptions[activeTab].title}
              </h3>
              <p className="text-stone max-w-xl mx-auto">
                {stageDescriptions[activeTab].subtitle}
              </p>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Demo Area */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative"
        >
          <div className="card-elevated p-6 lg:p-8 min-h-[450px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                {stageComponents[activeTab]}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation arrows (desktop) */}
          <div className="hidden md:flex absolute top-1/2 -translate-y-1/2 -left-4 -right-4 justify-between pointer-events-none">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => {
                const stages: WorkflowStage[] = ["upload", "screening", "pipeline", "updates"];
                const currentIndex = stages.indexOf(activeTab);
                if (currentIndex > 0) {
                  setActiveTab(stages[currentIndex - 1]);
                }
              }}
              disabled={activeTab === "upload"}
              className={`w-10 h-10 rounded-full bg-white border border-mist shadow-sm flex items-center justify-center pointer-events-auto transition-opacity ${
                activeTab === "upload" ? "opacity-30 cursor-not-allowed" : "hover:border-ash"
              }`}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => {
                const stages: WorkflowStage[] = ["upload", "screening", "pipeline", "updates"];
                const currentIndex = stages.indexOf(activeTab);
                if (currentIndex < stages.length - 1) {
                  setActiveTab(stages[currentIndex + 1]);
                }
              }}
              disabled={activeTab === "updates"}
              className={`w-10 h-10 rounded-full bg-white border border-mist shadow-sm flex items-center justify-center pointer-events-auto transition-opacity ${
                activeTab === "updates" ? "opacity-30 cursor-not-allowed" : "hover:border-ash"
              }`}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </motion.button>
          </div>
        </motion.div>

        {/* Progress indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="mt-6"
        >
          <WorkflowProgress activeIndex={activeIndex} />
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-cloud border border-mist">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="var(--verify)"
              strokeWidth="2"
            >
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
              <path d="M22 4L12 14.01l-3-3" />
            </svg>
            <span className="text-sm text-charcoal">
              Get started in <span className="font-mono font-bold text-ink">under 2 minutes</span>
            </span>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
