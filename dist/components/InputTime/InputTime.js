"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
require("./InputTime.scss");
var Input_1 = __importDefault(require("../Input/Input"));
var InputTime = function (_a) {
    var label = _a.label, placeholder = _a.placeholder, disabled = _a.disabled, error = _a.error, textError = _a.textError, onChange = _a.onChange, controlledValue = _a.value, rest = __rest(_a, ["label", "placeholder", "disabled", "error", "textError", "onChange", "value"]);
    var _b = (0, react_1.useState)(false), isModalOpen = _b[0], setIsModalOpen = _b[1];
    var _c = (0, react_1.useState)(""), selectedHour = _c[0], setSelectedHour = _c[1];
    var _d = (0, react_1.useState)(""), selectedMinute = _d[0], setSelectedMinute = _d[1];
    var modalRef = (0, react_1.useRef)(null);
    var openModal = function () {
        setIsModalOpen(!isModalOpen);
    };
    (0, react_1.useEffect)(function () {
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
    (0, react_1.useEffect)(function () {
        if (controlledValue !== undefined) {
            var _a = controlledValue.split(":"), hour = _a[0], minute = _a[1];
            setSelectedHour(hour || "");
            setSelectedMinute(minute || "");
        }
        else {
            setSelectedHour("");
            setSelectedMinute("");
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
    var renderButtons = (0, react_1.useCallback)(function (maxValue, isHour) {
        var buttons = [];
        var _loop_1 = function (i) {
            var formattedValue = i < 10 ? "0".concat(i) : "".concat(i);
            buttons.push(react_1.default.createElement("button", { key: formattedValue, className: "input-time-buttons", onClick: function () {
                    if (isHour) {
                        setSelectedHour(formattedValue);
                        onChange("".concat(formattedValue, ":").concat(selectedMinute));
                    }
                    else {
                        setSelectedMinute(formattedValue);
                        onChange("".concat(selectedHour, ":").concat(formattedValue));
                    }
                }, "aria-label": formattedValue }, formattedValue));
        };
        for (var i = 0; i <= maxValue; i++) {
            _loop_1(i);
        }
        return buttons;
    }, [onChange, selectedHour, selectedMinute]);
    return (react_1.default.createElement("div", { className: "input-time" },
        react_1.default.createElement(Input_1.default, __assign({ label: label, type: "text", value: controlledValue !== undefined && controlledValue !== null
                ? controlledValue
                : selectedHour && selectedMinute
                    ? "".concat(selectedHour, ":").concat(selectedMinute)
                    : "", placeholder: placeholder, typeIcon: "schedule", disabled: disabled, onClick: openModal, onChange: handleInputChange, error: error, textError: textError, inputMode: "numeric", pattern: "[0-9]*" }, rest)),
        isModalOpen && (react_1.default.createElement("div", { className: "input-time-modal", ref: modalRef },
            react_1.default.createElement("div", { className: "modal-section" }, renderButtons(23, true)),
            react_1.default.createElement("div", { className: "modal-section" }, renderButtons(59, false))))));
};
exports.default = InputTime;
