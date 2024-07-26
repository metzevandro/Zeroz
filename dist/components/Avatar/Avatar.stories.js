"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Skeleton = exports.withLetter = exports.withImage = exports.Default = void 0;
var Avatar_1 = __importDefault(require("./Avatar"));
var react_1 = __importDefault(require("react"));
require("../../styles.scss");
var blocks_1 = require("@storybook/blocks");
var meta = {
    title: "Components/Avatar",
    component: Avatar_1.default,
    parameters: {
        layout: "centered",
        docs: {
            page: function () { return (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement(blocks_1.Title, null),
                react_1.default.createElement(blocks_1.Subtitle, null, "Component"),
                react_1.default.createElement("p", null,
                    "The ",
                    react_1.default.createElement("strong", null, "Avatars"),
                    " are used to represent a user, customer or business."),
                react_1.default.createElement(blocks_1.Primary, null),
                react_1.default.createElement(blocks_1.Controls, null),
                react_1.default.createElement(blocks_1.Stories, null))); },
        },
    },
    tags: ["autodocs"],
    argTypes: {
        size: {
            name: "Size",
            description: "The size of the avatar. Can be 'sm', 'md', or 'lg'.",
            control: {
                type: "select",
                options: ["sm", "md", "lg"],
            },
            table: {
                category: "Appearance",
                type: { summary: "'sm' | 'md' | 'lg'" },
            },
        },
        src: {
            name: "Source",
            description: "The source URL of the avatar image.",
            control: "text",
            table: {
                category: "Data",
                type: { summary: "string" },
            },
        },
        letter: {
            name: "Letter",
            description: "The letter to display when there is no image.",
            control: "text",
            table: {
                category: "Data",
                type: { summary: "string" },
            },
        },
        skeleton: {
            name: "Skeleton",
            description: "If true, the avatar will display a skeleton loading state.",
            control: "boolean",
            table: {
                category: "State",
                type: { summary: "boolean" },
            },
        },
    },
};
exports.default = meta;
var Template = function (args) {
    return (react_1.default.createElement(Avatar_1.default, { size: args.size, src: args.src, skeleton: args.skeleton, letter: args.letter }));
};
exports.Default = Template.bind({});
exports.Default.args = {
    size: "md",
    src: "",
    letter: "",
    skeleton: false,
};
exports.withImage = Template.bind({});
exports.withImage.args = {
    size: "md",
    src: "https://picsum.photos/100",
    skeleton: false,
};
exports.withLetter = Template.bind({});
exports.withLetter.args = {
    size: "md",
    letter: "L",
    src: "",
    skeleton: false,
};
exports.Skeleton = Template.bind({});
exports.Skeleton.args = {
    size: "md",
    src: "",
    skeleton: true,
};
