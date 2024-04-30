import React from "react";
import type { Meta, StoryFn } from "@storybook/react";
import DataTable from "./DataTable";
import "../../styles.scss";

import mdx from "./DataTable.mdx";

const meta: Meta = {
  title: "Components/Data Table",
  component: DataTable,
  parameters: {
    layout: "padded",
    page: mdx,
  },
};

export default meta;

type DefaultProps = {
  expandable: boolean;
  selectable: boolean;
  itemPerPage: number;
  pagesText: string;
  inputPlaceholder: string;
  typeIconFirstButton: string;
  typeIconSecondButton: string;
  labelFirstButton: string;
  labelSecondButton: string;
  onClickFirstButton?: () => void;
  onClickSecondButton?: () => void;
  selectableLabelFirstButton: string;
  selectableLabelSecondButton: string;
  selectableOnClickFirstButton?: () => void;
  selectableOnClickSecondButton?: () => void;
  firstButtonLabelAside: string;
  secondButtonLabelAside: string;
  titleNoDataMessage: string;
  labelButtonNoDataFilteredMessage: string;
  descriptionNoDataMessage: string;
  asideTitle: string;
  selectableIconFirstButton: string;
  selectableIconSecondButton: string;
  filters: { [key: string]: string[] };
  columns: string[];
  data: { id: string; [key: string]: any }[];
  expandedData?: Array<{ id: string; [key: string]: React.ReactNode }>;
  descriptionNoDataFilteredMessage: string;
  titleNoDataFilteredMessage: string;
};

const Template: StoryFn<DefaultProps> = (args) => {
  return (
    <>
      <DataTable
        pagesText={args.pagesText}
        titleNoDataFilteredMessage={args.titleNoDataFilteredMessage}
        labelButtonNoDataFilteredMessage={args.labelButtonNoDataFilteredMessage}
        descriptionNoDataFilteredMessage={args.descriptionNoDataFilteredMessage}
        availableFilters={args.filters}
        firstButtonLabelAside={args.firstButtonLabelAside}
        secondButtonLabelAside={args.secondButtonLabelAside}
        typeIconSecondButton={args.typeIconSecondButton}
        selectableLabelSecondButton={args.selectableLabelSecondButton}
        labelSecondButton={args.labelSecondButton}
        inputPlaceholder={args.inputPlaceholder}
        itemPerPage={args.itemPerPage}
        columns={args.columns}
        data={args.data}
        selectable={args.selectable}
        expandable={args.expandable}
        expandedData={args.expandedData}
        descriptionNoDataMessage={args.descriptionNoDataMessage}
        titleNoDataMessage={args.titleNoDataMessage}
        asideTitle={args.asideTitle}
        selectableIconSecondButton={args.selectableIconSecondButton}
      />
    </>
  );
};

const columns: string[] = ["Name", "Age", "Role", "Experience", "Company"];

const data: { [key: string]: any; id: string }[] = [
  {
    id: "1",
    Name: "David",
    Age: "25",
    Role: "Developer",
    Experience: "4 years",
    Company: "Google",
  },
  {
    id: "2",
    Name: "Maria",
    Age: "30",
    Role: "Designer",
    Experience: "1 year",
    Company: "Microsoft",
  },
  {
    id: "3",
    Name: "Carlos",
    Age: "30",
    Role: "Data Analyst",
    Experience: "1 month",
    Company: "Netflix",
  },
  {
    id: "4",
    Name: "Roberto",
    Age: "21",
    Role: "Product Owner",
    Experience: "2 years",
    Company: "Instagram",
  },
  {
    id: "5",
    Name: "Juliana",
    Age: "27",
    Role: "Software Engineer",
    Experience: "3 years",
    Company: "Amazon",
  },
  {
    id: "6",
    Name: "Ana",
    Age: "29",
    Role: "UX Designer",
    Experience: "2 years",
    Company: "Apple",
  },
  {
    id: "7",
    Name: "Pedro",
    Age: "26",
    Role: "Data Scientist",
    Experience: "6 months",
    Company: "Facebook",
  },
  {
    id: "8",
    Name: "Mariana",
    Age: "24",
    Role: "Project Manager",
    Experience: "1 year",
    Company: "Twitter",
  },
];

const expandedData: { [key: string]: any; id: string }[] = [
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

const availableFilters = {
  Age: ["23", "24", "25", "26", "27", "28", "29", "30"],
  Company: [
    "Apple",
    "Amazon",
    "Google",
    "Microsoft",
    "Facebook",
    "Netflix",
    "Twitter",
    "Walmart",
  ],
};

export const Default = Template.bind({});
Default.args = {
  itemPerPage: 4,
  pagesText: "Page",
  columns: columns,
  data: data,
  expandedData: expandedData,
  selectable: false,
  expandable: false,
  inputPlaceholder: "Search",
  labelFirstButton: "Order By",
  labelSecondButton: "Filter By",
  typeIconSecondButton: "filter_alt",
  selectableLabelSecondButton: "Delete",
  selectableIconSecondButton: "delete",
  asideTitle: "Filters",
  firstButtonLabelAside: "Apply",
  secondButtonLabelAside: "Cancel",
  descriptionNoDataFilteredMessage:
    "This option does not exist in your store, remove the filter and try again.",
  labelButtonNoDataFilteredMessage: "Remove filters",
  titleNoDataFilteredMessage: "Your filter did not return any results.",
};

export const withSelectable = Template.bind({});
withSelectable.args = {
  itemPerPage: 4,
  pagesText: "Page",
  columns: columns,
  data: data,
  expandedData: expandedData,
  selectable: true,
  expandable: false,
  inputPlaceholder: "Search",
  labelFirstButton: "Order By",
  labelSecondButton: "Filter By",
  typeIconSecondButton: "filter_alt",
  selectableLabelSecondButton: "Delete",
  selectableIconSecondButton: "delete",
  asideTitle: "Filters",
  firstButtonLabelAside: "Apply",
  secondButtonLabelAside: "Cancel",
  descriptionNoDataFilteredMessage:
    "This option does not exist in your store, remove the filter and try again.",
  labelButtonNoDataFilteredMessage: "Remove filters",
  titleNoDataFilteredMessage: "Your filter did not return any results.",
  titleNoDataMessage: "No Data Available",
  descriptionNoDataMessage:
    "This message indicates that there is currently no data present in the table. Please check back later or try refreshing the page.",
};

export const withExpandable = Template.bind({});
withExpandable.args = {
  itemPerPage: 4,
  pagesText: "Page",
  columns: columns,
  data: data,
  expandedData: expandedData,
  selectable: false,
  expandable: true,
  inputPlaceholder: "Search",
  labelFirstButton: "Order By",
  labelSecondButton: "Filter By",
  typeIconSecondButton: "filter_alt",
  selectableLabelSecondButton: "Delete",
  selectableIconSecondButton: "delete",
  asideTitle: "Filters",
  firstButtonLabelAside: "Apply",
  secondButtonLabelAside: "Cancel",
  descriptionNoDataFilteredMessage:
    "This option does not exist in your store, remove the filter and try again.",
  labelButtonNoDataFilteredMessage: "Remove filters",
  titleNoDataFilteredMessage: "Your filter did not return any results.",
  titleNoDataMessage: "No Data Available",
  descriptionNoDataMessage:
    "This message indicates that there is currently no data present in the table. Please check back later or try refreshing the page.",
};

export const withSelectableAndWithExpandable = Template.bind({});
withSelectableAndWithExpandable.args = {
  itemPerPage: 4,
  pagesText: "Page",
  columns: columns,
  data: data,
  expandedData: expandedData,
  selectable: true,
  expandable: true,
  inputPlaceholder: "Search",
  labelFirstButton: "Order By",
  labelSecondButton: "Filter By",
  typeIconSecondButton: "filter_alt",
  selectableLabelSecondButton: "Delete",
  selectableIconSecondButton: "delete",
  asideTitle: "Filters",
  firstButtonLabelAside: "Apply",
  secondButtonLabelAside: "Cancel",
  descriptionNoDataFilteredMessage:
    "This option does not exist in your store, remove the filter and try again.",
  labelButtonNoDataFilteredMessage: "Remove filters",
  titleNoDataFilteredMessage: "Your filter did not return any results.",
  titleNoDataMessage: "No Data Available",
  descriptionNoDataMessage:
    "This message indicates that there is currently no data present in the table. Please check back later or try refreshing the page.",
};

export const withFilters = Template.bind({});
withFilters.args = {
  filters: availableFilters,
  itemPerPage: 4,
  pagesText: "Page",
  columns: columns,
  data: data,
  expandedData: expandedData,
  selectable: true,
  expandable: true,
  inputPlaceholder: "Search",
  labelFirstButton: "Order By",
  labelSecondButton: "Filter By",
  typeIconSecondButton: "filter_alt",
  selectableLabelSecondButton: "Delete",
  selectableIconSecondButton: "delete",
  asideTitle: "Filters",
  firstButtonLabelAside: "Apply",
  secondButtonLabelAside: "Cancel",
  descriptionNoDataFilteredMessage:
    "This option does not exist in your store, remove the filter and try again.",
  labelButtonNoDataFilteredMessage: "Remove filters",
  titleNoDataFilteredMessage: "Your filter did not return any results.",
  titleNoDataMessage: "No Data Available",
  descriptionNoDataMessage:
    "This message indicates that there is currently no data present in the table. Please check back later or try refreshing the page.",
};
