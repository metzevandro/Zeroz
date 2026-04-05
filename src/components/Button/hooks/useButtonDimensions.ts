import { useEffect, useRef, useState } from "react";

export interface ButtonDimensions {
  height: number;
  width: number;
}

/**
 * Tracks the rendered dimensions of a button element.
 * Used to render a Skeleton placeholder with the exact same size.
 *
 * @returns A tuple: [ref to attach to the button, dimensions object or null]
 */
export function useButtonDimensions(
  deps: unknown[],
): [React.RefObject<HTMLButtonElement>, ButtonDimensions | null] {
  const ref = useRef<HTMLButtonElement>(null);
  const [dimensions, setDimensions] = useState<ButtonDimensions | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    setDimensions({
      height: el.offsetHeight,
      width: el.offsetWidth,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return [ref, dimensions];
}
