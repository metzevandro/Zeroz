import type { Meta, Story } from "@storybook/react";
import Icon from "../app/components/Icon/Icon";

const meta: Meta = {
  title: "Components/Icon",
  component: Icon,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;

type DefaultProps = {
  icon: string;
  size: "sm" | "md" | "lg";
  fill: 0 | 1;
};

const Template: Story<DefaultProps> = (args) => {
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
  fill: 1,
};
