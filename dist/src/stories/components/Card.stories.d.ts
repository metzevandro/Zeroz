import type { Meta } from "@storybook/react";
import "../../styles.scss";
import React from "react";
declare const meta: Meta;
export default meta;
type DefaultProps = {
    title: string;
    description: string;
    header?: React.ReactNode;
    content?: React.ReactNode;
    footer?: React.ReactNode;
    image?: React.ReactNode;
};
export declare const Default: import("@storybook/core/csf").AnnotatedStoryFn<import("@storybook/react").ReactRenderer, DefaultProps>;
export declare const WithImage: import("@storybook/core/csf").AnnotatedStoryFn<import("@storybook/react").ReactRenderer, DefaultProps>;
