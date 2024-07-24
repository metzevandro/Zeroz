var __rest =
  (this && this.__rest) ||
  function (s, e) {
    var t = {};
    for (var p in s)
      if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (
          e.indexOf(p[i]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(s, p[i])
        )
          t[p[i]] = s[p[i]];
      }
    return t;
  };
import React, { useRef } from "react";
import "./Input.scss";
import Icon from "../Icon/Icon";
var Input = function (_a) {
  var typeIcon = _a.typeIcon,
    fillIcon = _a.fillIcon,
    label = _a.label,
    error = _a.error,
    disabled = _a.disabled,
    textError = _a.textError,
    value = _a.value,
    rest = __rest(_a, [
      "typeIcon",
      "fillIcon",
      "label",
      "error",
      "disabled",
      "textError",
      "value",
    ]);
  var inputRef = useRef(null);
  var handleDivClick = function () {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };
  return (
    <div className="input-root">
      {label && (
        <div className="input-header">
          <label>{label}</label>
        </div>
      )}
      <div>
        <div
          className={"input-content "
            .concat(disabled ? "disabled" : "", " ")
            .concat(error ? "error" : "")}
          onClick={handleDivClick}
        >
          <input
            size={0}
            {...rest}
            value={value}
            disabled={disabled}
            ref={inputRef}
          />
          <Icon icon={typeIcon} size="md" fill={fillIcon} />
        </div>
        {error && <div className="input-error">{textError}</div>}
      </div>
    </div>
  );
};
export default Input;
