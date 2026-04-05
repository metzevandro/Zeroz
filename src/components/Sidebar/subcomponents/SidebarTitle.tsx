import React from "react";
import { SidebarTitleProps } from "../Sidebar.types";

/**
 * Section heading rendered above a group of `SidebarItem` entries.
 */
export const SidebarTitle: React.FC<SidebarTitleProps> = ({ title }) => (
  <h1 className="Sidebar-list-title">{title}</h1>
);
