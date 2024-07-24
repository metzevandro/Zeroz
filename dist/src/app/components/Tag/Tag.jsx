import React, { useState } from "react";
import ButtonIcon from "../ButtonIcon/ButtonIcon";
import "./Tag.scss";
function Tag(props) {
    var _a = useState(false), closed = _a[0], setClosed = _a[1];
    var handleCloseTag = function () {
        setClosed(true);
        if (props.onClose) {
            props.onClose();
        }
    };
    return (<>
      {!closed && (<div className={"tag-root ".concat(props.variant)}>
          {props.content}
          <span>
            <ButtonIcon buttonType="plain" size="sm" typeIcon="close" variant={props.variant === "secondary" ? "primary" : "on-color"} onClick={handleCloseTag}/>
          </span>
        </div>)}
    </>);
}
export default Tag;
