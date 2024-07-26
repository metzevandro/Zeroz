"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.disabled = exports.Skeleton = exports.OnColor = exports.Plain = exports.Warning = exports.Success = exports.Secondary = exports.primary = void 0;
var ButtonIcon_1 = __importDefault(require("./ButtonIcon"));
require("../../styles.scss");
var blocks_1 = require("@storybook/blocks");
var react_1 = __importDefault(require("react"));
var meta = {
    title: "Components/Button Icon",
    component: ButtonIcon_1.default,
    parameters: {
        layout: "centered",
        docs: {
            page: function () { return (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement(blocks_1.Title, null),
                react_1.default.createElement(blocks_1.Subtitle, null, "Component"),
                react_1.default.createElement("p", null,
                    "The ",
                    react_1.default.createElement("strong", null, "Icon buttons"),
                    " are often in app bars and toolbars. They're good for toggle buttons, like adding or removing something."),
                react_1.default.createElement(blocks_1.Primary, null),
                react_1.default.createElement(blocks_1.Controls, null),
                react_1.default.createElement(blocks_1.Stories, null))); },
        },
    },
    argTypes: {
        size: {
            description: "Defines the size of the button icon. Options are 'sm', 'md', 'lg'.",
            control: { type: "select", options: ["sm", "md", "lg"] },
            defaultValue: "md",
            table: {
                category: "Appearance",
            },
        },
        variant: {
            description: "Defines the visual style of the button icon. Options are 'primary', 'secondary', 'success', 'warning', 'on-color'.",
            control: {
                type: "select",
                options: ["primary", "secondary", "success", "warning", "on-color"],
            },
            defaultValue: "primary",
            table: {
                category: "Appearance",
            },
        },
        buttonType: {
            description: "Defines the type of button icon. Options are 'default' or 'plain'.",
            control: { type: "select", options: ["default", "plain"] },
            defaultValue: "default",
            table: {
                category: "Appearance",
            },
        },
        typeIcon: {
            description: "Defines the type of icon to be displayed. Uses Material Icons names.",
            control: { type: "text" },
            defaultValue: "close",
            table: {
                category: "Content",
            },
        },
        skeleton: {
            description: "Displays the button icon in a skeleton loading state.",
            control: { type: "boolean" },
            defaultValue: false,
            table: {
                category: "State",
            },
        },
        disabled: {
            description: "Disables interaction with the button icon.",
            control: { type: "boolean" },
            defaultValue: false,
            table: {
                category: "State",
            },
        },
        onClick: {
            description: "Function to call when the button icon is clicked.",
            action: "clicked",
            table: {
                category: "Events",
                type: {
                    summary: "(event: React.MouseEvent<HTMLButtonElement>) => void",
                },
            },
        },
    },
    tags: ["autodocs"],
};
exports.default = meta;
exports.primary = {
    args: {
        size: "md",
        variant: "primary",
        buttonType: "default",
        typeIcon: "close",
        skeleton: false,
        disabled: false,
    },
};
exports.Secondary = {
    args: {
        size: "md",
        variant: "secondary",
        buttonType: "default",
        typeIcon: "close",
        skeleton: false,
        disabled: false,
    },
};
exports.Success = {
    args: {
        size: "md",
        variant: "success",
        buttonType: "default",
        typeIcon: "close",
        skeleton: false,
        disabled: false,
    },
};
exports.Warning = {
    args: {
        size: "md",
        variant: "warning",
        buttonType: "default",
        typeIcon: "close",
        skeleton: false,
        disabled: false,
    },
};
exports.Plain = {
    args: {
        size: "md",
        variant: "primary",
        buttonType: "plain",
        typeIcon: "close",
        skeleton: false,
        disabled: false,
    },
};
exports.OnColor = {
    args: {
        size: "md",
        variant: "on-color",
        buttonType: "plain",
        typeIcon: "close",
        skeleton: false,
        disabled: false,
    },
};
exports.Skeleton = {
    args: {
        size: "md",
        variant: "on-color",
        buttonType: "plain",
        typeIcon: "close",
        skeleton: true,
        disabled: false,
    },
};
exports.disabled = {
    args: {
        size: "md",
        variant: "on-color",
        buttonType: "default",
        typeIcon: "close",
        skeleton: false,
        disabled: true,
    },
};
