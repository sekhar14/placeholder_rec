"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container, Button } from "@/components/ui";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled || isMobileMenuOpen
          ? "py-3 bg-white/95 backdrop-blur-md shadow-sm"
          : "py-5 bg-transparent"
      )}
    >
      <Container>
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 flex items-center justify-center">
              <div className="absolute inset-0 bg-ink rounded-xl transform rotate-6 group-hover:rotate-12 transition-transform duration-300" />
              <span className="relative text-white font-display text-xl font-bold">
                C
              </span>
            </div>
            <span className="font-display text-2xl text-ink tracking-tight">Clarion</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-stone hover:text-ink transition-colors duration-200 text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-ink/5 text-xs font-medium text-stone">
              <span className="w-1.5 h-1.5 rounded-full bg-verify animate-pulse" />
              For Recruiters
            </span>
            <Button variant="primary" size="sm" href="#cta">
              Get Early Access
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-ink"
            aria-label="Toggle menu"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {isMobileMenuOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <path d="M3 12h18M3 6h18M3 18h18" />
              )}
            </svg>
          </button>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden border-t border-mist mt-3"
            >
              <div className="pt-6 pb-6 flex flex-col gap-4 bg-white">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-charcoal hover:text-ink transition-colors duration-200 text-base font-medium py-2 px-1"
                  >
                    {link.label}
                  </a>
                ))}
                <div className="pt-4 flex flex-col gap-3 border-t border-mist">
                  <div className="flex items-center justify-center gap-2 py-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-verify animate-pulse" />
                    <span className="text-sm text-stone font-medium">For Recruiters</span>
                  </div>
                  <Button variant="primary" size="md" className="w-full" href="#cta">
                    Get Early Access
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </motion.header>
  );
}
