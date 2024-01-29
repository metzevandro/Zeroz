import type { Meta, StoryObj } from "@storybook/react";
import "./css/main.scss";
import Image from "../app/components/Image/Image";
import Story from "@storybook/react";

const meta = {
  title: "Components/Image",
  component: Image,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} as Meta<typeof Image>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    src: "https://picsum.photos/200",
    width: "200",
    alt: "Image",
  },
};
