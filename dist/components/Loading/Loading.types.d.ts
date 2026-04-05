export type LoadingVariant = "default" | "success" | "warning" | "large";
export interface LoadingProps {
    /**
     * Visual variant of the loading indicator.
     *
     * - `"default"` — animated spinner (small), optionally with a message
     * - `"large"`   — animated spinner (large), no message
     * - `"success"` — static checkmark icon with optional message
     * - `"warning"` — static warning icon with optional message
     */
    variant: LoadingVariant;
    /**
     * Optional message rendered next to the indicator.
     * Not shown when `variant` is `"large"`.
     */
    message?: string;
}
