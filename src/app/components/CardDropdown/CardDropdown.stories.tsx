// Importando tipos necessários do Storybook
import type { Meta, StoryObj } from "@storybook/react";
import CardDropdown from "./CardDropdown";
import Icon from "../Icon/Icon";
import ButtonGroup from "../ButtonGroup/ButtonGroup";
import "../../styles.scss";
import mdx from "./CardDropdown.mdx";

const meta = {
  title: "Components/Card Dropdown",
  component: CardDropdown,
  parameters: {
    layout: "padded",
    page: mdx,
  },
  args: {
    title: "Card dropdown title",
    description: "Card dropdown description",
  },
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
