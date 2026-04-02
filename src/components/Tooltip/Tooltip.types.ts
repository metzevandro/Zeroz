import React from "react";

export type TooltipDirection = "top" | "bottom" | "right" | "left";

export interface TooltipProps {
  /**
   * Text content displayed inside the tooltip bubble.
   */
  text: string;

  /**
   * The element that triggers the tooltip on hover.
   */
  children: React.ReactNode;

  /**
   * Direction in which the tooltip appears relative to the trigger element.
   *
   * - `"top"`    — above the element, arrow pointing down
   * - `"bottom"` — below the element, arrow pointing up
   * - `"right"`  — to the right, arrow pointing left
   * - `"left"`   — to the left, arrow pointing right
   */
  direction: TooltipDirection;
}