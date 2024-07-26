"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Icon_1 = __importDefault(require("../Icon/Icon"));
require("./Avatar.scss");
var react_1 = __importDefault(require("react"));
var Skeleton_1 = __importDefault(require("../Skeleton/Skeleton"));
var Avatar = function (_a) {
    var _b;
    var size = _a.size, src = _a.src, skeleton = _a.skeleton, letter = _a.letter;
    var getSize = function (size) {
        switch (size) {
            case "sm":
                return 24;
            case "md":
                return 40;
            case "lg":
                return 64;
            default:
                return 32;
        }
    };
    var sizeInPixels = getSize(size);
    var getLetter = function (letter) {
        if (letter && letter.includes(" ")) {
            var _a = letter.split(" "), firstName = _a[0], lastName = _a[1];
            return "".concat(firstName === null || firstName === void 0 ? void 0 : firstName.charAt(0)).concat(lastName === null || lastName === void 0 ? void 0 : lastName.charAt(0));
        }
        else if (letter && letter.length > 1) {
            return letter.charAt(0);
        }
        return letter;
    };
    return (react_1.default.createElement("div", { className: "avatar" }, skeleton ? (react_1.default.createElement(Skeleton_1.default, { height: "".concat(sizeInPixels), circle: true, width: "".concat(sizeInPixels) })) : (react_1.default.createElement(react_1.default.Fragment, null, src ? (react_1.default.createElement("label", { className: "avatar-image" },
        react_1.default.createElement("img", { className: size, src: src, alt: "Avatar" }))) : (react_1.default.createElement(react_1.default.Fragment, null, letter ? (react_1.default.createElement("label", { className: "avatar-letter ".concat(size) }, (_b = getLetter(letter)) === null || _b === void 0 ? void 0 : _b.toLocaleUpperCase())) : (react_1.default.createElement("label", { className: "avatar-icon ".concat(size) },
        react_1.default.createElement(Icon_1.default, { size: size, icon: "person" })))))))));
};
exports.default = Avatar;
