import React, { useState } from "react";
import type { Meta, Story } from "@storybook/react";
import DataTable from "../app/components/DataTable/DataTable";
import "./css/main.scss";

const meta: Meta = {
  title: "Components/Data Table",
  component: DataTable,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
};

export default meta;

type DefaultProps = {
  contentPrimaryButton: string;
  contentSecondaryButton: string;
  expandable: boolean;
  selectable: boolean;
};

const Template: Story<DefaultProps> = (args) => {
  const data = [
    {
      id: "1",
      name: "Olivia Johnson",
      age: 56,
      position: "Manager",
      department: "HR",
    },
    {
      id: "2",
      name: "Ethan Parker",
      age: 45,
      position: "Developer",
      department: "Engineering",
    },
    {
      id: "3",
      name: "Lily Thompson",
      age: 30,
      position: "Designer",
      department: "Creative",
    },
    {
      id: "4",
      name: "Jackson Mitchell",
      age: 25,
      position: "Intern",
      department: "IT",
    },
    {
      id: "5",
      name: "Ava Turner",
      age: 24,
      position: "Analyst",
      department: "Finance",
    },
    {
      id: "6",
      name: "Noah Bennett",
      age: 45,
      position: "Manager",
      department: "Sales",
    },
    {
      id: "7",
      name: "Sophia Hayes",
      age: 32,
      position: "Engineer",
      department: "Engineering",
    },
    {
      id: "8",
      name: "Liam Anderson",
      age: 21,
      position: "Intern",
      department: "IT",
    },
  ];

  const columns = ["name", "age", "position", "department"];

  const expandedData = [
    { id: "1", content: "Experience: 20 years", context: "Projects: 50" },
    { id: "2", content: "Experience: 15 years", context: "Projects: 40" },
    { id: "3", content: "Experience: 18 years", context: "Projects: 35" },
    { id: "4", content: "Experience: 10 years", context: "Projects: 25" },
    { id: "5", content: "Experience: 22 years", context: "Projects: 60" },
    { id: "6", content: "Experience: 14 years", context: "Projects: 28" },
    { id: "7", content: "Experience: 17 years", context: "Projects: 45" },
    { id: "8", content: "Experience: 19 years", context: "Projects: 55" },
  ];

  return (
    <>
      <DataTable
        columns={columns}
        data={data}
        contentPrimaryButton={args.contentPrimaryButton}
        contentSecondButton={args.contentSecondaryButton}
        expandedData={expandedData}
        expandable={args.expandable}
        selectable={args.selectable}
      />
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  contentPrimaryButton: "button",
  contentSecondaryButton: "button",
  expandable: false,
  selectable: false,
};

export const WithSelectable = Template.bind({});
WithSelectable.args = {
  contentPrimaryButton: "button",
  contentSecondaryButton: "button",
  expandable: false,
  selectable: true,
};

export const WithExpandable = Template.bind({});
WithExpandable.args = {
  contentPrimaryButton: "button",
  contentSecondaryButton: "button",
  expandable: true,
  selectable: false,
};

export const With_Expandable_and_Selectable = Template.bind({});
With_Expandable_and_Selectable.args = {
  contentPrimaryButton: "button",
  contentSecondaryButton: "button",
  expandable: true,
  selectable: true,
};
