import React from "react";
import Icon from "../Icon/Icon";
import "./ProgressIndicator.scss";
var stateNames = {
    default: "circle",
    current: "trip_origin",
    error: "error",
    completed: "check_circle",
    disable: "circle",
};
var ProgressIndicator = function (_a) {
    var step = _a.step, description = _a.description, state = _a.state, direction = _a.direction, onClick = _a.onClick, widthFull = _a.widthFull;
    var displayName = stateNames[state] || state;
    var customizeWidthFull = function (widthFull) {
        if (widthFull === void 0) { widthFull = false; }
        if (widthFull) {
            return {
                width: "100%",
            };
        }
    };
    return (<>
      <div className={"progress-indicator  ".concat(direction, " ").concat(state)} onClick={onClick} style={customizeWidthFull(widthFull)}>
        <div className="header">
          <div className={state}>
            <Icon icon={displayName} size="sm" fill={displayName === "check_circle" || displayName === "error"
            ? true
            : false}/>
          </div>
          <h1>{step}</h1>
        </div>
        <p>{description}</p>
      </div>
    </>);
};
export default ProgressIndicator;
