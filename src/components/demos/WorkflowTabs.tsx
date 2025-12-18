"use client";

import { motion } from "framer-motion";

export type WorkflowStage = "upload" | "screening" | "pipeline" | "updates";

interface WorkflowTab {
  id: WorkflowStage;
  label: string;
  activeLabel: string;
  icon: React.ReactNode;
}

const tabs: WorkflowTab[] = [
  {
    id: "upload",
    label: "Upload",
    activeLabel: "Upload & Capture",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
        <polyline points="17,8 12,3 7,8" />
        <line x1="12" y1="3" x2="12" y2="15" />
      </svg>
    ),
  },
  {
    id: "screening",
    label: "AI Screening",
    activeLabel: "AI Parses & Matches",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
      </svg>
    ),
  },
  {
    id: "pipeline",
    label: "Pipeline",
    activeLabel: "Review & Manage",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="7" height="9" rx="1" />
        <rect x="14" y="3" width="7" height="5" rx="1" />
        <rect x="14" y="12" width="7" height="9" rx="1" />
        <rect x="3" y="16" width="7" height="5" rx="1" />
      </svg>
    ),
  },
  {
    id: "updates",
    label: "Updates",
    activeLabel: "Hire & Notify",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M22 17H2a3 3 0 003 3h14a3 3 0 003-3zM6 17V5a2 2 0 012-2h8a2 2 0 012 2v12" />
        <path d="M10 7h4M10 11h4" />
      </svg>
    ),
  },
];

interface WorkflowTabsProps {
  activeTab: WorkflowStage;
  onTabChange: (tab: WorkflowStage) => void;
}

export function WorkflowTabs({ activeTab, onTabChange }: WorkflowTabsProps) {
  return (
    <div className="relative">
      {/* Desktop: Horizontal tabs with connecting line */}
      <div className="hidden md:block">
        {/* Connecting line */}
        <div className="absolute top-1/2 left-[8%] right-[8%] h-px bg-mist -translate-y-1/2 z-0" />

        {/* Progress line */}
        <motion.div
          className="absolute top-1/2 left-[8%] h-px bg-accent -translate-y-1/2 z-0"
          initial={{ width: 0 }}
          animate={{
            width: `${(tabs.findIndex((t) => t.id === activeTab) / (tabs.length - 1)) * 84}%`,
          }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        />

        <div className="flex justify-between relative z-10">
          {tabs.map((tab, index) => {
            const isActive = tab.id === activeTab;
            const isPast = tabs.findIndex((t) => t.id === activeTab) > index;

            return (
              <button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                className="flex flex-col items-center gap-2 group"
              >
                {/* Circle with icon */}
                <motion.div
                  className={`relative w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 ${
                    isActive
                      ? "bg-ink text-white shadow-lg"
                      : isPast
                      ? "bg-accent text-white"
                      : "bg-white text-charcoal border border-mist group-hover:border-ash"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {tab.icon}
                  {/* Step number badge */}
                  <span
                    className={`absolute -top-1 -right-1 w-5 h-5 rounded-full text-[10px] font-bold flex items-center justify-center ${
                      isActive || isPast
                        ? "bg-accent text-white"
                        : "bg-cloud text-charcoal"
                    }`}
                  >
                    {index + 1}
                  </span>
                </motion.div>

                {/* Label */}
                <div className="text-center">
                  <p
                    className={`text-sm font-medium transition-colors ${
                      isActive ? "text-ink" : "text-stone"
                    }`}
                  >
                    {isActive ? tab.activeLabel : tab.label}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Mobile: Compact horizontal scroll */}
      <div className="md:hidden overflow-x-auto pb-2 -mx-4 px-4">
        <div className="flex gap-2 min-w-max">
          {tabs.map((tab, index) => {
            const isActive = tab.id === activeTab;

            return (
              <motion.button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-full transition-all ${
                  isActive
                    ? "bg-ink text-white"
                    : "bg-cloud text-charcoal hover:bg-mist"
                }`}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-xs font-bold">{index + 1}</span>
                <span className="text-sm font-medium">{tab.label}</span>
              </motion.button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// Progress dots for bottom of demo area
export function WorkflowProgress({
  activeIndex,
  total = 4,
}: {
  activeIndex: number;
  total?: number;
}) {
  return (
    <div className="flex items-center justify-center gap-2">
      {Array.from({ length: total }).map((_, i) => (
        <motion.div
          key={i}
          className={`w-2 h-2 rounded-full transition-colors ${
            i === activeIndex ? "bg-accent" : i < activeIndex ? "bg-accent/50" : "bg-mist"
          }`}
          animate={{
            scale: i === activeIndex ? 1.2 : 1,
          }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
        />
      ))}
      <span className="ml-2 text-xs text-ash">
        {activeIndex + 1} of {total}
      </span>
    </div>
  );
}
