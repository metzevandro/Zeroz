import type { Meta, StoryObj } from "@storybook/react";
import "../../styles.scss";
import Progress from "./Progress";
import { Title, Subtitle, Primary, Controls, Stories } from "@storybook/blocks";

const meta: Meta<typeof Progress> = {
  title: "Components/Progress",
  component: Progress,
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle>Component</Subtitle>
          <p>
            The <strong>Progress</strong> component shows how a task or
            operation is loading.
          </p>
          <Primary />
          <Controls />
          <Stories />
        </>
      ),
    },
  },
  tags: ["autodocs"],
  argTypes: {
    value: {
      control: "number",
      description:
        "The current value of the progress bar. When the value is 100, the progress bar turns green.",
      table: {
        category: "Value",
      },
    },
    indeterminate: {
      control: "boolean",
      description:
        "If true, the progress bar will display an indeterminate state.",
      table: {
        category: "State",
      },
    },
    error: {
      control: "boolean",
      description: "If true, the progress bar will display an error state.",
      table: {
        category: "State",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 0,
    indeterminate: false,
    error: false,
  },
};

export const Loading: Story = {
  args: {
    value: 50,
    indeterminate: false,
    error: false,
  },
};

export const Success: Story = {
  args: {
    value: 100,
    indeterminate: false,
    error: false,
  },
};

export const Indeterminate: Story = {
  args: {
    value: 0,
    indeterminate: true,
    error: false,
  },
};

export const Error: Story = {
  args: {
    value: 90,
    indeterminate: false,
    error: true,
  },
};
