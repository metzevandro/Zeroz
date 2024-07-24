import DescriptionList from "./DescriptionList";
import "../../styles.scss";
import { Title, Subtitle, Primary, Controls, Stories } from "@storybook/blocks";
var meta = {
    title: "Components/Description List",
    component: DescriptionList,
    parameters: {
        layout: "padded",
        docs: {
            page: function () { return (<>
          <Title />
          <Subtitle>Component</Subtitle>
          <p>
            The <strong>Description list</strong> helps organize and explain
            related info, perfect for listing and defining terms.
          </p>
          <Primary />
          <Controls />
          <Stories />
        </>); },
        },
    },
    argTypes: {
        direction: {
            description: "The direction of the description list, either row or column.",
            control: { type: "radio" },
            options: ["row", "column"],
            defaultValue: "row",
            table: {
                category: "Layout",
            },
        },
        items: {
            description: "Array of items to be displayed in the description list. Each item contains a title and description.",
            control: { type: "object" },
            defaultValue: [
                { title: "Title 1", description: "Description 1" },
                { title: "Title 2", description: "Description 2" },
                { title: "Title 3", description: "Description 3" },
            ],
            table: {
                category: "Content",
            },
        },
    },
};
export default meta;
var Template = function (args) {
    return <DescriptionList direction={args.direction} items={args.items}/>;
};
export var Row = Template.bind({});
Row.args = {
    direction: "row",
    items: [
        {
            title: "Title 1",
            description: "Description 1",
        },
        {
            title: "Title 2",
            description: "Description 2",
        },
        {
            title: "Title 3",
            description: "Description 3",
        },
    ],
};
export var Column = Template.bind({});
Column.args = {
    direction: "column",
    items: [
        {
            title: "Title 1",
            description: "Description 1",
        },
        {
            title: "Title 2",
            description: "Description 2",
        },
        {
            title: "Title 3",
            description: "Description 3",
        },
    ],
};
