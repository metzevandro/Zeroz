"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Multiple = exports.Disabled = exports.Default = void 0;
require("../../styles.scss");
var _ImageUploader = _interopRequireDefault(require("./ImageUploader"));
var _blocks = require("@storybook/blocks");
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var meta = {
  title: "Components/Image Uploader",
  component: _ImageUploader["default"],
  parameters: {
    layout: "padded",
    docs: {
      page: function page() {
        return <>
          <_blocks.Title />
          <_blocks.Subtitle>Component</_blocks.Subtitle>
          <p>
            The <strong>Image Uploader</strong> allows you to put files on a
            page by either dragging them into a spot or clicking a button.
          </p>
          <_blocks.Primary />
          <_blocks.Controls />
          <_blocks.Stories />
        </>;
      }
    }
  },
  argTypes: {
    iconDropzone: {
      description: "Icon displayed in the dropzone area.",
      control: {
        type: "text"
      },
      table: {
        category: "Appearance"
      }
    },
    labelDropzone: {
      description: "Label displayed in the dropzone area.",
      control: {
        type: "text"
      },
      table: {
        category: "Appearance"
      }
    },
    title: {
      description: "Title of the uploader component.",
      control: {
        type: "text"
      },
      table: {
        category: "Content"
      }
    },
    description: {
      description: "Description of the uploader component.",
      control: {
        type: "text"
      },
      table: {
        category: "Content"
      }
    },
    proportion: {
      description: "Proportion of the image to be uploaded.",
      control: {
        type: "text"
      },
      table: {
        category: "Behavior"
      }
    },
    disabled: {
      description: "Disables the uploader.",
      control: {
        type: "boolean"
      },
      table: {
        category: "Behavior"
      }
    },
    multiple: {
      description: "Allows multiple file uploads.",
      control: {
        type: "boolean"
      },
      table: {
        category: "Behavior"
      }
    },
    maxFileSize: {
      description: "Maximum file size allowed for upload in MB.",
      control: {
        type: "number"
      },
      table: {
        category: "Behavior"
      }
    },
    value: {
      description: "Current value of the uploader.",
      control: {
        type: "object"
      },
      table: {
        category: "Data"
      }
    },
    onChange: {
      description: "Function called when the value changes.",
      table: {
        category: "Events"
      }
    }
  }
};
var _default = exports["default"] = meta;
var Default = exports.Default = {
  args: {
    iconDropzone: "file_upload",
    labelDropzone: "Select an image",
    title: "Title",
    description: "Description",
    proportion: "1/1",
    disabled: false,
    multiple: false,
    maxFileSize: 5,
    value: null,
    onChange: function onChange() {}
  }
};
var Multiple = exports.Multiple = {
  args: {
    iconDropzone: "file_upload",
    labelDropzone: "Select an image",
    title: "Title",
    description: "Description",
    proportion: "1/1",
    disabled: false,
    multiple: true,
    maxFileSize: 5,
    value: null,
    onChange: function onChange() {}
  }
};
var Disabled = exports.Disabled = {
  args: {
    iconDropzone: "file_upload",
    labelDropzone: "Select an image",
    title: "Title",
    description: "Description",
    proportion: "1/1",
    disabled: true,
    multiple: false,
    maxFileSize: 5,
    value: null,
    onChange: function onChange() {}
  }
};