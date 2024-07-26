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
exports.Default = void 0;
var react_1 = __importStar(require("react"));
var Aside_1 = __importStar(require("./Aside"));
var Icon_1 = __importDefault(require("../Icon/Icon"));
require("./Aside.scss");
var ButtonGroup_1 = __importDefault(require("../ButtonGroup/ButtonGroup"));
var Button_1 = __importDefault(require("../Button/Button"));
require("../../styles.scss");
var blocks_1 = require("@storybook/blocks");
var meta = {
    title: "Components/Aside",
    component: Aside_1.default,
    parameters: {
        layout: "fullscreen",
        docs: {
            page: function () { return (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement(blocks_1.Title, null),
                react_1.default.createElement(blocks_1.Subtitle, null, "Component"),
                react_1.default.createElement("p", null,
                    "The ",
                    react_1.default.createElement("strong", null, "Aside"),
                    " is an overlay component designed to display settings or additional content that complements the main information on the screen."),
                react_1.default.createElement(blocks_1.Primary, null),
                react_1.default.createElement(blocks_1.Controls, null),
                react_1.default.createElement(blocks_1.Stories, null))); },
        },
    },
    tags: ["autodocs"],
    argTypes: {
        buttonLabel: {
            name: "Button Label",
            description: "The label of the button that opens/closes the Aside component.",
            control: "text",
            table: {
                category: "Data",
                type: { summary: "string" },
            },
        },
        isOpen: {
            name: "Is Open",
            description: "Indicates whether the Aside component is open or closed.",
            control: "boolean",
            table: {
                category: "State",
                type: { summary: "boolean" },
            },
        },
        toggleAside: {
            name: "Toggle Aside",
            description: "Action to open and close the aside component.",
            action: "toggled",
            table: {
                category: "Events",
                type: {
                    summary: "(event: React.MouseEvent<HTMLButtonElement>) => void",
                },
            },
        },
        title: {
            name: "Title",
            description: "The title displayed in the Aside component.",
            control: "text",
            table: {
                category: "Data",
                type: { summary: "string" },
            },
        },
        description: {
            name: "Description",
            description: "The description displayed in the Aside component.",
            control: "text",
            table: {
                category: "Data",
                type: { summary: "string" },
            },
        },
        content: {
            name: "Content",
            description: "Content of the aside component.",
            table: {
                category: "Content",
                type: { summary: "React.ReactNode" },
            },
        },
        footer: {
            name: "Footer",
            description: "Footer of the aside component.",
            table: {
                category: "Content",
                type: { summary: "React.ReactNode" },
            },
        },
    },
};
exports.default = meta;
var Template = function (args) {
    var _a = (0, react_1.useState)(args.isOpen), isOpenAside = _a[0], setIsOpenAside = _a[1];
    var toggleAside = function () {
        setIsOpenAside(!isOpenAside);
    };
    return (react_1.default.createElement("div", { style: { height: "500px", padding: "var(--s-spacing-medium)" } },
        react_1.default.createElement("div", { style: { width: "min-content" } },
            react_1.default.createElement(Button_1.default, { size: "md", variant: "primary", label: args.buttonLabel, onClick: toggleAside })),
        react_1.default.createElement(Aside_1.default, { isOpen: isOpenAside || args.isOpen, toggleAside: toggleAside, title: args.title, description: args.description, content: react_1.default.createElement(Aside_1.AsideContent, null,
                react_1.default.createElement("div", { className: "slot" },
                    react_1.default.createElement(Icon_1.default, { icon: "refresh", size: "md" }),
                    "Slot Content")), footer: react_1.default.createElement(Aside_1.AsideFooter, null,
                react_1.default.createElement("div", { style: { width: "min-content" } },
                    react_1.default.createElement(ButtonGroup_1.default, { direction: "row", variantFirstButton: "primary", variantSecondButton: "secondary", contentFirstButton: "Button", contentSecondButton: "Button" }))) })));
};
exports.Default = Template.bind({});
exports.Default.args = {
    title: "Title aside here!",
    description: "Aside description",
    isOpen: false,
    buttonLabel: "Click here!",
};
