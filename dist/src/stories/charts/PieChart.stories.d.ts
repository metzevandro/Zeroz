import type { Meta } from "@storybook/react";
import "../../styles.scss";
declare const meta: Meta;
export default meta;
type DefaultProps = {
    data: any[];
    label: string;
    labelList: boolean;
    legend: boolean;
    innerRadius: number;
    outerRadius: number;
    type: "donut" | "pie";
};
export declare const Pie: import("@storybook/csf").AnnotatedStoryFn<import("@storybook/react").ReactRenderer, DefaultProps>;
export declare const Donut: import("@storybook/csf").AnnotatedStoryFn<import("@storybook/react").ReactRenderer, DefaultProps>;
export declare const withLegend: import("@storybook/csf").AnnotatedStoryFn<import("@storybook/react").ReactRenderer, DefaultProps>;
