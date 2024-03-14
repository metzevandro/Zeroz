import { Meta, StoryFn } from "@storybook/react";
import Tabs, { TabsProps } from "./Tab";
import Icon from "../Icon/Icon";
import "../../styles.scss";

export default {
  title: "Components/Tab",
  component: Tabs,
  argTypes: {},
  tags: ["autodocs"],
} as Meta;

const Template: StoryFn<TabsProps> = (args) => <Tabs {...args} />;

export const Default = Template.bind({});
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

export const widthFull = Template.bind({});
widthFull.args = {
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
