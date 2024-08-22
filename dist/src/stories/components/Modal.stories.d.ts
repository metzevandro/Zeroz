import React from "react";
import { Meta } from "@storybook/react";
import Modal from "../../components/Modal/Modal";
import "../../styles.scss";
declare const meta: Meta<typeof Modal>;
export default meta;
type Args = {
    title: string;
    description: string;
    dismissible: boolean;
    content: React.ReactNode;
    footer: React.ReactNode;
};
export declare const Default: import("@storybook/csf").AnnotatedStoryFn<import("@storybook/react").ReactRenderer, Args>;
export declare const Dismissible: import("@storybook/csf").AnnotatedStoryFn<import("@storybook/react").ReactRenderer, Args>;
