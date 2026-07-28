import { useState, useEffect, useRef } from "react";

interface UseCountUpOptions {
  end: number;
  duration?: number; // in seconds
  decimals?: number;
  prefix?: string;
  suffix?: string;
}

/**
 * Reusable animated counter hook using signature ease-out curve.
 * Triggers when element scrolls into view via IntersectionObserver.
 */
export function useCountUp({
  end,
  duration = 2,
  decimals = 0,
  prefix = "",
  suffix = "",
}: UseCountUpOptions) {
  const [count, setCount] = useState<number>(0);
  const [hasAnimated, setHasAnimated] = useState<boolean>(false);
  const elementRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element || hasAnimated) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setHasAnimated(true);
          let startTime: number | null = null;

          const step = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);

            // Ease-out signature curve: 1 - Math.pow(1 - progress, 3)
            const easedProgress = 1 - Math.pow(1 - progress, 3);
            const currentVal = easedProgress * end;

            setCount(currentVal);

            if (progress < 1) {
              requestAnimationFrame(step);
            } else {
              setCount(end);
            }
          };

          requestAnimationFrame(step);
          observer.unobserve(element);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [end, duration, hasAnimated]);

  const formattedCount = `${prefix}${count.toFixed(decimals)}${suffix}`;

  return { ref: elementRef, value: formattedCount, rawValue: count };
}
