"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Default = exports.Circle = void 0;
var _Skeleton = _interopRequireDefault(require("./Skeleton"));
require("../../styles.scss");
var _blocks = require("@storybook/blocks");
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var meta = {
  title: "Components/Skeleton",
  component: _Skeleton["default"],
  parameters: {
    layout: "centered",
    docs: {
      page: function page() {
        return <>
          <_blocks.Title />
          <_blocks.Subtitle>Component</_blocks.Subtitle>
          <p>
            The <strong> Skeletons</strong> are used to display a placeholder
            for content during loading times.
          </p>
          <_blocks.Primary />
          <_blocks.Controls />
          <_blocks.Stories />
        </>;
      }
    }
  },
  argTypes: {
    width: {
      name: "Width",
      description: "The width of the skeleton loader.",
      type: {
        name: "string"
      },
      defaultValue: {
        summary: "150"
      },
      control: {
        type: "text"
      },
      table: {
        category: "Appearance",
        type: {
          summary: "string"
        },
        defaultValue: {
          summary: "150"
        }
      }
    },
    height: {
      name: "Height",
      description: "The height of the skeleton loader.",
      type: {
        name: "string"
      },
      defaultValue: {
        summary: "150"
      },
      control: {
        type: "text"
      },
      table: {
        category: "Appearance",
        type: {
          summary: "string"
        },
        defaultValue: {
          summary: "150"
        }
      }
    },
    circle: {
      name: "Circle",
      description: "If true, the skeleton loader will be a circle.",
      type: {
        name: "boolean"
      },
      defaultValue: {
        summary: false
      },
      control: {
        type: "boolean"
      },
      table: {
        category: "Appearance",
        type: {
          summary: "boolean"
        }
      }
    }
  }
};
var _default = exports["default"] = meta;
var Default = exports.Default = {
  args: {
    width: "150",
    height: "150",
    circle: false
  }
};
var Circle = exports.Circle = {
  args: {
    width: "150",
    height: "150",
    circle: true
  }
};