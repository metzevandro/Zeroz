"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.WidthFull = exports.Default = void 0;
var _ProgressIndicator = _interopRequireDefault(require("./ProgressIndicator"));
require("../../styles.scss");
var _blocks = require("@storybook/blocks");
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var meta = {
  title: "Components/Progress Indicator",
  component: _ProgressIndicator["default"],
  parameters: {
    layout: "padded",
    docs: {
      page: function page() {
        return <>
          <_blocks.Title />
          <_blocks.Subtitle>Component</_blocks.Subtitle>
          <p>
            The <strong>Progress Indicator </strong> is a visual guide showing
            how far you've come in a process, helping you complete each step.
          </p>
          <_blocks.Primary />
          <_blocks.Controls />
          <_blocks.Stories />
        </>;
      }
    }
  },
  argTypes: {
    direction: {
      control: "select",
      options: ["row", "column"],
      description: "The direction of the progress indicator steps.",
      table: {
        category: "Layout"
      }
    },
    state: {
      control: "select",
      options: ["default", "current", "completed", "error", "disable"],
      description: "The state of the first step.",
      table: {
        category: "State"
      }
    },
    step: {
      control: "text",
      description: "The label for the first step.",
      table: {
        category: "Content"
      }
    },
    description: {
      control: "text",
      description: "The description for the first step.",
      table: {
        category: "Content"
      }
    },
    widthFull: {
      control: "boolean",
      description: "If true, the first step will take the full width.",
      table: {
        category: "Layout"
      }
    },
    onClick: {
      action: "onClick",
      description: "Callback function for the first step click event.",
      table: {
        category: "Events"
      }
    }
  },
  tags: ["autodocs"]
};
var _default = exports["default"] = meta;
var Template = function Template(args) {
  return <div style={{
    display: "flex",
    width: "100%",
    flexDirection: args.direction
  }}>
      <_ProgressIndicator.default direction={args.direction} state={args.state} step={args.step} description={args.description} widthFull={args.widthFull} />
    </div>;
};
var Default = exports.Default = Template.bind({});
Default.args = {
  direction: "row",
  step: "Step",
  description: "Description",
  state: "completed",
  widthFull: false
};
var WidthFull = exports.WidthFull = Template.bind({});
WidthFull.args = {
  direction: "row",
  step: "Step",
  description: "Description",
  state: "completed",
  widthFull: true
};