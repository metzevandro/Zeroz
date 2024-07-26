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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var Icon_1 = __importDefault(require("../Icon/Icon"));
require("./InputNumber.scss");
var InputNumber = function (_a) {
    var max = _a.max, min = _a.min, placeholder = _a.placeholder, disabled = _a.disabled, label = _a.label, onChange = _a.onChange, error = _a.error, textError = _a.textError, propValue = _a.value;
    var _b = (0, react_1.useState)(function () {
        if (min !== undefined) {
            return min;
        }
        return undefined;
    }), numero = _b[0], setNumero = _b[1];
    (0, react_1.useEffect)(function () {
        if (propValue !== undefined) {
            var parsedValue = parseInt(propValue, 10);
            if (!isNaN(parsedValue)) {
                setNumero(parsedValue);
            }
        }
    }, [propValue]);
    var addNum = function () {
        setNumero(function (prevNumero) {
            if (prevNumero === undefined)
                return min !== undefined ? min : 1;
            var newNum = prevNumero + 1;
            if (max !== undefined && newNum > max) {
                return prevNumero;
            }
            if (onChange) {
                onChange(newNum.toString());
            }
            return newNum;
        });
    };
    var subtractNum = function () {
        setNumero(function (prevNumero) {
            if (prevNumero === undefined)
                return min !== undefined ? min : -1;
            var newNum = prevNumero - 1;
            if (min !== undefined && newNum < min) {
                return prevNumero;
            }
            if (onChange) {
                onChange(newNum.toString());
            }
            return newNum;
        });
    };
    var handleInputChange = function (event) {
        var inputValue = event.target.value;
        var newNum;
        if (inputValue === "") {
            // Se o input estiver vazio, defina como undefined
            newNum = undefined;
        }
        else {
            newNum = parseInt(inputValue, 10);
            if (!isNaN(newNum)) {
                if (max !== undefined && newNum > max) {
                    newNum = max;
                }
                else if (min !== undefined && newNum < min) {
                    newNum = min;
                }
            }
            else {
                newNum = min !== undefined ? min : undefined;
            }
        }
        setNumero(newNum);
        if (onChange) {
            onChange(newNum !== undefined ? newNum.toString() : "");
        }
    };
    return (react_1.default.createElement("div", { className: "input-number-root" },
        label && react_1.default.createElement("label", { className: "input-number-label" }, label),
        react_1.default.createElement("div", { className: "input-number ".concat(disabled ? "disabled" : "") },
            react_1.default.createElement("button", { disabled: disabled, className: "subtract", onClick: subtractNum },
                react_1.default.createElement(Icon_1.default, { size: "md", icon: "remove" })),
            react_1.default.createElement("input", { className: "input ".concat(error ? "error" : ""), type: "number", placeholder: placeholder, onChange: handleInputChange, value: numero !== undefined ? numero : "", max: max, min: min, disabled: disabled, inputMode: "numeric" }),
            react_1.default.createElement("button", { disabled: disabled, className: "add", onClick: addNum },
                react_1.default.createElement(Icon_1.default, { size: "md", icon: "add" }))),
        error && react_1.default.createElement("div", { className: "textError" }, textError)));
};
exports.default = InputNumber;
