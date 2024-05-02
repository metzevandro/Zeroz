import type { Meta, StoryFn } from "@storybook/react";
import Icon from "./Icon";
import "../../styles.scss";

import mdx from "./Icon.mdx";

const meta: Meta = {
  title: "Components/Icon",
  component: Icon,
  parameters: {
    layout: "centered",
    page: mdx,
  },
};

export default meta;

type DefaultProps = {
  icon: string;
  size: "sm" | "md" | "lg";
  fill: boolean;
};

const Template: StoryFn<DefaultProps> = (args) => {
  return (
    <>
      <Icon icon={args.icon} size={args.size} fill={args.fill} />
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  size: "sm",
  icon: "settings",
  fill: true,
};
