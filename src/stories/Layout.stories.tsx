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
      <div className="slot">
        <Icon icon="refresh" size="md" />
        5th Content
      </div>
      <div className="slot">
        <Icon icon="refresh" size="md" />
        6th Content
      </div>
    </Layout>
  );
};

export const OneColumn = Template.bind({});
OneColumn.args = {
  columns: "1",
};

export const TwoSymmetricColumn = Template.bind({});
TwoSymmetricColumn.args = {
  columns: "2 - Symmetric",
};

export const TwoAsymmetricColumn = Template.bind({});
TwoAsymmetricColumn.args = {
  columns: "2 - Asymmetric",
};

export const ThreeSymmetricColumn = Template.bind({});
ThreeSymmetricColumn.args = {
  columns: "3 - Symmetric",
};
