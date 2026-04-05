'use strict';

var jsxRuntime = require('react/jsx-runtime');
var Skeleton = require('./Skeleton-CzoMYdQv.js');
var Icon = require('./Icon-BUoiqqF-.js');

/**
 * Avatar variant that displays an image.
 * @internal — For exclusive use inside the Avatar component
 */
const AvatarImage = ({ size, src }) => (jsxRuntime.jsx("label", { className: "avatar-image", children: jsxRuntime.jsx("img", { className: size, src: src, alt: "Avatar" }) }));
AvatarImage.displayName = "AvatarImage";

/**
 * Maps the semantic Avatar size to its pixel value.
 * Used by Skeleton, which requires numeric dimensions.
 */
const AVATAR_SIZE_MAP = {
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
const getAvatarInitials = (letter) => {
    const trimmed = letter.trim();
    if (trimmed.includes(" ")) {
        const parts = trimmed.split(" ");
        const first = parts[0]?.charAt(0) ?? "";
        const last = parts[parts.length - 1]?.charAt(0) ?? "";
        return `${first}${last}`.toLocaleUpperCase();
    }
    return trimmed.charAt(0).toLocaleUpperCase();
};

/**
 * Avatar variant that displays initials generated from a name.
 * @internal — For exclusive use inside the Avatar component
 */
const AvatarLetter = ({ size, letter }) => (jsxRuntime.jsx("label", { className: `avatar-letter ${size}`, children: getAvatarInitials(letter) }));
AvatarLetter.displayName = "AvatarLetter";

/**
 * Default (fallback) Avatar variant that displays a person icon.
 * Rendered when neither `src` nor `letter` is provided.
 * @internal — For exclusive use inside the Avatar component
 */
const AvatarIcon = ({ size }) => (jsxRuntime.jsx("label", { className: `avatar-icon ${size}`, children: jsxRuntime.jsx(Icon.Icon, { size: size, icon: "person" }) }));
AvatarIcon.displayName = "AvatarIcon";

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
const Avatar = ({ size, src, skeleton, letter }) => {
    if (skeleton) {
        const sizeInPixels = String(AVATAR_SIZE_MAP[size]);
        return (jsxRuntime.jsx("div", { className: "avatar", children: jsxRuntime.jsx(Skeleton.Skeleton, { height: sizeInPixels, width: sizeInPixels, circle: true }) }));
    }
    return (jsxRuntime.jsxs("div", { className: "avatar", children: [src && jsxRuntime.jsx(AvatarImage, { size: size, src: src }), !src && letter && jsxRuntime.jsx(AvatarLetter, { size: size, letter: letter }), !src && !letter && jsxRuntime.jsx(AvatarIcon, { size: size })] }));
};
Avatar.displayName = "Avatar";

exports.Avatar = Avatar;
