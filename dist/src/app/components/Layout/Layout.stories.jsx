import Layout from "./Layout";
import "../../styles.scss";
import Icon from "../Icon/Icon";
import { Title, Subtitle, Primary, Controls, Stories } from "@storybook/blocks";
var meta = {
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
      page: function () {
        return (
          <>
            <Title />
            <Subtitle>Template</Subtitle>
            <p>
              The <strong>Layout</strong> template is made to create layouts
              with one or more columns using ready-made patterns.
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
};
export default meta;
var Template = function (args) {
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
export var OneColumn = Template.bind({});
OneColumn.args = {
  columns: "1",
};
export var TwoSymmetricColumn = Template.bind({});
TwoSymmetricColumn.args = {
  columns: "2 - Symmetric",
};
export var TwoAsymmetricColumn = Template.bind({});
TwoAsymmetricColumn.args = {
  columns: "2 - Asymmetric",
};
export var ThreeSymmetricColumn = Template.bind({});
ThreeSymmetricColumn.args = {
  columns: "3 - Symmetric",
};
