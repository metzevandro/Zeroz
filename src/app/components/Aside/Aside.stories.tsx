import React, { useState } from "react";
import type { Meta, StoryFn } from "@storybook/react";
import Aside, { AsideContent, AsideFooter } from "./Aside";
import Icon from "../Icon/Icon";
import "./Aside.scss";
import ButtonGroup from "../ButtonGroup/ButtonGroup";
import Button from "../Button/Button";
import "../../styles.scss";
import { Title, Subtitle, Primary, Controls, Stories } from "@storybook/blocks";

const meta: Meta = {
  title: "Components/Aside",
  component: Aside,
  parameters: {
    layout: "fullscreen",
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle>Component</Subtitle>
          <p>
            The <strong>Aside</strong> is an overlay component designed to
            display settings or additional content that complements the main
            information on the screen.
          </p>
          <Primary />
          <Controls />
          <Stories />
        </>
      ),
    },
  },
  tags: ["autodocs"],
  argTypes: {
    buttonLabel: {
      name: "Button Label",
      description:
        "The label of the button that opens/closes the Aside component.",
      control: "text",
      table: {
        category: "Data",
        type: { summary: "string" },
      },
    },
    isOpen: {
      name: "Is Open",
      description: "Indicates whether the Aside component is open or closed.",
      control: "boolean",
      table: {
        category: "State",
        type: { summary: "boolean" },
      },
    },
    toggleAside: {
      name: "Toggle Aside",
      description: "Action to open and close the aside component.",
      action: "toggled",
      table: {
        category: "Events",
        type: {
          summary: "(event: React.MouseEvent<HTMLButtonElement>) => void",
        },
      },
    },
    title: {
      name: "Title",
      description: "The title displayed in the Aside component.",
      control: "text",
      table: {
        category: "Data",
        type: { summary: "string" },
      },
    },
    description: {
      name: "Description",
      description: "The description displayed in the Aside component.",
      control: "text",
      table: {
        category: "Data",
        type: { summary: "string" },
      },
    },
    content: {
      name: "Content",
      description: "Content of the aside component.",
      table: {
        category: "Content",
        type: { summary: "React.ReactNode" },
      },
    },
    footer: {
      name: "Footer",
      description: "Footer of the aside component.",
      table: {
        category: "Content",
        type: { summary: "React.ReactNode" },
      },
    },
  },
};

export default meta;

type Args = {
  isOpen: boolean;
  title: string;
  description: string;
  buttonLabel: string;
};

const Template: StoryFn<Args> = (args: Args) => {
  const [isOpenAside, setIsOpenAside] = useState(args.isOpen);

  const toggleAside = () => {
    setIsOpenAside(!isOpenAside);
  };

  return (
    <div style={{ height: "500px", padding: "var(--s-spacing-medium)" }}>
      <div style={{ width: "min-content" }}>
        <Button
          size="md"
          variant="primary"
          label={args.buttonLabel}
          onClick={toggleAside}
        />
      </div>
      <Aside
        isOpen={isOpenAside || args.isOpen}
        toggleAside={toggleAside}
        title={args.title}
        description={args.description}
        content={
          <AsideContent>
            <div className="slot">
              <Icon icon="refresh" size="md" />
              Slot Content
            </div>
          </AsideContent>
        }
        footer={
          <AsideFooter>
            <div style={{ width: "min-content" }}>
              <ButtonGroup
                direction="row"
                variantFirstButton="primary"
                variantSecondButton="secondary"
                contentFirstButton="Button"
                contentSecondButton="Button"
              />
            </div>
          </AsideFooter>
        }
      />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  title: "Title aside here!",
  description: "Aside description",
  isOpen: false,
  buttonLabel: "Click here!",
};
