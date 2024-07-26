"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Error = exports.Indeterminate = exports.Success = exports.Loading = exports.Default = void 0;
require("../../styles.scss");
var Progress_1 = __importDefault(require("./Progress"));
var blocks_1 = require("@storybook/blocks");
var react_1 = __importDefault(require("react"));
var meta = {
    title: "Components/Progress",
    component: Progress_1.default,
    parameters: {
        docs: {
            page: function () { return (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement(blocks_1.Title, null),
                react_1.default.createElement(blocks_1.Subtitle, null, "Component"),
                react_1.default.createElement("p", null,
                    "The ",
                    react_1.default.createElement("strong", null, "Progress"),
                    " component shows how a task or operation is loading."),
                react_1.default.createElement(blocks_1.Primary, null),
                react_1.default.createElement(blocks_1.Controls, null),
                react_1.default.createElement(blocks_1.Stories, null))); },
        },
    },
    tags: ["autodocs"],
    argTypes: {
        value: {
            control: "number",
            description: "The current value of the progress bar. When the value is 100, the progress bar turns green.",
            table: {
                category: "Value",
            },
        },
        indeterminate: {
            control: "boolean",
            description: "If true, the progress bar will display an indeterminate state.",
            table: {
                category: "State",
            },
        },
        error: {
            control: "boolean",
            description: "If true, the progress bar will display an error state.",
            table: {
                category: "State",
            },
        },
    },
};
exports.default = meta;
exports.Default = {
    args: {
        value: 0,
        indeterminate: false,
        error: false,
    },
};
exports.Loading = {
    args: {
        value: 50,
        indeterminate: false,
        error: false,
    },
};
exports.Success = {
    args: {
        value: 100,
        indeterminate: false,
        error: false,
    },
};
exports.Indeterminate = {
    args: {
        value: 0,
        indeterminate: true,
        error: false,
    },
};
exports.Error = {
    args: {
        value: 90,
        indeterminate: false,
        error: true,
    },
};
