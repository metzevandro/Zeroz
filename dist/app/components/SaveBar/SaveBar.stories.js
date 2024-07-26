"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Default = void 0;
require("../../styles.scss");
var _SaveBar = _interopRequireDefault(require("./SaveBar"));
var _blocks = require("@storybook/blocks");
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var meta = {
  title: "Components/Save bar",
  component: _SaveBar["default"],
  tags: ["autodocs"],
  parameters: {
    docs: {
      page: function page() {
        return <>
          <_blocks.Title />
          <_blocks.Subtitle>Component</_blocks.Subtitle>
          <p>
            The <strong>Save Bar</strong> is visible during the creation or
            editing of objects. Users can utilize it to save or discard their
            work.
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
      description: "The label displayed on the Save Bar.",
      table: {
        category: "Content"
      }
    },
    labelSave: {
      control: "text",
      description: "The label displayed on the submit button Save Bar.",
      table: {
        category: "Content"
      }
    },
    labelCancel: {
      control: "text",
      description: "The label displayed on the cancel button Save Bar.",
      table: {
        category: "Content"
      }
    },
    onClickCancel: {
      action: "onClickCancel",
      description: "Callback function that is called when the cancel button is clicked.",
      table: {
        category: "Events"
      }
    },
    onClickSave: {
      action: "onClickSave",
      description: "Callback function that is called when the save button is clicked.",
      table: {
        category: "Events"
      }
    }
  }
};
var _default = exports["default"] = meta;
var Default = exports.Default = {
  args: {
    labelSave: "Save",
    labelCancel: "Cancel",
    label: "Unsaved changes",
    onClickCancel: function onClickCancel() {},
    onClickSave: function onClickSave() {}
  }
};