import React from "react";

export interface CardDropdownProps {
  /**
   * Main title displayed in the card header.
   * Always visible regardless of the open/close state.
   */
  title: string;

  /**
   * Descriptive text displayed below the title in the header.
   * Rendered as a `<p>` element. Optional.
   */
  description?: string;

  /**
   * Primary content revealed in the dropdown body when expanded.
   * Accepts any `ReactNode`. Optional.
   */
  content?: React.ReactNode;

  /**
   * Footer content displayed at the bottom of the dropdown when expanded.
   * Ideal for actions, buttons, or supplementary information. Optional.
   */
  footer?: React.ReactNode;
}

/** Represents the visual state of the component (expanded or collapsed). */
export type CardDropdownState = "open" | "close";
