import React, { forwardRef, useLayoutEffect, useState } from "react";
import { createPortal } from "react-dom";

interface SelectDropdownProps {
  options: string[];
  selected: string | undefined;
  onSelect: (option: string) => void;
  isOpen: boolean;
  triggerRef: React.RefObject<HTMLElement>;
}

/**
 * The custom dropdown option list — rendered as an absolutely-positioned panel.
 * Each option is a `<button>` for full keyboard and pointer accessibility.
 */
export const SelectDropdown = forwardRef<HTMLUListElement, SelectDropdownProps>(
  function SelectDropdown(
    { options, selected, onSelect, isOpen, triggerRef },
    ref,
  ) {
    const [style, setStyle] = useState<React.CSSProperties>({});

    useLayoutEffect(() => {
      if (!isOpen || !triggerRef.current) return;

      const update = () => {
        const rect = triggerRef.current!.getBoundingClientRect();
        setStyle({
          top: rect.bottom + 4,
          left: rect.left,
          width: rect.width,
        });
      };

      update();
      window.addEventListener("resize", update);
      window.addEventListener("scroll", update, true);
      return () => {
        window.removeEventListener("resize", update);
        window.removeEventListener("scroll", update, true);
      };
    }, [isOpen, triggerRef]);

    return createPortal(
      <ul
        ref={ref}
        className={`input-select-dropdown ${isOpen ? "open" : "close"}`}
        style={style}
        aria-hidden={!isOpen}
        role="listbox"
      >
        {options.map((option) => (
          <li key={option} role="option" aria-selected={option === selected}>
            <button
              className={`input-select-option ${option === selected ? "selected" : ""}`}
              onClick={() => onSelect(option)}
              type="button"
            >
              {option}
            </button>
          </li>
        ))}
      </ul>,
      document.body,
    );
  },
);
