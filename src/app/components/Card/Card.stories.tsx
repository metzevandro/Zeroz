import type { Meta, StoryFn } from "@storybook/react";
import "../../styles.scss";
import { Card, CardContent, CardFooter, CardHeader, CardImage } from "./Card";
import Icon from "../Icon/Icon";
import ButtonGroup from "../ButtonGroup/ButtonGroup";

const meta: Meta = {
  title: "Components/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
};

export default meta;

type DefaultProps = {
  title: string;
  description: string;
};

const Template: StoryFn<DefaultProps> = (args) => {
  return (
    <div style={{ width: "320px" }}>
      <Card>
        <CardHeader title={args.title} description={args.description} />
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
Default.args = {
  title: "Title",
  description: "Description",
};

const Template2: StoryFn<DefaultProps> = (args) => {
  return (
    <div style={{ width: "320px" }}>
      <Card>
        <CardImage>
          <img src="https://picsum.photos/200" alt="Card Image" height={200} />
        </CardImage>
        <CardHeader title={args.title} description={args.description} />
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
WithImage.args = {
  title: "Title",
  description: "Description",
};
