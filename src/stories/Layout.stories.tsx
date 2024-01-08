import { Meta, Story } from "@storybook/react";
import Layout from "../app/components/Layout/Layout";
import "./css/slot.scss";
import Icon from "../app/components/Icon/Icon";
const meta: Meta = {
  title: "Templates/Layout",
  component: Layout,
  argTypes: {},
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
};

export default meta;

type Args = {
  columns: "1" | "2 - Symmetric" | "2 - Asymmetric" | "3 - Symmetric";
};

const Template: Story<Args> = (args) => {
  return (
    <Layout columns={args.columns}>
      <div className="slot">
        <Icon icon="refresh" size="md" />
        1st Content
      </div>
      <div className="slot">
        <Icon icon="refresh" size="md" />
        2nd Content
      </div>
      <div className="slot">
        <Icon icon="refresh" size="md" />
        3rd Content
      </div>
      <div className="slot">
        <Icon icon="refresh" size="md" />
        4th Content
      </div>
    </Layout>
  );
};

export const Default = Template.bind({});
