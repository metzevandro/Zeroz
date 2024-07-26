"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Column = exports.Row = void 0;
var DescriptionList_1 = __importDefault(require("./DescriptionList"));
require("../../styles.scss");
var blocks_1 = require("@storybook/blocks");
var react_1 = __importDefault(require("react"));
var meta = {
    title: "Components/Description List",
    component: DescriptionList_1.default,
    parameters: {
        layout: "padded",
        docs: {
            page: function () { return (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement(blocks_1.Title, null),
                react_1.default.createElement(blocks_1.Subtitle, null, "Component"),
                react_1.default.createElement("p", null,
                    "The ",
                    react_1.default.createElement("strong", null, "Description list"),
                    " helps organize and explain related info, perfect for listing and defining terms."),
                react_1.default.createElement(blocks_1.Primary, null),
                react_1.default.createElement(blocks_1.Controls, null),
                react_1.default.createElement(blocks_1.Stories, null))); },
        },
    },
    argTypes: {
        direction: {
            description: "The direction of the description list, either row or column.",
            control: { type: "radio" },
            options: ["row", "column"],
            defaultValue: "row",
            table: {
                category: "Layout",
            },
        },
        items: {
            description: "Array of items to be displayed in the description list. Each item contains a title and description.",
            control: { type: "object" },
            defaultValue: [
                { title: "Title 1", description: "Description 1" },
                { title: "Title 2", description: "Description 2" },
                { title: "Title 3", description: "Description 3" },
            ],
            table: {
                category: "Content",
            },
        },
    },
};
exports.default = meta;
var Template = function (args) {
    return react_1.default.createElement(DescriptionList_1.default, { direction: args.direction, items: args.items });
};
exports.Row = Template.bind({});
exports.Row.args = {
    direction: "row",
    items: [
        {
            title: "Title 1",
            description: "Description 1",
        },
        {
            title: "Title 2",
            description: "Description 2",
        },
        {
            title: "Title 3",
            description: "Description 3",
        },
    ],
};
exports.Column = Template.bind({});
exports.Column.args = {
    direction: "column",
    items: [
        {
            title: "Title 1",
            description: "Description 1",
        },
        {
            title: "Title 2",
            description: "Description 2",
        },
        {
            title: "Title 3",
            description: "Description 3",
        },
    ],
};
