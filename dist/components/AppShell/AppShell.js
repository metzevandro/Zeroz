"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppShell = void 0;
var react_1 = __importDefault(require("react"));
require("./AppShell.scss");
var AppShellContainer = function (_a) {
    var children = _a.children;
    return (react_1.default.createElement("div", { className: "app-shell" }, children));
};
exports.AppShell = react_1.default.memo(AppShellContainer);
exports.default = exports.AppShell;
