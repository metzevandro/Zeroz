import type { Meta, StoryObj } from "@storybook/react";
import "../styles.scss";
import FileUploader from "../components/FileUploader/FileUploader";
declare const meta: Meta<typeof FileUploader>;
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const Disable: Story;
