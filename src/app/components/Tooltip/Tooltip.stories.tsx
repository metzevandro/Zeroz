import type { Meta, StoryObj } from "@storybook/react";
import "../../styles.scss";
import Tooltip from "./Tooltip";
import Icon from "../Icon/Icon";

const meta = {
  title: "Components/Tooltip",
  component: Tooltip,
  args: {
    direction: "bottom",
    text: "Tooltip text here...",
  },
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} as Meta<typeof Tooltip>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <>
      <Tooltip text={args.text} direction={args.direction}>
        <Icon icon="info" size="md" />
      </Tooltip>
    </>
  ),
};
