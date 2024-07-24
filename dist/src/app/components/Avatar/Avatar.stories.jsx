import Avatar from "./Avatar";
import React from "react";
import "../../styles.scss";
import { Title, Subtitle, Primary, Controls, Stories } from "@storybook/blocks";
var meta = {
  title: "Components/Avatar",
  component: Avatar,
  parameters: {
    layout: "centered",
    docs: {
      page: function () {
        return (
          <>
            <Title />
            <Subtitle>Component</Subtitle>
            <p>
              The <strong>Avatars</strong> are used to represent a user,
              customer or business.
            </p>
            <Primary />
            <Controls />
            <Stories />
          </>
        );
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      name: "Size",
      description: "The size of the avatar. Can be 'sm', 'md', or 'lg'.",
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
      description: "The source URL of the avatar image.",
      control: "text",
      table: {
        category: "Data",
        type: { summary: "string" },
      },
    },
    letter: {
      name: "Letter",
      description: "The letter to display when there is no image.",
      control: "text",
      table: {
        category: "Data",
        type: { summary: "string" },
      },
    },
    skeleton: {
      name: "Skeleton",
      description: "If true, the avatar will display a skeleton loading state.",
      control: "boolean",
      table: {
        category: "State",
        type: { summary: "boolean" },
      },
    },
  },
};
export default meta;
var Template = function (args) {
  return (
    <Avatar
      size={args.size}
      src={args.src}
      skeleton={args.skeleton}
      letter={args.letter}
    />
  );
};
export var Default = Template.bind({});
Default.args = {
  size: "md",
  src: "",
  letter: "",
  skeleton: false,
};
export var withImage = Template.bind({});
withImage.args = {
  size: "md",
  src: "https://picsum.photos/100",
  skeleton: false,
};
export var withLetter = Template.bind({});
withLetter.args = {
  size: "md",
  letter: "L",
  src: "",
  skeleton: false,
};
export var Skeleton = Template.bind({});
Skeleton.args = {
  size: "md",
  src: "",
  skeleton: true,
};
