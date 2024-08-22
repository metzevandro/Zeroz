import type { Meta, StoryObj } from "@storybook/react";
import "../../styles.scss";
import TableList from "../../components/TableList/TableList";
declare const meta: Meta<typeof TableList>;
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const Small: Story;
