import React from "react";
import Icon from "../../Icon/Icon";
import { SidebarItemProps } from "../Sidebar.types";
import { useSidebarItem } from "./hooks/useSidebarItem";

/**
 * A navigation item in the sidebar.
 *
 * When `children` are provided, the item becomes an accordion trigger —
 * clicking it expands/collapses the sub-item panel with a smooth animation.
 *
 * `isActive` and `onClick` are injected by `Sidebar` via `React.cloneElement`
 * to keep accordion state centralized in the parent.
 */
export const SidebarItem: React.FC<SidebarItemProps> = ({
  title,
  icon,
  fillIcon,
  children,
  isActive,
  onClick,
}) => {
  const hasChildren = Boolean(children);
  const { contentHeight, contentRef, handleKeyDown } = useSidebarItem({
    isActive,
    hasChildren,
    onClick,
  });

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div
        className={[
          "Sidebar-item",
          hasChildren ? "with-sub-item" : "",
          !hasChildren && isActive ? "active" : "",
        ]
          .filter(Boolean)
          .join(" ")}
        onClick={onClick}
        tabIndex={0}
        onKeyDown={handleKeyDown}
      >
        <div className="Sidebar-item-header">
          <Icon size="sm" icon={icon} fill={fillIcon} />
          <div>{title}</div>
        </div>

        {hasChildren && (
          <div
            className={
              isActive
                ? "Sidebar-item-with-action-open"
                : "Sidebar-item-with-action-close"
            }
          >
            <Icon size="sm" icon="keyboard_arrow_down" />
          </div>
        )}
      </div>

      <div
        className={`Sidebar-item-children ${isActive ? "active" : ""}`}
        style={{ maxHeight: isActive ? `${contentHeight}px` : "0px" }}
        ref={contentRef}
      >
        {children}
      </div>
    </div>
  );
};
