"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { CountUp } from "@/components/animations";

const fileTypes = [
  { name: "Resume_John.pdf", type: "pdf" },
  { name: "CV_Sarah.docx", type: "docx" },
  { name: "Resume_Mike.pdf", type: "pdf" },
  { name: "Profile_Anna.pdf", type: "pdf" },
];

export function UploadStageDemo() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const [uploadedFiles, setUploadedFiles] = useState<typeof fileTypes>([]);
  const [uploadCount, setUploadCount] = useState(0);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    if (!isInView) return;

    // Simulate file uploads
    const timers: NodeJS.Timeout[] = [];

    fileTypes.forEach((file, i) => {
      timers.push(
        setTimeout(() => {
          setUploadedFiles((prev) => [...prev, file]);
          setUploadCount((prev) => prev + 12); // Simulate bulk upload count
        }, 600 + i * 400)
      );
    });

    // Show success message
    timers.push(
      setTimeout(() => {
        setShowSuccess(true);
      }, 600 + fileTypes.length * 400 + 300)
    );

    return () => timers.forEach(clearTimeout);
  }, [isInView]);

  return (
    <div ref={ref} className="space-y-6">
      {/* Drop Zone */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="border-2 border-dashed border-mist rounded-2xl p-8 text-center bg-cloud/30 relative overflow-hidden"
      >
        {/* Animated border pulse */}
        <motion.div
          className="absolute inset-0 border-2 border-dashed border-accent rounded-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        />

        {/* Upload icon */}
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="w-16 h-16 rounded-full bg-white mx-auto mb-4 flex items-center justify-center shadow-sm"
        >
          <motion.svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="var(--accent)"
            strokeWidth="1.5"
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
            <polyline points="17,8 12,3 7,8" />
            <line x1="12" y1="3" x2="12" y2="15" />
          </motion.svg>
        </motion.div>

        <p className="text-sm font-medium text-charcoal mb-1">
          Drop resumes here or click to browse
        </p>
        <p className="text-xs text-ash">PDF, DOC, DOCX supported • Bulk upload enabled</p>

        {/* Upload counter */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-4 pt-4 border-t border-mist"
        >
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white shadow-sm">
            <div className="flex items-center gap-2">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--verify)"
                strokeWidth="2"
              >
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                <path d="M22 4L12 14.01l-3-3" />
              </svg>
              <span className="font-mono text-lg font-bold text-ink">
                <CountUp value={47} />
              </span>
              <span className="text-sm text-stone">resumes uploaded</span>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Two input methods */}
      <div className="grid md:grid-cols-2 gap-4">
        {/* Uploaded Files List */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-xl border border-mist p-4"
        >
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 rounded-lg bg-accent-muted flex items-center justify-center">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--accent)"
                strokeWidth="2"
              >
                <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                <path d="M14 2v6h6" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-medium text-ink">Direct Upload</p>
              <p className="text-xs text-ash">Bulk resume import</p>
            </div>
          </div>

          <div className="space-y-2 min-h-[100px]">
            <AnimatePresence>
              {uploadedFiles.map((file, i) => (
                <motion.div
                  key={file.name}
                  initial={{ opacity: 0, x: -20, height: 0 }}
                  animate={{ opacity: 1, x: 0, height: "auto" }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-center gap-2 p-2 rounded-lg bg-cloud/50"
                >
                  <div
                    className={`w-6 h-6 rounded flex items-center justify-center text-[8px] font-bold text-white ${
                      file.type === "pdf" ? "bg-red-500" : "bg-blue-500"
                    }`}
                  >
                    {file.type.toUpperCase()}
                  </div>
                  <span className="text-xs text-charcoal flex-1 truncate">
                    {file.name}
                  </span>
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring" }}
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="var(--verify)"
                      strokeWidth="2"
                    >
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                      <path d="M22 4L12 14.01l-3-3" />
                    </svg>
                  </motion.div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Chrome Extension */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-xl border border-mist p-4"
        >
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 rounded-lg bg-cloud flex items-center justify-center">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--charcoal)"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="10" />
                <circle cx="12" cy="12" r="4" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-medium text-ink">Chrome Extension</p>
              <p className="text-xs text-ash">Capture from LinkedIn</p>
            </div>
          </div>

          {/* Mini browser mockup */}
          <div className="rounded-lg border border-mist overflow-hidden">
            <div className="bg-cloud px-2 py-1.5 flex items-center gap-1.5 border-b border-mist">
              <div className="flex gap-1">
                <div className="w-2 h-2 rounded-full bg-red-400" />
                <div className="w-2 h-2 rounded-full bg-yellow-400" />
                <div className="w-2 h-2 rounded-full bg-green-400" />
              </div>
              <div className="flex-1 text-[9px] text-ash px-2 py-0.5 bg-white rounded truncate">
                linkedin.com/in/profile
              </div>
              <motion.div
                className="w-5 h-5 rounded bg-accent flex items-center justify-center"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <span className="text-white text-[8px] font-bold">C</span>
              </motion.div>
            </div>
            <div className="p-3 bg-cloud/30 h-[68px] flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-verify-muted text-verify text-xs font-medium"
              >
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                  <path d="M22 4L12 14.01l-3-3" />
                </svg>
                12 captured via extension
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Success message */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-verify-muted text-verify text-sm font-medium mx-auto w-fit"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
              <path d="M22 4L12 14.01l-3-3" />
            </svg>
            All candidates ready for AI screening
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
