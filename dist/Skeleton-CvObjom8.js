import { jsx } from 'react/jsx-runtime';

/**
 * `Skeleton` is a loading placeholder that mimics the shape of content
 * before it has loaded, preventing layout shift.
 *
 * Use `width` and `height` to match the dimensions of the real content.
 * Set `circle` to `true` for avatar or icon placeholders.
 *
 * @example
 * ```tsx
 * // Text line placeholder
 * <Skeleton width="200px" height="16px" />
 *
 * // Avatar placeholder
 * <Skeleton width="40px" height="40px" circle />
 *
 * // Full-width block
 * <Skeleton width="100%" height="120px" />
 * ```
 */
function Skeleton({ width, height, circle = false, }) {
    return (jsx("div", { className: `skeleton ${circle ? "circle" : "no-circle"}`, style: {
            width,
            height,
            backgroundSize: width,
            borderRadius: circle ? "var(--s-border-radius-pill)" : undefined,
        } }));
}

export { Skeleton as S };
