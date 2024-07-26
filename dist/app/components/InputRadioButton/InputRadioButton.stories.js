"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Disabled = exports.Default = exports.Checked = void 0;
require("../../styles.scss");
var _InputRadioButton = _interopRequireDefault(require("./InputRadioButton"));
var _blocks = require("@storybook/blocks");
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var meta = {
  title: "Components/Input Radio Button",
  component: _InputRadioButton["default"],
  parameters: {
    layout: "centered",
    docs: {
      page: function page() {
        return <>
          <_blocks.Title />
          <_blocks.Subtitle>Component</_blocks.Subtitle>
          <p>
            The <strong>Radio Buttons</strong> when you need to make a single
            selection from a list of options.
          </p>
          <_blocks.Primary />
          <_blocks.Controls />
          <_blocks.Stories />
        </>;
      }
    }
  },
  tags: ["autodocs"],
  argTypes: {
    label: {
      control: "text",
      description: "The text label displayed next to the radio button.",
      table: {
        category: "Appearance"
      }
    },
    disabled: {
      control: "boolean",
      description: "If true, the radio button will be disabled and unselectable.",
      table: {
        category: "State"
      }
    },
    checked: {
      control: "boolean",
      description: "If true, the radio button will be checked.",
      table: {
        category: "State"
      }
    },
    onChange: {
      action: "onChange",
      description: "Callback function that is called when the radio button value changes.",
      table: {
        category: "Events"
      }
    }
  }
};
var _default = exports["default"] = meta;
var Default = exports.Default = {
  args: {
    label: "Label",
    disabled: false,
    checked: false
  }
};
var Disabled = exports.Disabled = {
  args: {
    label: "Label",
    disabled: true,
    checked: false
  }
};
var Checked = exports.Checked = {
  args: {
    label: "Label",
    disabled: false,
    checked: true
  }
};