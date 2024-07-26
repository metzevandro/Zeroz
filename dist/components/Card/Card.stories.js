"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WithImage = exports.Default = void 0;
require("../../styles.scss");
var Card_1 = require("./Card");
var Icon_1 = __importDefault(require("../Icon/Icon"));
var ButtonGroup_1 = __importDefault(require("../ButtonGroup/ButtonGroup"));
var blocks_1 = require("@storybook/blocks");
var react_1 = __importDefault(require("react"));
var meta = {
    title: "Components/Card",
    component: Card_1.Card,
    parameters: {
        layout: "centered",
        docs: {
            page: function () { return (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement(blocks_1.Title, null),
                react_1.default.createElement(blocks_1.Subtitle, null, "Component"),
                react_1.default.createElement("p", null,
                    "The ",
                    react_1.default.createElement("strong", null, "Cards"),
                    " are used to group similar content and tasks. They help you read and do things."),
                react_1.default.createElement(blocks_1.Primary, null),
                react_1.default.createElement(blocks_1.Controls, null),
                react_1.default.createElement(blocks_1.Stories, null))); },
        },
    },
    argTypes: {
        image: {
            description: "The image section of the card, accepts a React node.",
            control: { type: "object" },
            table: {
                category: "Content",
            },
        },
        header: {
            description: "The header section of the card, accepts a React node.",
            control: { type: "object" },
            table: {
                category: "Content",
            },
        },
        title: {
            description: "The title to be displayed in the card header.",
            control: { type: "text" },
            defaultValue: "Title",
            table: {
                category: "Content",
            },
        },
        description: {
            description: "The description to be displayed in the card header.",
            control: { type: "text" },
            defaultValue: "Description",
            table: {
                category: "Content",
            },
        },
        content: {
            description: "The content section of the card, accepts a React node.",
            control: { type: "object" },
            table: {
                category: "Content",
            },
        },
        footer: {
            description: "The footer section of the card, accepts a React node.",
            control: { type: "object" },
            table: {
                category: "Content",
            },
        },
    },
};
exports.default = meta;
var Template = function (args) {
    var _a, _b, _c;
    return (react_1.default.createElement("div", { style: { width: "320px" } },
        react_1.default.createElement(Card_1.Card, { header: (_a = args.header) !== null && _a !== void 0 ? _a : (react_1.default.createElement(Card_1.CardHeader, { title: args.title, description: args.description })), content: (_b = args.content) !== null && _b !== void 0 ? _b : (react_1.default.createElement(Card_1.CardContent, null,
                react_1.default.createElement("div", { className: "slot" },
                    react_1.default.createElement(Icon_1.default, { icon: "refresh", size: "md" }),
                    "Slot Content"))), footer: (_c = args.footer) !== null && _c !== void 0 ? _c : (react_1.default.createElement(Card_1.CardFooter, null,
                react_1.default.createElement("div", { style: { width: "min-content" } },
                    react_1.default.createElement(ButtonGroup_1.default, { direction: "row", variantFirstButton: "primary", variantSecondButton: "secondary", contentFirstButton: "Button", contentSecondButton: "Button" })))) })));
};
exports.Default = Template.bind({});
exports.Default.args = {
    title: "Title",
    description: "Description",
};
var Template2 = function (args) {
    var _a, _b, _c, _d;
    return (react_1.default.createElement("div", { style: { width: "320px" } },
        react_1.default.createElement(Card_1.Card, { image: (_a = args.image) !== null && _a !== void 0 ? _a : (react_1.default.createElement(Card_1.CardImage, null,
                react_1.default.createElement("img", { src: "https://picsum.photos/1200", alt: "Card Image", height: 200 }))), header: (_b = args.header) !== null && _b !== void 0 ? _b : (react_1.default.createElement(Card_1.CardHeader, { title: args.title, description: args.description })), content: (_c = args.content) !== null && _c !== void 0 ? _c : (react_1.default.createElement(Card_1.CardContent, null,
                react_1.default.createElement("div", { className: "slot" },
                    react_1.default.createElement(Icon_1.default, { icon: "refresh", size: "md" }),
                    "Slot Content"))), footer: (_d = args.footer) !== null && _d !== void 0 ? _d : (react_1.default.createElement(Card_1.CardFooter, null,
                react_1.default.createElement("div", { style: { width: "min-content" } },
                    react_1.default.createElement(ButtonGroup_1.default, { direction: "row", variantFirstButton: "primary", variantSecondButton: "secondary", contentFirstButton: "Button", contentSecondButton: "Button" })))) })));
};
exports.WithImage = Template2.bind({});
exports.WithImage.args = {
    title: "Title",
    description: "Description",
};
