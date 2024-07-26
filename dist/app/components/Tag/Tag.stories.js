"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.primary = exports["default"] = exports.Warning = exports.Success = exports.Secondary = void 0;
require("../../styles.scss");
var _Tag = _interopRequireDefault(require("./Tag"));
var _blocks = require("@storybook/blocks");
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var meta = {
  title: "Components/Tag",
  component: _Tag["default"],
  parameters: {
    layout: "centered",
    docs: {
      page: function page() {
        return <>
          <_blocks.Title />
          <_blocks.Subtitle>Component</_blocks.Subtitle>
          <p>
            Use <strong>Tags</strong> to categorize or organize items using
            keywords that describe them. You also can add or remove tags as
            need.
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
    content: {
      name: "Content",
      description: "The text content of the tag.",
      type: {
        name: "string"
      },
      defaultValue: {
        summary: ""
      },
      table: {
        category: "Data",
        type: {
          summary: "string"
        },
        defaultValue: {
          summary: ""
        }
      }
    },
    variant: {
      name: "Variant",
      description: "The variant/style of the tag.",
      control: {
        type: "select"
      },
      options: ["primary", "secondary", "success", "warning"],
      defaultValue: {
        summary: "primary"
      },
      table: {
        category: "Appearance",
        type: {
          summary: "'primary' | 'secondary' | 'success' | 'warning'"
        },
        defaultValue: {
          summary: "primary"
        }
      }
    },
    onClose: {
      name: "On Close",
      description: "Callback function triggered when the tag is closed.",
      action: "closed",
      table: {
        category: "Events",
        type: {
          summary: "() => void"
        }
      }
    }
  }
};
var _default = exports["default"] = meta;
var primary = exports.primary = {
  args: {
    content: "Tag",
    variant: "primary"
  }
};
var Secondary = exports.Secondary = {
  args: {
    content: "Tag",
    variant: "secondary"
  }
};
var Success = exports.Success = {
  args: {
    content: "Tag",
    variant: "success"
  }
};
var Warning = exports.Warning = {
  args: {
    content: "Tag",
    variant: "warning"
  }
};