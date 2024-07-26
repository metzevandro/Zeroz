"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Disabled = exports.Default = void 0;
var InputSearch_1 = __importDefault(require("./InputSearch"));
require("../../styles.scss");
var blocks_1 = require("@storybook/blocks");
var react_1 = __importDefault(require("react"));
var meta = {
    title: "Components/Input Search",
    component: InputSearch_1.default,
    tags: ["autodocs"],
    parameters: {
        layout: "padded",
        docs: {
            page: function () { return (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement(blocks_1.Title, null),
                react_1.default.createElement(blocks_1.Subtitle, null, "Component"),
                react_1.default.createElement("p", null,
                    "The ",
                    react_1.default.createElement("strong", null, "Input Search"),
                    " helps you find things by letting you type in a word or phrase instead of clicking around."),
                react_1.default.createElement(blocks_1.Primary, null),
                react_1.default.createElement(blocks_1.Controls, null),
                react_1.default.createElement(blocks_1.Stories, null))); },
        },
    },
    argTypes: {
        placeholder: {
            control: "text",
            description: "The placeholder text displayed inside the search input field when it is empty.",
            table: {
                category: "Appearance",
            },
        },
        disabled: {
            control: "boolean",
            description: "If true, the search input field will be disabled and unclickable.",
            table: {
                category: "State",
            },
        },
        onChange: {
            action: "onChange",
            description: "Callback function that is called when the value of the search input field changes.",
            table: {
                category: "Events",
            },
        },
    },
};
exports.default = meta;
exports.Default = {
    args: {
        placeholder: "Search",
        disabled: false,
    },
};
exports.Disabled = {
    args: {
        placeholder: "Search",
        disabled: true,
    },
};
