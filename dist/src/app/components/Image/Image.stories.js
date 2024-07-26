"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Skeleton = exports.Default = void 0;
var Image_1 = __importDefault(require("./Image"));
require("../../styles.scss");
var blocks_1 = require("@storybook/blocks");
var react_1 = __importDefault(require("react"));
var meta = {
    title: "Components/Image",
    component: Image_1.default,
    parameters: {
        layout: "centered",
        docs: {
            page: function () { return (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement(blocks_1.Title, null),
                react_1.default.createElement(blocks_1.Subtitle, null, "Component"),
                react_1.default.createElement("p", null,
                    "The ",
                    react_1.default.createElement("strong", null, "Image"),
                    " display a preview of the images."),
                react_1.default.createElement(blocks_1.Primary, null),
                react_1.default.createElement(blocks_1.Controls, null),
                react_1.default.createElement(blocks_1.Stories, null))); },
        },
    },
    argTypes: {
        src: {
            description: "The URL of the image",
            control: {
                type: "text",
            },
            table: {
                category: "Content",
            },
        },
        width: {
            description: "The width of the image",
            control: {
                type: "text",
            },
            table: {
                category: "Appearance",
            },
        },
        height: {
            description: "The height of the image",
            control: {
                type: "text",
            },
            table: {
                category: "Appearance",
            },
        },
        alt: {
            description: "The alt text for the image",
            control: {
                type: "text",
            },
            table: {
                category: "Content",
            },
        },
        skeleton: {
            description: "Whether to display a skeleton loading state",
            control: {
                type: "boolean",
            },
            table: {
                category: "Behavior",
            },
        },
    },
};
exports.default = meta;
exports.Default = {
    args: {
        src: "https://picsum.photos/200",
        width: "200",
        height: "200",
        alt: "Image",
        skeleton: false,
    },
};
exports.Skeleton = {
    args: {
        src: "https://picsum.photos/200",
        width: "200",
        height: "200",
        alt: "Image",
        skeleton: true,
    },
};
