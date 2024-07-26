"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.LeftLabel = exports.Disable = exports.Default = exports.CenterLabel = void 0;
require("../../styles.scss");
var _Pagination = _interopRequireDefault(require("./Pagination"));
var _blocks = require("@storybook/blocks");
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var meta = {
  title: "Components/Pagination",
  component: _Pagination["default"],
  tags: ["autodocs"],
  parameters: {
    docs: {
      page: function page() {
        return <>
          <_blocks.Title />
          <_blocks.Subtitle>Component</_blocks.Subtitle>
          <p>
            The <strong>Pagination</strong> enable users to navigate through an
            ordered collection of items split into pages.
          </p>
          <_blocks.Primary />
          <_blocks.Controls />
          <_blocks.Stories />
        </>;
      }
    }
  },
  argTypes: {
    label: {
      control: "text",
      description: "The label for the pagination component.",
      table: {
        category: "Content"
      }
    },
    variant: {
      control: "select",
      options: ["noLabel", "leftLabel", "centerLabel"],
      description: "The variant of the pagination label position.",
      table: {
        category: "Appearance"
      }
    },
    disabledLeft: {
      control: "boolean",
      description: "If true, the left pagination button is disabled.",
      table: {
        category: "State"
      }
    },
    disabledRight: {
      control: "boolean",
      description: "If true, the right pagination button is disabled.",
      table: {
        category: "State"
      }
    },
    onClickLeft: {
      action: "leftClick",
      description: "Callback function when the left pagination button is clicked.",
      table: {
        category: "Actions"
      }
    },
    onClickRight: {
      action: "rightClick",
      description: "Callback function when the right pagination button is clicked.",
      table: {
        category: "Actions"
      }
    }
  }
};
var _default = exports["default"] = meta;
var Default = exports.Default = {
  args: {
    label: "Pagination",
    variant: "noLabel",
    disabledLeft: false,
    disabledRight: false
  }
};
var Disable = exports.Disable = {
  args: {
    label: "Pagination",
    variant: "noLabel",
    disabledLeft: true,
    disabledRight: true
  }
};
var LeftLabel = exports.LeftLabel = {
  args: {
    label: "Pagination",
    variant: "leftLabel",
    disabledLeft: false,
    disabledRight: false
  }
};
var CenterLabel = exports.CenterLabel = {
  args: {
    label: "Pagination",
    variant: "centerLabel",
    disabledLeft: false,
    disabledRight: false
  }
};