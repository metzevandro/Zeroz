import { useEffect, RefObject } from "react";

/**
 * Fires `callback` when a mousedown event occurs outside `ref`.
 */
export function useClickOutside(
  ref: RefObject<HTMLElement>,
  callback: () => void,
): void {
  useEffect(() => {
    const handler = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [ref, callback]);
}
