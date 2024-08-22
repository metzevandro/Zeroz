import type { Meta } from "@storybook/react";
import "../../styles.scss";
declare const meta: Meta;
export default meta;
type DefaultProps = {
    skeleton: boolean;
    username: string;
    avatar_src: string;
    letter: string;
};
export declare const Default: import("@storybook/csf").AnnotatedStoryFn<import("@storybook/react").ReactRenderer, DefaultProps>;
export declare const Loading: import("@storybook/csf").AnnotatedStoryFn<import("@storybook/react").ReactRenderer, DefaultProps>;
