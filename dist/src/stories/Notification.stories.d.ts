import type { Meta } from "@storybook/react";
import Notification from "../components/Notification/Notification";
import "../styles.scss";
declare const meta: Meta<typeof Notification>;
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
export declare const Inline: import("@storybook/csf").AnnotatedStoryFn<
  import("@storybook/react").ReactRenderer,
  NotificationProps
>;
export declare const Float: import("@storybook/csf").AnnotatedStoryFn<
  import("@storybook/react").ReactRenderer,
  NotificationProps
>;
export declare const primary: import("@storybook/csf").AnnotatedStoryFn<
  import("@storybook/react").ReactRenderer,
  NotificationProps
>;
export declare const Secondary: import("@storybook/csf").AnnotatedStoryFn<
  import("@storybook/react").ReactRenderer,
  NotificationProps
>;
export declare const Success: import("@storybook/csf").AnnotatedStoryFn<
  import("@storybook/react").ReactRenderer,
  NotificationProps
>;
export declare const Warning: import("@storybook/csf").AnnotatedStoryFn<
  import("@storybook/react").ReactRenderer,
  NotificationProps
>;
export declare const Dismissible: import("@storybook/csf").AnnotatedStoryFn<
  import("@storybook/react").ReactRenderer,
  NotificationProps
>;
