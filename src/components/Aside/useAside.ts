import { useState, useCallback } from "react";

export interface UseAsideReturn {
  /** Whether the panel is currently open */
  isOpen: boolean;
  /** Opens the panel */
  openAside: () => void;
  /** Closes the panel */
  closeAside: () => void;
  /** Toggles the panel open/closed */
  toggleAside: () => void;
}

/**
 * ## useAside
 *
 * Utility hook to manage the open/close state of the `Aside` component.
 * Encapsulates repetitive toggle logic, reducing boilerplate in consumers.
 *
 * @param initialState - Whether the panel starts open. Defaults to `false`.
 *
 * @returns `isOpen` — current panel state
 * @returns `openAside` — opens the panel
 * @returns `closeAside` — closes the panel
 * @returns `toggleAside` — toggles the panel state
 *
 * @example
 * ```tsx
 * const { isOpen, toggleAside } = useAside();
 *
 * <Button onClick={toggleAside}>Open panel</Button>
 * <Aside isOpen={isOpen} toggleAside={toggleAside} title="Details" />
 * ```
 */
export const useAside = (initialState = false): UseAsideReturn => {
  const [isOpen, setIsOpen] = useState(initialState);

  const openAside = useCallback(() => setIsOpen(true), []);
  const closeAside = useCallback(() => setIsOpen(false), []);
  const toggleAside = useCallback(() => setIsOpen((prev) => !prev), []);

  return { isOpen, openAside, closeAside, toggleAside };
};
