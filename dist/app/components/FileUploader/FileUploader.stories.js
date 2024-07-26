"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Disable = exports.Default = void 0;
require("../../styles.scss");
var _FileUploader = _interopRequireDefault(require("./FileUploader"));
var _blocks = require("@storybook/blocks");
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var meta = {
  title: "Components/File Uploader",
  component: _FileUploader["default"],
  parameters: {
    layout: "padded",
    docs: {
      page: function page() {
        return <>
          <_blocks.Title />
          <_blocks.Subtitle>Component</_blocks.Subtitle>
          <p>
            The <strong>File uploader</strong> lets you choose files and put
            them in a certain spot.
          </p>
          <_blocks.Primary />
          <_blocks.Controls />
          <_blocks.Stories />
        </>;
      }
    }
  },
  argTypes: {
    title: {
      description: "The title for the file uploader component.",
      control: {
        type: "text"
      },
      defaultValue: "Upload files",
      table: {
        category: "Content"
      }
    },
    typeIconButton: {
      description: "The icon type for the upload button. Use Material Icons",
      control: {
        type: "text"
      },
      defaultValue: "upload_file",
      table: {
        category: "Content"
      }
    },
    buttonLabel: {
      description: "The label for the upload button.",
      control: {
        type: "text"
      },
      defaultValue: "Add file",
      table: {
        category: "Content"
      }
    },
    description: {
      description: "The description for the file uploader component.",
      control: {
        type: "text"
      },
      defaultValue: "Max file size is 1mb.",
      table: {
        category: "Content"
      }
    },
    multiple: {
      description: "Allows multiple file selection if true.",
      control: {
        type: "boolean"
      },
      defaultValue: false,
      table: {
        category: "Behavior"
      }
    },
    disabled: {
      description: "Disables the file uploader if true.",
      control: {
        type: "boolean"
      },
      defaultValue: false,
      table: {
        category: "Behavior"
      }
    },
    maxFileSize: {
      description: "The maximum file size allowed in MB.",
      control: {
        type: "number"
      },
      defaultValue: 1,
      table: {
        category: "Behavior"
      }
    },
    value: {
      description: "The currently selected files.",
      control: {
        type: "object"
      },
      defaultValue: null,
      table: {
        category: "Data"
      }
    },
    onChange: {
      description: "Callback function when files are selected.",
      action: "onChange",
      table: {
        category: "Events"
      }
    }
  }
};
var _default = exports["default"] = meta;
var Default = exports.Default = {
  args: {
    title: "Upload files",
    description: "Max file size is 1mb.",
    buttonLabel: "Add file",
    typeIconButton: "upload_file",
    multiple: false,
    disabled: false,
    maxFileSize: 1,
    value: null,
    onChange: function onChange(files) {}
  }
};
var Disable = exports.Disable = {
  args: {
    typeIconButton: "upload_file",
    buttonLabel: "Add file",
    title: "Upload files",
    description: "Max file size is 1mb.",
    multiple: false,
    disabled: true,
    maxFileSize: 1,
    value: null,
    onChange: function onChange(files) {}
  }
};