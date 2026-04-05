import React from "react";
import { DropdownTitleProps } from "../Dropdown.types";

/**
 * Non-interactive section heading for grouping related items
 * inside a `Dropdown` menu.
 *
 * @example
 * ```tsx
 * <Dropdown dropdown={isOpen}>
 *   <DropdownTitle label="Account" />
 *   <DropdownItem label="Profile" onClick={goToProfile} />
 * </Dropdown>
 * ```
 */
export const DropdownTitle: React.FC<DropdownTitleProps> = ({ label }) => (
  <div className="dropdown-menu-title">{label}</div>
);
