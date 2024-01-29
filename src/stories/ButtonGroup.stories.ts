import type { Meta, StoryObj } from "@storybook/react";
import ButtonGroup from "../app/components/ButtonGroup/ButtonGroup";
import "./css/main.scss";

const meta = {
  title: "Components/Button Group",
  component: ButtonGroup,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof ButtonGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Row: Story = {
  args: {
    direction: "row",
    contentFirstButton: "Button",
    variantFirstButton: "primary",
    typeIconFirstButton: "",
    disableFirstButton: false,
    contentSecondButton: "Button",
    variantSecondButton: "secondary",
    disableSecondButton: false,
    typeIconSecondButton: "",
  },
};

export const Column: Story = {
  args: {
    direction: "column",
    contentFirstButton: "Button",
    variantFirstButton: "primary",
    typeIconFirstButton: "",
    disableFirstButton: false,
    contentSecondButton: "Button",
    variantSecondButton: "secondary",
    disableSecondButton: false,
    typeIconSecondButton: "",
  },
};
