import React from "react";
import type { Meta, StoryFn } from "@storybook/react";
import "../../styles.scss";
import { Title, Subtitle, Primary, Controls } from "@storybook/blocks";
import "../colors/Colors.scss";

import DataPicker from "../../components/DataPicker/DataPicker";

const meta: Meta = {
  title: "Components/DataPicker",
  component: DataPicker,
  parameters: {
    layout: "padded",
    AnimationEffect: "fade",
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
        </>
      ),
    },
    ArgTypes: {
      label: {
        description: "The label for the data picker input field.",
        control: { type: "text" },
        defaultValue: "Label",
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
      onChange: {
        description:
          "Callback function that is called when the date is changed.",
        action: "date changed",
        table: {
          category: "Events",
        },
      },
      value: {
        description:
          "The initial date to be displayed in the data picker input field.",
        control: { type: "text" },
        defaultValue: "12/06/2024",
        table: {
          category: "Content",
        },
      },
      skeleton: {
        description:
          "Determines if the data picker input field is in skeleton state.",
        control: { type: "boolean" },
        defaultValue: false,
        table: {
          category: "State",
        },
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;

type DefaultProps = {
  value: string;
  label: string;
  disabled: boolean;
  skeleton: boolean;
  onChange: (value: string) => void;
};

const Template: StoryFn<DefaultProps> = (args) => {
  return (
    <div style={{ height: "424px" }}>
      <DataPicker {...args} />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  value: "12/02/2005",
  label: "Data",
  disabled: false,
  skeleton: false,
  onChange: (value: string) => console.log(value),
};
