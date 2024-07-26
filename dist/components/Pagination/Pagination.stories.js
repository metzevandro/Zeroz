"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CenterLabel = exports.LeftLabel = exports.Disable = exports.Default = void 0;
require("../../styles.scss");
var Pagination_1 = __importDefault(require("./Pagination"));
var blocks_1 = require("@storybook/blocks");
var react_1 = __importDefault(require("react"));
var meta = {
    title: "Components/Pagination",
    component: Pagination_1.default,
    tags: ["autodocs"],
    parameters: {
        docs: {
            page: function () { return (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement(blocks_1.Title, null),
                react_1.default.createElement(blocks_1.Subtitle, null, "Component"),
                react_1.default.createElement("p", null,
                    "The ",
                    react_1.default.createElement("strong", null, "Pagination"),
                    " enable users to navigate through an ordered collection of items split into pages."),
                react_1.default.createElement(blocks_1.Primary, null),
                react_1.default.createElement(blocks_1.Controls, null),
                react_1.default.createElement(blocks_1.Stories, null))); },
        },
    },
    argTypes: {
        label: {
            control: "text",
            description: "The label for the pagination component.",
            table: {
                category: "Content",
            },
        },
        variant: {
            control: "select",
            options: ["noLabel", "leftLabel", "centerLabel"],
            description: "The variant of the pagination label position.",
            table: {
                category: "Appearance",
            },
        },
        disabledLeft: {
            control: "boolean",
            description: "If true, the left pagination button is disabled.",
            table: {
                category: "State",
            },
        },
        disabledRight: {
            control: "boolean",
            description: "If true, the right pagination button is disabled.",
            table: {
                category: "State",
            },
        },
        onClickLeft: {
            action: "leftClick",
            description: "Callback function when the left pagination button is clicked.",
            table: {
                category: "Actions",
            },
        },
        onClickRight: {
            action: "rightClick",
            description: "Callback function when the right pagination button is clicked.",
            table: {
                category: "Actions",
            },
        },
    },
};
exports.default = meta;
exports.Default = {
    args: {
        label: "Pagination",
        variant: "noLabel",
        disabledLeft: false,
        disabledRight: false,
    },
};
exports.Disable = {
    args: {
        label: "Pagination",
        variant: "noLabel",
        disabledLeft: true,
        disabledRight: true,
    },
};
exports.LeftLabel = {
    args: {
        label: "Pagination",
        variant: "leftLabel",
        disabledLeft: false,
        disabledRight: false,
    },
};
exports.CenterLabel = {
    args: {
        label: "Pagination",
        variant: "centerLabel",
        disabledLeft: false,
        disabledRight: false,
    },
};
