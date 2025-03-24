import type { Meta } from "@storybook/react";
import "../../styles.scss";
declare const meta: Meta;
export default meta;
type DefaultProps = {
  skeleton: boolean;
  data: string[][];
  columns: string[];
  rowsPerPage: number;
};
export declare const Default: import("@storybook/csf").AnnotatedStoryFn<
  import("@storybook/react").ReactRenderer,
  DefaultProps
>;
