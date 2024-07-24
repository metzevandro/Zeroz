import "../../styles.scss";
import Tooltip from "./Tooltip";
import Icon from "../Icon/Icon";
import { Title, Subtitle, Primary, Controls, Stories } from "@storybook/blocks";
var meta = {
    title: "Components/Tooltip",
    component: Tooltip,
    parameters: {
        layout: "centered",
        docs: {
            page: function () { return (<>
          <Title />
          <Subtitle>Component</Subtitle>
          <p>
            <strong>Tooltips</strong> show extra info when you hover or focus,
            giving helpful context without being crucial, clarifying things for
            users.
          </p>
          <Primary />
          <Controls />
          <Stories />
        </>); },
        },
    },
    args: {
        direction: "bottom",
        text: "Tooltip text here...",
    },
    tags: ["autodocs"],
    argTypes: {
        text: {
            name: "Text",
            description: "The text to display inside the tooltip.",
            type: { name: "string" },
            defaultValue: { summary: "Tooltip text here..." },
            table: {
                category: "Content",
                type: { summary: "string" },
                defaultValue: { summary: "Tooltip text here..." },
            },
        },
        direction: {
            name: "Direction",
            description: "The direction in which the tooltip appears relative to the target element.",
            control: { type: "select" },
            options: ["top", "bottom", "left", "right"],
            defaultValue: { summary: "bottom" },
            table: {
                category: "Appearance",
                type: { summary: "'top' | 'bottom' | 'left' | 'right'" },
                defaultValue: { summary: "bottom" },
            },
        },
    },
};
export default meta;
export var Default = {
    render: function (args) { return (<>
      <Tooltip text={args.text} direction={args.direction}>
        <Icon icon="info" size="md"/>
      </Tooltip>
    </>); },
};
