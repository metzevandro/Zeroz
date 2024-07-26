"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dismissible = exports.Default = void 0;
var react_1 = __importDefault(require("react"));
var Modal_1 = __importStar(require("./Modal"));
var Button_1 = __importDefault(require("../Button/Button"));
var react_2 = require("react");
var Icon_1 = __importDefault(require("../Icon/Icon"));
var ButtonGroup_1 = __importDefault(require("../ButtonGroup/ButtonGroup"));
require("../../styles.scss");
var blocks_1 = require("@storybook/blocks");
var meta = {
    title: "Components/Modal",
    component: Modal_1.default,
    parameters: {
        layout: "fullscreen",
        docs: {
            page: function () { return (react_1.default.createElement("div", null,
                react_1.default.createElement(blocks_1.Title, null),
                react_1.default.createElement(blocks_1.Subtitle, null, "Component"),
                react_1.default.createElement("p", null,
                    "The ",
                    react_1.default.createElement("strong", null, " Modals "),
                    " are overlays strategically designed to focus the user's attention on a specific task or piece of information."),
                react_1.default.createElement(blocks_1.Primary, null),
                react_1.default.createElement(blocks_1.Controls, null),
                react_1.default.createElement(blocks_1.Stories, null))); },
        },
    },
    argTypes: {
        title: {
            control: "text",
            description: "The title of the modal.",
            table: {
                category: "Content",
            },
        },
        description: {
            control: "text",
            description: "The description text displayed in the modal.",
            table: {
                category: "Content",
            },
        },
        dismissible: {
            control: "boolean",
            description: "If true, the modal can be dismissed by the user.",
            table: {
                category: "State",
            },
        },
        content: {
            control: "object",
            description: "The content of the modal.",
            table: {
                category: "Content",
            },
        },
        footer: {
            control: "object",
            description: "The footer of the modal.",
            table: {
                category: "Content",
            },
        },
        hideModal: {
            action: "hideModal",
            description: "Callback function to hide the modal.",
            table: {
                category: "Actions",
            },
        },
        isOpen: {
            control: "boolean",
            description: "If true, the modal is open.",
            table: {
                category: "State",
            },
        },
    },
};
exports.default = meta;
var Template = function (args) {
    var _a = (0, react_2.useState)(false), isOpen = _a[0], setIsOpen = _a[1];
    var toggleModal = function () {
        setIsOpen(!isOpen);
    };
    return (react_1.default.createElement("div", { style: { height: "100vh", padding: "var(--s-spacing-small)" } },
        react_1.default.createElement("div", { style: { width: "min-content" } },
            react_1.default.createElement(Button_1.default, { size: "md", variant: "primary", label: "Click here!", onClick: toggleModal })),
        react_1.default.createElement(Modal_1.default, { dismissible: args.dismissible, description: args.description, hideModal: toggleModal, title: args.title, isOpen: isOpen, content: args.content, footer: args.footer })));
};
exports.Default = Template.bind({});
exports.Default.args = {
    title: "Title",
    description: "Description",
    dismissible: false,
    content: (react_1.default.createElement(Modal_1.ContentModal, null,
        react_1.default.createElement("div", { className: "slot" },
            react_1.default.createElement(Icon_1.default, { icon: "refresh", size: "md" }),
            "Slot Content"))),
    footer: (react_1.default.createElement(Modal_1.FooterModal, null,
        react_1.default.createElement("div", { style: { width: "min-content" } },
            react_1.default.createElement(ButtonGroup_1.default, { direction: "row", variantFirstButton: "primary", variantSecondButton: "secondary", contentFirstButton: "Button", contentSecondButton: "Button" })))),
};
exports.Dismissible = Template.bind({});
exports.Dismissible.args = {
    title: "Title",
    description: "Description",
    dismissible: true,
    content: (react_1.default.createElement(Modal_1.ContentModal, null,
        react_1.default.createElement("div", { className: "slot" },
            react_1.default.createElement(Icon_1.default, { icon: "refresh", size: "md" }),
            "Slot Content"))),
    footer: (react_1.default.createElement(Modal_1.FooterModal, null,
        react_1.default.createElement("div", { style: { width: "min-content" } },
            react_1.default.createElement(ButtonGroup_1.default, { direction: "row", variantFirstButton: "primary", variantSecondButton: "secondary", contentFirstButton: "Button", contentSecondButton: "Button" })))),
};
