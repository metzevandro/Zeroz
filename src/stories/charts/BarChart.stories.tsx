import React from "react";
import type { Meta, StoryFn } from "@storybook/react";
import "../../styles.scss";
import { Title, Subtitle, Primary, Controls, Stories } from "@storybook/blocks";

import BarChart from "../../charts/BarChart/BarChart";

const meta: Meta = {
  title: "Charts/BarChart",
  component: BarChart,
  parameters: {
    layout: "centered",
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle>Graphics</Subtitle>
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
  argTypes: {
    data: {
      name: "Data",
      description: "The data to be displayed in the bar chart.",
      table: {
        category: "Data",
        type: {
          summary: "Array<{ month: string; desktop: number; mobile: number }>",
        },
      },
      control: { type: "object" },
    },
    stacked: {
      name: "Stacked",
      description: "Toggle whether the bars should be stacked or not.",
      table: {
        category: "Appearance",
        type: { summary: "boolean" },
      },
      control: { type: "boolean" },
    },
    lineStyles: {
      name: "Line Styles",
      description:
        "Specify the styles for each bar in the chart, including color.",
      table: {
        category: "Appearance",
        type: { summary: "Record<string, { color: string }>" },
      },
      control: {
        type: "object",
        defaultValue: {
          desktop: { color: "var(--s-color-fill-warning)" },
          mobile: { color: "var(--s-color-fill-success)" },
        },
      },
    },
    legend: {
      name: "Legend",
      description: "Toggle visibility of the legend.",
      table: {
        category: "Appearance",
        type: { summary: "boolean" },
      },
      control: { type: "boolean" },
    },
    label: {
      name: "Label",
      description: "Toggle visibility of labels on the bars.",
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
  data: { month: string; desktop: number; mobile: number }[];
  stacked?: boolean;
  lineStyles: Record<string, { color: string }>;
  legend: boolean;
  label: boolean;
};

const lineStyles = {
  desktop: { color: "var(--s-color-fill-warning)" },
  mobile: { color: "var(--s-color-fill-success)" },
};

const data = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
  { month: "July", desktop: 320, mobile: 210 },
  { month: "August", desktop: 298, mobile: 180 },
  { month: "September", desktop: 250, mobile: 160 },
  { month: "October", desktop: 289, mobile: 175 },
  { month: "November", desktop: 330, mobile: 220 },
  { month: "December", desktop: 380, mobile: 250 },
];

const Template: StoryFn<DefaultProps> = (args) => (
  <BarChart
    label={args.label}
    data={args.data}
    stacked={args.stacked}
    lineStyles={args.lineStyles}
    legend={args.legend}
  />
);

export const Default = Template.bind({});
Default.args = {
  label: false,
  legend: false,
  stacked: false,
  data: data,
  lineStyles: lineStyles,
};

export const Stacked = Template.bind({});
Stacked.args = {
  label: false,
  legend: false,
  stacked: true,
  data: data,
  lineStyles: lineStyles,
};

export const WithLabel = Template.bind({});
WithLabel.args = {
  label: true,
  legend: false,
  stacked: false,
  data: data,
  lineStyles: lineStyles,
};

export const WithLegend = Template.bind({});
WithLegend.args = {
  label: false,
  legend: true,
  stacked: false,
  data: data,
  lineStyles: lineStyles,
};
