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
    caption: {
      name: "Caption",
      description: "Toggle visibility of the caption.",
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
    height: {
      name: "Height",
      description: "The height of the chart.",
      table: {
        category: "Layout",
        type: { summary: "number" },
      },
      control: { type: "number" },
    },
    width: {
      name: "Width",
      description: "The width of the chart.",
      table: {
        category: "Layout",
        type: { summary: "number" },
      },
      control: { type: "number" },
    },
    tooltipFormatter: {
      name: "Tooltip Formatter",
      description: "Function to format the tooltip content.",
      table: {
        category: "Functionality",
        type: { summary: "(data) => string" },
      },
      control: { type: "object" },
    },
    XAxisFormatter: {
      name: "X Axis Formatter",
      description: "Function to format the X-axis labels.",
      table: {
        category: "Functionality",
        type: { summary: "(data) => string" },
      },
      control: { type: "object" },
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
  data: { month: string; desktop: number; mobile: number }[];
  stacked?: boolean;
  lineStyles: Record<string, { color: string }>;
  caption: boolean;
  label: boolean;
  height: number;
  width: number;
  tooltipFormatter?: (data: any) => string;
  XAxisFormatter?: (data: any) => string;
  skeleton: boolean;
};

const lineStyles = {
  desktop: { color: "var(--s-color-chart-3)" },
  mobile: { color: "var(--s-color-chart-4)" },
};

const data = [
  { month: "January", desktop: 186, mobile: 0 },
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
    skeleton={args.skeleton}
    label={args.label}
    data={args.data}
    stacked={args.stacked}
    lineStyles={args.lineStyles}
    caption={args.caption}
    height={args.height}
    width={args.width}
    tooltipFormatter={args.tooltipFormatter}
    XAxisFormatter={args.XAxisFormatter}
  />
);

export const Default = Template.bind({});
Default.args = {
  label: false,
  caption: false,
  stacked: false,
  data: data,
  lineStyles: lineStyles,
  height: 400,
  width: 600,
  tooltipFormatter: (data) => `${data} units`,
  XAxisFormatter: (data) => `${data.slice(0, 3)}`,
  skeleton: false,
};

export const Stacked = Template.bind({});
Stacked.args = {
  label: false,
  caption: false,
  stacked: true,
  data: data,
  lineStyles: lineStyles,
  height: 400,
  width: 600,
  tooltipFormatter: (data) => `${data} units`,
  XAxisFormatter: (data) => `${data.slice(0, 3)}`,
  skeleton: false,
};

export const WithLabel = Template.bind({});
WithLabel.args = {
  label: true,
  caption: false,
  stacked: false,
  data: data,
  lineStyles: lineStyles,
  height: 400,
  width: 600,
  tooltipFormatter: (data) => `${data} units`,
  XAxisFormatter: (data) => `${data.slice(0, 3)}`,
  skeleton: false,
};

export const withCaption = Template.bind({});
withCaption.args = {
  label: false,
  caption: true,
  stacked: false,
  data: data,
  lineStyles: lineStyles,
  height: 400,
  width: 600,
  tooltipFormatter: (data) => `${data} units`,
  XAxisFormatter: (data) => `${data.slice(0, 3)}`,
  skeleton: false,
};

export const Skeleton = Template.bind({});
Skeleton.args = {
  label: false,
  caption: false,
  stacked: false,
  data: data,
  lineStyles: lineStyles,
  height: 400,
  width: 600,
  tooltipFormatter: (data) => `${data} units`,
  XAxisFormatter: (data) => `${data.slice(0, 3)}`,
  skeleton: true,
};
