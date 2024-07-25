import type { Meta, StoryObj } from "@storybook/react";
import ButtonGroup from "./ButtonGroup";
import "../../styles.scss";
import { Title, Subtitle, Primary, Controls, Stories } from "@storybook/blocks";
import React from "react";

const meta: Meta<typeof ButtonGroup> = {
  title: "Components/Button Group",
  component: ButtonGroup,
  parameters: {
    layout: "centered",
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle>Component</Subtitle>
          <p>
            The <strong>Button group</strong> is used to group related buttons,
            either stacked or in a row. It helps keep things organized and
            spaced nicely.
          </p>
          <Primary />
          <Controls />
          <Stories />
        </>
      ),
    },
  },
  argTypes: {
    direction: {
      description:
        "Defines the direction of the button group. Options are 'row' or 'column'.",
      control: { type: "select", options: ["row", "column"] },
      defaultValue: "row",
      table: {
        category: "Layout",
        type: { summary: "row | column" },
      },
    },
    contentFirstButton: {
      description: "Text to be displayed inside the first button.",
      control: { type: "text" },
      defaultValue: "Button",
      table: {
        category: "Button 1",
        type: { summary: "string" },
      },
    },
    variantFirstButton: {
      description:
        "Defines the visual style of the first button. Options are 'primary', 'secondary', 'success', 'warning', etc.",
      control: {
        type: "select",
        options: ["primary", "secondary", "success", "warning"],
      },
      defaultValue: "primary",
      table: {
        category: "Button 1",
        type: { summary: "primary | secondary | success | warning" },
      },
    },
    typeIconFirstButton: {
      description:
        "Defines the type of icon to be displayed inside the first button. Uses Material Icons names.",
      control: { type: "text" },
      defaultValue: "",
      table: {
        category: "Button 1",
        type: { summary: "string" },
      },
    },
    disableFirstButton: {
      description: "Determines if the first button is disabled.",
      control: { type: "boolean" },
      defaultValue: false,
      table: {
        category: "Button 1",
        type: { summary: "boolean" },
      },
    },
    skeletonFirstButton: {
      description: "Displays the first button in a skeleton loading state.",
      control: { type: "boolean" },
      defaultValue: false,
      table: {
        category: "Button 1",
        type: { summary: "boolean" },
      },
    },
    onClickFirstButton: {
      description: "Function to call when the first button is clicked.",
      action: "clicked",
      table: {
        category: "Button 1",
        type: {
          summary: "(event: React.MouseEvent<HTMLButtonElement>) => void",
        },
      },
    },
    contentSecondButton: {
      description: "Text to be displayed inside the second button.",
      control: { type: "text" },
      defaultValue: "Button",
      table: {
        category: "Button 2",
        type: { summary: "string" },
      },
    },
    variantSecondButton: {
      description:
        "Defines the visual style of the second button. Options are 'primary', 'secondary', 'success', 'warning', etc.",
      control: {
        type: "select",
        options: ["primary", "secondary", "success", "warning"],
      },
      defaultValue: "secondary",
      table: {
        category: "Button 2",
        type: { summary: "primary | secondary | success | warning" },
      },
    },
    typeIconSecondButton: {
      description:
        "Defines the type of icon to be displayed inside the second button. Uses Material Icons names.",
      control: { type: "text" },
      defaultValue: "",
      table: {
        category: "Button 2",
        type: { summary: "string" },
      },
    },
    disableSecondButton: {
      description: "Determines if the second button is disabled.",
      control: { type: "boolean" },
      defaultValue: false,
      table: {
        category: "Button 2",
        type: { summary: "boolean" },
      },
    },
    skeletonSecondButton: {
      description: "Displays the second button in a skeleton loading state.",
      control: { type: "boolean" },
      defaultValue: false,
      table: {
        category: "Button 2",
        type: { summary: "boolean" },
      },
    },
    onClickSecondButton: {
      description: "Function to call when the second button is clicked.",
      action: "clicked",
      table: {
        category: "Button 2",
        type: {
          summary: "(event: React.MouseEvent<HTMLButtonElement>) => void",
        },
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Row: Story = {
  args: {
    direction: "row",
    contentFirstButton: "Button",
    variantFirstButton: "primary",
    typeIconFirstButton: "",
    disableFirstButton: false,
    skeletonFirstButton: false,
    contentSecondButton: "Button",
    variantSecondButton: "secondary",
    disableSecondButton: false,
    typeIconSecondButton: "",
    skeletonSecondButton: false,
  },
  argTypes: {
    onClickFirstButton: { action: "clicked" },
    onClickSecondButton: { action: "clicked" },
  },
};

export const Column: Story = {
  args: {
    direction: "column",
    contentFirstButton: "Button",
    variantFirstButton: "primary",
    typeIconFirstButton: "",
    disableFirstButton: false,
    skeletonFirstButton: false,
    contentSecondButton: "Button",
    variantSecondButton: "secondary",
    disableSecondButton: false,
    typeIconSecondButton: "",
    skeletonSecondButton: false,
  },
};
