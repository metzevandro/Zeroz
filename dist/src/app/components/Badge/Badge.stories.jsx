import Badge from "./Badge";
import "../../styles.scss";
import { Title, Subtitle, Primary, Controls, Stories } from "@storybook/blocks";
var meta = {
    title: "Components/Badge",
    component: Badge,
    parameters: {
        layout: "centered",
        docs: {
            page: function () { return (<>
          <Title />
          <Subtitle>Component</Subtitle>
          <p>
            The <strong>Badges</strong> are like little signs that inform you
            about the status or actions that have been taken.
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
            name: "Label",
            description: "The text content to display within the badge.",
            type: { name: "string" },
            control: { type: "text" },
            table: {
                category: "Content",
                type: { summary: "string" },
            },
        },
        type: {
            name: "Type",
            description: "The type of badge.",
            control: {
                type: "select",
                options: ["default"],
            },
            table: {
                category: "Appearance",
                type: { summary: "'default'" },
            },
        },
        variant: {
            name: "Variant",
            description: "The visual variant of the badge.",
            control: {
                type: "select",
                options: ["default", "primary", "success", "warning"],
            },
            table: {
                category: "Appearance",
                type: { summary: "'default' | 'primary' | 'success' | 'warning'" },
            },
        },
    },
};
export default meta;
export var Default = {
    args: {
        label: "Badge",
        type: "default",
        variant: "default",
    },
};
export var primary = {
    args: {
        label: "Badge",
        type: "default",
        variant: "primary",
    },
};
export var Success = {
    args: {
        label: "Badge",
        type: "default",
        variant: "success",
    },
};
export var Warning = {
    args: {
        label: "Badge",
        type: "default",
        variant: "warning",
    },
};
