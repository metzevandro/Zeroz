"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Default = void 0;
require("../../styles.scss");
var _Slider = _interopRequireDefault(require("./Slider"));
var _blocks = require("@storybook/blocks");
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var meta = {
  title: "Components/Slider",
  component: _Slider["default"],
  tags: ["autodocs"],
  parameters: {
    docs: {
      page: function page() {
        return <>
          <_blocks.Title />
          <_blocks.Subtitle>Component</_blocks.Subtitle>
          <p>
            The <strong>Slider </strong> is a input field to to choose a number
            within a set range of minimum and maximum values.
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
      name: "Label",
      description: "The label displayed for the slider.",
      type: {
        name: "string"
      },
      defaultValue: {
        summary: "Label"
      },
      control: {
        type: "text"
      },
      table: {
        category: "Appearance",
        type: {
          summary: "string"
        },
        defaultValue: {
          summary: "Label"
        }
      }
    },
    value: {
      name: "Value",
      description: "The current value of the slider.",
      type: {
        name: "string"
      },
      defaultValue: {
        summary: "5"
      },
      control: {
        type: "text"
      },
      table: {
        category: "Behavior",
        type: {
          summary: "string"
        },
        defaultValue: {
          summary: "5"
        }
      }
    },
    max: {
      name: "Max",
      description: "The maximum value of the slider.",
      type: {
        name: "number"
      },
      defaultValue: {
        summary: 10
      },
      control: {
        type: "number"
      },
      table: {
        category: "Behavior",
        type: {
          summary: "number"
        }
      }
    },
    min: {
      name: "Min",
      description: "The minimum value of the slider.",
      type: {
        name: "number"
      },
      defaultValue: {
        summary: 0
      },
      control: {
        type: "number"
      },
      table: {
        category: "Behavior",
        type: {
          summary: "number"
        }
      }
    },
    step: {
      name: "Step",
      description: "The step size for each increment or decrement.",
      type: {
        name: "number"
      },
      defaultValue: {
        summary: 1
      },
      control: {
        type: "number"
      },
      table: {
        category: "Behavior",
        type: {
          summary: "number"
        }
      }
    },
    onChange: {
      name: "On Change",
      description: "Callback function that is triggered when the slider value changes.",
      type: {
        name: "function"
      },
      action: "changed",
      table: {
        category: "Events",
        type: {
          summary: "(value: string) => void"
        }
      }
    }
  }
};
var _default = exports["default"] = meta;
var Default = exports.Default = {
  args: {
    label: "Label",
    value: "5",
    max: 10,
    min: 0,
    step: 1,
    onChange: function onChange(value) {
      return console.log("Slider value changed:", value);
    }
  }
};