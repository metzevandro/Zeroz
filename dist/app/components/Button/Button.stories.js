"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withIcon = exports.warning = exports.success = exports.secondary = exports.primary = exports.loading = exports.disabled = exports["default"] = exports.Skeleton = void 0;
var _Button = _interopRequireDefault(require("./Button"));
require("../../styles.scss");
var _blocks = require("@storybook/blocks");
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var meta = {
  title: "Components/Button",
  component: _Button["default"],
  parameters: {
    layout: "centered",
    docs: {
      page: function page() {
        return <>
          <_blocks.Title />
          <_blocks.Subtitle>Component</_blocks.Subtitle>
          <p>
            The <strong>Buttons</strong> are used to initialize an action. The
            words on a button tell you what will happen when you click it.
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
    size: {
      description: "Defines the size of the button. Options are 'small', 'medium', and 'large'.",
      control: {
        type: "select",
        options: ["sm", "md", "lg"]
      },
      defaultValue: "md",
      table: {
        category: "Appearance",
        type: {
          summary: "sm | md | lg"
        }
      }
    },
    disabled: {
      description: "Determines if the button is disabled.",
      control: {
        type: "boolean"
      },
      defaultValue: false,
      table: {
        category: "State",
        type: {
          summary: "boolean"
        }
      }
    },
    label: {
      description: "Text to be displayed inside the button.",
      control: {
        type: "text"
      },
      defaultValue: "Button",
      table: {
        category: "Content",
        type: {
          summary: "string"
        }
      }
    },
    typeIcon: {
      description: "Defines the type of icon to be displayed inside the button. Uses Material Icons names.",
      control: {
        type: "text"
      },
      defaultValue: "",
      table: {
        category: "Content",
        type: {
          summary: "string"
        }
      }
    },
    variant: {
      description: "Defines the visual style of the button. Options are 'primary', 'secondary', 'success', 'warning', and 'is-loading'.",
      control: {
        type: "select",
        options: ["primary", "secondary", "success", "warning", "is-loading"]
      },
      defaultValue: "primary",
      table: {
        category: "Appearance",
        type: {
          summary: "primary | secondary | success | warning | is-loading"
        }
      }
    },
    skeleton: {
      description: "Displays the button in a skeleton loading state.",
      control: {
        type: "boolean"
      },
      defaultValue: false,
      table: {
        category: "State",
        type: {
          summary: "boolean"
        }
      }
    },
    onClick: {
      description: "Callback function triggered when the button is clicked.",
      action: "clicked",
      table: {
        category: "Events",
        type: {
          summary: "(event: React.MouseEvent<HTMLButtonElement>) => void"
        }
      }
    }
  }
};
var _default = exports["default"] = meta;
var primary = exports.primary = {
  args: {
    size: "md",
    disabled: false,
    label: "Button",
    typeIcon: "",
    variant: "primary",
    skeleton: false
  }
};
var secondary = exports.secondary = {
  args: {
    size: "md",
    disabled: false,
    label: "Button",
    typeIcon: "",
    variant: "secondary"
  }
};
var success = exports.success = {
  args: {
    size: "md",
    disabled: false,
    label: "Button",
    typeIcon: "",
    variant: "success"
  }
};
var warning = exports.warning = {
  args: {
    size: "md",
    disabled: false,
    label: "Button",
    typeIcon: "",
    variant: "warning"
  }
};
var withIcon = exports.withIcon = {
  args: {
    size: "md",
    disabled: false,
    label: "Button",
    typeIcon: "ac_unit",
    variant: "primary"
  }
};
var disabled = exports.disabled = {
  args: {
    size: "md",
    disabled: true,
    label: "Button",
    typeIcon: "ac_unit",
    variant: "primary"
  }
};
var loading = exports.loading = {
  args: {
    size: "md",
    label: "Button",
    variant: "is-loading"
  }
};
var Skeleton = exports.Skeleton = {
  args: {
    size: "md",
    label: "Button",
    variant: "primary",
    skeleton: true
  }
};