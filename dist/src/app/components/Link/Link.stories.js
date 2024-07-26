"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Disabled = exports.Default = void 0;
require("../../styles.scss");
var Link_1 = __importDefault(require("./Link"));
var blocks_1 = require("@storybook/blocks");
var react_1 = __importDefault(require("react"));
var meta = {
    title: "Components/Link",
    component: Link_1.default,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
        docs: {
            page: function () { return (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement(blocks_1.Title, null),
                react_1.default.createElement(blocks_1.Subtitle, null, "Component"),
                react_1.default.createElement("p", null,
                    "The ",
                    react_1.default.createElement("strong", null, "Links"),
                    " are pathways to other places, often showing up within or right after a sentence, paragraph, or independently, guiding you to new destinations."),
                react_1.default.createElement(blocks_1.Primary, null),
                react_1.default.createElement(blocks_1.Controls, null),
                react_1.default.createElement(blocks_1.Stories, null))); },
        },
    },
    argTypes: {
        content: {
            control: "text",
            description: "The text content of the link.",
            table: {
                category: "Content",
            },
        },
        href: {
            control: "text",
            description: "The URL that the link points to.",
            table: {
                category: "Link",
            },
        },
        target: {
            control: "text",
            description: 'The target attribute specifies where to open the link (e.g., "_blank" for a new tab).',
            table: {
                category: "Link",
            },
        },
        disabled: {
            control: "boolean",
            description: "If true, the link will be styled as disabled and will not be clickable.",
            table: {
                category: "State",
            },
        },
    },
};
exports.default = meta;
exports.Default = {
    args: {
        content: "Link",
        target: "_blank",
        href: "https://example.com",
        disabled: false,
    },
};
exports.Disabled = {
    args: {
        content: "Link",
        target: "_blank",
        href: "https://example.com",
        disabled: true,
    },
};
