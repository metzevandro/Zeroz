// Importando tipos necessários do Storybook
import type { Meta, StoryObj } from "@storybook/react";
import "./css/main.scss";
import CardDropdown from "../app/components/CardDropdown/CardDropdown";
import Icon from "../app/components/Icon/Icon";
import ButtonGroup from "../app/components/ButtonGroup/ButtonGroup";

const meta = {
  title: "Components/Card Dropdown",
  component: CardDropdown,
  parameters: {
    layout: "padded",
  },
  args: {
    title: "Card dropdown title",
    description: "Card dropdown description",
  },
  tags: ["autodocs"],
  argTypes: {},
} as Meta<typeof CardDropdown>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <>
      <CardDropdown
        title={args.title}
        description={args.description}
        content={
          <div className="slot">
            <Icon icon="refresh" size="md" />
            Slot Content
          </div>
        }
        footer={
          <div style={{ display: "flex", width: "min-content" }}>
            <ButtonGroup
              variantFirstButton="primary"
              variantSecondButton="secondary"
              direction="row"
              contentFirstButton="Button"
              contentSecondButton="Button"
            />
          </div>
        }
      ></CardDropdown>
    </>
  ),
};
