import type { Meta } from "@storybook/react";
import "../../styles.scss";
import "../colors/Colors.scss";
declare const meta: Meta;
export default meta;
type DefaultProps = {
    value: string;
    label: string;
    disabled: boolean;
    skeleton: boolean;
    onChange: (value: string) => void;
};
export declare const Default: import("@storybook/core/csf").AnnotatedStoryFn<import("@storybook/react").ReactRenderer, DefaultProps>;
