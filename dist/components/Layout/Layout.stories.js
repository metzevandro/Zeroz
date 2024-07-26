"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreeSymmetricColumn = exports.TwoAsymmetricColumn = exports.TwoSymmetricColumn = exports.OneColumn = void 0;
var Layout_1 = __importDefault(require("./Layout"));
require("../../styles.scss");
var Icon_1 = __importDefault(require("../Icon/Icon"));
var react_1 = __importDefault(require("react"));
var blocks_1 = require("@storybook/blocks");
var meta = {
    title: "Templates/Layout",
    component: Layout_1.default,
    argTypes: {
        columns: {
            name: "Columns",
            description: "Number of columns in the layout.",
            control: {
                type: "select",
                options: ["1", "2 - Symmetric", "2 - Asymmetric", "3 - Symmetric"],
            },
        },
    },
    parameters: {
        layout: "padded",
        docs: {
            page: function () { return (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement(blocks_1.Title, null),
                react_1.default.createElement(blocks_1.Subtitle, null, "Template"),
                react_1.default.createElement("p", null,
                    "The ",
                    react_1.default.createElement("strong", null, "Layout"),
                    " template is made to create layouts with one or more columns using ready-made patterns."),
                react_1.default.createElement(blocks_1.Primary, null),
                react_1.default.createElement(blocks_1.Controls, null),
                react_1.default.createElement(blocks_1.Stories, null))); },
        },
    },
    tags: ["autodocs"],
};
exports.default = meta;
var Template = function (args) {
    return (react_1.default.createElement(Layout_1.default, { columns: args.columns },
        react_1.default.createElement("div", { className: "slot" },
            react_1.default.createElement(Icon_1.default, { icon: "refresh", size: "md" }),
            "1st Content"),
        react_1.default.createElement("div", { className: "slot" },
            react_1.default.createElement(Icon_1.default, { icon: "refresh", size: "md" }),
            "2nd Content"),
        react_1.default.createElement("div", { className: "slot" },
            react_1.default.createElement(Icon_1.default, { icon: "refresh", size: "md" }),
            "3rd Content"),
        react_1.default.createElement("div", { className: "slot" },
            react_1.default.createElement(Icon_1.default, { icon: "refresh", size: "md" }),
            "4th Content"),
        react_1.default.createElement("div", { className: "slot" },
            react_1.default.createElement(Icon_1.default, { icon: "refresh", size: "md" }),
            "5th Content"),
        react_1.default.createElement("div", { className: "slot" },
            react_1.default.createElement(Icon_1.default, { icon: "refresh", size: "md" }),
            "6th Content")));
};
exports.OneColumn = Template.bind({});
exports.OneColumn.args = {
    columns: "1",
};
exports.TwoSymmetricColumn = Template.bind({});
exports.TwoSymmetricColumn.args = {
    columns: "2 - Symmetric",
};
exports.TwoAsymmetricColumn = Template.bind({});
exports.TwoAsymmetricColumn.args = {
    columns: "2 - Asymmetric",
};
exports.ThreeSymmetricColumn = Template.bind({});
exports.ThreeSymmetricColumn.args = {
    columns: "3 - Symmetric",
};
