import React from "react";
import type { BadgeProps } from "./Badge.types";
import "./Badge.scss";

/**
 * ## Badge
 *
 * A compact, inline label used to highlight status, category,
 * or metadata. Supports semantic color variants and two visual styles.
 *
 * ### Rendering
 * Renders as an inline element — safe to use inside text,
 * table cells, list items, or alongside other inline content.
 *
 * ### Type × Variant combinations
 * `type` and `variant` work together to define the final appearance.
 * Use `default` type for high-contrast solid fills and `light` for
 * subtle, bordered alternatives.
 *
 * ### Recommended use cases
 * - Status indicators: "Active", "Inactive", "Pending"
 * - Category tags in tables, cards or list items
 * - Notification counts or labels in navigation items
 * - Feature flags or environment indicators ("Beta", "New")
 *
 * ### Best practices
 * - Keep `label` short — badges are not suited for long text
 * - Use `variant="success"` / `"warning"` for status feedback, not decoration
 * - Pair `type="light"` with colored variants for less visually dominant contexts
 * - Avoid using multiple badges of the same variant in the same visual area
 *
 * @example
 * // Solid primary
 * <Badge label="New" type="default" variant="primary" />
 *
 * // Light success
 * <Badge label="Active" type="light" variant="success" />
 *
 * // Neutral
 * <Badge label="Draft" type="default" variant="default" />
 */
const Badge: React.FC<BadgeProps> = ({ label, type, variant }) => (
  <span className={`badge ${type} ${variant}`}>
    <span>{label}</span>
  </span>
);

Badge.displayName = "Badge";

export default Badge;
