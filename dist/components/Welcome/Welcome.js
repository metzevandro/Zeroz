"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Welcome = void 0;
var react_1 = __importDefault(require("react"));
require("./Welcome.scss");
var package_json_1 = __importDefault(require("../../../../package.json"));
var Icon_1 = __importDefault(require("../Icon/Icon"));
require("../../styles.scss");
var Welcome = function () {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("img", { className: "img", src: "/favicon.svg", alt: "" }),
        react_1.default.createElement("div", { className: "welcome" },
            react_1.default.createElement("div", null,
                react_1.default.createElement("h2", null, "@design-system-zeroz"),
                react_1.default.createElement("h4", null, "v".concat(package_json_1.default.version))),
            react_1.default.createElement("div", { className: "welcome-container" },
                react_1.default.createElement("a", { href: "https://github.com/metzevandro/Zeroz", style: { display: "flex" } },
                    react_1.default.createElement("p", null, "Github"),
                    react_1.default.createElement(Icon_1.default, { icon: "arrow_forward", size: "sm" })),
                react_1.default.createElement("a", { href: "https://www.figma.com/file/oxLCV1zqGHyB88OG91z86s/ZeroZ-Design-System?type=design&node-id=21-4682&mode=design&t=a2ofpy8lnxJjcG1Z-0", style: { display: "flex" } },
                    react_1.default.createElement("p", null, "Figma"),
                    react_1.default.createElement(Icon_1.default, { icon: "arrow_forward", size: "sm" }))))));
};
exports.Welcome = Welcome;
