"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.primary = exports.disabled = exports["default"] = exports.Warning = exports.Success = exports.Skeleton = exports.Secondary = exports.Plain = exports.OnColor = void 0;
var _ButtonIcon = _interopRequireDefault(require("./ButtonIcon"));
require("../../styles.scss");
var _blocks = require("@storybook/blocks");
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var meta = {
  title: "Components/Button Icon",
  component: _ButtonIcon["default"],
  parameters: {
    layout: "centered",
    docs: {
      page: function page() {
        return <>
          <_blocks.Title />
          <_blocks.Subtitle>Component</_blocks.Subtitle>
          <p>
            The <strong>Icon buttons</strong> are often in app bars and
            toolbars. They're good for toggle buttons, like adding or removing
            something.
          </p>
          <_blocks.Primary />
          <_blocks.Controls />
          <_blocks.Stories />
        </>;
      }
    }
  },
  argTypes: {
    size: {
      description: "Defines the size of the button icon. Options are 'sm', 'md', 'lg'.",
      control: {
        type: "select",
        options: ["sm", "md", "lg"]
      },
      defaultValue: "md",
      table: {
        category: "Appearance"
      }
    },
    variant: {
      description: "Defines the visual style of the button icon. Options are 'primary', 'secondary', 'success', 'warning', 'on-color'.",
      control: {
        type: "select",
        options: ["primary", "secondary", "success", "warning", "on-color"]
      },
      defaultValue: "primary",
      table: {
        category: "Appearance"
      }
    },
    buttonType: {
      description: "Defines the type of button icon. Options are 'default' or 'plain'.",
      control: {
        type: "select",
        options: ["default", "plain"]
      },
      defaultValue: "default",
      table: {
        category: "Appearance"
      }
    },
    typeIcon: {
      description: "Defines the type of icon to be displayed. Uses Material Icons names.",
      control: {
        type: "text"
      },
      defaultValue: "close",
      table: {
        category: "Content"
      }
    },
    skeleton: {
      description: "Displays the button icon in a skeleton loading state.",
      control: {
        type: "boolean"
      },
      defaultValue: false,
      table: {
        category: "State"
      }
    },
    disabled: {
      description: "Disables interaction with the button icon.",
      control: {
        type: "boolean"
      },
      defaultValue: false,
      table: {
        category: "State"
      }
    },
    onClick: {
      description: "Function to call when the button icon is clicked.",
      action: "clicked",
      table: {
        category: "Events",
        type: {
          summary: "(event: React.MouseEvent<HTMLButtonElement>) => void"
        }
      }
    }
  },
  tags: ["autodocs"]
};
var _default = exports["default"] = meta;
var primary = exports.primary = {
  args: {
    size: "md",
    variant: "primary",
    buttonType: "default",
    typeIcon: "close",
    skeleton: false,
    disabled: false
  }
};
var Secondary = exports.Secondary = {
  args: {
    size: "md",
    variant: "secondary",
    buttonType: "default",
    typeIcon: "close",
    skeleton: false,
    disabled: false
  }
};
var Success = exports.Success = {
  args: {
    size: "md",
    variant: "success",
    buttonType: "default",
    typeIcon: "close",
    skeleton: false,
    disabled: false
  }
};
var Warning = exports.Warning = {
  args: {
    size: "md",
    variant: "warning",
    buttonType: "default",
    typeIcon: "close",
    skeleton: false,
    disabled: false
  }
};
var Plain = exports.Plain = {
  args: {
    size: "md",
    variant: "primary",
    buttonType: "plain",
    typeIcon: "close",
    skeleton: false,
    disabled: false
  }
};
var OnColor = exports.OnColor = {
  args: {
    size: "md",
    variant: "on-color",
    buttonType: "plain",
    typeIcon: "close",
    skeleton: false,
    disabled: false
  }
};
var Skeleton = exports.Skeleton = {
  args: {
    size: "md",
    variant: "on-color",
    buttonType: "plain",
    typeIcon: "close",
    skeleton: true,
    disabled: false
  }
};
var disabled = exports.disabled = {
  args: {
    size: "md",
    variant: "on-color",
    buttonType: "default",
    typeIcon: "close",
    skeleton: false,
    disabled: true
  }
};