import { useState, useRef, useEffect, useCallback } from "react";

interface UseDropdownToggleReturn {
  isOpen: boolean;
  dropdownHeight: number;
  dropdownRef: React.RefObject<HTMLDivElement>;
  contentRef: React.RefObject<HTMLDivElement>;
  toggle: () => void;
}

/**
 * Manages the open/close state of a dropdown panel, including:
 * - Toggle on trigger click
 * - Click-outside detection to auto-close
 * - Dynamic max-height calculation for the expand/collapse animation
 */
export function useDropdownToggle(): UseDropdownToggleReturn {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownHeight, setDropdownHeight] = useState(0);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const toggle = useCallback(() => setIsOpen((prev) => !prev), []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (isOpen && contentRef.current) {
      setDropdownHeight(contentRef.current.scrollHeight);
    } else {
      setDropdownHeight(0);
    }
  }, [isOpen]);

  return { isOpen, dropdownHeight, dropdownRef, contentRef, toggle };
}
