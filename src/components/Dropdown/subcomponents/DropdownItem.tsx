import React from "react";
import Icon from "../../Icon/Icon";
import { DropdownItemProps } from "../Dropdown.types";

/**
 * Interactive menu item rendered as a `<button>` inside a `Dropdown`.
 * Optionally displays a leading icon when `icon` is provided.
 *
 * @example
 * ```tsx
 * <DropdownItem icon="logout" label="Sign out" onClick={handleSignOut} />
 * ```
 */
export const DropdownItem: React.FC<DropdownItemProps> = ({
  icon,
  label,
  onClick,
}) => (
  <button className="dropdown-menu-item" onClick={onClick}>
    {icon && <Icon size="sm" icon={icon} />}
    {label}
  </button>
);

DropdownItem.displayName = "DropdownItem";
