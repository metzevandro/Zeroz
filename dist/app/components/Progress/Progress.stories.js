"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Success = exports.Loading = exports.Indeterminate = exports.Error = exports.Default = void 0;
require("../../styles.scss");
var _Progress = _interopRequireDefault(require("./Progress"));
var _blocks = require("@storybook/blocks");
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var meta = {
  title: "Components/Progress",
  component: _Progress["default"],
  parameters: {
    docs: {
      page: function page() {
        return <>
          <_blocks.Title />
          <_blocks.Subtitle>Component</_blocks.Subtitle>
          <p>
            The <strong>Progress</strong> component shows how a task or
            operation is loading.
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
    value: {
      control: "number",
      description: "The current value of the progress bar. When the value is 100, the progress bar turns green.",
      table: {
        category: "Value"
      }
    },
    indeterminate: {
      control: "boolean",
      description: "If true, the progress bar will display an indeterminate state.",
      table: {
        category: "State"
      }
    },
    error: {
      control: "boolean",
      description: "If true, the progress bar will display an error state.",
      table: {
        category: "State"
      }
    }
  }
};
var _default = exports["default"] = meta;
var Default = exports.Default = {
  args: {
    value: 0,
    indeterminate: false,
    error: false
  }
};
var Loading = exports.Loading = {
  args: {
    value: 50,
    indeterminate: false,
    error: false
  }
};
var Success = exports.Success = {
  args: {
    value: 100,
    indeterminate: false,
    error: false
  }
};
var Indeterminate = exports.Indeterminate = {
  args: {
    value: 0,
    indeterminate: true,
    error: false
  }
};
var Error = exports.Error = {
  args: {
    value: 90,
    indeterminate: false,
    error: true
  }
};