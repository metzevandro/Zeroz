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
    labelList: {
      name: "Label List",
      description: "Whether to display a list of labels for the pie chart segments.",
      table: {
        category: "Appearance",
        type: { summary: "boolean" },
      },
      control: { type: "boolean" },
    },
    legend: {
      name: "Legend",
      description: "Whether to display a legend for the pie chart or not.",
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
  },
};

export default meta;

type DefaultProps = {
  data: any[];
  label: string;
  labelList: boolean;
  legend: boolean;
  innerRadius: number;
  outerRadius: number;
  type: "donut" | "pie";
  tooltipFormatter?: (data: any) => string;
  height: number;
  width: number;
};

const data = [
  { browser: "Chrome", visitors: 275, fill: "blue" },
  { browser: "Safari", visitors: 200, fill: "red" },
  { browser: "Firefox", visitors: 287, fill: "green" },
  { browser: "Edge", visitors: 173, fill: "orange" },
  { browser: "Other", visitors: 190, fill: "yellow" },
];

const Template: StoryFn<DefaultProps> = (args) => <PieChart {...args} />;

export const Pie = Template.bind({});
Pie.args = {
  type: "pie",
  innerRadius: 60,
  outerRadius: 100,
  data: data,
  label: "Visitors",
  labelList: false,
  legend: false,
  height: 400,
  width: 400,
  tooltipFormatter: (data) => `${data}`,
};

export const Donut = Template.bind({});
Donut.args = {
  type: "donut",
  innerRadius: 60,
  outerRadius: 100,
  data: data,
  label: "Visitors",
  labelList: false,
  height: 400,
  width: 400,
  tooltipFormatter: (data) => `${data}`,
};

export const withLegend = Template.bind({});
withLegend.args = {
  type: "donut",
  legend: true,
  innerRadius: 60,
  outerRadius: 100,
  data: data,
  label: "Visitors",
  labelList: false,
  height: 400,
  width: 400,
  tooltipFormatter: (data) => `${data}`,
};
