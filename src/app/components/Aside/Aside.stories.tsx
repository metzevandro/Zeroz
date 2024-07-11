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
};

export default meta;

type Args = {
  isOpenAside: boolean;
  title: string;
  description: string;
  buttonLabel: string;
};

const Template: StoryFn<Args> = (args: Args) => {
  const [isOpenAside, setIsOpenAside] = useState(args.isOpenAside);

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
        isOpen={isOpenAside}
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
  isOpenAside: false,
  title: "Title aside here!",
  description: "Aside description",
  buttonLabel: "Click here!",
};
