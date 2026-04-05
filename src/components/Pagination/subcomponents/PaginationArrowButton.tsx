import React from "react";
import Icon from "../../Icon/Icon";
import { PaginationArrowButtonProps } from "../Pagination.types";
import { ARROW_ICON } from "../utils/pagination.utils";

/**
 * Renders a single directional arrow button for the `Pagination` component.
 */
export function PaginationArrowButton({
  direction,
  disabled,
  onClick,
}: PaginationArrowButtonProps) {
  const icon = ARROW_ICON[direction];

  return (
    <button
      className={icon}
      disabled={disabled}
      onClick={onClick}
      aria-label={direction === "left" ? "Previous page" : "Next page"}
    >
      <Icon icon={icon} size="sm" />
    </button>
  );
}
