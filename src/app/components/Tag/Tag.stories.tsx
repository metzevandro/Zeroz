import type { Meta, StoryObj } from "@storybook/react";
import "../../styles.scss";
import Tag from "./Tag";
import { Title, Subtitle, Primary, Controls, Stories } from "@storybook/blocks";
import React from "react";

const meta: Meta<typeof Tag> = {
  title: "Components/Tag",
  component: Tag,
  parameters: {
    layout: "centered",
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle>Component</Subtitle>
          <p>
            Use <strong>Tags</strong> to categorize or organize items using
            keywords that describe them. You also can add or remove tags as
            need.
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
    content: {
      name: "Content",
      description: "The text content of the tag.",
      type: { name: "string" },
      defaultValue: { summary: "" },
      table: {
        category: "Data",
        type: { summary: "string" },
        defaultValue: { summary: "" },
      },
    },
    variant: {
      name: "Variant",
      description: "The variant/style of the tag.",
      control: { type: "select" },
      options: ["primary", "secondary", "success", "warning"],
      defaultValue: { summary: "primary" },
      table: {
        category: "Appearance",
        type: { summary: "'primary' | 'secondary' | 'success' | 'warning'" },
        defaultValue: { summary: "primary" },
      },
    },
    onClose: {
      name: "On Close",
      description: "Callback function triggered when the tag is closed.",
      action: "closed",
      table: {
        category: "Events",
        type: { summary: "() => void" },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const primary: Story = {
  args: {
    content: "Tag",
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    content: "Tag",
    variant: "secondary",
  },
};

export const Success: Story = {
  args: {
    content: "Tag",
    variant: "success",
  },
};

export const Warning: Story = {
  args: {
    content: "Tag",
    variant: "warning",
  },
};
