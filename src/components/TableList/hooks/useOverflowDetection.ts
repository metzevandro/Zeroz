import React, { useState, useEffect, useRef } from "react";

interface UseOverflowDetectionReturn {
  containerRef: React.RefObject<HTMLDivElement>;
  isOverflowed: boolean;
}

/**
 * Detects whether an element's content overflows its visible width.
 * Uses `ResizeObserver` for accurate tracking when the container is resized.
 *
 * The `isOverflowed` flag is used to apply a CSS class that enables
 * a horizontal scroll shadow/indicator on the table.
 */
export function useOverflowDetection(): UseOverflowDetectionReturn {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isOverflowed, setIsOverflowed] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const check = () => setIsOverflowed(el.scrollWidth > el.clientWidth);

    check();

    const observer = new ResizeObserver(check);
    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return { containerRef, isOverflowed };
}
