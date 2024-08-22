import { Meta, StoryFn } from "@storybook/react";
import Layout from "../../components/Layout/Layout";
import "../../styles.scss";
import Icon from "../../components/Icon/Icon";
import React from "react";

import { Title, Subtitle, Primary, Controls, Stories } from "@storybook/blocks";
const meta: Meta = {
  title: "Templates/Layout",
  component: Layout,
  argTypes: {
    columns: {
      name: "Columns",
      description: "Number of columns in the layout.",
      control: {
        type: "select",
        options: ["1", "2 - Symmetric", "2 - Asymmetric", "3 - Symmetric"],
      },
    },
  },
  parameters: {
    layout: "padded",
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle>Template</Subtitle>
          <p>
            The <strong>Layout</strong> template is made to create layouts with
            one or more columns using ready-made patterns.
          </p>
          <Primary />
          <Controls />
          <Stories />
        </>
      ),
    },
  },
  tags: ["autodocs"],
};

export default meta;

type Args = {
  columns: "1" | "2 - Symmetric" | "2 - Asymmetric" | "3 - Symmetric";
};

const Template: StoryFn<Args> = (args) => {
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
