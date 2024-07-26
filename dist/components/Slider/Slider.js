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
require("./Slider.scss");
var Slider = function (_a) {
    var step = _a.step, min = _a.min, max = _a.max, value = _a.value, label = _a.label, onChange = _a.onChange;
    var _b = (0, react_1.useState)(((parseInt(value) - min) / (max - min)) * 100), progress = _b[0], setProgress = _b[1];
    var _c = (0, react_1.useState)(value), currentValue = _c[0], setCurrentValue = _c[1];
    var isDragging = (0, react_1.useRef)(false);
    (0, react_1.useEffect)(function () {
        var newValue = parseInt(value);
        setCurrentValue(value);
        setProgress(((newValue - min) / (max - min)) * 100);
    }, [value, min, max]);
    var handleArrowKeyPress = function (e) {
        if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
            e.preventDefault();
            var change = e.key === "ArrowLeft" ? -step : step;
            var newValue = parseInt(currentValue) + change;
            var alignedValue = Math.round(newValue / step) * step;
            newValue = Math.min(Math.max(alignedValue, min), max);
            updateProgress(newValue);
        }
    };
    var updateProgress = function (newValue) {
        var clampedValue = Math.min(Math.max(newValue, min), max);
        setProgress(((clampedValue - min) / (max - min)) * 100);
        setCurrentValue(String(clampedValue));
        if (onChange) {
            onChange(String(clampedValue));
        }
    };
    var handleDragStart = function (e) {
        isDragging.current = true;
        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("touchmove", handleTouchMove);
        window.addEventListener("mouseup", handleDragEnd);
        window.addEventListener("touchend", handleDragEnd);
        if (e instanceof MouseEvent) {
            handleMouseMove(e);
        }
        else if (e instanceof TouchEvent) {
            handleTouchMove(e);
        }
    };
    var handleSliderClick = function (e) {
        handleDragStart(e);
    };
    var handleMouseMove = function (e) {
        if (e.clientX !== undefined) {
            handleDragMove(e.clientX);
        }
    };
    var handleTouchMove = function (e) {
        var _a, _b;
        if (e.touches.length > 0) {
            handleDragMove((_b = (_a = e.touches[0]) === null || _a === void 0 ? void 0 : _a.clientX) !== null && _b !== void 0 ? _b : 0);
        }
    };
    var handleDragMove = function (clientX) {
        if (isDragging.current) {
            var slider = document.getElementById("slider-background");
            if (slider) {
                var rect = slider.getBoundingClientRect();
                var mouseX = clientX - rect.left;
                var rawPercentage = (mouseX / rect.width) * 100;
                if (rawPercentage > 100) {
                    rawPercentage = 100;
                }
                else if (rawPercentage < 0) {
                    rawPercentage = 0;
                }
                var calculatedValue = (rawPercentage / 100) * (max - min) + min;
                var alignedValue = Math.round(calculatedValue / step) * step;
                updateProgress(alignedValue);
            }
        }
    };
    var handleDragEnd = function () {
        isDragging.current = false;
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("touchmove", handleTouchMove);
        window.removeEventListener("mouseup", handleDragEnd);
        window.removeEventListener("touchend", handleDragEnd);
    };
    var handleInputChange = function (e) {
        var newValue = parseInt(e.target.value);
        updateProgress(newValue);
    };
    return (react_1.default.createElement("div", { className: "slider" },
        react_1.default.createElement("label", { className: "slider-label", htmlFor: "sliderInput" }, label),
        react_1.default.createElement("div", { className: "slider-container" },
            react_1.default.createElement("div", { className: "slider-max-min" }, min),
            react_1.default.createElement("div", { style: {
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    cursor: "grabbing",
                } },
                react_1.default.createElement("div", { id: "slider-background", className: "slider-background", onMouseDown: function (e) { return handleSliderClick(e); } },
                    react_1.default.createElement("div", { className: "slider-progress-bar", style: { width: "".concat(progress, "%") } }),
                    react_1.default.createElement("div", { className: "slider-button", tabIndex: 0, style: { left: "calc(".concat(progress, "% - 10px)") }, onKeyDown: handleArrowKeyPress }))),
            react_1.default.createElement("div", { className: "slider-max-min" }, max),
            react_1.default.createElement("input", { inputMode: "numeric", className: "slider-input", type: "number", min: min, max: max, step: step, value: currentValue, onChange: handleInputChange, id: "sliderInput" }))));
};
exports.default = Slider;
