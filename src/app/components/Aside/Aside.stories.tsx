import React, { useState } from "react";
import type { Meta, StoryFn } from "@storybook/react";
import Aside, { AsideContent, AsideFooter } from "./Aside";
import Icon from "../Icon/Icon";
import "./Aside.scss";
import ButtonGroup from "../ButtonGroup/ButtonGroup";
import Button from "../Button/Button";
import "../../styles.scss";

const meta: Meta = {
  title: "Components/Aside",
  component: Aside,
  parameters: {
    layout: "fullscreen",
    docs: {},
  },
};

export default meta;

type Args = {
  title: string;
  description: string;
};

const Template: StoryFn<Args> = (args: Args) => {
  const [isOpenAside, setIsOpenAside] = useState(false);

  const toggleAside = () => {
    setIsOpenAside(!isOpenAside);
  };

  return (
    <>
      <div style={{ width: "min-content" }}>
        <Button
          size="md"
          variant="primary"
          label="Click here!"
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
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  title: "Title aside here!",
  description: "Aside description",
};
