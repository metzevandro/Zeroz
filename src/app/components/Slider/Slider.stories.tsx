import type { Meta, StoryObj } from "@storybook/react";
import "../../styles.scss";
import Slider from "./Slider";
import { Title, Subtitle, Primary, Controls, Stories } from "@storybook/blocks";
import React from "react";

const meta: Meta<typeof Slider> = {
  title: "Components/Slider",
  component: Slider,
  tags: ["autodocs"],
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle>Component</Subtitle>
          <p>
            The <strong>Slider </strong> is a input field to to choose a number
            within a set range of minimum and maximum values.
          </p>
          <Primary />
          <Controls />
          <Stories />
        </>
      ),
    },
  },
  argTypes: {
    label: {
      name: "Label",
      description: "The label displayed for the slider.",
      type: { name: "string" },
      defaultValue: { summary: "Label" },
      control: { type: "text" },
      table: {
        category: "Appearance",
        type: { summary: "string" },
        defaultValue: { summary: "Label" },
      },
    },
    value: {
      name: "Value",
      description: "The current value of the slider.",
      type: { name: "string" },
      defaultValue: { summary: "5" },
      control: { type: "text" },
      table: {
        category: "Behavior",
        type: { summary: "string" },
        defaultValue: { summary: "5" },
      },
    },
    max: {
      name: "Max",
      description: "The maximum value of the slider.",
      type: { name: "number" },
      defaultValue: { summary: 10 },
      control: { type: "number" },
      table: {
        category: "Behavior",
        type: { summary: "number" },
      },
    },
    min: {
      name: "Min",
      description: "The minimum value of the slider.",
      type: { name: "number" },
      defaultValue: { summary: 0 },
      control: { type: "number" },
      table: {
        category: "Behavior",
        type: { summary: "number" },
      },
    },
    step: {
      name: "Step",
      description: "The step size for each increment or decrement.",
      type: { name: "number" },
      defaultValue: { summary: 1 },
      control: { type: "number" },
      table: {
        category: "Behavior",
        type: { summary: "number" },
      },
    },
    onChange: {
      name: "On Change",
      description:
        "Callback function that is triggered when the slider value changes.",
      type: { name: "function" },
      action: "changed",
      table: {
        category: "Events",
        type: { summary: "(value: string) => void" },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Label",
    value: "5",
    max: 10,
    min: 0,
    step: 1,
    onChange: (value: string) => console.log("Slider value changed:", value),
  },
};
