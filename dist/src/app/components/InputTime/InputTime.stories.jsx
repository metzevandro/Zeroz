import "../../styles.scss";
import InputTime from "./InputTime";
import { Title, Subtitle, Primary, Controls, Stories } from "@storybook/blocks";
var meta = {
    title: "Components/Input Time",
    component: InputTime,
    tags: ["autodocs"],
    parameters: {
        layout: "padded",
        docs: {
            page: function () { return (<>
          <Title />
          <Subtitle>Component</Subtitle>
          <p>
            The <strong>Time Input</strong>allows users to select or enter a
            specific time, making it easy to accurately input temporal
            information such as schedules, event times, or time logs.
          </p>
          <Primary />
          <Controls />
          <Stories />
        </>); },
        },
    },
    argTypes: {
        label: {
            control: "text",
            description: "The text label displayed above the input field.",
            table: {
                category: "Appearance",
            },
        },
        placeholder: {
            control: "text",
            description: "The placeholder text displayed inside the input field when it is empty.",
            table: {
                category: "Appearance",
            },
        },
        value: {
            control: "text",
            description: "The current value of the input field.",
            table: {
                category: "Value",
            },
        },
        disabled: {
            control: "boolean",
            description: "If true, the input field will be disabled and uneditable.",
            table: {
                category: "State",
            },
        },
        error: {
            control: "boolean",
            description: "If true, the input field will be styled to indicate an error state.",
            table: {
                category: "State",
            },
        },
        textError: {
            control: "text",
            description: "The error message text displayed below the input field when in an error state.",
            table: {
                category: "Text",
            },
        },
        onChange: {
            action: "onChange",
            description: "Callback function that is called when the value of the input field changes.",
            table: {
                category: "Events",
            },
        },
    },
};
export default meta;
export var Default = {
    args: {
        onChange: function (value) { },
        label: "Label",
        placeholder: "Placeholder",
        error: false,
        textError: "Error",
        disabled: false,
    },
};
export var Disabled = {
    args: {
        onChange: function (value) { },
        label: "Label",
        placeholder: "Placeholder",
        disabled: true,
        error: false,
    },
};
export var Error = {
    args: {
        onChange: function (value) { },
        label: "Label",
        placeholder: "Placeholder",
        error: true,
        textError: "Error",
        disabled: false,
    },
};
