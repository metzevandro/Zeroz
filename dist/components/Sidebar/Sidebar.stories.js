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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Default = void 0;
var react_1 = __importStar(require("react"));
var Sidebar_1 = __importStar(require("./Sidebar"));
require("../../styles.scss");
var blocks_1 = require("@storybook/blocks");
var meta = {
    title: "Components/Sidebar",
    component: Sidebar_1.default,
    parameters: {
        layout: "fullscreen",
        docs: {
            page: function () { return (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement(blocks_1.Title, null),
                react_1.default.createElement(blocks_1.Subtitle, null, "Component"),
                react_1.default.createElement("p", null,
                    "The ",
                    react_1.default.createElement("strong", null, " Sidebar "),
                    " is the principal navigation to the pages."),
                react_1.default.createElement(blocks_1.Primary, null),
                react_1.default.createElement(blocks_1.Controls, null),
                react_1.default.createElement(blocks_1.Stories, null))); },
        },
    },
    args: {
        toggle: false,
    },
    tags: ["autodocs"],
    argTypes: {
        toggle: {
            description: "Controls the sidebar visibility.",
            type: { name: "boolean" },
            defaultValue: { summary: false },
            table: {
                category: "Sidebar",
                type: { summary: "boolean" },
            },
        },
        setToggleSidebar: {
            description: "Function to control the sidebar visibility.",
            type: { name: "function" },
            table: {
                category: "Sidebar",
                type: { summary: "function" },
            },
        },
        titleSidebar: {
            description: "The title to display for the sidebar.",
            type: { name: "string" },
            defaultValue: { summary: "Sidebar" },
            table: {
                category: "Sidebar",
                type: { summary: "string" },
                defaultValue: { summary: "Sidebar" },
            },
        },
        brand: {
            name: "Brand",
            description: "URL or path to the brand/logo image.",
            type: { name: "string" },
            defaultValue: { summary: "/logo-sm.svg" },
            table: {
                category: "Appearance",
                type: { summary: "string" },
                defaultValue: { summary: "/logo-sm.svg" },
            },
        },
        brandSize: {
            name: "Brand Size",
            description: "The size of the brand/logo image.",
            control: { type: "select" },
            options: ["sm", "md", "lg"],
            defaultValue: { summary: "sm" },
            table: {
                category: "Appearance",
                type: { summary: "'sm' | 'md' | 'lg'" },
                defaultValue: { summary: "sm" },
            },
        },
    },
};
exports.default = meta;
var Template = function (args) {
    var _a = (0, react_1.useState)(false), isOpenSidebar = _a[0], setIsOpenSidebar = _a[1];
    var toggleSidebar = function () {
        setIsOpenSidebar(!isOpenSidebar);
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(Sidebar_1.default, { brandSize: args.brandSize, brand: args.brand, setToggleSidebar: toggleSidebar, toggle: true },
            react_1.default.createElement(Sidebar_1.SidebarTitle, { title: args.titleSidebar }),
            react_1.default.createElement(Sidebar_1.SidebarItem, { isActive: true, fillIcon: true, icon: "home", title: "Home" }),
            react_1.default.createElement(Sidebar_1.SidebarItem, { fillIcon: true, icon: "settings", title: "Settings" },
                react_1.default.createElement(Sidebar_1.SidebarSubItem, { active: false, title: "Sub Item 1" })),
            react_1.default.createElement(Sidebar_1.SidebarTitle, { title: args.titleSidebar }),
            react_1.default.createElement(Sidebar_1.SidebarItem, { fillIcon: true, icon: "home", title: "Home" }),
            react_1.default.createElement(Sidebar_1.SidebarItem, { fillIcon: true, icon: "settings", title: "Settings" },
                react_1.default.createElement(Sidebar_1.SidebarSubItem, { active: false, title: "Sub Item 1" }),
                react_1.default.createElement(Sidebar_1.SidebarSubItem, { active: false, title: "Sub Item 2" }),
                react_1.default.createElement(Sidebar_1.SidebarSubItem, { active: false, title: "Sub Item 3" })))));
};
exports.Default = Template.bind({});
exports.Default.args = {
    titleSidebar: "Sidebar",
    brand: "/logo-sm.svg",
    brandSize: "sm",
};
