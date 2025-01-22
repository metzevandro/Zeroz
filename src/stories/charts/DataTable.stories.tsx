import React from "react";
import type { Meta, StoryFn } from "@storybook/react";
import "../../styles.scss";
import { Title, Subtitle, Primary, Controls, Stories } from "@storybook/blocks";

import { DataTable } from "../../components/DataTableRemake/Data.Table";

const meta: Meta = {
  title: "Charts/DataTable",
  component: DataTable,
  parameters: {
    layout: "centered",
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle>Data Table</Subtitle>
          <p>
            This is a BarChart component that visualizes data using bars. It
            supports different configurations such as stacked bars, legends,
            labels, and custom line styles.
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

const columns = ["Name", "Age", "Email", "Gender", "City", "Occupation"];
const data = [
  ["Alice", "25", "alice@example.com", "Female", "New York", "Engineer"],
  ["Bob", "32", "bob@example.com", "Male", "Chicago", "Designer"],
  ["Diana", "32", "diana@example.com", "Female", "Los Angeles", "Developer"],
  ["Eve", "32", "eve@example.com", "Female", "Miami", "Artist"],
  ["Charlie", "28", "charlie@example.com", "Male", "San Francisco", "Manager"],
  ["Grace", "27", "grace@example.com", "Female", "Austin", "Scientist"],
  ["Hank", "35", "hank@example.com", "Male", "Dallas", "Teacher"],
  ["Frank", "29", "frank@example.com", "Male", "Seattle", "Writer"],
  ["Isabel", "24", "isabel@example.com", "Female", "Boston", "Nurse"],
  ["James", "30", "james@example.com", "Male", "Denver", "Lawyer"],
  ["Kathy", "26", "kathy@example.com", "Female", "Orlando", "Chef"],
  ["Louis", "33", "louis@example.com", "Male", "Phoenix", "Photographer"],
  ["Mona", "31", "mona@example.com", "Female", "San Diego", "Artist"],
  ["Nathan", "29", "nathan@example.com", "Male", "Portland", "Architect"],
  ["Olivia", "27", "olivia@example.com", "Female", "Boston", "Doctor"],
  ["Paul", "34", "paul@example.com", "Male", "Chicago", "Engineer"],
  ["Quincy", "32", "quincy@example.com", "Male", "Houston", "Designer"],
  ["Rachel", "26", "rachel@example.com", "Female", "Miami", "Teacher"],
  ["Steve", "30", "steve@example.com", "Male", "Atlanta", "Developer"],
  ["Tracy", "33", "tracy@example.com", "Female", "Dallas", "Writer"],
  ["Uma", "28", "uma@example.com", "Female", "San Francisco", "Photographer"],
  ["Victor", "31", "victor@example.com", "Male", "Austin", "Scientist"],
  ["Wendy", "24", "wendy@example.com", "Female", "Chicago", "Nurse"],
  ["Xander", "30", "xander@example.com", "Male", "Seattle", "Lawyer"],
  ["Yara", "27", "yara@example.com", "Female", "Denver", "Chef"],
  ["Zane", "29", "zane@example.com", "Male", "Portland", "Architect"],
];

type DefaultProps = {
  skeleton: boolean;
  data: string[][];
  columns: string[];
  rowsPerPage: number;
};

const Template: StoryFn<DefaultProps> = (args) => (
  <DataTable
    columns={args.columns}
    data={args.data}
    skeleton={args.skeleton}
    rowsPerPage={args.rowsPerPage}
    withCheckbox={true}
  />
);

export const Default = Template.bind({});
Default.args = {
  skeleton: false,
  data: data,
  columns: columns,
  rowsPerPage: 5,
};
