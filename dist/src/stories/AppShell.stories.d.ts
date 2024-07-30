import type { Meta } from "@storybook/react";
import "../styles.scss";
declare const meta: Meta;
export default meta;
type DefaultProps = {
    username: string;
    pageName: string;
    description: string;
    sidebarItemIcon: string;
    buttonContentPrimary: string;
    buttonContentSecondary: string;
    withActionPrimary: boolean;
    withActionSecondary: boolean;
    withBackButton: boolean;
};
export declare const Default: import("@storybook/csf").AnnotatedStoryFn<import("@storybook/react").ReactRenderer, DefaultProps>;
