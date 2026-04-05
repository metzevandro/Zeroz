import React from "react";
import Icon from "../../Icon/Icon";
import { SidebarSubItemProps } from "../Sidebar.types";

/**
 * A nested navigation item rendered inside an expanded `SidebarItem`.
 * Use `active` to highlight the currently selected route.
 */
export const SidebarSubItem: React.FC<SidebarSubItemProps> = ({
  title,
  active,
  onClick,
}) => (
  <div
    className={`Sidebar-sub-item ${active ? "active animated" : ""}`}
    tabIndex={0}
    onClick={onClick}
  >
    <div>
      <Icon size="sm" icon="subdirectory_arrow_right" fill />
    </div>
    <div>{title}</div>
  </div>
);
