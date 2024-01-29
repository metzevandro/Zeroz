import { Meta, Story } from "@storybook/react";
import ProgressIndicator from "../app/components/ProgressIndicator/ProgressIndicator";
import "./css/main.scss";

const meta: Meta = {
  title: "Components/Progress Indicator",
  component: ProgressIndicator,
  argTypes: {},
  parameters: {
    ProgressIndicator: "padded",
  },
  tags: ["autodocs"],
};

export default meta;

type Args = {
  direction: "row" | "column";
};

const Template: Story<Args> = (args) => {
  return (
    <div style={{ display: "flex", flexDirection: args.direction }}>
      <ProgressIndicator
        direction={args.direction}
        state="completed"
        step="Step 1"
        description="Description"
      />
      <ProgressIndicator
        direction={args.direction}
        state="current"
        step="Step 2"
        description="Description"
      />
      <ProgressIndicator
        direction={args.direction}
        state="default"
        step="Step 3"
        description="Description"
      />
      <ProgressIndicator
        direction={args.direction}
        state="disable"
        step="Step 4"
        description="Description"
      />
      <ProgressIndicator
        direction={args.direction}
        state="error"
        step="Step 5"
        description="Description"
      />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  direction: "row",
};
