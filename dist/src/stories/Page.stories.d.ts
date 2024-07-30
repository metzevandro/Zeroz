import type { Meta, StoryObj } from "@storybook/react";
import Page from "../components/Page/Page";
import "../styles.scss";
declare const meta: Meta<typeof Page>;
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
