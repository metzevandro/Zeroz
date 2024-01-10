import type { Meta, StoryObj } from "@storybook/react";

import TableList from "../app/components/TableList/TableList";

const meta = {
  title: "Components/Table List",
  component: TableList,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof TableList>;

export default meta;
type Story = StoryObj<typeof meta>;

const columns: string[] = ["Name", "Age", "Role", "Experience", "Company"];

const data: any[][] = [
  ["David", 25, "Developer", "4 years", "Google"],
  ["Maria", 30, "Designer", "1 years", "Microsoft"],
  ["Carlos", 28, "Data Analyst", "1 month", "Netflix"],
];

export const Default: Story = {
  args: {
    columns,
    data,
    size: "md",
  },
};

export const Small: Story = {
  args: {
    columns,
    data,
    size: "sm",
  },
};
