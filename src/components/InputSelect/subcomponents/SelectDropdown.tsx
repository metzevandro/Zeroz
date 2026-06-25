import React from "react";

interface SelectDropdownProps {
  options: string[];
  selected: string | undefined;
  onSelect: (option: string) => void;
  isOpen: boolean;
}

/**
 * The custom dropdown option list — rendered as an absolutely-positioned panel.
 * Each option is a `<button>` for full keyboard and pointer accessibility.
 */
export function SelectDropdown({
  options,
  selected,
  onSelect,
  isOpen,
}: SelectDropdownProps) {
  return (
    <ul
      className={`input-select-dropdown ${isOpen ? "open" : "close"}`}
      aria-hidden={isOpen ? 'true' : 'false'}
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
    </ul>
  );
}
