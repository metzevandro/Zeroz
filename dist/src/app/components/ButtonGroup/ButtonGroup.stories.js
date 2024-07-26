"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Column = exports.Row = void 0;
var ButtonGroup_1 = __importDefault(require("./ButtonGroup"));
require("../../styles.scss");
var blocks_1 = require("@storybook/blocks");
var react_1 = __importDefault(require("react"));
var meta = {
    title: "Components/Button Group",
    component: ButtonGroup_1.default,
    parameters: {
        layout: "centered",
        docs: {
            page: function () { return (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement(blocks_1.Title, null),
                react_1.default.createElement(blocks_1.Subtitle, null, "Component"),
                react_1.default.createElement("p", null,
                    "The ",
                    react_1.default.createElement("strong", null, "Button group"),
                    " is used to group related buttons, either stacked or in a row. It helps keep things organized and spaced nicely."),
                react_1.default.createElement(blocks_1.Primary, null),
                react_1.default.createElement(blocks_1.Controls, null),
                react_1.default.createElement(blocks_1.Stories, null))); },
        },
    },
    argTypes: {
        direction: {
            description: "Defines the direction of the button group. Options are 'row' or 'column'.",
            control: { type: "select", options: ["row", "column"] },
            defaultValue: "row",
            table: {
                category: "Layout",
                type: { summary: "row | column" },
            },
        },
        contentFirstButton: {
            description: "Text to be displayed inside the first button.",
            control: { type: "text" },
            defaultValue: "Button",
            table: {
                category: "Button 1",
                type: { summary: "string" },
            },
        },
        variantFirstButton: {
            description: "Defines the visual style of the first button. Options are 'primary', 'secondary', 'success', 'warning', etc.",
            control: {
                type: "select",
                options: ["primary", "secondary", "success", "warning"],
            },
            defaultValue: "primary",
            table: {
                category: "Button 1",
                type: { summary: "primary | secondary | success | warning" },
            },
        },
        typeIconFirstButton: {
            description: "Defines the type of icon to be displayed inside the first button. Uses Material Icons names.",
            control: { type: "text" },
            defaultValue: "",
            table: {
                category: "Button 1",
                type: { summary: "string" },
            },
        },
        disableFirstButton: {
            description: "Determines if the first button is disabled.",
            control: { type: "boolean" },
            defaultValue: false,
            table: {
                category: "Button 1",
                type: { summary: "boolean" },
            },
        },
        skeletonFirstButton: {
            description: "Displays the first button in a skeleton loading state.",
            control: { type: "boolean" },
            defaultValue: false,
            table: {
                category: "Button 1",
                type: { summary: "boolean" },
            },
        },
        onClickFirstButton: {
            description: "Function to call when the first button is clicked.",
            action: "clicked",
            table: {
                category: "Button 1",
                type: {
                    summary: "(event: React.MouseEvent<HTMLButtonElement>) => void",
                },
            },
        },
        contentSecondButton: {
            description: "Text to be displayed inside the second button.",
            control: { type: "text" },
            defaultValue: "Button",
            table: {
                category: "Button 2",
                type: { summary: "string" },
            },
        },
        variantSecondButton: {
            description: "Defines the visual style of the second button. Options are 'primary', 'secondary', 'success', 'warning', etc.",
            control: {
                type: "select",
                options: ["primary", "secondary", "success", "warning"],
            },
            defaultValue: "secondary",
            table: {
                category: "Button 2",
                type: { summary: "primary | secondary | success | warning" },
            },
        },
        typeIconSecondButton: {
            description: "Defines the type of icon to be displayed inside the second button. Uses Material Icons names.",
            control: { type: "text" },
            defaultValue: "",
            table: {
                category: "Button 2",
                type: { summary: "string" },
            },
        },
        disableSecondButton: {
            description: "Determines if the second button is disabled.",
            control: { type: "boolean" },
            defaultValue: false,
            table: {
                category: "Button 2",
                type: { summary: "boolean" },
            },
        },
        skeletonSecondButton: {
            description: "Displays the second button in a skeleton loading state.",
            control: { type: "boolean" },
            defaultValue: false,
            table: {
                category: "Button 2",
                type: { summary: "boolean" },
            },
        },
        onClickSecondButton: {
            description: "Function to call when the second button is clicked.",
            action: "clicked",
            table: {
                category: "Button 2",
                type: {
                    summary: "(event: React.MouseEvent<HTMLButtonElement>) => void",
                },
            },
        },
    },
    tags: ["autodocs"],
};
exports.default = meta;
exports.Row = {
    args: {
        direction: "row",
        contentFirstButton: "Button",
        variantFirstButton: "primary",
        typeIconFirstButton: "",
        disableFirstButton: false,
        skeletonFirstButton: false,
        contentSecondButton: "Button",
        variantSecondButton: "secondary",
        disableSecondButton: false,
        typeIconSecondButton: "",
        skeletonSecondButton: false,
    },
    argTypes: {
        onClickFirstButton: { action: "clicked" },
        onClickSecondButton: { action: "clicked" },
    },
};
exports.Column = {
    args: {
        direction: "column",
        contentFirstButton: "Button",
        variantFirstButton: "primary",
        typeIconFirstButton: "",
        disableFirstButton: false,
        skeletonFirstButton: false,
        contentSecondButton: "Button",
        variantSecondButton: "secondary",
        disableSecondButton: false,
        typeIconSecondButton: "",
        skeletonSecondButton: false,
    },
};
