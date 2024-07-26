"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dismissible = exports.Warning = exports.Success = exports.Secondary = exports.primary = exports.Float = exports.Inline = void 0;
var Notification_1 = __importDefault(require("./Notification"));
require("../../styles.scss");
var blocks_1 = require("@storybook/blocks");
var react_1 = __importDefault(require("react"));
var meta = {
    title: "Components/Notification",
    component: Notification_1.default,
    tags: ["autodocs"],
    parameters: {
        layout: "fullscreen",
        docs: {
            page: function () { return (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement(blocks_1.Title, null),
                react_1.default.createElement(blocks_1.Subtitle, null, "Component"),
                react_1.default.createElement("p", null,
                    "The ",
                    react_1.default.createElement("strong", null, "Notifications"),
                    " are messages that share info with users. There are two types: toast notifications, which pop up briefly, and inline notifications, which appear in the same spot."),
                react_1.default.createElement(blocks_1.Primary, null),
                react_1.default.createElement(blocks_1.Controls, null),
                react_1.default.createElement(blocks_1.Stories, null))); },
        },
    },
    argTypes: {
        description: {
            control: "text",
            description: "The text content of the notification.",
            table: {
                category: "Content",
            },
        },
        icon: {
            control: "text",
            description: "The icon displayed in the notification.",
            table: {
                category: "Appearance",
            },
        },
        title: {
            control: "text",
            description: "The title of the notification.",
            table: {
                category: "Content",
            },
        },
        type: {
            control: "radio",
            options: ["inline", "float"],
            description: "The type of notification, determining its position and style.",
            table: {
                category: "Appearance",
            },
        },
        variant: {
            control: "radio",
            options: ["primary", "secondary", "success", "warning"],
            description: "The variant of the notification, determining its color scheme.",
            table: {
                category: "Appearance",
            },
        },
        dismissible: {
            control: "boolean",
            description: "If true, the notification can be dismissed by the user.",
            table: {
                category: "State",
            },
        },
        buttonLabel: {
            control: "text",
            description: "Label for the action button in the notification.",
            table: {
                category: "Actions",
            },
        },
        disableButton: {
            control: "boolean",
            description: "If true, the action button is disabled.",
            table: {
                category: "Actions",
            },
        },
        withAction: {
            control: "boolean",
            description: "If true, an action button is displayed in the notification.",
            table: {
                category: "Actions",
            },
        },
        isOpen: {
            control: "boolean",
            description: "If true, the notification is displayed.",
            table: {
                category: "State",
            },
        },
    },
};
exports.default = meta;
var Template = function (args) {
    return (react_1.default.createElement("div", { style: { height: "100vh", padding: "var(--s-spacing-small)" } },
        react_1.default.createElement(Notification_1.default, __assign({}, args))));
};
exports.Inline = Template.bind({});
exports.Inline.args = {
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    icon: "ac_unit",
    title: "Title",
    type: "inline",
    variant: "primary",
    dismissible: false,
    buttonLabel: "Button",
    disableButton: false,
    withAction: true,
    isOpen: true,
};
exports.Float = Template.bind({});
exports.Float.args = {
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    icon: "ac_unit",
    title: "Title",
    type: "float",
    variant: "primary",
    dismissible: false,
    buttonLabel: "Button",
    disableButton: false,
    withAction: true,
    isOpen: true,
};
exports.primary = Template.bind({});
exports.primary.args = {
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    icon: "ac_unit",
    title: "Title",
    type: "inline",
    variant: "primary",
    dismissible: false,
    buttonLabel: "Button",
    disableButton: false,
    withAction: false,
    isOpen: true,
};
exports.Secondary = Template.bind({});
exports.Secondary.args = {
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    icon: "ac_unit",
    title: "Title",
    type: "inline",
    variant: "secondary",
    dismissible: false,
    buttonLabel: "Button",
    disableButton: false,
    withAction: false,
    isOpen: true,
};
exports.Success = Template.bind({});
exports.Success.args = {
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    icon: "ac_unit",
    title: "Title",
    type: "inline",
    variant: "success",
    dismissible: false,
    buttonLabel: "Button",
    disableButton: false,
    withAction: false,
    isOpen: true,
};
exports.Warning = Template.bind({});
exports.Warning.args = {
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    icon: "ac_unit",
    title: "Title",
    type: "inline",
    variant: "warning",
    dismissible: false,
    buttonLabel: "Button",
    disableButton: false,
    withAction: false,
    isOpen: true,
};
exports.Dismissible = Template.bind({});
exports.Dismissible.args = {
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    icon: "ac_unit",
    title: "Title",
    type: "inline",
    variant: "primary",
    dismissible: true,
    buttonLabel: "Button",
    disableButton: true,
    withAction: false,
    isOpen: true,
};
