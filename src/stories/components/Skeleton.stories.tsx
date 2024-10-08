import type { Meta, StoryObj } from "@storybook/react";
import Skeleton from "../../components/Skeleton/Skeleton";
import "../../styles.scss";
import { Title, Subtitle, Primary, Controls, Stories } from "@storybook/blocks";
import React from "react";

const meta: Meta<typeof Skeleton> = {
  title: "Components/Skeleton",
  component: Skeleton,
  parameters: {
    layout: "centered",
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle>Component</Subtitle>
          <p>
            The <strong> Skeletons</strong> are used to display a placeholder
            for content during loading times.
          </p>
          <Primary />
          <Controls />
          <Stories />
        </>
      ),
    },
  },
  argTypes: {
    width: {
      name: "Width",
      description: "The width of the skeleton loader.",
      type: { name: "string" },
      defaultValue: { summary: "150" },
      control: { type: "text" },
      table: {
        category: "Appearance",
        type: { summary: "string" },
        defaultValue: { summary: "150" },
      },
    },
    height: {
      name: "Height",
      description: "The height of the skeleton loader.",
      type: { name: "string" },
      defaultValue: { summary: "150" },
      control: { type: "text" },
      table: {
        category: "Appearance",
        type: { summary: "string" },
        defaultValue: { summary: "150" },
      },
    },
    circle: {
      name: "Circle",
      description: "If true, the skeleton loader will be a circle.",
      type: { name: "boolean" },
      defaultValue: { summary: false },
      control: { type: "boolean" },
      table: {
        category: "Appearance",
        type: { summary: "boolean" },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    width: "150",
    height: "150",
    circle: false,
  },
};

export const Circle: Story = {
  args: {
    width: "150",
    height: "150",
    circle: true,
  },
};
