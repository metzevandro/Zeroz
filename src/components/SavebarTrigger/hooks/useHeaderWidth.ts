import { useState, useEffect } from "react";

/**
 * Tracks the `offsetWidth` of `.header-root` and updates on resize.
 * Used by `SavebarTrigger` to pin the SaveBar width to the header container.
 */
export function useHeaderWidth(): number | null {
  const [width, setWidth] = useState<number | null>(null);

  useEffect(() => {
    const update = () => {
      const el = document.querySelector(".header-root") as HTMLElement | null;
      if (el) setWidth(el.offsetWidth);
    };

    update();

    const observer = new ResizeObserver(update);
    const el = document.querySelector(".header-root") as HTMLElement | null;
    if (el) observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return width;
}
