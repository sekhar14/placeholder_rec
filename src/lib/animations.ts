// Animation timing constants and spring configurations for Framer Motion

export const ANIMATION_CONFIG = {
  // Durations (seconds)
  duration: {
    fast: 0.2,
    normal: 0.4,
    slow: 0.6,
    slower: 0.8,
  },

  // Stagger delays between children
  stagger: {
    fast: 0.08,
    normal: 0.15,
    slow: 0.25,
  },

  // Spring configurations
  spring: {
    bouncy: { type: "spring" as const, stiffness: 400, damping: 25 },
    gentle: { type: "spring" as const, stiffness: 100, damping: 20 },
    smooth: { type: "spring" as const, stiffness: 50, damping: 15 },
    snappy: { type: "spring" as const, stiffness: 300, damping: 30 },
  },

  // Easing curves
  ease: {
    out: [0.16, 1, 0.3, 1] as const,
    inOut: [0.65, 0, 0.35, 1] as const,
    bounce: [0.68, -0.55, 0.265, 1.55] as const,
  },
} as const;

// Reusable animation variants
export const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: ANIMATION_CONFIG.duration.normal },
  },
};

export const fadeInRight = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: ANIMATION_CONFIG.duration.normal },
  },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: ANIMATION_CONFIG.spring.bouncy,
  },
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: ANIMATION_CONFIG.stagger.normal,
      delayChildren: 0.2,
    },
  },
};

export const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: ANIMATION_CONFIG.spring.gentle,
  },
};

// Counter animation config (for useSpring)
export const counterSpring = {
  stiffness: 100,
  damping: 30,
  mass: 1,
};

// Progress bar/ring animation
export const progressTransition = {
  duration: 1.2,
  ease: ANIMATION_CONFIG.ease.out,
};
