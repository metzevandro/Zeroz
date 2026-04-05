import { useState, useEffect, useRef, useCallback } from "react";

interface UseSidebarItemOptions {
  isActive?: boolean;
  hasChildren: boolean;
  onClick?: () => void;
}

interface UseSidebarItemReturn {
  contentHeight: number;
  contentRef: React.RefObject<HTMLDivElement>;
  handleKeyDown: (e: React.KeyboardEvent<HTMLDivElement>) => void;
}

/**
 * Manages the expand/collapse animation for a `SidebarItem` with sub-items.
 * Calculates the content height for the smooth max-height transition,
 * and handles Enter key activation.
 */
export function useSidebarItem({
  isActive,
  hasChildren,
  onClick,
}: UseSidebarItemOptions): UseSidebarItemReturn {
  const [contentHeight, setContentHeight] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isActive && contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    } else {
      setContentHeight(0);
    }
  }, [isActive]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      if (e.key === "Enter" && hasChildren) onClick?.();
    },
    [hasChildren, onClick],
  );

  return { contentHeight, contentRef, handleKeyDown };
}
