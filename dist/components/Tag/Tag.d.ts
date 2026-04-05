import "./Tag.scss";
import { TagProps } from "./Tag.types";
/**
 * `Tag` is a compact label with an optional dismiss button.
 *
 * When `onClose` is provided, a close button is rendered. Clicking it
 * triggers a smooth exit animation (fade + scale) before removing the tag
 * from the DOM and firing `onClose`.
 *
 * @example
 * ```tsx
 * // Static tag (no close button)
 * <Tag content="Design" variant="primary" />
 *
 * // Dismissible tag
 * <Tag content="React" variant="secondary" onClose={() => removeTag("React")} />
 * ```
 */
declare function Tag({ content, variant, onClose }: TagProps): import("react/jsx-runtime").JSX.Element | null;
export default Tag;
