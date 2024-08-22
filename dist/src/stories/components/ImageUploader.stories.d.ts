import type { Meta, StoryObj } from "@storybook/react";
import "../../styles.scss";
import ImageUploader from "../../components/ImageUploader/ImageUploader";
declare const meta: Meta<typeof ImageUploader>;
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const Multiple: Story;
export declare const Disabled: Story;
