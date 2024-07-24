import React from "react";
import "./Badge.scss";
var Badge = function (_a) {
    var label = _a.label, type = _a.type, variant = _a.variant;
    return (<div className={"badge ".concat(type, " ").concat(variant)}>
    <p>{label}</p>
  </div>);
};
export default Badge;
