import React from "react";
import Tabs from "./Tab";
import Icon from "../Icon/Icon";
import "../../styles.scss";
import { Title, Subtitle, Primary, Controls, Stories } from "@storybook/blocks";
var meta = {
  title: "Components/Tab",
  component: Tabs,
  parameters: {
    tags: ["autodocs"],
    docs: {
      page: function () {
        return (
          <>
            <Title />
            <Subtitle>Component</Subtitle>
            <p>
              The <strong>Tabs </strong> is to easily switch between different
              views within the same context.
            </p>
            <Primary />
            <Controls />
            <Stories />
          </>
        );
      },
    },
  },
  argTypes: {
    widthFull: {
      name: "Width Full",
      description: "Determines if the tabs should take up the full width.",
      type: { name: "boolean" },
      defaultValue: { summary: false },
      control: { type: "boolean" },
      table: {
        category: "Appearance",
        type: { summary: "boolean" },
      },
    },
    tabs: {
      name: "Tabs",
      description: "Array of tab objects with labels and content.",
      defaultValue: { summary: [] },
      table: {
        category: "Data",
        type: { summary: "Array<{ label: string, content: React.ReactNode }>" },
        defaultValue: { summary: "[]" },
      },
    },
  },
};
export default meta;
var Template = function (args) {
  return <Tabs {...args} />;
};
export var Default = Template.bind({});
Default.args = {
  widthFull: false,
  tabs: [
    {
      label: "Tab 1",
      content: (
        <div className="slot">
          <Icon icon="refresh" size="md" />
          1st Content
        </div>
      ),
    },
    {
      label: "Tab 2",
      content: (
        <div className="slot">
          <Icon icon="refresh" size="md" />
          2nd Content
        </div>
      ),
    },
  ],
};
export var WidthFull = Template.bind({});
WidthFull.args = {
  widthFull: true,
  tabs: [
    {
      label: "Tab 1",
      content: (
        <div className="slot">
          <Icon icon="refresh" size="md" />
          1st Content
        </div>
      ),
    },
    {
      label: "Tab 2",
      content: (
        <div className="slot">
          <Icon icon="refresh" size="md" />
          2nd Content
        </div>
      ),
    },
  ],
};
