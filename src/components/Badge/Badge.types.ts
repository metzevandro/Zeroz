/**
 * Controls the visual style of the badge.
 * - `default`: solid fill with no border
 * - `light`: light background with a colored border
 */
export type BadgeType = "default" | "light";

/**
 * Controls the semantic color intent of the badge.
 * - `default`: neutral — no particular semantic meaning
 * - `primary`: informational or highlighted content
 * - `success`: positive outcome or completed state
 * - `warning`: attention required or cautionary state
 */
export type BadgeVariant = "default" | "primary" | "success" | "warning";

export interface BadgeProps {
  /**
   * The text content displayed inside the badge.
   * Keep labels short — badges are designed for single words or brief phrases.
   *
   * @example "New", "Active", "Pending", "3"
   */
  label: string;

  /**
   * Controls the visual style of the badge.
   * - `default`: solid background, no visible border
   * - `light`: light tinted background with a colored border
   *
   * @default "default"
   */
  type: BadgeType;

  /**
   * Controls the semantic color intent of the badge.
   * Combines with `type` to produce the final visual appearance.
   *
   * | variant   | type      | result                              |
   * |-----------|-----------|-------------------------------------|
   * | default   | default   | Neutral solid                       |
   * | default   | light     | Neutral outlined                    |
   * | primary   | default   | Solid highlight color               |
   * | primary   | light     | Light highlight with border         |
   * | success   | default   | Solid green                         |
   * | success   | light     | Light green with border             |
   * | warning   | default   | Solid yellow/orange                 |
   * | warning   | light     | Light yellow/orange with border     |
   *
   * @default "default"
   */
  variant: BadgeVariant;
}
