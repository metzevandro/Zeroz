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
exports.Default = void 0;
var react_1 = __importDefault(require("react"));
require("../../styles.scss");
var EmptyState_1 = __importDefault(require("./EmptyState"));
var blocks_1 = require("@storybook/blocks");
var meta = {
    title: "Templates/Empty State",
    component: EmptyState_1.default,
    parameters: {
        layout: "padded",
        docs: {
            page: function () { return (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement(blocks_1.Title, null),
                react_1.default.createElement(blocks_1.Subtitle, null, "Template"),
                react_1.default.createElement("p", null,
                    "The ",
                    react_1.default.createElement("strong", null, "EmptyState"),
                    " template has many uses. It communicates when a search finds nothing, a page is empty, or data loading encounters issues. It can display an icon, a title, additional text, and even suggest actions to take next if there's a problem."),
                react_1.default.createElement(blocks_1.Primary, null),
                react_1.default.createElement(blocks_1.Controls, null),
                react_1.default.createElement(blocks_1.Stories, null))); },
        },
    },
    argTypes: {
        icon: {
            name: "Icon",
            description: "Icon to display in the empty state.",
            table: {
                category: "Content",
            },
        },
        title: {
            name: "Title",
            description: "Main title displayed in the empty state.",
            table: {
                category: "Content",
            },
        },
        description: {
            name: "Description",
            description: "Description displayed in the empty state.",
            table: {
                category: "Content",
            },
        },
        buttonContentPrimary: {
            name: "Primary Button Content",
            description: "Text displayed in the primary button.",
            table: {
                category: "Appearence",
            },
        },
        buttonContentSecondary: {
            name: "Secondary Button Content",
            description: "Text displayed in the secondary button.",
            table: {
                category: "Appearence",
            },
        },
        onClickActionPrimary: {
            name: "Primary Button Action",
            description: "Function to be executed on primary button click.",
            table: {
                category: "Actions",
            },
        },
        onClickActionSecondary: {
            name: "Secondary Button Action",
            description: "Function to be executed on secondary button click.",
            table: {
                category: "Actions",
            },
        },
    },
    tags: ["autodocs"],
};
exports.default = meta;
var Template = function (args) {
    return react_1.default.createElement(EmptyState_1.default, __assign({}, args));
};
exports.Default = Template.bind({});
exports.Default.args = {
    title: "Title",
    description: "Description",
    icon: "ac_unit",
    buttonContentPrimary: "Button",
    buttonContentSecondary: "Button",
};
