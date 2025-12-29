import type { Meta } from "@storybook/nextjs";
import { BreadcrumbItem } from "../../components/Breadcrumb/Breadcrumb";
import "../../styles.scss";
declare const meta: Meta;
export default meta;
type Args = {
    items: BreadcrumbItem[];
};
export declare const Default: import("storybook/internal/csf").AnnotatedStoryFn<import("@storybook/react").ReactRenderer, Args>;
