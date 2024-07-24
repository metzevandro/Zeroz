import React, { useState, useEffect } from "react";
import "./InputRadioButton.scss";
var InputRadioButton = function (_a) {
    var disabled = _a.disabled, label = _a.label, onChange = _a.onChange, controlledChecked = _a.checked;
    var _b = useState(controlledChecked || false), isChecked = _b[0], setIsChecked = _b[1];
    useEffect(function () {
        if (controlledChecked !== undefined) {
            setIsChecked(controlledChecked);
        }
    }, [controlledChecked]);
    var toggleRadioButton = function () {
        if (disabled) {
            return;
        }
        else {
            var newValue = !isChecked;
            setIsChecked(newValue);
            if (onChange) {
                onChange(newValue);
            }
        }
    };
    var handleKeyPress = function (e) {
        if (e.key === "Enter") {
            toggleRadioButton();
        }
    };
    return (<div className={"radio-button-root  ".concat(disabled ? "disable" : "")}>
      <div className={"radio-button ".concat(disabled ? "disable" : "", " ").concat(isChecked ? "checked" : "")} onClick={toggleRadioButton} onKeyDown={handleKeyPress} role="radio" aria-checked={isChecked} tabIndex={0}>
        <span className={"radio-circle ".concat(isChecked ? "checked-circle" : "")}/>
      </div>
      <label onClick={toggleRadioButton} className={"radio-button-label ".concat(disabled ? "disabled" : "")}>
        {label}
      </label>
    </div>);
};
export default InputRadioButton;
