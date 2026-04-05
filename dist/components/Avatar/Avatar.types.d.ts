/**
 * Available sizes for the Avatar component.
 * Mapped to pixel values: sm=24, md=40, lg=64.
 */
export type AvatarSize = "sm" | "md" | "lg";
export interface AvatarProps {
    /**
     * Defines the size of the avatar.
     * - `sm`: 24px — use in compact lists, tables
     * - `md`: 40px — general use, recommended default
     * - `lg`: 64px — use in profiles, headers
     */
    size: AvatarSize;
    /**
     * URL of the image to display in the avatar.
     * When provided, takes priority over `letter` and the default icon.
     */
    src?: string;
    /**
     * When `true`, displays the loading state (skeleton).
     * Useful for async states while user data is being fetched.
     */
    skeleton?: boolean;
    /**
     * Name or text used to generate the avatar initials.
     * - Full name (e.g. "John Smith") → displays "JS"
     * - Single name or string without spaces → displays only the first character
     * Ignored when `src` is provided.
     */
    letter?: string;
}
