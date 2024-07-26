"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Error = exports.Disabled = exports.ReadOnly = exports.WithIcon = exports.Default = void 0;
require("../../styles.scss");
var Input_1 = __importDefault(require("./Input"));
var blocks_1 = require("@storybook/blocks");
var react_1 = __importDefault(require("react"));
var meta = {
    title: "Components/Input",
    component: Input_1.default,
    parameters: {
        layout: "padded",
        docs: {
            page: function () { return (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement(blocks_1.Title, null),
                react_1.default.createElement(blocks_1.Subtitle, null, "Component"),
                react_1.default.createElement("p", null,
                    "The ",
                    react_1.default.createElement("strong", null, "Input"),
                    " is a space where users can type and enter short pieces of information, such as names, addresses, or other brief text.",
                    " "),
                react_1.default.createElement(blocks_1.Primary, null),
                react_1.default.createElement(blocks_1.Controls, null),
                react_1.default.createElement(blocks_1.Stories, null))); },
        },
    },
    argTypes: {
        label: {
            description: "Label for the input field.",
            control: {
                type: "text",
            },
            table: {
                category: "Appearance",
            },
        },
        placeholder: {
            description: "Placeholder text for the input field.",
            control: {
                type: "text",
            },
            table: {
                category: "Appearance",
            },
        },
        typeIcon: {
            description: "Icon type to be displayed in the input field.",
            control: {
                type: "text",
            },
            table: {
                category: "Appearance",
            },
        },
        fillIcon: {
            description: "Fills the input field icon.",
            control: {
                type: "boolean",
            },
            table: {
                category: "Appearance",
            },
        },
        value: {
            description: "Value of the input field.",
            control: {
                type: "text",
            },
            table: {
                category: "Behavior",
            },
        },
        onChange: {
            description: "Function called when the input value changes.",
            table: {
                category: "Behavior",
            },
        },
        disabled: {
            description: "Disables the input field.",
            control: {
                type: "boolean",
            },
            table: {
                category: "State",
            },
        },
        readOnly: {
            description: "Makes the input field read-only.",
            control: {
                type: "boolean",
            },
            table: {
                category: "State",
            },
        },
        error: {
            description: "Indicates if there is an error.",
            control: {
                type: "boolean",
            },
            table: {
                category: "State",
            },
        },
        textError: {
            description: "Error message text.",
            control: {
                type: "text",
            },
            table: {
                category: "State",
            },
        },
    },
};
exports.default = meta;
var Template = function (args) {
    return (react_1.default.createElement(Input_1.default, { value: args.value, label: args.label, placeholder: args.placeholder, disabled: args.disabled, typeIcon: args.typeIcon, error: args.error, textError: args.textError, readOnly: args.readOnly, fillIcon: args.fillIcon }));
};
exports.Default = Template.bind({});
exports.Default.args = {
    label: "Label",
    placeholder: "Placeholder",
    typeIcon: "settings",
    fillIcon: true,
    disabled: false,
    error: false,
    textError: "Error",
    readOnly: false,
};
exports.WithIcon = Template.bind({});
exports.WithIcon.args = {
    label: "Label",
    placeholder: "Placeholder",
    typeIcon: "settings",
    fillIcon: true,
    disabled: false,
    error: false,
    textError: "",
    readOnly: false,
};
exports.ReadOnly = Template.bind({});
exports.ReadOnly.args = {
    label: "Label",
    placeholder: "Placeholder",
    typeIcon: "",
    fillIcon: false,
    disabled: false,
    error: false,
    textError: "",
    readOnly: true,
    value: "This is read only, you can't type more.",
};
exports.Disabled = Template.bind({});
exports.Disabled.args = {
    label: "Label",
    placeholder: "Placeholder",
    typeIcon: "",
    fillIcon: false,
    disabled: true,
    error: false,
    textError: "",
    readOnly: false,
};
exports.Error = Template.bind({});
exports.Error.args = {
    label: "Label",
    placeholder: "Placeholder",
    typeIcon: "",
    fillIcon: false,
    disabled: false,
    error: true,
    textError: "Error",
    readOnly: false,
};
