import Button from "./Button";
import "../../styles.scss";
import { Title, Subtitle, Primary, Controls, Stories } from "@storybook/blocks";
var meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
    docs: {
      page: function () {
        return (
          <>
            <Title />
            <Subtitle>Component</Subtitle>
            <p>
              The <strong>Buttons</strong> are used to initialize an action. The
              words on a button tell you what will happen when you click it.
            </p>
            <Primary />
            <Controls />
            <Stories />
          </>
        );
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      description:
        "Defines the size of the button. Options are 'small', 'medium', and 'large'.",
      control: { type: "select", options: ["sm", "md", "lg"] },
      defaultValue: "md",
      table: {
        category: "Appearance",
        type: { summary: "sm | md | lg" },
      },
    },
    disabled: {
      description: "Determines if the button is disabled.",
      control: { type: "boolean" },
      defaultValue: false,
      table: {
        category: "State",
        type: { summary: "boolean" },
      },
    },
    label: {
      description: "Text to be displayed inside the button.",
      control: { type: "text" },
      defaultValue: "Button",
      table: {
        category: "Content",
        type: { summary: "string" },
      },
    },
    typeIcon: {
      description:
        "Defines the type of icon to be displayed inside the button. Uses Material Icons names.",
      control: { type: "text" },
      defaultValue: "",
      table: {
        category: "Content",
        type: { summary: "string" },
      },
    },
    variant: {
      description:
        "Defines the visual style of the button. Options are 'primary', 'secondary', 'success', 'warning', and 'is-loading'.",
      control: {
        type: "select",
        options: ["primary", "secondary", "success", "warning", "is-loading"],
      },
      defaultValue: "primary",
      table: {
        category: "Appearance",
        type: {
          summary: "primary | secondary | success | warning | is-loading",
        },
      },
    },
    skeleton: {
      description: "Displays the button in a skeleton loading state.",
      control: { type: "boolean" },
      defaultValue: false,
      table: {
        category: "State",
        type: { summary: "boolean" },
      },
    },
    onClick: {
      description: "Callback function triggered when the button is clicked.",
      action: "clicked",
      table: {
        category: "Events",
        type: {
          summary: "(event: React.MouseEvent<HTMLButtonElement>) => void",
        },
      },
    },
  },
};
export default meta;
export var primary = {
  args: {
    size: "md",
    disabled: false,
    label: "Button",
    typeIcon: "",
    variant: "primary",
    skeleton: false,
  },
};
export var secondary = {
  args: {
    size: "md",
    disabled: false,
    label: "Button",
    typeIcon: "",
    variant: "secondary",
  },
};
export var success = {
  args: {
    size: "md",
    disabled: false,
    label: "Button",
    typeIcon: "",
    variant: "success",
  },
};
export var warning = {
  args: {
    size: "md",
    disabled: false,
    label: "Button",
    typeIcon: "",
    variant: "warning",
  },
};
export var withIcon = {
  args: {
    size: "md",
    disabled: false,
    label: "Button",
    typeIcon: "ac_unit",
    variant: "primary",
  },
};
export var disabled = {
  args: {
    size: "md",
    disabled: true,
    label: "Button",
    typeIcon: "ac_unit",
    variant: "primary",
  },
};
export var loading = {
  args: {
    size: "md",
    label: "Button",
    variant: "is-loading",
  },
};
export var Skeleton = {
  args: {
    size: "md",
    label: "Button",
    variant: "primary",
    skeleton: true,
  },
};
