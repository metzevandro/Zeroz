"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Disabled = exports.Default = void 0;
var _InputSearch = _interopRequireDefault(require("./InputSearch"));
require("../../styles.scss");
var _blocks = require("@storybook/blocks");
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var meta = {
  title: "Components/Input Search",
  component: _InputSearch["default"],
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      page: function page() {
        return <>
          <_blocks.Title />
          <_blocks.Subtitle>Component</_blocks.Subtitle>
          <p>
            The <strong>Input Search</strong> helps you find things by letting
            you type in a word or phrase instead of clicking around.
          </p>
          <_blocks.Primary />
          <_blocks.Controls />
          <_blocks.Stories />
        </>;
      }
    }
  },
  argTypes: {
    placeholder: {
      control: "text",
      description: "The placeholder text displayed inside the search input field when it is empty.",
      table: {
        category: "Appearance"
      }
    },
    disabled: {
      control: "boolean",
      description: "If true, the search input field will be disabled and unclickable.",
      table: {
        category: "State"
      }
    },
    onChange: {
      action: "onChange",
      description: "Callback function that is called when the value of the search input field changes.",
      table: {
        category: "Events"
      }
    }
  }
};
var _default = exports["default"] = meta;
var Default = exports.Default = {
  args: {
    placeholder: "Search",
    disabled: false
  }
};
var Disabled = exports.Disabled = {
  args: {
    placeholder: "Search",
    disabled: true
  }
};