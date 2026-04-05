import "./Pagination.scss";
import React from "react";
import { PaginationProps } from "./Pagination.types";
import { PaginationArrowButton } from "./subcomponents/PaginationArrowButton";
import { PaginationLabel } from "./subcomponents/PaginationLabel";

/**
 * `Pagination` is a navigation control for moving between pages.
 *
 * Three layout variants are available:
 * - `"noLabel"`     — arrows only
 * - `"leftLabel"`   — label on the left, arrows grouped on the right
 * - `"centerLabel"` — left arrow, label in the center, right arrow
 *
 * When `skeleton` is `true`, both arrows are disabled and the label
 * is replaced with a loading placeholder.
 *
 * @example
 * ```tsx
 * <Pagination
 *   variant="centerLabel"
 *   label="Page 3 of 10"
 *   disabledLeft={page === 1}
 *   disabledRight={page === totalPages}
 *   onClickLeft={() => setPage(p => p - 1)}
 *   onClickRight={() => setPage(p => p + 1)}
 * />
 * ```
 */
const Pagination: React.FC<PaginationProps> = ({
  variant,
  label,
  disabledLeft = false,
  disabledRight = false,
  onClickLeft,
  onClickRight,
  skeleton = false,
}) => {
  const leftButton = (
    <PaginationArrowButton
      direction="left"
      disabled={skeleton || disabledLeft}
      onClick={onClickLeft}
    />
  );

  const rightButton = (
    <PaginationArrowButton
      direction="right"
      disabled={skeleton || disabledRight}
      onClick={onClickRight}
    />
  );

  const labelNode = <PaginationLabel label={label} skeleton={skeleton} />;

  return (
    <div className="Pagination">
      {variant === "noLabel" && (
        <div className="noLabel">
          {leftButton}
          {rightButton}
        </div>
      )}

      {variant === "leftLabel" && (
        <div className="leftLabel">
          {labelNode}
          <div style={{ display: "flex" }}>
            {leftButton}
            {rightButton}
          </div>
        </div>
      )}

      {variant === "centerLabel" && (
        <div className="centerLabel">
          {leftButton}
          {labelNode}
          {rightButton}
        </div>
      )}
    </div>
  );
};

export default Pagination;
