import { Meta } from "@storybook/react";
import "../../styles.scss";
declare const meta: Meta;
export default meta;
type Args = {
    columns: "1" | "2 - Symmetric" | "2 - Asymmetric" | "3 - Symmetric";
};
export declare const OneColumn: import("@storybook/core/csf").AnnotatedStoryFn<import("@storybook/react").ReactRenderer, Args>;
export declare const TwoSymmetricColumn: import("@storybook/core/csf").AnnotatedStoryFn<import("@storybook/react").ReactRenderer, Args>;
export declare const TwoAsymmetricColumn: import("@storybook/core/csf").AnnotatedStoryFn<import("@storybook/react").ReactRenderer, Args>;
export declare const ThreeSymmetricColumn: import("@storybook/core/csf").AnnotatedStoryFn<import("@storybook/react").ReactRenderer, Args>;
