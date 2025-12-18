"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui";

export function Integrations() {
  return (
    <section className="py-20 bg-cloud relative overflow-hidden">
      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none">
        <div
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, var(--ink) 1px, transparent 0)`,
            backgroundSize: "32px 32px",
          }}
          className="w-full h-full"
        />
      </div>

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="caption text-stone inline-flex items-center gap-2 justify-center mb-4">
            <span className="w-6 h-px bg-accent" />
            Two Ways to Start
            <span className="w-6 h-px bg-accent" />
          </span>
          <h2 className="font-display heading-1 text-ink mb-4">
            Get candidates in. <span className="text-accent-gradient">Your way.</span>
          </h2>
          <p className="body-md text-stone max-w-xl mx-auto">
            Upload resumes directly or use our Chrome extension to capture profiles from anywhere on the web.
          </p>
        </motion.div>

        {/* Two Methods */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Upload Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="group"
          >
            <div className="card p-6 lg:p-8 h-full transition-all duration-300 hover:shadow-lg hover:border-stone/20">
              {/* Header */}
              <div className="flex items-start gap-4 mb-5">
                <div className="w-12 h-12 rounded-xl bg-accent-muted flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                    <polyline points="17,8 12,3 7,8" />
                    <line x1="12" y1="3" x2="12" y2="15" />
                  </svg>
                </div>
                <div>
                  <h3 className="heading-2 text-ink mb-1">Upload Resumes & JD</h3>
                  <p className="text-sm text-stone">Drag and drop to get started</p>
                </div>
              </div>

              {/* Upload Visual */}
              <div className="border-2 border-dashed border-mist rounded-xl p-6 text-center bg-cloud/30 group-hover:border-accent/30 transition-colors">
                <div className="w-12 h-12 rounded-full bg-white mx-auto mb-3 flex items-center justify-center shadow-sm">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.5">
                    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                    <polyline points="17,8 12,3 7,8" />
                    <line x1="12" y1="3" x2="12" y2="15" />
                  </svg>
                </div>
                <p className="text-sm text-charcoal font-medium mb-1">Drop resumes here</p>
                <p className="text-xs text-ash">PDF, DOC, DOCX supported</p>

                <div className="mt-4 pt-4 border-t border-mist">
                  <div className="flex items-center justify-center gap-4 text-xs text-ash">
                    <span className="flex items-center gap-1">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--verify)" strokeWidth="2">
                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                        <path d="M22 4L12 14.01l-3-3" />
                      </svg>
                      Bulk upload
                    </span>
                    <span className="flex items-center gap-1">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--verify)" strokeWidth="2">
                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                        <path d="M22 4L12 14.01l-3-3" />
                      </svg>
                      AI parsing
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Chrome Extension Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="group"
          >
            <div className="card p-6 lg:p-8 h-full transition-all duration-300 hover:shadow-lg hover:border-stone/20">
              {/* Header */}
              <div className="flex items-start gap-4 mb-5">
                <div className="w-12 h-12 rounded-xl bg-cloud flex items-center justify-center text-charcoal group-hover:bg-ink group-hover:text-white transition-all">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="10" />
                    <circle cx="12" cy="12" r="4" />
                    <line x1="21.17" y1="8" x2="12" y2="8" />
                    <line x1="3.95" y1="6.06" x2="8.54" y2="14" />
                    <line x1="10.88" y1="21.94" x2="15.46" y2="14" />
                  </svg>
                </div>
                <div>
                  <h3 className="heading-2 text-ink mb-1">Chrome Extension</h3>
                  <p className="text-sm text-stone">Capture from any website</p>
                </div>
              </div>

              {/* Extension Visual - Browser mockup */}
              <div className="rounded-xl overflow-hidden border border-mist bg-white">
                {/* Browser chrome */}
                <div className="bg-cloud px-3 py-2 flex items-center gap-2 border-b border-mist">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                  </div>
                  <div className="flex-1 flex items-center gap-2 ml-2">
                    <div className="flex-1 bg-white rounded px-2 py-1 text-[10px] text-ash truncate">
                      linkedin.com/in/candidate-profile
                    </div>
                    {/* Extension icon */}
                    <motion.div
                      initial={{ scale: 1 }}
                      whileHover={{ scale: 1.1 }}
                      className="w-6 h-6 rounded bg-accent flex items-center justify-center cursor-pointer"
                    >
                      <span className="text-white text-[10px] font-bold">C</span>
                    </motion.div>
                  </div>
                </div>

                {/* Extension popup */}
                <div className="p-3 relative">
                  {/* Simulated page content (blurred) */}
                  <div className="absolute inset-3 bg-cloud/50 rounded blur-sm" />

                  {/* Extension popup overlay */}
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                    className="relative ml-auto w-48 bg-white rounded-lg shadow-xl border border-mist p-3"
                  >
                    {/* Popup header */}
                    <div className="flex items-center gap-2 mb-3 pb-2 border-b border-mist">
                      <div className="w-5 h-5 rounded bg-accent flex items-center justify-center">
                        <span className="text-white text-[8px] font-bold">C</span>
                      </div>
                      <span className="text-xs font-medium text-ink">Clarion</span>
                    </div>

                    {/* Captured info */}
                    <div className="space-y-2 mb-3">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-cloud flex items-center justify-center text-[10px] font-medium text-charcoal">
                          JD
                        </div>
                        <div>
                          <p className="text-[10px] font-medium text-ink">John Doe</p>
                          <p className="text-[8px] text-ash">Sr. Engineer</p>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        <span className="px-1.5 py-0.5 rounded bg-cloud text-[8px] text-charcoal">React</span>
                        <span className="px-1.5 py-0.5 rounded bg-cloud text-[8px] text-charcoal">Node.js</span>
                        <span className="px-1.5 py-0.5 rounded bg-cloud text-[8px] text-charcoal">5+ yrs</span>
                      </div>
                    </div>

                    {/* Save button */}
                    <button className="w-full py-1.5 rounded-lg bg-accent text-white text-[10px] font-medium flex items-center justify-center gap-1">
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v11a2 2 0 01-2 2z" />
                        <path d="M17 21v-8H7v8M7 3v5h8" />
                      </svg>
                      Save to Pipeline
                    </button>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Visual Flow */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 flex items-center justify-center gap-4"
        >
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-mist text-sm text-charcoal">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2">
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M17 8l-5-5-5 5M12 3v12" />
              </svg>
              Upload
            </div>
            <span className="text-stone text-sm">or</span>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-mist text-sm text-charcoal">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--charcoal)" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <circle cx="12" cy="12" r="4" />
              </svg>
              Extension
            </div>
          </div>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--stone)" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-ink text-white text-sm font-medium">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="3" />
              <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83" />
            </svg>
            AI Screens & Ranks
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
