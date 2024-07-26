"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Small = exports.Default = void 0;
require("../../styles.scss");
var _TableList = _interopRequireDefault(require("./TableList"));
var _blocks = require("@storybook/blocks");
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var meta = {
  title: "Components/Table List",
  component: _TableList["default"],
  tags: ["autodocs"],
  parameters: {
    docs: {
      page: function page() {
        return <>
          <_blocks.Title />
          <_blocks.Subtitle>Component</_blocks.Subtitle>
          <p>
            The <strong>Table lists</strong> organize and display all
            information from a data set, providing a complete view for easy
            comparison and analysis.
          </p>
          <_blocks.Primary />
          <_blocks.Controls />
          <_blocks.Stories />
        </>;
      }
    }
  },
  argTypes: {
    columns: {
      name: "Columns",
      description: "Array of column names for the table.",
      defaultValue: {
        summary: []
      },
      table: {
        category: "Data",
        type: {
          summary: "string[]"
        },
        defaultValue: {
          summary: "[]"
        }
      }
    },
    data: {
      name: "Data",
      description: "2D array of data to populate the table.",
      defaultValue: {
        summary: []
      },
      table: {
        category: "Data",
        type: {
          summary: "any[][]"
        },
        defaultValue: {
          summary: "[]"
        }
      }
    },
    size: {
      name: "Size",
      description: "Size of the table.",
      control: {
        type: "select"
      },
      options: ["sm", "md"],
      defaultValue: {
        summary: "md"
      },
      table: {
        category: "Appearance",
        type: {
          summary: "'sm' | 'md'"
        },
        defaultValue: {
          summary: "md"
        }
      }
    }
  }
};
var _default = exports["default"] = meta;
var columns = ["Name", "Age", "Role", "Experience", "Company"];
var data = [["David", 25, "Developer", "4 years", "Google"], ["Maria", 30, "Designer", "1 year", "Microsoft"], ["Carlos", 28, "Data Analyst", "1 month", "Netflix"]];
var Default = exports.Default = {
  args: {
    columns: columns,
    data: data,
    size: "md"
  }
};
var Small = exports.Small = {
  args: {
    columns: columns,
    data: data,
    size: "sm"
  }
};