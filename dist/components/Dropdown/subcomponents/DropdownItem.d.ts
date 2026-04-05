import React from "react";
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
export declare const DropdownItem: React.FC<DropdownItemProps>;
