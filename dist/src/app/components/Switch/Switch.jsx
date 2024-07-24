import React, { useState, useEffect, useMemo } from "react";
import "./Switch.scss";
var Switch = function (_a) {
  var modelValue = _a.modelValue,
    value = _a.value,
    label = _a.label,
    id = _a.id,
    name = _a.name,
    required = _a.required,
    noEvents = _a.noEvents,
    disabled = _a.disabled,
    onUpdate = _a.onUpdate;
  var _b = useState(
      modelValue !== null && modelValue !== void 0 ? modelValue : false,
    ),
    checked = _b[0],
    setChecked = _b[1];
  var uid = useMemo(
    function () {
      return id !== null && id !== void 0
        ? id
        : "ui-form-switch-".concat(Math.random().toString(36).substr(2, 9));
    },
    [id],
  );
  useEffect(
    function () {
      if (modelValue !== checked) {
        setChecked(modelValue);
      }
    },
    [modelValue],
  );
  var classList = useMemo(
    function () {
      return [
        "ui-form-switch",
        "-switch",
        disabled ? "-disabled" : "",
        noEvents ? "-no-events" : "",
      ].join(" ");
    },
    [disabled, noEvents],
  );
  var handleChange = function () {
    var newValue = !checked;
    setChecked(newValue);
    onUpdate === null || onUpdate === void 0 ? void 0 : onUpdate(newValue);
  };
  var handleKeyDown = function (event) {
    if (event.key === "Enter") {
      if (disabled === false) {
        handleChange();
      }
    }
  };
  return (
    <label
      className={classList}
      htmlFor={uid}
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      <input
        type="checkbox"
        id={uid}
        value={value}
        required={required}
        name={name}
        disabled={disabled}
        checked={checked}
        onChange={handleChange}
      />
      <span className="ui-form-checkbox-checkmark"></span>
      {label && <div className="ui-form-checkbox-text">{label}</div>}
    </label>
  );
};
export default Switch;
