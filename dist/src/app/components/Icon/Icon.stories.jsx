import Icon from "./Icon";
import "../../styles.scss";
import { Title, Subtitle, Primary, Controls, Stories } from "@storybook/blocks";
var meta = {
  title: "Components/Icon",
  component: Icon,
  parameters: {
    layout: "centered",
    docs: {
      page: function () {
        return (
          <>
            <Title />
            <Subtitle>Component</Subtitle>
            <p>
              The <strong>Icons</strong> make things easier by helping you find
              your way, sharing information quickly, and making everything look
              nicer.
            </p>
            <Primary />
            <Controls />
            <Stories />
          </>
        );
      },
    },
  },
  argTypes: {
    icon: {
      description: "The name of the icon to display. Use Material Icons",
      control: {
        type: "text",
      },
      table: {
        category: "Content",
      },
    },
    size: {
      description: "The size of the icon",
      control: {
        type: "select",
        options: ["sm", "md", "lg"],
      },
      table: {
        category: "Appearance",
      },
    },
    fill: {
      description: "Whether the icon should fill its container",
      control: {
        type: "boolean",
      },
      table: {
        category: "Appearance",
      },
    },
  },
};
export default meta;
var Template = function (args) {
  return (
    <>
      <Icon icon={args.icon} size={args.size} fill={args.fill} />
    </>
  );
};
export var Default = Template.bind({});
Default.args = {
  size: "sm",
  icon: "settings",
  fill: true,
};
