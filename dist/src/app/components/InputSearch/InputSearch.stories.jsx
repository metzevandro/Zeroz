import InputSearch from "./InputSearch";
import "../../styles.scss";
import { Title, Subtitle, Primary, Controls, Stories } from "@storybook/blocks";
var meta = {
  title: "Components/Input Search",
  component: InputSearch,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      page: function () {
        return (
          <>
            <Title />
            <Subtitle>Component</Subtitle>
            <p>
              The <strong>Input Search</strong> helps you find things by letting
              you type in a word or phrase instead of clicking around.
            </p>
            <Primary />
            <Controls />
            <Stories />
          </>
        );
      },
    },
  },
  argTypes: {
    placeholder: {
      control: "text",
      description:
        "The placeholder text displayed inside the search input field when it is empty.",
      table: {
        category: "Appearance",
      },
    },
    disabled: {
      control: "boolean",
      description:
        "If true, the search input field will be disabled and unclickable.",
      table: {
        category: "State",
      },
    },
    onChange: {
      action: "onChange",
      description:
        "Callback function that is called when the value of the search input field changes.",
      table: {
        category: "Events",
      },
    },
  },
};
export default meta;
export var Default = {
  args: {
    placeholder: "Search",
    disabled: false,
  },
};
export var Disabled = {
  args: {
    placeholder: "Search",
    disabled: true,
  },
};
