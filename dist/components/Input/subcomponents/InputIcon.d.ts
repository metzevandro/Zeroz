interface InputIconProps {
    icon?: string;
    fillIcon?: boolean;
}
/**
 * Renders the trailing icon for non-password inputs.
 * Renders nothing if no `typeIcon` is provided.
 */
export declare function InputIcon({ icon, fillIcon }: InputIconProps): import("react/jsx-runtime").JSX.Element;
interface PasswordToggleProps {
    isVisible: boolean;
    fillIcon?: boolean;
    onToggle: () => void;
}
/**
 * Renders the show/hide password toggle button.
 * Uses the `visibility` / `visibility_off` Material Symbol icons.
 */
export declare function PasswordToggle({ isVisible, fillIcon, onToggle, }: PasswordToggleProps): import("react/jsx-runtime").JSX.Element;
export {};
