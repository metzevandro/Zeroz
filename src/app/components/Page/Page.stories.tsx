import type { Meta, StoryObj } from "@storybook/react";
import Page from "./Page";
import Icon from "../Icon/Icon";
import "../../styles.scss";

const meta = {
  title: "Templates/Page",
  component: Page,
  tags: ["autodocs"],
  argTypes: {},
} as Meta<typeof Page>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    withActionPrimary: true,
    buttonContentPrimary: "Button",
    withActionSecondary: true,
    buttonContentSecondary: "Button",
    namePage: "Name Page",
    withBackButton: true,
    columnLayout: "2 - Asymmetric",
    children: (
      <>
        <div className="slot">
          <Icon icon="refresh" size="md" />
          Slot Content
        </div>
        <div className="slot">
          <Icon icon="refresh" size="md" />
          Slot Content
        </div>
        <div className="slot">
          <Icon icon="refresh" size="md" />
          Slot Content
        </div>
        <div className="slot">
          <Icon icon="refresh" size="md" />
          Slot Content
        </div>
      </>
    ),
  },
};
