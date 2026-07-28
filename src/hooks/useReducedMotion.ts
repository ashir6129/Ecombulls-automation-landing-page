import { useState, useEffect } from "react";

/**
 * Custom hook to detect user preference for reduced motion.
 * Ensures accessibility compliance across all animated components.
 */
export function useReducedMotion(): boolean {
  const [shouldReduceMotion, setShouldReduceMotion] = useState<boolean>(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setShouldReduceMotion(mediaQuery.matches);

    const handleChange = (event: MediaQueryListEvent) => {
      setShouldReduceMotion(event.matches);
    };

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", handleChange);
      return () => mediaQuery.removeEventListener("change", handleChange);
    } else {
      // Fallback for older browsers
      mediaQuery.addListener(handleChange);
      return () => mediaQuery.removeListener(handleChange);
    }
  }, []);

  return shouldReduceMotion;
}
