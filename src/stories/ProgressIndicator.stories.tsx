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
  state1: "default" | "current" | "completed" | "error" | "disable";
  state2: "default" | "current" | "completed" | "error" | "disable";
  state3: "default" | "current" | "completed" | "error" | "disable";
  state4: "default" | "current" | "completed" | "error" | "disable";
  state5: "default" | "current" | "completed" | "error" | "disable";
  step1: string;
  step2: string;
  step3: string;
  step4: string;
  step5: string;
  description1: string;
  description2: string;
  description3: string;
  description4: string;
  description5: string;
};

const Template: Story<Args> = (args) => {
  return (
    <div style={{ display: "flex", flexDirection: args.direction }}>
      <ProgressIndicator
        direction={args.direction}
        state={args.state1}
        step={args.step1}
        description={args.description1}
      />
      <ProgressIndicator
        direction={args.direction}
        state={args.state2}
        step={args.step2}
        description={args.description2}
      />
      <ProgressIndicator
        direction={args.direction}
        state={args.state3}
        step={args.step3}
        description={args.description3}
      />
      <ProgressIndicator
        direction={args.direction}
        state={args.state4}
        step={args.step4}
        description={args.description4}
      />
      <ProgressIndicator
        direction={args.direction}
        state={args.state5}
        step={args.step5}
        description={args.description5}
      />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  direction: "row",
  step1: "Step 1",
  description1: "Description 1",
  state1: "completed",
  step2: "Step 2",
  description2: "Description 2",
  state2: "current",
  step3: "Step 3",
  description3: "Description 3",
  state3: "default",
  step4: "Step 4",
  description4: "Description 4",
  state4: "disable",
  step5: "Step 5",
  description5: "Description 5",
  state5: "error",
};
