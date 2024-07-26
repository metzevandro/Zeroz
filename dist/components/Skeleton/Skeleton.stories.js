"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Circle = exports.Default = void 0;
var Skeleton_1 = __importDefault(require("./Skeleton"));
require("../../styles.scss");
var blocks_1 = require("@storybook/blocks");
var react_1 = __importDefault(require("react"));
var meta = {
    title: "Components/Skeleton",
    component: Skeleton_1.default,
    parameters: {
        layout: "centered",
        docs: {
            page: function () { return (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement(blocks_1.Title, null),
                react_1.default.createElement(blocks_1.Subtitle, null, "Component"),
                react_1.default.createElement("p", null,
                    "The ",
                    react_1.default.createElement("strong", null, " Skeletons"),
                    " are used to display a placeholder for content during loading times."),
                react_1.default.createElement(blocks_1.Primary, null),
                react_1.default.createElement(blocks_1.Controls, null),
                react_1.default.createElement(blocks_1.Stories, null))); },
        },
    },
    argTypes: {
        width: {
            name: "Width",
            description: "The width of the skeleton loader.",
            type: { name: "string" },
            defaultValue: { summary: "150" },
            control: { type: "text" },
            table: {
                category: "Appearance",
                type: { summary: "string" },
                defaultValue: { summary: "150" },
            },
        },
        height: {
            name: "Height",
            description: "The height of the skeleton loader.",
            type: { name: "string" },
            defaultValue: { summary: "150" },
            control: { type: "text" },
            table: {
                category: "Appearance",
                type: { summary: "string" },
                defaultValue: { summary: "150" },
            },
        },
        circle: {
            name: "Circle",
            description: "If true, the skeleton loader will be a circle.",
            type: { name: "boolean" },
            defaultValue: { summary: false },
            control: { type: "boolean" },
            table: {
                category: "Appearance",
                type: { summary: "boolean" },
            },
        },
    },
};
exports.default = meta;
exports.Default = {
    args: {
        width: "150",
        height: "150",
        circle: false,
    },
};
exports.Circle = {
    args: {
        width: "150",
        height: "150",
        circle: true,
    },
};
