// Importando tipos necessários do Storybook
import type { Meta, StoryObj } from "@storybook/react";
import "./css/slot.scss";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardImage,
} from "../app/components/Card/Card";
import Icon from "../app/components/Icon/Icon";

const meta = {
  title: "Components/Card",
  component: Card,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {},
} as Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <>
      <Card>
        <CardImage>
          <img src="https://picsum.photos/800" alt="" />
        </CardImage>
        <CardHeader title="Title" description="Description" />

        <CardContent>
          <div className="slot">
            <Icon icon="refresh" size="md" />
            Content
          </div>
        </CardContent>
        <CardFooter>
          <div className="slot">
            <Icon icon="refresh" size="md" />
            Footer
          </div>
        </CardFooter>
      </Card>
    </>
  ),
};
