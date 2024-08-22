import DescriptionList from "../../components/DescriptionList/DescriptionList";
import type { Meta } from "@storybook/react";
import "../../styles.scss";
declare const meta: Meta<typeof DescriptionList>;
export default meta;
type DefaultProps = {
    direction: "row" | "column";
    items: {
        title: string;
        description: string;
    }[];
};
export declare const Row: import("@storybook/csf").AnnotatedStoryFn<import("@storybook/react").ReactRenderer, DefaultProps>;
export declare const Column: import("@storybook/csf").AnnotatedStoryFn<import("@storybook/react").ReactRenderer, DefaultProps>;
