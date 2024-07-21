import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import "../../styles.scss";
import EmptyState from "./EmptyState";
import { Title, Subtitle, Primary, Controls, Stories } from "@storybook/blocks";

const meta: Meta = {
  title: "Templates/Empty State",
  component: EmptyState,
  parameters: {
    layout: "padded",
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle>Template</Subtitle>
          <p>
            The <strong>EmptyState</strong> template has many uses. It
            communicates when a search finds nothing, a page is empty, or data
            loading encounters issues. It can display an icon, a title,
            additional text, and even suggest actions to take next if there's a
            problem.
          </p>
          <Primary />
          <Controls />
          <Stories />
        </>
      ),
    },
  },
  argTypes: {
    icon: {
      name: "Icon",
      description: "Icon to display in the empty state.",
      table: {
        category: "Content",
      },
    },
    title: {
      name: "Title",
      description: "Main title displayed in the empty state.",
      table: {
        category: "Content",
      },
    },
    description: {
      name: "Description",
      description: "Description displayed in the empty state.",
      table: {
        category: "Content",
      },
    },
    buttonContentPrimary: {
      name: "Primary Button Content",
      description: "Text displayed in the primary button.",
      table: {
        category: "Appearence",
      },
    },
    buttonContentSecondary: {
      name: "Secondary Button Content",
      description: "Text displayed in the secondary button.",
      table: {
        category: "Appearence",
      },
    },
    onClickActionPrimary: {
      name: "Primary Button Action",
      description: "Function to be executed on primary button click.",
      table: {
        category: "Actions",
      },
    },
    onClickActionSecondary: {
      name: "Secondary Button Action",
      description: "Function to be executed on secondary button click.",
      table: {
        category: "Actions",
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;

type DefaultProps = {
  title: string;
  description: string;
  icon: string;
  buttonContentPrimary?: string;
  buttonContentSecondary?: string;
  onClickActionPrimary?: () => void;
  onClickActionSecondary?: () => void;
};

const Template: StoryFn<DefaultProps> = (args) => {
  return <EmptyState {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  title: "Title",
  description: "Description",
  icon: "ac_unit",
  buttonContentPrimary: "Button",
  buttonContentSecondary: "Button",
};
