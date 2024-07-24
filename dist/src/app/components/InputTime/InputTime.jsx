var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React, { useState, useEffect, useCallback, useRef } from "react";
import "./InputTime.scss";
import Input from "../Input/Input";
var InputTime = function (_a) {
    var label = _a.label, placeholder = _a.placeholder, disabled = _a.disabled, error = _a.error, textError = _a.textError, onChange = _a.onChange, controlledValue = _a.value, rest = __rest(_a, ["label", "placeholder", "disabled", "error", "textError", "onChange", "value"]);
    var _b = useState(false), isModalOpen = _b[0], setIsModalOpen = _b[1];
    var _c = useState(""), selectedHour = _c[0], setSelectedHour = _c[1];
    var _d = useState(""), selectedMinute = _d[0], setSelectedMinute = _d[1];
    var modalRef = useRef(null);
    var openModal = function () {
        setIsModalOpen(!isModalOpen);
    };
    useEffect(function () {
        var handleClickOutside = function (event) {
            if (modalRef.current &&
                !modalRef.current.contains(event.target)) {
                setIsModalOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return function () {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    useEffect(function () {
        if (controlledValue) {
            var _a = controlledValue.split(":"), hour = _a[0], minute = _a[1];
            setSelectedHour(hour);
            setSelectedMinute(minute);
        }
    }, [controlledValue]);
    var handleInputChange = function (event) {
        var newValue = event.target.value;
        newValue = newValue.replace(/[^\d:]/g, "");
        if (newValue.length > 5) {
            newValue = newValue.substring(0, 5);
        }
        if (newValue.length === 2 && newValue.charAt(2) !== ":") {
            newValue = newValue.slice(0, 2) + ":" + newValue.slice(2);
        }
        event.target.value = newValue;
        onChange(newValue);
    };
    var renderButtons = useCallback(function (maxValue, isHour) {
        var buttons = [];
        var _loop_1 = function (i) {
            var formattedValue = i < 10 ? "0".concat(i) : "".concat(i);
            buttons.push(<button key={formattedValue} className="input-time-buttons" onClick={function () {
                    if (isHour) {
                        setSelectedHour(formattedValue);
                        onChange("".concat(formattedValue, ":").concat(selectedMinute));
                    }
                    else {
                        setSelectedMinute(formattedValue);
                        onChange("".concat(selectedHour, ":").concat(formattedValue));
                    }
                }} aria-label={formattedValue}>
            {formattedValue}
          </button>);
        };
        for (var i = 0; i <= maxValue; i++) {
            _loop_1(i);
        }
        return buttons;
    }, [onChange, selectedHour, selectedMinute]);
    return (<div className="input-time">
      <Input label={label} type="text" value={controlledValue !== undefined && controlledValue !== null
            ? controlledValue
            : selectedHour && selectedMinute
                ? "".concat(selectedHour, ":").concat(selectedMinute)
                : ""} placeholder={placeholder} typeIcon="schedule" disabled={disabled} onClick={openModal} onChange={handleInputChange} error={error} textError={textError} inputMode="numeric" pattern="[0-9]*" {...rest}/>
      {isModalOpen && (<div className="input-time-modal" ref={modalRef}>
          <div className="modal-section">{renderButtons(23, true)}</div>
          <div className="modal-section">{renderButtons(59, false)}</div>
        </div>)}
    </div>);
};
export default InputTime;
