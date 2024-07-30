import type { Meta, StoryFn } from "@storybook/react";
import "../styles.scss";
import DataPicker from "../components/DataPicker/DataPicker";
import { Title, Subtitle, Primary, Controls, Stories } from "@storybook/blocks";
import React from "react";

const meta: Meta<typeof DataPicker> = {
  title: "Components/Data Picker",
  component: DataPicker,
  parameters: {
    layout: "padded",
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle>Component</Subtitle>
          <p>
            The <strong>Data picker</strong> is used to select a single date.
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
      description: "The label for the data picker input field.",
      control: { type: "text" },
      defaultValue: "Label",
      table: {
        category: "Content",
      },
    },
    placeholder: {
      description: "The placeholder text for the data picker input field.",
      control: { type: "text" },
      defaultValue: "Placeholder",
      table: {
        category: "Content",
      },
    },
    disabled: {
      description: "Determines if the data picker input field is disabled.",
      control: { type: "boolean" },
      defaultValue: false,
      table: {
        category: "State",
      },
    },
    onDateChange: {
      description: "Callback function that is called when the date is changed.",
      action: "date changed",
      table: {
        category: "Events",
      },
    },
    date: {
      description:
        "The initial date to be displayed in the data picker input field.",
      control: { type: "text" },
      defaultValue: "12/06/2024",
      table: {
        category: "Content",
      },
    },
  },
};

export default meta;

type Args = {
  date: string;
  label: string;
  placeholder: string;
  disabled: boolean;
  onDateChange: (date: Date) => void;
};

const Template: StoryFn<Args> = (args) => {
  return (
    <div style={{ height: "400px" }}>
      <DataPicker
        date={args.date}
        label={args.label}
        onDateChange={args.onDateChange}
        placeholder={args.placeholder}
        disabled={args.disabled}
      />{" "}
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  label: "Label",
  placeholder: "Placeholder",
  disabled: false,
  onDateChange: (date: Date) => console.log(date),
  date: "12/06/2024",
};

export const Disable = Template.bind({});
Disable.args = {
  date: "",
  label: "Label",
  placeholder: "Placeholder",
  disabled: true,
  onDateChange: (date: Date) => console.log(date),
};
