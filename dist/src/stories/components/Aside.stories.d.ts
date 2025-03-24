import type { Meta } from "@storybook/react";
import "../../components/Aside/Aside.scss";
import "../../styles.scss";
declare const meta: Meta;
export default meta;
type Args = {
    isOpen: boolean;
    title: string;
    description: string;
    buttonLabel: string;
};
export declare const Default: import("@storybook/core/csf").AnnotatedStoryFn<import("@storybook/react").ReactRenderer, Args>;
