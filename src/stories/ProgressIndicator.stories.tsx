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
  widthFull1: boolean;
  widthFull2: boolean;
  widthFull3: boolean;
  widthFull4: boolean;
  widthFull5: boolean;
};

const Template: Story<Args> = (args) => {
  return (
    <div style={{ display: "flex", width: '100%', flexDirection: args.direction }}>
      <ProgressIndicator
        direction={args.direction}
        state={args.state1}
        step={args.step1}
        description={args.description1}
        widthFull={args.widthFull1}
      />
      <ProgressIndicator
        direction={args.direction}
        state={args.state2}
        step={args.step2}
        description={args.description2}
        widthFull={args.widthFull2}
      />
      <ProgressIndicator
        direction={args.direction}
        state={args.state3}
        step={args.step3}
        description={args.description3}
        widthFull={args.widthFull3}
      />
      <ProgressIndicator
        direction={args.direction}
        state={args.state4}
        step={args.step4}
        description={args.description4}
        widthFull={args.widthFull4}
      />
      <ProgressIndicator
        direction={args.direction}
        state={args.state5}
        step={args.step5}
        description={args.description5}
        widthFull={args.widthFull5}
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
  widthFull1: false,
  step2: "Step 2",
  description2: "Description 2",
  state2: "current",
  widthFull2: false,
  step3: "Step 3",
  description3: "Description 3",
  state3: "default",
  widthFull3: false,
  step4: "Step 4",
  description4: "Description 4",
  state4: "disable",
  widthFull4: false,
  step5: "Step 5",
  description5: "Description 5",
  state5: "error",
  widthFull5: false,
};

export const WidthFull = Template.bind({});
WidthFull.args = {
  direction: "row",
  step1: "Step 1",
  description1: "Description 1",
  state1: "completed",
  widthFull1: true,
  step2: "Step 2",
  description2: "Description 2",
  state2: "current",
  widthFull2: true,
  step3: "Step 3",
  description3: "Description 3",
  state3: "default",
  widthFull3: true,
  step4: "Step 4",
  description4: "Description 4",
  state4: "disable",
  widthFull4: true,
  step5: "Step 5",
  description5: "Description 5",
  state5: "error",
  widthFull5: true,
};
