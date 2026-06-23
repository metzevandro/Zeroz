import React from "react";
import Icon from "../../Icon/Icon";
import { PaginationArrowButtonProps } from "../Pagination.types";
import { ARROW_ICON } from "../utils/pagination.utils";
import { Skeleton } from "../../Skeleton";

/**
 * Renders a single directional arrow button for the `Pagination` component.
 */
export function PaginationArrowButton({
  direction,
  disabled,
  onClick,
  skeleton,
}: PaginationArrowButtonProps) {
  const icon = ARROW_ICON[direction];

  if (skeleton) {
    return <Skeleton width="33px" height="33px"></Skeleton>;
  }

  return (
    <button
      className={icon}
      disabled={disabled}
      onClick={onClick}
      aria-label={direction === "left" ? "Previous" : "Next"}
    >
      <Icon icon={icon} size="sm" />
    </button>
  );
}
