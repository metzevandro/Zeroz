import type { Meta, StoryObj } from "@storybook/nextjs";
import "../../styles.scss";
import Link from "../../components/Link/Link";
declare const meta: Meta<typeof Link>;
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const Disabled: Story;
