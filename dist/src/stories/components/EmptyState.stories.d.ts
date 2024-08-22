import { Meta } from "@storybook/react";
import "../../styles.scss";
declare const meta: Meta;
export default meta;
type DefaultProps = {
    title: string;
    description: string;
    icon: string;
    buttonContentPrimary?: string;
    buttonContentSecondary?: string;
    onClickActionPrimary?: () => void;
    onClickActionSecondary?: () => void;
};
export declare const Default: import("@storybook/csf").AnnotatedStoryFn<import("@storybook/react").ReactRenderer, DefaultProps>;
