import type { Meta, StoryObj } from "@storybook/react";
import "../styles.scss";
import Pagination from "../components/Pagination/Pagination";
import { Title, Subtitle, Primary, Controls, Stories } from "@storybook/blocks";
import React from "react";

const meta: Meta<typeof Pagination> = {
  title: "Components/Pagination",
  component: Pagination,
  tags: ["autodocs"],
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle>Component</Subtitle>
          <p>
            The <strong>Pagination</strong> enable users to navigate through an
            ordered collection of items split into pages.
          </p>
          <Primary />
          <Controls />
          <Stories />
        </>
      ),
    },
  },
  argTypes: {
    label: {
      control: "text",
      description: "The label for the pagination component.",
      table: {
        category: "Content",
      },
    },
    variant: {
      control: "select",
      options: ["noLabel", "leftLabel", "centerLabel"],
      description: "The variant of the pagination label position.",
      table: {
        category: "Appearance",
      },
    },
    disabledLeft: {
      control: "boolean",
      description: "If true, the left pagination button is disabled.",
      table: {
        category: "State",
      },
    },
    disabledRight: {
      control: "boolean",
      description: "If true, the right pagination button is disabled.",
      table: {
        category: "State",
      },
    },
    onClickLeft: {
      action: "leftClick",
      description:
        "Callback function when the left pagination button is clicked.",
      table: {
        category: "Actions",
      },
    },
    onClickRight: {
      action: "rightClick",
      description:
        "Callback function when the right pagination button is clicked.",
      table: {
        category: "Actions",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Pagination",
    variant: "noLabel",
    disabledLeft: false,
    disabledRight: false,
  },
};

export const Disable: Story = {
  args: {
    label: "Pagination",
    variant: "noLabel",
    disabledLeft: true,
    disabledRight: true,
  },
};

export const LeftLabel: Story = {
  args: {
    label: "Pagination",
    variant: "leftLabel",
    disabledLeft: false,
    disabledRight: false,
  },
};

export const CenterLabel: Story = {
  args: {
    label: "Pagination",
    variant: "centerLabel",
    disabledLeft: false,
    disabledRight: false,
  },
};
