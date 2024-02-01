import React, { useState } from "react";
import type { Meta, Story } from "@storybook/react";
import DataTable from "../app/components/DataTable/DataTable";
import "./css/main.scss";
import Aside, {
  AsideContent,
  AsideFooter,
} from "../app/components/Aside/Aside";
import ButtonGroup from "../app/components/ButtonGroup/ButtonGroup";
import Icon from "../app/components/Icon/Icon";
import { InputCheckbox } from "../app/components/InputCheckbox/InputCheckbox";
import {
  DropDownMenu,
  DropDownMenuItem,
  DropDownMenuTitle,
} from "../app/components/DropdownMenu/DropdownMenu";

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
  expandable: boolean;
  selectable: boolean;
  itemPerPage: number;
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
  labelButtonNoDataMessage: string;
  descriptionNoDataMessage: string;
  asideTitle: string;
};

const Template: Story<DefaultProps> = (args) => {
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
        firstButtonLabelAside={args.firstButtonLabelAside}
        secondButtonLabelAside={args.secondButtonLabelAside}
        typeIconSecondButton={args.typeIconSecondButton}
        typeIconFirstButton={args.typeIconFirstButton}
        selectableLabelSecondButton={args.selectableLabelSecondButton}
        selectableLabelFirstButton={args.selectableLabelFirstButton}
        labelFirstButton={args.labelFirstButton}
        labelSecondButton={args.labelSecondButton}
        inputPlaceholder={args.inputPlaceholder}
        itemPerPage={args.itemPerPage}
        columns={columns}
        data={data}
        selectable={args.selectable}
        expandable={args.expandable}
        expandedData={expandableContent}
        descriptionNoDataMessage={args.descriptionNoDataMessage}
        labelButtonNoDataMessage={args.labelButtonNoDataMessage}
        titleNoDataMessage={args.titleNoDataMessage}
        asideTitle={args.asideTitle}
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
  labelFirstButton: "Order By",
  labelSecondButton: "Filter By",
  typeIconFirstButton: "swap_vert",
  typeIconSecondButton: "filter_alt",
  selectableLabelFirstButton: "Button",
  selectableLabelSecondButton: "Button",
  firstButtonLabelAside: "Apply",
  secondButtonLabelAside: "Cancel",
  descriptionNoDataMessage:
    "This option does not exist in your store, remove the filter and try again.",
  labelButtonNoDataMessage: "Remove filters",
  titleNoDataMessage: "Your filter did not return any results.",
  asideTitle: "Filters",
};

export const withSelectable = Template.bind({});
withSelectable.args = {
  selectable: true,
  expandable: false,
  itemPerPage: 4,
  inputPlaceholder: "Search",
  labelFirstButton: "Order By",
  labelSecondButton: "Filter By",
  typeIconFirstButton: "swap_vert",
  typeIconSecondButton: "filter_alt",
  selectableLabelFirstButton: "Button",
  selectableLabelSecondButton: "Button",
  firstButtonLabelAside: "Apply",
  secondButtonLabelAside: "Cancel",
  descriptionNoDataMessage:
    "This option does not exist in your store, remove the filter and try again.",
  labelButtonNoDataMessage: "Remove filters",
  titleNoDataMessage: "Your filter did not return any results.",
  asideTitle: "Filters",
};

export const withExpandable = Template.bind({});
withExpandable.args = {
  selectable: false,
  expandable: true,
  itemPerPage: 4,
  inputPlaceholder: "Search",
  labelFirstButton: "Order By",
  labelSecondButton: "Filter By",
  typeIconFirstButton: "swap_vert",
  typeIconSecondButton: "filter_alt",
  selectableLabelFirstButton: "Button",
  selectableLabelSecondButton: "Button",
  firstButtonLabelAside: "Apply",
  secondButtonLabelAside: "Cancel",
  descriptionNoDataMessage:
    "This option does not exist in your store, remove the filter and try again.",
  labelButtonNoDataMessage: "Remove filters",
  titleNoDataMessage: "Your filter did not return any results.",
  asideTitle: "Filters",
};

export const withSelectableAndWithExpandable = Template.bind({});
withSelectableAndWithExpandable.args = {
  selectable: true,
  expandable: true,
  itemPerPage: 4,
  inputPlaceholder: "Search",
  labelFirstButton: "Order By",
  labelSecondButton: "Filter By",
  typeIconFirstButton: "swap_vert",
  typeIconSecondButton: "filter_alt",
  selectableLabelFirstButton: "Button",
  selectableLabelSecondButton: "Button",
  firstButtonLabelAside: "Apply",
  secondButtonLabelAside: "Cancel",
  descriptionNoDataMessage:
    "This option does not exist in your store, remove the filter and try again.",
  labelButtonNoDataMessage: "Remove filters",
  titleNoDataMessage: "Your filter did not return any results.",
  asideTitle: "Filters",
};
