import type { Meta, StoryObj } from "@storybook/react";
import Image from "../../components/Image/Image";
import "../../styles.scss";
declare const meta: Meta<typeof Image>;
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const Skeleton: Story;
