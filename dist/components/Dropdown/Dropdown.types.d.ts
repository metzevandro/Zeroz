import React from "react";
export interface DropdownProps {
    /**
     * Content rendered inside the dropdown menu.
     * Typically a composition of `<DropdownTitle>` and `<DropdownItem>` components.
     */
    children: React.ReactNode;
    /**
     * Controls the visibility of the dropdown menu.
     * When `false`, the menu is not rendered into the DOM.
     */
    visible: boolean;
}
export interface DropdownTitleProps {
    /**
     * Section label rendered as a non-interactive heading
     * to visually group related `DropdownItem` entries.
     */
    label: string;
}
export interface DropdownItemProps {
    /**
     * Material Symbol icon name rendered to the left of the item label.
     * Optional — omitting it renders the label without an icon.
     */
    icon?: string;
    /**
     * The visible label text for this menu item.
     */
    label: string;
    /**
     * Callback fired when the user clicks the item.
     */
    onClick?: () => void;
}
