import ButtonIcon from "./ButtonIcon";
import "../../styles.scss";
import { Title, Subtitle, Primary, Controls, Stories } from "@storybook/blocks";
var meta = {
  title: "Components/Button Icon",
  component: ButtonIcon,
  parameters: {
    layout: "centered",
    docs: {
      page: function () {
        return (
          <>
            <Title />
            <Subtitle>Component</Subtitle>
            <p>
              The <strong>Icon buttons</strong> are often in app bars and
              toolbars. They're good for toggle buttons, like adding or removing
              something.
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
    size: {
      description:
        "Defines the size of the button icon. Options are 'sm', 'md', 'lg'.",
      control: { type: "select", options: ["sm", "md", "lg"] },
      defaultValue: "md",
      table: {
        category: "Appearance",
      },
    },
    variant: {
      description:
        "Defines the visual style of the button icon. Options are 'primary', 'secondary', 'success', 'warning', 'on-color'.",
      control: {
        type: "select",
        options: ["primary", "secondary", "success", "warning", "on-color"],
      },
      defaultValue: "primary",
      table: {
        category: "Appearance",
      },
    },
    buttonType: {
      description:
        "Defines the type of button icon. Options are 'default' or 'plain'.",
      control: { type: "select", options: ["default", "plain"] },
      defaultValue: "default",
      table: {
        category: "Appearance",
      },
    },
    typeIcon: {
      description:
        "Defines the type of icon to be displayed. Uses Material Icons names.",
      control: { type: "text" },
      defaultValue: "close",
      table: {
        category: "Content",
      },
    },
    skeleton: {
      description: "Displays the button icon in a skeleton loading state.",
      control: { type: "boolean" },
      defaultValue: false,
      table: {
        category: "State",
      },
    },
    disabled: {
      description: "Disables interaction with the button icon.",
      control: { type: "boolean" },
      defaultValue: false,
      table: {
        category: "State",
      },
    },
    onClick: {
      description: "Function to call when the button icon is clicked.",
      action: "clicked",
      table: {
        category: "Events",
        type: {
          summary: "(event: React.MouseEvent<HTMLButtonElement>) => void",
        },
      },
    },
  },
  tags: ["autodocs"],
};
export default meta;
export var primary = {
  args: {
    size: "md",
    variant: "primary",
    buttonType: "default",
    typeIcon: "close",
    skeleton: false,
    disabled: false,
  },
};
export var Secondary = {
  args: {
    size: "md",
    variant: "secondary",
    buttonType: "default",
    typeIcon: "close",
    skeleton: false,
    disabled: false,
  },
};
export var Success = {
  args: {
    size: "md",
    variant: "success",
    buttonType: "default",
    typeIcon: "close",
    skeleton: false,
    disabled: false,
  },
};
export var Warning = {
  args: {
    size: "md",
    variant: "warning",
    buttonType: "default",
    typeIcon: "close",
    skeleton: false,
    disabled: false,
  },
};
export var Plain = {
  args: {
    size: "md",
    variant: "primary",
    buttonType: "plain",
    typeIcon: "close",
    skeleton: false,
    disabled: false,
  },
};
export var OnColor = {
  args: {
    size: "md",
    variant: "on-color",
    buttonType: "plain",
    typeIcon: "close",
    skeleton: false,
    disabled: false,
  },
};
export var Skeleton = {
  args: {
    size: "md",
    variant: "on-color",
    buttonType: "plain",
    typeIcon: "close",
    skeleton: true,
    disabled: false,
  },
};
export var disabled = {
  args: {
    size: "md",
    variant: "on-color",
    buttonType: "default",
    typeIcon: "close",
    skeleton: false,
    disabled: true,
  },
};
