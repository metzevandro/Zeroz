"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Disabled = exports.Error = exports.Default = void 0;
var InputSelect_1 = __importDefault(require("./InputSelect"));
require("../../styles.scss");
var blocks_1 = require("@storybook/blocks");
var react_1 = __importDefault(require("react"));
var meta = {
    title: "Components/Input Select",
    component: InputSelect_1.default,
    tags: ["autodocs"],
    parameters: {
        layout: "padded",
        docs: {
            page: function () { return (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement(blocks_1.Title, null),
                react_1.default.createElement(blocks_1.Subtitle, null, "Component"),
                react_1.default.createElement("p", null,
                    "The ",
                    react_1.default.createElement("strong", null, "Input Select "),
                    " allows users to choose one option from a list of values."),
                react_1.default.createElement(blocks_1.Primary, null),
                react_1.default.createElement(blocks_1.Controls, null),
                react_1.default.createElement(blocks_1.Stories, null))); },
        },
    },
    argTypes: {
        label: {
            control: "text",
            description: "The text label displayed above the select input field.",
            table: {
                category: "Appearance",
            },
        },
        options: {
            control: "object",
            description: "An array of options to be displayed in the select dropdown. Each option should be a string.",
            table: {
                category: "Options",
            },
        },
        value: {
            control: "text",
            description: "The currently selected value from the options. It should match one of the values in the options array.",
            table: {
                category: "Value",
            },
        },
        error: {
            control: "boolean",
            description: "If true, the select input field will be styled to indicate an error state.",
            table: {
                category: "State",
            },
        },
        errorMessage: {
            control: "text",
            description: "The error message text displayed below the select input field when in an error state.",
            table: {
                category: "Text",
            },
        },
        disabled: {
            control: "boolean",
            description: "If true, the select input field will be disabled and unselectable.",
            table: {
                category: "State",
            },
        },
        onChange: {
            action: "onChange",
            description: "Callback function that is called when the selected value changes.",
            table: {
                category: "Events",
            },
        },
    },
};
exports.default = meta;
var options = ["Option 1", "Option 2", "Option 3"];
exports.Default = {
    args: {
        label: "Label",
        options: options,
        value: options[0],
        error: false,
        errorMessage: "",
        disabled: false,
        onChange: function (value) { },
    },
};
exports.Error = {
    args: {
        label: "Label",
        options: options,
        value: options[0],
        error: true,
        errorMessage: "Error",
        disabled: false,
        onChange: function (value) { },
    },
};
exports.Disabled = {
    args: {
        label: "Label",
        options: options,
        value: options[0],
        disabled: true,
        error: false,
        onChange: function (value) { },
    },
};
