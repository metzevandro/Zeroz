import type { Meta } from "@storybook/react";
import "../../styles.scss";
declare const meta: Meta;
export default meta;
interface CheckboxProps {
    modelValue?: any;
    value?: any;
    label?: string;
    id?: string;
    name?: string;
    required?: boolean;
    indeterminate?: boolean;
    noEvents?: boolean;
    disabled?: boolean;
    onUpdate?: (val: any) => void;
}
export declare const Default: import("@storybook/core/csf").AnnotatedStoryFn<import("@storybook/react").ReactRenderer, CheckboxProps>;
export declare const Disabled: import("@storybook/core/csf").AnnotatedStoryFn<import("@storybook/react").ReactRenderer, CheckboxProps>;
export declare const Indeterminate: import("@storybook/core/csf").AnnotatedStoryFn<import("@storybook/react").ReactRenderer, CheckboxProps>;
export declare const NoEvents: import("@storybook/core/csf").AnnotatedStoryFn<import("@storybook/react").ReactRenderer, CheckboxProps>;
