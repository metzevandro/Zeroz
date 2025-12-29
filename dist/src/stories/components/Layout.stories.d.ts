import { Meta } from "@storybook/nextjs";
import "../../styles.scss";
declare const meta: Meta;
export default meta;
type Args = {
    columns: "1" | "2 - Symmetric" | "2 - Asymmetric" | "3 - Symmetric";
};
export declare const OneColumn: import("storybook/internal/csf").AnnotatedStoryFn<import("@storybook/react").ReactRenderer, Args>;
export declare const TwoSymmetricColumn: import("storybook/internal/csf").AnnotatedStoryFn<import("@storybook/react").ReactRenderer, Args>;
export declare const TwoAsymmetricColumn: import("storybook/internal/csf").AnnotatedStoryFn<import("@storybook/react").ReactRenderer, Args>;
export declare const ThreeSymmetricColumn: import("storybook/internal/csf").AnnotatedStoryFn<import("@storybook/react").ReactRenderer, Args>;
