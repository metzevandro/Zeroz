"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withLetter = exports.withImage = exports["default"] = exports.Skeleton = exports.Default = void 0;
var _Avatar = _interopRequireDefault(require("./Avatar"));
var _react = _interopRequireDefault(require("react"));
require("../../styles.scss");
var _blocks = require("@storybook/blocks");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var meta = {
  title: "Components/Avatar",
  component: _Avatar["default"],
  parameters: {
    layout: "centered",
    docs: {
      page: function page() {
        return <>
          <_blocks.Title />
          <_blocks.Subtitle>Component</_blocks.Subtitle>
          <p>
            The <strong>Avatars</strong> are used to represent a user, customer
            or business.
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
      description: "The size of the avatar. Can be 'sm', 'md', or 'lg'.",
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
      description: "The source URL of the avatar image.",
      control: "text",
      table: {
        category: "Data",
        type: {
          summary: "string"
        }
      }
    },
    letter: {
      name: "Letter",
      description: "The letter to display when there is no image.",
      control: "text",
      table: {
        category: "Data",
        type: {
          summary: "string"
        }
      }
    },
    skeleton: {
      name: "Skeleton",
      description: "If true, the avatar will display a skeleton loading state.",
      control: "boolean",
      table: {
        category: "State",
        type: {
          summary: "boolean"
        }
      }
    }
  }
};
var _default = exports["default"] = meta;
var Template = function Template(args) {
  return <_Avatar.default size={args.size} src={args.src} skeleton={args.skeleton} letter={args.letter} />;
};
var Default = exports.Default = Template.bind({});
Default.args = {
  size: "md",
  src: "",
  letter: "",
  skeleton: false
};
var withImage = exports.withImage = Template.bind({});
withImage.args = {
  size: "md",
  src: "https://picsum.photos/100",
  skeleton: false
};
var withLetter = exports.withLetter = Template.bind({});
withLetter.args = {
  size: "md",
  letter: "L",
  src: "",
  skeleton: false
};
var Skeleton = exports.Skeleton = Template.bind({});
Skeleton.args = {
  size: "md",
  src: "",
  skeleton: true
};