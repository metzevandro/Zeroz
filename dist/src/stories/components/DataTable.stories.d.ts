import React from "react";
import type { Meta } from "@storybook/nextjs";
import "../../styles.scss";
declare const meta: Meta;
export default meta;
type DefaultProps = {
    skeleton: boolean;
    data: any[];
    columns: string[];
    rowsPerPage: number;
    withCheckbox?: boolean;
    headerSelectedChildren?: (handleModal: (title?: string, message?: string) => void) => React.ReactNode;
    textRowsSelected?: string;
};
export declare const Default: import("storybook/internal/csf").AnnotatedStoryFn<import("@storybook/react").ReactRenderer, DefaultProps>;
export declare const withCheckbox: import("storybook/internal/csf").AnnotatedStoryFn<import("@storybook/react").ReactRenderer, DefaultProps>;
export declare const Skeleton: import("storybook/internal/csf").AnnotatedStoryFn<import("@storybook/react").ReactRenderer, DefaultProps>;
