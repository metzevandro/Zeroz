import React from "react";
import { DescriptionListItemProps } from "../DescriptionList.types";
import { getDividerStyle } from "../utils/descriptionList.utils";

/**
 * Renders a single label/value row within a `DescriptionList`.
 * Applies a bottom divider when `hasDivider` is true.
 * 
 * @param title - The label displayed on the leading side
 * @param description - The value or content. Can be string, number, or React component.
 *                      Defaults to "—" if omitted.
 * @param hasDivider - When true, renders a bottom border
 * @param direction - Inherits layout direction from parent ('row' | 'column')
 */
export function DescriptionListItem({
  title,
  description = "—",
  direction,
  hasDivider,
}: DescriptionListItemProps) {
  const displayValue = description ?? "—";

  return (
    <div
      className={`description-list-root ${direction}`}
      style={getDividerStyle(hasDivider)}
    >
      <div className="title">{title}</div>
      <div className="description">{displayValue}</div>
    </div>
  );
}
