import React from "react";

interface SelectDropdownProps {
  options: string[];
  selected: string | undefined;
  onSelect: (option: string) => void;
}

/**
 * The custom dropdown option list — rendered as an absolutely-positioned panel.
 * Each option is a `<button>` for full keyboard and pointer accessibility.
 */
export function SelectDropdown({ options, selected, onSelect }: SelectDropdownProps) {
  return (
    <ul className="input-select-dropdown" role="listbox">
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