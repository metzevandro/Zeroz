import { Meta } from "@storybook/react";
import ProgressIndicator from "../components/ProgressIndicator/ProgressIndicator";
import "../styles.scss";
declare const meta: Meta<typeof ProgressIndicator>;
export default meta;
type Args = {
  direction: "row" | "column";
  state: "default" | "current" | "completed" | "error" | "disable";
  step: string;
  description: string;
  widthFull: boolean;
};
export declare const Default: import("@storybook/csf").AnnotatedStoryFn<
  import("@storybook/react").ReactRenderer,
  Args
>;
export declare const WidthFull: import("@storybook/csf").AnnotatedStoryFn<
  import("@storybook/react").ReactRenderer,
  Args
>;
