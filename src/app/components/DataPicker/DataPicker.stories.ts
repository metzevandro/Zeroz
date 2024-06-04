import type { Meta, StoryObj } from "@storybook/react";
import "../../styles.scss";
import DataPicker from "./DataPicker";
import Story from "@storybook/react";
import mdx from "./DataPicker.mdx";
const meta = {
  title: "Components/Data Picker",
  component: DataPicker,
  parameters: {
    layout: "padded",
    docs: {
      page: mdx,
    },
  },
  argTypes: {},
} satisfies Meta<typeof DataPicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Label",
    placeholder: "Placeholder",
    disabled: false,
    onDateChange: (date: Date) => console.log(date),
    date: "12/06/2024",
  },
};

export const Disable: Story = {
  args: {
    date: "", // Example initial date, adjust as needed
    label: "Label",
    placeholder: "Placeholder",
    disabled: true,
    onDateChange: (date: Date) => console.log(date), // Example function, adjust as needed
  },
};
