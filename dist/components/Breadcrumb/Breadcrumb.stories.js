"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Default = void 0;
var Breadcrumb_1 = require("./Breadcrumb");
require("../../styles.scss");
var blocks_1 = require("@storybook/blocks");
var react_1 = __importDefault(require("react"));
var meta = {
    title: "Components/Breadcrumb",
    component: Breadcrumb_1.Breadcrumb,
    parameters: {
        layout: "centered",
        docs: {
            page: function () { return (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement(blocks_1.Title, null),
                react_1.default.createElement(blocks_1.Subtitle, null, "Component"),
                react_1.default.createElement("p", null,
                    "The ",
                    react_1.default.createElement("strong", null, "Breadcrumb"),
                    " is like a helpful trail that shows where you are and lets you go back to previous pages."),
                react_1.default.createElement(blocks_1.Primary, null),
                react_1.default.createElement(blocks_1.Controls, null),
                react_1.default.createElement(blocks_1.Stories, null))); },
        },
    },
    argTypes: {
        items: {
            name: "Items",
            description: "An array of breadcrumb items, where each item represents a step in the breadcrumb trail.",
            control: "object",
            table: {
                category: "Content",
                type: { summary: "BreadcrumbItem[]" },
            },
        },
    },
    tags: ["autodocs"],
};
exports.default = meta;
var Template = function (args) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(Breadcrumb_1.Breadcrumb, { items: args.items })));
};
exports.Default = Template.bind({});
exports.Default.args = {
    items: [
        { pageName: "Home", href: "/" },
        { pageName: "Category", href: "/category" },
        { pageName: "Product", href: "/product" },
    ],
};
