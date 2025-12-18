"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { AnimatedProgressBar, AnimatedProgressRing, CountUp } from "@/components/animations";
import { CandidateCard } from "@/components/mockups";

const candidates = [
  { initials: "PS", role: "Sr. Frontend Developer", matchScore: 96, isTopMatch: true },
  { initials: "RV", role: "Full Stack Engineer", matchScore: 91 },
  { initials: "AD", role: "React Developer", matchScore: 87 },
  { initials: "MK", role: "Backend Developer", matchScore: 84 },
  { initials: "JL", role: "DevOps Engineer", matchScore: 79 },
];

export function AIScreeningStageDemo() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const [progress, setProgress] = useState(0);
  const [showCandidates, setShowCandidates] = useState(false);
  const [showBestMatch, setShowBestMatch] = useState(false);
  const [analyzePhase, setAnalyzePhase] = useState<"parsing" | "matching" | "ranking" | "done">("parsing");

  useEffect(() => {
    if (!isInView) return;

    const timers: NodeJS.Timeout[] = [];

    // Progress animation
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 2;
      });
    }, 40);

    // Phase transitions
    timers.push(setTimeout(() => setAnalyzePhase("matching"), 800));
    timers.push(setTimeout(() => setAnalyzePhase("ranking"), 1600));
    timers.push(setTimeout(() => {
      setAnalyzePhase("done");
      setShowCandidates(true);
    }, 2200));
    timers.push(setTimeout(() => setShowBestMatch(true), 3500));

    return () => {
      clearInterval(progressInterval);
      timers.forEach(clearTimeout);
    };
  }, [isInView]);

  const phaseLabels = {
    parsing: "Parsing resumes...",
    matching: "Matching against JD...",
    ranking: "Ranking candidates...",
    done: "Analysis complete!",
  };

  return (
    <div ref={ref} className="space-y-6">
      {/* AI Processing Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-2xl border border-mist p-6"
      >
        <div className="flex items-center gap-4 mb-4">
          {/* AI Icon */}
          <motion.div
            className="w-12 h-12 rounded-xl bg-ink flex items-center justify-center"
            animate={{
              boxShadow: analyzePhase !== "done"
                ? ["0 0 0 0 rgba(232,93,76,0)", "0 0 0 8px rgba(232,93,76,0.1)", "0 0 0 0 rgba(232,93,76,0)"]
                : "none",
            }}
            transition={{ duration: 1.5, repeat: analyzePhase !== "done" ? Infinity : 0 }}
          >
            <motion.svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="1.5"
              animate={{ rotate: analyzePhase !== "done" ? 360 : 0 }}
              transition={{ duration: 2, repeat: analyzePhase !== "done" ? Infinity : 0, ease: "linear" }}
            >
              <circle cx="12" cy="12" r="3" />
              <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
            </motion.svg>
          </motion.div>

          <div className="flex-1">
            <div className="flex items-center justify-between mb-1">
              <p className="text-sm font-medium text-ink">
                Analyzing <span className="font-mono">47</span> candidates
              </p>
              <motion.span
                key={analyzePhase}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                className={`text-xs font-medium ${
                  analyzePhase === "done" ? "text-verify" : "text-accent"
                }`}
              >
                {phaseLabels[analyzePhase]}
              </motion.span>
            </div>
            <AnimatedProgressBar
              value={progress}
              height={6}
              colorScheme={analyzePhase === "done" ? "verify" : "accent"}
              animated={isInView}
            />
          </div>
        </div>

        {/* Processing stats */}
        <div className="grid grid-cols-3 gap-4 pt-4 border-t border-mist">
          <div className="text-center">
            <p className="font-mono text-2xl font-bold text-ink">
              <CountUp value={47} delay={0.5} />
            </p>
            <p className="text-xs text-ash">Resumes parsed</p>
          </div>
          <div className="text-center">
            <p className="font-mono text-2xl font-bold text-ink">
              <CountUp value={20} delay={0.8} />+
            </p>
            <p className="text-xs text-ash">Dimensions matched</p>
          </div>
          <div className="text-center">
            <p className="font-mono text-2xl font-bold text-verify">
              <CountUp value={5} delay={1.1} />
            </p>
            <p className="text-xs text-ash">Top matches</p>
          </div>
        </div>
      </motion.div>

      {/* Candidate Results */}
      <AnimatePresence>
        {showCandidates && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-3"
          >
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm font-medium text-charcoal">Top Matches</p>
              <p className="text-xs text-ash">Ranked by AI match score</p>
            </div>

            {candidates.slice(0, 3).map((candidate, i) => (
              <motion.div
                key={candidate.initials}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.15 }}
              >
                <div
                  className={`flex items-center justify-between p-4 rounded-xl border transition-all ${
                    candidate.isTopMatch
                      ? "border-accent/30 bg-accent-muted"
                      : "border-mist bg-white"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-cloud flex items-center justify-center text-sm font-medium text-charcoal">
                      #{i + 1}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-ink">{candidate.role}</p>
                      <div className="flex items-center gap-2 mt-0.5">
                        <span className="text-xs text-ash">{candidate.initials}</span>
                        {candidate.isTopMatch && (
                          <span className="text-[10px] px-1.5 py-0.5 rounded bg-verify-muted text-verify font-medium">
                            Best Match
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    {/* Animated progress ring */}
                    <AnimatedProgressRing
                      value={candidate.matchScore}
                      size={48}
                      strokeWidth={4}
                      color={candidate.matchScore >= 90 ? "var(--verify)" : "var(--accent)"}
                      delay={0.3 + i * 0.15}
                      animated={isInView}
                    />
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Expandable indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-center pt-2"
            >
              <button className="text-xs text-accent hover:underline">
                View all 47 candidates →
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Best Match Badge */}
      <AnimatePresence>
        {showBestMatch && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className="flex items-center justify-center gap-3 px-6 py-3 rounded-full bg-verify-muted text-verify mx-auto w-fit"
          >
            <motion.div
              initial={{ rotate: -180, scale: 0 }}
              animate={{ rotate: 0, scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                <path d="M22 4L12 14.01l-3-3" />
              </svg>
            </motion.div>
            <span className="font-medium">
              Best match found: <span className="font-mono font-bold">96%</span> compatibility
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
