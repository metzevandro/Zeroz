import type { Meta, StoryObj } from "@storybook/react";
import "../styles.scss";
import Switch from "../components/Switch/Switch";
import { Title, Subtitle, Primary, Controls, Stories } from "@storybook/blocks";
import React from "react";

const meta: Meta<typeof Switch> = {
  title: "Components/Switch",
  component: Switch,
  parameters: {
    layout: "centered",
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle>Component</Subtitle>
          <p>
            The <strong>Switch </strong> is used to change between two states,
            often used for turning things "on" or "off."
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
    label: {
      name: "Label",
      description: "The label displayed for the switch.",
      type: { name: "string" },
      defaultValue: { summary: "Label" },
      control: { type: "text" },
      table: {
        category: "Appearance",
        type: { summary: "string" },
        defaultValue: { summary: "Label" },
      },
    },
    disabled: {
      name: "Disabled",
      description: "Indicates whether the switch is disabled.",
      type: { name: "boolean" },
      defaultValue: { summary: false },
      control: { type: "boolean" },
      table: {
        category: "Behavior",
        type: { summary: "boolean" },
      },
    },
    onUpdate: {
      name: "On Update",
      description:
        "Callback function that is triggered when the switch value changes.",
      type: { name: "function" },
      action: "updated",
      table: {
        category: "Events",
        type: { summary: "(checked: boolean) => void" },
      },
    },
    modelValue: {
      name: "Model Value",
      description: "The model value of the switch.",
      table: {
        category: "Data",
        type: { summary: "any" },
      },
    },
    value: {
      name: "Value",
      description: "The value of the switch.",
      table: {
        category: "Data",
        type: { summary: "any" },
      },
    },
    id: {
      name: "ID",
      description: "The unique identifier for the switch.",
      type: { name: "string" },
      table: {
        category: "Identification",
        type: { summary: "string" },
      },
    },
    name: {
      name: "Name",
      description: "The name of the switch.",
      type: { name: "string" },
      table: {
        category: "Identification",
        type: { summary: "string" },
      },
    },
    required: {
      name: "Required",
      description: "Indicates whether the switch is required.",
      type: { name: "boolean" },
      defaultValue: { summary: false },
      control: { type: "boolean" },
      table: {
        category: "Validation",
        type: { summary: "boolean" },
      },
    },
    noEvents: {
      name: "No Events",
      description: "Indicates whether events should be ignored.",
      type: { name: "boolean" },
      defaultValue: { summary: false },
      control: { type: "boolean" },
      table: {
        category: "Behavior",
        type: { summary: "boolean" },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Label",
    disabled: false,
    modelValue: null,
    value: null,
    id: "switch-id",
    name: "switch-name",
    required: false,
    noEvents: false,
  },
};
