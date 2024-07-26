"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Default = void 0;
var _CardDropdown = _interopRequireDefault(require("./CardDropdown"));
var _Icon = _interopRequireDefault(require("../Icon/Icon"));
var _ButtonGroup = _interopRequireDefault(require("../ButtonGroup/ButtonGroup"));
require("../../styles.scss");
var _blocks = require("@storybook/blocks");
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var meta = {
  title: "Components/Card Dropdown",
  component: _CardDropdown["default"],
  parameters: {
    layout: "padded",
    docs: {
      page: function page() {
        return <>
          <_blocks.Title />
          <_blocks.Subtitle>Component</_blocks.Subtitle>
          <p>
            A <strong>Card Dropdown</strong> is employed when you want to use a
            card, but the content is too extensive, allowing it to show and hide
            as necessary.
          </p>
          <_blocks.Primary />
          <_blocks.Controls />
          <_blocks.Stories />
        </>;
      }
    }
  },
  args: {
    title: "Card dropdown title",
    description: "Card dropdown description"
  },
  argTypes: {
    title: {
      description: "The title to be displayed in the card dropdown.",
      control: {
        type: "text"
      },
      defaultValue: "Card dropdown title",
      table: {
        category: "Content"
      }
    },
    description: {
      description: "The description to be displayed in the card dropdown.",
      control: {
        type: "text"
      },
      defaultValue: "Card dropdown description",
      table: {
        category: "Content"
      }
    },
    content: {
      description: "The content section of the card dropdown, accepts a React node.",
      control: {
        type: "object"
      },
      table: {
        category: "Content"
      }
    },
    footer: {
      description: "The footer section of the card dropdown, accepts a React node.",
      control: {
        type: "object"
      },
      table: {
        category: "Content"
      }
    }
  }
};
var _default = exports["default"] = meta;
var Default = exports.Default = {
  render: function render(args) {
    var _args$content, _args$footer;
    return <>
      <_CardDropdown.default title={args.title} description={args.description} content={(_args$content = args.content) !== null && _args$content !== void 0 ? _args$content : <div className="slot">
              <_Icon.default icon="refresh" size="md" />
              Slot Content
            </div>} footer={(_args$footer = args.footer) !== null && _args$footer !== void 0 ? _args$footer : <div style={{
        display: "flex",
        width: "min-content"
      }}>
              <_ButtonGroup.default variantFirstButton="primary" variantSecondButton="secondary" direction="row" contentFirstButton="Button" contentSecondButton="Button" />
            </div>}></_CardDropdown.default>
    </>;
  }
};