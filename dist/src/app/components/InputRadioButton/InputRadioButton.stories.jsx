import "../../styles.scss";
import InputRadioButton from "./InputRadioButton";
import { Title, Subtitle, Primary, Controls, Stories } from "@storybook/blocks";
var meta = {
    title: "Components/Input Radio Button",
    component: InputRadioButton,
    parameters: {
        layout: "centered",
        docs: {
            page: function () { return (<>
          <Title />
          <Subtitle>Component</Subtitle>
          <p>
            The <strong>Radio Buttons</strong> when you need to make a single
            selection from a list of options.
          </p>
          <Primary />
          <Controls />
          <Stories />
        </>); },
        },
    },
    tags: ["autodocs"],
    argTypes: {
        label: {
            control: "text",
            description: "The text label displayed next to the radio button.",
            table: {
                category: "Appearance",
            },
        },
        disabled: {
            control: "boolean",
            description: "If true, the radio button will be disabled and unselectable.",
            table: {
                category: "State",
            },
        },
        checked: {
            control: "boolean",
            description: "If true, the radio button will be checked.",
            table: {
                category: "State",
            },
        },
        onChange: {
            action: "onChange",
            description: "Callback function that is called when the radio button value changes.",
            table: {
                category: "Events",
            },
        },
    },
};
export default meta;
export var Default = {
    args: {
        label: "Label",
        disabled: false,
        checked: false,
    },
};
export var Disabled = {
    args: {
        label: "Label",
        disabled: true,
        checked: false,
    },
};
export var Checked = {
    args: {
        label: "Label",
        disabled: false,
        checked: true,
    },
};
