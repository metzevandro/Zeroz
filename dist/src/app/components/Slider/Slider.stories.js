"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Default = void 0;
require("../../styles.scss");
var Slider_1 = __importDefault(require("./Slider"));
var blocks_1 = require("@storybook/blocks");
var react_1 = __importDefault(require("react"));
var meta = {
    title: "Components/Slider",
    component: Slider_1.default,
    tags: ["autodocs"],
    parameters: {
        docs: {
            page: function () { return (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement(blocks_1.Title, null),
                react_1.default.createElement(blocks_1.Subtitle, null, "Component"),
                react_1.default.createElement("p", null,
                    "The ",
                    react_1.default.createElement("strong", null, "Slider "),
                    " is a input field to to choose a number within a set range of minimum and maximum values."),
                react_1.default.createElement(blocks_1.Primary, null),
                react_1.default.createElement(blocks_1.Controls, null),
                react_1.default.createElement(blocks_1.Stories, null))); },
        },
    },
    argTypes: {
        label: {
            name: "Label",
            description: "The label displayed for the slider.",
            type: { name: "string" },
            defaultValue: { summary: "Label" },
            control: { type: "text" },
            table: {
                category: "Appearance",
                type: { summary: "string" },
                defaultValue: { summary: "Label" },
            },
        },
        value: {
            name: "Value",
            description: "The current value of the slider.",
            type: { name: "string" },
            defaultValue: { summary: "5" },
            control: { type: "text" },
            table: {
                category: "Behavior",
                type: { summary: "string" },
                defaultValue: { summary: "5" },
            },
        },
        max: {
            name: "Max",
            description: "The maximum value of the slider.",
            type: { name: "number" },
            defaultValue: { summary: 10 },
            control: { type: "number" },
            table: {
                category: "Behavior",
                type: { summary: "number" },
            },
        },
        min: {
            name: "Min",
            description: "The minimum value of the slider.",
            type: { name: "number" },
            defaultValue: { summary: 0 },
            control: { type: "number" },
            table: {
                category: "Behavior",
                type: { summary: "number" },
            },
        },
        step: {
            name: "Step",
            description: "The step size for each increment or decrement.",
            type: { name: "number" },
            defaultValue: { summary: 1 },
            control: { type: "number" },
            table: {
                category: "Behavior",
                type: { summary: "number" },
            },
        },
        onChange: {
            name: "On Change",
            description: "Callback function that is triggered when the slider value changes.",
            type: { name: "function" },
            action: "changed",
            table: {
                category: "Events",
                type: { summary: "(value: string) => void" },
            },
        },
    },
};
exports.default = meta;
exports.Default = {
    args: {
        label: "Label",
        value: "5",
        max: 10,
        min: 0,
        step: 1,
        onChange: function (value) { return console.log("Slider value changed:", value); },
    },
};
