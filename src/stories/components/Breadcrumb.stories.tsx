import type { Meta, StoryFn } from "@storybook/react";
import {
  Breadcrumb,
  BreadcrumbItem,
} from "../../components/Breadcrumb/Breadcrumb";
import "../../styles.scss";
import { Title, Subtitle, Primary, Controls, Stories } from "@storybook/blocks";
import React from "react";

const meta: Meta = {
  title: "Components/Breadcrumb",
  component: Breadcrumb,
  parameters: {
    layout: "centered",
    docs: {
      page: () => (
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
      ),
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

type Args = {
  items: BreadcrumbItem[];
};

const Template: StoryFn<Args> = (args) => {
  return (
    <>
      <Breadcrumb items={args.items} />
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  items: [
    { pageName: "Home", href: "/" },
    { pageName: "Category", href: "/category" },
    { pageName: "Product", href: "/product" },
  ],
};
