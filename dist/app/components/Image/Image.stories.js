"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Skeleton = exports.Default = void 0;
var _Image = _interopRequireDefault(require("./Image"));
require("../../styles.scss");
var _blocks = require("@storybook/blocks");
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var meta = {
  title: "Components/Image",
  component: _Image["default"],
  parameters: {
    layout: "centered",
    docs: {
      page: function page() {
        return <>
          <_blocks.Title />
          <_blocks.Subtitle>Component</_blocks.Subtitle>
          <p>
            The <strong>Image</strong> display a preview of the images.
          </p>
          <_blocks.Primary />
          <_blocks.Controls />
          <_blocks.Stories />
        </>;
      }
    }
  },
  argTypes: {
    src: {
      description: "The URL of the image",
      control: {
        type: "text"
      },
      table: {
        category: "Content"
      }
    },
    width: {
      description: "The width of the image",
      control: {
        type: "text"
      },
      table: {
        category: "Appearance"
      }
    },
    height: {
      description: "The height of the image",
      control: {
        type: "text"
      },
      table: {
        category: "Appearance"
      }
    },
    alt: {
      description: "The alt text for the image",
      control: {
        type: "text"
      },
      table: {
        category: "Content"
      }
    },
    skeleton: {
      description: "Whether to display a skeleton loading state",
      control: {
        type: "boolean"
      },
      table: {
        category: "Behavior"
      }
    }
  }
};
var _default = exports["default"] = meta;
var Default = exports.Default = {
  args: {
    src: "https://picsum.photos/200",
    width: "200",
    height: "200",
    alt: "Image",
    skeleton: false
  }
};
var Skeleton = exports.Skeleton = {
  args: {
    src: "https://picsum.photos/200",
    width: "200",
    height: "200",
    alt: "Image",
    skeleton: true
  }
};