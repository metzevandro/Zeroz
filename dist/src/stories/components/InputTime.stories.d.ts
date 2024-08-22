import type { Meta, StoryObj } from "@storybook/react";
import "../../styles.scss";
import InputTime from "../../components/InputTime/InputTime";
declare const meta: Meta<typeof InputTime>;
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const Disabled: Story;
export declare const Error: Story;
