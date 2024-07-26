"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.TwoSymmetricColumn = exports.TwoAsymmetricColumn = exports.ThreeSymmetricColumn = exports.OneColumn = void 0;
var _Layout = _interopRequireDefault(require("./Layout"));
require("../../styles.scss");
var _Icon = _interopRequireDefault(require("../Icon/Icon"));
var _react = _interopRequireDefault(require("react"));
var _blocks = require("@storybook/blocks");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var meta = {
  title: "Templates/Layout",
  component: _Layout["default"],
  argTypes: {
    columns: {
      name: "Columns",
      description: "Number of columns in the layout.",
      control: {
        type: "select",
        options: ["1", "2 - Symmetric", "2 - Asymmetric", "3 - Symmetric"]
      }
    }
  },
  parameters: {
    layout: "padded",
    docs: {
      page: function page() {
        return <>
          <_blocks.Title />
          <_blocks.Subtitle>Template</_blocks.Subtitle>
          <p>
            The <strong>Layout</strong> template is made to create layouts with
            one or more columns using ready-made patterns.
          </p>
          <_blocks.Primary />
          <_blocks.Controls />
          <_blocks.Stories />
        </>;
      }
    }
  },
  tags: ["autodocs"]
};
var _default = exports["default"] = meta;
var Template = function Template(args) {
  return <_Layout.default columns={args.columns}>
      <div className="slot">
        <_Icon.default icon="refresh" size="md" />
        1st Content
      </div>
      <div className="slot">
        <_Icon.default icon="refresh" size="md" />
        2nd Content
      </div>
      <div className="slot">
        <_Icon.default icon="refresh" size="md" />
        3rd Content
      </div>
      <div className="slot">
        <_Icon.default icon="refresh" size="md" />
        4th Content
      </div>
      <div className="slot">
        <_Icon.default icon="refresh" size="md" />
        5th Content
      </div>
      <div className="slot">
        <_Icon.default icon="refresh" size="md" />
        6th Content
      </div>
    </_Layout.default>;
};
var OneColumn = exports.OneColumn = Template.bind({});
OneColumn.args = {
  columns: "1"
};
var TwoSymmetricColumn = exports.TwoSymmetricColumn = Template.bind({});
TwoSymmetricColumn.args = {
  columns: "2 - Symmetric"
};
var TwoAsymmetricColumn = exports.TwoAsymmetricColumn = Template.bind({});
TwoAsymmetricColumn.args = {
  columns: "2 - Asymmetric"
};
var ThreeSymmetricColumn = exports.ThreeSymmetricColumn = Template.bind({});
ThreeSymmetricColumn.args = {
  columns: "3 - Symmetric"
};