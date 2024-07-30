import type { Meta } from "@storybook/react";
import "../styles.scss";
import Input from "../components/Input/Input";
declare const meta: Meta<typeof Input>;
export default meta;
type Args = {
  label: string;
  placeholder: string;
  disabled: boolean;
  typeIcon: string;
  error: boolean;
  textError: string;
  readOnly: boolean;
  fillIcon: boolean;
  value: string;
};
export declare const Default: import("@storybook/csf").AnnotatedStoryFn<
  import("@storybook/react").ReactRenderer,
  Args
>;
export declare const WithIcon: import("@storybook/csf").AnnotatedStoryFn<
  import("@storybook/react").ReactRenderer,
  Args
>;
export declare const ReadOnly: import("@storybook/csf").AnnotatedStoryFn<
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
