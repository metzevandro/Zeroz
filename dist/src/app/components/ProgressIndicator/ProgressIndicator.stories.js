"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WidthFull = exports.Default = void 0;
var ProgressIndicator_1 = __importDefault(require("./ProgressIndicator"));
require("../../styles.scss");
var blocks_1 = require("@storybook/blocks");
var react_1 = __importDefault(require("react"));
var meta = {
    title: "Components/Progress Indicator",
    component: ProgressIndicator_1.default,
    parameters: {
        layout: "padded",
        docs: {
            page: function () { return (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement(blocks_1.Title, null),
                react_1.default.createElement(blocks_1.Subtitle, null, "Component"),
                react_1.default.createElement("p", null,
                    "The ",
                    react_1.default.createElement("strong", null, "Progress Indicator "),
                    " is a visual guide showing how far you've come in a process, helping you complete each step."),
                react_1.default.createElement(blocks_1.Primary, null),
                react_1.default.createElement(blocks_1.Controls, null),
                react_1.default.createElement(blocks_1.Stories, null))); },
        },
    },
    argTypes: {
        direction: {
            control: "select",
            options: ["row", "column"],
            description: "The direction of the progress indicator steps.",
            table: {
                category: "Layout",
            },
        },
        state: {
            control: "select",
            options: ["default", "current", "completed", "error", "disable"],
            description: "The state of the first step.",
            table: {
                category: "State",
            },
        },
        step: {
            control: "text",
            description: "The label for the first step.",
            table: {
                category: "Content",
            },
        },
        description: {
            control: "text",
            description: "The description for the first step.",
            table: {
                category: "Content",
            },
        },
        widthFull: {
            control: "boolean",
            description: "If true, the first step will take the full width.",
            table: {
                category: "Layout",
            },
        },
        onClick: {
            action: "onClick",
            description: "Callback function for the first step click event.",
            table: {
                category: "Events",
            },
        },
    },
    tags: ["autodocs"],
};
exports.default = meta;
var Template = function (args) {
    return (react_1.default.createElement("div", { style: { display: "flex", width: "100%", flexDirection: args.direction } },
        react_1.default.createElement(ProgressIndicator_1.default, { direction: args.direction, state: args.state, step: args.step, description: args.description, widthFull: args.widthFull })));
};
exports.Default = Template.bind({});
exports.Default.args = {
    direction: "row",
    step: "Step",
    description: "Description",
    state: "completed",
    widthFull: false,
};
exports.WidthFull = Template.bind({});
exports.WidthFull.args = {
    direction: "row",
    step: "Step",
    description: "Description",
    state: "completed",
    widthFull: true,
};
