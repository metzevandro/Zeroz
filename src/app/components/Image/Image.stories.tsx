import type { Meta, StoryObj } from "@storybook/react";
import "../../styles.scss";
import Image from "./Image";
import Story from "@storybook/react";


const meta = {
  title: "Components/Image",
  component: Image,
  parameters: {
    layout: "centered",
   },
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
