import { useState, useEffect, useRef, useId, useCallback } from "react";

interface UseInputSelectOptions {
  value?: string;
  disabled?: boolean;
  error?: boolean;
  onChange: (value: string) => void;
}

interface UseInputSelectReturn {
  uid: string;
  isOpen: boolean;
  selectedOption: string | undefined;
  dropdownRef: React.RefObject<HTMLDivElement>;
  triggerRef: React.RefObject<HTMLButtonElement>;
  panelRef: React.RefObject<HTMLUListElement>;
  open: () => void;
  close: () => void;
  selectOption: (option: string) => void;
  handleKeyDown: (e: React.KeyboardEvent) => void;
}

/**
 * Manages all state and interaction logic for `InputSelect`:
 * - Controlled value sync
 * - Open/close dropdown panel
 * - Click-outside detection
 * - Option selection
 * - Keyboard navigation (Enter/Space to open, Escape to close, arrows to navigate)
 */
export function useInputSelect({
  value,
  disabled,
  error,
  onChange,
}: UseInputSelectOptions): UseInputSelectReturn {
  const generatedId = useId();
  const uid = `input-select-${generatedId}`;

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | undefined>(
    value,
  );
  const dropdownRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    setSelectedOption(value || undefined);
  }, [value]);

  const open = useCallback(() => {
    if (disabled || error) return;
    setIsOpen(true);
  }, [disabled, error]);

  const close = useCallback(() => setIsOpen(false), []);

  const selectOption = useCallback(
    (option: string) => {
      setSelectedOption(option);
      onChange(option);
      close();
      triggerRef.current?.focus();
    },
    [onChange, close],
  );

  useEffect(() => {
    if (!isOpen) return;

    const handler = (e: MouseEvent | TouchEvent) => {
      const target = e.target as Node;
      const insideRoot = dropdownRef.current?.contains(target);
      const insidePanel = panelRef.current?.contains(target);

      if (!insideRoot && !insidePanel) close();
    };

    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [isOpen, close]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        isOpen ? close() : open();
      }
      if (e.key === "Escape") close();
    },
    [isOpen, open, close],
  );

  return {
    uid,
    isOpen,
    selectedOption,
    dropdownRef,
    triggerRef,
    panelRef,
    open,
    close,
    selectOption,
    handleKeyDown,
  };
}
