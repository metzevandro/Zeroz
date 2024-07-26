"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Disable = exports.Default = void 0;
require("../../styles.scss");
var _DataPicker = _interopRequireDefault(require("./DataPicker"));
var _blocks = require("@storybook/blocks");
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var meta = {
  title: "Components/Data Picker",
  component: _DataPicker["default"],
  parameters: {
    layout: "padded",
    docs: {
      page: function page() {
        return <>
          <_blocks.Title />
          <_blocks.Subtitle>Component</_blocks.Subtitle>
          <p>
            The <strong>Data picker</strong> is used to select a single date.
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
      description: "The label for the data picker input field.",
      control: {
        type: "text"
      },
      defaultValue: "Label",
      table: {
        category: "Content"
      }
    },
    placeholder: {
      description: "The placeholder text for the data picker input field.",
      control: {
        type: "text"
      },
      defaultValue: "Placeholder",
      table: {
        category: "Content"
      }
    },
    disabled: {
      description: "Determines if the data picker input field is disabled.",
      control: {
        type: "boolean"
      },
      defaultValue: false,
      table: {
        category: "State"
      }
    },
    onDateChange: {
      description: "Callback function that is called when the date is changed.",
      action: "date changed",
      table: {
        category: "Events"
      }
    },
    date: {
      description: "The initial date to be displayed in the data picker input field.",
      control: {
        type: "text"
      },
      defaultValue: "12/06/2024",
      table: {
        category: "Content"
      }
    }
  }
};
var _default = exports["default"] = meta;
var Template = function Template(args) {
  return <div style={{
    height: "400px"
  }}>
      <_DataPicker.default date={args.date} label={args.label} onDateChange={args.onDateChange} placeholder={args.placeholder} disabled={args.disabled} />{" "}
    </div>;
};
var Default = exports.Default = Template.bind({});
Default.args = {
  label: "Label",
  placeholder: "Placeholder",
  disabled: false,
  onDateChange: function onDateChange(date) {
    return console.log(date);
  },
  date: "12/06/2024"
};
var Disable = exports.Disable = Template.bind({});
Disable.args = {
  date: "",
  label: "Label",
  placeholder: "Placeholder",
  disabled: true,
  onDateChange: function onDateChange(date) {
    return console.log(date);
  }
};