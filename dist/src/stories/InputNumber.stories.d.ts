import { Meta } from "@storybook/react";
import "../styles.scss";
declare const meta: Meta;
export default meta;
type Args = {
  label: string;
  placeholder: string;
  disabled: boolean;
  error: boolean;
  textError: string;
  max: number;
  min: number;
  initialValue: number;
};
export declare const Default: import("@storybook/csf").AnnotatedStoryFn<
  import("@storybook/react").ReactRenderer,
  Args
>;
export declare const Disabled: import("@storybook/csf").AnnotatedStoryFn<
  import("@storybook/react").ReactRenderer,
  Args
>;
export declare const Error: import("@storybook/csf").AnnotatedStoryFn<
  import("@storybook/react").ReactRenderer,
  Args
>;
