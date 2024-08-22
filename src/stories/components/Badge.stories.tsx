import type { Meta, StoryObj } from "@storybook/react";
import Badge from "../../components/Badge/Badge";
import "../../styles.scss";
import { Title, Subtitle, Primary, Controls, Stories } from "@storybook/blocks";
import React from "react";

const meta: Meta = {
  title: "Components/Badge",
  component: Badge,
  parameters: {
    layout: "centered",
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle>Component</Subtitle>
          <p>
            The <strong>Badges</strong> are like little signs that inform you
            about the status or actions that have been taken.
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
    label: {
      name: "Label",
      description: "The text content to display within the badge.",
      type: { name: "string" },
      control: { type: "text" },
      table: {
        category: "Content",
        type: { summary: "string" },
      },
    },
    type: {
      name: "Type",
      description: "The type of badge.",
      control: {
        type: "select",
        options: ["default"],
      },
      table: {
        category: "Appearance",
        type: { summary: "'default'" },
      },
    },
    variant: {
      name: "Variant",
      description: "The visual variant of the badge.",
      control: {
        type: "select",
        options: ["default", "primary", "success", "warning"],
      },
      table: {
        category: "Appearance",
        type: { summary: "'default' | 'primary' | 'success' | 'warning'" },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Badge",
    type: "default",
    variant: "default",
  },
};

export const primary: Story = {
  args: {
    label: "Badge",
    type: "default",
    variant: "primary",
  },
};

export const Success: Story = {
  args: {
    label: "Badge",
    type: "default",
    variant: "success",
  },
};

export const Warning: Story = {
  args: {
    label: "Badge",
    type: "default",
    variant: "warning",
  },
};
