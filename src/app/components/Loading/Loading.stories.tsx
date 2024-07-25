import type { Meta, StoryObj } from "@storybook/react";
import "../../styles.scss";
import Loading from "./Loading";
import { Title, Subtitle, Primary, Controls, Stories } from "@storybook/blocks";
import React from "react";

const meta: Meta<typeof Loading> = {
  title: "Components/Loading",
  component: Loading,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle>Component</Subtitle>
          <p>
            The <strong>Loading </strong> is use to indicate that an action is
            in progress.
          </p>
          <Primary />
          <Controls />
          <Stories />
        </>
      ),
    },
  },
  argTypes: {
    variant: {
      control: "radio",
      options: ["default", "large", "success", "warning"],
      description:
        "The variant of the loading component, which determines its style and size.",
      table: {
        category: "Appearance",
      },
    },
    message: {
      control: "text",
      description:
        "The message text displayed alongside the loading indicator.",
      table: {
        category: "Content",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: "default",
    message: "Loading",
  },
};

export const Large: Story = {
  args: {
    variant: "large",
  },
};

export const Success: Story = {
  args: {
    variant: "success",
    message: "Success",
  },
};

export const Warning: Story = {
  args: {
    variant: "warning",
    message: "Warning",
  },
};
