"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Warning = exports.Success = exports.Large = exports.Default = void 0;
require("../../styles.scss");
var Loading_1 = __importDefault(require("./Loading"));
var blocks_1 = require("@storybook/blocks");
var react_1 = __importDefault(require("react"));
var meta = {
    title: "Components/Loading",
    component: Loading_1.default,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
        docs: {
            page: function () { return (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement(blocks_1.Title, null),
                react_1.default.createElement(blocks_1.Subtitle, null, "Component"),
                react_1.default.createElement("p", null,
                    "The ",
                    react_1.default.createElement("strong", null, "Loading "),
                    " is use to indicate that an action is in progress."),
                react_1.default.createElement(blocks_1.Primary, null),
                react_1.default.createElement(blocks_1.Controls, null),
                react_1.default.createElement(blocks_1.Stories, null))); },
        },
    },
    argTypes: {
        variant: {
            control: "radio",
            options: ["default", "large", "success", "warning"],
            description: "The variant of the loading component, which determines its style and size.",
            table: {
                category: "Appearance",
            },
        },
        message: {
            control: "text",
            description: "The message text displayed alongside the loading indicator.",
            table: {
                category: "Content",
            },
        },
    },
};
exports.default = meta;
exports.Default = {
    args: {
        variant: "default",
        message: "Loading",
    },
};
exports.Large = {
    args: {
        variant: "large",
    },
};
exports.Success = {
    args: {
        variant: "success",
        message: "Success",
    },
};
exports.Warning = {
    args: {
        variant: "warning",
        message: "Warning",
    },
};
