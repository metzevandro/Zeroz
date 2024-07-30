import type { Meta, StoryObj } from "@storybook/react";
import Brand from "../components/Brand/Brand";
import "../styles.scss";
import { Title, Subtitle, Primary, Controls, Stories } from "@storybook/blocks";
import React from "react";

const meta: Meta = {
  title: "Components/Brand",
  component: Brand,
  parameters: {
    layout: "centered",
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle>Component</Subtitle>
          <p>
            The <strong>Brand</strong> component represents the brand logo.
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
    size: {
      name: "Size",
      description:
        "Controls the size of the brand logo. Options typically include 'sm', 'md', and 'lg'.",
      control: {
        type: "select",
        options: ["sm", "md", "lg"],
      },
      table: {
        category: "Appearance",
        type: { summary: "'sm' | 'md' | 'lg'" },
      },
    },
    src: {
      name: "Source",
      description: "Specifies the source URL of the brand logo image.",
      control: "text",
      table: {
        category: "Content",
        type: { summary: "string" },
      },
    },
    alt: {
      name: "Alt Text",
      description:
        "Provides alternative text for the brand logo image, useful for accessibility purposes.",
      control: "text",
      table: {
        category: "Content",
        type: { summary: "string" },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: "md",
    src: "/logo-sm.svg",
    alt: "Imagem",
  },
};
