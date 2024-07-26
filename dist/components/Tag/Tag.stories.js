"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Warning = exports.Success = exports.Secondary = exports.primary = void 0;
require("../../styles.scss");
var Tag_1 = __importDefault(require("./Tag"));
var blocks_1 = require("@storybook/blocks");
var react_1 = __importDefault(require("react"));
var meta = {
    title: "Components/Tag",
    component: Tag_1.default,
    parameters: {
        layout: "centered",
        docs: {
            page: function () { return (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement(blocks_1.Title, null),
                react_1.default.createElement(blocks_1.Subtitle, null, "Component"),
                react_1.default.createElement("p", null,
                    "Use ",
                    react_1.default.createElement("strong", null, "Tags"),
                    " to categorize or organize items using keywords that describe them. You also can add or remove tags as need."),
                react_1.default.createElement(blocks_1.Primary, null),
                react_1.default.createElement(blocks_1.Controls, null),
                react_1.default.createElement(blocks_1.Stories, null))); },
        },
    },
    tags: ["autodocs"],
    argTypes: {
        content: {
            name: "Content",
            description: "The text content of the tag.",
            type: { name: "string" },
            defaultValue: { summary: "" },
            table: {
                category: "Data",
                type: { summary: "string" },
                defaultValue: { summary: "" },
            },
        },
        variant: {
            name: "Variant",
            description: "The variant/style of the tag.",
            control: { type: "select" },
            options: ["primary", "secondary", "success", "warning"],
            defaultValue: { summary: "primary" },
            table: {
                category: "Appearance",
                type: { summary: "'primary' | 'secondary' | 'success' | 'warning'" },
                defaultValue: { summary: "primary" },
            },
        },
        onClose: {
            name: "On Close",
            description: "Callback function triggered when the tag is closed.",
            action: "closed",
            table: {
                category: "Events",
                type: { summary: "() => void" },
            },
        },
    },
};
exports.default = meta;
exports.primary = {
    args: {
        content: "Tag",
        variant: "primary",
    },
};
exports.Secondary = {
    args: {
        content: "Tag",
        variant: "secondary",
    },
};
exports.Success = {
    args: {
        content: "Tag",
        variant: "success",
    },
};
exports.Warning = {
    args: {
        content: "Tag",
        variant: "warning",
    },
};
