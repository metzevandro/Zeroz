"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Small = exports.Default = void 0;
require("../../styles.scss");
var TableList_1 = __importDefault(require("./TableList"));
var blocks_1 = require("@storybook/blocks");
var react_1 = __importDefault(require("react"));
var meta = {
    title: "Components/Table List",
    component: TableList_1.default,
    tags: ["autodocs"],
    parameters: {
        docs: {
            page: function () { return (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement(blocks_1.Title, null),
                react_1.default.createElement(blocks_1.Subtitle, null, "Component"),
                react_1.default.createElement("p", null,
                    "The ",
                    react_1.default.createElement("strong", null, "Table lists"),
                    " organize and display all information from a data set, providing a complete view for easy comparison and analysis."),
                react_1.default.createElement(blocks_1.Primary, null),
                react_1.default.createElement(blocks_1.Controls, null),
                react_1.default.createElement(blocks_1.Stories, null))); },
        },
    },
    argTypes: {
        columns: {
            name: "Columns",
            description: "Array of column names for the table.",
            defaultValue: { summary: [] },
            table: {
                category: "Data",
                type: { summary: "string[]" },
                defaultValue: { summary: "[]" },
            },
        },
        data: {
            name: "Data",
            description: "2D array of data to populate the table.",
            defaultValue: { summary: [] },
            table: {
                category: "Data",
                type: { summary: "any[][]" },
                defaultValue: { summary: "[]" },
            },
        },
        size: {
            name: "Size",
            description: "Size of the table.",
            control: { type: "select" },
            options: ["sm", "md"],
            defaultValue: { summary: "md" },
            table: {
                category: "Appearance",
                type: { summary: "'sm' | 'md'" },
                defaultValue: { summary: "md" },
            },
        },
    },
};
exports.default = meta;
var columns = ["Name", "Age", "Role", "Experience", "Company"];
var data = [
    ["David", 25, "Developer", "4 years", "Google"],
    ["Maria", 30, "Designer", "1 year", "Microsoft"],
    ["Carlos", 28, "Data Analyst", "1 month", "Netflix"],
];
exports.Default = {
    args: {
        columns: columns,
        data: data,
        size: "md",
    },
};
exports.Small = {
    args: {
        columns: columns,
        data: data,
        size: "sm",
    },
};
