import React from "react";
import Icon from "../Icon/Icon";
import "./InputCheckbox.scss";

interface InputCheckboxProps {
  label?: string;
  disabled?: boolean;
  checked: boolean;
  onChange: (checked: boolean) => void;
  indeterminate?: boolean;
}

function InputCheckbox(props: InputCheckboxProps) {
  const { checked, onChange, disabled, indeterminate, label } = props;

  const toggleInputCheckbox = () => {
    if (disabled) {
      return;
    } else {
      onChange(!checked);
    }
  };

  return (
    <div
      onClick={toggleInputCheckbox}
      className={`check-box-root ${disabled && "disabled"}`}
    >
      <button
        className={`InputCheckbox ${checked ? "checked" : ""} ${
          disabled ? "disabled" : ""
        }`}
        tabIndex={0}
        role="InputCheckbox"
        aria-checked={checked}
        disabled={disabled}
      >
        {indeterminate ? (
          <>
            <span className="indeterminate">
              <Icon size="md" icon="indeterminate_check_box" fill={true} />
            </span>
          </>
        ) : (
          <>
            {checked ? (
              <span className="checked">
                <Icon size="md" icon="check_box" fill={true} />
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

export default InputCheckbox;
