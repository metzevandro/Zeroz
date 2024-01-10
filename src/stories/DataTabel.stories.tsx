import React, { useState } from "react";
import type { Meta, Story } from "@storybook/react";
import DataTable from "../app/components/DataTable/DataTable";

const meta: Meta = {
  title: "Components/Data Table",
  component: DataTable,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
};

export default meta;

type DefaultProps = {};

const Template: Story<DefaultProps> = (args) => {
  const data = [
    { id: "1", name: "Olivia Johnson", age: 56 },
    { id: "2", name: "Ethan Parker", age: 45 },
    { id: "3", name: "Lily Thompson", age: 30 },
    { id: "4", name: "Jackson Mitchell", age: 25 },
    { id: "5", name: "Ava Turner", age: 24 },
    { id: "6", name: "Noah Bennett", age: 45 },
    { id: "7", name: "Sophia Hayes", age: 32 },
    { id: "8", name: "Liam Anderson", age: 21 },
  ];

  const columns = ["name", "age"];

  const expandedData = [
    { id: "1", name: "Experience: 20 years" },
    { id: "2", name: "Experience: 12 years" },
    { id: "3", name: "Experience: 12 years" },
    { id: "4", name: "Experience: 5 years" },
    { id: "5", name: "Experience: 2 years" },
    { id: "6", name: "Experience: 23 years" },
    { id: "7", name: "Experience: 7 years" },
    { id: "8", name: "Experience: 1 years" },
  ];

  return (
    <>
      <DataTable
        columns={columns}
        data={data}
        contentPrimaryButton="Button"
        contentSecondButton="Button"
        expandable={true}
        selectable={true}
        expandedData={expandedData}
      />
    </>
  );
};

export const Default = Template.bind({});
Default.args = {};
