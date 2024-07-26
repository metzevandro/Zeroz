"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Disable = exports.Default = void 0;
require("../../styles.scss");
var DataPicker_1 = __importDefault(require("./DataPicker"));
var blocks_1 = require("@storybook/blocks");
var react_1 = __importDefault(require("react"));
var meta = {
    title: "Components/Data Picker",
    component: DataPicker_1.default,
    parameters: {
        layout: "padded",
        docs: {
            page: function () { return (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement(blocks_1.Title, null),
                react_1.default.createElement(blocks_1.Subtitle, null, "Component"),
                react_1.default.createElement("p", null,
                    "The ",
                    react_1.default.createElement("strong", null, "Data picker"),
                    " is used to select a single date."),
                react_1.default.createElement(blocks_1.Primary, null),
                react_1.default.createElement(blocks_1.Controls, null),
                react_1.default.createElement(blocks_1.Stories, null))); },
        },
    },
    argTypes: {
        label: {
            description: "The label for the data picker input field.",
            control: { type: "text" },
            defaultValue: "Label",
            table: {
                category: "Content",
            },
        },
        placeholder: {
            description: "The placeholder text for the data picker input field.",
            control: { type: "text" },
            defaultValue: "Placeholder",
            table: {
                category: "Content",
            },
        },
        disabled: {
            description: "Determines if the data picker input field is disabled.",
            control: { type: "boolean" },
            defaultValue: false,
            table: {
                category: "State",
            },
        },
        onDateChange: {
            description: "Callback function that is called when the date is changed.",
            action: "date changed",
            table: {
                category: "Events",
            },
        },
        date: {
            description: "The initial date to be displayed in the data picker input field.",
            control: { type: "text" },
            defaultValue: "12/06/2024",
            table: {
                category: "Content",
            },
        },
    },
};
exports.default = meta;
var Template = function (args) {
    return (react_1.default.createElement("div", { style: { height: "400px" } },
        react_1.default.createElement(DataPicker_1.default, { date: args.date, label: args.label, onDateChange: args.onDateChange, placeholder: args.placeholder, disabled: args.disabled }),
        " "));
};
exports.Default = Template.bind({});
exports.Default.args = {
    label: "Label",
    placeholder: "Placeholder",
    disabled: false,
    onDateChange: function (date) { return console.log(date); },
    date: "12/06/2024",
};
exports.Disable = Template.bind({});
exports.Disable.args = {
    date: "",
    label: "Label",
    placeholder: "Placeholder",
    disabled: true,
    onDateChange: function (date) { return console.log(date); },
};
