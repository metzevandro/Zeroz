"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Error = exports.Disabled = exports.Default = void 0;
var _InputSelect = _interopRequireDefault(require("./InputSelect"));
require("../../styles.scss");
var _blocks = require("@storybook/blocks");
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var meta = {
  title: "Components/Input Select",
  component: _InputSelect["default"],
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      page: function page() {
        return <>
          <_blocks.Title />
          <_blocks.Subtitle>Component</_blocks.Subtitle>
          <p>
            The <strong>Input Select </strong> allows users to choose one option
            from a list of values.
          </p>
          <_blocks.Primary />
          <_blocks.Controls />
          <_blocks.Stories />
        </>;
      }
    }
  },
  argTypes: {
    label: {
      control: "text",
      description: "The text label displayed above the select input field.",
      table: {
        category: "Appearance"
      }
    },
    options: {
      control: "object",
      description: "An array of options to be displayed in the select dropdown. Each option should be a string.",
      table: {
        category: "Options"
      }
    },
    value: {
      control: "text",
      description: "The currently selected value from the options. It should match one of the values in the options array.",
      table: {
        category: "Value"
      }
    },
    error: {
      control: "boolean",
      description: "If true, the select input field will be styled to indicate an error state.",
      table: {
        category: "State"
      }
    },
    errorMessage: {
      control: "text",
      description: "The error message text displayed below the select input field when in an error state.",
      table: {
        category: "Text"
      }
    },
    disabled: {
      control: "boolean",
      description: "If true, the select input field will be disabled and unselectable.",
      table: {
        category: "State"
      }
    },
    onChange: {
      action: "onChange",
      description: "Callback function that is called when the selected value changes.",
      table: {
        category: "Events"
      }
    }
  }
};
var _default = exports["default"] = meta;
var options = ["Option 1", "Option 2", "Option 3"];
var Default = exports.Default = {
  args: {
    label: "Label",
    options: options,
    value: options[0],
    error: false,
    errorMessage: "",
    disabled: false,
    onChange: function onChange(value) {}
  }
};
var Error = exports.Error = {
  args: {
    label: "Label",
    options: options,
    value: options[0],
    error: true,
    errorMessage: "Error",
    disabled: false,
    onChange: function onChange(value) {}
  }
};
var Disabled = exports.Disabled = {
  args: {
    label: "Label",
    options: options,
    value: options[0],
    disabled: true,
    error: false,
    onChange: function onChange(value) {}
  }
};