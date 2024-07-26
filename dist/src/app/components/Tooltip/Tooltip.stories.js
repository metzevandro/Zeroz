"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Default = void 0;
require("../../styles.scss");
var Tooltip_1 = __importDefault(require("./Tooltip"));
var Icon_1 = __importDefault(require("../Icon/Icon"));
var blocks_1 = require("@storybook/blocks");
var react_1 = __importDefault(require("react"));
var meta = {
    title: "Components/Tooltip",
    component: Tooltip_1.default,
    parameters: {
        layout: "centered",
        docs: {
            page: function () { return (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement(blocks_1.Title, null),
                react_1.default.createElement(blocks_1.Subtitle, null, "Component"),
                react_1.default.createElement("p", null,
                    react_1.default.createElement("strong", null, "Tooltips"),
                    " show extra info when you hover or focus, giving helpful context without being crucial, clarifying things for users."),
                react_1.default.createElement(blocks_1.Primary, null),
                react_1.default.createElement(blocks_1.Controls, null),
                react_1.default.createElement(blocks_1.Stories, null))); },
        },
    },
    args: {
        direction: "bottom",
        text: "Tooltip text here...",
    },
    tags: ["autodocs"],
    argTypes: {
        text: {
            name: "Text",
            description: "The text to display inside the tooltip.",
            type: { name: "string" },
            defaultValue: { summary: "Tooltip text here..." },
            table: {
                category: "Content",
                type: { summary: "string" },
                defaultValue: { summary: "Tooltip text here..." },
            },
        },
        direction: {
            name: "Direction",
            description: "The direction in which the tooltip appears relative to the target element.",
            control: { type: "select" },
            options: ["top", "bottom", "left", "right"],
            defaultValue: { summary: "bottom" },
            table: {
                category: "Appearance",
                type: { summary: "'top' | 'bottom' | 'left' | 'right'" },
                defaultValue: { summary: "bottom" },
            },
        },
    },
};
exports.default = meta;
exports.Default = {
    render: function (args) { return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(Tooltip_1.default, { text: args.text, direction: args.direction },
            react_1.default.createElement(Icon_1.default, { icon: "info", size: "md" })))); },
};
