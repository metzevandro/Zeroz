export type TagVariant = "primary" | "secondary" | "success" | "warning";

export interface TagProps {
  /**
   * Text content displayed inside the tag.
   */
  content: string;

  /**
   * Visual variant controlling the tag's background and text color.
   *
   * - `"primary"`   — highlight fill, on-color text
   * - `"secondary"` — light fill, default text
   * - `"success"`   — success fill, on-color text
   * - `"warning"`   — warning fill, on-color text
   */
  variant: TagVariant;

  /**
   * Callback fired after the tag finishes its exit animation and
   * is fully removed from the DOM.
   * When omitted, the close button is not rendered.
   */
  onClose?: () => void;
}
