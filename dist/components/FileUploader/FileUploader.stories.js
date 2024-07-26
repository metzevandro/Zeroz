"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Disable = exports.Default = void 0;
require("../../styles.scss");
var FileUploader_1 = __importDefault(require("./FileUploader"));
var blocks_1 = require("@storybook/blocks");
var react_1 = __importDefault(require("react"));
var meta = {
    title: "Components/File Uploader",
    component: FileUploader_1.default,
    parameters: {
        layout: "padded",
        docs: {
            page: function () { return (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement(blocks_1.Title, null),
                react_1.default.createElement(blocks_1.Subtitle, null, "Component"),
                react_1.default.createElement("p", null,
                    "The ",
                    react_1.default.createElement("strong", null, "File uploader"),
                    " lets you choose files and put them in a certain spot."),
                react_1.default.createElement(blocks_1.Primary, null),
                react_1.default.createElement(blocks_1.Controls, null),
                react_1.default.createElement(blocks_1.Stories, null))); },
        },
    },
    argTypes: {
        title: {
            description: "The title for the file uploader component.",
            control: { type: "text" },
            defaultValue: "Upload files",
            table: {
                category: "Content",
            },
        },
        typeIconButton: {
            description: "The icon type for the upload button. Use Material Icons",
            control: { type: "text" },
            defaultValue: "upload_file",
            table: {
                category: "Content",
            },
        },
        buttonLabel: {
            description: "The label for the upload button.",
            control: { type: "text" },
            defaultValue: "Add file",
            table: {
                category: "Content",
            },
        },
        description: {
            description: "The description for the file uploader component.",
            control: { type: "text" },
            defaultValue: "Max file size is 1mb.",
            table: {
                category: "Content",
            },
        },
        multiple: {
            description: "Allows multiple file selection if true.",
            control: { type: "boolean" },
            defaultValue: false,
            table: {
                category: "Behavior",
            },
        },
        disabled: {
            description: "Disables the file uploader if true.",
            control: { type: "boolean" },
            defaultValue: false,
            table: {
                category: "Behavior",
            },
        },
        maxFileSize: {
            description: "The maximum file size allowed in MB.",
            control: { type: "number" },
            defaultValue: 1,
            table: {
                category: "Behavior",
            },
        },
        value: {
            description: "The currently selected files.",
            control: { type: "object" },
            defaultValue: null,
            table: {
                category: "Data",
            },
        },
        onChange: {
            description: "Callback function when files are selected.",
            action: "onChange",
            table: {
                category: "Events",
            },
        },
    },
};
exports.default = meta;
exports.Default = {
    args: {
        title: "Upload files",
        description: "Max file size is 1mb.",
        buttonLabel: "Add file",
        typeIconButton: "upload_file",
        multiple: false,
        disabled: false,
        maxFileSize: 1,
        value: null,
        onChange: function (files) { },
    },
};
exports.Disable = {
    args: {
        typeIconButton: "upload_file",
        buttonLabel: "Add file",
        title: "Upload files",
        description: "Max file size is 1mb.",
        multiple: false,
        disabled: true,
        maxFileSize: 1,
        value: null,
        onChange: function (files) { },
    },
};
