"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Default = void 0;
var Brand_1 = __importDefault(require("./Brand"));
require("../../styles.scss");
var blocks_1 = require("@storybook/blocks");
var react_1 = __importDefault(require("react"));
var meta = {
    title: "Components/Brand",
    component: Brand_1.default,
    parameters: {
        layout: "centered",
        docs: {
            page: function () { return (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement(blocks_1.Title, null),
                react_1.default.createElement(blocks_1.Subtitle, null, "Component"),
                react_1.default.createElement("p", null,
                    "The ",
                    react_1.default.createElement("strong", null, "Brand"),
                    " component represents the brand logo."),
                react_1.default.createElement(blocks_1.Primary, null),
                react_1.default.createElement(blocks_1.Controls, null),
                react_1.default.createElement(blocks_1.Stories, null))); },
        },
    },
    tags: ["autodocs"],
    argTypes: {
        size: {
            name: "Size",
            description: "Controls the size of the brand logo. Options typically include 'sm', 'md', and 'lg'.",
            control: {
                type: "select",
                options: ["sm", "md", "lg"],
            },
            table: {
                category: "Appearance",
                type: { summary: "'sm' | 'md' | 'lg'" },
            },
        },
        src: {
            name: "Source",
            description: "Specifies the source URL of the brand logo image.",
            control: "text",
            table: {
                category: "Content",
                type: { summary: "string" },
            },
        },
        alt: {
            name: "Alt Text",
            description: "Provides alternative text for the brand logo image, useful for accessibility purposes.",
            control: "text",
            table: {
                category: "Content",
                type: { summary: "string" },
            },
        },
    },
};
exports.default = meta;
exports.Default = {
    args: {
        size: "md",
        src: "/logo-sm.svg",
        alt: "Imagem",
    },
};
