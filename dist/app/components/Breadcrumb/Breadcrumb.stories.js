"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Default = void 0;
var _Breadcrumb = require("./Breadcrumb");
require("../../styles.scss");
var _blocks = require("@storybook/blocks");
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var meta = {
  title: "Components/Breadcrumb",
  component: _Breadcrumb.Breadcrumb,
  parameters: {
    layout: "centered",
    docs: {
      page: function page() {
        return <>
          <_blocks.Title />
          <_blocks.Subtitle>Component</_blocks.Subtitle>
          <p>
            The <strong>Breadcrumb</strong> is like a helpful trail that shows
            where you are and lets you go back to previous pages.
          </p>
          <_blocks.Primary />
          <_blocks.Controls />
          <_blocks.Stories />
        </>;
      }
    }
  },
  argTypes: {
    items: {
      name: "Items",
      description: "An array of breadcrumb items, where each item represents a step in the breadcrumb trail.",
      control: "object",
      table: {
        category: "Content",
        type: {
          summary: "BreadcrumbItem[]"
        }
      }
    }
  },
  tags: ["autodocs"]
};
var _default = exports["default"] = meta;
var Template = function Template(args) {
  return <>
      <_Breadcrumb.Breadcrumb items={args.items} />
    </>;
};
var Default = exports.Default = Template.bind({});
Default.args = {
  items: [{
    pageName: "Home",
    href: "/"
  }, {
    pageName: "Category",
    href: "/category"
  }, {
    pageName: "Product",
    href: "/product"
  }]
};