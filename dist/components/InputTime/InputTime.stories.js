"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Error = exports.Disabled = exports.Default = void 0;
require("../../styles.scss");
var InputTime_1 = __importDefault(require("./InputTime"));
var blocks_1 = require("@storybook/blocks");
var react_1 = __importDefault(require("react"));
var meta = {
    title: "Components/Input Time",
    component: InputTime_1.default,
    tags: ["autodocs"],
    parameters: {
        layout: "padded",
        docs: {
            page: function () { return (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement(blocks_1.Title, null),
                react_1.default.createElement(blocks_1.Subtitle, null, "Component"),
                react_1.default.createElement("p", null,
                    "The ",
                    react_1.default.createElement("strong", null, "Time Input"),
                    "allows users to select or enter a specific time, making it easy to accurately input temporal information such as schedules, event times, or time logs."),
                react_1.default.createElement(blocks_1.Primary, null),
                react_1.default.createElement(blocks_1.Controls, null),
                react_1.default.createElement(blocks_1.Stories, null))); },
        },
    },
    argTypes: {
        label: {
            control: "text",
            description: "The text label displayed above the input field.",
            table: {
                category: "Appearance",
            },
        },
        placeholder: {
            control: "text",
            description: "The placeholder text displayed inside the input field when it is empty.",
            table: {
                category: "Appearance",
            },
        },
        value: {
            control: "text",
            description: "The current value of the input field.",
            table: {
                category: "Value",
            },
        },
        disabled: {
            control: "boolean",
            description: "If true, the input field will be disabled and uneditable.",
            table: {
                category: "State",
            },
        },
        error: {
            control: "boolean",
            description: "If true, the input field will be styled to indicate an error state.",
            table: {
                category: "State",
            },
        },
        textError: {
            control: "text",
            description: "The error message text displayed below the input field when in an error state.",
            table: {
                category: "Text",
            },
        },
        onChange: {
            action: "onChange",
            description: "Callback function that is called when the value of the input field changes.",
            table: {
                category: "Events",
            },
        },
    },
};
exports.default = meta;
exports.Default = {
    args: {
        onChange: function (value) { },
        label: "Label",
        placeholder: "Placeholder",
        error: false,
        textError: "Error",
        disabled: false,
    },
};
exports.Disabled = {
    args: {
        onChange: function (value) { },
        label: "Label",
        placeholder: "Placeholder",
        disabled: true,
        error: false,
    },
};
exports.Error = {
    args: {
        onChange: function (value) { },
        label: "Label",
        placeholder: "Placeholder",
        error: true,
        textError: "Error",
        disabled: false,
    },
};
