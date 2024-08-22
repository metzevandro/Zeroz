import type { Meta, StoryFn } from "@storybook/react";
import Notification from "../../components/Notification/Notification";
import "../../styles.scss";
import { Title, Subtitle, Primary, Controls, Stories } from "@storybook/blocks";
import React from "react";

const meta: Meta<typeof Notification> = {
  title: "Components/Notification",
  component: Notification,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle>Component</Subtitle>
          <p>
            The <strong>Notifications</strong> are messages that share info with
            users. There are two types: toast notifications, which pop up
            briefly, and inline notifications, which appear in the same spot.
          </p>
          <Primary />
          <Controls />
          <Stories />
        </>
      ),
    },
  },
  argTypes: {
    description: {
      control: "text",
      description: "The text content of the notification.",
      table: {
        category: "Content",
      },
    },
    icon: {
      control: "text",
      description: "The icon displayed in the notification.",
      table: {
        category: "Appearance",
      },
    },
    title: {
      control: "text",
      description: "The title of the notification.",
      table: {
        category: "Content",
      },
    },
    type: {
      control: "radio",
      options: ["inline", "float"],
      description:
        "The type of notification, determining its position and style.",
      table: {
        category: "Appearance",
      },
    },
    variant: {
      control: "radio",
      options: ["primary", "secondary", "success", "warning"],
      description:
        "The variant of the notification, determining its color scheme.",
      table: {
        category: "Appearance",
      },
    },
    dismissible: {
      control: "boolean",
      description: "If true, the notification can be dismissed by the user.",
      table: {
        category: "State",
      },
    },
    buttonLabel: {
      control: "text",
      description: "Label for the action button in the notification.",
      table: {
        category: "Actions",
      },
    },
    disableButton: {
      control: "boolean",
      description: "If true, the action button is disabled.",
      table: {
        category: "Actions",
      },
    },
    withAction: {
      control: "boolean",
      description:
        "If true, an action button is displayed in the notification.",
      table: {
        category: "Actions",
      },
    },
    isOpen: {
      control: "boolean",
      description: "If true, the notification is displayed.",
      table: {
        category: "State",
      },
    },
  },
};

export default meta;

type NotificationProps = {
  description: string;
  icon?: string;
  title: string;
  type: "inline" | "float";
  variant: "primary" | "secondary" | "success" | "warning";
  dismissible?: boolean;
  buttonLabel?: string;
  disableButton?: boolean;
  withAction?: boolean;
  isOpen?: boolean;
  height?: string;
};

const Template: StoryFn<NotificationProps> = (args) => {
  return (
    <div style={{ height: "100vh", padding: "var(--s-spacing-small)" }}>
      <Notification {...args} />
    </div>
  );
};

export const Inline = Template.bind({});
Inline.args = {
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  icon: "ac_unit",
  title: "Title",
  type: "inline",
  variant: "primary",
  dismissible: false,
  buttonLabel: "Button",
  disableButton: false,
  withAction: true,
  isOpen: true,
};

export const Float = Template.bind({});
Float.args = {
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  icon: "ac_unit",
  title: "Title",
  type: "float",
  variant: "primary",
  dismissible: false,
  buttonLabel: "Button",
  disableButton: false,
  withAction: true,
  isOpen: true,
};

export const primary = Template.bind({});
primary.args = {
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  icon: "ac_unit",
  title: "Title",
  type: "inline",
  variant: "primary",
  dismissible: false,
  buttonLabel: "Button",
  disableButton: false,
  withAction: false,
  isOpen: true,
};

export const Secondary = Template.bind({});
Secondary.args = {
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  icon: "ac_unit",
  title: "Title",
  type: "inline",
  variant: "secondary",
  dismissible: false,
  buttonLabel: "Button",
  disableButton: false,
  withAction: false,
  isOpen: true,
};

export const Success = Template.bind({});
Success.args = {
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  icon: "ac_unit",
  title: "Title",
  type: "inline",
  variant: "success",
  dismissible: false,
  buttonLabel: "Button",
  disableButton: false,
  withAction: false,
  isOpen: true,
};

export const Warning = Template.bind({});
Warning.args = {
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  icon: "ac_unit",
  title: "Title",
  type: "inline",
  variant: "warning",
  dismissible: false,
  buttonLabel: "Button",
  disableButton: false,
  withAction: false,
  isOpen: true,
};

export const Dismissible = Template.bind({});
Dismissible.args = {
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  icon: "ac_unit",
  title: "Title",
  type: "inline",
  variant: "primary",
  dismissible: true,
  buttonLabel: "Button",
  disableButton: true,
  withAction: false,
  isOpen: true,
};
