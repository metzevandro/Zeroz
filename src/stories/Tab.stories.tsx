import { Meta, Story } from "@storybook/react";
import { Tabs, TabsProps } from "../app/components/Tab/Tab";
import Icon from "../app/components/Icon/Icon";
import "./css/main.scss";

export default {
  title: "Components/Tab",
  component: Tabs,
  argTypes: {},
  tags: ["autodocs"],
} as Meta;

const Template: Story<TabsProps> = (args) => <Tabs {...args} />;

export const Default = Template.bind({});
Default.args = {
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
