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
require("../../styles.scss");
var blocks_1 = require("@storybook/blocks");
var AppShell_1 = __importDefault(require("./AppShell"));
var Sidebar_1 = __importStar(require("../Sidebar/Sidebar"));
var Header_1 = __importStar(require("../Header/Header"));
var Dropdown_1 = __importStar(require("../Dropdown/Dropdown"));
var Page_1 = __importDefault(require("../Page/Page"));
var Breadcrumb_1 = __importDefault(require("../Breadcrumb/Breadcrumb"));
var meta = {
    title: "Templates/AppShell",
    component: AppShell_1.default,
    parameters: {
        layout: "fullscreen",
        docs: {
            page: function () { return (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement(blocks_1.Title, null),
                react_1.default.createElement(blocks_1.Subtitle, null, "Template"),
                react_1.default.createElement("p", null,
                    "The ",
                    react_1.default.createElement("strong", null, "AppShell"),
                    " template serves as the primary outer framework for an application, furnishing the fundamental structure to develop applications."),
                react_1.default.createElement("div", null),
                react_1.default.createElement(blocks_1.Primary, null),
                react_1.default.createElement(blocks_1.Controls, null),
                react_1.default.createElement(blocks_1.Stories, null))); },
        },
    },
    tags: ["autodocs"],
    argTypes: {
        username: {
            name: "Username",
            description: "Username displayed in the header profile.",
            type: { name: "string" },
            table: {
                category: "Data",
                type: { summary: "string" },
            },
        },
        pageName: {
            name: "Page Name",
            description: "Page name displayed in the header and sidebar item.",
            type: { name: "string" },
            table: {
                category: "Data",
                type: { summary: "string" },
            },
        },
        description: {
            name: "Page Description",
            description: "Page description displayed in the Page component.",
            type: { name: "string" },
            table: {
                category: "Data",
                type: { summary: "string" },
            },
        },
        sidebarItemIcon: {
            name: "Sidebar Icon",
            description: "Icon displayed in the sidebar item.",
            type: { name: "string" },
            table: {
                category: "Appearance",
                type: { summary: "string" },
            },
        },
        buttonContentPrimary: {
            name: "Primary Button Content",
            description: "Text displayed in the primary button.",
            type: { name: "string" },
            table: {
                category: "Actions",
                type: { summary: "string" },
            },
        },
        buttonContentSecondary: {
            name: "Secondary Button Content",
            description: "Text displayed in the secondary button.",
            type: { name: "string" },
            table: {
                category: "Actions",
                type: { summary: "string" },
            },
        },
        withActionPrimary: {
            name: "Enable Primary Action",
            description: "Determines if the primary action is enabled.",
            type: { name: "boolean" },
            table: {
                category: "Actions",
                type: { summary: "boolean" },
            },
        },
        withActionSecondary: {
            name: "Enable Secondary Action",
            description: "Determines if the secondary action is enabled.",
            type: { name: "boolean" },
            table: {
                category: "Actions",
                type: { summary: "boolean" },
            },
        },
        withBackButton: {
            name: "Enable Back Button",
            description: "Determines if the back button is present.",
            type: { name: "boolean" },
            table: {
                category: "Actions",
                type: { summary: "boolean" },
            },
        },
        onClick: {
            name: "On Click",
            description: "Callback function triggered when clicking on the header.",
            action: "clicked",
            table: {
                category: "Events",
                type: {
                    summary: "(event: React.MouseEvent<HTMLButtonElement>) => void",
                },
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
        react_1.default.createElement(AppShell_1.default, null,
            react_1.default.createElement(Sidebar_1.default, { brandSize: "sm", setToggleSidebar: toggleSidebar, brand: "/logo-sm.svg", toggle: isOpenSidebar },
                react_1.default.createElement(Sidebar_1.SidebarTitle, { title: "Pages" }),
                react_1.default.createElement(Sidebar_1.SidebarItem, { fillIcon: true, isActive: true, icon: args.sidebarItemIcon, title: args.pageName })),
            react_1.default.createElement(Header_1.default, { breadcrumb: react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement(Breadcrumb_1.default, { items: [{ pageName: args.pageName, href: "/" }] })), onClick: toggleSidebar },
                react_1.default.createElement(Header_1.HeaderProfile, { letter: args.username, name: args.username },
                    react_1.default.createElement(Dropdown_1.default, { dropdown: true },
                        react_1.default.createElement(Dropdown_1.DropdownTitle, { content: "Settings" }),
                        react_1.default.createElement(Dropdown_1.DropdownItem, { content: "Settings", typeIcon: "settings" })))),
            react_1.default.createElement(Page_1.default, { namePage: args.pageName, buttonContentPrimary: args.buttonContentPrimary, buttonContentSecondary: args.buttonContentSecondary, withActionPrimary: args.withActionPrimary, withActionSecondary: args.withActionSecondary, withBackButton: args.withBackButton, description: args.description }))));
};
exports.Default = Template.bind({});
exports.Default.args = {
    username: "Username",
    description: "Description",
    pageName: "Page name",
    sidebarItemIcon: "home",
    withBackButton: true,
    withActionPrimary: true,
    withActionSecondary: true,
    buttonContentPrimary: "Button",
    buttonContentSecondary: "Button",
};
