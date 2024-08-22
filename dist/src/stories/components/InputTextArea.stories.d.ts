import type { Meta, StoryObj } from "@storybook/react";
import "../../styles.scss";
import TextArea from "../../components/InputTextArea/InputTextArea";
declare const meta: Meta<typeof TextArea>;
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const Disabled: Story;
export declare const Error: Story;
