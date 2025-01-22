import "./Pagination.scss";
import Icon from "../Icon/Icon";
import React from "react";
import Skeleton from "../Skeleton/Skeleton";

interface PaginationItemProps {
  arrow: "left" | "right";
  disabled?: boolean;
  click?: () => void;
}

const PaginationItem: React.FC<PaginationItemProps> = ({
  arrow,
  disabled,
  click,
}) => {
  return (
    <>
      {arrow === "left" ? (
        <button className="arrow_back" disabled={disabled} onClick={click}>
          <Icon icon="arrow_back" size="sm" />
        </button>
      ) : arrow === "right" ? (
        <button className="arrow_forward" disabled={disabled} onClick={click}>
          <Icon icon="arrow_forward" size="sm" />
        </button>
      ) : (
        "error"
      )}
    </>
  );
};

interface PaginationProps {
  variant: "noLabel" | "leftLabel" | "centerLabel";
  disabledLeft?: boolean;
  disabledRight?: boolean;
  onClickLeft?: () => void;
  onClickRight?: () => void;
  label: string;
  skeleton?: boolean;
}

const Pagination: React.FC<PaginationProps> = ({
  disabledRight,
  disabledLeft,
  variant,
  onClickRight,
  onClickLeft,
  label,
  skeleton,
}) => {
  return (
    <div className="Pagination">
      {variant === "noLabel" ? (
        <div className="noLabel">
          <PaginationItem
            arrow="left"
            disabled={skeleton || disabledRight}
            click={onClickLeft}
          />
          <PaginationItem
            arrow="right"
            disabled={skeleton || disabledRight}
            click={onClickRight}
          />
        </div>
      ) : variant === "leftLabel" ? (
        <div className="leftLabel">
          {skeleton ? <Skeleton height="24" width="160" /> : <p>{label}</p>}
          <div style={{ display: "flex" }}>
            <PaginationItem
              arrow="left"
              disabled={skeleton || disabledLeft}
              click={onClickLeft}
            />
            <PaginationItem
              arrow="right"
              disabled={skeleton || disabledRight}
              click={onClickRight}
            />
          </div>
        </div>
      ) : variant === "centerLabel" ? (
        <div className="centerLabel">
          <PaginationItem
            arrow="left"
            disabled={skeleton || disabledLeft}
            click={onClickLeft}
          />
          {skeleton ? <Skeleton height="24" width="160" /> : <p>{label}</p>}
          <PaginationItem
            arrow="right"
            disabled={skeleton || disabledRight}
            click={onClickRight}
          />
        </div>
      ) : (
        "error"
      )}
    </div>
  );
};

export default Pagination;
