"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Disabled = exports.Multiple = exports.Default = void 0;
require("../../styles.scss");
var ImageUploader_1 = __importDefault(require("./ImageUploader"));
var blocks_1 = require("@storybook/blocks");
var react_1 = __importDefault(require("react"));
var meta = {
    title: "Components/Image Uploader",
    component: ImageUploader_1.default,
    parameters: {
        layout: "padded",
        docs: {
            page: function () { return (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement(blocks_1.Title, null),
                react_1.default.createElement(blocks_1.Subtitle, null, "Component"),
                react_1.default.createElement("p", null,
                    "The ",
                    react_1.default.createElement("strong", null, "Image Uploader"),
                    " allows you to put files on a page by either dragging them into a spot or clicking a button."),
                react_1.default.createElement(blocks_1.Primary, null),
                react_1.default.createElement(blocks_1.Controls, null),
                react_1.default.createElement(blocks_1.Stories, null))); },
        },
    },
    argTypes: {
        iconDropzone: {
            description: "Icon displayed in the dropzone area.",
            control: {
                type: "text",
            },
            table: {
                category: "Appearance",
            },
        },
        labelDropzone: {
            description: "Label displayed in the dropzone area.",
            control: {
                type: "text",
            },
            table: {
                category: "Appearance",
            },
        },
        title: {
            description: "Title of the uploader component.",
            control: {
                type: "text",
            },
            table: {
                category: "Content",
            },
        },
        description: {
            description: "Description of the uploader component.",
            control: {
                type: "text",
            },
            table: {
                category: "Content",
            },
        },
        proportion: {
            description: "Proportion of the image to be uploaded.",
            control: {
                type: "text",
            },
            table: {
                category: "Behavior",
            },
        },
        disabled: {
            description: "Disables the uploader.",
            control: {
                type: "boolean",
            },
            table: {
                category: "Behavior",
            },
        },
        multiple: {
            description: "Allows multiple file uploads.",
            control: {
                type: "boolean",
            },
            table: {
                category: "Behavior",
            },
        },
        maxFileSize: {
            description: "Maximum file size allowed for upload in MB.",
            control: {
                type: "number",
            },
            table: {
                category: "Behavior",
            },
        },
        value: {
            description: "Current value of the uploader.",
            control: {
                type: "object",
            },
            table: {
                category: "Data",
            },
        },
        onChange: {
            description: "Function called when the value changes.",
            table: {
                category: "Events",
            },
        },
    },
};
exports.default = meta;
exports.Default = {
    args: {
        iconDropzone: "file_upload",
        labelDropzone: "Select an image",
        title: "Title",
        description: "Description",
        proportion: "1/1",
        disabled: false,
        multiple: false,
        maxFileSize: 5,
        value: null,
        onChange: function () { },
    },
};
exports.Multiple = {
    args: {
        iconDropzone: "file_upload",
        labelDropzone: "Select an image",
        title: "Title",
        description: "Description",
        proportion: "1/1",
        disabled: false,
        multiple: true,
        maxFileSize: 5,
        value: null,
        onChange: function () { },
    },
};
exports.Disabled = {
    args: {
        iconDropzone: "file_upload",
        labelDropzone: "Select an image",
        title: "Title",
        description: "Description",
        proportion: "1/1",
        disabled: true,
        multiple: false,
        maxFileSize: 5,
        value: null,
        onChange: function () { },
    },
};
