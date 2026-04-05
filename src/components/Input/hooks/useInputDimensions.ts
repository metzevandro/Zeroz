import { useRef, useState, useEffect } from "react";

interface Dimensions {
  width: number;
  height: number;
}

interface UseInputDimensionsReturn {
  containerRef: React.RefObject<HTMLDivElement>;
  dimensions: Dimensions;
}

/**
 * Measures the input container's dimensions after mount.
 * Used to size the `<Skeleton>` placeholder to match the real input exactly.
 */
export function useInputDimensions(): UseInputDimensionsReturn {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState<Dimensions>({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    if (containerRef.current) {
      const { offsetWidth, offsetHeight } = containerRef.current;
      setDimensions({ width: offsetWidth, height: offsetHeight });
    }
  }, []);

  return { containerRef, dimensions };
}
