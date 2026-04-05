import type { AvatarSize } from "./Avatar.types";
/**
 * Maps the semantic Avatar size to its pixel value.
 * Used by Skeleton, which requires numeric dimensions.
 */
export declare const AVATAR_SIZE_MAP: Record<AvatarSize, number>;
/**
 * Extracts initials from a name or string.
 *
 * @param letter - Input name or string
 * @returns Uppercase initials (max 2 characters)
 *
 * @example
 * getAvatarInitials("John Smith") // "JS"
 * getAvatarInitials("John")       // "J"
 * getAvatarInitials("j")          // "J"
 */
export declare const getAvatarInitials: (letter: string) => string;
