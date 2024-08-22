import type { Meta, StoryObj } from "@storybook/react";
import InputSearch from "../../components/InputSearch/InputSearch";
import "../../styles.scss";
declare const meta: Meta<typeof InputSearch>;
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const Disabled: Story;
