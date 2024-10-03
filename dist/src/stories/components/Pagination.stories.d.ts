import type { Meta, StoryObj } from "@storybook/react";
import "../../styles.scss";
import Pagination from "../../components/Pagination/Pagination";
declare const meta: Meta<typeof Pagination>;
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const Disable: Story;
export declare const LeftLabel: Story;
export declare const CenterLabel: Story;