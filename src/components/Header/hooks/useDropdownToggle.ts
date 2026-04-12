import { useState, useRef, useEffect, useCallback } from "react";

interface UseDropdownToggleReturn {
  isOpen: boolean;
  dropdownRef: React.RefObject<HTMLDivElement>;
  toggle: () => void;
}

/**
 * Manages the open/close state of the HeaderProfile dropdown:
 * - Toggle on trigger click
 * - Click-outside detection to auto-close
 *
 * Height animation is now delegated to the `Dropdown` component
 * via the `visible` prop injected by `HeaderProfile`.
 */
export function useDropdownToggle(): UseDropdownToggleReturn {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

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

  return { isOpen, dropdownRef, toggle };
}