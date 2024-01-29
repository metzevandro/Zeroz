// Importando tipos necessários do Storybook
import type { Meta, Story } from "@storybook/react";
import "./css/main.scss";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardImage,
} from "../app/components/Card/Card";
import Icon from "../app/components/Icon/Icon";
import ButtonGroup from "../app/components/ButtonGroup/ButtonGroup";

const meta: Meta = {
  title: "Components/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  args: {
    toggle: false,
  },
  tags: ["autodocs"],
};

export default meta;

type DefaultProps = {};

const Template: Story<DefaultProps> = (args) => {
  return (
    <div style={{ width: "320px" }}>
      <Card>
        <CardHeader title="Card Title" description="Card Description" />
        <CardContent>
          <div className="slot">
            <Icon icon="refresh" size="md" />
            Slot Content
          </div>
        </CardContent>
        <CardFooter>
          <div style={{ width: "min-content" }}>
            <ButtonGroup
              direction="row"
              variantFirstButton="primary"
              variantSecondButton="secondary"
              contentFirstButton="Button"
              contentSecondButton="Button"
            />
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {};

const Template2: Story<DefaultProps> = (args) => {
  return (
    <div style={{ width: "320px" }}>
      <Card>
        <CardImage>
          <img src="https://picsum.photos/200" alt="Card Image" height={200} />
        </CardImage>
        <CardHeader title="Card Title" description="Card Description" />
        <CardContent>
          <div className="slot">
            <Icon icon="refresh" size="md" />
            Slot Content
          </div>
        </CardContent>
        <CardFooter>
          <div style={{ width: "min-content" }}>
            <ButtonGroup
              direction="row"
              variantFirstButton="primary"
              variantSecondButton="secondary"
              contentFirstButton="Button"
              contentSecondButton="Button"
            />
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export const WithImage = Template2.bind({});
WithImage.args = {};
