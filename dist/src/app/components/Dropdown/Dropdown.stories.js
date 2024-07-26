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
var Dropdown_1 = __importStar(require("./Dropdown"));
var Button_1 = __importDefault(require("../Button/Button"));
require("../../styles.scss");
var blocks_1 = require("@storybook/blocks");
var meta = {
    title: "Components/Dropdown",
    component: Dropdown_1.default,
    parameters: {
        layout: "centered",
        docs: {
            page: function () { return (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement(blocks_1.Title, null),
                react_1.default.createElement(blocks_1.Subtitle, null, "Component"),
                react_1.default.createElement("p", null,
                    "The ",
                    react_1.default.createElement("strong", null, "Dropdowns"),
                    " are activated by a button and show a list of choices, allowing users to select one or more options. A chosen option can either lead to a page or be utilized as an action to filter or sort existing content.",
                    " "),
                react_1.default.createElement(blocks_1.Primary, null),
                react_1.default.createElement(blocks_1.Controls, null),
                react_1.default.createElement(blocks_1.Stories, null))); },
        },
    },
    argTypes: {
        dropdown: {
            description: "Controls the visibility of the dropdown menu.",
            control: { type: "boolean" },
            defaultValue: false,
            table: {
                category: "Behavior",
            },
        },
        children: {
            title: "Children",
            description: "Can be a title or an item to be displayed in the dropdown menu.",
            table: {
                category: "Content",
            },
        },
    },
};
exports.default = meta;
var Template = function (args) {
    var _a = (0, react_1.useState)(false), isDropDownOpen = _a[0], setIsDropDownOpen = _a[1];
    var toggleDropDown = function () {
        setIsDropDownOpen(!isDropDownOpen);
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { style: { width: "100px", height: "200px" } },
            react_1.default.createElement(Button_1.default, { size: "md", variant: "primary", label: "Click here!", onClick: toggleDropDown }),
            react_1.default.createElement("div", null,
                react_1.default.createElement(Dropdown_1.default, { dropdown: isDropDownOpen || args.dropdown },
                    react_1.default.createElement(Dropdown_1.DropdownTitle, { content: "Title" }),
                    react_1.default.createElement(Dropdown_1.DropdownItem, { content: "Item 1", typeIcon: "ac_unit" }),
                    react_1.default.createElement(Dropdown_1.DropdownTitle, { content: "Title" }),
                    react_1.default.createElement(Dropdown_1.DropdownItem, { content: "Item 1" }))))));
};
exports.Default = Template.bind({});
exports.Default.args = {
    dropdown: false,
};
