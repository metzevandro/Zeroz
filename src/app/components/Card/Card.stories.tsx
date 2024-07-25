import type { Meta, StoryFn } from "@storybook/react";
import "../../styles.scss";
import { Card, CardContent, CardFooter, CardHeader, CardImage } from "./Card";
import Icon from "../Icon/Icon";
import ButtonGroup from "../ButtonGroup/ButtonGroup";
import { Title, Subtitle, Primary, Controls, Stories } from "@storybook/blocks";
import React from "react";

const meta: Meta = {
  title: "Components/Card",
  component: Card,
  parameters: {
    layout: "centered",
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle>Component</Subtitle>
          <p>
            The <strong>Cards</strong> are used to group similar content and
            tasks. They help you read and do things.
          </p>
          <Primary />
          <Controls />
          <Stories />
        </>
      ),
    },
  },
  argTypes: {
    image: {
      description: "The image section of the card, accepts a React node.",
      control: { type: "object" },
      table: {
        category: "Content",
      },
    },
    header: {
      description: "The header section of the card, accepts a React node.",
      control: { type: "object" },
      table: {
        category: "Content",
      },
    },
    title: {
      description: "The title to be displayed in the card header.",
      control: { type: "text" },
      defaultValue: "Title",
      table: {
        category: "Content",
      },
    },
    description: {
      description: "The description to be displayed in the card header.",
      control: { type: "text" },
      defaultValue: "Description",
      table: {
        category: "Content",
      },
    },
    content: {
      description: "The content section of the card, accepts a React node.",
      control: { type: "object" },
      table: {
        category: "Content",
      },
    },
    footer: {
      description: "The footer section of the card, accepts a React node.",
      control: { type: "object" },
      table: {
        category: "Content",
      },
    },
  },
};

export default meta;

type DefaultProps = {
  title: string;
  description: string;
  header?: React.ReactNode;
  content?: React.ReactNode;
  footer?: React.ReactNode;
  image?: React.ReactNode;
};

const Template: StoryFn<DefaultProps> = (args) => {
  return (
    <div style={{ width: "320px" }}>
      <Card
        header={
          args.header ?? (
            <CardHeader title={args.title} description={args.description} />
          )
        }
        content={
          args.content ?? (
            <CardContent>
              <div className="slot">
                <Icon icon="refresh" size="md" />
                Slot Content
              </div>
            </CardContent>
          )
        }
        footer={
          args.footer ?? (
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
          )
        }
      />
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
      <Card
        image={
          args.image ?? (
            <CardImage>
              <img
                src="https://picsum.photos/1200"
                alt="Card Image"
                height={200}
              />
            </CardImage>
          )
        }
        header={
          args.header ?? (
            <CardHeader title={args.title} description={args.description} />
          )
        }
        content={
          args.content ?? (
            <CardContent>
              <div className="slot">
                <Icon icon="refresh" size="md" />
                Slot Content
              </div>
            </CardContent>
          )
        }
        footer={
          args.footer ?? (
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
          )
        }
      />
    </div>
  );
};

export const WithImage = Template2.bind({});
WithImage.args = {
  title: "Title",
  description: "Description",
};
