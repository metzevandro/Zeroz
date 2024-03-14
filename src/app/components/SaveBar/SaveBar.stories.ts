import type { Meta, StoryObj } from "@storybook/react";
import "../../styles.scss";

import SaveBar from "./SaveBar";
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
