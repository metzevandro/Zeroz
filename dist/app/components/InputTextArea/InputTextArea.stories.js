"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Error = exports.Disabled = exports.Default = void 0;
require("../../styles.scss");
var _InputTextArea = _interopRequireDefault(require("./InputTextArea"));
var _blocks = require("@storybook/blocks");
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var meta = {
  title: "Components/Input TextArea",
  component: _InputTextArea["default"],
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      page: function page() {
        return <>
          <_blocks.Title />
          <_blocks.Subtitle>Component</_blocks.Subtitle>
          <p>
            The <strong>Text Area</strong> input allows users to write and edit
            multiple lines of text, making it suitable for entering longer
            messages or detailed information
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
      description: "The text label displayed above the textarea.",
      table: {
        category: "Appearance"
      }
    },
    placeholder: {
      control: "text",
      description: "The placeholder text displayed inside the textarea when it is empty.",
      table: {
        category: "Appearance"
      }
    },
    value: {
      control: "text",
      description: "The current value of the textarea.",
      table: {
        category: "Value"
      }
    },
    disabled: {
      control: "boolean",
      description: "If true, the textarea will be disabled and uneditable.",
      table: {
        category: "State"
      }
    },
    error: {
      control: "boolean",
      description: "If true, the textarea will be styled to indicate an error state.",
      table: {
        category: "State"
      }
    },
    errorText: {
      control: "text",
      description: "The error message text displayed below the textarea when in an error state.",
      table: {
        category: "Text"
      }
    },
    onChange: {
      action: "onChange",
      description: "Callback function that is called when the value of the textarea changes.",
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
    placeholder: "Placeholder",
    disabled: false,
    error: false,
    errorText: "Error"
  }
};
var Disabled = exports.Disabled = {
  args: {
    label: "Label",
    placeholder: "Placeholder",
    disabled: true,
    error: false
  }
};
var Error = exports.Error = {
  args: {
    label: "Label",
    placeholder: "Placeholder",
    error: true,
    errorText: "Error",
    disabled: false
  }
};