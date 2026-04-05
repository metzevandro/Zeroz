import { useState, useCallback } from "react";

interface UseSidebarReturn {
  activeItem: string | null;
  toggleItem: (index: string) => void;
}

/**
 * Manages the accordion state for the sidebar's top-level items.
 * Only one item can be expanded at a time — clicking an open item collapses it.
 */
export function useSidebar(): UseSidebarReturn {
  const [activeItem, setActiveItem] = useState<string | null>(null);

  const toggleItem = useCallback((index: string) => {
    setActiveItem((prev) => (prev === index ? null : index));
  }, []);

  return { activeItem, toggleItem };
}
