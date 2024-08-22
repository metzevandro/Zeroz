import type { Meta } from "@storybook/react";
import Icon from "../../components/Icon/Icon";
import "../../styles.scss";
declare const meta: Meta<typeof Icon>;
export default meta;
type DefaultProps = {
    icon: string;
    size: "sm" | "md" | "lg";
    fill: boolean;
};
export declare const Default: import("@storybook/csf").AnnotatedStoryFn<import("@storybook/react").ReactRenderer, DefaultProps>;
