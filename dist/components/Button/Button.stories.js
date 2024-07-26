"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Skeleton = exports.loading = exports.disabled = exports.withIcon = exports.warning = exports.success = exports.secondary = exports.primary = void 0;
var Button_1 = __importDefault(require("./Button"));
require("../../styles.scss");
var blocks_1 = require("@storybook/blocks");
var react_1 = __importDefault(require("react"));
var meta = {
    title: "Components/Button",
    component: Button_1.default,
    parameters: {
        layout: "centered",
        docs: {
            page: function () { return (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement(blocks_1.Title, null),
                react_1.default.createElement(blocks_1.Subtitle, null, "Component"),
                react_1.default.createElement("p", null,
                    "The ",
                    react_1.default.createElement("strong", null, "Buttons"),
                    " are used to initialize an action. The words on a button tell you what will happen when you click it."),
                react_1.default.createElement(blocks_1.Primary, null),
                react_1.default.createElement(blocks_1.Controls, null),
                react_1.default.createElement(blocks_1.Stories, null))); },
        },
    },
    tags: ["autodocs"],
    argTypes: {
        size: {
            description: "Defines the size of the button. Options are 'small', 'medium', and 'large'.",
            control: { type: "select", options: ["sm", "md", "lg"] },
            defaultValue: "md",
            table: {
                category: "Appearance",
                type: { summary: "sm | md | lg" },
            },
        },
        disabled: {
            description: "Determines if the button is disabled.",
            control: { type: "boolean" },
            defaultValue: false,
            table: {
                category: "State",
                type: { summary: "boolean" },
            },
        },
        label: {
            description: "Text to be displayed inside the button.",
            control: { type: "text" },
            defaultValue: "Button",
            table: {
                category: "Content",
                type: { summary: "string" },
            },
        },
        typeIcon: {
            description: "Defines the type of icon to be displayed inside the button. Uses Material Icons names.",
            control: { type: "text" },
            defaultValue: "",
            table: {
                category: "Content",
                type: { summary: "string" },
            },
        },
        variant: {
            description: "Defines the visual style of the button. Options are 'primary', 'secondary', 'success', 'warning', and 'is-loading'.",
            control: {
                type: "select",
                options: ["primary", "secondary", "success", "warning", "is-loading"],
            },
            defaultValue: "primary",
            table: {
                category: "Appearance",
                type: {
                    summary: "primary | secondary | success | warning | is-loading",
                },
            },
        },
        skeleton: {
            description: "Displays the button in a skeleton loading state.",
            control: { type: "boolean" },
            defaultValue: false,
            table: {
                category: "State",
                type: { summary: "boolean" },
            },
        },
        onClick: {
            description: "Callback function triggered when the button is clicked.",
            action: "clicked",
            table: {
                category: "Events",
                type: {
                    summary: "(event: React.MouseEvent<HTMLButtonElement>) => void",
                },
            },
        },
    },
};
exports.default = meta;
exports.primary = {
    args: {
        size: "md",
        disabled: false,
        label: "Button",
        typeIcon: "",
        variant: "primary",
        skeleton: false,
    },
};
exports.secondary = {
    args: {
        size: "md",
        disabled: false,
        label: "Button",
        typeIcon: "",
        variant: "secondary",
    },
};
exports.success = {
    args: {
        size: "md",
        disabled: false,
        label: "Button",
        typeIcon: "",
        variant: "success",
    },
};
exports.warning = {
    args: {
        size: "md",
        disabled: false,
        label: "Button",
        typeIcon: "",
        variant: "warning",
    },
};
exports.withIcon = {
    args: {
        size: "md",
        disabled: false,
        label: "Button",
        typeIcon: "ac_unit",
        variant: "primary",
    },
};
exports.disabled = {
    args: {
        size: "md",
        disabled: true,
        label: "Button",
        typeIcon: "ac_unit",
        variant: "primary",
    },
};
exports.loading = {
    args: {
        size: "md",
        label: "Button",
        variant: "is-loading",
    },
};
exports.Skeleton = {
    args: {
        size: "md",
        label: "Button",
        variant: "primary",
        skeleton: true,
    },
};
