import "../../styles.scss";
import TableList from "./TableList";
import { Title, Subtitle, Primary, Controls, Stories } from "@storybook/blocks";
var meta = {
  title: "Components/Table List",
  component: TableList,
  tags: ["autodocs"],
  parameters: {
    docs: {
      page: function () {
        return (
          <>
            <Title />
            <Subtitle>Component</Subtitle>
            <p>
              The <strong>Table lists</strong> organize and display all
              information from a data set, providing a complete view for easy
              comparison and analysis.
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
    columns: {
      name: "Columns",
      description: "Array of column names for the table.",
      defaultValue: { summary: [] },
      table: {
        category: "Data",
        type: { summary: "string[]" },
        defaultValue: { summary: "[]" },
      },
    },
    data: {
      name: "Data",
      description: "2D array of data to populate the table.",
      defaultValue: { summary: [] },
      table: {
        category: "Data",
        type: { summary: "any[][]" },
        defaultValue: { summary: "[]" },
      },
    },
    size: {
      name: "Size",
      description: "Size of the table.",
      control: { type: "select" },
      options: ["sm", "md"],
      defaultValue: { summary: "md" },
      table: {
        category: "Appearance",
        type: { summary: "'sm' | 'md'" },
        defaultValue: { summary: "md" },
      },
    },
  },
};
export default meta;
var columns = ["Name", "Age", "Role", "Experience", "Company"];
var data = [
  ["David", 25, "Developer", "4 years", "Google"],
  ["Maria", 30, "Designer", "1 year", "Microsoft"],
  ["Carlos", 28, "Data Analyst", "1 month", "Netflix"],
];
export var Default = {
  args: {
    columns: columns,
    data: data,
    size: "md",
  },
};
export var Small = {
  args: {
    columns: columns,
    data: data,
    size: "sm",
  },
};
