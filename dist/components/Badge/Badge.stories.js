"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Warning = exports.Success = exports.primary = exports.Default = void 0;
var Badge_1 = __importDefault(require("./Badge"));
require("../../styles.scss");
var blocks_1 = require("@storybook/blocks");
var react_1 = __importDefault(require("react"));
var meta = {
    title: "Components/Badge",
    component: Badge_1.default,
    parameters: {
        layout: "centered",
        docs: {
            page: function () { return (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement(blocks_1.Title, null),
                react_1.default.createElement(blocks_1.Subtitle, null, "Component"),
                react_1.default.createElement("p", null,
                    "The ",
                    react_1.default.createElement("strong", null, "Badges"),
                    " are like little signs that inform you about the status or actions that have been taken."),
                react_1.default.createElement(blocks_1.Primary, null),
                react_1.default.createElement(blocks_1.Controls, null),
                react_1.default.createElement(blocks_1.Stories, null))); },
        },
    },
    tags: ["autodocs"],
    argTypes: {
        label: {
            name: "Label",
            description: "The text content to display within the badge.",
            type: { name: "string" },
            control: { type: "text" },
            table: {
                category: "Content",
                type: { summary: "string" },
            },
        },
        type: {
            name: "Type",
            description: "The type of badge.",
            control: {
                type: "select",
                options: ["default"],
            },
            table: {
                category: "Appearance",
                type: { summary: "'default'" },
            },
        },
        variant: {
            name: "Variant",
            description: "The visual variant of the badge.",
            control: {
                type: "select",
                options: ["default", "primary", "success", "warning"],
            },
            table: {
                category: "Appearance",
                type: { summary: "'default' | 'primary' | 'success' | 'warning'" },
            },
        },
    },
};
exports.default = meta;
exports.Default = {
    args: {
        label: "Badge",
        type: "default",
        variant: "default",
    },
};
exports.primary = {
    args: {
        label: "Badge",
        type: "default",
        variant: "primary",
    },
};
exports.Success = {
    args: {
        label: "Badge",
        type: "default",
        variant: "success",
    },
};
exports.Warning = {
    args: {
        label: "Badge",
        type: "default",
        variant: "warning",
    },
};
