/**
 * Ecombulls Motion System Design Tokens
 * Centralized easing curves, durations, springs, and stagger rules.
 */

export const MOTION_TOKENS = {
  // Easing Curves
  easing: {
    // Premium ease-out signature for fast entrance and graceful settle
    signature: [0.16, 1, 0.3, 1] as const,
    // Smooth standard transition curve
    standard: [0.25, 0.1, 0.25, 1] as const,
    // Bounce spring response curve
    springy: [0.34, 1.56, 0.64, 1] as const,
  },

  // Animation Durations (seconds)
  duration: {
    instant: 0.15,
    fast: 0.3,
    normal: 0.5,
    slow: 0.8,
    deliberate: 1.2,
  },

  // Stagger Gaps (seconds)
  stagger: {
    tight: 0.06,
    normal: 0.1,
    relaxed: 0.18,
  },

  // Viewport threshold for ScrollTrigger / whileInView
  viewport: {
    once: true,
    amount: 0.2,
  },
} as const;

// Framer Motion Preset Variants
export const fadeInVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (custom: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: MOTION_TOKENS.duration.normal,
      ease: MOTION_TOKENS.easing.signature,
      delay: custom * MOTION_TOKENS.stagger.normal,
    },
  }),
};

export const scaleInVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: (custom: number = 0) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: MOTION_TOKENS.duration.fast,
      ease: MOTION_TOKENS.easing.signature,
      delay: custom * MOTION_TOKENS.stagger.tight,
    },
  }),
};

export const containerStaggerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: MOTION_TOKENS.stagger.normal,
      delayChildren: 0.1,
    },
  },
};
