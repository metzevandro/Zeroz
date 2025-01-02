import React from "react";
import type { Meta, StoryFn } from "@storybook/react";
import "../../styles.scss";
import { Title, Subtitle, Primary, Controls, Stories } from "@storybook/blocks";

import PieChart from "../../charts/PieChart/PieChart";

const meta: Meta = {
  title: "Charts/PieChart",
  component: PieChart,
  parameters: {
    layout: "centered",
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle>Graphics</Subtitle>
          <Primary />
          <Controls />
          <Stories />
        </>
      ),
    },
  },
  tags: ["autodocs"],
  argTypes: {
    data: {
      name: "Data",
      description: "The data to be displayed in the pie chart.",
      table: {
        category: "Data",
        type: { summary: "Array<PieChartData>" },
      },
      control: { type: "object" },
    },
    dataKey: {
      name: "Data Key",
      description:
        "The key in the data objects that contains the values to be represented (e.g., visitors).",
      table: {
        category: "Data",
        type: { summary: "string" },
      },
      control: { type: "text" },
    },
    nameKey: {
      name: "Name Key",
      description:
        "The key in the data objects that contains the names or labels (e.g., browser).",
      table: {
        category: "Data",
        type: { summary: "string" },
      },
      control: { type: "text" },
    },
    innerRadius: {
      name: "Inner Radius",
      description: "The inner radius of the pie chart.",
      table: {
        category: "Appearance",
        type: { summary: "number" },
      },
      control: { type: "number" },
    },
    outerRadius: {
      name: "Outer Radius",
      description: "The outer radius of the pie chart.",
      table: {
        category: "Appearance",
        type: { summary: "number" },
      },
      control: { type: "number" },
    },
    label: {
      name: "Label",
      description: "Whether to display labels on the pie chart or not.",
      table: {
        category: "Appearance",
        type: { summary: "boolean" },
      },
      control: { type: "boolean" },
    },
    caption: {
      name: "Caption",
      description: "Whether to display a caption for the pie chart or not.",
      table: {
        category: "Appearance",
        type: { summary: "boolean" },
      },
      control: { type: "boolean" },
    },
    type: {
      name: "Type",
      description: "The type of the pie chart. Can be either 'donut' or 'pie'.",
      table: {
        category: "Appearance",
        type: { summary: "'donut' | 'pie'" },
      },
      control: { type: "radio", options: ["pie", "donut"] },
    },
    tooltipFormatter: {
      name: "Tooltip Formatter",
      description: "Function to format the tooltip content.",
      table: {
        category: "Functionality",
        type: { summary: "(data) => string" },
      },
    },
    labelFormatter: {
      name: "Label Formatter",
      description: "Function to format the label content.",
      table: {
        category: "Functionality",
        type: { summary: "(data) => string" },
      },
    },
    height: {
      name: "Height",
      description: "Height of the chart.",
      table: {
        category: "Dimensions",
        type: { summary: "number" },
      },
      control: { type: "number" },
    },
    width: {
      name: "Width",
      description: "Width of the chart.",
      table: {
        category: "Dimensions",
        type: { summary: "number" },
      },
      control: { type: "number" },
    },
    skeleton: {
      name: "Skeleton",
      description: "A loading skeleton for the chart.",
      table: {
        category: "Appearance",
        type: { summary: "boolean" },
      },
      control: { type: "boolean" },
    },
  },
};

export default meta;

type DefaultProps = {
  data: any[];
  dataKey: string;
  nameKey: string;
  label: string;
  caption: boolean;
  innerRadius: number;
  outerRadius: number;
  type: "donut" | "pie";
  tooltipFormatter?: (data: any) => string;
  labelFormatter?: (data: any) => string;
  height: number;
  width: number;
  skeleton: boolean;
};

const data = [
  { keyName: "Chrome", quantity: 275 },
  { keyName: "Safari", quantity: 200 },
  { keyName: "Firefox", quantity: 287 },
  { keyName: "Edge", quantity: 173 },
  { keyName: "Other", quantity: 190 },
];

const Template: StoryFn<DefaultProps> = (args) => <PieChart {...args} />;

export const Pie = Template.bind({});
Pie.args = {
  type: "pie",
  innerRadius: 60,
  outerRadius: 100,
  data: data,
  dataKey: "quantity",
  nameKey: "keyName",
  label: "Visitors",
  caption: false,
  height: 400,
  width: 400,
  tooltipFormatter: (data) => `${data}`,
  labelFormatter: (data) => `${data}`,
  skeleton: false,
};

export const Donut = Template.bind({});
Donut.args = {
  type: "donut",
  innerRadius: 60,
  outerRadius: 100,
  data: data,
  dataKey: "quantity",
  nameKey: "keyName",
  label: "Visitors",
  height: 400,
  width: 400,
  tooltipFormatter: (data) => `${data}`,
  labelFormatter: (data) => `${data}`,
  skeleton: false,
};

export const withCaption = Template.bind({});
withCaption.args = {
  type: "donut",
  caption: true,
  innerRadius: 60,
  outerRadius: 100,
  data: data,
  dataKey: "quantity",
  nameKey: "keyName",
  label: "Visitors",
  height: 400,
  width: 400,
  tooltipFormatter: (data) => `${data}`,
  labelFormatter: (data) => `${data}`,
  skeleton: false,
};

export const Skeleton = Template.bind({});
Skeleton.args = {
  type: "donut",
  caption: true,
  innerRadius: 60,
  outerRadius: 100,
  data: data,
  dataKey: "quantity",
  nameKey: "keyName",
  label: "Visitors",
  height: 400,
  width: 400,
  tooltipFormatter: (data) => `${data}`,
  labelFormatter: (data) => `${data}`,
  skeleton: true,
};
