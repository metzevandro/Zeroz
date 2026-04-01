import React from "react";

/**
 * Props for the Aside component.
 *
 * @example
 * <Aside
 *   isOpen={isOpen}
 *   title="Order Details"
 *   description="View the complete information for the selected order."
 *   toggleAside={handleToggle}
 *   content={<AsideContent>...</AsideContent>}
 *   footer={<AsideFooter>...</AsideFooter>}
 * />
 */
export interface AsideProps {
  /** Controls whether the side panel is open or closed */
  isOpen: boolean;

  /** Title displayed in the panel header */
  title: string;

  /** Descriptive text displayed below the title */
  description?: string;

  /**
   * Main content area of the panel.
   * Use the `AsideContent` sub-component to maintain the design system's visual standard.
   */
  content?: React.ReactNode;

  /**
   * Footer area of the panel.
   * Use the `AsideFooter` sub-component to maintain the design system's visual standard.
   */
  footer?: React.ReactNode;

  /** Callback invoked when the panel is closed (via close button or overlay click) */
  toggleAside: () => void;
}

/** Shared props for Aside slot sub-components */
export interface AsideSlotProps {
  /** Content to be rendered inside the slot */
  children: React.ReactNode;
}
