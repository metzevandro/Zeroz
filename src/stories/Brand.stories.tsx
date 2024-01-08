import type { Meta, StoryObj } from "@storybook/react";

import Brand from "../app/components/Brand/Brand";
import Story from "@storybook/react";

const meta = {
  title: "Components/Brand",
  component: Brand,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} as Meta<typeof Brand>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: "md",
    src: "/logo-sm.svg",
    alt: "Imagem",
  },
};
