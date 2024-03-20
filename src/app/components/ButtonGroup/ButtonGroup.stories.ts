import type { Meta, StoryObj } from "@storybook/react";
import ButtonGroup from "./ButtonGroup";
import "../../styles.scss";
import mdx from "./ButtonGroup.mdx";

const meta = {
  title: "Components/Button Group",
  component: ButtonGroup,
  parameters: {
    layout: "centered",
    page: mdx,
  },
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
