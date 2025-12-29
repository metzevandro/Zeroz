import type { Meta } from "@storybook/nextjs";
import "../../styles.scss";
declare const meta: Meta;
export default meta;
type DefaultProps = {
    skeleton: boolean;
    username: string;
    avatar_src: string;
    letter: string;
};
export declare const Default: import("storybook/internal/csf").AnnotatedStoryFn<import("@storybook/react").ReactRenderer, DefaultProps>;
export declare const Loading: import("storybook/internal/csf").AnnotatedStoryFn<import("@storybook/react").ReactRenderer, DefaultProps>;
