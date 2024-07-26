"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.WithImage = exports.Default = void 0;
require("../../styles.scss");
var _Card = require("./Card");
var _Icon = _interopRequireDefault(require("../Icon/Icon"));
var _ButtonGroup = _interopRequireDefault(require("../ButtonGroup/ButtonGroup"));
var _blocks = require("@storybook/blocks");
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var meta = {
  title: "Components/Card",
  component: _Card.Card,
  parameters: {
    layout: "centered",
    docs: {
      page: function page() {
        return <>
          <_blocks.Title />
          <_blocks.Subtitle>Component</_blocks.Subtitle>
          <p>
            The <strong>Cards</strong> are used to group similar content and
            tasks. They help you read and do things.
          </p>
          <_blocks.Primary />
          <_blocks.Controls />
          <_blocks.Stories />
        </>;
      }
    }
  },
  argTypes: {
    image: {
      description: "The image section of the card, accepts a React node.",
      control: {
        type: "object"
      },
      table: {
        category: "Content"
      }
    },
    header: {
      description: "The header section of the card, accepts a React node.",
      control: {
        type: "object"
      },
      table: {
        category: "Content"
      }
    },
    title: {
      description: "The title to be displayed in the card header.",
      control: {
        type: "text"
      },
      defaultValue: "Title",
      table: {
        category: "Content"
      }
    },
    description: {
      description: "The description to be displayed in the card header.",
      control: {
        type: "text"
      },
      defaultValue: "Description",
      table: {
        category: "Content"
      }
    },
    content: {
      description: "The content section of the card, accepts a React node.",
      control: {
        type: "object"
      },
      table: {
        category: "Content"
      }
    },
    footer: {
      description: "The footer section of the card, accepts a React node.",
      control: {
        type: "object"
      },
      table: {
        category: "Content"
      }
    }
  }
};
var _default = exports["default"] = meta;
var Template = function Template(args) {
  var _args$header, _args$content, _args$footer;
  return <div style={{
    width: "320px"
  }}>
      <_Card.Card header={(_args$header = args.header) !== null && _args$header !== void 0 ? _args$header : <_Card.CardHeader title={args.title} description={args.description} />} content={(_args$content = args.content) !== null && _args$content !== void 0 ? _args$content : <_Card.CardContent>
              <div className="slot">
                <_Icon.default icon="refresh" size="md" />
                Slot Content
              </div>
            </_Card.CardContent>} footer={(_args$footer = args.footer) !== null && _args$footer !== void 0 ? _args$footer : <_Card.CardFooter>
              <div style={{
        width: "min-content"
      }}>
                <_ButtonGroup.default direction="row" variantFirstButton="primary" variantSecondButton="secondary" contentFirstButton="Button" contentSecondButton="Button" />
              </div>
            </_Card.CardFooter>} />
    </div>;
};
var Default = exports.Default = Template.bind({});
Default.args = {
  title: "Title",
  description: "Description"
};
var Template2 = function Template2(args) {
  var _args$image, _args$header2, _args$content2, _args$footer2;
  return <div style={{
    width: "320px"
  }}>
      <_Card.Card image={(_args$image = args.image) !== null && _args$image !== void 0 ? _args$image : <_Card.CardImage>
              <img src="https://picsum.photos/1200" alt="Card Image" height={200} />
            </_Card.CardImage>} header={(_args$header2 = args.header) !== null && _args$header2 !== void 0 ? _args$header2 : <_Card.CardHeader title={args.title} description={args.description} />} content={(_args$content2 = args.content) !== null && _args$content2 !== void 0 ? _args$content2 : <_Card.CardContent>
              <div className="slot">
                <_Icon.default icon="refresh" size="md" />
                Slot Content
              </div>
            </_Card.CardContent>} footer={(_args$footer2 = args.footer) !== null && _args$footer2 !== void 0 ? _args$footer2 : <_Card.CardFooter>
              <div style={{
        width: "min-content"
      }}>
                <_ButtonGroup.default direction="row" variantFirstButton="primary" variantSecondButton="secondary" contentFirstButton="Button" contentSecondButton="Button" />
              </div>
            </_Card.CardFooter>} />
    </div>;
};
var WithImage = exports.WithImage = Template2.bind({});
WithImage.args = {
  title: "Title",
  description: "Description"
};