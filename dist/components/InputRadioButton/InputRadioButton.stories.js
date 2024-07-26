"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Checked = exports.Disabled = exports.Default = void 0;
require("../../styles.scss");
var InputRadioButton_1 = __importDefault(require("./InputRadioButton"));
var blocks_1 = require("@storybook/blocks");
var react_1 = __importDefault(require("react"));
var meta = {
    title: "Components/Input Radio Button",
    component: InputRadioButton_1.default,
    parameters: {
        layout: "centered",
        docs: {
            page: function () { return (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement(blocks_1.Title, null),
                react_1.default.createElement(blocks_1.Subtitle, null, "Component"),
                react_1.default.createElement("p", null,
                    "The ",
                    react_1.default.createElement("strong", null, "Radio Buttons"),
                    " when you need to make a single selection from a list of options."),
                react_1.default.createElement(blocks_1.Primary, null),
                react_1.default.createElement(blocks_1.Controls, null),
                react_1.default.createElement(blocks_1.Stories, null))); },
        },
    },
    tags: ["autodocs"],
    argTypes: {
        label: {
            control: "text",
            description: "The text label displayed next to the radio button.",
            table: {
                category: "Appearance",
            },
        },
        disabled: {
            control: "boolean",
            description: "If true, the radio button will be disabled and unselectable.",
            table: {
                category: "State",
            },
        },
        checked: {
            control: "boolean",
            description: "If true, the radio button will be checked.",
            table: {
                category: "State",
            },
        },
        onChange: {
            action: "onChange",
            description: "Callback function that is called when the radio button value changes.",
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
        disabled: false,
        checked: false,
    },
};
exports.Disabled = {
    args: {
        label: "Label",
        disabled: true,
        checked: false,
    },
};
exports.Checked = {
    args: {
        label: "Label",
        disabled: false,
        checked: true,
    },
};
