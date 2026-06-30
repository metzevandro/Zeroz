interface SelectDropdownProps {
    options: string[];
    selected: string | undefined;
    onSelect: (option: string) => void;
    isOpen: boolean;
}
/**
 * The custom dropdown option list — rendered as an absolutely-positioned panel.
 * Each option is a `<button>` for full keyboard and pointer accessibility.
 */
export declare function SelectDropdown({ options, selected, onSelect, isOpen, }: SelectDropdownProps): import("react/jsx-runtime").JSX.Element;
export {};
