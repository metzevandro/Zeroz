"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
require("./Badge.scss");
var Badge = function (_a) {
    var label = _a.label, type = _a.type, variant = _a.variant;
    return (react_1.default.createElement("div", { className: "badge ".concat(type, " ").concat(variant) },
        react_1.default.createElement("p", null, label)));
};
exports.default = Badge;
