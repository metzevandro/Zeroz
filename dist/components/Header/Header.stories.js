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
exports.Loading = exports.Default = void 0;
var react_1 = __importStar(require("react"));
var Header_1 = __importStar(require("./Header"));
var Dropdown_1 = __importStar(require("../Dropdown/Dropdown"));
var Breadcrumb_1 = require("../Breadcrumb/Breadcrumb");
require("../../styles.scss");
var blocks_1 = require("@storybook/blocks");
var meta = {
    title: "Components/Header",
    component: Header_1.default,
    parameters: {
        layout: "fullscreen",
        docs: {
            page: function () { return (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement(blocks_1.Title, null),
                react_1.default.createElement(blocks_1.Subtitle, null, "Component"),
                react_1.default.createElement("p", null,
                    "The ",
                    react_1.default.createElement("strong", null, "header"),
                    " lets users view notifications, access menus, and navigate to the home page by clicking the logo. It's always there at the top of the screen."),
                react_1.default.createElement(blocks_1.Primary, null),
                react_1.default.createElement(blocks_1.Controls, null),
                react_1.default.createElement(blocks_1.Stories, null))); },
        },
    },
    argTypes: {
        letter: {
            description: "Gets the first letter of the first and last name from the username property of the HeaderProfile component.",
            control: {
                type: "text",
            },
            table: {
                category: "HeaderProfile",
            },
        },
        breadcrumb: {
            description: "Breadcrumb items for navigation.",
            control: {
                type: "object",
            },
            table: {
                category: "Header",
            },
        },
        children: {
            description: "Content for the header profile including username and dropdown.",
            control: {
                type: "text",
            },
            table: {
                category: "HeaderProfile",
            },
        },
        onClick: {
            description: "Toggles the sidebar for mobile or tablet views.",
            table: {
                category: "Header",
            },
        },
        skeleton: {
            description: "Displays the skeleton loader.",
            control: {
                type: "boolean",
            },
            table: {
                category: "Header",
            },
        },
        username: {
            description: "The name of the user.",
            control: {
                type: "text",
            },
            table: {
                category: "HeaderProfile",
            },
        },
        avatar_src: {
            description: "The source URL for the user's avatar image.",
            control: {
                type: "text",
            },
            table: {
                category: "HeaderProfile",
            },
        },
    },
};
exports.default = meta;
var Template = function (args) {
    var _a = (0, react_1.useState)(false), isOpenHeader = _a[0], setIsOpenHeader = _a[1];
    var toggleHeader = function () {
        setIsOpenHeader(!isOpenHeader);
    };
    return (react_1.default.createElement("div", { style: { height: "300px" } },
        react_1.default.createElement(Header_1.default, { skeleton: args.skeleton, breadcrumb: react_1.default.createElement(Breadcrumb_1.Breadcrumb, { items: [{ pageName: "Home", href: "/" }] }), onClick: toggleHeader },
            react_1.default.createElement(Header_1.HeaderProfile, { skeleton: args.skeleton, name: args.username, letter: args.letter, avatar_src: args.avatar_src },
                react_1.default.createElement(Dropdown_1.default, { dropdown: true },
                    react_1.default.createElement(Dropdown_1.DropdownTitle, { content: "Settings" }),
                    react_1.default.createElement(Dropdown_1.DropdownItem, { content: "Item 1" }),
                    react_1.default.createElement(Dropdown_1.DropdownItem, { content: "Item 2" }),
                    react_1.default.createElement(Dropdown_1.DropdownItem, { content: "Settings", typeIcon: "settings" }))))));
};
exports.Default = Template.bind({});
exports.Default.args = {
    username: "Username",
    avatar_src: "",
    skeleton: false,
};
exports.Loading = Template.bind({});
exports.Loading.args = {
    username: "Username",
    avatar_src: "",
    skeleton: true,
};
