import "./Icon.scss";
import React from "react";
var Icon = function (_a) {
  var size = _a.size,
    fill = _a.fill,
    icon = _a.icon;
  var sizeClass = size;
  var fillStyle = "'FILL' ".concat(
    fill ? 1 : 0,
    ",\n    'GRAD' 0,\n    'opsz' 24",
  );
  return (
    <>
      <span
        style={{ fontVariationSettings: fillStyle }}
        className={"material-symbols-outlined ".concat(sizeClass)}
      >
        {icon}
      </span>
    </>
  );
};
export default Icon;
