import React from "react";
export interface SidebarProps {
    /**
     * URL or import path of the brand logo image.
     */
    brand: string;
    /**
     * Size of the brand logo rendered at the top of the sidebar.
     */
    brandSize: "sm" | "md" | "lg";
    /**
     * Sidebar navigation content — typically composed of
     * `<SidebarTitle>`, `<SidebarItem>`, and `<SidebarSubItem>`.
     */
    children: React.ReactNode;
    /**
     * Controls whether the sidebar is open or closed.
     */
    toggle: boolean;
    /**
     * Callback fired when the sidebar should change its open/close state.
     * Receives the new boolean value.
     */
    setToggleSidebar: (toggle: boolean) => void;
}
export interface SidebarTitleProps {
    /**
     * Section heading text rendered above a group of navigation items.
     */
    title: string;
}
export interface SidebarItemProps {
    /**
     * Label text for the navigation item.
     */
    title: string;
    /**
     * Material Symbol icon name rendered to the left of the label.
     */
    icon: string;
    /**
     * When `true`, renders the icon in its filled variant.
     */
    fillIcon: boolean;
    /**
     * Optional sub-items rendered in a collapsible panel below the item.
     * When provided, the item becomes an accordion trigger.
     */
    children?: React.ReactNode;
    /**
     * Whether this item's sub-panel is currently expanded.
     * Managed externally by `Sidebar` via `React.cloneElement`.
     */
    isActive?: boolean;
    /**
     * Callback fired when the item is clicked or activated via keyboard.
     * Managed externally by `Sidebar` via `React.cloneElement`.
     */
    onClick?: () => void;
}
export interface SidebarSubItemProps {
    /**
     * Label text for the sub-navigation item.
     */
    title: string;
    /**
     * Whether this sub-item is currently the active route.
     */
    active: boolean;
    /**
     * Callback fired when the sub-item is clicked.
     */
    onClick?: () => void;
}
