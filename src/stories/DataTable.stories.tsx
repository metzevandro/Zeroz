import React from "react";
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
  itemPerPage: number;
  inputPlaceholder: string;
};

const Template: Story<DefaultProps> = (args) => {
  const columns: string[] = ["Name", "Age", "Role", "Experience", "Company"];

  const data: { [key: string]: any; id: string }[] = [
    {
      id: "1",
      Name: "David",
      Age: 25,
      Role: "Developer",
      Experience: "4 years",
      Company: "Google",
    },
    {
      id: "2",
      Name: "Maria",
      Age: 30,
      Role: "Designer",
      Experience: "1 year",
      Company: "Microsoft",
    },
    {
      id: "3",
      Name: "Carlos",
      Age: 28,
      Role: "Data Analyst",
      Experience: "1 month",
      Company: "Netflix",
    },
    {
      id: "4",
      Name: "Roberto",
      Age: 21,
      Role: "Product Owner",
      Experience: "2 years",
      Company: "Instagram",
    },
    {
      id: "5",
      Name: "Juliana",
      Age: 27,
      Role: "Software Engineer",
      Experience: "3 years",
      Company: "Amazon",
    },
    {
      id: "6",
      Name: "Ana",
      Age: 29,
      Role: "UX Designer",
      Experience: "2 years",
      Company: "Apple",
    },
    {
      id: "7",
      Name: "Pedro",
      Age: 26,
      Role: "Data Scientist",
      Experience: "6 months",
      Company: "Facebook",
    },
    {
      id: "8",
      Name: "Mariana",
      Age: 24,
      Role: "Project Manager",
      Experience: "1 year",
      Company: "Twitter",
    },
  ];

  const expandableContent: { [key: string]: any; id: string }[] = [
    {
      id: "1",
      content: "First Content",
    },
    {
      id: "2",
      content: "Second Content",
    },
    {
      id: "3",
      content: "Third Content",
    },
    {
      id: "4",
      content: "Fourth Content",
    },
    {
      id: "5",
      content: "Fifth Content",
    },
    {
      id: "6",
      content: "Sixth Content",
    },
    {
      id: "7",
      content: "Seventh Content",
    },
    {
      id: "8",
      content: "Eighth Content",
    },
  ];

  return (
    <>
      <DataTable
        inputPlaceholder={args.inputPlaceholder}
        itemPerPage={args.itemPerPage}
        columns={columns}
        data={data}
        selectable={args.selectable}
        expandable={args.expandable}
        expandedData={expandableContent}
      />
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  selectable: false,
  expandable: false,
  itemPerPage: 4,
  inputPlaceholder: "Search",
};

export const withSelectable = Template.bind({});
withSelectable.args = {
  selectable: true,
  expandable: false,
  itemPerPage: 4,
  inputPlaceholder: "Search",
};

export const withExpandable = Template.bind({});
withExpandable.args = {
  selectable: false,
  expandable: true,
  itemPerPage: 4,
  inputPlaceholder: "Search",
};

export const withSelectableAndWithExpandable = Template.bind({});
withSelectableAndWithExpandable.args = {
  selectable: true,
  expandable: true,
  itemPerPage: 4,
  inputPlaceholder: "Search",
};
