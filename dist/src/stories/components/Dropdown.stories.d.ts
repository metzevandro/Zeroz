import type { Meta } from "@storybook/react";
import Dropdown from "../../components/Dropdown/Dropdown";
import "../../styles.scss";
declare const meta: Meta<typeof Dropdown>;
export default meta;
type DefaultProps = {
    dropdown: boolean;
};
export declare const Default: import("@storybook/core/csf").AnnotatedStoryFn<import("@storybook/react").ReactRenderer, DefaultProps>;
