import React from "react";
import Skeleton from "../Skeleton/Skeleton";
import AvatarImage from "./subcomponents/AvatarImage";
import AvatarLetter from "./subcomponents/AvatarLetter";
import AvatarIcon from "./subcomponents/AvatarIcon";
import { AVATAR_SIZE_MAP } from "./Avatar.utils";
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
const Avatar: React.FC<AvatarProps> = ({ size, src, skeleton, letter }) => {
  if (skeleton) {
    const sizeInPixels = String(AVATAR_SIZE_MAP[size]);
    return (
      <div className="avatar">
        <Skeleton height={sizeInPixels} width={sizeInPixels} circle />
      </div>
    );
  }

  return (
    <div className="avatar">
      {src && <AvatarImage size={size} src={src} />}
      {!src && letter && <AvatarLetter size={size} letter={letter} />}
      {!src && !letter && <AvatarIcon size={size} />}
    </div>
  );
};

Avatar.displayName = "Avatar";

export default Avatar;
