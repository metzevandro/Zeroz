import type { Meta } from "@storybook/react";
import "../styles.scss";
import DataPicker from "../components/DataPicker/DataPicker";
declare const meta: Meta<typeof DataPicker>;
export default meta;
type Args = {
    date: string;
    label: string;
    placeholder: string;
    disabled: boolean;
    onDateChange: (date: Date) => void;
};
export declare const Default: import("@storybook/csf").AnnotatedStoryFn<import("@storybook/react").ReactRenderer, Args>;
export declare const Disable: import("@storybook/csf").AnnotatedStoryFn<import("@storybook/react").ReactRenderer, Args>;
