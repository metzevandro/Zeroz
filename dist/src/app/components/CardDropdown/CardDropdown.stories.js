"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Default = void 0;
var CardDropdown_1 = __importDefault(require("./CardDropdown"));
var Icon_1 = __importDefault(require("../Icon/Icon"));
var ButtonGroup_1 = __importDefault(require("../ButtonGroup/ButtonGroup"));
require("../../styles.scss");
var blocks_1 = require("@storybook/blocks");
var react_1 = __importDefault(require("react"));
var meta = {
    title: "Components/Card Dropdown",
    component: CardDropdown_1.default,
    parameters: {
        layout: "padded",
        docs: {
            page: function () { return (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement(blocks_1.Title, null),
                react_1.default.createElement(blocks_1.Subtitle, null, "Component"),
                react_1.default.createElement("p", null,
                    "A ",
                    react_1.default.createElement("strong", null, "Card Dropdown"),
                    " is employed when you want to use a card, but the content is too extensive, allowing it to show and hide as necessary."),
                react_1.default.createElement(blocks_1.Primary, null),
                react_1.default.createElement(blocks_1.Controls, null),
                react_1.default.createElement(blocks_1.Stories, null))); },
        },
    },
    args: {
        title: "Card dropdown title",
        description: "Card dropdown description",
    },
    argTypes: {
        title: {
            description: "The title to be displayed in the card dropdown.",
            control: { type: "text" },
            defaultValue: "Card dropdown title",
            table: {
                category: "Content",
            },
        },
        description: {
            description: "The description to be displayed in the card dropdown.",
            control: { type: "text" },
            defaultValue: "Card dropdown description",
            table: {
                category: "Content",
            },
        },
        content: {
            description: "The content section of the card dropdown, accepts a React node.",
            control: { type: "object" },
            table: {
                category: "Content",
            },
        },
        footer: {
            description: "The footer section of the card dropdown, accepts a React node.",
            control: { type: "object" },
            table: {
                category: "Content",
            },
        },
    },
};
exports.default = meta;
exports.Default = {
    render: function (args) {
        var _a, _b;
        return (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(CardDropdown_1.default, { title: args.title, description: args.description, content: (_a = args.content) !== null && _a !== void 0 ? _a : (react_1.default.createElement("div", { className: "slot" },
                    react_1.default.createElement(Icon_1.default, { icon: "refresh", size: "md" }),
                    "Slot Content")), footer: (_b = args.footer) !== null && _b !== void 0 ? _b : (react_1.default.createElement("div", { style: { display: "flex", width: "min-content" } },
                    react_1.default.createElement(ButtonGroup_1.default, { variantFirstButton: "primary", variantSecondButton: "secondary", direction: "row", contentFirstButton: "Button", contentSecondButton: "Button" }))) })));
    },
};
