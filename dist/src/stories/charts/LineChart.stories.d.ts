import type { Meta } from "@storybook/react";
import "../../styles.scss";
declare const meta: Meta;
export default meta;
type DefaultProps = {
    data: {
        month: string;
        desktop: number;
        mobile: number;
    }[];
    dots: boolean;
    caption: boolean;
    type: "basis" | "basisClosed" | "basisOpen" | "bumpX" | "bumpY" | "bump" | "linear" | "linearClosed" | "natural" | "monotoneX" | "monotoneY" | "monotone" | "step" | "stepBefore" | "stepAfter";
    label: boolean;
    lineStyles: Record<string, {
        color: string;
    }>;
    tooltipFormatter?: (data: any) => string;
    XAxisFormatter?: (data: any) => string;
    height: number;
    width: number;
    skeleton: boolean;
};
export declare const Default: import("@storybook/csf").AnnotatedStoryFn<import("@storybook/react").ReactRenderer, DefaultProps>;
export declare const withDots: import("@storybook/csf").AnnotatedStoryFn<import("@storybook/react").ReactRenderer, DefaultProps>;
export declare const withLabel: import("@storybook/csf").AnnotatedStoryFn<import("@storybook/react").ReactRenderer, DefaultProps>;
export declare const Skeleton: import("@storybook/csf").AnnotatedStoryFn<import("@storybook/react").ReactRenderer, DefaultProps>;
