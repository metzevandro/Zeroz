import React from "react";

export interface TabItem {
  /**
   * Label displayed on the tab button.
   */
  label?: string;

  /**
   * Content rendered when this tab is active.
   */
  content: React.ReactNode;
}

export interface TabsProps {
  /**
   * Array of tab definitions. Each entry produces one tab button
   * and its associated content panel.
   */
  tabs: TabItem[];

  /**
   * When `true`, each tab button stretches to fill an equal share
   * of the available width.
   * @default false
   */
  widthFull?: boolean;
}