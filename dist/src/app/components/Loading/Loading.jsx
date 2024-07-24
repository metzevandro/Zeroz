import Icon from "../Icon/Icon";
import "./Loading.scss";
import React from "react";
var Loading = function (_a) {
  var variant = _a.variant,
    message = _a.message;
  return (
    <>
      {variant === "default" && (
        <div className="loading-with-message">
          <span className="loading">
            <Icon size="sm" icon="progress_activity" />
          </span>
          {message && <p className="loading-message">{message}</p>}
        </div>
      )}
      {variant === "large" && (
        <span className="loading">
          <Icon size="lg" icon="progress_activity" />
        </span>
      )}
      {variant === "success" && (
        <div className="loading-with-message">
          <span className="success">
            <Icon size="sm" icon="check_circle" />
          </span>
          {message && <p className="loading-message">{message}</p>}{" "}
        </div>
      )}
      {variant === "warning" && (
        <div className="loading-with-message">
          <span className="warning">
            <Icon size="sm" icon="error_outline" />
          </span>
          {message && <p className="loading-message">{message}</p>}{" "}
        </div>
      )}
    </>
  );
};
export default Loading;
