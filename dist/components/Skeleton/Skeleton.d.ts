import "./Skeleton.scss";
import { SkeletonProps } from "./Skeleton.types";
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
export default function Skeleton({ width, height, circle, }: SkeletonProps): import("react/jsx-runtime").JSX.Element;
