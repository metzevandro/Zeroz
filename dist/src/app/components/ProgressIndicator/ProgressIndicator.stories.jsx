import ProgressIndicator from "./ProgressIndicator";
import "../../styles.scss";
import { Title, Subtitle, Primary, Controls, Stories } from "@storybook/blocks";
var meta = {
    title: "Components/Progress Indicator",
    component: ProgressIndicator,
    parameters: {
        layout: "padded",
        docs: {
            page: function () { return (<>
          <Title />
          <Subtitle>Component</Subtitle>
          <p>
            The <strong>Progress Indicator </strong> is a visual guide showing
            how far you've come in a process, helping you complete each step.
          </p>
          <Primary />
          <Controls />
          <Stories />
        </>); },
        },
    },
    argTypes: {
        direction: {
            control: "select",
            options: ["row", "column"],
            description: "The direction of the progress indicator steps.",
            table: {
                category: "Layout",
            },
        },
        state: {
            control: "select",
            options: ["default", "current", "completed", "error", "disable"],
            description: "The state of the first step.",
            table: {
                category: "State",
            },
        },
        step: {
            control: "text",
            description: "The label for the first step.",
            table: {
                category: "Content",
            },
        },
        description: {
            control: "text",
            description: "The description for the first step.",
            table: {
                category: "Content",
            },
        },
        widthFull: {
            control: "boolean",
            description: "If true, the first step will take the full width.",
            table: {
                category: "Layout",
            },
        },
        onClick: {
            action: "onClick",
            description: "Callback function for the first step click event.",
            table: {
                category: "Events",
            },
        },
    },
    tags: ["autodocs"],
};
export default meta;
var Template = function (args) {
    return (<div style={{ display: "flex", width: "100%", flexDirection: args.direction }}>
      <ProgressIndicator direction={args.direction} state={args.state} step={args.step} description={args.description} widthFull={args.widthFull}/>
    </div>);
};
export var Default = Template.bind({});
Default.args = {
    direction: "row",
    step: "Step",
    description: "Description",
    state: "completed",
    widthFull: false,
};
export var WidthFull = Template.bind({});
WidthFull.args = {
    direction: "row",
    step: "Step",
    description: "Description",
    state: "completed",
    widthFull: true,
};
