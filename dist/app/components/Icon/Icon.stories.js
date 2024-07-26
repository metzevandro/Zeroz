"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Default = void 0;
var _Icon = _interopRequireDefault(require("./Icon"));
require("../../styles.scss");
var _blocks = require("@storybook/blocks");
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var meta = {
  title: "Components/Icon",
  component: _Icon["default"],
  parameters: {
    layout: "centered",
    docs: {
      page: function page() {
        return <>
          <_blocks.Title />
          <_blocks.Subtitle>Component</_blocks.Subtitle>
          <p>
            The <strong>Icons</strong> make things easier by helping you find
            your way, sharing information quickly, and making everything look
            nicer.
          </p>
          <_blocks.Primary />
          <_blocks.Controls />
          <_blocks.Stories />
        </>;
      }
    }
  },
  argTypes: {
    icon: {
      description: "The name of the icon to display. Use Material Icons",
      control: {
        type: "text"
      },
      table: {
        category: "Content"
      }
    },
    size: {
      description: "The size of the icon",
      control: {
        type: "select",
        options: ["sm", "md", "lg"]
      },
      table: {
        category: "Appearance"
      }
    },
    fill: {
      description: "Whether the icon should fill its container",
      control: {
        type: "boolean"
      },
      table: {
        category: "Appearance"
      }
    }
  }
};
var _default = exports["default"] = meta;
var Template = function Template(args) {
  return <>
      <_Icon.default icon={args.icon} size={args.size} fill={args.fill} />
    </>;
};
var Default = exports.Default = Template.bind({});
Default.args = {
  size: "sm",
  icon: "settings",
  fill: true
};