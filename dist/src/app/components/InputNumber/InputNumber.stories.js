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
exports.Error = exports.Disabled = exports.Default = void 0;
var react_1 = __importStar(require("react"));
require("../../styles.scss");
var InputNumber_1 = __importDefault(require("./InputNumber"));
var blocks_1 = require("@storybook/blocks");
var meta = {
    title: "Components/Input Number",
    component: InputNumber_1.default,
    parameters: {
        layout: "padded",
        docs: {
            page: function () { return (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement(blocks_1.Title, null),
                react_1.default.createElement(blocks_1.Subtitle, null, "Component"),
                react_1.default.createElement("p", null,
                    "The ",
                    react_1.default.createElement("strong", null, "Number Input"),
                    " lets users type numbers and increase or decrease using icon buttons.",
                    " "),
                react_1.default.createElement(blocks_1.Primary, null),
                react_1.default.createElement(blocks_1.Controls, null),
                react_1.default.createElement(blocks_1.Stories, null))); },
        },
    },
    argTypes: {
        label: {
            control: "text",
            description: "The text label displayed above the input number field.",
            table: {
                category: "Text",
            },
        },
        placeholder: {
            control: "text",
            description: "The placeholder text displayed inside the input number field when it is empty.",
            table: {
                category: "Text",
            },
        },
        disabled: {
            control: "boolean",
            description: "If true, the input number field will be disabled and unclickable.",
            table: {
                category: "State",
            },
        },
        error: {
            control: "boolean",
            description: "If true, the input number field will be styled to indicate an error state.",
            table: {
                category: "State",
            },
        },
        textError: {
            control: "text",
            description: "The error message text displayed below the input number field when in an error state.",
            table: {
                category: "Text",
            },
        },
        max: {
            control: "number",
            description: "The maximum value allowed for the input number field.",
            table: {
                category: "Validation",
            },
        },
        min: {
            control: "number",
            description: "The minimum value allowed for the input number field.",
            table: {
                category: "Validation",
            },
        },
        initialValue: {
            control: "number",
            description: "The initial value set for the input number field.",
            table: {
                category: "Value",
            },
        },
    },
};
exports.default = meta;
var Template = function (args) {
    var _a = (0, react_1.useState)(args.initialValue.toString()), inputValue = _a[0], setInputValue = _a[1];
    var handleInputChange = function (value) {
        setInputValue(value);
    };
    return (react_1.default.createElement(InputNumber_1.default, { label: args.label, placeholder: args.placeholder, max: args.max, min: args.min, value: inputValue, onChange: handleInputChange, disabled: args.disabled, error: args.error, textError: args.textError }));
};
exports.Default = Template.bind({});
exports.Default.args = {
    label: "Label",
    placeholder: "Placeholder",
    initialValue: 0,
    max: 10,
    min: -10,
    disabled: false,
    error: false,
    textError: "Error",
};
exports.Disabled = Template.bind({});
exports.Disabled.args = {
    disabled: true,
    label: "Label",
    placeholder: "Placeholder",
    initialValue: 0,
    max: 10,
    min: -10,
};
exports.Error = Template.bind({});
exports.Error.args = {
    error: true,
    textError: "Error",
    label: "Label",
    placeholder: "Placeholder",
    initialValue: 0,
    max: 10,
    min: -10,
};
