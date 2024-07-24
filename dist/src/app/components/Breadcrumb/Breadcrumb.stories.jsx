import { Breadcrumb } from "./Breadcrumb";
import "../../styles.scss";
import { Title, Subtitle, Primary, Controls, Stories } from "@storybook/blocks";
var meta = {
  title: "Components/Breadcrumb",
  component: Breadcrumb,
  parameters: {
    layout: "centered",
    docs: {
      page: function () {
        return (
          <>
            <Title />
            <Subtitle>Component</Subtitle>
            <p>
              The <strong>Breadcrumb</strong> is like a helpful trail that shows
              where you are and lets you go back to previous pages.
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
    items: {
      name: "Items",
      description:
        "An array of breadcrumb items, where each item represents a step in the breadcrumb trail.",
      control: "object",
      table: {
        category: "Content",
        type: { summary: "BreadcrumbItem[]" },
      },
    },
  },
  tags: ["autodocs"],
};
export default meta;
var Template = function (args) {
  return (
    <>
      <Breadcrumb items={args.items} />
    </>
  );
};
export var Default = Template.bind({});
Default.args = {
  items: [
    { pageName: "Home", href: "/" },
    { pageName: "Category", href: "/category" },
    { pageName: "Product", href: "/product" },
  ],
};
