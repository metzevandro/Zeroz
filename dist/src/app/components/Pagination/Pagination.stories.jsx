import "../../styles.scss";
import Pagination from "./Pagination";
import { Title, Subtitle, Primary, Controls, Stories } from "@storybook/blocks";
var meta = {
    title: "Components/Pagination",
    component: Pagination,
    tags: ["autodocs"],
    parameters: {
        docs: {
            page: function () { return (<>
          <Title />
          <Subtitle>Component</Subtitle>
          <p>
            The <strong>Pagination</strong> enable users to navigate through an
            ordered collection of items split into pages.
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
            description: "The label for the pagination component.",
            table: {
                category: "Content",
            },
        },
        variant: {
            control: "select",
            options: ["noLabel", "leftLabel", "centerLabel"],
            description: "The variant of the pagination label position.",
            table: {
                category: "Appearance",
            },
        },
        disabledLeft: {
            control: "boolean",
            description: "If true, the left pagination button is disabled.",
            table: {
                category: "State",
            },
        },
        disabledRight: {
            control: "boolean",
            description: "If true, the right pagination button is disabled.",
            table: {
                category: "State",
            },
        },
        onClickLeft: {
            action: "leftClick",
            description: "Callback function when the left pagination button is clicked.",
            table: {
                category: "Actions",
            },
        },
        onClickRight: {
            action: "rightClick",
            description: "Callback function when the right pagination button is clicked.",
            table: {
                category: "Actions",
            },
        },
    },
};
export default meta;
export var Default = {
    args: {
        label: "Pagination",
        variant: "noLabel",
        disabledLeft: false,
        disabledRight: false,
    },
};
export var Disable = {
    args: {
        label: "Pagination",
        variant: "noLabel",
        disabledLeft: true,
        disabledRight: true,
    },
};
export var LeftLabel = {
    args: {
        label: "Pagination",
        variant: "leftLabel",
        disabledLeft: false,
        disabledRight: false,
    },
};
export var CenterLabel = {
    args: {
        label: "Pagination",
        variant: "centerLabel",
        disabledLeft: false,
        disabledRight: false,
    },
};
