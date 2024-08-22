import type { Meta, StoryObj } from "@storybook/react";
import "../../styles.scss";
import Link from "../../components/Link/Link";
import { Title, Subtitle, Primary, Controls, Stories } from "@storybook/blocks";
import React from "react";

const meta: Meta<typeof Link> = {
  title: "Components/Link",
  component: Link,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle>Component</Subtitle>
          <p>
            The <strong>Links</strong> are pathways to other places, often
            showing up within or right after a sentence, paragraph, or
            independently, guiding you to new destinations.
          </p>
          <Primary />
          <Controls />
          <Stories />
        </>
      ),
    },
  },
  argTypes: {
    content: {
      control: "text",
      description: "The text content of the link.",
      table: {
        category: "Content",
      },
    },
    href: {
      control: "text",
      description: "The URL that the link points to.",
      table: {
        category: "Link",
      },
    },
    target: {
      control: "text",
      description:
        'The target attribute specifies where to open the link (e.g., "_blank" for a new tab).',
      table: {
        category: "Link",
      },
    },
    disabled: {
      control: "boolean",
      description:
        "If true, the link will be styled as disabled and will not be clickable.",
      table: {
        category: "State",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    content: "Link",
    target: "_blank",
    href: "https://example.com",
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    content: "Link",
    target: "_blank",
    href: "https://example.com",
    disabled: true,
  },
};
