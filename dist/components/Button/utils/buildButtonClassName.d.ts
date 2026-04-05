import type { ButtonSize, ButtonVariant } from "../Button.types";
interface BuildButtonClassNameParams {
    variant: ButtonVariant;
    size: ButtonSize;
    isLoading: boolean;
    disabled: boolean;
    className?: string;
}
/**
 * Assembles the final className string for the Button component.
 * Centralizes class composition logic to keep the component body clean.
 */
export declare function buildButtonClassName({ variant, size, isLoading, disabled, className, }: BuildButtonClassNameParams): string;
export {};
