import "../../styles.scss";
import Progress from "./Progress";
import { Title, Subtitle, Primary, Controls, Stories } from "@storybook/blocks";
var meta = {
    title: "Components/Progress",
    component: Progress,
    parameters: {
        docs: {
            page: function () { return (<>
          <Title />
          <Subtitle>Component</Subtitle>
          <p>
            The <strong>Progress</strong> component shows how a task or
            operation is loading.
          </p>
          <Primary />
          <Controls />
          <Stories />
        </>); },
        },
    },
    tags: ["autodocs"],
    argTypes: {
        value: {
            control: "number",
            description: "The current value of the progress bar. When the value is 100, the progress bar turns green.",
            table: {
                category: "Value",
            },
        },
        indeterminate: {
            control: "boolean",
            description: "If true, the progress bar will display an indeterminate state.",
            table: {
                category: "State",
            },
        },
        error: {
            control: "boolean",
            description: "If true, the progress bar will display an error state.",
            table: {
                category: "State",
            },
        },
    },
};
export default meta;
export var Default = {
    args: {
        value: 0,
        indeterminate: false,
        error: false,
    },
};
export var Loading = {
    args: {
        value: 50,
        indeterminate: false,
        error: false,
    },
};
export var Success = {
    args: {
        value: 100,
        indeterminate: false,
        error: false,
    },
};
export var Indeterminate = {
    args: {
        value: 0,
        indeterminate: true,
        error: false,
    },
};
export var Error = {
    args: {
        value: 90,
        indeterminate: false,
        error: true,
    },
};
