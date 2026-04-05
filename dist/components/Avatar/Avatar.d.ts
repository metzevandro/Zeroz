import React from "react";
import type { AvatarProps } from "./Avatar.types";
import "./Avatar.scss";
/**
 * ## Avatar
 *
 * User identity visual component. Displays an image, initials,
 * or a default icon with loading state (skeleton) support.
 *
 * ### Rendering hierarchy
 * `skeleton` → `src` (image) → `letter` (initials) → default icon (fallback)
 *
 * ### Recommended use cases
 * - User identification in lists, tables, and comment sections
 * - Profile headers and account pages
 * - Avatar grouping (avatar stacks)
 * - Async loading states with `skeleton`
 *
 * ### Best practices
 * - Always provide `letter` as a fallback when `src` might fail or be slow to load
 * - Use `skeleton` during API calls to prevent layout shift
 * - Prefer `size="md"` for general use; reserve `lg` for profile pages
 *
 * @example
 * // Image
 * <Avatar size="md" src="https://cdn.example.com/user.jpg" />
 *
 * // Initials
 * <Avatar size="md" letter="Maria Smith" />
 *
 * // Default icon (fallback)
 * <Avatar size="sm" />
 *
 * // Loading state
 * <Avatar size="md" skeleton />
 */
declare const Avatar: React.FC<AvatarProps>;
export default Avatar;
