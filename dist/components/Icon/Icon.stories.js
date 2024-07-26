"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Default = void 0;
var Icon_1 = __importDefault(require("./Icon"));
require("../../styles.scss");
var blocks_1 = require("@storybook/blocks");
var react_1 = __importDefault(require("react"));
var meta = {
    title: "Components/Icon",
    component: Icon_1.default,
    parameters: {
        layout: "centered",
        docs: {
            page: function () { return (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement(blocks_1.Title, null),
                react_1.default.createElement(blocks_1.Subtitle, null, "Component"),
                react_1.default.createElement("p", null,
                    "The ",
                    react_1.default.createElement("strong", null, "Icons"),
                    " make things easier by helping you find your way, sharing information quickly, and making everything look nicer."),
                react_1.default.createElement(blocks_1.Primary, null),
                react_1.default.createElement(blocks_1.Controls, null),
                react_1.default.createElement(blocks_1.Stories, null))); },
        },
    },
    argTypes: {
        icon: {
            description: "The name of the icon to display. Use Material Icons",
            control: {
                type: "text",
            },
            table: {
                category: "Content",
            },
        },
        size: {
            description: "The size of the icon",
            control: {
                type: "select",
                options: ["sm", "md", "lg"],
            },
            table: {
                category: "Appearance",
            },
        },
        fill: {
            description: "Whether the icon should fill its container",
            control: {
                type: "boolean",
            },
            table: {
                category: "Appearance",
            },
        },
    },
};
exports.default = meta;
var Template = function (args) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(Icon_1.default, { icon: args.icon, size: args.size, fill: args.fill })));
};
exports.Default = Template.bind({});
exports.Default.args = {
    size: "sm",
    icon: "settings",
    fill: true,
};
