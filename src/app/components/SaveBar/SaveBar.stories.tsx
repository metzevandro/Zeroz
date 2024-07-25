import { Meta, StoryObj } from "@storybook/react";
import "../../styles.scss";
import SaveBar from "./SaveBar";
import { Title, Subtitle, Primary, Controls, Stories } from "@storybook/blocks";
import React from "react";

const meta: Meta<typeof SaveBar> = {
  title: "Components/Save bar",
  component: SaveBar,
  tags: ["autodocs"],
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle>Component</Subtitle>
          <p>
            The <strong>Save Bar</strong> is visible during the creation or
            editing of objects. Users can utilize it to save or discard their
            work.
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
      control: "text",
      description: "The label displayed on the Save Bar.",
      table: {
        category: "Content",
      },
    },
    labelSave: {
      control: "text",
      description: "The label displayed on the submit button Save Bar.",
      table: {
        category: "Content",
      },
    },
    labelCancel: {
      control: "text",
      description: "The label displayed on the cancel button Save Bar.",
      table: {
        category: "Content",
      },
    },
    onClickCancel: {
      action: "onClickCancel",
      description:
        "Callback function that is called when the cancel button is clicked.",
      table: {
        category: "Events",
      },
    },
    onClickSave: {
      action: "onClickSave",
      description:
        "Callback function that is called when the save button is clicked.",
      table: {
        category: "Events",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    labelSave: "Save",
    labelCancel: "Cancel",
    label: "Unsaved changes",
    onClickCancel: () => {},
    onClickSave: () => {},
  },
};
