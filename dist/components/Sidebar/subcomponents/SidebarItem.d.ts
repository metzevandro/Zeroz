import React from "react";
import { SidebarItemProps } from "../Sidebar.types";
/**
 * A navigation item in the sidebar.
 *
 * When `children` are provided, the item becomes an accordion trigger —
 * clicking it expands/collapses the sub-item panel with a smooth animation.
 *
 * `isActive` and `onClick` are injected by `Sidebar` via `React.cloneElement`
 * to keep accordion state centralized in the parent.
 */
export declare const SidebarItem: React.FC<SidebarItemProps>;
