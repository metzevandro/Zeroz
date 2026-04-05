interface SelectDropdownProps {
    options: string[];
    selected: string | undefined;
    onSelect: (option: string) => void;
}
/**
 * The custom dropdown option list — rendered as an absolutely-positioned panel.
 * Each option is a `<button>` for full keyboard and pointer accessibility.
 */
export declare function SelectDropdown({ options, selected, onSelect, }: SelectDropdownProps): import("react/jsx-runtime").JSX.Element;
export {};
