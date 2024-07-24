import React, { useRef, useState, useEffect } from "react";
import "./InputTextArea.scss";
var TextArea = function (_a) {
    var placeholder = _a.placeholder, label = _a.label, disabled = _a.disabled, error = _a.error, errorText = _a.errorText, onChange = _a.onChange, _b = _a.value, value = _b === void 0 ? "" : _b;
    var _c = useState(value), internalValue = _c[0], setInternalValue = _c[1];
    var textareaRef = useRef(null);
    useEffect(function () {
        setInternalValue(value);
    }, [value]);
    var handleButtonClick = function () {
        if (textareaRef.current) {
            textareaRef.current.focus();
        }
    };
    var handleInputChange = function (event) {
        var newValue = event.target.value;
        setInternalValue(newValue);
        if (onChange) {
            onChange(newValue);
        }
    };
    return (<div className="text-area-root">
      <label className="text-area-label">{label}</label>
      <div tabIndex={0} className={"text-area ".concat(disabled && "disabled", " ").concat(error && !disabled ? "error" : "")} onClick={handleButtonClick}>
        <textarea ref={textareaRef} placeholder={placeholder} disabled={disabled} onChange={handleInputChange} value={internalValue}/>
      </div>
      {error && <p className="description">{errorText}</p>}
    </div>);
};
export default TextArea;
