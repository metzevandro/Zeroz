"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Default = void 0;
var _Brand = _interopRequireDefault(require("./Brand"));
require("../../styles.scss");
var _blocks = require("@storybook/blocks");
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var meta = {
  title: "Components/Brand",
  component: _Brand["default"],
  parameters: {
    layout: "centered",
    docs: {
      page: function page() {
        return <>
          <_blocks.Title />
          <_blocks.Subtitle>Component</_blocks.Subtitle>
          <p>
            The <strong>Brand</strong> component represents the brand logo.
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
    size: {
      name: "Size",
      description: "Controls the size of the brand logo. Options typically include 'sm', 'md', and 'lg'.",
      control: {
        type: "select",
        options: ["sm", "md", "lg"]
      },
      table: {
        category: "Appearance",
        type: {
          summary: "'sm' | 'md' | 'lg'"
        }
      }
    },
    src: {
      name: "Source",
      description: "Specifies the source URL of the brand logo image.",
      control: "text",
      table: {
        category: "Content",
        type: {
          summary: "string"
        }
      }
    },
    alt: {
      name: "Alt Text",
      description: "Provides alternative text for the brand logo image, useful for accessibility purposes.",
      control: "text",
      table: {
        category: "Content",
        type: {
          summary: "string"
        }
      }
    }
  }
};
var _default = exports["default"] = meta;
var Default = exports.Default = {
  args: {
    size: "md",
    src: "/logo-sm.svg",
    alt: "Imagem"
  }
};