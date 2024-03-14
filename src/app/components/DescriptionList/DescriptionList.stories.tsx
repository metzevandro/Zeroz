import DescriptionList from "./DescriptionList";
import type { Meta, StoryFn } from "@storybook/react";
import "../../styles.scss";

const meta = {
  title: "Components/Description List",
  component: DescriptionList,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof DescriptionList>;

export default meta;
type DefaultProps = {
  direction: "row" | "column";
  title: string;
  description: string;
};

const Template: StoryFn<DefaultProps> = (args) => {
  return (
    <>
      <DescriptionList
        direction={args.direction}
        title={args.title}
        description={args.description}
      />
      <DescriptionList
        direction={args.direction}
        title={args.title}
        description={args.description}
      />
      <DescriptionList
        direction={args.direction}
        title={args.title}
        description={args.description}
      />
    </>
  );
};

export const Row = Template.bind({});
Row.args = {
  direction: "row",
  title:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac turpis egestas maecenas pharetra convallis. Sit amet facilisis magna etiam tempor orci eu lobortis. Nibh praesent tristique magna sit amet purus gravida.",
};

export const Column = Template.bind({});
Column.args = {
  direction: "column",
  title:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac turpis egestas maecenas pharetra convallis. Sit amet facilisis magna etiam tempor orci eu lobortis. Nibh praesent tristique magna sit amet purus gravida.",
};
