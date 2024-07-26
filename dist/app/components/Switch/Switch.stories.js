"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Default = void 0;
require("../../styles.scss");
var _Switch = _interopRequireDefault(require("./Switch"));
var _blocks = require("@storybook/blocks");
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var meta = {
  title: "Components/Switch",
  component: _Switch["default"],
  parameters: {
    layout: "centered",
    docs: {
      page: function page() {
        return <>
          <_blocks.Title />
          <_blocks.Subtitle>Component</_blocks.Subtitle>
          <p>
            The <strong>Switch </strong> is used to change between two states,
            often used for turning things "on" or "off."
          </p>
          <_blocks.Primary />
          <_blocks.Controls />
          <_blocks.Stories />
        </>;
      }
    }
  },
  tags: ["autodocs"],
  argTypes: {
    label: {
      name: "Label",
      description: "The label displayed for the switch.",
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
    disabled: {
      name: "Disabled",
      description: "Indicates whether the switch is disabled.",
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
        category: "Behavior",
        type: {
          summary: "boolean"
        }
      }
    },
    onUpdate: {
      name: "On Update",
      description: "Callback function that is triggered when the switch value changes.",
      type: {
        name: "function"
      },
      action: "updated",
      table: {
        category: "Events",
        type: {
          summary: "(checked: boolean) => void"
        }
      }
    },
    modelValue: {
      name: "Model Value",
      description: "The model value of the switch.",
      table: {
        category: "Data",
        type: {
          summary: "any"
        }
      }
    },
    value: {
      name: "Value",
      description: "The value of the switch.",
      table: {
        category: "Data",
        type: {
          summary: "any"
        }
      }
    },
    id: {
      name: "ID",
      description: "The unique identifier for the switch.",
      type: {
        name: "string"
      },
      table: {
        category: "Identification",
        type: {
          summary: "string"
        }
      }
    },
    name: {
      name: "Name",
      description: "The name of the switch.",
      type: {
        name: "string"
      },
      table: {
        category: "Identification",
        type: {
          summary: "string"
        }
      }
    },
    required: {
      name: "Required",
      description: "Indicates whether the switch is required.",
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
        category: "Validation",
        type: {
          summary: "boolean"
        }
      }
    },
    noEvents: {
      name: "No Events",
      description: "Indicates whether events should be ignored.",
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
        category: "Behavior",
        type: {
          summary: "boolean"
        }
      }
    }
  }
};
var _default = exports["default"] = meta;
var Default = exports.Default = {
  args: {
    label: "Label",
    disabled: false,
    modelValue: null,
    value: null,
    id: "switch-id",
    name: "switch-name",
    required: false,
    noEvents: false
  }
};