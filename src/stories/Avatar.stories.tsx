import type { Meta, Story } from "@storybook/react";
import Avatar from "../app/components/Avatar/Avatar";
import React from "react";

const meta: Meta = {
  title: "Components/Avatar",
  component: Avatar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Args = {
  size: "sm" | "md" | "lg";
  src: string;
};

const Template: Story<Args> = (args) => {
  return <Avatar size={args.size} />;
};

export const Default = Template.bind({});
Default.args = {
  size: "md",
};

export const withImage = Template.bind({});
withImage.args = {
  size: "md",
  src: "https://placehold.co/40x40",
};
