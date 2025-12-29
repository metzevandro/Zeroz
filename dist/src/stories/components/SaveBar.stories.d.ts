import { Meta, StoryObj } from "@storybook/nextjs";
import "../../styles.scss";
import SaveBar from "../../components/SaveBar/SaveBar";
declare const meta: Meta<typeof SaveBar>;
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
