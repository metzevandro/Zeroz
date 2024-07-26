"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Default = void 0;
require("../../styles.scss");
var _Tooltip = _interopRequireDefault(require("./Tooltip"));
var _Icon = _interopRequireDefault(require("../Icon/Icon"));
var _blocks = require("@storybook/blocks");
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var meta = {
  title: "Components/Tooltip",
  component: _Tooltip["default"],
  parameters: {
    layout: "centered",
    docs: {
      page: function page() {
        return <>
          <_blocks.Title />
          <_blocks.Subtitle>Component</_blocks.Subtitle>
          <p>
            <strong>Tooltips</strong> show extra info when you hover or focus,
            giving helpful context without being crucial, clarifying things for
            users.
          </p>
          <_blocks.Primary />
          <_blocks.Controls />
          <_blocks.Stories />
        </>;
      }
    }
  },
  args: {
    direction: "bottom",
    text: "Tooltip text here..."
  },
  tags: ["autodocs"],
  argTypes: {
    text: {
      name: "Text",
      description: "The text to display inside the tooltip.",
      type: {
        name: "string"
      },
      defaultValue: {
        summary: "Tooltip text here..."
      },
      table: {
        category: "Content",
        type: {
          summary: "string"
        },
        defaultValue: {
          summary: "Tooltip text here..."
        }
      }
    },
    direction: {
      name: "Direction",
      description: "The direction in which the tooltip appears relative to the target element.",
      control: {
        type: "select"
      },
      options: ["top", "bottom", "left", "right"],
      defaultValue: {
        summary: "bottom"
      },
      table: {
        category: "Appearance",
        type: {
          summary: "'top' | 'bottom' | 'left' | 'right'"
        },
        defaultValue: {
          summary: "bottom"
        }
      }
    }
  }
};
var _default = exports["default"] = meta;
var Default = exports.Default = {
  render: function render(args) {
    return <>
      <_Tooltip.default text={args.text} direction={args.direction}>
        <_Icon.default icon="info" size="md" />
      </_Tooltip.default>
    </>;
  }
};