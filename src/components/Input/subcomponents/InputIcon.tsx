import React from "react";
import Icon from "../../Icon/Icon";

interface InputIconProps {
  icon?: string;
  fillIcon?: boolean;
}

/**
 * Renders the trailing icon for non-password inputs.
 * Renders nothing if no `typeIcon` is provided.
 */
export function InputIcon({ icon, fillIcon }: InputIconProps) {
  return (
    <span className="icon-transition">
      <Icon icon={icon} size="md" fill={fillIcon} />
    </span>
  );
}

interface PasswordToggleProps {
  isVisible: boolean;
  fillIcon?: boolean;
  onToggle: () => void;
}

/**
 * Renders the show/hide password toggle button.
 * Uses the `visibility` / `visibility_off` Material Symbol icons.
 */
export function PasswordToggle({
  isVisible,
  fillIcon,
  onToggle,
}: PasswordToggleProps) {
  return (
    <div onClick={onToggle} className="toggle-password">
      <span className="icon-transition">
        <Icon
          icon={isVisible ? "visibility" : "visibility_off"}
          size="md"
          fill={fillIcon}
        />
      </span>
    </div>
  );
}
