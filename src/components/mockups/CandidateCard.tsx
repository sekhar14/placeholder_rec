"use client";

import { motion } from "framer-motion";
import { ScoreRing } from "@/components/animations";
import { staggerItem } from "@/lib/animations";

interface CandidateCardProps {
  rank?: number;
  initials: string;
  role: string;
  matchScore: number;
  isTopMatch?: boolean;
  source?: "upload" | "extension";
  animateScore?: boolean;
  delay?: number;
  selected?: boolean;
  onSelect?: () => void;
  showCheckbox?: boolean;
  compact?: boolean;
}

export function CandidateCard({
  rank,
  initials,
  role,
  matchScore,
  isTopMatch = false,
  source,
  delay = 0,
  selected = false,
  onSelect,
  showCheckbox = false,
  compact = false,
}: CandidateCardProps) {
  const scoreColor = matchScore >= 90 ? "text-verify" : "text-ink";

  if (compact) {
    return (
      <motion.div
        variants={staggerItem}
        className={`flex items-center gap-2 p-2 rounded-lg transition-all ${
          isTopMatch
            ? "bg-accent-muted border border-accent/20"
            : "bg-cloud/50 border border-transparent"
        }`}
      >
        <div className="w-6 h-6 rounded-full bg-white border border-mist flex items-center justify-center text-[10px] font-medium text-charcoal">
          {rank || initials}
        </div>
        <span className="text-xs text-charcoal flex-1 truncate">{role}</span>
        <span className={`font-mono text-xs font-bold ${scoreColor}`}>
          {matchScore}%
        </span>
      </motion.div>
    );
  }

  return (
    <motion.div
      variants={staggerItem}
      initial="hidden"
      animate="visible"
      transition={{ delay }}
      className={`flex items-center justify-between p-3 rounded-xl border transition-all ${
        isTopMatch
          ? "border-accent/30 bg-accent-muted"
          : selected
          ? "border-accent bg-accent-muted"
          : "border-mist bg-white hover:border-ash"
      }`}
    >
      <div className="flex items-center gap-3">
        {showCheckbox && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: delay + 0.1, type: "spring", stiffness: 400 }}
            className={`w-4 h-4 rounded border-2 flex items-center justify-center cursor-pointer transition-colors ${
              selected
                ? "bg-accent border-accent"
                : "border-mist hover:border-ash"
            }`}
            onClick={onSelect}
          >
            {selected && (
              <motion.svg
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                width="10"
                height="10"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="3"
              >
                <path d="M20 6L9 17l-5-5" />
              </motion.svg>
            )}
          </motion.div>
        )}
        <div className="w-9 h-9 rounded-full bg-cloud flex items-center justify-center text-sm font-medium text-charcoal">
          {rank ? `#${rank}` : initials}
        </div>
        <div>
          <p className="text-sm font-medium text-ink">
            {rank ? `Candidate #${rank}` : initials}
          </p>
          <div className="flex items-center gap-2">
            <p className="text-xs text-ash">{role}</p>
            {source && (
              <span
                className={`text-[10px] px-1.5 py-0.5 rounded ${
                  source === "extension"
                    ? "bg-cloud text-charcoal"
                    : "bg-accent-muted text-accent"
                }`}
              >
                {source === "extension" ? "LinkedIn" : "Upload"}
              </span>
            )}
          </div>
        </div>
      </div>
      <div className="text-right flex items-center gap-2">
        <div>
          <p className={`font-mono text-sm font-semibold ${scoreColor}`}>
            {matchScore}%
          </p>
          <p className="text-xs text-ash">AI Match</p>
        </div>
        {isTopMatch && (
          <motion.div
            initial={{ scale: 0, rotate: -10 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: delay + 0.3, type: "spring", stiffness: 400 }}
            className="w-6 h-6 rounded-full bg-verify flex items-center justify-center"
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="3"
            >
              <path d="M20 6L9 17l-5-5" />
            </svg>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}

// Mini version for Kanban columns
export function CandidateCardMini({
  initials,
  role,
  score,
  delay = 0,
}: {
  initials: string;
  role: string;
  score?: number;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.3 }}
      className="bg-white border border-mist rounded-lg p-2 shadow-sm hover:shadow-md transition-shadow cursor-grab"
    >
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 rounded-full bg-cloud flex items-center justify-center text-[10px] font-medium text-charcoal">
          {initials}
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-xs font-medium text-ink truncate">{role}</p>
          {score && (
            <p className="text-[10px] text-ash font-mono">{score}% match</p>
          )}
        </div>
      </div>
    </motion.div>
  );
}
