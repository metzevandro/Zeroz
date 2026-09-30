import React from "react";
interface SelectDropdownProps {
    options: string[];
    selected: string | undefined;
    onSelect: (option: string) => void;
    isOpen: boolean;
    triggerRef: React.RefObject<HTMLElement>;
}
/**
 * The custom dropdown option list — rendered as an absolutely-positioned panel.
 * Each option is a `<button>` for full keyboard and pointer accessibility.
 */
export declare const SelectDropdown: React.ForwardRefExoticComponent<SelectDropdownProps & React.RefAttributes<HTMLUListElement>>;
export {};
