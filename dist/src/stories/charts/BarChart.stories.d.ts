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
    stacked?: boolean;
    lineStyles: Record<string, {
        color: string;
    }>;
    caption: boolean;
    label: boolean;
    height: number;
    width: number;
    tooltipFormatter?: (data: any) => string;
    XAxisFormatter?: (data: any) => string;
    skeleton: boolean;
};
export declare const Default: import("@storybook/csf").AnnotatedStoryFn<import("@storybook/react").ReactRenderer, DefaultProps>;
export declare const Stacked: import("@storybook/csf").AnnotatedStoryFn<import("@storybook/react").ReactRenderer, DefaultProps>;
export declare const WithLabel: import("@storybook/csf").AnnotatedStoryFn<import("@storybook/react").ReactRenderer, DefaultProps>;
export declare const withCaption: import("@storybook/csf").AnnotatedStoryFn<import("@storybook/react").ReactRenderer, DefaultProps>;
export declare const Skeleton: import("@storybook/csf").AnnotatedStoryFn<import("@storybook/react").ReactRenderer, DefaultProps>;
