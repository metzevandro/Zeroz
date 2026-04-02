import { useState, useCallback } from "react";

interface UseTooltipReturn {
  isVisible: boolean;
  handleMouseEnter: () => void;
  handleMouseLeave: () => void;
}

/**
 * Manages the visibility state of a tooltip.
 * Exposes stable mouse event handlers to avoid unnecessary re-renders.
 */
export function useTooltip(): UseTooltipReturn {
  const [isVisible, setIsVisible] = useState(false);

  const handleMouseEnter = useCallback(() => setIsVisible(true), []);
  const handleMouseLeave = useCallback(() => setIsVisible(false), []);

  return { isVisible, handleMouseEnter, handleMouseLeave };
}