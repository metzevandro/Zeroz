import "../../styles.scss";
import Loading from "./Loading";
import { Title, Subtitle, Primary, Controls, Stories } from "@storybook/blocks";
var meta = {
    title: "Components/Loading",
    component: Loading,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
        docs: {
            page: function () { return (<>
          <Title />
          <Subtitle>Component</Subtitle>
          <p>
            The <strong>Loading </strong> is use to indicate that an action is
            in progress.
          </p>
          <Primary />
          <Controls />
          <Stories />
        </>); },
        },
    },
    argTypes: {
        variant: {
            control: "radio",
            options: ["default", "large", "success", "warning"],
            description: "The variant of the loading component, which determines its style and size.",
            table: {
                category: "Appearance",
            },
        },
        message: {
            control: "text",
            description: "The message text displayed alongside the loading indicator.",
            table: {
                category: "Content",
            },
        },
    },
};
export default meta;
export var Default = {
    args: {
        variant: "default",
        message: "Loading",
    },
};
export var Large = {
    args: {
        variant: "large",
    },
};
export var Success = {
    args: {
        variant: "success",
        message: "Success",
    },
};
export var Warning = {
    args: {
        variant: "warning",
        message: "Warning",
    },
};
