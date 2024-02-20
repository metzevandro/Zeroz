import type { Meta, StoryObj } from "@storybook/react";
import "./css/main.scss";

import Slider from "../app/components/Slider/Slider";

const meta = {
  title: "Components/Slider",
  component: Slider,

  tags: ["autodocs"],
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Label",
    value: "5",
    max: 10,
    min: 0,
    step: 1,
  },
};
