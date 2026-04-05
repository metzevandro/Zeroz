import React from "react";
import { DescriptionListItemProps } from "../DescriptionList.types";
import { getDividerStyle } from "../utils/descriptionList.utils";

/**
 * Renders a single label/value row within a `DescriptionList`.
 * Applies a bottom divider when `hasDivider` is true.
 */
export function DescriptionListItem({
  title,
  description,
  direction,
  hasDivider,
}: DescriptionListItemProps) {
  return (
    <div
      className={`description-list-root ${direction}`}
      style={getDividerStyle(hasDivider)}
    >
      <div className="title">{title}</div>
      <div className="description">{description}</div>
    </div>
  );
}
