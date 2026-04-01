import type { AvatarSize } from "./Avatar.types";

/**
 * Maps the semantic Avatar size to its pixel value.
 * Used by Skeleton, which requires numeric dimensions.
 */
export const AVATAR_SIZE_MAP: Record<AvatarSize, number> = {
  sm: 24,
  md: 40,
  lg: 64,
};

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
export const getAvatarInitials = (letter: string): string => {
  const trimmed = letter.trim();

  if (trimmed.includes(" ")) {
    const parts = trimmed.split(" ");
    const first = parts[0]?.charAt(0) ?? "";
    const last = parts[parts.length - 1]?.charAt(0) ?? "";
    return `${first}${last}`.toLocaleUpperCase();
  }

  return trimmed.charAt(0).toLocaleUpperCase();
};
