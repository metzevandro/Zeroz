// Importando tipos necessários do Storybook
import type { Meta, StoryObj } from "@storybook/react";
import "./css/slot.scss";
import { CardDropdown } from "../app/components/CardDropdown/CardDropdown";
import Icon from "../app/components/Icon/Icon";

const meta = {
  title: "Components/CardDropdown",
  component: CardDropdown,
  parameters: {
    layout: "padded",
  },
  args: {
    title: "Title",
    description: "Description",
  },
  tags: ["autodocs"],
  argTypes: {},
} as Meta<typeof CardDropdown>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <>
      <CardDropdown title={args.title} description={args.description}>
        <div className="slot">
          <Icon icon="refresh" size="md" />
          Slot Content
        </div>
      </CardDropdown>
    </>
  ),
};
