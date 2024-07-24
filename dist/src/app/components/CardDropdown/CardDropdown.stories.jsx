import CardDropdown from "./CardDropdown";
import Icon from "../Icon/Icon";
import ButtonGroup from "../ButtonGroup/ButtonGroup";
import "../../styles.scss";
import { Title, Subtitle, Primary, Controls, Stories } from "@storybook/blocks";
var meta = {
  title: "Components/Card Dropdown",
  component: CardDropdown,
  parameters: {
    layout: "padded",
    docs: {
      page: function () {
        return (
          <>
            <Title />
            <Subtitle>Component</Subtitle>
            <p>
              A <strong>Card Dropdown</strong> is employed when you want to use
              a card, but the content is too extensive, allowing it to show and
              hide as necessary.
            </p>
            <Primary />
            <Controls />
            <Stories />
          </>
        );
      },
    },
  },
  args: {
    title: "Card dropdown title",
    description: "Card dropdown description",
  },
  argTypes: {
    title: {
      description: "The title to be displayed in the card dropdown.",
      control: { type: "text" },
      defaultValue: "Card dropdown title",
      table: {
        category: "Content",
      },
    },
    description: {
      description: "The description to be displayed in the card dropdown.",
      control: { type: "text" },
      defaultValue: "Card dropdown description",
      table: {
        category: "Content",
      },
    },
    content: {
      description:
        "The content section of the card dropdown, accepts a React node.",
      control: { type: "object" },
      table: {
        category: "Content",
      },
    },
    footer: {
      description:
        "The footer section of the card dropdown, accepts a React node.",
      control: { type: "object" },
      table: {
        category: "Content",
      },
    },
  },
};
export default meta;
export var Default = {
  render: function (args) {
    var _a, _b;
    return (
      <>
        <CardDropdown
          title={args.title}
          description={args.description}
          content={
            (_a = args.content) !== null && _a !== void 0 ? (
              _a
            ) : (
              <div className="slot">
                <Icon icon="refresh" size="md" />
                Slot Content
              </div>
            )
          }
          footer={
            (_b = args.footer) !== null && _b !== void 0 ? (
              _b
            ) : (
              <div style={{ display: "flex", width: "min-content" }}>
                <ButtonGroup
                  variantFirstButton="primary"
                  variantSecondButton="secondary"
                  direction="row"
                  contentFirstButton="Button"
                  contentSecondButton="Button"
                />
              </div>
            )
          }
        ></CardDropdown>
      </>
    );
  },
};
