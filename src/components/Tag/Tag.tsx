import "./Tag.scss";
import React from "react";
import ButtonIcon from "../ButtonIcon/ButtonIcon";
import { TagProps } from "./Tag.types";
import { useTagDismiss } from "./hooks/useTagDismiss";

const ANIMATION_DURATION = 200;

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
function Tag({ content, variant, onClose }: TagProps) {
  const { isDismissed, isClosing, handleClose } = useTagDismiss({
    animationDuration: ANIMATION_DURATION,
    onClose,
  });

  if (isDismissed) return null;

  return (
    <div
      className={[
        "tag-root",
        variant,
        isClosing && "tag-closing",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {content}
      {onClose && (
        <span>
          <ButtonIcon
            appearance="plain"
            size="sm"
            icon="close"
            variant={variant === "secondary" ? "primary" : "on-color"}
            onClick={handleClose}
          />
        </span>
      )}
    </div>
  );
}

export default Tag;