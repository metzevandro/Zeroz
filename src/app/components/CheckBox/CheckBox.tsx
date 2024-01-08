import React from "react";
import Icon from "../Icon/Icon";
import "./CheckBox.scss";

interface CheckBoxProps {
  label?: string;
  disabled?: boolean;
  checked: boolean;
  onChange: () => void;
  indeterminate?: boolean;
}

export function CheckBox(props: CheckBoxProps) {
  const { checked, onChange, disabled, indeterminate, label } = props;

  const toggleCheckbox = () => {
    if (disabled) {
      return;
    } else {
      onChange();
    }
  };

  return (
    <div
      onClick={toggleCheckbox}
      className={`check-box-root ${disabled && "disabled"}`}
    >
      <button
        className={`checkbox ${checked ? "checked" : ""} ${
          disabled ? "disabled" : ""
        }`}
        tabIndex={0}
        role="checkbox"
        aria-checked={checked}
        disabled={disabled}
      >
        {indeterminate ? (
          <>
            <span className="indeterminate">
              <Icon size="md" icon="indeterminate_check_box" fill={1} />
            </span>
          </>
        ) : (
          <>
            {checked ? (
              <span className="checked">
                <Icon size="md" icon="check_box" fill={1} />
              </span>
            ) : (
              <span className="unchecked">
                <Icon size="md" icon="check_box_outline_blank" />
              </span>
            )}
          </>
        )}
      </button>
      {label && (
        <label className={`check-box-label ${disabled && "disabled"}`}>
          {props.label}
        </label>
      )}
    </div>
  );
}
