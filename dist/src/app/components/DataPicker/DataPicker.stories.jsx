import "../../styles.scss";
import DataPicker from "./DataPicker";
import { Title, Subtitle, Primary, Controls, Stories } from "@storybook/blocks";
var meta = {
    title: "Components/Data Picker",
    component: DataPicker,
    parameters: {
        layout: "padded",
        docs: {
            page: function () { return (<>
          <Title />
          <Subtitle>Component</Subtitle>
          <p>
            The <strong>Data picker</strong> is used to select a single date.
          </p>
          <Primary />
          <Controls />
          <Stories />
        </>); },
        },
    },
    argTypes: {
        label: {
            description: "The label for the data picker input field.",
            control: { type: "text" },
            defaultValue: "Label",
            table: {
                category: "Content",
            },
        },
        placeholder: {
            description: "The placeholder text for the data picker input field.",
            control: { type: "text" },
            defaultValue: "Placeholder",
            table: {
                category: "Content",
            },
        },
        disabled: {
            description: "Determines if the data picker input field is disabled.",
            control: { type: "boolean" },
            defaultValue: false,
            table: {
                category: "State",
            },
        },
        onDateChange: {
            description: "Callback function that is called when the date is changed.",
            action: "date changed",
            table: {
                category: "Events",
            },
        },
        date: {
            description: "The initial date to be displayed in the data picker input field.",
            control: { type: "text" },
            defaultValue: "12/06/2024",
            table: {
                category: "Content",
            },
        },
    },
};
export default meta;
var Template = function (args) {
    return (<div style={{ height: "400px" }}>
      <DataPicker date={args.date} label={args.label} onDateChange={args.onDateChange} placeholder={args.placeholder} disabled={args.disabled}/>{" "}
    </div>);
};
export var Default = Template.bind({});
Default.args = {
    label: "Label",
    placeholder: "Placeholder",
    disabled: false,
    onDateChange: function (date) { return console.log(date); },
    date: "12/06/2024",
};
export var Disable = Template.bind({});
Disable.args = {
    date: "",
    label: "Label",
    placeholder: "Placeholder",
    disabled: true,
    onDateChange: function (date) { return console.log(date); },
};
