"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Error = exports.Disabled = exports.Default = void 0;
require("../../styles.scss");
var InputTextArea_1 = __importDefault(require("./InputTextArea"));
var blocks_1 = require("@storybook/blocks");
var react_1 = __importDefault(require("react"));
var meta = {
    title: "Components/Input TextArea",
    component: InputTextArea_1.default,
    tags: ["autodocs"],
    parameters: {
        layout: "padded",
        docs: {
            page: function () { return (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement(blocks_1.Title, null),
                react_1.default.createElement(blocks_1.Subtitle, null, "Component"),
                react_1.default.createElement("p", null,
                    "The ",
                    react_1.default.createElement("strong", null, "Text Area"),
                    " input allows users to write and edit multiple lines of text, making it suitable for entering longer messages or detailed information"),
                react_1.default.createElement(blocks_1.Primary, null),
                react_1.default.createElement(blocks_1.Controls, null),
                react_1.default.createElement(blocks_1.Stories, null))); },
        },
    },
    argTypes: {
        label: {
            control: "text",
            description: "The text label displayed above the textarea.",
            table: {
                category: "Appearance",
            },
        },
        placeholder: {
            control: "text",
            description: "The placeholder text displayed inside the textarea when it is empty.",
            table: {
                category: "Appearance",
            },
        },
        value: {
            control: "text",
            description: "The current value of the textarea.",
            table: {
                category: "Value",
            },
        },
        disabled: {
            control: "boolean",
            description: "If true, the textarea will be disabled and uneditable.",
            table: {
                category: "State",
            },
        },
        error: {
            control: "boolean",
            description: "If true, the textarea will be styled to indicate an error state.",
            table: {
                category: "State",
            },
        },
        errorText: {
            control: "text",
            description: "The error message text displayed below the textarea when in an error state.",
            table: {
                category: "Text",
            },
        },
        onChange: {
            action: "onChange",
            description: "Callback function that is called when the value of the textarea changes.",
            table: {
                category: "Events",
            },
        },
    },
};
exports.default = meta;
exports.Default = {
    args: {
        label: "Label",
        placeholder: "Placeholder",
        disabled: false,
        error: false,
        errorText: "Error",
    },
};
exports.Disabled = {
    args: {
        label: "Label",
        placeholder: "Placeholder",
        disabled: true,
        error: false,
    },
};
exports.Error = {
    args: {
        label: "Label",
        placeholder: "Placeholder",
        error: true,
        errorText: "Error",
        disabled: false,
    },
};
