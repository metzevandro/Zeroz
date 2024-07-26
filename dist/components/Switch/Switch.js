"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
require("./Switch.scss");
var Switch = function (_a) {
    var modelValue = _a.modelValue, value = _a.value, label = _a.label, id = _a.id, name = _a.name, required = _a.required, noEvents = _a.noEvents, disabled = _a.disabled, onUpdate = _a.onUpdate;
    var _b = (0, react_1.useState)(modelValue !== null && modelValue !== void 0 ? modelValue : false), checked = _b[0], setChecked = _b[1];
    var uid = (0, react_1.useMemo)(function () { return id !== null && id !== void 0 ? id : "ui-form-switch-".concat(Math.random().toString(36).substr(2, 9)); }, [id]);
    (0, react_1.useEffect)(function () {
        if (modelValue !== checked) {
            setChecked(modelValue);
        }
    }, [modelValue]);
    var classList = (0, react_1.useMemo)(function () {
        return [
            "ui-form-switch",
            "-switch",
            disabled ? "-disabled" : "",
            noEvents ? "-no-events" : "",
        ].join(" ");
    }, [disabled, noEvents]);
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
    return (react_1.default.createElement("label", { className: classList, htmlFor: uid, onKeyDown: handleKeyDown, tabIndex: 0 },
        react_1.default.createElement("input", { type: "checkbox", id: uid, value: value, required: required, name: name, disabled: disabled, checked: checked, onChange: handleChange }),
        react_1.default.createElement("span", { className: "ui-form-checkbox-checkmark" }),
        label && react_1.default.createElement("div", { className: "ui-form-checkbox-text" }, label)));
};
exports.default = Switch;
