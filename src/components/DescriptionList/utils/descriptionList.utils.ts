import React from "react";

/**
 * Returns the inline style for a list item's bottom divider.
 * Only applied to items that are not the last in the list.
 */
export function getDividerStyle(
  hasDivider: boolean,
): React.CSSProperties | undefined {
  if (!hasDivider) return undefined;
  return {
    borderBottom:
      "var(--s-border-width-hairline) solid var(--s-color-border-default)",
  };
}
