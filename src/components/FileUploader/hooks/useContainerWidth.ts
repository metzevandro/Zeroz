import { useState, useEffect, useRef } from "react";

interface UseContainerWidthReturn {
  containerRef: React.RefObject<HTMLDivElement>;
  fileNameMaxWidth: React.CSSProperties;
}

/**
 * Measures the uploader container's width and returns a `maxWidth` style
 * for the filename element, preventing long filenames from overflowing
 * the row when a close button and error icon are also present.
 *
 * Uses a `ResizeObserver` (falling back to a `resize` window listener)
 * for accurate tracking when the container is resized.
 */
export function useContainerWidth(): UseContainerWidthReturn {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState<number | null>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const update = () => setContainerWidth(el.offsetWidth);
    update();

    if (typeof ResizeObserver !== "undefined") {
      const observer = new ResizeObserver(update);
      observer.observe(el);
      return () => observer.disconnect();
    }

    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const fileNameMaxWidth: React.CSSProperties = containerWidth
    ? { maxWidth: `calc(${containerWidth}px - 60px)` }
    : {};

  return { containerRef, fileNameMaxWidth };
}
