import "./Sidebar.scss";
import React from "react";
type SidebarProps = {
    brand: string;
    children: React.ReactNode;
    toggle: boolean;
    setToggleSidebar: (toggle: boolean) => void;
    brandSize: "sm" | "md" | "lg";
};
declare const Sidebar: React.FC<SidebarProps>;
interface SidebarTitleProps {
    title: string;
}
export declare const SidebarTitle: React.FC<SidebarTitleProps>;
interface SidebarItemsProps {
    title: string;
    icon: string;
    fillIcon: boolean;
    children?: React.ReactNode;
    onClick?: () => void;
    isActive?: boolean;
}
export declare const SidebarItem: React.FC<SidebarItemsProps>;
interface SidebarSubItemProps {
    title: string;
    onClick?: () => void;
    active: boolean;
}
export declare const SidebarSubItem: React.FC<SidebarSubItemProps>;
export default Sidebar;
