"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.WidthFull = exports.Default = void 0;
var _react = _interopRequireDefault(require("react"));
var _Tab = _interopRequireDefault(require("./Tab"));
var _Icon = _interopRequireDefault(require("../Icon/Icon"));
require("../../styles.scss");
var _blocks = require("@storybook/blocks");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var meta = {
  title: "Components/Tab",
  component: _Tab["default"],
  parameters: {
    tags: ["autodocs"],
    docs: {
      page: function page() {
        return <>
          <_blocks.Title />
          <_blocks.Subtitle>Component</_blocks.Subtitle>
          <p>
            The <strong>Tabs </strong> is to easily switch between different
            views within the same context.
          </p>
          <_blocks.Primary />
          <_blocks.Controls />
          <_blocks.Stories />
        </>;
      }
    }
  },
  argTypes: {
    widthFull: {
      name: "Width Full",
      description: "Determines if the tabs should take up the full width.",
      type: {
        name: "boolean"
      },
      defaultValue: {
        summary: false
      },
      control: {
        type: "boolean"
      },
      table: {
        category: "Appearance",
        type: {
          summary: "boolean"
        }
      }
    },
    tabs: {
      name: "Tabs",
      description: "Array of tab objects with labels and content.",
      defaultValue: {
        summary: []
      },
      table: {
        category: "Data",
        type: {
          summary: "Array<{ label: string, content: React.ReactNode }>"
        },
        defaultValue: {
          summary: "[]"
        }
      }
    }
  }
};
var _default = exports["default"] = meta;
var Template = function Template(args) {
  return <_Tab.default {...args} />;
};
var Default = exports.Default = Template.bind({});
Default.args = {
  widthFull: false,
  tabs: [{
    label: "Tab 1",
    content: <div className="slot">
          <_Icon.default icon="refresh" size="md" />
          1st Content
        </div>
  }, {
    label: "Tab 2",
    content: <div className="slot">
          <_Icon.default icon="refresh" size="md" />
          2nd Content
        </div>
  }]
};
var WidthFull = exports.WidthFull = Template.bind({});
WidthFull.args = {
  widthFull: true,
  tabs: [{
    label: "Tab 1",
    content: <div className="slot">
          <_Icon.default icon="refresh" size="md" />
          1st Content
        </div>
  }, {
    label: "Tab 2",
    content: <div className="slot">
          <_Icon.default icon="refresh" size="md" />
          2nd Content
        </div>
  }]
};