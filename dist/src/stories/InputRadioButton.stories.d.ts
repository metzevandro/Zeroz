import type { Meta, StoryObj } from "@storybook/react";
import "../styles.scss";
import InputRadioButton from "../components/InputRadioButton/InputRadioButton";
declare const meta: Meta<typeof InputRadioButton>;
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const Disabled: Story;
export declare const Checked: Story;
