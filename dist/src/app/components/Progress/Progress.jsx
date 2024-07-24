import "./Progress.scss";
import React, { useState, useEffect } from "react";
var Progress = function (_a) {
  var value = _a.value,
    error = _a.error,
    indeterminate = _a.indeterminate;
  var _b = useState(0),
    progress = _b[0],
    setProgress = _b[1];
  useEffect(
    function () {
      setProgress(value);
    },
    [value],
  );
  return (
    <div className="progress">
      {indeterminate === true ? (
        <div className="progress-bar-loading" />
      ) : (
        <div
          className={"progress-bar "
            .concat(value === 100 ? "progress-bar-success" : "", " ")
            .concat(error ? "progress-bar-error" : "")}
          style={{ width: "".concat(progress, "%") }}
        ></div>
      )}
    </div>
  );
};
export default Progress;
