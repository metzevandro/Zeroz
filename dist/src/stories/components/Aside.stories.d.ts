import type { Meta } from "@storybook/nextjs";
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
export declare const Default: import("storybook/internal/csf").AnnotatedStoryFn<import("@storybook/react").ReactRenderer, Args>;
