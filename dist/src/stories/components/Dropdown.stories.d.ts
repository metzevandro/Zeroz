import type { Meta } from "@storybook/nextjs";
import Dropdown from "../../components/Dropdown/Dropdown";
import "../../styles.scss";
declare const meta: Meta<typeof Dropdown>;
export default meta;
type DefaultProps = {
    dropdown: boolean;
};
export declare const Default: import("storybook/internal/csf").AnnotatedStoryFn<import("@storybook/react").ReactRenderer, DefaultProps>;
