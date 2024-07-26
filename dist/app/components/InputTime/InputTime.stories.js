"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Error = exports.Disabled = exports.Default = void 0;
require("../../styles.scss");
var _InputTime = _interopRequireDefault(require("./InputTime"));
var _blocks = require("@storybook/blocks");
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var meta = {
  title: "Components/Input Time",
  component: _InputTime["default"],
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      page: function page() {
        return <>
          <_blocks.Title />
          <_blocks.Subtitle>Component</_blocks.Subtitle>
          <p>
            The <strong>Time Input</strong>allows users to select or enter a
            specific time, making it easy to accurately input temporal
            information such as schedules, event times, or time logs.
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
      description: "The text label displayed above the input field.",
      table: {
        category: "Appearance"
      }
    },
    placeholder: {
      control: "text",
      description: "The placeholder text displayed inside the input field when it is empty.",
      table: {
        category: "Appearance"
      }
    },
    value: {
      control: "text",
      description: "The current value of the input field.",
      table: {
        category: "Value"
      }
    },
    disabled: {
      control: "boolean",
      description: "If true, the input field will be disabled and uneditable.",
      table: {
        category: "State"
      }
    },
    error: {
      control: "boolean",
      description: "If true, the input field will be styled to indicate an error state.",
      table: {
        category: "State"
      }
    },
    textError: {
      control: "text",
      description: "The error message text displayed below the input field when in an error state.",
      table: {
        category: "Text"
      }
    },
    onChange: {
      action: "onChange",
      description: "Callback function that is called when the value of the input field changes.",
      table: {
        category: "Events"
      }
    }
  }
};
var _default = exports["default"] = meta;
var Default = exports.Default = {
  args: {
    onChange: function onChange(value) {},
    label: "Label",
    placeholder: "Placeholder",
    error: false,
    textError: "Error",
    disabled: false
  }
};
var Disabled = exports.Disabled = {
  args: {
    onChange: function onChange(value) {},
    label: "Label",
    placeholder: "Placeholder",
    disabled: true,
    error: false
  }
};
var Error = exports.Error = {
  args: {
    onChange: function onChange(value) {},
    label: "Label",
    placeholder: "Placeholder",
    error: true,
    textError: "Error",
    disabled: false
  }
};