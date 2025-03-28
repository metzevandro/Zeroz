import type { Meta } from "@storybook/react";
import "../../styles.scss";
declare const meta: Meta;
export default meta;
type Args = {
    size: "sm" | "md" | "lg";
    src: string;
    letter: string;
    skeleton: boolean;
};
export declare const Default: import("@storybook/core/csf").AnnotatedStoryFn<import("@storybook/react").ReactRenderer, Args>;
export declare const withImage: import("@storybook/core/csf").AnnotatedStoryFn<import("@storybook/react").ReactRenderer, Args>;
export declare const withLetter: import("@storybook/core/csf").AnnotatedStoryFn<import("@storybook/react").ReactRenderer, Args>;
export declare const Skeleton: import("@storybook/core/csf").AnnotatedStoryFn<import("@storybook/react").ReactRenderer, Args>;
