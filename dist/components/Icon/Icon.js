"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./Icon.scss");
var react_1 = __importDefault(require("react"));
var Icon = function (_a) {
    var size = _a.size, fill = _a.fill, icon = _a.icon;
    var sizeClass = size;
    var fillStyle = "'FILL' ".concat(fill ? 1 : 0, ",\n    'GRAD' 0,\n    'opsz' 24");
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("span", { style: { fontVariationSettings: fillStyle }, className: "material-symbols-outlined ".concat(sizeClass) }, icon)));
};
exports.default = Icon;
