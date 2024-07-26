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
exports.WidthFull = exports.Default = void 0;
var react_1 = __importDefault(require("react"));
var Tab_1 = __importDefault(require("./Tab"));
var Icon_1 = __importDefault(require("../Icon/Icon"));
require("../../styles.scss");
var blocks_1 = require("@storybook/blocks");
var meta = {
    title: "Components/Tab",
    component: Tab_1.default,
    parameters: {
        tags: ["autodocs"],
        docs: {
            page: function () { return (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement(blocks_1.Title, null),
                react_1.default.createElement(blocks_1.Subtitle, null, "Component"),
                react_1.default.createElement("p", null,
                    "The ",
                    react_1.default.createElement("strong", null, "Tabs "),
                    " is to easily switch between different views within the same context."),
                react_1.default.createElement(blocks_1.Primary, null),
                react_1.default.createElement(blocks_1.Controls, null),
                react_1.default.createElement(blocks_1.Stories, null))); },
        },
    },
    argTypes: {
        widthFull: {
            name: "Width Full",
            description: "Determines if the tabs should take up the full width.",
            type: { name: "boolean" },
            defaultValue: { summary: false },
            control: { type: "boolean" },
            table: {
                category: "Appearance",
                type: { summary: "boolean" },
            },
        },
        tabs: {
            name: "Tabs",
            description: "Array of tab objects with labels and content.",
            defaultValue: { summary: [] },
            table: {
                category: "Data",
                type: { summary: "Array<{ label: string, content: React.ReactNode }>" },
                defaultValue: { summary: "[]" },
            },
        },
    },
};
exports.default = meta;
var Template = function (args) { return react_1.default.createElement(Tab_1.default, __assign({}, args)); };
exports.Default = Template.bind({});
exports.Default.args = {
    widthFull: false,
    tabs: [
        {
            label: "Tab 1",
            content: (react_1.default.createElement("div", { className: "slot" },
                react_1.default.createElement(Icon_1.default, { icon: "refresh", size: "md" }),
                "1st Content")),
        },
        {
            label: "Tab 2",
            content: (react_1.default.createElement("div", { className: "slot" },
                react_1.default.createElement(Icon_1.default, { icon: "refresh", size: "md" }),
                "2nd Content")),
        },
    ],
};
exports.WidthFull = Template.bind({});
exports.WidthFull.args = {
    widthFull: true,
    tabs: [
        {
            label: "Tab 1",
            content: (react_1.default.createElement("div", { className: "slot" },
                react_1.default.createElement(Icon_1.default, { icon: "refresh", size: "md" }),
                "1st Content")),
        },
        {
            label: "Tab 2",
            content: (react_1.default.createElement("div", { className: "slot" },
                react_1.default.createElement(Icon_1.default, { icon: "refresh", size: "md" }),
                "2nd Content")),
        },
    ],
};
