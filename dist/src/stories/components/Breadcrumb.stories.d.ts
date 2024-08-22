import type { Meta } from "@storybook/react";
import { BreadcrumbItem } from "../../components/Breadcrumb/Breadcrumb";
import "../../styles.scss";
declare const meta: Meta;
export default meta;
type Args = {
    items: BreadcrumbItem[];
};
export declare const Default: import("@storybook/csf").AnnotatedStoryFn<import("@storybook/react").ReactRenderer, Args>;
