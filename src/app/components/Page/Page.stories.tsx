import type { Meta, StoryObj } from "@storybook/react";
import Page from "./Page";
import Icon from "../Icon/Icon";
import "../../styles.scss";

import { Title, Subtitle, Primary, Controls, Stories } from "@storybook/blocks";

const meta: Meta<typeof Page> = {
  title: "Templates/Page",
  component: Page,
  parameters: {
    layout: "padded",
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle>Template</Subtitle>
          <p>
            The <strong>Page</strong> template helps you create pages. It gives
            you all the things you need to make different layouts.
          </p>
          <Primary />
          <Controls />
          <Stories />
        </>
      ),
    },
  },
  tags: ["autodocs"],
  argTypes: {
    children: {
      name: "Children",
      description: "Content rendered inside the page.",
      control: {
        disable: true, // Disable control as it's handled within the story definition
      },
    },
    namePage: {
      name: "Page Name",
      description: "Name of the page displayed.",
    },
    withBackButton: {
      name: "Enable Back Button",
      description: "Determines if the back button is present.",
    },
    withActionPrimary: {
      name: "Enable Primary Action",
      description: "Determines if the primary action is enabled.",
    },
    withActionSecondary: {
      name: "Enable Secondary Action",
      description: "Determines if the secondary action is enabled.",
    },
    buttonContentPrimary: {
      name: "Primary Button Content",
      description: "Text displayed in the primary button.",
    },
    buttonContentSecondary: {
      name: "Secondary Button Content",
      description: "Text displayed in the secondary button.",
    },
    onClickActionPrimary: {
      name: "Primary Button Action",
      description: "Callback function for primary button click.",
      action: "clicked", // Placeholder action for storybook action logger
    },
    onClickActionSecondary: {
      name: "Secondary Button Action",
      description: "Callback function for secondary button click.",
      action: "clicked", // Placeholder action for storybook action logger
    },
    onClickBackButton: {
      name: "Back Button Action",
      description: "Callback function for back button click.",
      action: "clicked", // Placeholder action for storybook action logger
    },
    iconButtonPrimary: {
      name: "Primary Button Icon",
      description: "Icon displayed in the primary button.",
    },
    iconButtonSecondary: {
      name: "Secondary Button Icon",
      description: "Icon displayed in the secondary button.",
    },
    skeletonButtonPrimary: {
      name: "Primary Button Skeleton",
      description: "Determines if the primary button is in a loading state.",
    },
    skeletonButtonSecondary: {
      name: "Secondary Button Skeleton",
      description: "Determines if the secondary button is in a loading state.",
    },
    description: {
      name: "Page Description",
      description: "Description of the page content.",
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    namePage: "Name Page",
    description: "Description",
    buttonContentPrimary: "Button",
    buttonContentSecondary: "Button",
    withBackButton: true,
    withActionPrimary: true,
    iconButtonPrimary: "settings",
    iconButtonSecondary: "ac_unit",
    withActionSecondary: true,
    skeletonButtonPrimary: false,
    skeletonButtonSecondary: false,
    onClickActionPrimary: () => alert("Primary button clicked"),
    onClickActionSecondary: () => alert("Secondary button clicked"),
    onClickBackButton: () => alert("Back button clicked"),
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
