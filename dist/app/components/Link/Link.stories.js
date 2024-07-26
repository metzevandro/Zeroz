"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Disabled = exports.Default = void 0;
require("../../styles.scss");
var _Link = _interopRequireDefault(require("./Link"));
var _blocks = require("@storybook/blocks");
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var meta = {
  title: "Components/Link",
  component: _Link["default"],
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      page: function page() {
        return <>
          <_blocks.Title />
          <_blocks.Subtitle>Component</_blocks.Subtitle>
          <p>
            The <strong>Links</strong> are pathways to other places, often
            showing up within or right after a sentence, paragraph, or
            independently, guiding you to new destinations.
          </p>
          <_blocks.Primary />
          <_blocks.Controls />
          <_blocks.Stories />
        </>;
      }
    }
  },
  argTypes: {
    content: {
      control: "text",
      description: "The text content of the link.",
      table: {
        category: "Content"
      }
    },
    href: {
      control: "text",
      description: "The URL that the link points to.",
      table: {
        category: "Link"
      }
    },
    target: {
      control: "text",
      description: 'The target attribute specifies where to open the link (e.g., "_blank" for a new tab).',
      table: {
        category: "Link"
      }
    },
    disabled: {
      control: "boolean",
      description: "If true, the link will be styled as disabled and will not be clickable.",
      table: {
        category: "State"
      }
    }
  }
};
var _default = exports["default"] = meta;
var Default = exports.Default = {
  args: {
    content: "Link",
    target: "_blank",
    href: "https://example.com",
    disabled: false
  }
};
var Disabled = exports.Disabled = {
  args: {
    content: "Link",
    target: "_blank",
    href: "https://example.com",
    disabled: true
  }
};