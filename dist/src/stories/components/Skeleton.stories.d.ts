import type { Meta, StoryObj } from "@storybook/react";
import Skeleton from "../../components/Skeleton/Skeleton";
import "../../styles.scss";
declare const meta: Meta<typeof Skeleton>;
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const Circle: Story;
