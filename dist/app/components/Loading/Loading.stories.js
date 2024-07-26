"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Warning = exports.Success = exports.Large = exports.Default = void 0;
require("../../styles.scss");
var _Loading = _interopRequireDefault(require("./Loading"));
var _blocks = require("@storybook/blocks");
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var meta = {
  title: "Components/Loading",
  component: _Loading["default"],
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      page: function page() {
        return <>
          <_blocks.Title />
          <_blocks.Subtitle>Component</_blocks.Subtitle>
          <p>
            The <strong>Loading </strong> is use to indicate that an action is
            in progress.
          </p>
          <_blocks.Primary />
          <_blocks.Controls />
          <_blocks.Stories />
        </>;
      }
    }
  },
  argTypes: {
    variant: {
      control: "radio",
      options: ["default", "large", "success", "warning"],
      description: "The variant of the loading component, which determines its style and size.",
      table: {
        category: "Appearance"
      }
    },
    message: {
      control: "text",
      description: "The message text displayed alongside the loading indicator.",
      table: {
        category: "Content"
      }
    }
  }
};
var _default = exports["default"] = meta;
var Default = exports.Default = {
  args: {
    variant: "default",
    message: "Loading"
  }
};
var Large = exports.Large = {
  args: {
    variant: "large"
  }
};
var Success = exports.Success = {
  args: {
    variant: "success",
    message: "Success"
  }
};
var Warning = exports.Warning = {
  args: {
    variant: "warning",
    message: "Warning"
  }
};