"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Default = void 0;
require("../../styles.scss");
var SaveBar_1 = __importDefault(require("./SaveBar"));
var blocks_1 = require("@storybook/blocks");
var react_1 = __importDefault(require("react"));
var meta = {
    title: "Components/Save bar",
    component: SaveBar_1.default,
    tags: ["autodocs"],
    parameters: {
        docs: {
            page: function () { return (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement(blocks_1.Title, null),
                react_1.default.createElement(blocks_1.Subtitle, null, "Component"),
                react_1.default.createElement("p", null,
                    "The ",
                    react_1.default.createElement("strong", null, "Save Bar"),
                    " is visible during the creation or editing of objects. Users can utilize it to save or discard their work."),
                react_1.default.createElement(blocks_1.Primary, null),
                react_1.default.createElement(blocks_1.Controls, null),
                react_1.default.createElement(blocks_1.Stories, null))); },
        },
    },
    argTypes: {
        label: {
            control: "text",
            description: "The label displayed on the Save Bar.",
            table: {
                category: "Content",
            },
        },
        labelSave: {
            control: "text",
            description: "The label displayed on the submit button Save Bar.",
            table: {
                category: "Content",
            },
        },
        labelCancel: {
            control: "text",
            description: "The label displayed on the cancel button Save Bar.",
            table: {
                category: "Content",
            },
        },
        onClickCancel: {
            action: "onClickCancel",
            description: "Callback function that is called when the cancel button is clicked.",
            table: {
                category: "Events",
            },
        },
        onClickSave: {
            action: "onClickSave",
            description: "Callback function that is called when the save button is clicked.",
            table: {
                category: "Events",
            },
        },
    },
};
exports.default = meta;
exports.Default = {
    args: {
        labelSave: "Save",
        labelCancel: "Cancel",
        label: "Unsaved changes",
        onClickCancel: function () { },
        onClickSave: function () { },
    },
};
