import { useCallback, useEffect, useRef, useState } from "react";

interface UseCardDropdownReturn {
  isOpen: boolean;
  contentHeight: number;
  contentRef: React.RefObject<HTMLDivElement>;
  toggle: () => void;
}

/**
 * Manages the open/close state of the CardDropdown,
 * including dynamic height calculation for the expand/collapse animation.
 */
export function useCardDropdown(): UseCardDropdownReturn {
  const [isOpen, setIsOpen] = useState(false);
  const [contentHeight, setContentHeight] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);

  const toggle = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  useEffect(() => {
    if (isOpen && contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    } else {
      setContentHeight(0);
    }
  }, [isOpen]);

  return { isOpen, contentHeight, contentRef, toggle };
}
