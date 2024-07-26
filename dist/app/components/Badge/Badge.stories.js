"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.primary = exports["default"] = exports.Warning = exports.Success = exports.Default = void 0;
var _Badge = _interopRequireDefault(require("./Badge"));
require("../../styles.scss");
var _blocks = require("@storybook/blocks");
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var meta = {
  title: "Components/Badge",
  component: _Badge["default"],
  parameters: {
    layout: "centered",
    docs: {
      page: function page() {
        return <>
          <_blocks.Title />
          <_blocks.Subtitle>Component</_blocks.Subtitle>
          <p>
            The <strong>Badges</strong> are like little signs that inform you
            about the status or actions that have been taken.
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
    label: {
      name: "Label",
      description: "The text content to display within the badge.",
      type: {
        name: "string"
      },
      control: {
        type: "text"
      },
      table: {
        category: "Content",
        type: {
          summary: "string"
        }
      }
    },
    type: {
      name: "Type",
      description: "The type of badge.",
      control: {
        type: "select",
        options: ["default"]
      },
      table: {
        category: "Appearance",
        type: {
          summary: "'default'"
        }
      }
    },
    variant: {
      name: "Variant",
      description: "The visual variant of the badge.",
      control: {
        type: "select",
        options: ["default", "primary", "success", "warning"]
      },
      table: {
        category: "Appearance",
        type: {
          summary: "'default' | 'primary' | 'success' | 'warning'"
        }
      }
    }
  }
};
var _default = exports["default"] = meta;
var Default = exports.Default = {
  args: {
    label: "Badge",
    type: "default",
    variant: "default"
  }
};
var primary = exports.primary = {
  args: {
    label: "Badge",
    type: "default",
    variant: "primary"
  }
};
var Success = exports.Success = {
  args: {
    label: "Badge",
    type: "default",
    variant: "success"
  }
};
var Warning = exports.Warning = {
  args: {
    label: "Badge",
    type: "default",
    variant: "warning"
  }
};