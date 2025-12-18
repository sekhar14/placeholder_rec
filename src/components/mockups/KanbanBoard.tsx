"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { CandidateCardMini } from "./CandidateCard";
import { CountUp } from "@/components/animations";

interface KanbanColumn {
  id: string;
  label: string;
  count: number;
  cards: Array<{ initials: string; role: string; score?: number }>;
  color?: string;
}

const defaultColumns: KanbanColumn[] = [
  {
    id: "applied",
    label: "Applied",
    count: 12,
    cards: [
      { initials: "PS", role: "Sr. Frontend Dev", score: 94 },
      { initials: "RV", role: "Full Stack Eng", score: 89 },
      { initials: "AD", role: "React Developer", score: 86 },
    ],
  },
  {
    id: "screening",
    label: "Screening",
    count: 8,
    cards: [
      { initials: "MK", role: "Backend Dev", score: 91 },
      { initials: "JL", role: "DevOps Engineer", score: 88 },
    ],
  },
  {
    id: "interview",
    label: "Interview",
    count: 4,
    cards: [{ initials: "SK", role: "Tech Lead", score: 96 }],
  },
  {
    id: "offer",
    label: "Offer",
    count: 2,
    cards: [{ initials: "NP", role: "Sr. Engineer", score: 95 }],
    color: "verify",
  },
];

interface KanbanBoardProps {
  columns?: KanbanColumn[];
  showDragDemo?: boolean;
  delay?: number;
}

export function KanbanBoard({
  columns = defaultColumns,
  showDragDemo = true,
  delay = 0,
}: KanbanBoardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [draggedCard, setDraggedCard] = useState<{
    from: number;
    to: number;
  } | null>(null);
  const [localColumns, setLocalColumns] = useState(columns);

  // Simulate card drag animation
  useEffect(() => {
    if (!showDragDemo || !isInView) return;

    const timer = setTimeout(() => {
      setDraggedCard({ from: 0, to: 1 });

      setTimeout(() => {
        setLocalColumns((prev) => {
          const newCols = [...prev];
          if (newCols[0].cards.length > 0) {
            const card = newCols[0].cards[0];
            newCols[0] = {
              ...newCols[0],
              cards: newCols[0].cards.slice(1),
              count: newCols[0].count - 1,
            };
            newCols[1] = {
              ...newCols[1],
              cards: [card, ...newCols[1].cards],
              count: newCols[1].count + 1,
            };
          }
          return newCols;
        });
        setDraggedCard(null);
      }, 800);
    }, delay * 1000 + 2000);

    return () => clearTimeout(timer);
  }, [showDragDemo, isInView, delay]);

  return (
    <div ref={ref} className="overflow-x-auto pb-2">
      <div className="flex gap-3 min-w-[500px]">
        {localColumns.map((column, colIndex) => (
          <motion.div
            key={column.id}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: delay + colIndex * 0.15, duration: 0.4 }}
            className="flex-1 min-w-[120px]"
          >
            {/* Column Header */}
            <div className="flex items-center justify-between mb-2 px-1">
              <span className="text-xs font-medium text-charcoal">
                {column.label}
              </span>
              <span
                className={`text-xs font-mono font-bold px-1.5 py-0.5 rounded ${
                  column.color === "verify"
                    ? "bg-verify-muted text-verify"
                    : "bg-cloud text-ink"
                }`}
              >
                <CountUp value={column.count} delay={delay + colIndex * 0.15} />
              </span>
            </div>

            {/* Column Content */}
            <div
              className={`bg-cloud/50 rounded-xl p-2 min-h-[140px] border border-transparent transition-colors ${
                draggedCard?.to === colIndex ? "border-accent/30 bg-accent-muted/30" : ""
              }`}
            >
              <AnimatePresence mode="popLayout">
                <div className="space-y-2">
                  {column.cards.map((card, cardIndex) => (
                    <CandidateCardMini
                      key={`${column.id}-${card.initials}`}
                      initials={card.initials}
                      role={card.role}
                      score={card.score}
                      delay={delay + colIndex * 0.15 + cardIndex * 0.1}
                    />
                  ))}
                </div>
              </AnimatePresence>

              {column.cards.length === 0 && (
                <div className="h-full flex items-center justify-center text-xs text-ash">
                  Drop here
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Drag indicator */}
      {draggedCard && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-3 text-center"
        >
          <span className="text-xs text-accent flex items-center justify-center gap-1">
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
            Moving to {localColumns[draggedCard.to].label}...
          </span>
        </motion.div>
      )}
    </div>
  );
}

// Simpler static version for feature cards
export function KanbanPreview({ delay = 0 }: { delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-20px" });

  const stages = [
    { name: "Applied", count: 59 },
    { name: "Screening", count: 24 },
    { name: "Interview", count: 8 },
    { name: "Offer", count: 2 },
  ];

  return (
    <div ref={ref} className="flex items-end justify-between gap-2 h-24">
      {stages.map((s, idx) => (
        <div key={s.name} className="flex-1 text-center">
          <motion.div
            initial={{ height: 0 }}
            animate={
              isInView
                ? { height: `${Math.min(s.count * 1.5, 100)}%` }
                : { height: 0 }
            }
            transition={{ duration: 0.5, delay: delay + idx * 0.1 }}
            className={`mx-auto w-full max-w-[40px] rounded-t-lg ${
              idx === stages.length - 1 ? "bg-verify" : "bg-ink"
            }`}
          />
          <span className="text-[10px] text-ash mt-1 block">{s.name}</span>
          <span className="font-mono text-xs font-bold text-ink">
            <CountUp value={s.count} delay={delay + idx * 0.1} />
          </span>
        </div>
      ))}
    </div>
  );
}
