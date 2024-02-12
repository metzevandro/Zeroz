import type { Meta, StoryObj } from "@storybook/react";
import "./css/main.scss";

import SaveBar from "../app/components/SaveBar/SaveBar";
import Story from "@storybook/react";

const meta = {
  title: "Components/Savebar",
  component: SaveBar,

  tags: ["autodocs"],
  argTypes: {},
} as Meta<typeof SaveBar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
