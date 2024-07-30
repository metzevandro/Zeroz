import "./Pagination.scss";
import React from "react";
interface PaginationProps {
  variant: "noLabel" | "leftLabel" | "centerLabel";
  disabledLeft?: boolean;
  disabledRight?: boolean;
  onClickLeft?: () => void;
  onClickRight?: () => void;
  label: string;
}
declare const Pagination: React.FC<PaginationProps>;
export default Pagination;
