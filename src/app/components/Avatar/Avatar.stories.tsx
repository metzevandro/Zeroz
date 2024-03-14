import type { Meta, StoryFn } from "@storybook/react";
import Avatar from "./Avatar";
import React from "react";
import "../../styles.scss";

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

const Template: StoryFn<Args> = (args) => {
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
