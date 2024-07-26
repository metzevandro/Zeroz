"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Row = exports.Column = void 0;
var _DescriptionList = _interopRequireDefault(require("./DescriptionList"));
require("../../styles.scss");
var _blocks = require("@storybook/blocks");
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var meta = {
  title: "Components/Description List",
  component: _DescriptionList["default"],
  parameters: {
    layout: "padded",
    docs: {
      page: function page() {
        return <>
          <_blocks.Title />
          <_blocks.Subtitle>Component</_blocks.Subtitle>
          <p>
            The <strong>Description list</strong> helps organize and explain
            related info, perfect for listing and defining terms.
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
      description: "The direction of the description list, either row or column.",
      control: {
        type: "radio"
      },
      options: ["row", "column"],
      defaultValue: "row",
      table: {
        category: "Layout"
      }
    },
    items: {
      description: "Array of items to be displayed in the description list. Each item contains a title and description.",
      control: {
        type: "object"
      },
      defaultValue: [{
        title: "Title 1",
        description: "Description 1"
      }, {
        title: "Title 2",
        description: "Description 2"
      }, {
        title: "Title 3",
        description: "Description 3"
      }],
      table: {
        category: "Content"
      }
    }
  }
};
var _default = exports["default"] = meta;
var Template = function Template(args) {
  return <_DescriptionList.default direction={args.direction} items={args.items} />;
};
var Row = exports.Row = Template.bind({});
Row.args = {
  direction: "row",
  items: [{
    title: "Title 1",
    description: "Description 1"
  }, {
    title: "Title 2",
    description: "Description 2"
  }, {
    title: "Title 3",
    description: "Description 3"
  }]
};
var Column = exports.Column = Template.bind({});
Column.args = {
  direction: "column",
  items: [{
    title: "Title 1",
    description: "Description 1"
  }, {
    title: "Title 2",
    description: "Description 2"
  }, {
    title: "Title 3",
    description: "Description 3"
  }]
};