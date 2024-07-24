import "./Pagination.scss";
import Icon from "../Icon/Icon";
import React from "react";
var PaginationItem = function (_a) {
    var arrow = _a.arrow, disabled = _a.disabled, click = _a.click;
    return (<>
      {arrow === "left" ? (<button className="arrow_back" disabled={disabled} onClick={click}>
          <Icon icon="arrow_back" size="sm"/>
        </button>) : arrow === "right" ? (<button className="arrow_forward" disabled={disabled} onClick={click}>
          <Icon icon="arrow_forward" size="sm"/>
        </button>) : ("error")}
    </>);
};
var Pagination = function (_a) {
    var disabledRight = _a.disabledRight, disabledLeft = _a.disabledLeft, variant = _a.variant, onClickRight = _a.onClickRight, onClickLeft = _a.onClickLeft, label = _a.label;
    return (<div className="Pagination">
      {variant === "noLabel" ? (<div className="noLabel">
          <PaginationItem arrow="left" disabled={disabledLeft} click={onClickLeft}/>
          <PaginationItem arrow="right" disabled={disabledRight} click={onClickRight}/>
        </div>) : variant === "leftLabel" ? (<div className="leftLabel">
          <p>{label}</p>
          <div style={{ display: "flex" }}>
            <PaginationItem arrow="left" disabled={disabledLeft} click={onClickLeft}/>
            <PaginationItem arrow="right" disabled={disabledRight} click={onClickRight}/>
          </div>
        </div>) : variant === "centerLabel" ? (<div className="centerLabel">
          <PaginationItem arrow="left" disabled={disabledLeft} click={onClickLeft}/>
          <p>{label}</p>
          <PaginationItem arrow="right" disabled={disabledRight} click={onClickRight}/>
        </div>) : ("error")}
    </div>);
};
export default Pagination;
