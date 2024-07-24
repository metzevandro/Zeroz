import "../../styles.scss";
import Input from "./Input";
import { Title, Subtitle, Primary, Controls, Stories } from "@storybook/blocks";
var meta = {
    title: "Components/Input",
    component: Input,
    parameters: {
        layout: "padded",
        docs: {
            page: function () { return (<>
          <Title />
          <Subtitle>Component</Subtitle>
          <p>
            The <strong>Input</strong> is a space where users can type and enter
            short pieces of information, such as names, addresses, or other
            brief text.{" "}
          </p>
          <Primary />
          <Controls />
          <Stories />
        </>); },
        },
    },
    argTypes: {
        label: {
            description: "Label for the input field.",
            control: {
                type: "text",
            },
            table: {
                category: "Appearance",
            },
        },
        placeholder: {
            description: "Placeholder text for the input field.",
            control: {
                type: "text",
            },
            table: {
                category: "Appearance",
            },
        },
        typeIcon: {
            description: "Icon type to be displayed in the input field.",
            control: {
                type: "text",
            },
            table: {
                category: "Appearance",
            },
        },
        fillIcon: {
            description: "Fills the input field icon.",
            control: {
                type: "boolean",
            },
            table: {
                category: "Appearance",
            },
        },
        value: {
            description: "Value of the input field.",
            control: {
                type: "text",
            },
            table: {
                category: "Behavior",
            },
        },
        onChange: {
            description: "Function called when the input value changes.",
            table: {
                category: "Behavior",
            },
        },
        disabled: {
            description: "Disables the input field.",
            control: {
                type: "boolean",
            },
            table: {
                category: "State",
            },
        },
        readOnly: {
            description: "Makes the input field read-only.",
            control: {
                type: "boolean",
            },
            table: {
                category: "State",
            },
        },
        error: {
            description: "Indicates if there is an error.",
            control: {
                type: "boolean",
            },
            table: {
                category: "State",
            },
        },
        textError: {
            description: "Error message text.",
            control: {
                type: "text",
            },
            table: {
                category: "State",
            },
        },
    },
};
export default meta;
var Template = function (args) {
    return (<Input value={args.value} label={args.label} placeholder={args.placeholder} disabled={args.disabled} typeIcon={args.typeIcon} error={args.error} textError={args.textError} readOnly={args.readOnly} fillIcon={args.fillIcon}/>);
};
export var Default = Template.bind({});
Default.args = {
    label: "Label",
    placeholder: "Placeholder",
    typeIcon: "settings",
    fillIcon: true,
    disabled: false,
    error: false,
    textError: "Error",
    readOnly: false,
};
export var WithIcon = Template.bind({});
WithIcon.args = {
    label: "Label",
    placeholder: "Placeholder",
    typeIcon: "settings",
    fillIcon: true,
    disabled: false,
    error: false,
    textError: "",
    readOnly: false,
};
export var ReadOnly = Template.bind({});
ReadOnly.args = {
    label: "Label",
    placeholder: "Placeholder",
    typeIcon: "",
    fillIcon: false,
    disabled: false,
    error: false,
    textError: "",
    readOnly: true,
    value: "This is read only, you can't type more.",
};
export var Disabled = Template.bind({});
Disabled.args = {
    label: "Label",
    placeholder: "Placeholder",
    typeIcon: "",
    fillIcon: false,
    disabled: true,
    error: false,
    textError: "",
    readOnly: false,
};
export var Error = Template.bind({});
Error.args = {
    label: "Label",
    placeholder: "Placeholder",
    typeIcon: "",
    fillIcon: false,
    disabled: false,
    error: true,
    textError: "Error",
    readOnly: false,
};
