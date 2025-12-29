import type { Meta } from "@storybook/nextjs";
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
export declare const Default: import("storybook/internal/csf").AnnotatedStoryFn<import("@storybook/react").ReactRenderer, DefaultProps>;
export declare const WithImage: import("storybook/internal/csf").AnnotatedStoryFn<import("@storybook/react").ReactRenderer, DefaultProps>;
