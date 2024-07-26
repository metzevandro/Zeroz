"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
exports.NoEvents = exports.Indeterminate = exports.Disabled = exports.Default = void 0;
var react_1 = __importStar(require("react"));
var InputCheckbox_1 = __importDefault(require("./InputCheckbox"));
require("../../styles.scss");
var blocks_1 = require("@storybook/blocks");
var meta = {
    title: "Components/Input Checkbox",
    component: InputCheckbox_1.default,
    parameters: {
        layout: "centered",
        docs: {
            page: function () { return (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement(blocks_1.Title, null),
                react_1.default.createElement(blocks_1.Subtitle, null, "Component"),
                react_1.default.createElement("p", null,
                    "The ",
                    react_1.default.createElement("strong", null, "Checkboxes"),
                    " are used when there are multiple items to select in a list or when users need to show they agree to specific terms or services.",
                    " "),
                react_1.default.createElement(blocks_1.Primary, null),
                react_1.default.createElement(blocks_1.Controls, null),
                react_1.default.createElement(blocks_1.Stories, null))); },
        },
    },
    tags: ["autodocs"],
    argTypes: {
        modelValue: {
            control: "text",
            description: "The bound value of the checkbox, used for two-way data binding.",
            table: {
                category: "Value",
            },
        },
        value: {
            control: "text",
            description: "The current value of the checkbox. Typically a boolean indicating whether it is checked.",
            table: {
                category: "Value",
            },
        },
        label: {
            control: "text",
            description: "The text label displayed next to the checkbox.",
            table: {
                category: "Appearance",
            },
        },
        id: {
            control: "text",
            description: "The unique identifier for the checkbox input element.",
            table: {
                category: "Attributes",
            },
        },
        name: {
            control: "text",
            description: "The name attribute for the checkbox input element, used to identify the checkbox in form submissions.",
            table: {
                category: "Attributes",
            },
        },
        required: {
            control: "boolean",
            description: "Specifies whether the checkbox must be checked before submitting the form.",
            table: {
                category: "Validation",
            },
        },
        indeterminate: {
            control: "boolean",
            description: 'If true, the checkbox will be in an indeterminate state, often used to indicate a "partially selected" state in a list.',
            table: {
                category: "State",
            },
        },
        noEvents: {
            control: "boolean",
            description: "When true, the checkbox will not trigger any events.",
            table: {
                category: "Behavior",
            },
        },
        disabled: {
            control: "boolean",
            description: "If true, the checkbox will be disabled and unclickable.",
            table: {
                category: "State",
            },
        },
        onUpdate: {
            action: "onUpdate",
            description: "Callback function that is called when the checkbox value changes.",
            table: {
                category: "Events",
            },
        },
    },
};
exports.default = meta;
var Template = function (props) {
    var _a = (0, react_1.useState)(false), isChecked = _a[0], setChecked = _a[1];
    var handleInputCheckboxChange = function () {
        setChecked(function (prevChecked) { return !prevChecked; });
        if (props.onUpdate) {
            props.onUpdate(!isChecked);
        }
    };
    return (react_1.default.createElement(InputCheckbox_1.default, __assign({}, props, { value: isChecked, onUpdate: handleInputCheckboxChange })));
};
exports.Default = Template.bind({});
exports.Default.args = {
    label: "Label",
    disabled: false,
    indeterminate: false,
};
exports.Disabled = Template.bind({});
exports.Disabled.args = {
    label: "Label",
    disabled: true,
};
exports.Indeterminate = Template.bind({});
exports.Indeterminate.args = {
    label: "Label",
    indeterminate: true,
};
exports.NoEvents = Template.bind({});
exports.NoEvents.args = {
    label: "Label",
    noEvents: true,
};
