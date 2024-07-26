"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Default = void 0;
var _react = _interopRequireDefault(require("react"));
require("../../styles.scss");
var _EmptyState = _interopRequireDefault(require("./EmptyState"));
var _blocks = require("@storybook/blocks");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var meta = {
  title: "Templates/Empty State",
  component: _EmptyState["default"],
  parameters: {
    layout: "padded",
    docs: {
      page: function page() {
        return <>
          <_blocks.Title />
          <_blocks.Subtitle>Template</_blocks.Subtitle>
          <p>
            The <strong>EmptyState</strong> template has many uses. It
            communicates when a search finds nothing, a page is empty, or data
            loading encounters issues. It can display an icon, a title,
            additional text, and even suggest actions to take next if there's a
            problem.
          </p>
          <_blocks.Primary />
          <_blocks.Controls />
          <_blocks.Stories />
        </>;
      }
    }
  },
  argTypes: {
    icon: {
      name: "Icon",
      description: "Icon to display in the empty state.",
      table: {
        category: "Content"
      }
    },
    title: {
      name: "Title",
      description: "Main title displayed in the empty state.",
      table: {
        category: "Content"
      }
    },
    description: {
      name: "Description",
      description: "Description displayed in the empty state.",
      table: {
        category: "Content"
      }
    },
    buttonContentPrimary: {
      name: "Primary Button Content",
      description: "Text displayed in the primary button.",
      table: {
        category: "Appearence"
      }
    },
    buttonContentSecondary: {
      name: "Secondary Button Content",
      description: "Text displayed in the secondary button.",
      table: {
        category: "Appearence"
      }
    },
    onClickActionPrimary: {
      name: "Primary Button Action",
      description: "Function to be executed on primary button click.",
      table: {
        category: "Actions"
      }
    },
    onClickActionSecondary: {
      name: "Secondary Button Action",
      description: "Function to be executed on secondary button click.",
      table: {
        category: "Actions"
      }
    }
  },
  tags: ["autodocs"]
};
var _default = exports["default"] = meta;
var Template = function Template(args) {
  return <_EmptyState.default {...args} />;
};
var Default = exports.Default = Template.bind({});
Default.args = {
  title: "Title",
  description: "Description",
  icon: "ac_unit",
  buttonContentPrimary: "Button",
  buttonContentSecondary: "Button"
};