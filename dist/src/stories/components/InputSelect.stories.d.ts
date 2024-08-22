import type { Meta, StoryObj } from "@storybook/react";
import InputSelect from "../../components/InputSelect/InputSelect";
import "../../styles.scss";
declare const meta: Meta<typeof InputSelect>;
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const Error: Story;
export declare const Disabled: Story;
