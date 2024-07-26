"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Default = void 0;
require("../../styles.scss");
var Switch_1 = __importDefault(require("./Switch"));
var blocks_1 = require("@storybook/blocks");
var react_1 = __importDefault(require("react"));
var meta = {
    title: "Components/Switch",
    component: Switch_1.default,
    parameters: {
        layout: "centered",
        docs: {
            page: function () { return (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement(blocks_1.Title, null),
                react_1.default.createElement(blocks_1.Subtitle, null, "Component"),
                react_1.default.createElement("p", null,
                    "The ",
                    react_1.default.createElement("strong", null, "Switch "),
                    " is used to change between two states, often used for turning things \"on\" or \"off.\""),
                react_1.default.createElement(blocks_1.Primary, null),
                react_1.default.createElement(blocks_1.Controls, null),
                react_1.default.createElement(blocks_1.Stories, null))); },
        },
    },
    tags: ["autodocs"],
    argTypes: {
        label: {
            name: "Label",
            description: "The label displayed for the switch.",
            type: { name: "string" },
            defaultValue: { summary: "Label" },
            control: { type: "text" },
            table: {
                category: "Appearance",
                type: { summary: "string" },
                defaultValue: { summary: "Label" },
            },
        },
        disabled: {
            name: "Disabled",
            description: "Indicates whether the switch is disabled.",
            type: { name: "boolean" },
            defaultValue: { summary: false },
            control: { type: "boolean" },
            table: {
                category: "Behavior",
                type: { summary: "boolean" },
            },
        },
        onUpdate: {
            name: "On Update",
            description: "Callback function that is triggered when the switch value changes.",
            type: { name: "function" },
            action: "updated",
            table: {
                category: "Events",
                type: { summary: "(checked: boolean) => void" },
            },
        },
        modelValue: {
            name: "Model Value",
            description: "The model value of the switch.",
            table: {
                category: "Data",
                type: { summary: "any" },
            },
        },
        value: {
            name: "Value",
            description: "The value of the switch.",
            table: {
                category: "Data",
                type: { summary: "any" },
            },
        },
        id: {
            name: "ID",
            description: "The unique identifier for the switch.",
            type: { name: "string" },
            table: {
                category: "Identification",
                type: { summary: "string" },
            },
        },
        name: {
            name: "Name",
            description: "The name of the switch.",
            type: { name: "string" },
            table: {
                category: "Identification",
                type: { summary: "string" },
            },
        },
        required: {
            name: "Required",
            description: "Indicates whether the switch is required.",
            type: { name: "boolean" },
            defaultValue: { summary: false },
            control: { type: "boolean" },
            table: {
                category: "Validation",
                type: { summary: "boolean" },
            },
        },
        noEvents: {
            name: "No Events",
            description: "Indicates whether events should be ignored.",
            type: { name: "boolean" },
            defaultValue: { summary: false },
            control: { type: "boolean" },
            table: {
                category: "Behavior",
                type: { summary: "boolean" },
            },
        },
    },
};
exports.default = meta;
exports.Default = {
    args: {
        label: "Label",
        disabled: false,
        modelValue: null,
        value: null,
        id: "switch-id",
        name: "switch-name",
        required: false,
        noEvents: false,
    },
};
