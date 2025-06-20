import React from "react";
import type { Meta, StoryFn } from "@storybook/react";
import "../../styles.scss";
import { Title, Subtitle, Primary, Controls, Stories } from "@storybook/blocks";

import LineChart from "../../charts/LineChart/LineChart";
const meta: Meta = {
  title: "Charts/LineChart",
  component: LineChart,
  parameters: {
    layout: "centered",
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle>Graphics</Subtitle>
          <p>
            This is a LineChart component that visualizes data trends over time.
            It supports multiple line types and can be customized with legends,
            dots, labels, and line styles.
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
      description: "The data to be displayed in the line chart.",
      table: {
        category: "Data",
        type: {
          summary: "Array<{ month: string; desktop: number; mobile: number }>",
        },
      },
      control: { type: "object" },
    },
    dots: {
      name: "Dots",
      description: "Toggle visibility of data point dots.",
      table: {
        category: "Appearance",
        type: { summary: "boolean" },
      },
      control: { type: "boolean" },
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
    type: {
      name: "Type",
      description: "Select the type of curve used for the lines.",
      table: {
        category: "Appearance",
        type: {
          summary:
            "'basis' | 'basisClosed' | 'basisOpen' | 'bumpX' | 'bumpY' | 'bump' | 'linear' | 'linearClosed' | 'natural' | 'monotoneX' | 'monotoneY' | 'monotone' | 'step' | 'stepBefore' | 'stepAfter'",
        },
      },
      control: {
        type: "select",
        options: [
          "basis",
          "basisClosed",
          "basisOpen",
          "bumpX",
          "bumpY",
          "bump",
          "linear",
          "linearClosed",
          "natural",
          "monotoneX",
          "monotoneY",
          "monotone",
          "step",
          "stepBefore",
          "stepAfter",
        ],
      },
    },
    label: {
      name: "Label",
      description: "Toggle visibility of labels on data points.",
      table: {
        category: "Appearance",
        type: { summary: "boolean" },
      },
      control: { type: "boolean" },
    },
    lineStyles: {
      name: "Line Styles",
      description:
        "Specify the styles for each line in the chart, including color.",
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
  data: { month: string; desktop: number; mobile: number }[];
  dots: boolean;
  caption: boolean;
  type:
    | "basis"
    | "basisClosed"
    | "basisOpen"
    | "bumpX"
    | "bumpY"
    | "bump"
    | "linear"
    | "linearClosed"
    | "natural"
    | "monotoneX"
    | "monotoneY"
    | "monotone"
    | "step"
    | "stepBefore"
    | "stepAfter";
  label: boolean;
  lineStyles: Record<string, { color: string }>;
  tooltipFormatter?: (data: any) => string;
  XAxisFormatter?: (data: any) => string;
  height: number;
  width: number;
  skeleton: boolean;
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
  <LineChart
    skeleton={args.skeleton}
    data={args.data}
    caption={args.caption}
    lineStyles={args.lineStyles}
    dots={args.dots}
    type={args.type}
    label={args.label}
    height={args.height}
    width={args.width}
    tooltipFormatter={args.tooltipFormatter}
    XAxisFormatter={args.XAxisFormatter}
  />
);

export const Default = Template.bind({});
Default.args = {
  dots: false,
  caption: true,
  label: false,
  data: data,
  type: "natural",
  lineStyles: {
    desktop: { color: "var(--s-color-chart-1)" },
    mobile: { color: "var(--s-color-chart-2)" },
  },
  height: 400,
  width: 600,
  tooltipFormatter: (data) => `${data} units`,
  XAxisFormatter: (data) => `${data.slice(0, 3)}`,
  skeleton: false,
};

export const withDots = Template.bind({});
withDots.args = {
  dots: true,
  caption: true,
  label: false,
  data: data,
  type: "natural",
  lineStyles: {
    desktop: { color: "var(--s-color-chart-1)" },
    mobile: { color: "var(--s-color-chart-2)" },
  },
  height: 400,
  width: 600,
  tooltipFormatter: (data) => `${data} units`,
  XAxisFormatter: (data) => `${data.slice(0, 3)}`,
  skeleton: false,
};

export const withLabel = Template.bind({});
withLabel.args = {
  dots: false,
  caption: true,
  label: true,
  data: data,
  type: "natural",
  lineStyles: {
    desktop: { color: "var(--s-color-chart-1)" },
    mobile: { color: "var(--s-color-chart-2)" },
  },
  height: 400,
  width: 600,
  tooltipFormatter: (data) => `${data} units`,
  XAxisFormatter: (data) => `${data.slice(0, 3)}`,
  skeleton: false,
};

export const Skeleton = Template.bind({});
Skeleton.args = {
  dots: false,
  caption: true,
  label: false,
  data: data,
  type: "natural",
  lineStyles: {
    desktop: { color: "var(--s-color-chart-1)" },
    mobile: { color: "var(--s-color-chart-2)" },
  },
  height: 400,
  width: 600,
  tooltipFormatter: (data) => `${data} units`,
  XAxisFormatter: (data) => `${data.slice(0, 3)}`,
  skeleton: true,
};
