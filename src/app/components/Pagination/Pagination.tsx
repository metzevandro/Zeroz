import "./Pagination.scss";
import Icon from "../Icon/Icon";
import React from "react";

interface PaginationItemProps {
  arrow: "left" | "right";
  disable?: boolean;
  click?: () => void;
}

const PaginationItem: React.FC<PaginationItemProps> = ({
  arrow,
  disable,
  click,
}) => {
  return (
    <>
      <div className="PaginationItem">
        {arrow === "left" ? (
          <button className="arrow_back" disabled={disable} onClick={click}>
            <Icon icon="arrow_back" size="sm" />
          </button>
        ) : arrow === "right" ? (
          <button className="arrow_forward" disabled={disable} onClick={click}>
            <Icon icon="arrow_forward" size="sm" />
          </button>
        ) : (
          "error"
        )}
      </div>
    </>
  );
};

interface PaginationProps {
  variant: "noLabel" | "leftLabel" | "centerLabel";
  disableLeft?: boolean;
  disableRight?: boolean;
  onClickLeft?: () => void;
  onClickRight?: () => void;
  label: string;
}

const Pagination: React.FC<PaginationProps> = ({
  disableRight,
  disableLeft,
  variant,
  onClickRight,
  onClickLeft,
  label,
}) => {
  return (
    <div className="Pagination">
      {variant === "noLabel" ? (
        <div className="noLabel">
          <PaginationItem
            arrow="left"
            disable={disableLeft}
            click={onClickLeft}
          />
          <PaginationItem
            arrow="right"
            disable={disableRight}
            click={onClickRight}
          />
        </div>
      ) : variant === "leftLabel" ? (
        <div className="leftLabel">
          <p>{label}</p>
          <div style={{display: 'flex', gap: '8px'}}>
            <PaginationItem
              arrow="left"
              disable={disableLeft}
              click={onClickLeft}
            />
            <PaginationItem
              arrow="right"
              disable={disableRight}
              click={onClickRight}
            />
          </div>
        </div>
      ) : variant === "centerLabel" ? (
        <div className="centerLabel">
          <PaginationItem
            arrow="left"
            disable={disableLeft}
            click={onClickLeft}
          />
          <p>{label}</p>
          <PaginationItem
            arrow="right"
            disable={disableRight}
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
