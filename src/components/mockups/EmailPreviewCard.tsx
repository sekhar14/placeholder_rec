"use client";

import { motion } from "framer-motion";

type EmailStatus = "received" | "reviewing" | "interview" | "offer" | "rejected";

interface EmailPreviewCardProps {
  status: EmailStatus;
  candidateName?: string;
  timestamp: string;
  delay?: number;
  isAnimated?: boolean;
}

const emailConfig: Record<
  EmailStatus,
  { subject: string; preview: string; color: string; icon: React.ReactNode }
> = {
  received: {
    subject: "Application Received",
    preview: "Thank you for applying! We've received your application and will review it shortly...",
    color: "bg-verify",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
        <path d="M22 4L12 14.01l-3-3" />
      </svg>
    ),
  },
  reviewing: {
    subject: "Application Under Review",
    preview: "Good news! Your application is currently being reviewed by our hiring team...",
    color: "bg-sky-500",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 1v4M12 19v4" />
      </svg>
    ),
  },
  interview: {
    subject: "Interview Scheduled",
    preview: "Congratulations! We'd like to invite you for an interview. Please select a time...",
    color: "bg-violet-500",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
  },
  offer: {
    subject: "Offer Letter",
    preview: "We're thrilled to extend you an offer to join our team! Please review the attached...",
    color: "bg-verify",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
  },
  rejected: {
    subject: "Application Update",
    preview: "Thank you for your interest. After careful consideration, we've decided to move forward...",
    color: "bg-stone",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
};

export function EmailPreviewCard({
  status,
  candidateName = "Candidate",
  timestamp,
  delay = 0,
  isAnimated = true,
}: EmailPreviewCardProps) {
  const config = emailConfig[status];

  return (
    <motion.div
      initial={isAnimated ? { opacity: 0, x: 20 } : false}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="bg-white rounded-xl border border-mist p-3 shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="flex gap-3">
        {/* Status indicator */}
        <div
          className={`w-8 h-8 rounded-lg ${config.color} flex items-center justify-center text-white flex-shrink-0`}
        >
          {config.icon}
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-2 mb-1">
            <p className="text-sm font-medium text-ink truncate">
              {config.subject}
            </p>
            <span className="text-[10px] text-ash whitespace-nowrap">
              {timestamp}
            </span>
          </div>
          <p className="text-xs text-stone line-clamp-2">{config.preview}</p>
        </div>
      </div>
    </motion.div>
  );
}

// Timeline version for auto-updates demo
export function EmailTimeline({
  updates,
  delay = 0,
}: {
  updates: Array<{ status: EmailStatus; timestamp: string }>;
  delay?: number;
}) {
  return (
    <div className="relative">
      {/* Timeline line */}
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: "100%" }}
        transition={{ duration: 0.8, delay }}
        className="absolute left-4 top-0 w-0.5 bg-mist"
        style={{ originY: 0 }}
      />

      <div className="space-y-4">
        {updates.map((update, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: delay + 0.2 + i * 0.3, duration: 0.4 }}
            className="relative pl-10"
          >
            {/* Timeline dot */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                delay: delay + 0.1 + i * 0.3,
                type: "spring",
                stiffness: 400,
              }}
              className={`absolute left-2 top-4 w-4 h-4 rounded-full border-2 border-white ${emailConfig[update.status].color}`}
            />

            <EmailPreviewCard
              status={update.status}
              timestamp={update.timestamp}
              delay={delay + 0.3 + i * 0.3}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
