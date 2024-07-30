import type { Meta } from "@storybook/react";
import "../styles.scss";
declare const meta: Meta;
export default meta;
type DefaultProps = {
  titleSidebar: string;
  brand: string;
  brandSize: "sm" | "md" | "lg";
};
export declare const Default: import("@storybook/csf").AnnotatedStoryFn<
  import("@storybook/react").ReactRenderer,
  DefaultProps
>;
