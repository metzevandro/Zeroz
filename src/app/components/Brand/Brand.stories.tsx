import type { Meta, StoryObj } from "@storybook/react";
import Brand from "./Brand";
import Story from "@storybook/react";
import "../../styles.scss";
import mdx from "./Brand.mdx";

const meta = {
  title: "Components/Brand",
  component: Brand,
  parameters: {
    layout: "centered",
    page: mdx,
  },
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
