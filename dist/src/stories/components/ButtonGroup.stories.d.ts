import type { Meta, StoryObj } from "@storybook/nextjs";
import ButtonGroup from "../../components/ButtonGroup/ButtonGroup";
import "../../styles.scss";
declare const meta: Meta<typeof ButtonGroup>;
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Row: Story;
export declare const Column: Story;
