import "./Dropdown.scss";
import React from "react";
import { DropdownProps } from "./Dropdown.types";

/**
 * `Dropdown` is a conditional menu container that renders its children
 * only when `visible` is `true`.
 *
 * Compose it with `<DropdownTitle>` for section headings and
 * `<DropdownItem>` for interactive entries.
 *
 * @example
 * ```tsx
 * <Dropdown visible={isOpen}>
 *   <DropdownTitle label="Settings" />
 *   <DropdownItem icon="person" label="Profile" onClick={goToProfile} />
 *   <DropdownItem icon="logout" label="Sign out" onClick={handleSignOut} />
 * </Dropdown>
 * ```
 */
const Dropdown: React.FC<DropdownProps> = ({ children, visible }) => {
  if (!visible) return null;

  return (
    <div className="dropdown-menu-root">
      <div className="dropdown-menu">{children}</div>
    </div>
  );
};

export default Dropdown;
