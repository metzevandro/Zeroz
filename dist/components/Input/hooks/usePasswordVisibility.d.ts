interface UsePasswordVisibilityReturn {
    isPasswordVisible: boolean;
    togglePasswordVisibility: () => void;
    resolvedType: React.InputHTMLAttributes<HTMLInputElement>["type"];
}
/**
 * Manages the show/hide toggle state for password inputs.
 * Returns the effective `type` attribute value to apply to the `<input>`.
 */
export declare function usePasswordVisibility(type: React.InputHTMLAttributes<HTMLInputElement>["type"]): UsePasswordVisibilityReturn;
export {};
