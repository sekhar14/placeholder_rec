"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { KanbanBoard } from "@/components/mockups";
import { CountUp } from "@/components/animations";

export function PipelineStageDemo() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        className="flex items-center justify-between"
      >
        <div>
          <h4 className="text-sm font-medium text-ink">Candidate Pipeline</h4>
          <p className="text-xs text-ash">Drag candidates between stages</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-cloud text-xs">
            <span className="font-mono font-bold text-ink">
              <CountUp value={59} delay={0.3} />
            </span>
            <span className="text-ash">total candidates</span>
          </div>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-ink text-white text-xs font-medium"
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
            Add Stage
          </motion.button>
        </div>
      </motion.div>

      {/* Kanban Board */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.2 }}
        className="bg-white rounded-2xl border border-mist p-4"
      >
        <KanbanBoard showDragDemo={isInView} delay={0.3} />
      </motion.div>

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.5 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-3"
      >
        {[
          { label: "Bulk Move", icon: "M5 12h14M12 5l7 7-7 7", count: null },
          { label: "Selected", icon: "M9 11l3 3L22 4M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11", count: 3 },
          { label: "Schedule", icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z", count: null },
          { label: "Export", icon: "M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3", count: null },
        ].map((action, i) => (
          <motion.button
            key={action.label}
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6 + i * 0.1 }}
            whileHover={{ scale: 1.02, backgroundColor: "var(--cloud)" }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-mist bg-white text-xs font-medium text-charcoal transition-colors"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d={action.icon} />
            </svg>
            {action.label}
            {action.count && (
              <span className="px-1.5 py-0.5 rounded bg-accent text-white text-[10px]">
                {action.count}
              </span>
            )}
          </motion.button>
        ))}
      </motion.div>

      {/* Bulk Action Demo */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 0.8 }}
        className="bg-cloud/50 rounded-xl p-4 border border-mist"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
              className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
              >
                <path d="M9 11l3 3L22 4" />
                <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
              </svg>
            </motion.div>
            <div>
              <p className="text-sm font-medium text-ink">
                <span className="font-mono">3</span> candidates selected
              </p>
              <p className="text-xs text-ash">Select more to perform bulk actions</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="px-3 py-1.5 rounded-lg bg-white border border-mist text-xs font-medium text-charcoal hover:border-ash transition-colors">
              Move to Interview
            </button>
            <button className="px-3 py-1.5 rounded-lg bg-accent text-white text-xs font-medium hover:bg-accent-dark transition-colors">
              Send Email
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
